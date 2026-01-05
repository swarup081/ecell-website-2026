"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Marquee from "~/components/ui/Marquee";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#030014] pt-20"
    >
      {/* Animated "Wave" Background - Originating from Bottom (Marquee) */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">

        {/* Large Central Aurora Wave */}
        <motion.div
           animate={{
              y: [20, -20, 20],
              scale: [1, 1.05, 1],
              opacity: [0.4, 0.6, 0.4]
           }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-to-t from-purple-800/40 via-purple-600/20 to-transparent blur-[80px] rounded-t-[50%] mix-blend-screen"
        />

        {/* Secondary Wave (Left) */}
        <motion.div
           animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.2, 0.4, 0.2]
           }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
           className="absolute bottom-[-10%] left-[-10%] w-[80vw] h-[50vh] bg-gradient-to-tr from-indigo-800/30 via-blue-700/10 to-transparent blur-[60px] rounded-full mix-blend-screen"
        />

        {/* Secondary Wave (Right) */}
        <motion.div
           animate={{
              y: [0, -40, 0],
              x: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2]
           }}
           transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
           className="absolute bottom-[-10%] right-[-10%] w-[80vw] h-[55vh] bg-gradient-to-tl from-purple-900/30 via-pink-800/10 to-transparent blur-[60px] rounded-full mix-blend-screen"
        />

        {/* Subtle flowing overlay to simulate "moving like wave" */}
         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center gap-8 mb-20 mt-10">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl drop-shadow-2xl"
        >
          Fostering <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-indigo-300 animate-gradient-x bg-[length:200%_auto] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Entrepreneurship
          </span>{" "}
          at NIT Silchar
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Transforming ideas into reality. Join a community of innovators, builders, and dreamers shaping the future.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-6"
        >
          <Link
            href="/join"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-purple-600 px-8 font-medium text-white transition-all duration-300 hover:bg-purple-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] border border-purple-500"
          >
             <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:animate-shimmer group-hover:duration-1000">
              <div className="relative h-full w-8 bg-white/20"></div>
            </div>
            <span className="mr-2 relative z-10">Join Us</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10" />
          </Link>

          <Link
            href="/events"
            className="group inline-flex h-12 items-center justify-center rounded-full bg-white/5 border border-white/10 px-8 font-medium text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 backdrop-blur-sm"
          >
            <Calendar className="mr-2 w-4 h-4 text-gray-300 group-hover:text-white" />
            <span>Upcoming Events</span>
          </Link>
        </motion.div>
      </div>

      {/* Marquee Section with "Glow Above" */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="w-full relative z-20 mt-auto mb-10"
      >
        {/* The "Above" Glowing Line Animation */}
        <div className="w-full max-w-6xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent relative mb-8 opacity-70">
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50 blur-[2px] animate-shimmer-line" />
           <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 w-1/2 h-[4px] bg-purple-500/50 blur-[10px]" />
        </div>

        {/* Glass Container for Marquee */}
        <div className="w-full bg-black/30 backdrop-blur-md border-y border-white/5 py-8 relative overflow-hidden group hover:border-purple-500/20 transition-colors duration-500">

           {/* Inner Glow Background for Marquee */}
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

           <Marquee />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
