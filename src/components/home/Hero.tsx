"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#030014] pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[60%] h-[30%] rounded-[100%] bg-indigo-500/10 blur-[100px]" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center gap-8">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-200 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          Welcome to E-Cell NITS
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl"
        >
          Fostering <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 animate-gradient-x bg-[length:200%_auto]">
            Entrepreneurship
          </span>{" "}
          at NIT Silchar
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Transforming ideas into reality. Join a community of innovators, builders, and dreamers shaping the future.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-4"
        >
          <Link
            href="/join"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-purple-600 px-8 font-medium text-white transition-all duration-300 hover:bg-purple-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(147,51,234,0.5)]"
          >
            <span className="mr-2">Join Us</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/events"
            className="group inline-flex h-12 items-center justify-center rounded-full bg-white/5 border border-white/10 px-8 font-medium text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20"
          >
            <Calendar className="mr-2 w-4 h-4 text-gray-300 group-hover:text-white" />
            <span>Upcoming Events</span>
          </Link>
        </motion.div>
      </div>

      {/* Floating Elements / 3D Abstract Representation */}
      <motion.div style={{ y: y1 }} className="absolute top-1/4 left-[10%] w-64 h-64 opacity-20 pointer-events-none z-0 hidden lg:block">
         <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-transparent rounded-full blur-[60px]" />
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute bottom-1/4 right-[10%] w-72 h-72 opacity-20 pointer-events-none z-0 hidden lg:block">
         <div className="absolute inset-0 bg-gradient-to-tl from-indigo-500 to-transparent rounded-full blur-[60px]" />
      </motion.div>

      {/* Aurora / Glow Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#030014] to-transparent z-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
    </section>
  );
};

export default Hero;
