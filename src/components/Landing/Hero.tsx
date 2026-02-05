/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingUp, Users, Activity, Globe, LayoutDashboard, Shield, ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 800], [1, 0.9]);

  // Mouse tracking for subtle parallax
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) * 0.05,
        y: (e.clientY - window.innerHeight / 2) * 0.05,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[#020617] pt-20 lg:pt-0">

      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         {/* Grid Floor */}
         <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
                backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
                maskImage: "radial-gradient(circle at center, black, transparent 80%)",
                transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`
            }}
         />

         {/* Ambient Glows */}
         <div className="absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-blue-600/5 blur-[120px]" />
         <div className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative z-20 container mx-auto grid grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2"
      >
        {/* LEFT COLUMN: TEXT */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
           {/* Status Badge */}
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5 }}
             className="mb-8 flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 backdrop-blur-md"
           >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-blue-300 uppercase">
                Next Gen Ecosystem
              </span>
           </motion.div>

           {/* Main Heading */}
           <motion.h1
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="mb-6 text-5xl font-black tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl"
           >
              IGNITE <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                YOUR IDEA
              </span>
           </motion.h1>

           <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2, duration: 0.8 }}
             className="mb-10 max-w-lg text-lg text-gray-400 md:text-xl leading-relaxed font-light"
           >
              The premier student entrepreneurship body of NIT Silchar. We transform visionary concepts into scalable realities through mentorship, funding, and community.
           </motion.p>

           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
             className="flex flex-col gap-4 sm:flex-row"
           >
              <button className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(37,99,235,0.5)]">
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />
                 <span>Start Building</span>
                 <ArrowRight size={18} />
              </button>

              <button className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20">
                 <Globe size={18} className="text-gray-400" />
                 <span>Explore Ecosystem</span>
              </button>
           </motion.div>
        </div>

        {/* RIGHT COLUMN: HIGH-FIDELITY BENTO GRID (Clean Placeholder Version) */}
        <div className="relative h-[600px] w-full hidden lg:block perspective-1000">
            <div className="grid h-full grid-cols-3 grid-rows-3 gap-4 p-4">

                 {/* Item 1: Growth Chart (Large Vertical) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass col-span-2 row-span-2 relative overflow-hidden rounded-3xl border border-white/5 bg-[#0d1117]/40 p-6 shadow-2xl backdrop-blur-xl"
                >
                   <div className="flex items-center gap-2 mb-6">
                      <div className="p-2 rounded-lg bg-blue-500/20">
                          <TrendingUp size={20} className="text-blue-400" />
                      </div>
                      <span className="text-sm font-bold text-gray-300">Startup Growth</span>
                   </div>
                   {/* Animated Chart Bars */}
                   <div className="flex items-end justify-between h-[200px] pb-4 gap-3">
                      {[30, 45, 35, 60, 50, 80, 70, 95].map((h, i) => (
                          <motion.div
                             key={i}
                             initial={{ height: 0 }}
                             animate={{ height: `${h}%` }}
                             transition={{ duration: 1.5, delay: 0.8 + (i * 0.1), ease: "backOut" }}
                             className="w-full bg-gradient-to-t from-blue-600/50 to-blue-400/50 rounded-t-md relative group overflow-hidden"
                          >
                              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.div>
                      ))}
                   </div>
                   {/* Graph Line Overlay (CSS Gradient) */}
                   <div className="absolute inset-x-6 bottom-10 h-[200px] opacity-20 pointer-events-none"
                        style={{ background: "linear-gradient(to top, rgba(59,130,246,0.2), transparent)" }}
                   />
                </motion.div>

                {/* Item 2: User Notification (Top Right) */}
                <motion.div
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.7, duration: 0.5 }}
                   whileHover={{ scale: 1.02 }}
                   className="glass flex flex-col justify-between rounded-3xl border border-white/5 bg-[#0d1117]/40 p-5 backdrop-blur-xl"
                >
                   <div className="flex justify-between items-start">
                       <div className="p-2 rounded-full bg-purple-500/20">
                          <Users size={16} className="text-purple-400" />
                       </div>
                       <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                       </span>
                   </div>
                   <div className="mt-4">
                       <div className="text-3xl font-black text-white">500+</div>
                       <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Active Members</div>
                   </div>
                </motion.div>

                {/* Item 3: Activity Globe (Middle Right) */}
                <motion.div
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.8, duration: 0.5 }}
                   whileHover={{ scale: 1.02 }}
                   className="glass flex items-center justify-center rounded-3xl border border-white/5 bg-[#0d1117]/40 relative overflow-hidden backdrop-blur-xl"
                >
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                             <Globe size={100} className="text-cyan-400" />
                        </motion.div>
                    </div>
                    <div className="relative z-10 text-center">
                        <Activity size={24} className="text-cyan-400 mx-auto mb-1 animate-pulse" />
                        <span className="text-[10px] font-bold text-cyan-200 uppercase tracking-wider">Global Reach</span>
                    </div>
                </motion.div>

                {/* Item 4: Project Dashboard Placeholder (Bottom Left Wide) - REPLACED TERMINAL */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    className="glass col-span-2 flex flex-col justify-center rounded-3xl border border-white/5 bg-[#0a0f1c] p-6 overflow-hidden backdrop-blur-xl relative"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <LayoutDashboard size={60} />
                    </div>

                    {/* Abstract UI Blocks */}
                    <div className="flex flex-col gap-3 relative z-10">
                        <div className="flex justify-between items-center mb-2">
                             <div className="h-2 w-20 bg-gray-700 rounded-full" />
                             <div className="h-2 w-8 bg-blue-500/50 rounded-full" />
                        </div>
                        <div className="flex gap-2">
                             <div className="h-16 w-1/3 bg-white/5 rounded-lg border border-white/5" />
                             <div className="h-16 w-1/3 bg-white/5 rounded-lg border border-white/5" />
                             <div className="h-16 w-1/3 bg-white/5 rounded-lg border border-white/5" />
                        </div>
                        <div className="h-8 w-full bg-white/5 rounded-lg border border-white/5 mt-2 flex items-center px-3 gap-2">
                             <div className="h-2 w-2 rounded-full bg-green-500" />
                             <div className="h-2 w-1/2 bg-gray-700 rounded-full" />
                        </div>
                    </div>
                </motion.div>

                 {/* Item 5: Security/Target Icon (Bottom Right) - REPLACED CODE ICON */}
                 <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.0, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    className="glass flex items-center justify-center rounded-3xl border border-white/5 bg-[#0d1117]/40 backdrop-blur-xl"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-pink-500/20 blur-xl rounded-full" />
                        <Shield size={32} className="text-pink-400 relative z-10" />
                    </div>
                </motion.div>
            </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
