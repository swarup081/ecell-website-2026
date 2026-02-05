/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, User } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    name: "Mayank Yadav",
    role: "Senior Director (Products) @ Turing",
    image:
      "https://res.cloudinary.com/dp92qug2f/image/upload/v1678340666/Ecell%20website/testimonial/mayank_webp_khudax.webp",
    text: "It was nostalgic to see NIT Silchar students and faculty. I really enjoyed the candid conversation with students and the energy in the room to do something big. Would love to come back soon and work towards building a solid entrepreneurial ecosystem in the campus.",
  },
  {
    id: 2,
    name: "Rohan Das",
    role: "Founder @ TechSolutions",
    image: "",
    text: "E-Cell NITS provided me with the mentorship and network I needed to take my startup from an idea to a funded reality. The ecosystem here is thriving and genuinely supportive of new ideas.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Product Manager @ Google",
    image: "",
    text: "The events and workshops are top-notch. It's the best place to learn about entrepreneurship in the region. The team's dedication to fostering innovation is truly inspiring.",
  },
  {
    id: 4,
    name: "Arun Verma",
    role: "CTO @ InnovateX",
    image: "",
    text: "Being part of E-Cell events has been a highlight of my college life. The exposure to real-world business problems and the opportunity to solve them is invaluable.",
  },
];

// Duplicate data for infinite scroll
const marqueeData = [...testimonialsData, ...testimonialsData, ...testimonialsData, ...testimonialsData];

const Testimonials: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-32 bg-[#020617]">
      {/* Background Decor */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden opacity-[0.03] select-none">
        <span className="absolute top-10 right-10 text-[10rem] font-black text-white/10 lg:text-[20rem]">
          QUOTES
        </span>
      </div>

      <div className="relative z-10 container mx-auto mb-16 px-6 text-center">
        <h2 className="text-4xl leading-none font-black tracking-tighter text-white uppercase lg:text-6xl">
          Success <span className="text-blue-500">Stories</span>
        </h2>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex overflow-hidden mask-linear-fade py-10">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 px-4"
          style={{ width: "max-content" }}
        >
          {marqueeData.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="glass group relative w-[350px] flex-shrink-0 rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/10 md:w-[450px]"
            >
               {/* Hover Glow Effect */}
              <div className="absolute inset-0 -z-10 rounded-3xl bg-blue-600/0 blur-xl transition-colors duration-500 group-hover:bg-blue-600/5" />

              <Quote className="mb-6 text-blue-500/50" size={40} />

              <p className="mb-8 min-h-[120px] text-base leading-relaxed font-light text-gray-300 italic md:text-lg">
                &quot;{item.text}&quot;
              </p>

              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-blue-500/20 bg-gray-900">
                  {item.image ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-800">
                        <User size={20} className="text-blue-400" />
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-white">{item.name}</h4>
                  <p className="text-xs font-medium text-blue-400 uppercase tracking-wider">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
