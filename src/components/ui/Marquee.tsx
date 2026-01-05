"use client";

import React from "react";

const LOGOS = [
  { name: "Google", color: "text-gray-400" },
  { name: "Microsoft", color: "text-gray-400" },
  { name: "Airbnb", color: "text-gray-400" },
  { name: "Uber", color: "text-gray-400" },
  { name: "Spotify", color: "text-gray-400" },
  { name: "Amazon", color: "text-gray-400" },
  { name: "Netflix", color: "text-gray-400" },
  { name: "Adobe", color: "text-gray-400" },
];

export default function Marquee() {
  return (
    <div className="relative flex w-full overflow-hidden">
      <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-12 sm:gap-24 px-12">
        {LOGOS.map((logo, idx) => (
          <span
            key={idx}
            className="text-xl md:text-2xl font-bold tracking-wider text-gray-500/80 hover:text-white transition-colors duration-300 cursor-default select-none uppercase"
          >
            {logo.name}
          </span>
        ))}
      </div>
      <div aria-hidden="true" className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-12 sm:gap-24 px-12">
        {LOGOS.map((logo, idx) => (
          <span
            key={idx}
            className="text-xl md:text-2xl font-bold tracking-wider text-gray-500/80 hover:text-white transition-colors duration-300 cursor-default select-none uppercase"
          >
            {logo.name}
          </span>
        ))}
      </div>
    </div>
  );
}
