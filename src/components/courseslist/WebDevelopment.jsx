// src/pages/WebDevelopment.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiCpu,
  FiMonitor,
  FiLayers,
  FiSmartphone,
  FiCloud,
  FiCheckCircle,
  FiGlobe,
} from "react-icons/fi";

const modules = [
  {
    icon: <FiCode className="text-4xl" />,
    title: "HTML, CSS & JavaScript",
    desc: "Learn the building blocks of modern websites with real-world projects.",
  },
  {
    icon: <FiLayers className="text-4xl" />,
    title: "Frontend Frameworks",
    desc: "Master React.js interfaces, components, routing and state management.",
  },
  {
    icon: <FiCpu className="text-4xl" />,
    title: "Backend Development",
    desc: "Learn Node.js, Express, APIs, Authentication and Database Integration.",
  },
  {
    icon: <FiCloud className="text-4xl" />,
    title: "Databases & Cloud",
    desc: "Work with MongoDB, Firebase, SQL, Hosting & Deployment platforms.",
  },
  {
    icon: <FiSmartphone className="text-4xl" />,
    title: "Responsive & UI Design",
    desc: "Build mobile-friendly, attractive and functional UI using Tailwind CSS.",
  },
  {
    icon: <FiMonitor className="text-4xl" />,
    title: "Live Projects",
    desc: "Create real full-stack apps: Portfolio, E-commerce, Dashboard & more.",
  },
];

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-[#f7f3ef] text-gray-900 py-16 px-4">
      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Web Development Course
        </h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Learn to build beautiful, modern and responsive websites using 
          HTML, CSS, JavaScript, React, Node.js and cloud technologies. 
          Perfect for beginners and advanced learners.
        </p>
      </motion.div>

      {/* HIGHLIGHT CARDS */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 mb-14">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow p-6 border border-gray-200"
        >
          <div className="h-16 w-16 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl mb-4">
            <FiGlobe className="text-3xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Modern Technologies</h3>
          <p className="text-gray-600">Learn the most demanded tools used in today's tech industry.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow p-6 border border-gray-200"
        >
          <div className="h-16 w-16 flex items-center justify-center bg-green-50 text-green-600 rounded-xl mb-4">
            <FiCode className="text-3xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">100% Practical</h3>
          <p className="text-gray-600">
            Build real frontend + backend projects with live deployment.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow p-6 border border-gray-200"
        >
          <div className="h-16 w-16 flex items-center justify-center bg-yellow-50 text-yellow-600 rounded-xl mb-4">
            <FiCheckCircle className="text-3xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Beginner Friendly</h3>
          <p className="text-gray-600">
            Simple explanations, hands-on practice and complete mentorship.
          </p>
        </motion.div>
      </div>

      {/* MODULES */}
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow p-6 border border-gray-200 hover:shadow-lg transition"
          >
            <div className="text-indigo-700 flex justify-center mb-4">{m.icon}</div>
            <h4 className="text-lg font-semibold text-center">{m.title}</h4>
            <p className="text-gray-600 text-sm text-center mt-2">{m.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CURRICULUM SECTION */}
      <div className="max-w-5xl mx-auto mt-14 grid gap-8 md:grid-cols-2">
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow">
          <h3 className="text-2xl font-bold mb-4">Full Curriculum</h3>
          <ul className="space-y-3 text-gray-700">
            <li><strong>Week 1–2:</strong> HTML, CSS, Responsive UI.</li>
            <li><strong>Week 3–4:</strong> JavaScript basics → DOM → ES6.</li>
            <li><strong>Week 5–6:</strong> React Components, Hooks, Router.</li>
            <li><strong>Week 7–8:</strong> Backend with Node.js & Express.</li>
            <li><strong>Week 9–10:</strong> MongoDB, Firebase & Authentication.</li>
            <li><strong>Week 11–12:</strong> Complete Full-Stack Project & Deployment.</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Who Can Join?</h3>
            <p className="text-gray-600 mb-4">
              Students, beginners, job seekers, freelancers or anyone who wants 
              to become a full-stack web developer.
            </p>

            <h4 className="font-semibold mb-2">You Will Build</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Portfolio Website</li>
              <li>Blog App</li>
              <li>E-commerce Project</li>
              <li>Admin Dashboard</li>
              <li>Full-stack final project</li>
            </ul>
          </div>

          <div className="mt-6">
            <a
              href="/contact"
              className="w-full inline-block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow"
            >
              Enquire / Enroll Now
            </a>
            <p className="text-xs text-gray-500 mt-3">
              100% mentorship + placement guidance included.
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="max-w-5xl mx-auto text-center mt-14 text-gray-600">
        <p>Need hero image for this page? I can generate website banner images.</p>
      </div>
    </div>
  );
};

export default WebDevelopment;
