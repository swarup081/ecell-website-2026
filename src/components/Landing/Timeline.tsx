/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
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

const TimelineCard = ({ item, index }: { item: TimelineItem; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 50 }}
            className="relative pl-8 md:pl-0"
        >
            {/* Connector Line (Mobile) */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/5 md:hidden">
                <div className="absolute top-8 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full border-2 border-[#020617]" style={{ backgroundColor: item.color }} />
            </div>

            <div className="glass group relative overflow-hidden rounded-3xl border border-white/5 bg-[#0d1117]/40 p-8 transition-all duration-500 hover:bg-[#0d1117]/60 hover:border-white/10 hover:shadow-2xl">
                {/* Hover Gradient Background */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ background: `linear-gradient(to bottom right, ${item.color}, transparent)` }}
                />

                <div className="relative z-10 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                            <item.icon size={24} style={{ color: item.color }} />
                        </div>
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-gray-500">{item.date}</span>
                    </div>

                    <div>
                        <h3 className="mb-2 text-2xl font-black text-white">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
                            {item.desc}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="relative bg-[#020617] py-32 overflow-hidden">

      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" preserveAspectRatio="none">
              <motion.path
                 d="M -100 200 Q 400 400 800 100 T 2000 300"
                 stroke="url(#gradient)"
                 strokeWidth="2"
                 fill="none"
                 style={{ pathLength }}
              />
              <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                      <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                      <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                  </linearGradient>
              </defs>
          </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-20 text-center">
            <h2 className="mb-6 text-4xl font-black tracking-tighter text-white uppercase md:text-6xl">
                The Roadmap
            </h2>
            <p className="mx-auto max-w-xl text-gray-400 font-light">
                Our strategic journey to foster innovation.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timelineData.map((item, i) => (
                <TimelineCard key={item.id} item={item} index={i} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
