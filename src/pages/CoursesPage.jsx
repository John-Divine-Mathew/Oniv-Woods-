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
} from "react-icons/fi";
import NavbarPro from "../components/NavbarPro";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";
import SectionHeading from "../components/SectionHeading";
import FeatureStrip from "../components/FeatureStrip";
import HiringPartner from "../components/HiringPartner";
import FinalCTAPro from "../components/FinalCTAPro";

const CATEGORIES = [
  "All Disciplines",
  "Wood & Product Design",
  "Industrial & Spatial",
  "Digital & Software",
  "Business & Growth",
];

const ALL_COURSES = [
  {
    id: "productDesign",
    title: "Product Designing Course",
    category: "Wood & Product Design",
    duration: "4–6 Months",
    mode: "Workshop + Studio",
    image: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_800/course3_rjg7ld.webp",
    summary: "Master the complete lifecycle of wooden lifestyle products, luxury furniture, acoustic decor, and joinery mechanics.",
    tags: ["Timber Mechanics", "Hand Tools & Joinery", "Prototype Building", "Portfolio"],
  },
  {
    id: "industrialDesign",
    title: "Industrial Designing Course",
    category: "Industrial & Spatial",
    duration: "4–8 Months",
    mode: "Workshop + CAD Labs",
    image: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_800/course4_zk3izx.webp",
    summary: "Form, ergonomics, CNC machining, polymer/wood hybrid composites, and manufacturing-grade 3D CAD visualization.",
    tags: ["Parametric CAD", "Ergonomics", "Rapid Prototyping", "Mass Production"],
  },
  {
    id: "business",
    title: "Business & Startup Course",
    category: "Business & Growth",
    duration: "3–6 Months",
    mode: "Executive Mentorship",
    image: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_800/course1_sucxsg.webp",
    summary: "Venture incubation tailored for design founders — product pricing, supply chain logistics, branding, and capital raising.",
    tags: ["Venture Strategy", "Unit Economics", "Brand Identity", "Scaling Systems"],
  },
  {
    id: "uiux",
    title: "UI/UX Design Course",
    category: "Digital & Software",
    duration: "3–5 Months",
    mode: "Design Studio",
    image: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_800/course18_c3v8rf.webp",
    summary: "Design digital product architectures, interactive design systems, mobile experiences, and user research frameworks.",
    tags: ["Figma Mastery", "UX Research", "Design Systems", "Interactive Flows"],
  },
  {
    id: "webDev",
    title: "Full-Stack Web Development",
    category: "Digital & Software",
    duration: "4–6 Months",
    mode: "Code Labs",
    image: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_800/course16_a5b0aj.webp",
    summary: "Modern web application development utilizing React, modern CSS, performant backends, and deployment architectures.",
    tags: ["React & Node", "API Architecture", "Performance", "Cloud Deploy"],
  },
  {
    id: "dm",
    title: "Digital Marketing & Brand Growth",
    category: "Business & Growth",
    duration: "3–4 Months",
    mode: "Live Campaigns",
    image: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_800/course7_gh0vce.webp",
    summary: "Full-funnel digital strategy, international organic search ranking, performance paid acquisition, and content narratives.",
    tags: ["SEO Systems", "Meta & Google Ads", "Audience Growth", "Funnel CRO"],
  },
  {
    id: "mobileApp",
    title: "Mobile App Development",
    category: "Digital & Software",
    duration: "4–6 Months",
    mode: "App Studio",
    image: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_800/course20_fpjin1.webp",
    summary: "Cross-platform mobile applications for iOS & Android with cloud databases, real-time sync, and app store deployment.",
    tags: ["Flutter / RN", "Firebase & APIs", "Store Publish", "App Architecture"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Strategy & Operations",
    category: "Business & Growth",
    duration: "3–4 Months",
    mode: "Store Operations",
    image: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_800/course19_mfahpc.webp",
    summary: "Building, marketing, and automating international online commerce channels, inventory warehouses, and fulfillment.",
    tags: ["Store Build", "Supply Logistics", "Paid Funnels", "Retention CRO"],
  },
];

const METHODOLOGY = [
  {
    step: "01",
    title: "Foundations & Material Science",
    desc: "Understand structural properties, timber biology, grain orientation, hand tools, and workshop ergonomics.",
  },
  {
    step: "02",
    title: "Hands-on Workshop Prototyping",
    desc: "Work directly on industrial timber machinery, spindle moulders, table saws, and joinery jigs under master supervision.",
  },
  {
    step: "03",
    title: "Digital Modeling & CNC Tooling",
    desc: "Translate freehand ideation into precision CAD models, CNC toolpaths, and standardized manufacturing blueprints.",
  },
  {
    step: "04",
    title: "Portfolio Curation & Placement",
    desc: "Complete commercial-grade capstone projects, build an international portfolio, and pitch to industry partners.",
  },
];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Disciplines");
  const [openModal, setOpenModal] = useState(false);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState("");
  const navigate = useNavigate();

  const filteredCourses =
    selectedCategory === "All Disciplines"
      ? ALL_COURSES
      : ALL_COURSES.filter((c) => c.category === selectedCategory);

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

      {/* HERO SECTION */}
      <section
        className="relative w-full min-h-[70vh] flex items-center overflow-hidden pt-28 pb-20"
        style={{ background: "var(--oniv-earth)" }}
      >
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1800&auto=format&fit=crop"
          alt="Courses workshop hero"
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
            Academic & Professional Catalog
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.08] max-w-4xl mx-auto"
            style={{ color: "var(--oniv-ivory)" }}
          >
            Disciplines of Craft, Technology & Commerce.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(249,246,240,0.8)" }}
          >
            Immersive, hands-on design programs curated for aspiring artisans, product engineers, and creative entrepreneurs.
          </motion.p>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <FeatureStrip />

      {/* FILTERABLE CATALOG SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <span className="eyebrow" style={{ color: "var(--oniv-amber-dark)" }}>
                Curated Programs
              </span>
              <h2 className="font-display text-3xl sm:text-4xl mt-2" style={{ color: "var(--oniv-charcoal)" }}>
                Explore All Offerings
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

          {/* Courses Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((c, idx) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group rounded-2xl overflow-hidden border bg-white flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
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

                    <h3 className="font-display text-xl leading-snug mb-3" style={{ color: "var(--oniv-charcoal)" }}>
                      {c.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed mb-5" style={{ color: "rgba(30,27,24,0.65)" }}>
                      {c.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
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

                <div className="px-6 pb-6 pt-2 border-t flex items-center justify-between gap-3" style={{ borderColor: "rgba(74,53,37,0.08)" }}>
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

      {/* TRAINING METHODOLOGY SECTION */}
      <section className="py-24 border-y" style={{ background: "var(--oniv-beige)", borderColor: "rgba(74,53,37,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            align="center"
            eyebrow="The Apprenticeship Model"
            title="How We Bridge Classroom Theory to Commercial Reality"
            subtitle="Our structured learning pipeline is modeled after international master guild studios and advanced German wood engineering standards."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {METHODOLOGY.map((m, i) => (
              <motion.div
                key={m.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-white border flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div>
                  <span className="font-display text-3xl font-bold block mb-4" style={{ color: "var(--oniv-amber-dark)" }}>
                    {m.step}
                  </span>
                  <h3 className="font-display text-xl mb-2.5" style={{ color: "var(--oniv-charcoal)" }}>
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

      {/* HIRING PARTNERS */}
      <HiringPartner />

      {/* FINAL CTA */}
      <FinalCTAPro onEnroll={() => handleEnrollClick()} />

      <Footer />
    </div>
  );
}
