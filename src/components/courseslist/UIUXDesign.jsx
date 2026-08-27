import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const UIUXDesign = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* HERO */}
      <div className="w-full h-[60vh] bg-[url('https://images.unsplash.com/photo-1559027615-ce3f197cf01f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-4xl md:text-6xl font-bold drop-shadow-2xl"
        >
          UI / UX Design
        </motion.h1>
      </div>

      {/* SECTION 1 */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Design Stunning Digital Experiences
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Learn to design beautiful user interfaces and meaningful digital 
            experiences using color theory, typography, design systems, 
            user journeys, and wireframes. This course prepares you for 
            real-world UI/UX jobs with hands-on projects.
          </p>

          <ul className="mt-5 space-y-3">
            {[
              "UI Design Fundamentals",
              "UX Research & User Flow Creation",
              "Wireframing & Prototyping",
              "Figma Full Mastery",
              "Design Thinking Process",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <FiCheckCircle className="text-purple-600" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1591375275204-69a927b34c15?q=80&w=2070&auto=format&fit=crop"
          className="rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* SECTION 2 */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        <motion.img
          src="https://images.unsplash.com/photo-1618223780648-df3480f0c6d1?q=80&w=2070&auto=format&fit=crop"
          className="rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What You Will Learn
          </h2>
          <p className="mt-4 text-gray-600">
            This course gives you a complete understanding of app & web design 
            principles with real-world projects and portfolio preparation.
          </p>

          <ul className="mt-5 space-y-3">
            {[
              "UI Color Theory, Layout, Icons, & Typography",
              "UX Research, Personas, Journey Mapping",
              "Figma, Adobe XD, and Prototyping Tools",
              "Design Systems & Component Libraries",
              "Real Client Projects & Portfolio Building",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <FiCheckCircle className="text-indigo-600" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default UIUXDesign;
