import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiAward,
  FiLayers,
  FiMaximize2,
  FiCheckCircle,
  FiGlobe,
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

const PROJECTS = [
  {
    id: 1,
    title: "Komorebi Sculptural Lounge Chair",
    category: "Furniture & Joinery",
    material: "Solid Indonesian Teak & Vegetable-Tanned Leather",
    year: "2025 Studio Capstone",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=900&auto=format&fit=crop",
    desc: "An exploration of Japanese mortise-and-tenon joinery combined with contemporary ergonomic contours for heirloom longevity.",
  },
  {
    id: 2,
    title: "Parametric Timber Acoustic Screen",
    category: "Parametric CAD & CNC",
    material: "FSC-Certified Ash & Micro-Perforated Panels",
    year: "Architectural R&D",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
    desc: "Algorithmically optimized sound diffusion system for modern luxury auditoriums, machined with 5-axis CNC precision.",
  },
  {
    id: 3,
    title: "Nusantara Modular Credenza",
    category: "Furniture & Joinery",
    material: "Reclaimed Rosewood & Brushed Brass Accents",
    year: "Commercial Production",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=900&auto=format&fit=crop",
    desc: "Handcrafted credenza showcasing traditional sliding tambour doors and non-toxic cold-pressed oil finishes.",
  },
  {
    id: 4,
    title: "Jakarta Pavilion Wood-Polymer Spatial Grid",
    category: "Spatial & Architectural",
    material: "Structural Glulam & Cross-Laminated Timber",
    year: "International Exhibition",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=900&auto=format&fit=crop",
    desc: "A lightweight demountable architectural installation demonstrated at trade forums across Southeast Asia.",
  },
  {
    id: 5,
    title: "Veneer & Resin Hybrid Cantilever Table",
    category: "Trade Expo Indonesia Exhibits",
    material: "Burr Walnut & Bio-Epoxy Matrix",
    year: "TEI Showcase Finalist",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=900&auto=format&fit=crop",
    desc: "Seamless balance of natural live-edge grain character and high-tensile structural carbon core.",
  },
  {
    id: 6,
    title: "Minimalist Ergonomic Drafting Desk",
    category: "Parametric CAD & CNC",
    material: "Steamed Beech & Hardwax Oil Finish",
    year: "Student Incubation",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=900&auto=format&fit=crop",
    desc: "Integrated hidden cable routing channels, pneumatic height adjustment, and traditional dovetail drawer boxes.",
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Works");
  const [openModal, setOpenModal] = useState(false);

  const filteredProjects =
    selectedCategory === "All Works"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen" style={{ background: "var(--oniv-ivory)", color: "var(--oniv-charcoal)" }}>
      <EnquiryModal open={openModal} onClose={() => setOpenModal(false)} />
      <NavbarPro onEnroll={() => setOpenModal(true)} />

      {/* HERO SECTION */}
      <section
        className="relative w-full min-h-[70vh] flex items-center overflow-hidden pt-28 pb-20"
        style={{ background: "var(--oniv-earth)" }}
      >
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1800&auto=format&fit=crop"
          alt="Oniv Woods Studio Projects"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,17,14,0.72) 0%, rgba(20,17,14,0.94) 100%)",
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
            Portfolio & Prototypes
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.08] max-w-4xl mx-auto"
            style={{ color: "var(--oniv-ivory)" }}
          >
            Crafted with Precision. Designed for Tomorrow.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(249,246,240,0.8)" }}
          >
            A curated gallery of handcrafted heirlooms, parametric architectural surfaces, and award-winning commercial prototypes developed at Oniv Woods studios.
          </motion.p>
        </div>
      </section>

      {/* FILTER & GALLERY SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div>
              <span className="eyebrow" style={{ color: "var(--oniv-amber-dark)" }}>
                Excellence in Practice
              </span>
              <h2 className="font-display text-3xl sm:text-4xl mt-2" style={{ color: "var(--oniv-charcoal)" }}>
                Selected Studio Works
              </h2>
            </div>

            {/* Category Filter */}
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

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="group rounded-2xl overflow-hidden border bg-white flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase backdrop-blur-md bg-black/60 text-white border border-white/10">
                        {p.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="eyebrow block mb-2" style={{ color: "var(--oniv-amber-dark)" }}>
                      {p.category}
                    </span>
                    <h3 className="font-display text-xl leading-snug mb-2.5" style={{ color: "var(--oniv-charcoal)" }}>
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed mb-4" style={{ color: "rgba(30,27,24,0.65)" }}>
                      {p.desc}
                    </p>
                    <div className="pt-3 border-t text-[11px] font-medium" style={{ borderColor: "rgba(74,53,37,0.08)", color: "rgba(30,27,24,0.6)" }}>
                      <strong>Material:</strong> {p.material}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => setOpenModal(true)}
                    className="w-full py-2.5 rounded-md text-xs font-semibold border transition-colors hover:bg-black/5 flex items-center justify-center gap-2 cursor-pointer"
                    style={{ borderColor: "rgba(74,53,37,0.2)", color: "var(--oniv-charcoal)" }}
                  >
                    <span>Inquire About Custom Production</span>
                    <FiArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTAPro onEnroll={() => setOpenModal(true)} />

      <Footer />
    </div>
  );
}
