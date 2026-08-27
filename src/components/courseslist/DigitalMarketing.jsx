// src/pages/DigitalMarketing.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FiTrendingUp,
  FiCamera,
  FiGlobe,
  FiPieChart,
  FiUserCheck,
  FiSmartphone,
  FiSearch,
  FiShoppingCart,
  FiCheckCircle,
} from "react-icons/fi";

const modules = [
  {
    icon: <FiSearch className="text-4xl" />,
    title: "SEO & Website Optimization",
    desc: "Learn on-page, off-page SEO, keywords, backlinks and ranking strategies.",
  },
  {
    icon: <FiSmartphone className="text-4xl" />,
    title: "Social Media Marketing",
    desc: "Master Instagram, Facebook, YouTube, LinkedIn and ad campaigns.",
  },
  {
    icon: <FiCamera className="text-4xl" />,
    title: "Content Creation",
    desc: "Create high-converting videos, posts, ads and brand storytelling.",
  },
  {
    icon: <FiPieChart className="text-4xl" />,
    title: "Analytics & Performance",
    desc: "Track results using Google Analytics, Meta Pixel & Data Reports.",
  },
  {
    icon: <FiShoppingCart className="text-4xl" />,
    title: "E-Commerce Marketing",
    desc: "Boost online store sales using performance ads, funnels, and CRO.",
  },
  {
    icon: <FiTrendingUp className="text-4xl" />,
    title: "Lead Generation",
    desc: "Learn funnels, landing pages, automation & CRM tools.",
  },
];

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-[#f7f3ef] text-gray-900 py-16 px-4">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Digital Marketing Course
        </h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Learn social media marketing, SEO, ad campaigns, content creation, 
          branding and analytics — with real-world projects and strategies used by top companies.
        </p>
      </motion.div>

      {/* HIGHLIGHT CARDS */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 mb-14">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow p-6 border border-gray-200"
        >
          <div className="h-16 w-16 flex items-center justify-center bg-purple-50 text-purple-600 rounded-xl mb-4">
            <FiGlobe className="text-3xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Online Ads & Marketing</h3>
          <p className="text-gray-600">
            Learn Meta Ads, Google Ads, Re-targeting & Lead Funnels.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow p-6 border border-gray-200"
        >
          <div className="h-16 w-16 flex items-center justify-center bg-green-50 text-green-600 rounded-xl mb-4">
            <FiUserCheck className="text-3xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Beginner Friendly</h3>
          <p className="text-gray-600">
            Step-by-step teaching with real case studies and examples.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow p-6 border border-gray-200"
        >
          <div className="h-16 w-16 flex items-center justify-center bg-yellow-50 text-yellow-600 rounded-xl mb-4">
            <FiCheckCircle className="text-3xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Live Projects</h3>
          <p className="text-gray-600">
            Handle real campaigns, analytics and client-style assignments.
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
            <li><strong>Week 1–2:</strong> Social Media Basics, Branding & Ad Setup.</li>
            <li><strong>Week 3–4:</strong> SEO, Keyword Research & Blogging.</li>
            <li><strong>Week 5–6:</strong> Facebook & Instagram Ads Management.</li>
            <li><strong>Week 7–8:</strong> Google Ads, Search Ads & YouTube Strategy.</li>
            <li><strong>Week 9–10:</strong> Analytics, Performance Tracking & Automation.</li>
            <li><strong>Week 11–12:</strong> Real Projects + Portfolio + Certification.</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Who Can Join?</h3>
            <p className="text-gray-600 mb-4">
              Students, beginners, influencers, small business owners, freelancers or anyone 
              who wants to master online marketing and grow brands.
            </p>

            <h4 className="font-semibold mb-2">You Will Learn To</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Run Facebook & Google Ads</li>
              <li>Grow Instagram / YouTube Channels</li>
              <li>Create High-Converting Content</li>
              <li>Generate Leads & Sales for Clients</li>
              <li>Work as a Digital Marketer / Freelancer</li>
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
              Live campaigns + internship-style projects included.
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="max-w-5xl mx-auto text-center mt-14 text-gray-600">
        <p>I can also generate a hero banner / course thumbnail image. Tell me if you want!</p>
      </div>
    </div>
  );
};

export default DigitalMarketing;
