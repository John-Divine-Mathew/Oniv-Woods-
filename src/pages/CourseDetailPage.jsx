import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  FiChevronDown,
  FiChevronUp,
  FiCpu,
  FiGlobe,
} from "react-icons/fi";
import { courseDetails } from "../components/CourseData";
import NavbarPro from "../components/NavbarPro";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";
import SectionHeading from "../components/SectionHeading";
import FinalCTAPro from "../components/FinalCTAPro";
import SEO from "../components/SEO";

// Course Specific FAQs
const COURSE_FAQS = [
  {
    q: "Do I need prior woodworking, machine, or software experience?",
    a: "No prior experience is necessary for our foundation studio modules. We begin with material science, hand-plane calibration, and workshop safety protocols before advancing to heavy machinery and parametric CAD.",
  },
  {
    q: "How much of the program is hands-on practical work?",
    a: "Over 80% of student time is spent in physical production workshops, digital fabrication labs, and studio workbench environments creating full-scale prototypes.",
  },
  {
    q: "Are the capstone projects eligible for international exhibitions?",
    a: "Yes. Exceptional student projects are curated and evaluated by international juries for showcase opportunities at Trade Expo Indonesia (TEI) and regional design showcases.",
  },
  {
    q: "What certification and portfolio support is provided upon completion?",
    a: "Graduates receive the official Oniv Woods certification and graduate with a verified commercial-grade portfolio, product catalog, and direct placement assistance.",
  },
];

export default function CourseDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const courseData = courseDetails[id];
  const [openModal, setOpenModal] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  if (!courseData) {
    return (
      <div className="min-h-screen flex flex-col justify-between overflow-x-hidden" style={{ background: "var(--oniv-ivory)", color: "var(--oniv-charcoal)" }}>
        <NavbarPro onEnroll={() => navigate("/courses")} />
        <div className="max-w-xl mx-auto text-center px-6 py-40">
          <h2 className="font-display text-3xl sm:text-4xl mb-4" style={{ color: "var(--oniv-charcoal)" }}>Course Not Found</h2>
          <p className="text-sm mb-8" style={{ color: "rgba(30,27,24,0.65)" }}>The requested program does not exist or has been updated.</p>
          <Link
            to="/courses"
            className="btn-oniv-primary text-xs"
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
    <div className="min-h-screen overflow-x-hidden" style={{ background: "var(--oniv-ivory)", color: "var(--oniv-charcoal)" }}>
      <SEO
        title={`${title} Program`}
        description={heroDesc || subtitle || `Master ${title} with master craftsmen and architects at Oniv Woods School of Design Wisdom.`}
        canonical={`/course/${id}`}
        ogType="article"
        image={heroImage || "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1200&auto=format&fit=crop"}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Course",
          "name": title,
          "description": heroDesc || subtitle,
          "provider": {
            "@type": "Organization",
            "name": "ONIV WOODS School of Design Wisdom",
            "sameAs": "https://onivwoods.com"
          }
        }}
      />
      <EnquiryModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        defaultCourse={title}
      />
      <NavbarPro onEnroll={() => setOpenModal(true)} />

      {/* 1. COURSE HERO */}
      <section
        className="relative w-full min-h-[60vh] sm:min-h-[72vh] flex items-center overflow-hidden pt-24 sm:pt-28 pb-14 sm:pb-20"
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
              "linear-gradient(180deg, rgba(20,17,14,0.72) 0%, rgba(20,17,14,0.95) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs mb-4 sm:mb-6 font-medium text-stone-300">
            <Link to="/" className="hover:underline hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/courses" className="hover:underline hover:text-white transition-colors">Courses</Link>
            <span>/</span>
            <span className="text-amber-400 truncate max-w-[200px] sm:max-w-none">{title}</span>
          </nav>

          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow inline-block mb-3 px-3 py-1 rounded-full text-[10px]"
              style={{ color: "var(--oniv-ivory)", background: "rgba(176,113,60,0.25)" }}
            >
              Academic Discipline
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-3xl sm:text-5xl md:text-6xl leading-[1.12] sm:leading-[1.08] tracking-tight text-white"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-3 sm:mt-4 text-base sm:text-xl font-light leading-relaxed text-stone-200"
              >
                {subtitle}
              </motion.p>
            )}

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => setOpenModal(true)}
                className="w-full sm:w-auto btn-oniv-primary text-xs uppercase tracking-wider font-bold py-3.5 px-8 shadow-xl text-center"
              >
                REGISTER NOW
              </button>

              <Link
                to="/courses"
                className="w-full sm:w-auto btn-oniv-outline text-xs uppercase tracking-wider font-bold py-3.5 px-6 inline-flex items-center justify-center gap-2 text-center"
              >
                <FiArrowLeft size={14} />
                <span>All Disciplines</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & TOP HIGHLIGHT STATS */}
      {topCards?.length > 0 && (
        <section className="border-b" style={{ background: "var(--oniv-beige)", borderColor: "rgba(74,53,37,0.1)" }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-6 py-6 sm:py-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {topCards.map((card, i) => (
              <div
                key={i}
                className="p-4 sm:p-6 rounded-xl bg-white border flex items-center gap-3.5 shadow-xs"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--oniv-beige)", color: "var(--oniv-amber-dark)" }}
                >
                  {card.icon}
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm sm:text-base" style={{ color: "var(--oniv-charcoal)" }}>
                    {card.title}
                  </h4>
                  <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "rgba(30,27,24,0.65)" }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Detailed Overview Paragraph */}
      {heroDesc && (
        <section className="py-14 sm:py-20 border-b" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
          <div className="max-w-5xl mx-auto px-5 sm:px-6">
            <span className="eyebrow block mb-2 sm:mb-3" style={{ color: "var(--oniv-amber-dark)" }}>
              Program Overview
            </span>
            <h2 className="font-display text-xl sm:text-3xl md:text-4xl leading-tight mb-4 sm:mb-6" style={{ color: "var(--oniv-charcoal)" }}>
              Mastering the Synergy of Design Conceptualization & Workshop Production.
            </h2>
            <p className="text-sm sm:text-lg leading-relaxed" style={{ color: "rgba(30,27,24,0.75)" }}>
              {heroDesc}
            </p>
          </div>
        </section>
      )}

      {/* 3. WHAT YOU'LL LEARN (MODULES GRID) */}
      {modules?.length > 0 && (
        <section className="py-16 sm:py-24" style={{ background: "var(--oniv-ivory)" }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <SectionHeading
              align="center"
              eyebrow="Core Competencies"
              title="What You'll Learn"
              subtitle="Structured modules balancing foundational craftsmanship with industrial engineering precision."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 mt-10 sm:mt-16">
              {modules.map((m, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="p-6 sm:p-8 rounded-2xl bg-white border flex flex-col justify-between shadow-xs hover:shadow-xl transition-all"
                  style={{ borderColor: "rgba(74,53,37,0.12)" }}
                >
                  <div>
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-5"
                      style={{ background: "var(--oniv-beige)", color: "var(--oniv-amber-dark)" }}
                    >
                      {m.icon}
                    </div>
                    <h3 className="font-display text-lg sm:text-xl mb-2" style={{ color: "var(--oniv-charcoal)" }}>
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(30,27,24,0.68)" }}>
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4 & 5. CURRICULUM, DURATION & LEARNING FORMAT */}
      <section className="py-16 sm:py-24 border-y" style={{ background: "var(--oniv-beige)", borderColor: "rgba(74,53,37,0.1)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left: Week-by-Week Curriculum Progression */}
          {curriculum?.length > 0 && (
            <div className="lg:col-span-7">
              <span className="eyebrow block mb-1.5 sm:mb-2" style={{ color: "var(--oniv-amber-dark)" }}>
                Curriculum Timeline
              </span>
              <h2 className="font-display text-xl sm:text-3xl md:text-4xl mb-6 sm:mb-8" style={{ color: "var(--oniv-charcoal)" }}>
                Progression Breakdown
              </h2>

              <div className="space-y-3 sm:space-y-4">
                {curriculum.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 sm:p-6 rounded-xl bg-white border flex items-start gap-3.5 shadow-xs"
                    style={{ borderColor: "rgba(74,53,37,0.1)" }}
                  >
                    <span
                      className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-bold shrink-0"
                      style={{ background: "var(--oniv-beige)", color: "var(--oniv-amber-dark)" }}
                    >
                      {item.week}
                    </span>
                    <p className="text-xs sm:text-base font-medium pt-0.5 leading-relaxed" style={{ color: "var(--oniv-charcoal)" }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Right: Learning Format & Duration Specs */}
          <div className="lg:col-span-5 space-y-6">
            <div
              className="p-6 sm:p-8 rounded-2xl bg-white border shadow-md space-y-5 sm:space-y-6"
              style={{ borderColor: "rgba(74,53,37,0.12)" }}
            >
              <div>
                <span className="eyebrow block mb-1.5 sm:mb-2" style={{ color: "var(--oniv-amber-dark)" }}>
                  Program Specs
                </span>
                <h3 className="font-display text-xl sm:text-2xl mb-3 sm:mb-4" style={{ color: "var(--oniv-charcoal)" }}>
                  Learning Format
                </h3>

                <ul className="space-y-3 text-xs sm:text-sm" style={{ color: "rgba(30,27,24,0.75)" }}>
                  <li className="flex items-start gap-3">
                    <FiTool className="text-amber-700 shrink-0 mt-0.5" size={15} />
                    <span><strong>Format:</strong> Hands-On Workshop Labs + Studio Benchwork</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiGlobe className="text-amber-700 shrink-0 mt-0.5" size={15} />
                    <span><strong>Location:</strong> India & Indonesia Collaborative Studios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiUsers className="text-amber-700 shrink-0 mt-0.5" size={15} />
                    <span><strong>Cohort:</strong> Master Apprenticeship (Limited Cohort)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiAward className="text-amber-700 shrink-0 mt-0.5" size={15} />
                    <span><strong>Outcome:</strong> Verified Capstone & Portfolio Certification</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 border-t" style={{ borderColor: "rgba(74,53,37,0.08)" }}>
                <button
                  onClick={() => setOpenModal(true)}
                  className="w-full btn-oniv-primary text-xs uppercase tracking-wider font-bold py-3.5 shadow-md"
                >
                  REGISTER NOW
                </button>
                <p className="text-center text-[10px] sm:text-[11px] mt-2" style={{ color: "rgba(30,27,24,0.5)" }}>
                  Admissions are reviewed on a rolling basis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 & 7. WHO IS THIS FOR & PROJECTS */}
      {(whoShouldJoin || outcomes?.length > 0) && (
        <section className="py-16 sm:py-24 border-b" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Who Is This For */}
            {whoShouldJoin && (
              <div
                className="p-6 sm:p-10 rounded-2xl bg-white border shadow-xs flex flex-col justify-between"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div>
                  <span className="eyebrow block mb-1.5 sm:mb-2" style={{ color: "var(--oniv-amber-dark)" }}>
                    Candidate Profile
                  </span>
                  <h3 className="font-display text-xl sm:text-3xl mb-3 sm:mb-4" style={{ color: "var(--oniv-charcoal)" }}>
                    Who Is This For?
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(30,27,24,0.75)" }}>
                    {whoShouldJoin}
                  </p>
                </div>
              </div>
            )}

            {/* Projects / Practical Work */}
            {outcomes?.length > 0 && (
              <div
                className="p-6 sm:p-10 rounded-2xl bg-white border shadow-xs flex flex-col justify-between"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div>
                  <span className="eyebrow block mb-1.5 sm:mb-2" style={{ color: "var(--oniv-amber-dark)" }}>
                    Tangible Deliverables
                  </span>
                  <h3 className="font-display text-xl sm:text-3xl mb-3 sm:mb-4" style={{ color: "var(--oniv-charcoal)" }}>
                    Projects & Practical Outcomes
                  </h3>
                  <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-base" style={{ color: "rgba(30,27,24,0.75)" }}>
                    {outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <FiCheckCircle className="text-amber-700 shrink-0 mt-0.5" size={15} />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 8. INSTRUCTOR & MENTORSHIP */}
      <section className="py-14 sm:py-24" style={{ background: "var(--oniv-beige)" }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center">
          <span className="eyebrow" style={{ color: "var(--oniv-amber-dark)" }}>
            Senior Faculty & Advisory
          </span>
          <h2 className="font-display text-2xl sm:text-4xl mt-1.5 mb-3 sm:mb-4" style={{ color: "var(--oniv-charcoal)" }}>
            Mentorship by Practicing Master Artisans & Architects
          </h2>
          <p className="text-xs sm:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(30,27,24,0.7)" }}>
            Direct one-on-one studio critiques, tool calibration demonstrations, and industrial manufacturing advice from senior faculty across India and Indonesia.
          </p>
        </div>
      </section>

      {/* 9. COURSE FAQS */}
      <section className="py-16 sm:py-24 border-t" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <SectionHeading
            align="center"
            eyebrow="Common Inquiries"
            title="Frequently Asked Questions"
            subtitle="Details regarding admissions, workshop machinery access, and international capstones."
          />

          <div className="mt-8 sm:mt-12 space-y-3 sm:space-y-4">
            {COURSE_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border bg-white overflow-hidden transition-all shadow-xs"
                  style={{ borderColor: "rgba(74,53,37,0.12)" }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-3 cursor-pointer"
                  >
                    <span className="font-display text-base sm:text-lg font-medium" style={{ color: "var(--oniv-charcoal)" }}>
                      {faq.q}
                    </span>
                    <span className="shrink-0 text-amber-700">
                      {isOpen ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1 border-t text-xs sm:text-sm leading-relaxed"
                      style={{ borderColor: "rgba(74,53,37,0.06)", color: "rgba(30,27,24,0.7)" }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. REGISTRATION CTA */}
      <FinalCTAPro onEnroll={() => setOpenModal(true)} />

      <Footer />
    </div>
  );
}
