import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0b1120] text-gray-400 py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        
        {/* Social Icons - Quick Access */}
        <div className="flex gap-6 mb-8">
          <a href="https://github.com/SidraBibi16" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sidra-bibi-b2735b271" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:sidraf195021@gmail.com" className="hover:text-indigo-400 transition-colors">
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Branding & Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-500 max-w-xs mx-auto mb-6 italic">
            Building the future of the web with AI and modern technologies.
          </p>
          
          <div className="h-[1px] w-20 bg-gray-800 mx-auto mb-6"></div>
          
          <p className="text-xs uppercase tracking-widest font-medium">
            © {new Date().getFullYear()} — Built with using <span className="text-indigo-400">React</span> & <span className="text-cyan-400">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;