/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Rocket, Target, Lightbulb, TrendingUp, Users } from "lucide-react";

const timelineData = [
  {
    id: 1,
    title: "Orientation",
    icon: Users,
    desc: "Welcoming the new batches and introducing the entrepreneurial world of NIT Silchar.",
    color: "from-blue-500 to-cyan-400",
    text_color: "text-blue-400"
  },
  {
    id: 2,
    title: "EIC Challenge",
    icon: Target,
    desc: "The annual Entrepreneurship & Innovation Challenge that tests grit and creativity.",
    color: "from-purple-500 to-indigo-400",
    text_color: "text-purple-400"
  },
  {
    id: 3,
    title: "Srijan Summit",
    icon: Lightbulb,
    desc: "Our flagship summit featuring speakers, workshops, and networking with industry titans.",
    color: "from-amber-500 to-orange-400",
    text_color: "text-amber-400"
  },
  {
    id: 4,
    title: "Empressario",
    icon: Rocket,
    desc: "The module where startups pitch, compete, and gain visibility within the regional ecosystem.",
    color: "from-emerald-500 to-teal-400",
    text_color: "text-emerald-400"
  },
  {
    id: 5,
    title: "Incubation",
    icon: TrendingUp,
    desc: "Full support for pre-selected startups through IIC to scale their business models.",
    color: "from-rose-500 to-pink-400",
    text_color: "text-rose-400"
  },
];

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
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#020617] py-40"
    >
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
          <h2 className="mb-6 text-4xl leading-none font-black tracking-tighter text-white uppercase lg:text-6xl">
            The Roadmap
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-gray-500">
            A step-by-step journey from ideation to incubation, nurturing the
            entrepreneurs of the future.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Vertical line background */}
          <div className="absolute top-0 bottom-0 left-[39px] w-[2px] -translate-x-1/2 bg-white/5 md:left-1/2" />

          {/* Animated progress line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute top-0 bottom-0 left-[39px] z-10 w-[2px] -translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] md:left-1/2"
          />

          <div className="relative z-20 flex flex-col gap-24">
            {timelineData.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`flex items-center gap-10 md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content Side */}
                  <div className={`flex-1 ${isEven ? "md:text-right md:pr-16" : "md:text-left md:pl-16"} pl-20 md:pl-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass group relative overflow-hidden rounded-3xl border border-white/5 p-8 transition-all duration-300 hover:border-white/10 hover:bg-white/5"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`} />

                      <h4 className={`mb-3 text-2xl font-black ${item.text_color}`}>
                        {item.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-gray-400">
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-[39px] md:relative md:left-auto flex-shrink-0 z-30">
                     <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#020617] bg-[#0d1117] shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} opacity-20`} />
                        <item.icon className="text-white relative z-10" size={28} />

                        {/* Number Badge */}
                        <div className={`absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-xs font-bold text-white shadow-lg border-2 border-[#020617]`}>
                            {i + 1}
                        </div>
                     </div>
                  </div>

                  {/* Empty Side for Desktop alignment */}
                  <div className="hidden flex-1 md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
