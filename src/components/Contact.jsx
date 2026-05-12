import React from 'react';
import { FiMail, FiPhone, FiLinkedin, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#0b1120] py-24 px-6 relative overflow-hidden border-t border-white/5"
    >
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px]"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. 
            Whether you have a question or just want to connect, I'll do my best to get back to you!
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email */}
          <a 
            href="mailto:sidraf195021@gmail.com" 
            className="group flex flex-col items-center p-8 rounded-3xl bg-[#1e293b]/30 border border-white/5 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
              <FiMail className="text-indigo-400 text-2xl" />
            </div>
            <h4 className="text-white font-bold mb-1">Email Me</h4>
            <p className="text-gray-400 text-sm">sidraf195021@gmail.com</p>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/sidra-bibi-b2735b271" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-8 rounded-3xl bg-[#1e293b]/30 border border-white/5 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
              <FiLinkedin className="text-blue-400 text-2xl" />
            </div>
            <h4 className="text-white font-bold mb-1">LinkedIn</h4>
            <p className="text-gray-400 text-sm italic">Connect with me</p>
          </a>

          {/* Phone */}
          <div className="group flex flex-col items-center p-8 rounded-3xl bg-[#1e293b]/30 border border-white/5 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
              <FiPhone className="text-green-400 text-2xl" />
            </div>
            <h4 className="text-white font-bold mb-1">Call Me</h4>
            <p className="text-gray-400 text-sm">+92 303 4023674</p>
          </div>

          {/* Location */}
          <div className="group flex flex-col items-center p-8 rounded-3xl bg-[#1e293b]/30 border border-white/5 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
              <FiMapPin className="text-cyan-400 text-2xl" />
            </div>
            <h4 className="text-white font-bold mb-1">Location</h4>
            <p className="text-gray-400 text-sm">Lahore, Pakistan</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
            <a 
              href="mailto:sidraf195021@gmail.com"
              className="inline-block px-12 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-bold rounded-2xl shadow-[0_10px_20px_rgba(79,70,229,0.3)] hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Send a Message
            </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;