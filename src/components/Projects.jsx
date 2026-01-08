import React from "react";

const projects = [
  {
    title: "Teacher-Student Dashboard",
    description:
      "A MERN stack dashboard where teachers can log in, manage students, and reset passwords.",
    link: "https://github.com/SidraBibi16",
  },
  {
    title: "Helmet Detection System",
    description:
      "An AI web app that detects safety helmets in images or webcam input, ensuring workplace safety in real time.",
    link: "https://sidrabibi16.github.io/Halmet-detection-system/",
  },
  {
    title: "Color Switcher App",
    description:
      "A React app that allows users to toggle between different background colors with smooth transitions.",
    link: "https://github.com/SidraBibi16",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-[#0f172a] py-20 px-6 text-center text-white border-t border-gray-700">
      <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12">
        My Projects
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/10 text-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 text-indigo-300">
              {project.title}
            </h3>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 text-sm font-medium text-indigo-400 hover:text-indigo-200 transition"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
