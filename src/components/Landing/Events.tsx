/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Code2, Users2, Rocket } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Startup\nWeekend",
    subtitle: "54 Hours to Launch",
    category: "Hackathon",
    desc: "A frenzy of business model creation, coding, designing, and market validation.",
    img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
    icon: Rocket,
    tagGradient: "from-blue-400 to-indigo-500",
  },
  {
    id: 2,
    title: "E-Summit\n2024",
    subtitle: "The Flagship Event",
    category: "Summit",
    desc: "Bringing together industry leaders, investors, and students for a 3-day extravaganza.",
    img: "https://images.unsplash.com/photo-1475721027767-p4d29e64f925?auto=format&fit=crop&q=80&w=800",
    icon: Users2,
    tagGradient: "from-purple-400 to-pink-500",
  },
  {
    id: 3,
    title: "Techno\nBiz",
    subtitle: "Business Plan Competition",
    category: "Competition",
    desc: "Present your groundbreaking ideas to a panel of expert judges and win funding.",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
    icon: Trophy,
    tagGradient: "from-amber-400 to-orange-500",
  },
  {
    id: 4,
    title: "Code\nFor Equity",
    subtitle: "Developer Challenge",
    category: "Technical",
    desc: "Solve real-world problems faced by startups and earn equity or internships.",
    img: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=800",
    icon: Code2,
    tagGradient: "from-emerald-400 to-teal-500",
  },
];

const EventCard = ({
    event,
    isMobile = false,
  }: {
    event: (typeof events)[0];
    isMobile?: boolean;
  }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className={`glass group relative flex w-full overflow-hidden rounded-[2rem] border border-white/5 bg-[#0d1117]/40 p-8 shadow-2xl transition-all duration-500 hover:bg-[#0d1117]/60 ${
                isMobile
                ? "flex-col gap-6 sm:flex-row sm:items-center"
                : "h-full flex-col items-start justify-between"
            }`}
        >
            {/* Spotlight Effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
                }}
            />

            {/* Background Image (Subtle) */}
            <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-700 group-hover:opacity-20">
                {/* eslint-disable-next-line @next/next/no-img-element */ }
                <img
                    src={event.img}
                    alt=""
                    className="h-full w-full object-cover grayscale"
                />
                <div
                    className="absolute inset-0 bg-[#0d1117]/80"
                />
            </div>

            {/* Content */}
            <div
                className={`relative z-10 flex w-full ${isMobile ? "flex-col gap-4 sm:flex-row sm:gap-6" : "h-full flex-col justify-between"}`}
            >
                {/* Icon & Category Top */}
                <div
                    className={`flex shrink-0 items-start ${isMobile ? "w-full justify-between sm:w-auto sm:flex-col sm:justify-start sm:gap-4" : "mb-8 w-full justify-between"}`}
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-inner backdrop-blur-xl md:h-14 md:w-14">
                        <event.icon
                            size={22}
                            className="text-white opacity-90"
                        />
                    </div>

                    <span
                        className={`bg-gradient-to-r text-[10px] font-black tracking-widest uppercase ${event.tagGradient} bg-clip-text text-transparent sm:text-xs ${!isMobile ? "lg:text-xs" : ""}`}
                    >
                        {event.category}
                    </span>
                </div>

                {/* Text Information */}
                <div className={`flex flex-col ${isMobile ? "mt-2" : "mt-auto"}`}>
                    <h3
                        className={`leading-none font-black tracking-tight text-white group-hover:text-blue-100 transition-colors ${isMobile ? "mb-2 text-2xl" : "mb-3 text-3xl"}`}
                    >
                        {isMobile ? event.title.replace("\n", " ") : event.title}
                    </h3>

                    <h4 className="mb-3 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                        {event.subtitle}
                    </h4>

                    <div
                        className={`${isMobile ? "line-clamp-3" : "line-clamp-4 lg:line-clamp-none"}`}
                    >
                        <p className="text-sm leading-relaxed font-light text-gray-400 group-hover:text-gray-300 transition-colors">
                        {event.desc}
                        </p>
                    </div>

                    {!isMobile && (
                        <div className="mt-6 flex items-center gap-2 text-xs font-bold text-blue-500 transition-all group-hover:gap-3">
                            <span>Explore Details</span>
                            <span>→</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const Events: React.FC = () => {
  const [currentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % events.length);
    }, 5000); // Rotate every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="events"
      className="relative overflow-hidden bg-[#020617] py-24 lg:py-32"
    >
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl leading-none font-black tracking-tighter text-white uppercase lg:text-6xl">
              Events &<br />
              <span className="text-blue-500">Challenges</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-2 max-w-sm text-sm leading-relaxed text-gray-500 font-light"
          >
            Participate in our high-stakes challenges designed to push your
            entrepreneurial limits.
          </motion.p>
        </div>

        {/* --- DESKTOP VIEW (Grid) --- */}
        <div className="hidden gap-6 lg:grid lg:grid-cols-4">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="h-full"
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>

        {/* --- MOBILE VIEW (Carousel) --- */}
        <div className="relative lg:hidden">
          <div className="min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentEvent}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <EventCard event={event} isMobile={true} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="mt-8 flex justify-center gap-3">
            {events.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentEvent(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === currentEvent
                    ? "w-8 bg-blue-500 shadow-[0_0_10px_#3b82f6]"
                    : "w-1.5 bg-white/20"
                }`}
                aria-label={`Go to event ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
