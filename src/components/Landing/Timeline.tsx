/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
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
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center gap-8 md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
        >
            {/* Content Card */}
            <div className={`flex-1 ${isEven ? "md:text-right md:pr-16" : "md:text-left md:pl-16"} pl-16 md:pl-0`}>
                <div className="group relative">
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="glass relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1c] p-6 transition-all duration-300 hover:bg-[#111827]">
                        {/* Decorative Corner */}
                        <div className={`absolute top-0 h-[2px] w-8 ${isEven ? "right-0" : "left-0"}`} style={{ backgroundColor: item.color }} />
                        <div className={`absolute top-0 h-8 w-[2px] ${isEven ? "right-0" : "left-0"}`} style={{ backgroundColor: item.color }} />

                        <div className={`mb-2 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-gray-500 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                            <span>{item.date}</span>
                            <div className="h-[1px] w-8 bg-gray-700" />
                        </div>

                        <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-400">
                            {item.desc}
                        </p>
                    </div>
                </div>
            </div>

            {/* Central Node */}
            <div className="absolute left-[20px] md:relative md:left-auto flex-shrink-0 z-30">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#020617] border-4 border-[#020617] ring-1 ring-white/20">
                     <motion.div
                        className="absolute inset-0 rounded-full opacity-50 blur-md"
                        style={{ backgroundColor: item.color }}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                     />
                     <div className="relative z-10 h-3 w-3 rounded-full bg-white" />
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

      {/* Background Grid */}
      <div
         className="absolute inset-0 pointer-events-none opacity-5"
         style={{
             backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
             backgroundSize: "40px 40px"
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
            <p className="mx-auto max-w-xl text-gray-400">
                A structured journey designed to transform raw potential into market-ready innovation.
            </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
            {/* The "Laser Beam" Line */}
            <div className="absolute top-0 bottom-0 left-[20px] w-[2px] bg-white/5 md:left-1/2 -translate-x-1/2" />

            <motion.div
                style={{ scaleY, originY: 0 }}
                className="absolute top-0 bottom-0 left-[20px] w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_20px_rgba(59,130,246,0.6)] md:left-1/2 -translate-x-1/2 z-0"
            />

            <div className="relative z-10 flex flex-col gap-16 md:gap-24">
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
