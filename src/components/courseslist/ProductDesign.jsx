// src/pages/ProductDesign.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiBox, FiTool, FiFeather, FiLayers, FiMonitor } from "react-icons/fi";


const modules = [
  {
    icon: <FiBox className="text-4xl" />,
    title: "Introduction to Wood Product Design",
    desc: "Material properties, design thinking, product categories (furniture, decor, accessories).",
  },
  {
    icon: <FiTool className="text-4xl" />,
    title: "Joinery & Construction",
    desc: "Traditional and modern joineries, structural logic, assembly planning and strength considerations.",
  },
  {
    icon: <FiLayers className="text-4xl" />,
    title: "Technical Drawing & Detailing",
    desc: "Orthographic views, exploded diagrams, measurements and component detailing for manufacture.",
  },
  {
    icon: <FiMonitor className="text-4xl" />,
    title: "3D Modeling & CAD",
    desc: "SketchUp/Fusion360 basics: modeling, part-assembly, and preparing files for CNC/laser.",
  },
  {
    icon: <FiFeather className="text-4xl" />,
    title: "Surface Finishes & Aesthetics",
    desc: "Sanding, staining, veneers, eco-friendly finishes and visual choices for product appeal.",
  },
];

const ProductDesign = () => {
  return (
    <div className="min-h-screen bg-[#faf6f2] text-gray-800 py-16 px-4">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Wood Product Designing Course
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Learn to design functional, beautiful, and manufacturable wooden products —
          from concept sketches to ready-to-build technical drawings and prototypes.
        </p>
      </motion.div>

      {/* Top cards */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 lg:grid-cols-3 mb-12">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between border border-gray-200"
        >
          <div>
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-yellow-50 text-yellow-700 mb-4">
              <FiBox className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Course Duration</h3>
            <p className="text-gray-600">3 months (intensive) / 6 months (extended)</p>
          </div>
          <div className="mt-6">
            <p className="text-sm text-gray-500">Hands-on projects, CAD labs & industry visits</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow p-6 border border-gray-200"
        >
          <div>
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-green-50 text-green-700 mb-4">
              <FiTool className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Practical Focus</h3>
            <p className="text-gray-600">Prototyping, joinery, and preparing files for CNC/hand tools.</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow p-6 border border-gray-200"
        >
          <div>
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-orange-50 text-orange-700 mb-4">
              <FiLayers className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Portfolio Ready</h3>
            <p className="text-gray-600">Build 3 finished product designs and a presentation portfolio.</p>
          </div>
        </motion.div>
      </div>

      {/* Modules grid */}
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition"
          >
            <div className="text-amber-600 mb-4 flex justify-center">{m.icon}</div>
            <h4 className="text-lg font-semibold text-center mb-2">{m.title}</h4>
            <p className="text-gray-600 text-sm text-center">{m.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Curriculum & CTA */}
      <div className="max-w-5xl mx-auto mt-12 grid gap-8 md:grid-cols-2">
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow">
          <h3 className="text-2xl font-bold mb-4">Detailed Curriculum (sample)</h3>

          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>Week 1–2:</strong> Material studies, grain selection, and simple sketches.
            </li>
            <li>
              <strong>Week 3–4:</strong> Technical drawing, measurements, and joinery basics.
            </li>
            <li>
              <strong>Week 5–7:</strong> 3D CAD modeling & rendering for wooden products.
            </li>
            <li>
              <strong>Week 8–10:</strong> Prototyping, CNC/laser prep, and mock-up testing.
            </li>
            <li>
              <strong>Week 11–12:</strong> Final product, finishing, portfolio and client presentation.
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Who should join?</h3>
            <p className="text-gray-600 mb-4">
              Woodworkers, carpenters, small-scale manufacturers, designers, and students who want
              to create market-ready wood products.
            </p>

            <h4 className="font-semibold mb-2">What you will deliver</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>3 concept-to-prototype product projects</li>
              <li>CAD files and technical drawings</li>
              <li>Polished portfolio and client pitch</li>
            </ul>
          </div>

          <div className="mt-6">
            <a
              href="/contact"
              className="inline-block w-full text-center bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg shadow"
            >
              Enquire / Enroll Now
            </a>
            <p className="text-xs text-gray-500 mt-3">Small batch seats — hands-on coaching included.</p>
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="max-w-5xl mx-auto text-center mt-12 text-gray-600">
        <p>
          Want this page customised (icons, images, exact duration/fees)? Send details — I’ll adapt it
          to your Oniv Woods style.
        </p>
      </div>
    </div>
  );
};

export default ProductDesign;
