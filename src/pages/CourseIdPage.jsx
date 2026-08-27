import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { courseDetails } from "../Components/CourseData";
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import EnquiryModal from "../Components/EnquiryModal";

export default function CourseIdPage() {
  const { id } = useParams();
  const courseData = courseDetails[id];

  const [openEnquiry, setOpenEnquiry] = useState(false);

  if (!courseData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Course Not Found
      </div>
    );
  }

  const {
    title,
    subtitle,
    heroDesc,
    heroImage,
    topCards,
    modules,
    curriculum,
    whoShouldJoin,
    outcomes,
  } = courseData;

  return (
    <>

      <Navbar />
      <div className="bg-black/50 h-20"></div>
      <div className="min-h-screen bg-[#f7f3ef] text-gray-900">
        {/* ================= HERO ================= */}
        <section className="py-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
          >
            {/* Text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                {title}
              </h1>
              <p className="text-xl text-gray-700 mb-3">{subtitle}</p>
              <p className="text-gray-600">{heroDesc}</p>
            </div>

            {/* Image */}
            {heroImage && (
              <img
                src={heroImage}
                alt={title}
                loading="lazy"
                className="w-full h-80 object-cover rounded-3xl shadow-lg"
              />
            )}
          </motion.div>
        </section>

        {/* ================= TOP HIGHLIGHTS ================= */}
        {topCards?.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 mb-20">
            <div className="grid gap-8 md:grid-cols-3">
              {topCards.map((card, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-2xl p-7 shadow border border-gray-200"
                >
                  <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* ================= MODULES ================= */}
        {modules?.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">
              What You Will Learn
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {modules.map((module, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-white rounded-2xl p-6 shadow border border-gray-200 text-center"
                >
                  <div className="flex justify-center text-indigo-600 mb-4">
                    {module.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    {module.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{module.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* ================= CURRICULUM + WHO ================= */}
        <section className="max-w-6xl mx-auto px-4 pb-24 grid gap-10 md:grid-cols-2">
          {/* Curriculum */}
          {curriculum?.length > 0 && (
            <div className="bg-white rounded-2xl p-8 shadow border border-gray-200">
              <h3 className="text-2xl font-bold mb-5">
                Detailed Curriculum
              </h3>
              <ul className="space-y-3 text-gray-700">
                {curriculum.map((item, index) => (
                  <li key={index}>
                    <span className="font-semibold">
                      {item.week}:
                    </span>{" "}
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Who Should Join */}
          <div className="bg-white rounded-2xl p-8 shadow border border-gray-200 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Who Should Join?
              </h3>
              <p className="text-gray-600 mb-3">
                {whoShouldJoin}
              </p>

              {outcomes?.length > 0 && (
                <>
                  <h4 className="font-semibold mb-2">
                    What You Will Achieve
                  </h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    {outcomes.map((outcome, i) => (
                      <li key={i}>{outcome}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <div className="mt-3">
              <button
                onClick={() => setOpenEnquiry(true)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl shadow transition"
              >
                Enquire / Enroll Now
              </button>
              <p className="text-xs text-gray-500 mt-3 text-center">
                Limited seats • Project-based learning
              </p>
            </div>
          </div>
        </section>
      </div>

      <EnquiryModal
        open={openEnquiry}
        onClose={() => setOpenEnquiry(false)}
      />
      <Footer />
    </>
  );
}