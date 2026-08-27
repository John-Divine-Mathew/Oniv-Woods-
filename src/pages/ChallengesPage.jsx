import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiGlobe,
  FiAward,
  FiCompass,
  FiCheckCircle,
  FiArrowRight,
  FiCalendar,
  FiStar,
  FiFileText,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";
import NavbarPro from "../components/NavbarPro";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";
import SectionHeading from "../components/SectionHeading";
import FinalCTAPro from "../components/FinalCTAPro";

const CHALLENGE_PILLARS = [
  {
    icon: <FiGlobe size={26} />,
    title: "Global Jury & Platform",
    desc: "An international jury of celebrated architects and industrial designers from India and Indonesia critique your design concepts.",
    highlight: "Cross-Border Recognition",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: <FiAward size={26} />,
    title: "Trade Expo Indonesia Showcase",
    desc: "Shortlisted designers earn an all-inclusive sponsored trip and a dedicated exhibitor stall at Trade Expo Indonesia (TEI) to meet global buyers and distributors.",
    highlight: "Direct Market Access",
    image: "https://images.unsplash.com/photo-1603201667230-bd139210db18?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: <FiUsers size={26} />,
    title: "Masterclasses & Direct Mentorship",
    desc: "1-on-1 guidance from master wood technologists, structural joinery experts, and sustainable branding strategists to refine your product.",
    highlight: "Expert Coaching",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: <FiTrendingUp size={26} />,
    title: "Media Coverage & Venture Launch",
    desc: "Official certifications, press features in international architecture publications, and incubation support through the Oniv Woods alumni network.",
    highlight: "Career Acceleration",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
  },
];

const CRITERIA = [
  {
    title: "Material Innovation",
    score: "25%",
    desc: "Creative and respectful utilization of natural timber, reclaimed wood, or hybrid sustainable materials.",
  },
  {
    title: "Aesthetic & Form",
    score: "25%",
    desc: "Distinctive architectural silhouette, tactile elegance, and thoughtful ergonomic consideration.",
  },
  {
    title: "Manufacturability",
    score: "25%",
    desc: "Practical structural joinery, CNC or handcrafted repeatability, and realistic production cost efficiency.",
  },
  {
    title: "Market Readiness",
    score: "25%",
    desc: "Commercial appeal, packaging potential, and alignment with global luxury interior trends.",
  },
];

export default function ChallengesPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "var(--oniv-ivory)", color: "var(--oniv-charcoal)" }}>
      <EnquiryModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        defaultCourse="Design Challenge Participation"
      />
      <NavbarPro onEnroll={() => setOpenModal(true)} />

      {/* HERO SECTION */}
      <section
        className="relative w-full min-h-[75vh] flex items-center overflow-hidden pt-28 pb-20"
        style={{ background: "var(--oniv-earth)" }}
      >
        <img
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1800&auto=format&fit=crop"
          alt="Product design challenge"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,17,14,0.75) 0%, rgba(20,17,14,0.94) 100%)",
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
            className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.08] max-w-4xl mx-auto"
            style={{ color: "var(--oniv-ivory)" }}
          >
            Oniv Woods Global Product Design Challenge.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(249,246,240,0.8)" }}
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
              onClick={() => setOpenModal(true)}
              className="px-8 py-3.5 rounded-md font-semibold text-sm transition-opacity hover:opacity-90 cursor-pointer"
              style={{ background: "var(--oniv-amber)", color: "var(--oniv-ivory)" }}
            >
              Register for Challenge
            </button>
            <a
              href="#phases"
              className="px-8 py-3.5 rounded-md font-semibold text-sm border transition-colors hover:bg-white/10"
              style={{ borderColor: "rgba(249,246,240,0.4)", color: "var(--oniv-ivory)" }}
            >
              Explore Challenge Pillars
            </a>
          </motion.div>
        </div>
      </section>

      {/* 4 CORE PILLARS OF THE CHALLENGE */}
      <section id="phases" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            align="center"
            eyebrow="The Opportunity"
            title="From Design Studio to the International Trade Floor"
            subtitle="The Oniv Woods Challenge is structured to provide genuine commercial launchpads, mentorship, and international retail exposure."
          />

          <div className="mt-16 space-y-16">
            {CHALLENGE_PILLARS.map((p, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl border" style={{ borderColor: "rgba(74,53,37,0.15)" }}>
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-80 sm:h-96 object-cover"
                      />
                    </div>
                  </div>

                  <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: "var(--oniv-beige)", color: "var(--oniv-amber-dark)" }}
                    >
                      {p.icon}
                    </div>
                    <span className="eyebrow block mb-2" style={{ color: "var(--oniv-amber-dark)" }}>
                      {p.highlight}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl mb-4" style={{ color: "var(--oniv-charcoal)" }}>
                      {p.title}
                    </h3>
                    <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(30,27,24,0.7)" }}>
                      {p.desc}
                    </p>

                    <div className="pt-2">
                      <button
                        onClick={() => setOpenModal(true)}
                        className="text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors hover:text-amber-700 cursor-pointer"
                        style={{ color: "var(--oniv-amber-dark)" }}
                      >
                        <span>Learn Submission Details</span>
                        <FiArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EVALUATION CRITERIA */}
      <section className="py-24 border-y" style={{ background: "var(--oniv-beige)", borderColor: "rgba(74,53,37,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            align="center"
            eyebrow="Evaluation Matrix"
            title="How the Global Jury Judges Every Entry"
            subtitle="Transparent, rigorous standards ensuring only truly exceptional and sustainable concepts reach the finals."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-16">
            {CRITERIA.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-white border flex flex-col justify-between shadow-sm"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-2xl font-bold" style={{ color: "var(--oniv-amber-dark)" }}>
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

      {/* FINAL REGISTRATION CTA */}
      <FinalCTAPro onEnroll={() => setOpenModal(true)} />

      <Footer />
    </div>
  );
}
