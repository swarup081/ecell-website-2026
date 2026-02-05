/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Rocket, Target, Lightbulb, TrendingUp, Users } from "lucide-react";

interface TimelineItem {
    id: number;
    title: string;
    icon: React.ElementType;
    desc: string;
    color: string;
    date: string;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Orientation",
    icon: Users,
    desc: "Welcoming the new batches and introducing the entrepreneurial world of NIT Silchar.",
    color: "#3b82f6", // blue-500
    date: "Phase 01"
  },
  {
    id: 2,
    title: "EIC Challenge",
    icon: Target,
    desc: "The annual Entrepreneurship & Innovation Challenge that tests grit and creativity.",
    color: "#a855f7", // purple-500
    date: "Phase 02"
  },
  {
    id: 3,
    title: "Srijan Summit",
    icon: Lightbulb,
    desc: "Our flagship summit featuring speakers, workshops, and networking with industry titans.",
    color: "#f59e0b", // amber-500
    date: "Phase 03"
  },
  {
    id: 4,
    title: "Empressario",
    icon: Rocket,
    desc: "The module where startups pitch, compete, and gain visibility within the regional ecosystem.",
    color: "#10b981", // emerald-500
    date: "Phase 04"
  },
  {
    id: 5,
    title: "Incubation",
    icon: TrendingUp,
    desc: "Full support for pre-selected startups through IIC to scale their business models.",
    color: "#f43f5e", // rose-500
    date: "Phase 05"
  },
];

const TimelineNode = ({ item, index, isEven }: { item: TimelineItem; index: number; isEven: boolean }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1, type: "spring", stiffness: 50 }}
            className={`relative flex items-center gap-8 md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
        >
            {/* Content Card */}
            <div className={`flex-1 ${isEven ? "md:text-right md:pr-16" : "md:text-left md:pl-16"} pl-16 md:pl-0`}>
                <div
                   ref={cardRef}
                   onMouseMove={handleMouseMove}
                   className="group relative perspective-1000"
                >
                    {/* Glass Card */}
                    <motion.div
                       whileHover={{ scale: 1.02, rotateX: isEven ? 2 : -2, rotateY: isEven ? 2 : -2 }}
                       className="glass relative overflow-hidden rounded-3xl border border-white/5 bg-[#0d1117]/40 p-8 transition-all duration-500 hover:border-blue-500/30 hover:bg-[#0d1117]/60"
                    >
                        {/* Spotlight Effect */}
                        <div
                           className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                           style={{
                               background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
                           }}
                        />

                        {/* Decorative Accent */}
                        <div className={`absolute top-0 h-[2px] w-12 ${isEven ? "right-8" : "left-8"}`} style={{ backgroundColor: item.color }} />

                        <div className={`mb-3 flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-widest text-gray-500 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                            <span>{item.date}</span>
                            <div className="h-[1px] w-8 bg-white/10" />
                        </div>

                        <h3 className="mb-3 text-2xl font-black text-white group-hover:text-blue-400 transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-400 font-light group-hover:text-gray-300 transition-colors">
                            {item.desc}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Central Node */}
            <div className="absolute left-[20px] md:relative md:left-auto flex-shrink-0 z-30">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#020617] border-[3px] border-[#020617] ring-1 ring-white/10 shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-all duration-500 hover:scale-125 hover:ring-white/30">
                     <motion.div
                        className="absolute inset-0 rounded-full opacity-30 blur-md"
                        style={{ backgroundColor: item.color }}
                        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity }}
                     />
                     <item.icon size={20} style={{ color: item.color }} className="relative z-10" />
                </div>
            </div>

            {/* Spacer */}
            <div className="hidden flex-1 md:block" />
        </motion.div>
    );
}

const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Dynamic beam gradient based on scroll
  const beamColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#3b82f6", "#a855f7", "#ec4899"]);

  return (
    <section ref={containerRef} className="relative bg-[#020617] py-32 overflow-hidden">

      {/* Background Grid */}
      <div
         className="absolute inset-0 pointer-events-none opacity-[0.03]"
         style={{
             backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
             backgroundSize: "60px 60px"
         }}
      />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="mb-24 text-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-blue-400 mb-6"
            >
                <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                Strategic Pathway
            </motion.div>
            <h2 className="mb-6 text-4xl font-black tracking-tighter text-white uppercase md:text-6xl">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Roadmap</span>
            </h2>
            <p className="mx-auto max-w-xl text-gray-400 font-light">
                A structured journey designed to transform raw potential into market-ready innovation.
            </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
            {/* The "Laser Beam" Line */}
            <div className="absolute top-0 bottom-0 left-[27px] w-[1px] bg-white/5 md:left-1/2 -translate-x-1/2" />

            <motion.div
                style={{ scaleY, originY: 0, backgroundColor: beamColor }}
                className="absolute top-0 bottom-0 left-[27px] w-[2px] shadow-[0_0_15px_currentColor] md:left-1/2 -translate-x-1/2 z-0"
            />

            <div className="relative z-10 flex flex-col gap-20">
                {timelineData.map((item, i) => (
                    <TimelineNode key={item.id} item={item} index={i} isEven={i % 2 === 0} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
