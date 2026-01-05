/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Mayank Yadav",
    role: "Senior Director (Products) @ Turing",
    image: "https://res.cloudinary.com/dp92qug2f/image/upload/v1678340666/Ecell%20website/testimonial/mayank_webp_khudax.webp",
    quote: "It was nostalgic to see NIT Silchar students and faculty. I really enjoyed the candid conversation with students and the energy in the room to do something big. Would love to come back soon and work towards building a solid entrepreneurial ecosystem in the campus."
  },
  {
    id: 2,
    name: "Ankit Machhar",
    role: "Director @ Ecosystem, NEN",
    image: "https://res.cloudinary.com/dp92qug2f/image/upload/v1678340665/Ecell%20website/testimonial/ankit_webp_vdxz7g.webp",
    quote: "The energy at E-Cell NITS is infectious. The team is dedicated to fostering innovation, and their events are a testament to their commitment. It's inspiring to see such passion for entrepreneurship in the region."
  },
  {
    id: 3,
    name: "Srijan Pal Singh",
    role: "CEO @ Kalam Centre",
    image: "https://res.cloudinary.com/dp92qug2f/image/upload/v1678340666/Ecell%20website/testimonial/srijan_webp_q9x5x5.webp",
    quote: "Innovation is the key to the future, and NIT Silchar is unlocking it beautifully. The initiatives taken by E-Cell to mentor young minds are commendable. A truly vibrant community."
  },
  {
    id: 4,
    name: "Bikash Agarwal",
    role: "Co-Founder @ Crio.Do",
    image: "https://res.cloudinary.com/dp92qug2f/image/upload/v1678340665/Ecell%20website/testimonial/bikash_webp_wsx9x9.webp",
    quote: "Great to see the startup culture growing in the North East. E-Cell NITS is doing a fantastic job in bridging the gap between industry and academia. Keep up the great work!"
  }
];

const Testimonials: React.FC = () => {
  // Triple the list for smoother infinite loop
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-40 relative overflow-hidden bg-[#020617]">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-[0.03] select-none pointer-events-none">
        <span className="text-[20rem] font-black absolute top-0 -left-20 text-white">QUOTES</span>
      </div>

      <div className="container mx-auto px-6 mb-16 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">
            Voices of <span className="text-blue-500">Impact</span>
          </h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-8 px-4"
          >
            {marqueeItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="w-[85vw] md:w-[600px] flex-shrink-0 glass rounded-[2.5rem] p-8 md:p-12 border border-white/10 flex flex-col md:flex-row gap-8 items-center md:items-start group hover:border-blue-500/30 transition-colors"
              >
                <div className="md:w-1/3 flex flex-col items-center flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500/20 mb-4 group-hover:border-blue-500/50 transition-colors">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center">{item.name}</h3>
                  <p className="text-blue-400 text-xs text-center mt-1 font-medium">{item.role}</p>
                </div>

                <div className="md:w-2/3 relative flex flex-col h-full">
                  <Quote className="text-blue-500/20 mb-4" size={40} />
                  <p className="text-lg text-gray-300 leading-relaxed font-light italic mb-6 flex-grow">
                    &quot;{item.quote}&quot;
                  </p>
                  <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
