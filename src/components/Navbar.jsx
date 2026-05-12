import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Scroll hone par navbar ka style change karne ke liye
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4 ${
        scrolled 
        ? "bg-[#0b1120]/80 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl" 
        : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter"
        >
          <a href="#" className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </a>
        </motion.h1>

        {/* NAV LINKS */}
        <ul className="hidden md:flex items-center space-x-8">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <motion.li 
              key={item}
              whileHover={{ y: -2 }}
              className="relative group"
            >
              <a 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors"
              >
                {item}
              </a>
              {/* Hover Line Animation */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* CTA BUTTON (Mobile version mein hidden rahega) */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-lg"
          >
            Hire Me
          </a>
        </div>

        {/* MOBILE MENU ICON (Just for visual, functionality can be added later) */}
        <div className="md:hidden text-white font-bold text-sm bg-white/5 px-3 py-1 rounded-lg border border-white/10">
          Menu
        </div>

      </div>
    </nav>
  );
}

export default Navbar;