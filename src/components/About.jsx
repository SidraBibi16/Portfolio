import React from "react";
import { EyeIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion"; // Changed from motion/react to framer-motion for standard support

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative bg-[#0b1120] py-24 px-6 overflow-hidden border-t border-white/5"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="space-y-6">
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed tracking-wide">
            I am a <span className="text-white font-semibold underline decoration-indigo-500 decoration-2 underline-offset-4">Full-Stack Developer</span> with a passion for building 
            scalable, AI-driven web applications. With expertise in the <span className="text-indigo-400 font-bold">MERN Stack</span> 
            (MongoDB, Express, React, Node.js) and modern databases like <span className="text-cyan-400 font-bold">Supabase & MySQL</span>, 
            I bridge the gap between complex backend logic and intuitive frontend design.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            I thrive on turning challenging problems into clean, efficient, and user-centric solutions. 
            Constantly learning and evolving, I stay at the forefront of <span className="text-white italic">modern web technologies</span> to deliver high-quality, professional software.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="/Resume1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:bg-indigo-500 transition-all duration-300"
          >
            <EyeIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
            View  CV
          </a>

          <a
            href="/Resume1.pdf"
            download="Resume1.pdf"
            className="flex items-center gap-2 px-8 py-3 border border-gray-700 text-gray-300 font-bold rounded-xl hover:bg-white/5 hover:text-white transition-all duration-300"
          >
            <ArrowDownTrayIcon className="w-5 h-5" />
            Download CV
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default About;