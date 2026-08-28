import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  FiFeather,
  FiSun,
  FiMaximize2,
} from "react-icons/fi";
import NavbarPro from "../components/NavbarPro";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";
import SectionHeading from "../components/SectionHeading";
import HiringPartner from "../components/HiringPartner";
import FinalCTAPro from "../components/FinalCTAPro";
import AboutWorkshopVideo from "../components/AboutWorkshopVideo";

// Section 4: Nature & Material Data
const WOOD_SPECIES = [
  {
    id: "teak",
    name: "Indonesian Teak (Tectona Grandis)",
    tag: "High Natural Silica & Oils",
    density: "650 kg/m³",
    origin: "Sustainable Replanted Plantations, Java",
    character: "Golden-brown honey hue with tight linear grain, unmatched weather resistance, and natural insect repellence.",
    bestFor: "Architectural Millwork & Luxury Outdoor/Indoor Furniture",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "walnut",
    name: "American & European Walnut",
    tag: "Rich Chocolate Tonal Depth",
    density: "610 kg/m³",
    origin: "FSC-Certified Temperate Forests",
    character: "Complex swirls, dark figuring, and soft satin tactile feel after hand-finishing with organic oils.",
    bestFor: "Heirloom Credenzas, Sculptural Chairs & Statement Tables",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "ash",
    name: "White Ash & European Oak",
    tag: "Exceptional Tensile Strength",
    density: "710 kg/m³",
    origin: "Responsibly Harvested Woodlands",
    character: "Prominent open grain patterns with superior steam-bending elasticity and shock-absorbing structural durability.",
    bestFor: "Parametric Acoustic Wall Systems & Kinetic Joinery",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "rosewood",
    name: "Sonokeling Rosewood",
    tag: "Exquisite Figured Grain",
    density: "830 kg/m³",
    origin: "Regulated Indonesian Agro-forestry",
    character: "Deep purple-black streaks with sweet floral resin scent, high density, and glass-smooth burnishing capacity.",
    bestFor: "Acoustic Decor, Custom Handles & Inlay Artistry",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop",
  },
];

// Section 6: Design Approach Steps
const DESIGN_PILLARS = [
  {
    step: "01",
    title: "Biological Material Diagnostics",
    subtitle: "Understanding Grain Orientation & Moisture",
    desc: "Every design journey begins at the cellular level. Students analyze wood species moisture equilibria, growth rings, expansion coefficients, and internal stress points before laying a single sketch line.",
  },
  {
    step: "02",
    title: "Architectural Form & Ergonomics",
    subtitle: "From Freehand Ideation to Scale Models",
    desc: "Translating architectural proportions into functional objects. We emphasize physical 1:5 scale foam and timber study models to rigorously validate weight, balance, and human posture interaction.",
  },
  {
    step: "03",
    title: "Parametric CAD & 5-Axis CNC Tooling",
    subtitle: "Mastering Digital Craftsmanship",
    desc: "Merging ancestral carpentry with algorithmic precision. Concepts are modeled in parametric CAD, simulated for stress deflection, and translated into precision multi-axis CNC toolpaths.",
  },
  {
    step: "04",
    title: "Hand Joinery & Heirloom Finishing",
    subtitle: "Master Artisan Assembly & Organic Oils",
    desc: "The final touch belongs to human hands. Dovetails, mortise-and-tenon joints, and custom wooden dowels are fitted with micro-millimeter tolerances and sealed with non-toxic natural plant oils.",
  },
];

// Section 7: Interior & Exterior Vision Categories
const SPATIAL_VISIONS = [
  {
    title: "Bespoke Heirloom Furniture",
    desc: "Dining centerpieces, ergonomic lounge seating, and tailored storage systems crafted to endure generations.",
    img: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Kinetic & Acoustic Spatial Partitions",
    desc: "Sculptural wooden louvers, sound-diffusing timber screens, and parametric architectural partitions.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Sustainable Exterior Timber Structures",
    desc: "Pergolas, pavilion roofs, and weather-resilient facade cladding engineered for tropical and temperate climates.",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
  },
];

// Section 8: Core Values
const CORE_VALUES = [
  {
    num: "01",
    title: "Material Honesty",
    desc: "We never disguise the natural soul of wood with synthetic veneers. Knots, grain variations, and live edges are celebrated as authentic hallmarks of nature.",
  },
  {
    num: "02",
    title: "Engineering Precision",
    desc: "Blending master craftsman instincts with millimeter-accurate CNC tolerance to produce pieces of heirloom durability and flawless function.",
  },
  {
    num: "03",
    title: "Ecological Stewardship",
    desc: "Committed strictly to certified replanted timber plantations, zero-waste nesting cut plans, and non-toxic biodegradable natural oil sealants.",
  },
  {
    num: "04",
    title: "Timeless Contemporary Vision",
    desc: "Rejecting ephemeral trends in favor of clean architectural silhouettes, thoughtful ergonomics, and enduring international design relevance.",
  },
];

export default function AboutPage() {
  const [openModal, setOpenModal] = useState(false);
  const [activeSpecies, setActiveSpecies] = useState(WOOD_SPECIES[0]);

  return (
    <div className="min-h-screen" style={{ background: "var(--oniv-ivory)", color: "var(--oniv-charcoal)" }}>
      <EnquiryModal open={openModal} onClose={() => setOpenModal(false)} />
      <NavbarPro onEnroll={() => setOpenModal(true)} />

      {/* ========================================================================= */}
      {/* 1. CINEMATIC HERO */}
      {/* ========================================================================= */}
      <section
        className="relative w-full min-h-[82vh] flex items-center overflow-hidden pt-28 pb-20"
        style={{ background: "var(--oniv-earth)" }}
      >
        <img
          src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=1800&auto=format&fit=crop"
          alt="Oniv Woods Architectural Workshop"
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
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
            style={{
              background: "rgba(176,113,60,0.2)",
              border: "1px solid rgba(176,113,60,0.4)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="eyebrow text-amber-200 text-[10px]">
              School of Design Wisdom
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.08] max-w-5xl mx-auto tracking-tight"
            style={{ color: "var(--oniv-ivory)" }}
          >
            Where Ancient Timber Wisdom Meets Futuristic Architectural Design.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-light"
            style={{ color: "rgba(249,246,240,0.85)" }}
          >
            An international design institute shaping the next generation of wood technology pioneers, master furniture architects, and spatial innovators across India and Indonesia.
          </motion.p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. BRAND PHILOSOPHY */}
      {/* ========================================================================= */}
      <section className="py-24 border-b" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="eyebrow block mb-3" style={{ color: "var(--oniv-amber-dark)" }}>
              The Philosophy of Living Timber
            </span>
            <h2 className="font-display text-3xl sm:text-5xl leading-tight mb-8" style={{ color: "var(--oniv-charcoal)" }}>
              Wood is not merely a raw material. It is a living, breathing architectural dialogue.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 pt-4 text-base sm:text-lg leading-relaxed" style={{ color: "rgba(30,27,24,0.78)" }}>
            <p>
              In an age inundated by transient digital simulations and disposable synthetic goods, <strong>Oniv Woods</strong> champions tactile material honesty. We cultivate designers who honor the slow growth of hardwood rings, the natural resilience of cellulose fibers, and the subtle warmth of timber joinery.
            </p>
            <p>
              True design wisdom emerges when reverent hand-craftsmanship converges with precision computational engineering. Our students learn to listen to the timber grain before cutting, ensuring every creation balances structural equilibrium, ergonomic comfort, and enduring poetic beauty.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. ONIV WOODS STORY */}
      {/* ========================================================================= */}
      <section className="py-24" style={{ background: "var(--oniv-beige)" }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="eyebrow block" style={{ color: "var(--oniv-amber-dark)" }}>
              Genesis & Mission
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight" style={{ color: "var(--oniv-charcoal)" }}>
              Reimagining Design Education from the Workshop Floor Upwards.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "rgba(30,27,24,0.75)" }}>
              Founded with the bold objective of closing the critical gap between theoretical design academies and industrial timber manufacturing, <strong>Oniv Woods School of Design Wisdom</strong> provides an authentic apprenticeship model.
            </p>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(30,27,24,0.7)" }}>
              We immerse aspiring creators in state-of-the-art production environments with heavy machinery, 5-axis CNC routing systems, drying kilns, and hand-tool benches. From individual bespoke prototypes to international trade expo exhibitions, we turn passion into world-class design mastery.
            </p>

            <div className="space-y-3 pt-3">
              {[
                "Dual-campus pedagogical ecosystem across India & Indonesia",
                "Full-scale production workshop machinery and studio labs",
                "Direct commercial incubation and global trade expo exhibition pipelines",
              ].map((pt, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(176,113,60,0.15)", color: "var(--oniv-amber-dark)" }}
                  >
                    <FiCheckCircle size={14} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: "var(--oniv-charcoal)" }}>
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border" style={{ borderColor: "rgba(74,53,37,0.15)" }}>
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=900&auto=format&fit=crop"
                alt="Oniv Woods Studio Craftsmanship"
                className="w-full h-96 sm:h-[460px] object-cover"
              />
            </div>
            <div
              className="hidden sm:block absolute -bottom-6 -left-6 p-6 rounded-2xl shadow-xl border backdrop-blur-md max-w-xs"
              style={{ background: "#ffffff", borderColor: "rgba(74,53,37,0.12)" }}
            >
              <span className="font-display text-2xl font-bold block mb-1" style={{ color: "var(--oniv-amber-dark)" }}>
                Hands-On Rigor
              </span>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(30,27,24,0.65)" }}>
                No purely digital concepts. Every graduate proves their design through full-scale functional prototypes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. NATURE & MATERIAL (INTERACTIVE WOOD SPECIES EXPLORER) */}
      {/* ========================================================================= */}
      <section className="py-24 border-b" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            align="center"
            eyebrow="Material Honesty & Forestry"
            title="The Soul of Timber: Species Mastery & Grain Science"
            subtitle="Mastering the unique biological density, moisture behavior, and aesthetic figuring of responsibly harvested hardwoods."
          />

          {/* Species Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 mt-12 mb-10">
            {WOOD_SPECIES.map((species) => {
              const active = activeSpecies.id === species.id;
              return (
                <button
                  key={species.id}
                  onClick={() => setActiveSpecies(species)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer"
                  style={{
                    background: active ? "var(--oniv-amber)" : "var(--oniv-beige)",
                    color: active ? "var(--oniv-ivory)" : "var(--oniv-charcoal)",
                    border: active ? "1px solid var(--oniv-amber)" : "1px solid rgba(74,53,37,0.15)",
                  }}
                >
                  {species.name.split(" (")[0]}
                </button>
              );
            })}
          </div>

          {/* Active Material Showcase Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSpecies.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-10 rounded-2xl border bg-white shadow-xl grid lg:grid-cols-12 gap-8 items-center"
              style={{ borderColor: "rgba(74,53,37,0.12)" }}
            >
              <div className="lg:col-span-5 h-72 sm:h-80 rounded-xl overflow-hidden shadow-inner">
                <img
                  src={activeSpecies.image}
                  alt={activeSpecies.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-7 space-y-4">
                <span className="eyebrow" style={{ color: "var(--oniv-amber-dark)" }}>
                  {activeSpecies.tag}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl" style={{ color: "var(--oniv-charcoal)" }}>
                  {activeSpecies.name}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(30,27,24,0.75)" }}>
                  {activeSpecies.character}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-3 border-t" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider block" style={{ color: "rgba(30,27,24,0.5)" }}>
                      Density & Weight
                    </span>
                    <span className="font-semibold text-sm" style={{ color: "var(--oniv-charcoal)" }}>
                      {activeSpecies.density}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider block" style={{ color: "rgba(30,27,24,0.5)" }}>
                      Origin & Sourcing
                    </span>
                    <span className="font-semibold text-sm" style={{ color: "var(--oniv-charcoal)" }}>
                      {activeSpecies.origin}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-semibold block mb-1" style={{ color: "var(--oniv-amber-dark)" }}>
                    Primary Architectural Application:
                  </span>
                  <p className="text-xs sm:text-sm" style={{ color: "rgba(30,27,24,0.7)" }}>
                    {activeSpecies.bestFor}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CRAFTSMANSHIP & WORKSHOP MASTERCLASS */}
      {/* ========================================================================= */}
      <section className="py-24" style={{ background: "var(--oniv-earth)" }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative on Craftsmanship */}
          <div className="lg:col-span-6 space-y-6">
            <span className="eyebrow inline-block px-3.5 py-1 rounded-full text-[10px]" style={{ color: "var(--oniv-ivory)", background: "rgba(176,113,60,0.25)" }}>
              The Guild Studio Experience
            </span>
            <h2 className="font-display text-3xl sm:text-5xl leading-tight" style={{ color: "var(--oniv-ivory)" }}>
              Mastering the Synergy of Hand Joinery & Heavy Machinery.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "rgba(249,246,240,0.8)" }}>
              Craftsmanship at Oniv Woods is an uncompromising pursuit of excellence. Students train across traditional hand-plane sharpening, Japanese pulling saws, dovetail cutting, spindle moulders, circular panel saws, and vacuum press lamination.
            </p>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(249,246,240,0.65)" }}>
              Under the direct mentorship of senior master artisans from India and Indonesia, learners understand the tactile feedback of sharp chisels against grain, executing flawless joints that require zero metallic fasteners.
            </p>
          </div>

          {/* Right Live Workshop Video Player Component */}
          <div className="lg:col-span-6">
            <AboutWorkshopVideo />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. DESIGN APPROACH (4-STAGE METHODOLOGY) */}
      {/* ========================================================================= */}
      <section className="py-24 border-b" style={{ background: "var(--oniv-beige)", borderColor: "rgba(74,53,37,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            align="center"
            eyebrow="Pedagogical Blueprint"
            title="The 4-Stage Oniv Woods Design Methodology"
            subtitle="A systematic framework bridging raw creative inspiration to commercial market reality."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-16">
            {DESIGN_PILLARS.map((dp, idx) => (
              <motion.div
                key={dp.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-8 rounded-2xl bg-white border flex flex-col justify-between shadow-sm hover:shadow-xl transition-all"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div>
                  <span className="font-display text-3xl font-bold block mb-3" style={{ color: "var(--oniv-amber-dark)" }}>
                    {dp.step}
                  </span>
                  <h3 className="font-display text-lg mb-1" style={{ color: "var(--oniv-charcoal)" }}>
                    {dp.title}
                  </h3>
                  <span className="eyebrow block mb-3 text-[10px]" style={{ color: "var(--oniv-amber)" }}>
                    {dp.subtitle}
                  </span>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(30,27,24,0.68)" }}>
                    {dp.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. INTERIOR & EXTERIOR VISION */}
      {/* ========================================================================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            align="center"
            eyebrow="Architectural Scope"
            title="Shaping the Built Environment: Interior & Exterior Vision"
            subtitle="Extending timber design from standalone heirloom objects to transformative spatial environments."
          />

          <div className="grid sm:grid-cols-3 gap-8 mt-16">
            {SPATIAL_VISIONS.map((v, i) => (
              <div
                key={v.title}
                className="group rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div>
                  <div className="h-56 overflow-hidden">
                    <img
                      src={v.img}
                      alt={v.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl mb-2.5" style={{ color: "var(--oniv-charcoal)" }}>
                      {v.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(30,27,24,0.65)" }}>
                      {v.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CORE VALUES */}
      {/* ========================================================================= */}
      <section className="py-24 border-t" style={{ background: "var(--oniv-beige)", borderColor: "rgba(74,53,37,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Our Guiding Values"
            title="Principles That Define Every Masterclass & Project"
            subtitle="The fundamental standards embedded across every workshop, faculty critique, and graduate portfolio."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {CORE_VALUES.map((cv) => (
              <div
                key={cv.title}
                className="border-t-2 pt-6"
                style={{ borderColor: "var(--oniv-amber)" }}
              >
                <span className="font-display text-2xl font-bold block mb-2" style={{ color: "var(--oniv-amber-dark)" }}>
                  {cv.num}
                </span>
                <h4 className="font-display text-xl mb-2" style={{ color: "var(--oniv-charcoal)" }}>
                  {cv.title}
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(30,27,24,0.65)" }}>
                  {cv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. GLOBAL VISION & ECOSYSTEM PARTNERS */}
      {/* ========================================================================= */}
      <section className="py-24 border-b" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 text-center max-w-3xl mx-auto mb-12">
          <span className="eyebrow" style={{ color: "var(--oniv-amber-dark)" }}>
            International Exchange Axis
          </span>
          <h2 className="font-display text-3xl sm:text-5xl mt-2 mb-4" style={{ color: "var(--oniv-charcoal)" }}>
            Connecting the Design Capitals of India and Indonesia.
          </h2>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(30,27,24,0.7)" }}>
            Our dual-nation framework gives students unparalleled direct exposure to Southeast Asia's thriving timber furniture hubs, collaborative trade internships, and showcase opportunities at Trade Expo Indonesia (TEI).
          </p>
        </div>

        {/* Marquee Row */}
        <HiringPartner />
      </section>

      {/* ========================================================================= */}
      {/* 10. FINAL CTA */}
      {/* ========================================================================= */}
      <FinalCTAPro onEnroll={() => setOpenModal(true)} />

      <Footer />
    </div>
  );
}
