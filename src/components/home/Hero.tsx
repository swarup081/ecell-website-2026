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
      {/*
        BACKGROUND ANIMATION LAYER
        --------------------------
        Goal: Vibrant, rising "Aurora/Nebula" glow from the bottom.
        Must be clearly visible and animated.
      */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">

        {/*
          Layer 1: Deep ambient base glow (Static)
          Provides the purple hue foundation at the bottom.
        */}
        <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-purple-900 via-indigo-950 to-transparent opacity-80" />

        {/*
          Layer 2: The Rising Aurora (Animated)
          Bright, vibrant gradient that moves up and down.
        */}
        <motion.div
           animate={{
              height: ["30vh", "60vh", "30vh"], // Significant vertical movement
              opacity: [0.6, 1, 0.6],           // Pulsing brightness
           }}
           transition={{
             duration: 8,
             repeat: Infinity,
             ease: "easeInOut"
           }}
           style={{ transformOrigin: "bottom" }}
           className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] max-w-[1200px] bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-fuchsia-600/60 via-purple-600/40 to-transparent blur-[80px]"
        />

        {/*
          Layer 3: Secondary "Breathing" Glows (Side Anchors)
          Adds width and variation.
        */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 left-0 w-1/2 h-[50vh] bg-gradient-to-tr from-indigo-600/30 to-transparent blur-[100px]"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 right-0 w-1/2 h-[50vh] bg-gradient-to-tl from-purple-600/30 to-transparent blur-[100px]"
        />

        {/* Grid Overlay - lighter now to not obscure the glow */}
         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
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

      {/* Marquee Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="w-full relative z-20 mt-auto mb-10"
      >
        {/* The "Above" Glowing Line Animation - Crisp & Bright */}
        <div className="w-full max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent relative mb-8">
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-70 blur-[2px] animate-shimmer-line" />
        </div>

        {/* Glass Container for Marquee - Transparent to show the glow behind/under it */}
        <div className="w-full bg-black/10 backdrop-blur-sm border-y border-white/5 py-8 relative overflow-hidden group hover:border-purple-500/30 transition-colors duration-500">
           <Marquee />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
