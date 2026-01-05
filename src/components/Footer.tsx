
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#010409] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24 mb-16">

          <div className="md:w-1/3">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">E</div>
              <h2 className="text-2xl font-black text-white tracking-tighter">E-CELL NITS</h2>
            </div>
            <p className="text-gray-500 leading-relaxed mb-8">
              Fostering the spirit of entrepreneurship and innovation at NIT Silchar. We are a community of dreamers, doers, and disruptors.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li className="hover:text-blue-400 cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Events</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Initiatives</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Gallery</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Sponsors</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Resources</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Startup Guide</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Mentorship</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Incubation</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Downloads</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Subscribe</h4>
              <p className="text-gray-500 text-xs mb-4">Get the latest updates on events and opportunities.</p>
              <div className="flex relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-4 pr-10 text-white text-sm focus:outline-none focus:border-blue-500"
                />
                <button className="absolute right-1 top-1 p-1.5 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition-colors">
                  <Mail size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">© 2024 E-Cell NIT Silchar. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-gray-600">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
