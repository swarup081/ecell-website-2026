/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, TrendingUp, Users, Activity, Globe, Code } from "lucide-react";

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
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden lg:pt-32 xl:pt-0 bg-[#020617]">
      {/* 4. GRID LAYER: Structural Grid */}
      <div
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          transition: "transform 0.1s ease-out",
        }}
        className="pointer-events-none absolute inset-0 z-0 opacity-30 will-change-transform"
      >
          {/* Radial mask to fade out grid at edges */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_80%)]" />
      </div>

      {/* 5. MID LAYER: Interactive Stardust (CSS implementation) */}
      <div className="pointer-events-none absolute inset-[-5%] z-0">
        <StardustField count={20} />
      </div>

      {/* 6. FRONT LAYER: Floating Motes (CSS implementation) */}
      <div className="pointer-events-none absolute inset-[-15%] z-10">
        <StarField count={15} size={3} opacity={0.6} blur={1} />
      </div>

      {/* FOREGROUND CONTENT */}
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative z-20 container mx-auto grid grid-cols-1 items-center gap-12 px-6 py-4 lg:grid-cols-2 lg:py-0"
      >
        {/* LEFT COLUMN: TEXT */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="glass mt-[10vh] mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 px-4 py-2 text-[8px] font-bold tracking-[0.2em] text-blue-400 uppercase shadow-2xl shadow-blue-500/10 sm:text-[10px] sm:tracking-[0.3em] md:px-6 md:py-2.5 md:text-xs lg:mt-0"
            >
            <Sparkles size={14} className="animate-pulse text-blue-300" />
            The Future of Innovation Starts Here
            </motion.div>

            <motion.div
            style={{
                transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
            }}
            className="perspective-2000 relative transition-transform duration-100 ease-out will-change-transform"
            >
            <motion.h1
                initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="mb-2 text-[clamp(3rem,10vw,8rem)] leading-none font-black tracking-tighter text-white drop-shadow-[0_0_80px_rgba(37,99,235,0.2)] selection:bg-blue-500/30"
            >
                E-CELL
            </motion.h1>

            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2.5, delay: 0.5, ease: "circOut" }}
                className="absolute -bottom-6 left-1/2 mx-auto h-[2px] w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60 lg:left-0 lg:translate-x-0"
            />
            </motion.div>

            <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 mb-8 text-sm font-light tracking-[0.3em] text-gray-400/80 uppercase sm:mt-12 sm:mb-12 sm:text-xl sm:tracking-[0.5em] md:mt-16 md:text-2xl lg:text-3xl"
            >
            Entrepreneurship Cell{" "}
            <span className="block pt-2 font-extrabold tracking-tight text-blue-500 sm:inline sm:pt-0">
                NIT SILCHAR
            </span>
            </motion.h2>

            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="min-h-[4rem] max-w-2xl text-base leading-relaxed font-light text-gray-300/60 sm:min-h-[5rem] sm:text-xl md:text-2xl"
            >
            <TypingAnimation />
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-12 flex flex-col gap-6 sm:flex-row"
            >
            <button className="group relative overflow-hidden rounded-2xl bg-blue-600 px-8 py-3 shadow-[0_25px_60px_rgba(37,99,235,0.4)] transition-all hover:scale-105 active:scale-95 sm:px-14 sm:py-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10 flex items-center gap-2 text-sm font-black tracking-wide text-white sm:gap-3 sm:text-lg">
                Our Initiatives{" "}
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                </span>
                </span>
            </button>

            <button className="group glass rounded-2xl border border-white/10 px-8 py-3 text-sm font-bold text-white transition-all hover:scale-105 hover:border-white/20 hover:bg-white/5 active:scale-95 sm:px-14 sm:py-6 sm:text-lg">
                Join Us
            </button>
            </motion.div>
        </div>

        {/* RIGHT COLUMN: BENTO GRID */}
        <div className="relative h-[600px] w-full hidden lg:block perspective-1000">
            <div className="grid h-full grid-cols-3 grid-rows-3 gap-4 p-4">
                 {/* Item 1: Growth Chart (Large Vertical) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass col-span-2 row-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 shadow-2xl"
                >
                   <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 rounded-lg bg-blue-500/20">
                          <TrendingUp size={20} className="text-blue-400" />
                      </div>
                      <span className="text-sm font-bold text-gray-300">Startup Growth</span>
                   </div>
                   {/* Mock Chart */}
                   <div className="flex items-end justify-between h-full pb-8 gap-2">
                      {[40, 65, 50, 80, 60, 95, 85].map((h, i) => (
                          <motion.div
                             key={i}
                             initial={{ height: 0 }}
                             animate={{ height: `${h}%` }}
                             transition={{ duration: 1, delay: 1.5 + (i * 0.1), ease: "backOut" }}
                             className="w-full bg-blue-500/30 rounded-t-sm relative group"
                          >
                              <div className="absolute inset-x-0 bottom-0 h-full bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                          </motion.div>
                      ))}
                   </div>
                </motion.div>

                {/* Item 2: User Notification (Top Right) */}
                <motion.div
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 1.7, duration: 0.5 }}
                   whileHover={{ scale: 1.02 }}
                   className="glass flex flex-col justify-between rounded-3xl border border-white/10 bg-purple-500/10 p-5"
                >
                   <div className="flex justify-between items-start">
                       <div className="p-2 rounded-full bg-purple-500/20">
                          <Users size={16} className="text-purple-400" />
                       </div>
                       <span className="text-[10px] font-mono text-purple-300">NOW</span>
                   </div>
                   <div>
                       <div className="text-2xl font-bold text-white">500+</div>
                       <div className="text-xs text-purple-200/60">Active Members</div>
                   </div>
                </motion.div>

                {/* Item 3: Activity Globe (Middle Right) */}
                <motion.div
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 1.9, duration: 0.5 }}
                   whileHover={{ scale: 1.02 }}
                   className="glass flex items-center justify-center rounded-3xl border border-white/10 bg-cyan-500/10 relative overflow-hidden"
                >
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                             <Globe size={120} className="text-cyan-400" />
                        </motion.div>
                    </div>
                    <div className="relative z-10 text-center">
                        <Activity size={24} className="text-cyan-400 mx-auto mb-1 animate-pulse" />
                        <span className="text-xs font-bold text-cyan-200">Global Reach</span>
                    </div>
                </motion.div>

                {/* Item 4: Terminal Snippet (Bottom Left Wide) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    className="glass col-span-2 flex flex-col justify-center rounded-3xl border border-white/10 bg-[#0d1117] p-6 font-mono text-xs overflow-hidden"
                >
                    <div className="flex gap-1.5 mb-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                    </div>
                    <div className="space-y-1 text-gray-400">
                        <p><span className="text-pink-400">const</span> <span className="text-blue-400">success</span> = <span className="text-yellow-300">await</span> <span className="text-purple-400">eCell</span>.launch();</p>
                        <p><span className="text-green-400">✔</span> Startup incubated successfully</p>
                        <p className="animate-pulse">_</p>
                    </div>
                </motion.div>

                 {/* Item 5: Code Icon (Bottom Right) */}
                 <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.3, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    className="glass flex items-center justify-center rounded-3xl border border-white/10 bg-pink-500/10"
                >
                    <Code size={32} className="text-pink-400" />
                </motion.div>
            </div>
        </div>
      </motion.div>
    </section>
  );
};

interface StarFieldProps {
  count: number;
  size: number;
  opacity: number;
  blur?: number;
}

const StarField: React.FC<StarFieldProps> = ({
  count,
  size,
  opacity,
  blur = 0,
}) => {
  // Static stars to avoid hydration mismatch
  const stars = React.useMemo(
    () =>
      [...Array(count)].map((_, i) => ({
        top: `${(i * 17) % 100}%`,
        left: `${(i * 23) % 100}%`,
        delay: i * 0.5,
        duration: 3 + (i % 4),
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, opacity, 0] }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: star.top,
            left: star.left,
            width: size + "px",
            height: size + "px",
            backgroundColor: "white",
            borderRadius: "50%",
            filter: blur ? `blur(${blur}px)` : "none",
            boxShadow: `0 0 ${size * 2}px white`,
          }}
        />
      ))}
    </div>
  );
};

const StardustField: React.FC<{ count: number }> = ({ count }) => {
  const particles = React.useMemo(
    () =>
      [...Array(count)].map((_, i) => ({
        left: `${(i * 13) % 100}%`,
        top: `${(i * 29) % 100}%`,
        size: (i % 2) + 1,
        duration: 15 + (i % 25),
        delay: -i,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            y: ["-20%", "120%"],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: p.left,
            top: p.top,
            width: p.size + "px",
            height: p.size + "px",
            backgroundColor: "#60a5fa",
            borderRadius: "50%",
            boxShadow: `0 0 12px #3b82f6`,
          }}
        />
      ))}
    </div>
  );
};

const TypingAnimation: React.FC = () => {
  const [text, setText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const sentences = [
      "The path to a successful business career is now easier and less messy.",
      "Cultivating a culture of innovation and problem-solving.",
      "Empowering the visionaries of tomorrow, today.",
      "NIT Silchar's premier entrepreneurship hub.",
    ];

    const currentSentence = sentences[sentenceIndex];
    if (!currentSentence) return;

    const typingSpeed = isDeleting ? 25 : 55;
    const pauseDuration = isDeleting ? 100 : 3500;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentSentence.length) {
        setText(currentSentence.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentSentence.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentSentence.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else {
        setIsDeleting(false);
        setSentenceIndex((sentenceIndex + 1) % sentences.length);
        setCharIndex(0);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, sentenceIndex]);

  return (
    <span className="font-medium tracking-wide text-gray-400/80 italic">
      {text}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.9 }}
        className="ml-1 inline-block h-[1.1em] w-[3px] bg-blue-500 align-middle"
      />
    </span>
  );
};

export default Hero;
