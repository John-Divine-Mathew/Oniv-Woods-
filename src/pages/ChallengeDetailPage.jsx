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
import SEO from "../components/SEO";

export default function ChallengeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const challenge = challengeDetails[id];
  const [openModal, setOpenModal] = useState(false);

  if (!challenge) {
    return (
      <div className="min-h-screen flex flex-col justify-between overflow-x-hidden" style={{ background: "var(--oniv-ivory)", color: "var(--oniv-charcoal)" }}>
        <NavbarPro onEnroll={() => navigate("/challenges")} />
        <div className="max-w-xl mx-auto text-center px-6 py-40">
          <h2 className="font-display text-3xl sm:text-4xl mb-4" style={{ color: "var(--oniv-charcoal)" }}>
            Challenge Track Not Found
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(30,27,24,0.65)" }}>
            The requested competition brief does not exist or has concluded.
          </p>
          <Link to="/challenges" className="btn-oniv-primary text-xs">
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
    <div className="min-h-screen overflow-x-hidden" style={{ background: "var(--oniv-ivory)", color: "var(--oniv-charcoal)" }}>
      <SEO
        title={`Track ${num}: ${title} Brief`}
        description={brief || heroSubtitle || `Design brief and jury criteria for Track ${num} (${category}) at Oniv Woods Global Product Design Challenge.`}
        canonical={`/challenge/${id}`}
        ogType="article"
        image={heroImage || "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Event",
          "name": `Oniv Woods Challenge Track ${num}: ${title}`,
          "description": brief || heroSubtitle,
          "organizer": {
            "@type": "Organization",
            "name": "ONIV WOODS School of Design Wisdom",
            "url": "https://onivwoods.com"
          }
        }}
      />
      <EnquiryModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        defaultCourse={`Challenge Registration: Track ${num} - ${title}`}
      />
      <NavbarPro onEnroll={() => setOpenModal(true)} />

      {/* 1. CHALLENGE HERO */}
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
            <Link to="/challenges" className="hover:underline hover:text-white transition-colors">Challenges</Link>
            <span>/</span>
            <span className="text-amber-400">Track {num}</span>
          </nav>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 text-[10px]"
              style={{ color: "var(--oniv-ivory)", background: "rgba(176,113,60,0.25)" }}
            >
              <span className="eyebrow text-[10px]">Track {num} • {category}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-3xl sm:text-5xl md:text-6xl leading-[1.12] sm:leading-[1.08] tracking-tight text-white"
            >
              {title}
            </motion.h1>

            {heroSubtitle && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-3 sm:mt-4 text-base sm:text-xl font-light leading-relaxed text-stone-200"
              >
                {heroSubtitle}
              </motion.p>
            )}

            {/* Action CTAs */}
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
                REGISTER FOR TRACK {num}
              </button>

              <Link
                to="/challenges"
                className="w-full sm:w-auto btn-oniv-outline text-xs uppercase tracking-wider font-bold py-3.5 px-6 inline-flex items-center justify-center gap-2 text-center"
              >
                <FiArrowLeft size={14} />
                <span>All Challenge Tracks</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scope Bar */}
      {scope && (
        <section className="border-b" style={{ background: "var(--oniv-beige)", borderColor: "rgba(74,53,37,0.1)" }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
            <div className="flex items-center gap-2.5">
              <FiUsers className="text-amber-700 shrink-0" size={16} />
              <span className="text-xs sm:text-sm font-semibold" style={{ color: "var(--oniv-charcoal)" }}>
                Target Eligibility: <span className="font-normal">{scope}</span>
              </span>
            </div>
            <span className="eyebrow text-[10px] sm:text-[11px]" style={{ color: "var(--oniv-amber-dark)" }}>
              Trade Expo Indonesia Showcase Finalist Track
            </span>
          </div>
        </section>
      )}

      {/* 2. CHALLENGE BRIEF */}
      {brief && (
        <section className="py-14 sm:py-20 border-b" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
          <div className="max-w-5xl mx-auto px-5 sm:px-6">
            <span className="eyebrow block mb-2 sm:mb-3" style={{ color: "var(--oniv-amber-dark)" }}>
              The Challenge Brief
            </span>
            <h2 className="font-display text-xl sm:text-3xl md:text-4xl leading-tight mb-4 sm:mb-6" style={{ color: "var(--oniv-charcoal)" }}>
              Executive Design Mission
            </h2>
            <p className="text-sm sm:text-lg leading-relaxed font-normal" style={{ color: "rgba(30,27,24,0.78)" }}>
              {brief}
            </p>
          </div>
        </section>
      )}

      {/* 3 & 4. THE PROBLEM & DESIGN OBJECTIVE */}
      {(problemStatement || designObjective) && (
        <section className="py-16 sm:py-24 border-b" style={{ background: "var(--oniv-ivory)", borderColor: "rgba(74,53,37,0.1)" }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 lg:gap-14">
            {/* The Problem */}
            {problemStatement && (
              <div
                className="p-6 sm:p-10 rounded-2xl bg-white border shadow-xs flex flex-col justify-between"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div>
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-5"
                    style={{ background: "rgba(176,113,60,0.15)", color: "var(--oniv-amber-dark)" }}
                  >
                    <FiAlertCircle size={22} />
                  </div>
                  <span className="eyebrow block mb-1.5 sm:mb-2" style={{ color: "var(--oniv-amber-dark)" }}>
                    Context & Friction
                  </span>
                  <h3 className="font-display text-xl sm:text-3xl mb-3 sm:mb-4" style={{ color: "var(--oniv-charcoal)" }}>
                    The Problem
                  </h3>
                  <p className="text-xs sm:text-base leading-relaxed" style={{ color: "rgba(30,27,24,0.75)" }}>
                    {problemStatement}
                  </p>
                </div>
              </div>
            )}

            {/* Design Objective */}
            {designObjective && (
              <div
                className="p-6 sm:p-10 rounded-2xl bg-white border shadow-xs flex flex-col justify-between"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div>
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-5"
                    style={{ background: "rgba(176,113,60,0.15)", color: "var(--oniv-amber-dark)" }}
                  >
                    <FiTarget size={22} />
                  </div>
                  <span className="eyebrow block mb-1.5 sm:mb-2" style={{ color: "var(--oniv-amber-dark)" }}>
                    Vision & Goals
                  </span>
                  <h3 className="font-display text-xl sm:text-3xl mb-3 sm:mb-4" style={{ color: "var(--oniv-charcoal)" }}>
                    Design Objective
                  </h3>
                  <p className="text-xs sm:text-base leading-relaxed" style={{ color: "rgba(30,27,24,0.75)" }}>
                    {designObjective}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 5. REQUIREMENTS */}
      {requirements?.length > 0 && (
        <section className="py-16 sm:py-24 border-b" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
          <div className="max-w-5xl mx-auto px-5 sm:px-6">
            <SectionHeading
              eyebrow="Guidelines"
              title="Track Specific Technical Requirements"
              subtitle="Material standards, joinery parameters, and sizing constraints for this challenge track."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
              {requirements.map((req, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-xl bg-white border flex items-start gap-3.5 shadow-xs"
                  style={{ borderColor: "rgba(74,53,37,0.12)" }}
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(176,113,60,0.15)", color: "var(--oniv-amber-dark)" }}
                  >
                    <FiCheckCircle size={14} />
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(30,27,24,0.8)" }}>
                    {req}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. PROCESS ROADMAP */}
      {process?.length > 0 && (
        <section className="py-16 sm:py-24" style={{ background: "var(--oniv-beige)" }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <SectionHeading
              align="center"
              eyebrow="Execution Pathway"
              title="How Your Submission is Evaluated"
              subtitle="Step-by-step transition from digital dossier to physical workshop prototype."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 mt-10 sm:mt-16">
              {process.map((p, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-white border shadow-xs flex flex-col justify-between"
                  style={{ borderColor: "rgba(74,53,37,0.12)" }}
                >
                  <div>
                    <span className="font-display text-2xl sm:text-3xl font-bold block mb-2 sm:mb-4" style={{ color: "var(--oniv-amber-dark)" }}>
                      0{idx + 1}
                    </span>
                    <h4 className="font-display text-lg sm:text-xl mb-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                      {p.title}
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(30,27,24,0.65)" }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. EVALUATION CRITERIA */}
      {criteria?.length > 0 && (
        <section className="py-16 sm:py-24 border-b" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <SectionHeading
              align="center"
              eyebrow="Jury Standards"
              title="Track Scoring Matrix"
              subtitle="Detailed percentage weighting applied by our international judging panel."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7 mt-10 sm:mt-16">
              {criteria.map((c, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-white border shadow-xs"
                  style={{ borderColor: "rgba(74,53,37,0.12)" }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display text-2xl sm:text-3xl font-bold" style={{ color: "var(--oniv-amber-dark)" }}>
                      {c.weight}
                    </span>
                    <FiStar className="text-amber-500" size={16} />
                  </div>
                  <h4 className="font-display text-base sm:text-lg mb-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                    {c.title}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(30,27,24,0.65)" }}>
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. FINAL CTA */}
      <FinalCTAPro onEnroll={() => setOpenModal(true)} />

      <Footer />
    </div>
  );
}
