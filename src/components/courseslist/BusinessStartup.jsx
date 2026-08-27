// src/pages/BusinessStartup.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FiTrendingUp,
  FiUsers,
  FiBook,
  FiBriefcase,
  FiTarget,
  FiShoppingBag,
  FiStar,
  FiGlobe,
} from "react-icons/fi";

const modules = [
  {
    icon: <FiBriefcase className="text-4xl" />,
    title: "Startup Fundamentals",
    desc: "Understanding entrepreneurship, opportunity identification and problem–solution fit.",
  },
  {
    icon: <FiTrendingUp className="text-4xl" />,
    title: "Business Planning",
    desc: "Craft structured business models, value propositions and monetization strategies.",
  },
  {
    icon: <FiUsers className="text-4xl" />,
    title: "Team Building",
    desc: "Learn hiring, leadership, team communication and workflow management.",
  },
  {
    icon: <FiTarget className="text-4xl" />,
    title: "Marketing & Branding",
    desc: "Create strong brand identity, use digital marketing and plan customer outreach.",
  },
  {
    icon: <FiStar className="text-4xl" />,
    title: "Product Development Cycle",
    desc: "Learn how real products are conceptualized, prototyped, tested and launched.",
  },
  {
    icon: <FiShoppingBag className="text-4xl" />,
    title: "Sales & Scaling",
    desc: "Sales funnel, customer retention, business automation and scaling strategies.",
  },
];

const BusinessStartup = () => {
  return (
    <div className="min-h-screen bg-[#f7f3ef] text-gray-900 py-16 px-4">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Business & Startup Course
        </h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Learn how to build, launch and grow a successful business from scratch. 
          From business planning to branding, marketing and scaling — everything is covered with real case studies.
        </p>
      </motion.div>

      {/* HIGHLIGHT CARDS */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 mb-14">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow p-6 border border-gray-200"
        >
          <div className="h-16 w-16 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl mb-4">
            <FiBook className="text-3xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Course Duration</h3>
          <p className="text-gray-600">3 months (regular) / 6 months (advanced)</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow p-6 border border-gray-200"
        >
          <div className="h-16 w-16 flex items-center justify-center bg-green-50 text-green-600 rounded-xl mb-4">
            <FiUsers className="text-3xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Mentorship Focus</h3>
          <p className="text-gray-600">
            Learn directly from industry professionals, startup founders and market experts.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow p-6 border border-gray-200"
        >
          <div className="h-16 w-16 flex items-center justify-center bg-amber-50 text-amber-600 rounded-xl mb-4">
            <FiTarget className="text-3xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Real Projects</h3>
          <p className="text-gray-600">
            Build your own business model, marketing strategy and financial plan during the course.
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
          <h3 className="text-2xl font-bold mb-4">Course Curriculum</h3>
          <ul className="space-y-3 text-gray-700">
            <li><strong>Week 1–2:</strong> Understanding Market Problems & Opportunity Research.</li>
            <li><strong>Week 3–4:</strong> Create Business Model Canvas & Value Proposition.</li>
            <li><strong>Week 5–6:</strong> Branding, Logo Identity & Story Building.</li>
            <li><strong>Week 7–8:</strong> Digital Marketing, Social Media Ads & Sales Funnel Setup.</li>
            <li><strong>Week 9–10:</strong> Build MVP / Prototype & Validate with Real Users.</li>
            <li><strong>Week 11–12:</strong> Pitch Deck, Funding Basics & Scaling Strategies.</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Who Should Join?</h3>
            <p className="text-gray-600 mb-4">
              Students, freelancers, small business owners and anyone planning to start their own company.
            </p>

            <h4 className="font-semibold mb-2">What You Will Build</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Your own business model</li>
              <li>Complete branding & marketing strategy</li>
              <li>Prototype / MVP for your startup idea</li>
              <li>Investor-ready pitch deck</li>
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
              Limited seats — mentorship-based course.
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER NOTE */}
      <div className="max-w-5xl mx-auto text-center mt-14 text-gray-600">
        <p>Need hero image or banner design for this page? Tell me — I will create it.</p>
      </div>
    </div>
  );
};

export default BusinessStartup;
