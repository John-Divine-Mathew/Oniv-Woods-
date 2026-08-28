import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGlobe,
  FiAward,
  FiCompass,
  FiCheckCircle,
  FiArrowRight,
  FiStar,
  FiFileText,
  FiUsers,
  FiTrendingUp,
  FiBox,
  FiLayers,
  FiTool,
} from "react-icons/fi";
import NavbarPro from "../components/NavbarPro";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";
import SectionHeading from "../components/SectionHeading";
import FinalCTAPro from "../components/FinalCTAPro";

// Verified Active Challenge Tracks
const ACTIVE_CHALLENGES = [
  {
    id: "heirloom-timber",
    num: "01",
    title: "The Heirloom Timber Living Object",
    category: "Wooden Lifestyle & Furniture",
    scope: "Individual or Duo Teams",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop",
    brief: "Design and build a functional accent chair, low lounge table, or storage credenza using solid certified hardwood joinery without exposed metal fasteners.",
    keyCriteria: "Tactile Ergonomics, Mortise-and-Tenon Stability, Natural Oil Finish",
  },
  {
    id: "parametric-partitions",
    num: "02",
    title: "Parametric Spatial & Acoustic Partitions",
    category: "Architectural & Spatial Elements",
    scope: "Designers & Architects",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    brief: "Develop a modular sound-diffusing timber partition system optimized for luxury interior spaces and manufactured via 5-axis CNC machining.",
    keyCriteria: "Acoustic Diffusion, CNC Repeatability, Lightweight Modular Assembly",
  },
  {
    id: "circular-wood",
    num: "03",
    title: "Circular Reclaimed Wood Innovation",
    category: "Sustainable Material Innovations",
    scope: "Eco-Design Innovators",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop",
    brief: "Transform industrial timber offcuts, reclaimed architectural wood, or hybrid agro-materials into premium contemporary commercial lifestyle goods.",
    keyCriteria: "Zero-Waste Philosophy, Material Integrity, Commercial Scalability",
  },
];

// Evaluation Criteria
const EVALUATION_CRITERIA = [
  {
    score: "25%",
    title: "Material Innovation",
    desc: "Creative and respectful utilization of natural timber, certified plantation hardwoods, or sustainable composite materials.",
  },
  {
    score: "25%",
    title: "Architectural Silhouette & Form",
    desc: "Distinctive spatial presence, ergonomic comfort, tactile warmth, and poetic relationship between form and function.",
  },
  {
    score: "25%",
    title: "Manufacturability & Precision",
    desc: "Feasible structural joinery, CNC or handcrafted repeatability, workshop safety, and rational production cost efficiency.",
  },
  {
    score: "25%",
    title: "Market Readiness & Export Appeal",
    desc: "Commercial viability, packaging potential, and alignment with global luxury interior and architectural markets.",
  },
];

// 4-Stage Process
const CHALLENGE_STAGES = [
  {
    step: "01",
    title: "Concept Dossier Submission",
    desc: "Submit your design portfolio including freehand sketches, 3D CAD models, material specifications, and design rationale.",
  },
  {
    step: "02",
    title: "International Jury Review",
    desc: "A panel of esteemed architects and industrial design practitioners from India and Indonesia evaluates all entries blind.",
  },
  {
    step: "03",
    title: "Prototyping & Mentorship",
    desc: "Shortlisted finalists receive 1-on-1 masterclass coaching to build full-scale functional prototypes in production workshops.",
  },
  {
    step: "04",
    title: "Trade Expo Indonesia Showcase",
    desc: "Selected designers showcase their physical prototypes at Trade Expo Indonesia (TEI) with direct international buyer exposure.",
  },
];

// Submission Requirements
const SUBMISSION_GUIDELINES = [
  {
    title: "Design Presentation Boards (PDF)",
    desc: "High-resolution architectural presentation boards demonstrating orthographic projections, joinery exploded views, and overall dimensions.",
  },
  {
    title: "Material & Sustainability Dossier",
    desc: "Clear itemization of timber species, timber sourcing origin, finish specifications (oils/waxes), and hardware joinery details.",
  },
  {
    title: "3D CAD & Scale Model Validation",
    desc: "Digital 3D CAD files (STEP/IGES) alongside photo documentation of 1:5 scale study models or 1:1 functional mockups.",
  },
];

// Selected Finalist Showcase
const SHOWCASE_WORKS = [
  {
    title: "Jati Cantilever Lounge",
    category: "Furniture & Joinery",
    designer: "Selected Finalist Prototype",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Acoustic Ash Wave Screen",
    category: "Spatial Architecture",
    designer: "TEI Showcase Winner",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Sonokeling Modular Buffet",
    category: "Heirloom Living",
    designer: "Commercial Production Finalist",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop",
  },
];

export default function ChallengesPage() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState("Product Design Challenge Registration");

  const handleRegisterClick = (trackTitle = "") => {
    if (trackTitle) {
      setSelectedTrack(`Challenge: ${trackTitle}`);
    } else {
      setSelectedTrack("Product Design Challenge Registration");
    }
    setOpenModal(true);
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--oniv-ivory)", color: "var(--oniv-charcoal)" }}>
      <EnquiryModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        defaultCourse={selectedTrack}
      />
      <NavbarPro onEnroll={() => handleRegisterClick()} />

      {/* ========================================================================= */}
      {/* 1. CINEMATIC HERO */}
      {/* ========================================================================= */}
      <section
        className="relative w-full min-h-[75vh] flex items-center overflow-hidden pt-28 pb-20"
        style={{ background: "var(--oniv-earth)" }}
      >
        <img
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1800&auto=format&fit=crop"
          alt="Oniv Woods Global Product Design Challenge"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,17,14,0.72) 0%, rgba(20,17,14,0.95) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow inline-block mb-4 px-4 py-1.5 rounded-full"
            style={{ color: "var(--oniv-ivory)", background: "rgba(176,113,60,0.25)" }}
          >
            International Initiative
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.08] max-w-5xl mx-auto"
            style={{ color: "var(--oniv-ivory)" }}
          >
            Oniv Woods Global Product Design Challenge.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-light"
            style={{ color: "rgba(249,246,240,0.85)" }}
          >
            A prestigious stage discovering emerging designers, furniture innovators, and architectural craftsmen — evaluated by international juries and showcased at Trade Expo Indonesia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap justify-center gap-4"
          >
            <button
              onClick={() => handleRegisterClick()}
              className="btn-oniv-primary text-xs uppercase tracking-wider font-bold py-3.5 px-8 shadow-xl"
            >
              REGISTER FOR CHALLENGE
            </button>
            <a
              href="#tracks"
              className="btn-oniv-outline text-xs uppercase tracking-wider font-bold py-3.5 px-6"
            >
              EXPLORE ACTIVE TRACKS
            </a>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CHALLENGE PHILOSOPHY */}
      {/* ========================================================================= */}
      <section className="py-24 border-b" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="eyebrow block mb-3" style={{ color: "var(--oniv-amber-dark)" }}>
              The Purpose of the Challenge
            </span>
            <h2 className="font-display text-3xl sm:text-5xl leading-tight mb-8" style={{ color: "var(--oniv-charcoal)" }}>
              From Studio Sketch to International Trade Showcase.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 pt-4 text-base sm:text-lg leading-relaxed" style={{ color: "rgba(30,27,24,0.75)" }}>
            <p>
              The <strong>Oniv Woods Product Design Challenge</strong> was created to address a universal dilemma in design education: brilliant conceptual thinking often remains trapped in digital renderings without a real path to physical production or global distribution.
            </p>
            <p>
              By uniting international juries from India and Indonesia, workshop fabrication mentorship, and direct exhibition sponsorship at <strong>Trade Expo Indonesia (TEI)</strong>, the challenge serves as an authentic commercial launchpad for visionary craftsmen and designers.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3 & 4. ACTIVE CHALLENGES (EDITORIAL CARDS WITH NUMBERS & BRIEFS) */}
      {/* ========================================================================= */}
      <section id="tracks" className="py-24" style={{ background: "var(--oniv-beige)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            align="center"
            eyebrow="Active Briefs"
            title="Open Challenge Tracks"
            subtitle="Explore the current competition tracks and select the brief aligned with your design discipline."
          />

          <div className="mt-16 space-y-12">
            {ACTIVE_CHALLENGES.map((challenge, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <motion.div
                  key={challenge.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                  className={`p-8 sm:p-12 rounded-3xl bg-white border shadow-xl grid lg:grid-cols-12 gap-10 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                  style={{ borderColor: "rgba(74,53,37,0.12)" }}
                >
                  {/* Visual */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-md h-72 sm:h-80 bg-gray-100">
                      <img
                        src={challenge.image}
                        alt={challenge.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-md bg-black/65 text-white border border-white/15">
                          {challenge.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-7 space-y-4 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-4xl font-bold" style={{ color: "var(--oniv-amber-dark)" }}>
                        {challenge.num}
                      </span>
                      <span className="eyebrow text-xs" style={{ color: "rgba(30,27,24,0.6)" }}>
                        {challenge.scope}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl leading-snug" style={{ color: "var(--oniv-charcoal)" }}>
                      {challenge.title}
                    </h3>

                    <p className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(30,27,24,0.72)" }}>
                      {challenge.brief}
                    </p>

                    <div className="pt-3 border-t text-xs font-medium space-y-1" style={{ borderColor: "rgba(74,53,37,0.08)", color: "rgba(30,27,24,0.65)" }}>
                      <strong>Key Focus:</strong> {challenge.keyCriteria}
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => handleRegisterClick(challenge.title)}
                        className="btn-oniv-primary text-xs uppercase tracking-wider font-bold py-3 px-6 shadow-md"
                      >
                        Register for Track {challenge.num}
                      </button>

                      <Link
                        to={`/challenge/${challenge.id}`}
                        className="text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors hover:text-amber-700 py-3 px-2 cursor-pointer"
                        style={{ color: "var(--oniv-amber-dark)" }}
                      >
                        <span>View Detailed Brief</span>
                        <FiArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CHALLENGE DETAILS (EVALUATION MATRIX) */}
      {/* ========================================================================= */}
      <section className="py-24 border-b" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            align="center"
            eyebrow="Evaluation Matrix"
            title="How the Global Jury Judges Every Entry"
            subtitle="Transparent, rigorous standards ensuring only truly exceptional, sustainable concepts reach the finals."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-16">
            {EVALUATION_CRITERIA.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-white border flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. HOW IT WORKS (THE 4-STAGE COMPETITION ROADMAP) */}
      {/* ========================================================================= */}
      <section className="py-24" style={{ background: "var(--oniv-beige)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            align="center"
            eyebrow="Competition Pipeline"
            title="How the Challenge Progresses"
            subtitle="A clear structured path from initial submission to the international expo stage."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {CHALLENGE_STAGES.map((st, idx) => (
              <div
                key={st.step}
                className="p-8 rounded-2xl bg-white border shadow-sm flex flex-col justify-between"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div>
                  <span className="font-display text-3xl font-bold block mb-4" style={{ color: "var(--oniv-amber-dark)" }}>
                    {st.step}
                  </span>
                  <h4 className="font-display text-xl mb-2" style={{ color: "var(--oniv-charcoal)" }}>
                    {st.title}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(30,27,24,0.65)" }}>
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SUBMISSION PROCESS & GUIDELINES */}
      {/* ========================================================================= */}
      <section className="py-24 border-b" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading
            eyebrow="Submission Requirements"
            title="What to Prepare for Your Entry"
            subtitle="Standardized documentation guidelines to ensure seamless jury evaluation."
          />

          <div className="space-y-6 mt-12">
            {SUBMISSION_GUIDELINES.map((sg, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-2xl bg-white border flex items-start gap-5 shadow-sm"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--oniv-beige)", color: "var(--oniv-amber-dark)" }}
                >
                  <FiFileText size={18} />
                </div>
                <div>
                  <h4 className="font-display text-lg sm:text-xl font-bold mb-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                    {sg.title}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(30,27,24,0.7)" }}>
                    {sg.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SELECTED WORK / SHOWCASE */}
      {/* ========================================================================= */}
      <section className="py-24" style={{ background: "var(--oniv-ivory)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            align="center"
            eyebrow="Excellence in Craft"
            title="Selected Showcase Prototypes"
            subtitle="A preview of curated finalist works exhibited at past design forums and trade expos."
          />

          <div className="grid sm:grid-cols-3 gap-8 mt-16">
            {SHOWCASE_WORKS.map((work, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-xl transition-all"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div className="h-64 overflow-hidden bg-gray-100">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="eyebrow block mb-1 text-[10px]" style={{ color: "var(--oniv-amber-dark)" }}>
                    {work.category}
                  </span>
                  <h3 className="font-display text-xl mb-1" style={{ color: "var(--oniv-charcoal)" }}>
                    {work.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-800">
                    {work.designer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FINAL CTA */}
      {/* ========================================================================= */}
      <FinalCTAPro onEnroll={() => handleRegisterClick()} />

      <Footer />
    </div>
  );
}
