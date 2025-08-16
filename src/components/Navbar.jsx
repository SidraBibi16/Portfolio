import React from "react";

function Navbar() {
  return (
    <nav className="bg-[#1e293b] border-b border-indigo-600 py-4 px-8 flex justify-between items-center sticky top-0 z-50 shadow-md">
      <h1 className="text-2xl font-bold text-indigo-200 tracking-wide">
        Sidra's Portfolio
      </h1>
      <ul className="flex space-x-6 font-medium text-gray-200">
        <li>
          <a href="#about" className="hover:text-indigo-400 transition-colors duration-200">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-indigo-400 transition-colors duration-200">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-indigo-400 transition-colors duration-200">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
