/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingUp, Users, Activity, Globe, LayoutDashboard, Shield, ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 800], [1, 0.95]);

  // Mouse tracking for subtle parallax
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) * 0.02,
        y: (e.clientY - window.innerHeight / 2) * 0.02,
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
            className="absolute inset-0 opacity-[0.1]"
            style={{
                backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
                maskImage: "radial-gradient(circle at center, black, transparent 80%)",
                transform: `translate(${mousePos.x}px, ${mousePos.y}px)`
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
           <div className="mb-8 flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-blue-300 uppercase">
                Next Gen Ecosystem
              </span>
           </div>

           {/* Main Heading */}
           <h1 className="mb-6 text-5xl font-black tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl">
              IGNITE <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                YOUR IDEA
              </span>
           </h1>

           <p className="mb-10 max-w-lg text-lg text-gray-400 md:text-xl leading-relaxed font-light">
              The premier student entrepreneurship body of NIT Silchar. We transform visionary concepts into scalable realities through mentorship, funding, and community.
           </p>

           <div className="flex flex-col gap-4 sm:flex-row">
              <button className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(37,99,235,0.5)]">
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />
                 <span>Start Building</span>
                 <ArrowRight size={18} />
              </button>

              <button className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20">
                 <Globe size={18} className="text-gray-400" />
                 <span>Explore Ecosystem</span>
              </button>
           </div>
        </div>

        {/* RIGHT COLUMN: STATIC BENTO GRID (Clean Slate) */}
        <div className="relative h-[600px] w-full hidden lg:block">
            <div className="grid h-full grid-cols-3 grid-rows-3 gap-4 p-4">

                 {/* Item 1: Growth Chart (Static) */}
                <div className="glass col-span-2 row-span-2 relative overflow-hidden rounded-3xl border border-white/5 bg-[#0d1117]/40 p-6 shadow-2xl backdrop-blur-xl transition-transform hover:scale-[1.01] duration-500">
                   <div className="flex items-center gap-2 mb-6">
                      <div className="p-2 rounded-lg bg-blue-500/20">
                          <TrendingUp size={20} className="text-blue-400" />
                      </div>
                      <span className="text-sm font-bold text-gray-300">Startup Growth</span>
                   </div>
                   <div className="flex items-end justify-between h-[200px] pb-4 gap-3">
                      {[30, 45, 35, 60, 50, 80, 70, 95].map((h, i) => (
                          <div
                             key={i}
                             style={{ height: `${h}%` }}
                             className="w-full bg-gradient-to-t from-blue-600/30 to-blue-400/30 rounded-t-md relative"
                          >
                              <div className="absolute top-0 inset-x-0 h-1 bg-blue-400/50" />
                          </div>
                      ))}
                   </div>
                </div>

                {/* Item 2: User Notification (Static) */}
                <div className="glass flex flex-col justify-between rounded-3xl border border-white/5 bg-[#0d1117]/40 p-5 backdrop-blur-xl transition-transform hover:scale-[1.02] duration-500">
                   <div className="flex justify-between items-start">
                       <div className="p-2 rounded-full bg-purple-500/20">
                          <Users size={16} className="text-purple-400" />
                       </div>
                       <div className="h-2 w-2 rounded-full bg-purple-500" />
                   </div>
                   <div className="mt-4">
                       <div className="text-3xl font-black text-white">500+</div>
                       <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Active Members</div>
                   </div>
                </div>

                {/* Item 3: Activity Globe (Static Placeholder) */}
                <div className="glass flex items-center justify-center rounded-3xl border border-white/5 bg-[#0d1117]/40 relative overflow-hidden backdrop-blur-xl transition-transform hover:scale-[1.02] duration-500">
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                         <Globe size={120} className="text-cyan-400" />
                    </div>
                    <div className="relative z-10 text-center">
                        <Activity size={24} className="text-cyan-400 mx-auto mb-1" />
                        <span className="text-[10px] font-bold text-cyan-200 uppercase tracking-wider">Global Reach</span>
                    </div>
                </div>

                {/* Item 4: Project Dashboard (Static) */}
                <div className="glass col-span-2 flex flex-col justify-center rounded-3xl border border-white/5 bg-[#0a0f1c] p-6 overflow-hidden backdrop-blur-xl relative transition-transform hover:scale-[1.01] duration-500">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <LayoutDashboard size={60} />
                    </div>

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
                    </div>
                </div>

                 {/* Item 5: Shield Icon (Static) */}
                 <div className="glass flex items-center justify-center rounded-3xl border border-white/5 bg-[#0d1117]/40 backdrop-blur-xl transition-transform hover:scale-[1.02] duration-500">
                    <div className="relative">
                        <div className="absolute inset-0 bg-pink-500/20 blur-xl rounded-full" />
                        <Shield size={32} className="text-pink-400 relative z-10" />
                    </div>
                </div>
            </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
