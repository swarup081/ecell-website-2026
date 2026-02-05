/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import { ArrowRight, Activity, Rocket } from "lucide-react";

const StatCounter: React.FC<{
  value: number;
  label: string;
  suffix?: string;
}> = ({ value, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="group cursor-default text-center">
      <motion.div
        className="mb-1 flex justify-center items-baseline gap-1 text-2xl font-black text-white sm:text-3xl"
        whileHover={{ scale: 1.05 }}
      >
        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          {count}
        </span>
        <span className="text-xl text-blue-500">{suffix}</span>
      </motion.div>
      <p className="text-[10px] font-bold tracking-[0.1em] text-gray-500 uppercase transition-colors group-hover:text-gray-400">
        {label}
      </p>
    </div>
  );
};

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse interaction
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Image Card Tilt Logic
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const cardRotateX = useTransform(useSpring(cardY), [0, 600], [5, -5]);
  const cardRotateY = useTransform(useSpring(cardX), [0, 800], [-5, 5]);

  const handleCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    cardX.set(e.clientX - rect.left);
    cardY.set(e.clientY - rect.top);
  };

  return (
    <section
      id="about"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-[#020617] py-24 md:py-32"
    >
      {/* Interactive Background Glow */}
      <motion.div
        style={{
          left: springX,
          top: springY,
        }}
        className="pointer-events-none absolute z-0 hidden h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[120px] lg:block"
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center gap-20 lg:flex-row lg:gap-24">
          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full text-center lg:w-1/2 lg:text-left"
          >
            <div className="glass mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] text-blue-400 uppercase">
              <Activity size={14} />
              Our Ecosystem
            </div>

            <h2 className="mb-8 text-4xl leading-none font-black tracking-tighter text-white uppercase lg:text-6xl">
              Pioneering <br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-400 via-blue-200 to-white bg-clip-text text-transparent">
                  Entrepreneurship
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute -bottom-2 left-0 -z-10 h-2 rounded-full bg-blue-600/20"
                />
              </span>
            </h2>

            <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed font-light text-gray-400 md:text-xl lg:mx-0">
              E-Cell, NIT Silchar is a non-profit powerhouse. We don&apos;t just
              teach business; we{" "}
              <span className="font-medium text-white">architect ambition</span>
              . By providing pre-incubation, mentorship, and a high-octane
              community.
            </p>

            <motion.button
              whileHover={{ x: 10 }}
              className="group flex items-center justify-center gap-3 text-sm font-bold tracking-widest text-blue-500 uppercase lg:justify-start"
            >
              Explore our mission
              <span className="relative h-[2px] w-8 bg-blue-500/30 transition-all duration-300 group-hover:w-12">
                <ArrowRight size={16} className="absolute -top-2 -right-2" />
              </span>
            </motion.button>
          </motion.div>

          {/* INTERACTIVE IMAGE CARD (Browser Window Style) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="perspective-2000 mt-12 w-full lg:mt-0 lg:w-1/2"
          >
            <motion.div
              onMouseMove={handleCardMove}
              onMouseLeave={() => {
                cardX.set(400);
                cardY.set(300);
              }}
              style={{
                rotateX: cardRotateX,
                rotateY: cardRotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative mx-auto aspect-[4/5] w-full max-w-md md:aspect-square"
            >
              {/* Main Container */}
              <div className="glass group absolute inset-0 overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-[#0d1117]/80 backdrop-blur-xl">
                 {/* Window Header */}
                 <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <div className="ml-4 h-4 w-32 rounded-full bg-white/10" />
                 </div>

                {/* Window Content: Abstract Map */}
                <div className="relative h-full w-full p-6 flex flex-col items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />

                    {/* Central Hub */}
                    <div className="relative z-10 flex flex-col items-center">
                        <motion.div
                          animate={{ boxShadow: ["0 0 20px rgba(59,130,246,0)", "0 0 40px rgba(59,130,246,0.3)", "0 0 20px rgba(59,130,246,0)"] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="w-24 h-24 rounded-full border border-blue-500/30 flex items-center justify-center bg-blue-900/20 backdrop-blur-sm"
                        >
                            <Rocket size={40} className="text-blue-400" />
                        </motion.div>
                        <div className="h-20 w-[1px] bg-gradient-to-b from-blue-500/50 to-transparent my-4" />
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-white">Launchpad</h3>
                            <p className="text-xs text-blue-300/60 uppercase tracking-widest">Incubation Center</p>
                        </div>
                    </div>

                    {/* Orbiting Elements */}
                    <motion.div
                       animate={{ rotate: 360 }}
                       transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                       className="absolute inset-0 z-0 pointer-events-none"
                    >
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-dashed border-white/5" />
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px]">
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
                         </div>
                    </motion.div>
                </div>
              </div>

              {/* Decorative Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ translateZ: "-30px" }}
                className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full border-2 border-dashed border-blue-500/15 md:-bottom-20 md:-left-20 md:h-64 md:w-64 opacity-50"
              />

              {/* Floating Element: Stats Box (Slide In from Right) */}
              <motion.div
                style={{ translateZ: "50px" }}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                className="glass absolute -right-4 bottom-8 z-20 rounded-2xl border border-white/20 bg-[#020617]/60 backdrop-blur-xl px-6 py-5 shadow-2xl md:-right-10 md:bottom-10 md:rounded-3xl"
              >
                  <div className="flex gap-8 items-center">
                    <StatCounter value={50} label="Active Startups" suffix="+" />
                    <div className="w-[1px] h-8 bg-white/10"></div>
                    <StatCounter value={20} label="Global Partners" suffix="+" />
                  </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
