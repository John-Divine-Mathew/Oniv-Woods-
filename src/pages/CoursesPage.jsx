import React, { useState } from "react";
import { motion } from "framer-motion";
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
  FiGlobe,
} from "react-icons/fi";
import NavbarPro from "../components/NavbarPro";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";
import SectionHeading from "../components/SectionHeading";
import FeatureStrip from "../components/FeatureStrip";
import HiringPartner from "../components/HiringPartner";
import FinalCTAPro from "../components/FinalCTAPro";
import SEO from "../components/SEO";

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
    tags: ["Brand Growth", "Digital Strategy", "Analytics", "Campaigns"],
  },
];

// Section 5: Learning Journey Steps
const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Material Foundations & Grain Mechanics",
    desc: "Understanding timber properties, cellular fiber physics, tool safety, and sharpening masterclass.",
  },
  {
    step: "02",
    title: "Form Exploration & Scale Prototyping",
    desc: "Transforming design sketches into physical clay/foam and 1:5 scale structural wooden study models.",
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
    icon: <FiTool size={22} />,
    title: "Industrial Machinery Access",
    desc: "Train on full-scale workshop equipment rather than small hobbyist tools for true commercial readiness.",
  },
  {
    icon: <FiGlobe size={22} />,
    title: "India & Indonesia Network",
    desc: "Cross-continental learning exposure connecting students with top Southeast Asian manufacturing hubs.",
  },
  {
    icon: <FiAward size={22} />,
    title: "Direct Trade Expo Showcase",
    desc: "Opportunities for outstanding student capstones to be exhibited at Trade Expo Indonesia (TEI).",
  },
  {
    icon: <FiUsers size={22} />,
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
    <div className="min-h-screen overflow-x-hidden" style={{ background: "var(--oniv-ivory)", color: "var(--oniv-charcoal)" }}>
      <SEO
        title="Wood Product Design & Masterclass Disciplines"
        description="Explore accredited academic disciplines at Oniv Woods: Wood Product Design, Industrial Craftsmanship, Spatial Architecture, Parametric CNC, and Digital Design across India and Indonesia."
        canonical="/courses"
        ogType="website"
        image="https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_800/course3_rjg7ld.webp"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "ONIV WOODS Educational Programs & Disciplines",
          "itemListElement": VERIFIED_COURSES.map((c, idx) => ({
            "@type": "Course",
            "position": idx + 1,
            "name": c.title,
            "description": c.summary,
            "provider": {
              "@type": "Organization",
              "name": "ONIV WOODS School of Design Wisdom",
              "sameAs": "https://onivwoods.com"
            }
          }))
        }}
      />
      <EnquiryModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        defaultCourse={selectedCourseTitle}
      />
      <NavbarPro onEnroll={() => handleEnrollClick()} />

      {/* 1. CINEMATIC HERO */}
      <section
        className="relative w-full min-h-[65vh] sm:min-h-[75vh] flex items-center overflow-hidden pt-24 sm:pt-28 pb-14 sm:pb-20"
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

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs"
            style={{ color: "var(--oniv-ivory)", background: "rgba(176,113,60,0.25)" }}
          >
            Academic & Master Workshop Programs
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-7xl leading-[1.12] sm:leading-[1.08] max-w-5xl mx-auto text-white"
          >
            Disciplines of Craft, Industrial Technology & Design Leadership.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 sm:mt-6 text-sm sm:text-xl max-w-3xl mx-auto leading-relaxed font-light text-stone-300"
          >
            Immersive, hands-on master training engineered for aspiring wood product designers, furniture architects, digital creators, and design entrepreneurs.
          </motion.p>
        </div>
      </section>

      {/* Feature Strip */}
      <FeatureStrip />

      {/* 2. COURSE INTRODUCTION */}
      <section className="py-16 sm:py-24 border-b" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <span className="eyebrow block" style={{ color: "var(--oniv-amber-dark)" }}>
                The Apprenticeship Philosophy
              </span>
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl leading-tight" style={{ color: "var(--oniv-charcoal)" }}>
                Education Driven by Tactile Mastery, Not Just Pixels.
              </h2>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(30,27,24,0.75)" }}>
                At <strong>Oniv Woods School of Design Wisdom</strong>, every course bridges timeless woodworking craft with high-precision digital computation and commercial enterprise thinking.
              </p>
              <p className="text-xs sm:text-base leading-relaxed" style={{ color: "rgba(30,27,24,0.7)" }}>
                Students do not merely sit in lecture halls—they work directly on industrial machines, timber seasoning chambers, parametric CAD software, and export-grade prototyping setups.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { label: "100% Practical Prototyping", desc: "Every student builds full-scale functional products." },
                { label: "India & Indonesia Hubs", desc: "Cross-border material insights and global exposure." },
                { label: "Master Guild Faculty", desc: "Direct guidance from seasoned industrial artisans." },
                { label: "TEI Exhibition Pipeline", desc: "Curated student showcases at Trade Expo Indonesia." },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 sm:p-6 rounded-xl border bg-white shadow-xs"
                  style={{ borderColor: "rgba(74,53,37,0.12)" }}
                >
                  <h4 className="font-display text-base sm:text-lg font-bold mb-1" style={{ color: "var(--oniv-charcoal)" }}>
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

      {/* 3 & 4. COURSE CATEGORIES & FEATURED COURSES */}
      <section className="py-16 sm:py-24" style={{ background: "var(--oniv-ivory)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
            <div>
              <span className="eyebrow" style={{ color: "var(--oniv-amber-dark)" }}>
                Curated Catalog
              </span>
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl mt-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                Explore Available Disciplines
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold transition-all cursor-pointer"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((c, idx) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="group rounded-2xl overflow-hidden border bg-white flex flex-col justify-between transition-all duration-300 hover:shadow-xl"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div>
                  {/* Image */}
                  <div className="relative h-48 sm:h-60 overflow-hidden bg-gray-100">
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase backdrop-blur-md bg-black/60 text-white border border-white/10">
                        {c.mode}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="eyebrow text-[10px] sm:text-xs" style={{ color: "var(--oniv-amber-dark)" }}>
                        {c.category}
                      </span>
                      <span className="text-[11px] sm:text-xs flex items-center gap-1 font-medium" style={{ color: "rgba(30,27,24,0.6)" }}>
                        <FiClock size={11} />
                        {c.duration}
                      </span>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl leading-snug mb-1" style={{ color: "var(--oniv-charcoal)" }}>
                      {c.title}
                    </h3>
                    <span className="text-[11px] font-semibold text-amber-700 block mb-2.5">
                      Level: {c.level}
                    </span>

                    <p className="text-xs sm:text-sm leading-relaxed mb-4" style={{ color: "rgba(30,27,24,0.68)" }}>
                      {c.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {c.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-medium"
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
                  className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 border-t flex items-center justify-between gap-3"
                  style={{ borderColor: "rgba(74,53,37,0.08)" }}
                >
                  <button
                    onClick={() => navigate(`/course/${c.id}`)}
                    className="text-xs font-bold uppercase tracking-wider transition-colors hover:text-amber-700 inline-flex items-center gap-1 cursor-pointer"
                    style={{ color: "var(--oniv-amber-dark)" }}
                  >
                    <span>Syllabus</span>
                    <FiArrowRight size={13} />
                  </button>

                  <button
                    onClick={() => handleEnrollClick(c.title)}
                    className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs font-semibold transition-opacity hover:opacity-90 cursor-pointer"
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

      {/* 5. LEARNING JOURNEY */}
      <section className="py-16 sm:py-24 border-y" style={{ background: "var(--oniv-beige)", borderColor: "rgba(74,53,37,0.1)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <SectionHeading
            align="center"
            eyebrow="Pedagogical Progression"
            title="The 4-Phase Oniv Woods Learning Journey"
            subtitle="A proven trajectory turning raw curiosity into certified, market-ready design excellence."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 mt-10 sm:mt-16">
            {JOURNEY_STEPS.map((js, i) => (
              <motion.div
                key={js.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-6 sm:p-8 rounded-2xl bg-white border flex flex-col justify-between shadow-xs"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div>
                  <span className="font-display text-2xl sm:text-3xl font-bold block mb-2 sm:mb-4" style={{ color: "var(--oniv-amber-dark)" }}>
                    {js.step}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl mb-1.5 sm:mb-2.5" style={{ color: "var(--oniv-charcoal)" }}>
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

      {/* 6. BENEFITS */}
      <section className="py-16 sm:py-24 border-b" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <SectionHeading
            align="center"
            eyebrow="Why Choose Oniv Woods"
            title="Distinct Institutional Advantages"
            subtitle="Engineered to provide unmatched competitive differentiation in the global design economy."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7 mt-10 sm:mt-16">
            {PROGRAM_BENEFITS.map((b) => (
              <div
                key={b.title}
                className="p-6 sm:p-8 rounded-2xl bg-white border flex flex-col justify-between shadow-xs"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div>
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6"
                    style={{ background: "var(--oniv-beige)", color: "var(--oniv-amber-dark)" }}
                  >
                    {b.icon}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl mb-2" style={{ color: "var(--oniv-charcoal)" }}>
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

      {/* 7. HOW IT WORKS (ADMISSIONS WORKFLOW) */}
      <section className="py-16 sm:py-24" style={{ background: "var(--oniv-beige)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <SectionHeading
            align="center"
            eyebrow="Admissions Roadmap"
            title="How to Begin Your Journey"
            subtitle="Transparent, seamless onboarding from initial discovery to studio workbench."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 mt-10 sm:mt-16">
            {HOW_IT_WORKS.map((hw) => (
              <div
                key={hw.num}
                className="p-6 sm:p-8 rounded-2xl bg-white border shadow-xs flex flex-col justify-between"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs mb-4"
                    style={{ background: "var(--oniv-amber)", color: "var(--oniv-ivory)" }}
                  >
                    {hw.num}
                  </span>
                  <h4 className="font-display text-base sm:text-lg mb-1.5" style={{ color: "var(--oniv-charcoal)" }}>
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

      {/* 8. REGISTRATION CTA */}
      <FinalCTAPro onEnroll={() => handleEnrollClick()} />

      <Footer />
    </div>
  );
}
