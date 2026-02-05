/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import React from "react";
import { motion } from "framer-motion";

const Partners: React.FC = () => {
  const partners = [
    {
      name: "ED Times",
      url: "https://res.cloudinary.com/dp92qug2f/image/upload/v1685354010/Ecell%20website/edtimes_logo_bhl4ec.webp",
    },
    {
      name: "Payzaql",
      url: "https://res.cloudinary.com/draptrzrc/image/upload/v1707558984/Payzaql.webp",
    },
    {
      name: "Cubelelo",
      url: "https://res.cloudinary.com/dp92qug2f/image/upload/v1676989598/collaboration-ecell/Cubeleloresized_jimc2g.png",
    },
    {
      name: "Black Marble",
      url: "https://res.cloudinary.com/dp92qug2f/image/upload/v1676990266/collaboration-ecell/blackmarble00_q3mowc.png",
    },
    {
      name: "GFG",
      url: "https://res.cloudinary.com/dp92qug2f/image/upload/v1676990589/collaboration-ecell/gfgre_xzhxha.png",
    },
    {
      name: "Assam StartUp",
      url: "https://res.cloudinary.com/dp92qug2f/image/upload/v1676990737/collaboration-ecell/assamStartUpres_n2fbxv.png",
    },
  ];

  // Quadruple the list for seamless infinite scroll on wide screens
  const marqueeItems = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#020617] py-24">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1)_0%,transparent_50%)] pointer-events-none" />

      <div className="container mx-auto mb-16 px-6 text-center relative z-10">
        <h2 className="text-3xl font-black tracking-tight text-white uppercase lg:text-5xl">
          Trusted <span className="text-blue-500">Partners</span>
        </h2>
        <div className="mt-4 h-1 w-12 bg-blue-500/50 mx-auto rounded-full" />
      </div>

      <div className="relative flex overflow-hidden mask-linear-fade py-8">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex min-w-max items-center gap-24 px-4"
        >
          {marqueeItems.map((partner, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-4 opacity-30 transition-all duration-500 hover:opacity-100 cursor-pointer"
            >
              <div className="h-12 w-32 md:h-16 md:w-48 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.url}
                    alt={partner.name}
                    className="h-full w-full object-contain grayscale brightness-100 invert group-hover:grayscale-0 group-hover:invert-0 transition-all duration-500"
                  />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto mt-20 px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
             {[
                 { count: "50+", label: "Sponsors" },
                 { count: "20+", label: "Community Partners" },
                 { count: "100+", label: "Collaborations" }
             ].map((stat, i) => (
                 <div key={i} className="glass p-6 rounded-2xl border border-white/5 bg-[#0d1117]/40 text-center">
                     <div className="text-3xl font-black text-white mb-1">{stat.count}</div>
                     <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                 </div>
             ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
