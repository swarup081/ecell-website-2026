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
    <section className="relative overflow-hidden border-y border-white/5 bg-[#020617] py-24">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto mb-16 px-6 text-center relative z-10">
        <h2 className="text-4xl leading-none font-black tracking-tighter text-white uppercase lg:text-6xl">
          Trusted <span className="text-blue-500">Partners</span>
        </h2>
        <p className="mt-4 text-xs font-bold tracking-[0.4em] text-gray-500 uppercase">
          & Collaborators
        </p>
      </div>

      <div className="relative flex overflow-hidden mask-linear-fade">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex min-w-max items-center gap-20 px-4"
        >
          {marqueeItems.map((partner, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-4 opacity-40 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 cursor-pointer"
            >
              <div className="h-16 w-32 md:h-20 md:w-40 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.url}
                    alt={partner.name}
                    className="h-full w-full object-contain brightness-200 contrast-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-500"
                  />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto mt-24 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass group relative mx-auto max-w-4xl rounded-[3rem] border border-white/10 p-10 overflow-hidden"
        >
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

          <div className="relative z-10">
            <div className="mb-6 flex justify-center">
                 <div className="h-1 w-20 bg-blue-500 rounded-full opacity-30" />
            </div>
            <p className="relative text-center text-lg leading-relaxed text-gray-400 italic font-light">
              &quot;We are incredibly fortunate to have{" "}
              <span className="font-semibold text-white not-italic">ED Times</span> as our
              sponsor. Their platform&apos;s unique take on youth culture and news
              is unparalleled. We extend our heartfelt gratitude for their
              unwavering support in making our vision a reality.&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
