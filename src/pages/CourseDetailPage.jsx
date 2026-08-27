import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiClock,
  FiAward,
  FiTool,
  FiLayers,
  FiCheckCircle,
  FiArrowLeft,
  FiArrowRight,
  FiBookOpen,
  FiUsers,
} from "react-icons/fi";
import { courseDetails } from "../components/CourseData";
import NavbarPro from "../components/NavbarPro";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";
import SectionHeading from "../components/SectionHeading";
import FinalCTAPro from "../components/FinalCTAPro";

export default function CourseDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const courseData = courseDetails[id];
  const [openModal, setOpenModal] = useState(false);

  if (!courseData) {
    return (
      <div className="min-h-screen flex flex-col justify-between" style={{ background: "var(--oniv-ivory)", color: "var(--oniv-charcoal)" }}>
        <NavbarPro onEnroll={() => navigate("/courses")} />
        <div className="max-w-xl mx-auto text-center px-6 py-40">
          <h2 className="font-display text-4xl mb-4">Course Not Found</h2>
          <p className="text-sm mb-8 text-gray-600">The requested program does not exist or has been updated.</p>
          <Link
            to="/courses"
            className="px-6 py-3 rounded-md font-semibold text-sm"
            style={{ background: "var(--oniv-amber)", color: "var(--oniv-ivory)" }}
          >
            Explore All Courses
          </Link>
        </div>
        <Footer />
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
    <div className="min-h-screen" style={{ background: "var(--oniv-ivory)", color: "var(--oniv-charcoal)" }}>
      <EnquiryModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        defaultCourse={title}
      />
      <NavbarPro onEnroll={() => setOpenModal(true)} />

      {/* TOP HERO */}
      <section
        className="relative w-full min-h-[60vh] flex items-center overflow-hidden pt-28 pb-16"
        style={{ background: "var(--oniv-earth)" }}
      >
        {heroImage && (
          <img
            src={heroImage}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,17,14,0.75) 0%, rgba(20,17,14,0.94) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs mb-6" style={{ color: "rgba(249,246,240,0.7)" }}>
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/courses" className="hover:underline">Courses</Link>
            <span>/</span>
            <span style={{ color: "var(--oniv-amber)" }}>{title}</span>
          </div>

          <div className="max-w-3xl">
            <span
              className="eyebrow inline-block mb-3 px-3.5 py-1 rounded-full"
              style={{ color: "var(--oniv-ivory)", background: "rgba(176,113,60,0.25)" }}
            >
              Academic Program
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1]" style={{ color: "var(--oniv-ivory)" }}>
              {title}
            </h1>
            <p className="mt-4 text-lg font-light" style={{ color: "rgba(249,246,240,0.9)" }}>
              {subtitle}
            </p>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(249,246,240,0.7)" }}>
              {heroDesc}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setOpenModal(true)}
                className="px-8 py-3.5 rounded-md font-semibold text-sm transition-opacity hover:opacity-90 cursor-pointer"
                style={{ background: "var(--oniv-amber)", color: "var(--oniv-ivory)" }}
              >
                Enroll in Program
              </button>
              <Link
                to="/courses"
                className="px-6 py-3.5 rounded-md font-semibold text-sm border transition-colors hover:bg-white/10 inline-flex items-center gap-2"
                style={{ borderColor: "rgba(249,246,240,0.4)", color: "var(--oniv-ivory)" }}
              >
                <FiArrowLeft size={16} />
                <span>All Disciplines</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT STATS CARDS */}
      {topCards?.length > 0 && (
        <section className="border-b" style={{ background: "var(--oniv-beige)", borderColor: "rgba(74,53,37,0.1)" }}>
          <div className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-3 gap-6">
            {topCards.map((card, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white border flex items-center gap-4 shadow-sm"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--oniv-beige)", color: "var(--oniv-amber-dark)" }}
                >
                  {card.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-sm" style={{ color: "var(--oniv-charcoal)" }}>
                    {card.title}
                  </h4>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(30,27,24,0.6)" }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* MODULES & LEARNING OUTCOMES */}
      {modules?.length > 0 && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              align="center"
              eyebrow="Comprehensive Syllabus"
              title="What You Will Master"
              subtitle="Structured modules balancing hand-craftsmanship fundamentals with industrial technology."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
              {modules.map((m, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="p-7 rounded-2xl bg-white border flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
                  style={{ borderColor: "rgba(74,53,37,0.12)" }}
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: "var(--oniv-beige)", color: "var(--oniv-amber-dark)" }}
                    >
                      {m.icon}
                    </div>
                    <h3 className="font-display text-lg mb-2" style={{ color: "var(--oniv-charcoal)" }}>
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(30,27,24,0.65)" }}>
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DETAILED CURRICULUM TIMELINE & WHO SHOULD JOIN */}
      <section className="py-24 border-t" style={{ background: "var(--oniv-beige)", borderColor: "rgba(74,53,37,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Week-by-Week */}
          {curriculum?.length > 0 && (
            <div className="lg:col-span-7">
              <span className="eyebrow block mb-2" style={{ color: "var(--oniv-amber-dark)" }}>
                Timeline Breakdown
              </span>
              <h2 className="font-display text-2xl sm:text-3xl mb-8" style={{ color: "var(--oniv-charcoal)" }}>
                Curriculum Progression
              </h2>

              <div className="space-y-4">
                {curriculum.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-white border flex items-start gap-4 shadow-sm"
                    style={{ borderColor: "rgba(74,53,37,0.1)" }}
                  >
                    <span
                      className="px-3 py-1 rounded-md text-xs font-bold shrink-0"
                      style={{ background: "var(--oniv-beige)", color: "var(--oniv-amber-dark)" }}
                    >
                      {item.week}
                    </span>
                    <p className="text-sm font-medium pt-0.5" style={{ color: "var(--oniv-charcoal)" }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Right: Who Should Join & Outcomes */}
          <div className="lg:col-span-5">
            <div
              className="p-8 rounded-2xl bg-white border shadow-md space-y-8"
              style={{ borderColor: "rgba(74,53,37,0.12)" }}
            >
              <div>
                <span className="eyebrow block mb-2" style={{ color: "var(--oniv-amber-dark)" }}>
                  Target Candidates
                </span>
                <h3 className="font-display text-xl mb-3" style={{ color: "var(--oniv-charcoal)" }}>
                  Who Should Join?
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(30,27,24,0.7)" }}>
                  {whoShouldJoin}
                </p>
              </div>

              {outcomes?.length > 0 && (
                <div className="border-t pt-6" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
                  <span className="eyebrow block mb-3" style={{ color: "var(--oniv-amber-dark)" }}>
                    Program Deliverables
                  </span>
                  <h3 className="font-display text-xl mb-4" style={{ color: "var(--oniv-charcoal)" }}>
                    What You Will Achieve
                  </h3>
                  <ul className="space-y-2.5 text-sm" style={{ color: "rgba(30,27,24,0.75)" }}>
                    {outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <FiCheckCircle className="text-amber-600 shrink-0" size={16} />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-2">
                <button
                  onClick={() => setOpenModal(true)}
                  className="w-full py-3.5 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90 cursor-pointer"
                  style={{ background: "var(--oniv-amber)", color: "var(--oniv-ivory)" }}
                >
                  Enquire / Enroll Now
                </button>
                <p className="text-center text-xs mt-2" style={{ color: "rgba(30,27,24,0.5)" }}>
                  Limited cohort size per workshop cycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTAPro onEnroll={() => setOpenModal(true)} />

      <Footer />
    </div>
  );
}
