import React from "react";
import imagify from '../assets/imagify.png'
import halmet from '../assets/halmet.png'
import furniro from '../assets/furniro.png'
const projects = [
  {
    title: "Imagify AI Generator",
    description:
      "A sophisticated MERN stack application that transforms text prompts into high-quality AI images with a built-in credit system.",
    tech: ["React", 'Tailwindcss',"Node.js", "MongoDB", " Clipdrop"],
    link: "https://ai-image-generator-tawny-three.vercel.app",
    image: imagify // Apni image ka path yahan dein
  },
  {
    title: "Helmet Detection System",
    description:
      "Real-time safety monitoring using computer vision to detect helmets, ensuring compliance in industrial environments.",
    tech: ["html", "css", "javascript", "TensorFlow"],
    link: "https://sidrabibi16.github.io/Halmet-detection-system/",
    image: halmet
  },
  {
    title: "Modern Furniture Hub",
    description:
      "High-performance E-commerce platform with a focus on seamless user experience, responsive design, and fast checkout.",
    tech: ["React", "Tailwind CSS", "Supabase",'Stripe'],
    link: "https://e-commerce-website-iota-lovat.vercel.app/",
    image: furniro
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-[#0b1120] py-20 px-6 text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Here is a selection of my latest work, blending AI logic with modern frontend engineering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#1e293b]/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 shadow-xl hover:-translate-y-2"
            >
              {/* Project Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded-md border border-indigo-500/20">
                      {t}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg transition"
                  >
                    Live Demo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;