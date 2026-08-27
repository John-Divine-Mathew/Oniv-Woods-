// src/pages/IndustrialDesign.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiActivity, FiAnchor, FiTrendingUp, FiLayers, FiTool, FiBox } from "react-icons/fi";

const modules = [
  {
    icon: <FiActivity className="text-4xl" />,
    title: "Industrial Design Fundamentals",
    desc: "Form, function, ergonomics, user-centered thinking and market-driven design principles.",
  },
  {
    icon: <FiLayers className="text-4xl" />,
    title: "Material & Manufacturing Processes",
    desc: "Wood, metal, polymers; CNC machining, molding, casting, and mass manufacturing workflow.",
  },
  {
    icon: <FiTool className="text-4xl" />,
    title: "Prototyping & Model Making",
    desc: "Rapid prototyping with wood, foam, 3D printing, and creating test mock-ups.",
  },
  {
    icon: <FiTrendingUp className="text-4xl" />,
    title: "Product Market Research",
    desc: "Identifying consumer needs, analyzing competitors and setting design direction.",
  },
  {
    icon: <FiAnchor className="text-4xl" />,
    title: "Ergonomics & Human Factors",
    desc: "Understanding user comfort, reach, movement and safety in product design.",
  },
  {
    icon: <FiBox className="text-4xl" />,
    title: "3D CAD & Visualization",
    desc: "Modeling products digitally using CAD tools and preparing designs for production.",
  },
];

const IndustrialDesign = () => {
  return (
    <div className="min-h-screen bg-[#f7f3ef] text-gray-900 py-16 px-4">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Industrial Designing Course
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Learn the complete process of designing functional, aesthetic and industry-ready products,
          with a strong focus on wood-based manufacturing and practical prototyping.
        </p>
      </motion.div>

      {/* TOP CARDS */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 lg:grid-cols-3 mb-14">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow p-6 border border-gray-200"
        >
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-blue-50 text-blue-700 mb-4">
            <FiActivity className="text-3xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Course Duration</h3>
          <p className="text-gray-600">4 months (regular) / 8 months (advanced)</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow p-6 border border-gray-200"
        >
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-green-50 text-green-700 mb-4">
            <FiTool className="text-3xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Hands-on Training</h3>
          <p className="text-gray-600">
            Live prototyping, workshop practice, design model building and CAD lab sessions.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow p-6 border border-gray-200"
        >
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-amber-50 text-amber-700 mb-4">
            <FiBox className="text-3xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Portfolio Focus</h3>
          <p className="text-gray-600">
            Build 4 industry-ready products including houseware, furniture and utility items.
          </p>
        </motion.div>
      </div>

      {/* MODULE GRID */}
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow p-6 border border-gray-200 hover:shadow-lg transition"
          >
            <div className="text-indigo-600 mb-4 flex justify-center">{m.icon}</div>
            <h4 className="text-lg font-semibold text-center mb-2">{m.title}</h4>
            <p className="text-gray-600 text-sm text-center">{m.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CURRICULUM + CTA */}
      <div className="max-w-5xl mx-auto mt-14 grid gap-8 md:grid-cols-2">
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow">
          <h3 className="text-2xl font-bold mb-4">Detailed Curriculum (sample)</h3>

          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>Week 1–2:</strong> Design sketching, idea generation, form studies.
            </li>
            <li>
              <strong>Week 3–4:</strong> Ergonomics, usability and basic mockup creation.
            </li>
            <li>
              <strong>Week 5–6:</strong> CAD modeling for industrial products + rendering.
            </li>
            <li>
              <strong>Week 7–9:</strong> Materials, manufacturing process planning and tooling.
            </li>
            <li>
              <strong>Week 10–12:</strong> Prototype making, user testing, refinement.
            </li>
            <li>
              <strong>Week 13–16:</strong> Final product development + portfolio preparation.
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Who Should Join?</h3>
            <p className="text-gray-600 mb-4">
              Students, designers, woodworkers, furniture makers and anyone who wants to develop
              industry-grade product design skills.
            </p>

            <h4 className="font-semibold mb-2">What You Will Create</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>4 complete industrial product design projects</li>
              <li>CAD, renders and blueprint documentation</li>
              <li>User testing reports + professional portfolio</li>
            </ul>
          </div>

          <div className="mt-6">
            <a
              href="/contact"
              className="inline-block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow"
            >
              Enquire / Enroll Now
            </a>
            <p className="text-xs text-gray-500 mt-3">Limited seats — project-based learning.</p>
          </div>
        </div>
      </div>

      {/* FOOTER NOTE */}
      <div className="max-w-5xl mx-auto text-center mt-14 text-gray-600">
        <p>
          Want images, hero banners or icons customized to match Oniv Woods branding? Tell me — I’ll
          update it instantly.
        </p>
      </div>
    </div>
  );
};

export default IndustrialDesign;
