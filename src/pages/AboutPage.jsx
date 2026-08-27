import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCompass,
  FiGlobe,
  FiTool,
  FiLayers,
  FiAward,
  FiCheckCircle,
  FiArrowRight,
  FiCpu,
  FiShield,
} from "react-icons/fi";
import NavbarPro from "../components/NavbarPro";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";
import SectionHeading from "../components/SectionHeading";
import HiringPartner from "../components/HiringPartner";
import FinalCTAPro from "../components/FinalCTAPro";

const PILLARS = [
  {
    icon: <FiTool size={26} />,
    title: "Industry-Oriented Training",
    desc: "Direct hands-on experience in production workshops with full-scale machinery, modern joinery techniques, and industrial timber preparation.",
    tag: "Practical Mastery",
  },
  {
    icon: <FiGlobe size={26} />,
    title: "India & Indonesia Exchange",
    desc: "Cross-border learning experiences, international design exposure, and student internships across high-growth woodcraft and manufacturing hubs.",
    tag: "Global Footprint",
  },
  {
    icon: <FiCpu size={26} />,
    title: "Digital CAD & 3D Prototyping",
    desc: "Seamlessly combining time-tested carpentry heritage with Parametric CAD, CNC milling, 3D laser digitizing, and rapid prototyping workflows.",
    tag: "Next-Gen Tech",
  },
  {
    icon: <FiAward size={26} />,
    title: "Career & Enterprise Incubation",
    desc: "From portfolio curation to startup venture creation, connecting graduates directly with leading architectural firms and luxury furniture brands.",
    tag: "Industry Placement",
  },
];

const VALUES = [
  {
    number: "01",
    title: "Material Honesty",
    desc: "Respecting the grain, moisture integrity, tactile warmth, and natural living character of timber species.",
  },
  {
    number: "02",
    title: "Precision Engineering",
    desc: "Merging master artisan tolerances with CNC accuracy for timeless heirloom durability.",
  },
  {
    number: "03",
    title: "Sustainable Stewardship",
    desc: "Championing certified replanted timber, low-waste nesting algorithms, and non-toxic natural finishes.",
  },
  {
    number: "04",
    title: "Contemporary Vision",
    desc: "Translating architectural aesthetics into functional furniture, luxury interiors, and sculptural design objects.",
  },
];

export default function AboutPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "var(--oniv-ivory)", color: "var(--oniv-charcoal)" }}>
      <EnquiryModal open={openModal} onClose={() => setOpenModal(false)} />
      <NavbarPro onEnroll={() => setOpenModal(true)} />

      {/* HERO SECTION */}
      <section
        className="relative w-full min-h-[75vh] flex items-center overflow-hidden pt-28 pb-20"
        style={{ background: "var(--oniv-earth)" }}
      >
        <img
          src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=1800&auto=format&fit=crop"
          alt="Architectural wood craftsmanship"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,17,14,0.7) 0%, rgba(20,17,14,0.92) 100%)",
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
            About Oniv Woods School of Design Wisdom
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.08] max-w-4xl mx-auto"
            style={{ color: "var(--oniv-ivory)" }}
          >
            Where Ancient Timber Wisdom Meets Futuristic Design.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(249,246,240,0.8)" }}
          >
            A premier international design institute shaping future-ready wood technology leaders, product designers, and spatial architects across India and Indonesia.
          </motion.p>
        </div>
      </section>

      {/* STORY & HERITAGE SECTION */}
      <section className="py-24 border-b" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border" style={{ borderColor: "rgba(74,53,37,0.15)" }}>
              <img
                src="https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_800/aboutoniv_oknzrv.png"
                alt="Oniv Woods Workshop Studio"
                className="w-full h-[480px] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, transparent 60%, rgba(20,17,14,0.7) 100%)",
                }}
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl backdrop-blur-md bg-black/40 border border-white/10 text-white">
                <span className="eyebrow text-amber-300 block mb-1">Authentic Workshop Experience</span>
                <p className="text-xs text-white/90">
                  Students transforming raw timber into heirloom furniture and commercial prototypes.
                </p>
              </div>
            </div>

            {/* Accent badge */}
            <div
              className="hidden sm:flex absolute -bottom-6 -right-6 p-5 rounded-2xl shadow-xl flex-col border"
              style={{
                background: "var(--oniv-beige)",
                borderColor: "rgba(74,53,37,0.15)",
                maxWidth: "220px",
              }}
            >
              <span className="font-display text-3xl font-bold" style={{ color: "var(--oniv-amber-dark)" }}>
                2 Nations
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider mt-1" style={{ color: "var(--oniv-charcoal)" }}>
                India & Indonesia Studio Network
              </span>
            </div>
          </motion.div>

          {/* Right Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <span className="eyebrow block mb-3" style={{ color: "var(--oniv-amber-dark)" }}>
              Our Story & Philosophy
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight mb-6" style={{ color: "var(--oniv-charcoal)" }}>
              Empowering Creators to Shape the Built Environment.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-5" style={{ color: "rgba(30,27,24,0.75)" }}>
              <strong>Oniv Woods School of Design Wisdom</strong> was founded on a singular conviction: genuine design brilliance emerges when rigorous craft discipline meets modern engineering ingenuity.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(30,27,24,0.7)" }}>
              In an era dominated by superficial digital mockups, we train designers who understand the soul of materials. Our students learn how wood breathes, how structural joineries resist stress, and how precision machinery transforms creative imagination into market-ready reality.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Immersive machinery and workshop masterclasses",
                "Cross-continental internship pipelines across South & Southeast Asia",
                "Comprehensive design-to-production venture incubation",
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(176,113,60,0.15)", color: "var(--oniv-amber-dark)" }}
                  >
                    <FiCheckCircle size={14} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: "var(--oniv-charcoal)" }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4">
              <button
                onClick={() => setOpenModal(true)}
                className="px-7 py-3.5 rounded-md font-semibold text-sm transition-opacity hover:opacity-90 inline-flex items-center gap-2 cursor-pointer"
                style={{ background: "var(--oniv-amber)", color: "var(--oniv-ivory)" }}
              >
                <span>Request Prospectus</span>
                <FiArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4 PILLARS GRID */}
      <section className="py-24" style={{ background: "var(--oniv-beige)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow" style={{ color: "var(--oniv-amber-dark)" }}>
              The Oniv Edge
            </span>
            <h2 className="font-display text-3xl sm:text-4xl mt-2 mb-4" style={{ color: "var(--oniv-charcoal)" }}>
              Four Pillars of Academic & Craft Excellence
            </h2>
            <p className="text-sm sm:text-base" style={{ color: "rgba(30,27,24,0.65)" }}>
              A balanced pedagogical framework engineered to turn passionate creators into internationally competitive design practitioners.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {PILLARS.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-8 rounded-2xl border bg-white flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: "var(--oniv-beige)", color: "var(--oniv-amber-dark)" }}
                  >
                    {p.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest block mb-2" style={{ color: "var(--oniv-amber-dark)" }}>
                    {p.tag}
                  </span>
                  <h3 className="font-display text-xl mb-3" style={{ color: "var(--oniv-charcoal)" }}>
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(30,27,24,0.65)" }}>
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES & DESIGN PRINCIPLES */}
      <section className="py-24 border-b" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Our Guiding Values"
            title="A Commitment to Material Mastery & Environmental Harmony."
            subtitle="The fundamental design tenets embedded across every lecture, workshop, and capstone project."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="border-t pt-6"
                style={{ borderColor: "var(--oniv-amber)" }}
              >
                <span className="font-display text-2xl font-bold block mb-3" style={{ color: "var(--oniv-amber-dark)" }}>
                  {v.number}
                </span>
                <h4 className="font-display text-xl mb-2" style={{ color: "var(--oniv-charcoal)" }}>
                  {v.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(30,27,24,0.65)" }}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL ECOSYSTEM PARTNERS */}
      <HiringPartner />

      {/* FINAL CTA */}
      <FinalCTAPro onEnroll={() => setOpenModal(true)} />

      <Footer />
    </div>
  );
}
