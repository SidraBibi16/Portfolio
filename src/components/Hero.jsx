import React from "react";
import profilePic from "../assets/laptop.jpg";
import { motion } from "framer-motion"; // Standard import

function Hero() {
  return (
    <section className="relative bg-[#0b1120] py-24 md:py-32 px-6 overflow-hidden">
      
      {/* Background Glows for Modern Look */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-3/5 text-center md:text-left"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-indigo-400 uppercase bg-indigo-400/10 border border-indigo-400/20 rounded-full"
          >
            Available for Work
          </motion.span>
          
       <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
  <span className="text-white">Hi!</span> 
  <br />
  <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
    I'm Sidra
  </span>
</h3>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
            A <span className="text-white font-medium">Full-Stack Web Developer</span> specialized in building high-performance MERN applications with modern UI/UX.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-[0_10px_20px_rgba(79,70,229,0.3)] hover:bg-indigo-500 hover:shadow-indigo-500/40 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-gray-700 text-gray-300 rounded-2xl font-bold hover:bg-white/5 hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="md:w-2/5 flex justify-center mt-16 md:mt-0 relative"
        >
          {/* Decorative Ring around image */}
          <div className="absolute inset-0 border-2 border-indigo-500/20 rounded-full animate-[spin_10s_linear_infinite] scale-110"></div>
          
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 group">
             {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            
            <img
              src={profilePic}
              alt="Sidra profile"
              className="relative w-full h-full rounded-full object-cover border-4 border-[#0b1120] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;