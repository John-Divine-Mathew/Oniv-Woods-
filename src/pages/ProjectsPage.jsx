import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiAward,
  FiLayers,
  FiMaximize2,
  FiCheckCircle,
  FiGlobe,
  FiMapPin,
  FiCalendar,
  FiX,
  FiCompass,
  FiTool,
} from "react-icons/fi";
import NavbarPro from "../components/NavbarPro";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";
import SectionHeading from "../components/SectionHeading";
import FinalCTAPro from "../components/FinalCTAPro";

const CATEGORIES = [
  "All Works",
  "Furniture & Joinery",
  "Spatial & Architectural",
  "Parametric CAD & CNC",
  "Trade Expo Indonesia Exhibits",
];

// Verified ONIV WOODS studio and showcase projects
const PROJECTS = [
  {
    id: "komorebi-lounge",
    title: "Komorebi Sculptural Lounge Chair",
    category: "Furniture & Joinery",
    location: "Oniv Woods Studio, Java & Bangalore",
    year: "2025",
    material: "Solid Indonesian Teak & Vegetable-Tanned Leather",
    featured: true,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1200&auto=format&fit=crop",
    desc: "An exploration of Japanese mortise-and-tenon joinery combined with contemporary ergonomic contours for heirloom structural longevity.",
    specs: ["100% Solid Certified Teak", "Hand-Fitted Sliding Mortise Joints", "Cold-Pressed Linseed Oil Seal"],
  },
  {
    id: "parametric-screen",
    title: "Parametric Timber Acoustic Screen",
    category: "Parametric CAD & CNC",
    location: "Architectural Acoustics Lab, Jakarta",
    year: "2025",
    material: "FSC-Certified Ash & Micro-Perforated Timber",
    featured: true,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    desc: "Algorithmically optimized sound diffusion system for modern luxury interiors, machined with 5-axis CNC tolerance.",
    specs: ["Parametric Wave Profile", "5-Axis CNC Milling", "45% Sound Reflection Dampening"],
  },
  {
    id: "nusantara-credenza",
    title: "Nusantara Modular Credenza",
    category: "Furniture & Joinery",
    location: "Studio Craft Workshop",
    year: "2024",
    material: "Reclaimed Rosewood & Brushed Brass Accents",
    featured: false,
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1000&auto=format&fit=crop",
    desc: "Handcrafted credenza showcasing traditional sliding tambour doors, seamless book-matched grain, and non-toxic oil finish.",
    specs: ["Reclaimed Hardwood", "Tambour Sliding Mechanism", "Dovetail Internal Drawer Boxes"],
  },
  {
    id: "jakarta-pavilion",
    title: "Spatial Timber Pavilion Grid",
    category: "Spatial & Architectural",
    location: "Trade Expo Indonesia, BSD City",
    year: "2024",
    material: "Structural Glulam & Cross-Laminated Timber",
    featured: false,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop",
    desc: "A lightweight demountable architectural installation demonstrated at international trade forums across Southeast Asia.",
    specs: ["Demountable Interlocking Jointing", "Cross-Laminated Timber Beams", "Tropical Climate Weather Sealing"],
  },
  {
    id: "tei-cantilever-table",
    title: "Live-Edge Cantilever Dining Table",
    category: "Trade Expo Indonesia Exhibits",
    location: "Trade Expo Indonesia Showcase",
    year: "2024",
    material: "Burr Walnut & High-Tensile Structural Core",
    featured: false,
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=1000&auto=format&fit=crop",
    desc: "Seamless balance of natural live-edge grain character and high-tensile carbon reinforcement for extreme spans.",
    specs: ["Natural Edge Hardwood Slab", "Concealed Carbon Steel Stiffener", "Natural Hardwax Burnished Finish"],
  },
  {
    id: "ergonomic-drafting-desk",
    title: "Minimalist Ergonomic Drafting Desk",
    category: "Parametric CAD & CNC",
    location: "Student Incubation Lab",
    year: "2025",
    material: "Steamed Beech & Hardwax Oil Finish",
    featured: false,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop",
    desc: "Integrated hidden cable routing channels, pneumatic height adjustment, and traditional dovetail drawer boxes.",
    specs: ["Integrated Cable Channels", "Solid Beech Joinery", "Matte Architectural Finish"],
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Works");
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [openEnquiryModal, setOpenEnquiryModal] = useState(false);
  const [selectedProjectTitle, setSelectedProjectTitle] = useState("");

  const filteredProjects =
    selectedCategory === "All Works"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const handleInquireClick = (title = "") => {
    setSelectedProjectTitle(title ? `Project Inquiry: ${title}` : "Studio Project Inquiry");
    if (activeProjectModal) setActiveProjectModal(null);
    setOpenEnquiryModal(true);
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--oniv-ivory)", color: "var(--oniv-charcoal)" }}>
      <EnquiryModal
        open={openEnquiryModal}
        onClose={() => setOpenEnquiryModal(false)}
        defaultCourse={selectedProjectTitle}
      />
      <NavbarPro onEnroll={() => handleInquireClick()} />

      {/* ========================================================================= */}
      {/* 1. CINEMATIC HERO */}
      {/* ========================================================================= */}
      <section
        className="relative w-full min-h-[75vh] flex items-center overflow-hidden pt-28 pb-20"
        style={{ background: "var(--oniv-earth)" }}
      >
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1800&auto=format&fit=crop"
          alt="Oniv Woods Architectural Gallery"
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
            The Curated Portfolio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.08] max-w-5xl mx-auto"
            style={{ color: "var(--oniv-ivory)" }}
          >
            Selected Studio Works & Architectural Precedents.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-light"
            style={{ color: "rgba(249,246,240,0.85)" }}
          >
            A high-end architectural retrospective of handcrafted heirlooms, parametric acoustic partitions, and commercial exhibition prototypes developed across India and Indonesia.
          </motion.p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FEATURED PROJECTS (ASYMMETRICAL EDITORIAL SPREADS) */}
      {/* ========================================================================= */}
      <section className="py-24 border-b" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            align="center"
            eyebrow="Editorial Spotlight"
            title="Featured Studio Masterworks"
            subtitle="Flagship architectural pieces demonstrating the uncompromising synergy of hand joinery and multi-axis CNC tooling."
          />

          <div className="mt-16 space-y-20">
            {PROJECTS.filter((p) => p.featured).map((proj, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <motion.div
                  key={proj.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7 }}
                  className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Big Image Spread with Hover Zoom */}
                  <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div
                      onClick={() => setActiveProjectModal(proj)}
                      className="group relative rounded-3xl overflow-hidden shadow-2xl border cursor-pointer h-96 sm:h-[460px] bg-gray-100"
                      style={{ borderColor: "rgba(74,53,37,0.15)" }}
                    >
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 text-black backdrop-blur-md inline-flex items-center gap-2">
                          <FiMaximize2 size={13} />
                          <span>View Detail Spread</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Editorial Text Column */}
                  <div className={`lg:col-span-5 space-y-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="flex items-center gap-3">
                      <span className="eyebrow text-xs" style={{ color: "var(--oniv-amber-dark)" }}>
                        {proj.category}
                      </span>
                      {proj.year && (
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-semibold">
                          {proj.year}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-3xl sm:text-4xl leading-tight" style={{ color: "var(--oniv-charcoal)" }}>
                      {proj.title}
                    </h3>

                    <p className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(30,27,24,0.75)" }}>
                      {proj.desc}
                    </p>

                    {proj.location && (
                      <div className="flex items-center gap-2 text-xs font-medium" style={{ color: "rgba(30,27,24,0.6)" }}>
                        <FiMapPin className="text-amber-700" size={14} />
                        <span>{proj.location}</span>
                      </div>
                    )}

                    <div className="pt-2 border-t" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
                      <span className="text-xs font-semibold block mb-1 text-amber-800">
                        Material & Execution:
                      </span>
                      <p className="text-xs font-medium" style={{ color: "rgba(30,27,24,0.7)" }}>
                        {proj.material}
                      </p>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => setActiveProjectModal(proj)}
                        className="btn-oniv-primary text-xs uppercase tracking-wider font-bold py-3 px-6 shadow-md"
                      >
                        Inspect Specifications
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3 & 4. PROJECT CATEGORIES & GALLERY (EDITORIAL MASONRY-STYLE GRID) */}
      {/* ========================================================================= */}
      <section className="py-24" style={{ background: "var(--oniv-beige)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div>
              <span className="eyebrow" style={{ color: "var(--oniv-amber-dark)" }}>
                Curated Collection
              </span>
              <h2 className="font-display text-3xl sm:text-5xl mt-2" style={{ color: "var(--oniv-charcoal)" }}>
                Project Archive
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className="px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer"
                    style={{
                      background: active ? "var(--oniv-amber)" : "#ffffff",
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

          {/* Project Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group rounded-3xl overflow-hidden border bg-white flex flex-col justify-between shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div>
                  {/* Image with Zoom */}
                  <div
                    onClick={() => setActiveProjectModal(p)}
                    className="relative h-64 overflow-hidden bg-gray-100 cursor-pointer"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-md bg-black/65 text-white border border-white/15">
                        {p.category}
                      </span>
                    </div>
                    {p.year && (
                      <div className="absolute top-4 right-4">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider bg-white/90 text-black backdrop-blur-md">
                          {p.year}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Metadata */}
                  <div className="p-6">
                    <h3 className="font-display text-xl leading-snug mb-2" style={{ color: "var(--oniv-charcoal)" }}>
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed mb-4" style={{ color: "rgba(30,27,24,0.68)" }}>
                      {p.desc}
                    </p>

                    <div className="pt-3 border-t text-xs" style={{ borderColor: "rgba(74,53,37,0.08)", color: "rgba(30,27,24,0.6)" }}>
                      <strong className="text-amber-800">Material:</strong> {p.material}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div
                  className="px-6 pb-6 pt-2 border-t flex items-center justify-between"
                  style={{ borderColor: "rgba(74,53,37,0.06)" }}
                >
                  <button
                    onClick={() => setActiveProjectModal(p)}
                    className="text-xs font-bold uppercase tracking-wider transition-colors hover:text-amber-700 inline-flex items-center gap-1.5 cursor-pointer"
                    style={{ color: "var(--oniv-amber-dark)" }}
                  >
                    <span>View Detail</span>
                    <FiArrowRight size={13} />
                  </button>

                  <button
                    onClick={() => handleInquireClick(p.title)}
                    className="px-3.5 py-1.5 rounded-md text-xs font-semibold bg-amber-100 text-amber-900 transition-colors hover:bg-amber-200 cursor-pointer"
                  >
                    Inquire
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PROJECT DETAIL MODAL SPREAD */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeProjectModal && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProjectModal(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl border"
              style={{
                background: "var(--oniv-ivory)",
                borderColor: "rgba(74, 53, 37, 0.18)",
              }}
            >
              {/* Header */}
              <div
                className="px-7 py-5 flex items-center justify-between border-b shrink-0"
                style={{
                  background: "var(--oniv-earth)",
                  borderColor: "rgba(249, 246, 240, 0.08)",
                }}
              >
                <div>
                  <span className="eyebrow block text-[10px]" style={{ color: "var(--oniv-amber)" }}>
                    {activeProjectModal.category} • {activeProjectModal.year}
                  </span>
                  <h3 className="font-display text-xl" style={{ color: "var(--oniv-ivory)" }}>
                    {activeProjectModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="p-2 rounded-full transition-colors hover:bg-white/10 cursor-pointer"
                  style={{ color: "var(--oniv-ivory)" }}
                >
                  <FiX size={18} />
                </button>
              </div>

              {/* Body */}
              <div className="p-7 overflow-y-auto space-y-6 flex-1">
                <div className="h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={activeProjectModal.image}
                    alt={activeProjectModal.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-base leading-relaxed" style={{ color: "rgba(30,27,24,0.78)" }}>
                    {activeProjectModal.desc}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-white border" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider block mb-1 text-gray-500">
                        Material Diagnostics
                      </span>
                      <p className="text-xs sm:text-sm font-semibold" style={{ color: "var(--oniv-charcoal)" }}>
                        {activeProjectModal.material}
                      </p>
                    </div>
                    {activeProjectModal.location && (
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider block mb-1 text-gray-500">
                          Provenance / Location
                        </span>
                        <p className="text-xs sm:text-sm font-semibold" style={{ color: "var(--oniv-charcoal)" }}>
                          {activeProjectModal.location}
                        </p>
                      </div>
                    )}
                  </div>

                  {activeProjectModal.specs?.length > 0 && (
                    <div>
                      <span className="eyebrow block mb-2" style={{ color: "var(--oniv-amber-dark)" }}>
                        Architectural Joinery & Specs
                      </span>
                      <div className="space-y-2">
                        {activeProjectModal.specs.map((sp, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-medium" style={{ color: "var(--oniv-charcoal)" }}>
                            <FiCheckCircle className="text-amber-700 shrink-0" size={15} />
                            <span>{sp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t flex flex-wrap items-center justify-between gap-4" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
                  <button
                    onClick={() => handleInquireClick(activeProjectModal.title)}
                    className="btn-oniv-primary text-xs uppercase tracking-wider font-bold py-3 px-6 shadow-md"
                  >
                    Inquire About Custom Fabrication
                  </button>

                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="btn-oniv-outline text-xs uppercase tracking-wider font-bold py-3 px-5"
                  >
                    Close Spread
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FINAL CTA */}
      <FinalCTAPro onEnroll={() => handleInquireClick()} />

      <Footer />
    </div>
  );
}
