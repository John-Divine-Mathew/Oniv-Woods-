import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiSun,
  FiFeather,
  FiShield,
  FiCheckCircle,
  FiArrowRight,
  FiLayers,
  FiCompass,
  FiAward,
} from "react-icons/fi";
import NavbarPro from "../components/NavbarPro";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";
import SustainabilitySection from "../components/SustainabilitySection";
import FinalCTAPro from "../components/FinalCTAPro";
import SEO from "../components/SEO";

export default function SustainabilityPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        background: "var(--oniv-ivory)",
        color: "var(--oniv-charcoal)",
      }}
    >
      <SEO
        title="Ecological Timber Stewardship & Material Ethics"
        description="Discover Oniv Woods' authentic sustainability philosophy: 100% solid plantation hardwoods, zero toxic solvent finishes, and algorithmic offcut recovery across India and Indonesia."
        canonical="/sustainability"
        ogType="website"
        image="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1200&auto=format&fit=crop"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Oniv Woods Material & Ecological Responsibility",
          "description": "Ethical timber sourcing, non-toxic organic oils, and generational craftsmanship longevity.",
          "author": {
            "@type": "Organization",
            "name": "ONIV WOODS School of Design Wisdom"
          }
        }}
      />
      <EnquiryModal open={openModal} onClose={() => setOpenModal(false)} />
      <NavbarPro onEnroll={() => setOpenModal(true)} />

      {/* HERO SECTION */}
      <section
        className="relative w-full min-h-[55vh] sm:min-h-[70vh] flex items-center overflow-hidden pt-24 sm:pt-28 pb-12 sm:pb-16"
        style={{ background: "var(--oniv-earth)" }}
      >
        <img
          src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1800&auto=format&fit=crop"
          alt="Lush sustainable teak and hardwood canopy"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,17,14,0.7) 0%, rgba(20,17,14,0.94) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs"
            style={{
              color: "var(--oniv-ivory)",
              background: "rgba(176,113,60,0.25)",
            }}
          >
            Ecological Material Stewardship
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-7xl leading-[1.12] sm:leading-[1.08] max-w-4xl mx-auto text-white"
          >
            Nature. Material. Responsibility.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 sm:mt-6 text-xs sm:text-lg max-w-3xl mx-auto leading-relaxed text-stone-300 font-light"
          >
            Wood is a living biological polymer. At Oniv Woods, ecological responsibility begins in the soil and tree canopy of certified replanted plantations and culminates in generational objects crafted to outlive their makers.
          </motion.p>
        </div>
      </section>

      {/* CORE 3D INTERACTIVE SUSTAINABILITY SECTION */}
      <SustainabilitySection onEnroll={() => setOpenModal(true)} />

      {/* DETAILED MATERIAL COMMITMENTS */}
      <section
        className="py-16 sm:py-24 border-t"
        style={{
          background: "var(--oniv-beige)",
          borderColor: "rgba(74,53,37,0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span
              className="eyebrow block mb-1.5 sm:mb-2 text-amber-800"
            >
              Strict Studio Standards
            </span>
            <h2
              className="font-display text-2xl sm:text-4xl font-bold"
              style={{ color: "var(--oniv-charcoal)" }}
            >
              Our Verified Environmental Practices
            </h2>
            <p
              className="text-xs sm:text-sm mt-2 leading-relaxed"
              style={{ color: "rgba(30,27,24,0.7)" }}
            >
              Zero synthetic veneers. Zero toxic solvent coats. Verified chain-of-custody hardwoods engineered for enduring life cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div
              className="p-6 sm:p-8 rounded-2xl bg-white border shadow-xs"
              style={{ borderColor: "rgba(74,53,37,0.12)" }}
            >
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6"
                style={{
                  background: "rgba(176,113,60,0.15)",
                  color: "var(--oniv-amber-dark)",
                }}
              >
                <FiCompass size={20} />
              </div>
              <h3
                className="font-display text-lg sm:text-xl font-semibold mb-2"
                style={{ color: "var(--oniv-charcoal)" }}
              >
                100% Solid Natural Wood
              </h3>
              <p
                className="text-xs sm:text-sm leading-relaxed"
                style={{ color: "rgba(30,27,24,0.7)" }}
              >
                We do not disguise low-grade composite particle boards with thin petroleum-glued veneers. Every Oniv Woods studio piece is constructed from genuine solid certified timber that breathes and patinas naturally.
              </p>
            </div>

            <div
              className="p-6 sm:p-8 rounded-2xl bg-white border shadow-xs"
              style={{ borderColor: "rgba(74,53,37,0.12)" }}
            >
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6"
                style={{
                  background: "rgba(176,113,60,0.15)",
                  color: "var(--oniv-amber-dark)",
                }}
              >
                <FiLayers size={20} />
              </div>
              <h3
                className="font-display text-lg sm:text-xl font-semibold mb-2"
                style={{ color: "var(--oniv-charcoal)" }}
              >
                Zero-Waste Offcut Recovery
              </h3>
              <p
                className="text-xs sm:text-sm leading-relaxed"
                style={{ color: "rgba(30,27,24,0.7)" }}
              >
                Through algorithmic CNC nesting software and annual circular innovation design challenges, timber offcuts are reclaimed into luxury lifestyle objects, acoustic screens, and decorative inlay elements.
              </p>
            </div>

            <div
              className="p-6 sm:p-8 rounded-2xl bg-white border shadow-xs"
              style={{ borderColor: "rgba(74,53,37,0.12)" }}
            >
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6"
                style={{
                  background: "rgba(176,113,60,0.15)",
                  color: "var(--oniv-amber-dark)",
                }}
              >
                <FiShield size={20} />
              </div>
              <h3
                className="font-display text-lg sm:text-xl font-semibold mb-2"
                style={{ color: "var(--oniv-charcoal)" }}
              >
                Non-Toxic Plant Finishes
              </h3>
              <p
                className="text-xs sm:text-sm leading-relaxed"
                style={{ color: "rgba(30,27,24,0.7)" }}
              >
                All furniture surfaces are treated exclusively with cold-pressed natural linseed oils, carnauba waxes, and organic plant extracts—emitting zero volatile organic compounds (VOCs) and allowing simple re-oiling over generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTAPro onEnroll={() => setOpenModal(true)} />
      <Footer />
    </div>
  );
}
