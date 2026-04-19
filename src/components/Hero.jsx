import React from "react";
import profilePic from "../assets/laptop.jpg";
import { motion } from "motion/react";

function Hero() {
  return (
    <section className="bg-[#0f172a] py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-400 leading-tight mb-4">
            Aslamualaikum! I'm Sidra
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
            A Full-Stack Web Developer (MERN) passionate about crafting clean,
            user-friendly, and modern web applications.
          </p>

          <a
            href="#projects"
            className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-full text-lg font-medium hover:bg-indigo-700 transition shadow-md"
          >
            View My Work
          </a>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="md:w-1/2 flex justify-center mt-10 md:mt-0"
        >
          <img
            src={profilePic}
            alt="Sidra profile"
            className="w-56 h-56 sm:w-64 sm:h-64 rounded-full object-cover border-4 border-indigo-400 shadow-xl"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
