import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiAward,
  FiCheckCircle,
  FiCompass,
  FiFileText,
  FiGlobe,
  FiLayers,
  FiStar,
  FiTool,
  FiUsers,
  FiAlertCircle,
  FiTarget,
} from "react-icons/fi";
import { challengeDetails } from "../components/ChallengeData";
import NavbarPro from "../components/NavbarPro";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";
import SectionHeading from "../components/SectionHeading";
import FinalCTAPro from "../components/FinalCTAPro";

export default function ChallengeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const challenge = challengeDetails[id];
  const [openModal, setOpenModal] = useState(false);

  if (!challenge) {
    return (
      <div className="min-h-screen flex flex-col justify-between" style={{ background: "var(--oniv-ivory)", color: "var(--oniv-charcoal)" }}>
        <NavbarPro onEnroll={() => navigate("/challenges")} />
        <div className="max-w-xl mx-auto text-center px-6 py-40">
          <h2 className="font-display text-4xl mb-4" style={{ color: "var(--oniv-charcoal)" }}>
            Challenge Track Not Found
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(30,27,24,0.65)" }}>
            The requested competition brief does not exist or has concluded.
          </p>
          <Link to="/challenges" className="btn-oniv-primary">
            Explore All Challenges
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const {
    num,
    title,
    category,
    heroSubtitle,
    heroImage,
    scope,
    brief,
    problemStatement,
    designObjective,
    requirements,
    process,
    submission,
    criteria,
    selectedWork,
  } = challenge;

  return (
    <div className="min-h-screen" style={{ background: "var(--oniv-ivory)", color: "var(--oniv-charcoal)" }}>
      <EnquiryModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        defaultCourse={`Challenge Registration: Track ${num} - ${title}`}
      />
      <NavbarPro onEnroll={() => setOpenModal(true)} />

      {/* ========================================================================= */}
      {/* 1. CHALLENGE HERO */}
      {/* ========================================================================= */}
      <section
        className="relative w-full min-h-[72vh] flex items-center overflow-hidden pt-28 pb-20"
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs mb-6 font-medium" style={{ color: "rgba(249,246,240,0.7)" }}>
            <Link to="/" className="hover:underline hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/challenges" className="hover:underline hover:text-white transition-colors">Challenges</Link>
            <span>/</span>
            <span style={{ color: "var(--oniv-amber)" }}>Track {num}</span>
          </nav>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full mb-4"
              style={{ color: "var(--oniv-ivory)", background: "rgba(176,113,60,0.25)" }}
            >
              <span className="eyebrow text-[10px]">Track {num} • {category}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-tight"
              style={{ color: "var(--oniv-ivory)" }}
            >
              {title}
            </motion.h1>

            {heroSubtitle && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-4 text-lg sm:text-xl font-light leading-relaxed"
                style={{ color: "rgba(249,246,240,0.9)" }}
              >
                {heroSubtitle}
              </motion.p>
            )}

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => setOpenModal(true)}
                className="btn-oniv-primary text-xs uppercase tracking-wider font-bold py-3.5 px-8 shadow-xl"
              >
                REGISTER FOR TRACK {num}
              </button>

              <Link
                to="/challenges"
                className="btn-oniv-outline text-xs uppercase tracking-wider font-bold py-3.5 px-6 inline-flex items-center gap-2"
              >
                <FiArrowLeft size={15} />
                <span>All Challenge Tracks</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scope Bar */}
      {scope && (
        <section className="border-b" style={{ background: "var(--oniv-beige)", borderColor: "rgba(74,53,37,0.1)" }}>
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FiUsers className="text-amber-700" size={18} />
              <span className="text-sm font-semibold" style={{ color: "var(--oniv-charcoal)" }}>
                Target Eligibility: <span className="font-normal">{scope}</span>
              </span>
            </div>
            <span className="eyebrow text-[11px]" style={{ color: "var(--oniv-amber-dark)" }}>
              Trade Expo Indonesia Showcase Finalist Track
            </span>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 2. CHALLENGE BRIEF */}
      {/* ========================================================================= */}
      {brief && (
        <section className="py-20 border-b" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
          <div className="max-w-5xl mx-auto px-6">
            <span className="eyebrow block mb-3" style={{ color: "var(--oniv-amber-dark)" }}>
              The Challenge Brief
            </span>
            <h2 className="font-display text-2xl sm:text-4xl leading-tight mb-6" style={{ color: "var(--oniv-charcoal)" }}>
              Executive Design Mission
            </h2>
            <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: "rgba(30,27,24,0.78)" }}>
              {brief}
            </p>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 3 & 4. THE PROBLEM & DESIGN OBJECTIVE */}
      {/* ========================================================================= */}
      {(problemStatement || designObjective) && (
        <section className="py-24 border-b" style={{ background: "var(--oniv-ivory)", borderColor: "rgba(74,53,37,0.1)" }}>
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 lg:gap-14">
            {/* The Problem */}
            {problemStatement && (
              <div
                className="p-8 sm:p-10 rounded-2xl bg-white border shadow-sm flex flex-col justify-between"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(176,113,60,0.15)", color: "var(--oniv-amber-dark)" }}
                  >
                    <FiAlertCircle size={24} />
                  </div>
                  <span className="eyebrow block mb-2" style={{ color: "var(--oniv-amber-dark)" }}>
                    Context & Friction
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl mb-4" style={{ color: "var(--oniv-charcoal)" }}>
                    The Problem
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(30,27,24,0.75)" }}>
                    {problemStatement}
                  </p>
                </div>
              </div>
            )}

            {/* Design Objective */}
            {designObjective && (
              <div
                className="p-8 sm:p-10 rounded-2xl bg-white border shadow-sm flex flex-col justify-between"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(176,113,60,0.15)", color: "var(--oniv-amber-dark)" }}
                  >
                    <FiTarget size={24} />
                  </div>
                  <span className="eyebrow block mb-2" style={{ color: "var(--oniv-amber-dark)" }}>
                    The Breakthrough Target
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl mb-4" style={{ color: "var(--oniv-charcoal)" }}>
                    Design Objective
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(30,27,24,0.75)" }}>
                    {designObjective}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 5. REQUIREMENTS */}
      {/* ========================================================================= */}
      {requirements?.length > 0 && (
        <section className="py-24 border-b" style={{ background: "var(--oniv-beige)", borderColor: "rgba(74,53,37,0.1)" }}>
          <div className="max-w-5xl mx-auto px-6">
            <SectionHeading
              eyebrow="Mandatory Specifications"
              title="Technical & Material Requirements"
              subtitle="All submissions must strictly adhere to the following fabrication constraints."
            />

            <div className="space-y-4 mt-12">
              {requirements.map((req, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white border flex items-start gap-4 shadow-sm"
                  style={{ borderColor: "rgba(74,53,37,0.12)" }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(176,113,60,0.15)", color: "var(--oniv-amber-dark)" }}
                  >
                    <FiCheckCircle size={15} />
                  </div>
                  <p className="text-sm sm:text-base font-medium" style={{ color: "var(--oniv-charcoal)" }}>
                    {req}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 6. PROCESS (4 PHASES) */}
      {/* ========================================================================= */}
      {process?.length > 0 && (
        <section className="py-24 border-b" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              align="center"
              eyebrow="Design Roadmap"
              title="Execution & Prototyping Process"
              subtitle="From material diagnostics to master assembly and final exhibition finishing."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {process.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-8 rounded-2xl bg-white border flex flex-col justify-between shadow-sm hover:shadow-xl transition-all"
                  style={{ borderColor: "rgba(74,53,37,0.12)" }}
                >
                  <div>
                    <span className="font-display text-3xl font-bold block mb-4" style={{ color: "var(--oniv-amber-dark)" }}>
                      {p.step}
                    </span>
                    <h4 className="font-display text-xl mb-2" style={{ color: "var(--oniv-charcoal)" }}>
                      {p.title}
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(30,27,24,0.65)" }}>
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 7. SUBMISSION GUIDELINES */}
      {/* ========================================================================= */}
      {submission?.length > 0 && (
        <section className="py-24 border-b" style={{ background: "var(--oniv-beige)", borderColor: "rgba(74,53,37,0.1)" }}>
          <div className="max-w-5xl mx-auto px-6">
            <SectionHeading
              eyebrow="Dossier Deliverables"
              title="Submission Deliverables"
              subtitle="What to prepare and submit for review by the India & Indonesia international jury."
            />

            <div className="space-y-4 mt-12">
              {submission.map((sub, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white border flex items-start gap-4 shadow-sm"
                  style={{ borderColor: "rgba(74,53,37,0.12)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "var(--oniv-beige)", color: "var(--oniv-amber-dark)" }}
                  >
                    <FiFileText size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-base mb-1" style={{ color: "var(--oniv-charcoal)" }}>
                      Requirement {idx + 1}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(30,27,24,0.7)" }}>
                      {sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 8. EVALUATION CRITERIA */}
      {/* ========================================================================= */}
      {criteria?.length > 0 && (
        <section className="py-24 border-b" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              align="center"
              eyebrow="Jury Standards"
              title="Evaluation Matrix"
              subtitle="Transparent, rigorous standards ensuring only truly exceptional, sustainable concepts reach the finals."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-16">
              {criteria.map((c, i) => (
                <div
                  key={c.title}
                  className="p-8 rounded-2xl bg-white border flex flex-col justify-between shadow-sm"
                  style={{ borderColor: "rgba(74,53,37,0.12)" }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-display text-3xl font-bold" style={{ color: "var(--oniv-amber-dark)" }}>
                        {c.score}
                      </span>
                      <FiStar className="text-amber-500" size={18} />
                    </div>
                    <h4 className="font-display text-lg mb-2.5" style={{ color: "var(--oniv-charcoal)" }}>
                      {c.title}
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(30,27,24,0.65)" }}>
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 9. SELECTED WORK / SHOWCASE PROTOTYPE */}
      {/* ========================================================================= */}
      {selectedWork && (
        <section className="py-24 border-b" style={{ background: "var(--oniv-ivory)", borderColor: "rgba(74,53,37,0.1)" }}>
          <div className="max-w-5xl mx-auto px-6">
            <SectionHeading
              align="center"
              eyebrow="Showcase Benchmark"
              title="Selected Finalist Prototype"
              subtitle="An example of benchmark craftsmanship and joinery execution previously curated for Trade Expo Indonesia."
            />

            <div className="mt-14 rounded-3xl overflow-hidden border bg-white shadow-xl" style={{ borderColor: "rgba(74,53,37,0.12)" }}>
              <div className="h-96 sm:h-[480px] overflow-hidden bg-gray-100">
                <img
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="eyebrow text-[10px] block mb-1" style={{ color: "var(--oniv-amber-dark)" }}>
                    TEI Exhibition Prototype
                  </span>
                  <h3 className="font-display text-2xl" style={{ color: "var(--oniv-charcoal)" }}>
                    {selectedWork.title}
                  </h3>
                  <p className="text-sm mt-1" style={{ color: "rgba(30,27,24,0.7)" }}>
                    {selectedWork.caption}
                  </p>
                </div>

                <button
                  onClick={() => setOpenModal(true)}
                  className="btn-oniv-primary text-xs uppercase tracking-wider font-bold py-3 px-6 shrink-0"
                >
                  Register for Track {num}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 10. FINAL REGISTRATION CTA */}
      {/* ========================================================================= */}
      <FinalCTAPro onEnroll={() => setOpenModal(true)} />

      <Footer />
    </div>
  );
}
