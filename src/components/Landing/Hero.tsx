/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Globe, Rocket, Users } from "lucide-react";

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  // Mouse parallax
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-[#020617] pt-20 lg:pt-0">

      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0">
         {/* Grid Floor */}
         <div
            className="absolute inset-0 opacity-20"
            style={{
                backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
                transform: "perspective(1000px) rotateX(60deg) translateY(-100px) scale(2)",
            }}
         />

         {/* Ambient Glows */}
         <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
         <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT: TEXT CONTENT */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
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
           <h1 className="mb-6 text-5xl font-black tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl">
              IGNITE <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                YOUR IDEA
              </span>
           </h1>

           <p className="mb-10 max-w-lg text-lg text-gray-400 md:text-xl leading-relaxed">
              The premier student entrepreneurship body of NIT Silchar. We transform visionary concepts into scalable realities through mentorship, funding, and community.
           </p>

           <div className="flex flex-col gap-4 sm:flex-row">
              <button className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(37,99,235,0.5)]">
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />
                 <span>Start Building</span>
                 <ArrowRight size={18} />
              </button>

              <button className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10">
                 <Globe size={18} className="text-gray-400" />
                 <span>Explore Ecosystem</span>
              </button>
           </div>

           {/* Stats / Trust */}
           <div className="mt-12 flex items-center gap-8 border-t border-white/5 pt-8">
              <div>
                 <div className="text-2xl font-black text-white">50+</div>
                 <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Startups</div>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div>
                 <div className="text-2xl font-black text-white">₹10Cr+</div>
                 <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Valuation Raised</div>
              </div>
           </div>
        </motion.div>

        {/* RIGHT: HERO VISUAL (The "Reactor") */}
        <div className="relative flex h-[600px] w-full items-center justify-center perspective-1000">
           <motion.div
              style={{ x: mousePos.x, y: mousePos.y }}
              className="relative flex h-[400px] w-[400px] items-center justify-center"
           >
              {/* Core Glow */}
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[80px]" />

              {/* Central Sphere */}
              <motion.div
                 animate={{ scale: [1, 1.05, 1] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="relative z-20 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-700 shadow-[0_0_60px_rgba(59,130,246,0.5)]"
              >
                  <Zap size={48} className="text-white drop-shadow-[0_0_10px_white]" />
              </motion.div>

              {/* Orbit Ring 1 */}
              <motion.div
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute z-10 h-[240px] w-[240px] rounded-full border border-dashed border-blue-500/30"
              >
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#020617] p-2 border border-blue-500/50 shadow-lg shadow-blue-500/20">
                    <Rocket size={16} className="text-blue-400" />
                 </div>
              </motion.div>

              {/* Orbit Ring 2 (Counter-Rotating) */}
              <motion.div
                 animate={{ rotate: -360 }}
                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                 className="absolute z-10 h-[360px] w-[360px] rounded-full border border-white/10"
              >
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#020617] p-2 border border-purple-500/50 shadow-lg shadow-purple-500/20">
                    <Users size={16} className="text-purple-400" />
                 </div>
              </motion.div>

              {/* Floating Cards (Parallax) */}
              <motion.div
                 style={{ y: y1, x: -50 }}
                 className="absolute top-0 right-0 z-30 hidden lg:block"
              >
                 <div className="glass flex items-center gap-3 rounded-2xl border border-white/10 p-4 shadow-xl backdrop-blur-md">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
                       <Sparkles size={18} className="text-green-400" />
                    </div>
                    <div>
                       <div className="text-sm font-bold text-white">New Grant Unlocked</div>
                       <div className="text-xs text-gray-400">₹ 2.5 Lakhs approved</div>
                    </div>
                 </div>
              </motion.div>

              <motion.div
                 style={{ y: y2, x: 50 }}
                 className="absolute bottom-10 left-0 z-30 hidden lg:block"
              >
                 <div className="glass flex items-center gap-3 rounded-2xl border border-white/10 p-4 shadow-xl backdrop-blur-md">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500/20">
                       <Users size={18} className="text-pink-400" />
                    </div>
                    <div>
                       <div className="text-sm font-bold text-white">Mentorship Session</div>
                       <div className="text-xs text-gray-400">Live in 10 mins</div>
                    </div>
                 </div>
              </motion.div>

           </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
