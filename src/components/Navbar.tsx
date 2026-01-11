"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/", isRoute: true },
    { name: "ABOUT US", href: "/#about", isRoute: true },
    { name: "INITIATIVES", href: "/#initiatives", isRoute: true },
    { name: "EVENTS", href: "#events", isRoute: false },
    { name: "TEAM", href: "#", isRoute: false },
    { name: "GALLERY", href: "/#gallery", isRoute: true },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 glass border-b border-white/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="E-Cell Logo"
            className="h-10 w-auto invert brightness-0"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <span className="hidden text-white font-bold text-xl">E-CELL</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
             <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold tracking-widest text-gray-300 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
          ))}
          <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center overflow-hidden cursor-pointer hover:scale-110 transition-transform">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full glass py-8 px-6 border-b border-white/10 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
             <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold tracking-widest text-gray-300 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
