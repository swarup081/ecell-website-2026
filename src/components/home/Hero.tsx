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
      {/* Animated Background - Originating from Bottom */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        {/* Base Gradient rising from bottom */}
        <motion.div
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 right-0 h-[80vh] bg-gradient-to-t from-purple-900/30 via-indigo-900/10 to-transparent"
        />

        {/* Rising Beam 1 (Left) */}
        <motion.div
            animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.5, 0.2],
                scaleY: [1, 1.1, 1],
                rotate: [-5, 0, -5]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-20%] left-[10%] w-[40vw] h-[80vh] bg-purple-600/20 blur-[100px] rounded-full mix-blend-screen origin-bottom transform-gpu"
        />

        {/* Rising Beam 2 (Right) */}
        <motion.div
            animate={{
                y: [0, -50, 0],
                opacity: [0.2, 0.4, 0.2],
                scaleY: [1, 1.2, 1],
                rotate: [5, 0, 5]
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[-20%] right-[10%] w-[40vw] h-[90vh] bg-indigo-600/20 blur-[100px] rounded-full mix-blend-screen origin-bottom transform-gpu"
        />

        {/* Rising Beam 3 (Center) */}
        <motion.div
             animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1],
                scaleY: [1, 1.15, 1]
            }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-[-20%] left-[30%] right-[30%] h-[70vh] bg-blue-600/10 blur-[90px] rounded-full mix-blend-screen origin-bottom transform-gpu"
        />

        {/* Grid pattern for texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
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
