import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FiArrowRight,
  FiClock,
  FiCheckCircle,
  FiTool,
  FiLayers,
  FiAward,
  FiBookOpen,
  FiCompass,
  FiCpu,
  FiUsers,
  FiShield,
} from "react-icons/fi";
import NavbarPro from "../components/NavbarPro";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";
import SectionHeading from "../components/SectionHeading";
import FeatureStrip from "../components/FeatureStrip";
import HiringPartner from "../components/HiringPartner";
import FinalCTAPro from "../components/FinalCTAPro";

// Verified Course Categories
const CATEGORIES = [
  "All Disciplines",
  "Wood & Product Design",
  "Industrial & Spatial",
  "Digital & Software",
  "Business & Growth",
];

// Verified Programs strictly derived from project CourseData
const VERIFIED_COURSES = [
  {
    id: "productDesign",
    title: "Product Designing Course",
    category: "Wood & Product Design",
    level: "Foundation to Master Studio",
    duration: "4–6 Months",
    mode: "Production Workshop + Studio",
    image: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_800/course3_rjg7ld.webp",
    summary: "Master the complete design-to-build lifecycle of wooden lifestyle products, luxury furniture, acoustic decor, and joinery mechanics.",
    tags: ["Wood Machinery", "Hand Joinery", "Prototype Building", "Portfolio Curation"],
  },
  {
    id: "industrialDesign",
    title: "Industrial Designing Course",
    category: "Industrial & Spatial",
    level: "Intermediate to Advanced",
    duration: "4–8 Months",
    mode: "Workshop + CAD Labs",
    image: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_800/course4_zk3izx.webp",
    summary: "Explore form, ergonomics, timber-polymer composites, 3D CAD modeling, and industrial mass production tolerances.",
    tags: ["Parametric CAD", "Ergonomics", "Rapid Prototyping", "5-Axis CNC"],
  },
  {
    id: "business",
    title: "Business & Startup Course",
    category: "Business & Growth",
    level: "Executive & Founder Track",
    duration: "3–6 Months",
    mode: "Venture Incubation",
    image: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_800/course1_sucxsg.webp",
    summary: "Venture acceleration for design entrepreneurs: unit economics, timber supply chain logistics, brand identity, and scaling.",
    tags: ["Business Modeling", "Brand Strategy", "Operations & Supply", "Funding Roadmap"],
  },
  {
    id: "uiux",
    title: "UI/UX Design Course",
    category: "Digital & Software",
    level: "All Skill Levels",
    duration: "3–5 Months",
    mode: "Design Studio",
    image: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_800/course18_c3v8rf.webp",
    summary: "Architect digital user experiences, user research frameworks, interactive Figma systems, and mobile interfaces.",
    tags: ["UX Research", "Figma Systems", "Wireframing", "Case Studies"],
  },
  {
    id: "webDev",
    title: "Full-Stack Web Development",
    category: "Digital & Software",
    level: "Comprehensive Lab",
    duration: "4–6 Months",
    mode: "Code Labs",
    image: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_800/course16_a5b0aj.webp",
    summary: "Full-stack web application engineering utilizing modern React architectures, APIs, databases, and performant cloud deployments.",
    tags: ["React & Node", "API Design", "Databases", "Live Deployment"],
  },
  {
    id: "dm",
    title: "Digital Marketing & Brand Growth",
    category: "Business & Growth",
    level: "Strategic Masterclass",
    duration: "3–4 Months",
    mode: "Live Campaigns",
    image: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_800/course7_gh0vce.webp",
    summary: "Full-funnel digital strategy: international SEO systems, paid ad performance, and content narratives for luxury brands.",
    tags: ["SEO Systems", "Meta & Google Ads", "Audience Growth", "Funnel Strategy"],
  },
  {
    id: "mobileApp",
    title: "Mobile App Development",
    category: "Digital & Software",
    level: "App Lab",
    duration: "4–6 Months",
    mode: "App Studio",
    image: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_800/course20_fpjin1.webp",
    summary: "Cross-platform mobile applications for iOS & Android with cloud databases, real-time sync, and App Store publishing.",
    tags: ["Flutter / RN", "Firebase & APIs", "Store Publish", "App Architecture"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Strategy & Operations",
    category: "Business & Growth",
    level: "Operations Track",
    duration: "3–4 Months",
    mode: "Store Operations",
    image: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_800/course19_mfahpc.webp",
    summary: "Building, automating, and scaling international online commerce storefronts, inventory fulfillment, and conversion funnels.",
    tags: ["Store Setup", "Fulfillment", "Conversion CRO", "Store Automation"],
  },
];

// Section 5: Learning Journey
const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Foundational Material Immersion",
    desc: "Hands-on analysis of timber species, cellular grain structures, hand-plane calibration, and workshop safety protocols.",
  },
  {
    step: "02",
    title: "Workshop Machine Apprenticeship",
    desc: "Direct operation of panel saws, spindle moulders, jointers, and custom woodworking jigs under master supervision.",
  },
  {
    step: "03",
    title: "Digital CAD & 5-Axis CNC Milling",
    desc: "Translating tactile prototypes into parametric digital geometries and machining structural tolerances.",
  },
  {
    step: "04",
    title: "Capstone Portfolio & Exhibition",
    desc: "Fabricating market-ready functional pieces, building a global portfolio, and presenting to industry juries.",
  },
];

// Section 6: Benefits
const PROGRAM_BENEFITS = [
  {
    icon: <FiTool size={26} />,
    title: "Industrial Machinery Access",
    desc: "Train on full-scale workshop equipment rather than small hobbyist tools for true commercial readiness.",
  },
  {
    icon: <FiGlobe size={26} />,
    title: "India & Indonesia Network",
    desc: "Cross-continental learning exposure connecting students with top Southeast Asian manufacturing hubs.",
  },
  {
    icon: <FiAward size={26} />,
    title: "Direct Trade Expo Showcase",
    desc: "Opportunities for outstanding student capstones to be exhibited at Trade Expo Indonesia (TEI).",
  },
  {
    icon: <FiUsers size={26} />,
    title: "Industry Hiring Ecosystem",
    desc: "Direct recruitment and apprenticeship pipelines with leading furniture, architecture, and interior studios.",
  },
];

// Section 7: How It Works
const HOW_IT_WORKS = [
  {
    num: "1",
    title: "Submit Profile & Discipline",
    desc: "Select your preferred discipline and submit your portfolio or design aspirations.",
  },
  {
    num: "2",
    title: "Advisory Discovery Call",
    desc: "Connect 1-on-1 with faculty mentors to evaluate your goals and map your curriculum track.",
  },
  {
    num: "3",
    title: "Studio & Workshop Onboarding",
    desc: "Receive tool kits, workshop safety credentials, and start hands-on masterclasses.",
  },
  {
    num: "4",
    title: "Produce & Launch Your Work",
    desc: "Complete functional physical projects, refine your commercial catalog, and graduate.",
  },
];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Disciplines");
  const [openModal, setOpenModal] = useState(false);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState("");
  const navigate = useNavigate();

  const filteredCourses =
    selectedCategory === "All Disciplines"
      ? VERIFIED_COURSES
      : VERIFIED_COURSES.filter((c) => c.category === selectedCategory);

  const handleEnrollClick = (title = "") => {
    setSelectedCourseTitle(title);
    setOpenModal(true);
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--oniv-ivory)", color: "var(--oniv-charcoal)" }}>
      <EnquiryModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        defaultCourse={selectedCourseTitle}
      />
      <NavbarPro onEnroll={() => handleEnrollClick()} />

      {/* ========================================================================= */}
      {/* 1. CINEMATIC HERO */}
      {/* ========================================================================= */}
      <section
        className="relative w-full min-h-[75vh] flex items-center overflow-hidden pt-28 pb-20"
        style={{ background: "var(--oniv-earth)" }}
      >
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1800&auto=format&fit=crop"
          alt="Oniv Woods Academic & Workshop Catalog"
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
            Academic & Master Workshop Programs
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.08] max-w-5xl mx-auto"
            style={{ color: "var(--oniv-ivory)" }}
          >
            Disciplines of Craft, Industrial Technology & Design Leadership.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-light"
            style={{ color: "rgba(249,246,240,0.85)" }}
          >
            Immersive, hands-on master training engineered for aspiring wood product designers, furniture architects, digital creators, and design entrepreneurs.
          </motion.p>
        </div>
      </section>

      {/* Feature Strip */}
      <FeatureStrip />

      {/* ========================================================================= */}
      {/* 2. COURSE INTRODUCTION */}
      {/* ========================================================================= */}
      <section className="py-24 border-b" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow block" style={{ color: "var(--oniv-amber-dark)" }}>
                The Apprenticeship Philosophy
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight" style={{ color: "var(--oniv-charcoal)" }}>
                Education Driven by Tactile Mastery, Not Just Pixels.
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "rgba(30,27,24,0.75)" }}>
                At <strong>Oniv Woods School of Design Wisdom</strong>, every course bridges timeless woodworking craft with high-precision digital computation and commercial enterprise thinking.
              </p>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(30,27,24,0.7)" }}>
                Students do not merely sit in lecture halls—they work directly on industrial machines, timber seasoning chambers, parametric CAD software, and export-grade prototyping setups.
              </p>
            </div>

            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">
              {[
                { label: "100% Practical Prototyping", desc: "Every student builds full-scale functional products." },
                { label: "India & Indonesia Hubs", desc: "Cross-border material insights and global exposure." },
                { label: "Master Guild Faculty", desc: "Direct guidance from seasoned industrial artisans." },
                { label: "TEI Exhibition Pipeline", desc: "Curated student showcases at Trade Expo Indonesia." },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border bg-white shadow-sm"
                  style={{ borderColor: "rgba(74,53,37,0.12)" }}
                >
                  <h4 className="font-display text-lg font-bold mb-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                    {item.label}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(30,27,24,0.65)" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3 & 4. COURSE CATEGORIES & FEATURED COURSES (EDITORIAL CARDS) */}
      {/* ========================================================================= */}
      <section className="py-24" style={{ background: "var(--oniv-ivory)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div>
              <span className="eyebrow" style={{ color: "var(--oniv-amber-dark)" }}>
                Curated Catalog
              </span>
              <h2 className="font-display text-3xl sm:text-5xl mt-2" style={{ color: "var(--oniv-charcoal)" }}>
                Explore Available Disciplines
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className="px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer"
                    style={{
                      background: active ? "var(--oniv-amber)" : "var(--oniv-beige)",
                      color: active ? "var(--oniv-ivory)" : "var(--oniv-charcoal)",
                      border: active ? "1px solid var(--oniv-amber)" : "1px solid rgba(74,53,37,0.15)",
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Courses Editorial Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((c, idx) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group rounded-2xl overflow-hidden border bg-white flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div>
                  {/* Image */}
                  <div className="relative h-60 overflow-hidden bg-gray-100">
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase backdrop-blur-md bg-black/60 text-white border border-white/10">
                        {c.mode}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="eyebrow" style={{ color: "var(--oniv-amber-dark)" }}>
                        {c.category}
                      </span>
                      <span className="text-xs flex items-center gap-1 font-medium" style={{ color: "rgba(30,27,24,0.6)" }}>
                        <FiClock size={12} />
                        {c.duration}
                      </span>
                    </div>

                    <h3 className="font-display text-xl leading-snug mb-1" style={{ color: "var(--oniv-charcoal)" }}>
                      {c.title}
                    </h3>
                    <span className="text-[11px] font-semibold text-amber-700 block mb-3">
                      Level: {c.level}
                    </span>

                    <p className="text-xs sm:text-sm leading-relaxed mb-5" style={{ color: "rgba(30,27,24,0.68)" }}>
                      {c.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {c.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium"
                          style={{ background: "var(--oniv-beige)", color: "var(--oniv-charcoal)" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Strip */}
                <div
                  className="px-6 pb-6 pt-3 border-t flex items-center justify-between gap-3"
                  style={{ borderColor: "rgba(74,53,37,0.08)" }}
                >
                  <button
                    onClick={() => navigate(`/course/${c.id}`)}
                    className="text-xs font-bold uppercase tracking-wider transition-colors hover:text-amber-700 inline-flex items-center gap-1.5 cursor-pointer"
                    style={{ color: "var(--oniv-amber-dark)" }}
                  >
                    <span>View Syllabus</span>
                    <FiArrowRight size={14} />
                  </button>

                  <button
                    onClick={() => handleEnrollClick(c.title)}
                    className="px-4 py-2 rounded-md text-xs font-semibold transition-opacity hover:opacity-90 cursor-pointer"
                    style={{ background: "var(--oniv-amber)", color: "var(--oniv-ivory)" }}
                  >
                    Enroll Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. LEARNING JOURNEY */}
      {/* ========================================================================= */}
      <section className="py-24 border-y" style={{ background: "var(--oniv-beige)", borderColor: "rgba(74,53,37,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            align="center"
            eyebrow="Pedagogical Progression"
            title="The 4-Phase Oniv Woods Learning Journey"
            subtitle="A proven trajectory turning raw curiosity into certified, market-ready design excellence."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {JOURNEY_STEPS.map((js, i) => (
              <motion.div
                key={js.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-white border flex flex-col justify-between shadow-sm hover:shadow-xl transition-all"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div>
                  <span className="font-display text-3xl font-bold block mb-4" style={{ color: "var(--oniv-amber-dark)" }}>
                    {js.step}
                  </span>
                  <h3 className="font-display text-xl mb-2.5" style={{ color: "var(--oniv-charcoal)" }}>
                    {js.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(30,27,24,0.65)" }}>
                    {js.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. BENEFITS */}
      {/* ========================================================================= */}
      <section className="py-24 border-b" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            align="center"
            eyebrow="Why Choose Oniv Woods"
            title="Distinct Institutional Advantages"
            subtitle="Engineered to provide unmatched competitive differentiation in the global design economy."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-16">
            {PROGRAM_BENEFITS.map((b, idx) => (
              <div
                key={b.title}
                className="p-8 rounded-2xl bg-white border flex flex-col justify-between shadow-sm"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: "var(--oniv-beige)", color: "var(--oniv-amber-dark)" }}
                  >
                    {b.icon}
                  </div>
                  <h3 className="font-display text-xl mb-3" style={{ color: "var(--oniv-charcoal)" }}>
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(30,27,24,0.65)" }}>
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. HOW IT WORKS (ADMISSIONS WORKFLOW) */}
      {/* ========================================================================= */}
      <section className="py-24" style={{ background: "var(--oniv-beige)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            align="center"
            eyebrow="Admissions Roadmap"
            title="How to Begin Your Journey"
            subtitle="Transparent, seamless onboarding from initial discovery to studio workbench."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {HOW_IT_WORKS.map((hw) => (
              <div
                key={hw.num}
                className="p-8 rounded-2xl bg-white border shadow-sm flex flex-col justify-between"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div>
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs mb-5"
                    style={{ background: "var(--oniv-amber)", color: "var(--oniv-ivory)" }}
                  >
                    {hw.num}
                  </span>
                  <h4 className="font-display text-lg mb-2" style={{ color: "var(--oniv-charcoal)" }}>
                    {hw.title}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(30,27,24,0.65)" }}>
                    {hw.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIRING PARTNERS MARQUEE */}
      <HiringPartner />

      {/* ========================================================================= */}
      {/* 8. REGISTRATION CTA */}
      {/* ========================================================================= */}
      <FinalCTAPro onEnroll={() => handleEnrollClick()} />

      <Footer />
    </div>
  );
}
