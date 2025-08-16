import React from 'react';
import { FiMail, FiPhone, FiLinkedin, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-white via-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-600 text-lg mb-10">
          I'd love to connect with you! Whether you have a question, an opportunity, or just want to say hello,
          feel free to reach out.
        </p>

        <div className="space-y-6 text-gray-700 text-lg">
          {/* Email */}
          <div className="flex items-center justify-center gap-4 hover:text-blue-700 transition-all">
            <FiMail className="text-blue-600 text-2xl" />
            <a href="mailto:sidraf195021@gmail.com" className="hover:underline">
              sidraf195021@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center gap-4 hover:text-blue-700 transition-all">
            <FiPhone className="text-blue-600 text-2xl" />
            <a href="tel:+923034023674" className="hover:underline">
              +92 303 4023674
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center justify-center gap-4 hover:text-blue-700 transition-all">
            <FiLinkedin className="text-blue-600 text-2xl" />
            <a
              href="https://www.linkedin.com/in/sidra-bibi-b2735b271"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline break-words"
            >
              linkedin.com/in/sidra-bibi-b2735b271
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-4">
            <FiMapPin className="text-blue-600 text-2xl" />
            <span className="text-gray-800">Lahore, Pakistan</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
