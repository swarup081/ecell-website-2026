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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex items-center gap-12 md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
        >
            {/* Content Card */}
            <div className={`flex-1 ${isEven ? "md:text-right md:pr-20" : "md:text-left md:pl-20"} pl-20 md:pl-0`}>
                <div
                   ref={cardRef}
                   onMouseMove={handleMouseMove}
                   className="group relative"
                >
                    {/* Data Block Card Style */}
                    <div className="glass relative overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] p-1 transition-all duration-300 hover:border-white/20">
                        {/* Inner Container */}
                        <div className="relative rounded-lg bg-[#0a0d14] p-6 h-full">
                             {/* Spotlight */}
                            <div
                                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 rounded-lg"
                                style={{
                                    background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.05), transparent 40%)`,
                                }}
                            />

                            {/* Color Accent Line */}
                            <div className={`absolute top-0 bottom-0 w-1 ${isEven ? "right-0" : "left-0"}`} style={{ backgroundColor: item.color }} />

                            <div className={`mb-2 text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500`}>
                                {item.date}
                            </div>

                            <h3 className="mb-2 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-400">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Central Node */}
            <div className="absolute left-[18px] md:relative md:left-auto flex-shrink-0 z-30">
                <div className="relative flex h-4 w-4 items-center justify-center">
                     {/* Pulsing Dot */}
                     <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: item.color }}
                     />
                     <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: item.color }}
                     />
                     {/* Connector to Card */}
                     <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        style={{ originX: isEven ? 1 : 0 }}
                        className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[1px] w-20 bg-gradient-to-r from-transparent to-white/20 ${isEven ? "right-full" : "left-full"}`}
                     >
                         <div className={`absolute top-1/2 -translate-y-1/2 h-1 w-1 rounded-full bg-white/50 ${isEven ? "left-0" : "right-0"}`} />
                     </motion.div>
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

  return (
    <section ref={containerRef} className="relative bg-[#020617] py-32 overflow-hidden">
      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="mb-24 text-center">
            <h2 className="mb-6 text-4xl font-black tracking-tighter text-white uppercase md:text-6xl">
                The Roadmap
            </h2>
            <div className="mx-auto h-1 w-20 bg-blue-500 rounded-full" />
        </div>

        <div className="relative mx-auto max-w-5xl">
            {/* The Thin Line */}
            <div className="absolute top-0 bottom-0 left-[25px] w-[1px] bg-white/5 md:left-1/2 -translate-x-1/2" />

            <motion.div
                style={{ scaleY, originY: 0 }}
                className="absolute top-0 bottom-0 left-[25px] w-[1px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 md:left-1/2 -translate-x-1/2 z-0"
            />

            <div className="relative z-10 flex flex-col gap-16">
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
