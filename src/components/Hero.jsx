import React from "react";
import profilePic from "../assets/laptop.jpg";

function Hero() {
  return (
    <section className="bg-[#0f172a] py-12 px-6 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-400 leading-tight mb-4">
            Aslamualaikum! I'm Sidra
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
            A Full-Stack Web Developer (MERN) passionate about crafting clean, user-friendly, and modern web applications.
          </p>
          <a
            href="#projects"
            className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-full text-lg font-medium hover:bg-indigo-700 transition duration-300 shadow-md"
          >
            View My Work
          </a>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 md:pl-12">
          <img
            src={profilePic}
            alt="Sidra's profile"
            className="w-52 h-52 sm:w-60 sm:h-60 rounded-full object-cover border-4 border-white shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
