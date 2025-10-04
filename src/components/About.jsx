import React from "react";

function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-white via-gray-100 to-white py-20 px-6 text-center"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-6 animate-fade-in-up">
          About Me
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed tracking-wide animate-fade-in-up delay-100">
          I’m a <span className="font-semibold text-indigo-600">dedicated</span> and{" "}
          <span className="font-semibold text-indigo-600">detail-oriented</span>{" "}
          full-stack developer with hands-on experience in building dynamic and responsive web applications using the{" "}
          <span className="font-semibold text-indigo-600">Full Stack/MERN stack</span> (MongoDB, Express, React, Node.js & MySQL).
          I enjoy turning complex problems into simple, beautiful solutions and
          continuously learning new technologies to improve my skills.
        </p>
      </div>
    </section>
  );
}

export default About;
