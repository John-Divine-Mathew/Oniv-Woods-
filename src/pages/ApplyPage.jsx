import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import {
  FiCheckCircle,
  FiLoader,
  FiArrowRight,
  FiArrowLeft,
  FiUser,
  FiBookOpen,
  FiMessageSquare,
  FiCopy,
  FiCheck,
  FiShield,
  FiMail,
  FiGlobe,
  FiAward,
} from "react-icons/fi";
import NavbarPro from "../components/NavbarPro";
import Footer from "../components/Footer";
import {
  AVAILABLE_OFFERINGS,
  EXPERIENCE_LEVELS,
  generateReferenceId,
} from "../components/EnquiryModal";
import SEO from "../components/SEO";

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [refId, setRefId] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    cityCountry: "",
    interestedIn: AVAILABLE_OFFERINGS[0],
    experienceLevel: "Beginner",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleLevelSelect = (level) => {
    setForm({ ...form, experienceLevel: level });
  };

  const validateStep = (currentStep) => {
    if (currentStep === 1) {
      if (!form.name.trim()) return "Please enter your full name.";
      if (!form.email.trim()) return "Please enter your email address.";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email.trim())) return "Please enter a valid email address.";
      if (!form.cityCountry.trim()) return "Please specify your City / Country.";
    } else if (currentStep === 2) {
      if (!form.interestedIn) return "Please select a program or track.";
      if (!form.experienceLevel) return "Please select your experience level.";
    }
    return "";
  };

  const handleNext = () => {
    const valError = validateStep(step);
    if (valError) {
      setError(valError);
      return;
    }
    setError("");
    setStep((prev) => Math.min(3, prev + 1));
  };

  const handlePrev = () => {
    setError("");
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valError = validateStep(1) || validateStep(2);
    if (valError) {
      setError(valError);
      return;
    }

    setError("");
    setLoading(true);
    const newRef = generateReferenceId();
    setRefId(newRef);

    emailjs
      .send(
        "service_wg8dc56",
        "template_lzn5cep",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          college: `${form.company ? form.company + " | " : ""}${form.cityCountry}`,
          course: `${form.interestedIn} [Level: ${form.experienceLevel}] (Ref: ${newRef})`,
          message: form.message || "Submitted via Oniv Woods Official Application Page",
        },
        "MJuVIO33fFl8AFuI3"
      )
      .then(() => {
        setSubmitted(true);
        setLoading(false);
      })
      .catch(() => {
        setSubmitted(true);
        setLoading(false);
      });
  };

  const copyRef = () => {
    if (refId) {
      navigator.clipboard.writeText(refId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        background: "var(--oniv-ivory)",
        color: "var(--oniv-charcoal)",
      }}
    >
      <SEO
        title="Candidate Application Portal"
        description="Official application portal for Oniv Woods School of Design Wisdom programs, apprenticeships, and international design challenges across India and Indonesia."
        canonical="/apply"
        ogType="website"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Oniv Woods Candidate Application Portal",
          "description": "Admissions and registration portal for wood design disciplines.",
          "url": "https://onivwoods.com/apply"
        }}
      />
      <NavbarPro />

      {/* EDITORIAL HERO */}
      <section
        className="relative w-full min-h-[42vh] sm:min-h-[48vh] flex items-center overflow-hidden pt-24 sm:pt-28 pb-10 sm:pb-14"
        style={{ background: "var(--oniv-earth)" }}
      >
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1800&auto=format&fit=crop"
          alt="Oniv Woods design studio and workshop"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,17,14,0.75) 0%, rgba(20,17,14,0.95) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow inline-block mb-2.5 sm:mb-3 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs"
            style={{
              color: "var(--oniv-ivory)",
              background: "rgba(176,113,60,0.25)",
            }}
          >
            Admissions & Design Fellowship
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl leading-tight max-w-4xl mx-auto text-white"
          >
            Candidate Application Portal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 sm:mt-4 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed text-stone-300 font-light"
          >
            Submit your application for our professional masterclasses, annual design challenges, and cross-border research studios across India & Indonesia.
          </motion.p>
        </div>
      </section>

      {/* MAIN APPLICATION CONTAINER */}
      <section className="py-12 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div>
              <span className="eyebrow block mb-1.5 sm:mb-2 text-amber-800">
                Application Process
              </span>
              <h2 className="font-display text-2xl sm:text-4xl mb-3 sm:mb-4" style={{ color: "var(--oniv-charcoal)" }}>
                How Candidate Evaluation Works
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(30,27,24,0.7)" }}>
                Each application is evaluated holistically by our senior faculty and craft mentors. We value curiosity, design intent, and material passion above conventional credentials.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div
                className="p-4 sm:p-5 rounded-xl border bg-white flex items-start gap-3.5 shadow-xs"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(176,113,60,0.12)", color: "var(--oniv-amber-dark)" }}
                >
                  <FiAward size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm mb-0.5" style={{ color: "var(--oniv-charcoal)" }}>
                    1. Application Review
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(30,27,24,0.65)" }}>
                    Within 24 hours, our advisory team evaluates your track preference and experience profile.
                  </p>
                </div>
              </div>

              <div
                className="p-4 sm:p-5 rounded-xl border bg-white flex items-start gap-3.5 shadow-xs"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(176,113,60,0.12)", color: "var(--oniv-amber-dark)" }}
                >
                  <FiGlobe size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm mb-0.5" style={{ color: "var(--oniv-charcoal)" }}>
                    2. Studio Consultation
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(30,27,24,0.65)" }}>
                    Shortlisted candidates receive detailed module schedules, workshop safety requirements, and studio exchange details.
                  </p>
                </div>
              </div>

              <div
                className="p-4 sm:p-5 rounded-xl border bg-white flex items-start gap-3.5 shadow-xs"
                style={{ borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(176,113,60,0.12)", color: "var(--oniv-amber-dark)" }}
                >
                  <FiMail size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm mb-0.5" style={{ color: "var(--oniv-charcoal)" }}>
                    3. Direct Communications
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(30,27,24,0.65)" }}>
                    Official correspondence is handled via <strong>info@onivwoods.com</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div
              className="rounded-2xl border shadow-xl bg-white overflow-hidden"
              style={{ borderColor: "rgba(74,53,37,0.15)" }}
            >
              <div
                className="p-5 sm:p-8 border-b"
                style={{
                  background: "var(--oniv-earth)",
                  borderColor: "rgba(249, 246, 240, 0.08)",
                }}
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="eyebrow text-amber-400 text-[10px] sm:text-xs">
                    Candidate Enrollment
                  </span>
                  <span className="text-[11px] sm:text-xs font-mono text-stone-400">
                    Step {step} of 3
                  </span>
                </div>

                {!submitted ? (
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                    {[
                      { s: 1, label: "01 Contact" },
                      { s: 2, label: "02 Track & Level" },
                      { s: 3, label: "03 Objectives" },
                    ].map((item) => {
                      const isActive = step === item.s;
                      const isDone = step > item.s;
                      return (
                        <div
                          key={item.s}
                          className={`py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg border text-[10px] sm:text-xs font-semibold flex items-center gap-1.5 sm:gap-2 transition-colors ${
                            isActive
                              ? "bg-amber-600/20 border-amber-500 text-amber-300"
                              : isDone
                              ? "bg-emerald-950/40 border-emerald-600/50 text-emerald-400"
                              : "bg-white/5 border-white/10 text-stone-400"
                          }`}
                        >
                          <span className="shrink-0">
                            {isDone ? <FiCheck size={11} /> : item.s}
                          </span>
                          <span className="truncate">{item.label}</span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-white text-xs sm:text-sm font-display">
                    Application Successfully Dispatched
                  </div>
                )}
              </div>

              <div className="p-5 sm:p-8">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {error && (
                      <div className="p-3.5 rounded-lg bg-red-50 text-red-700 text-xs font-medium border border-red-200">
                        {error}
                      </div>
                    )}

                    {step === 1 && (
                      <motion.div
                        key="s1"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3 sm:space-y-4"
                      >
                        <h3 className="font-display text-lg sm:text-xl font-semibold" style={{ color: "var(--oniv-charcoal)" }}>
                          Applicant Identification
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                              Full Name *
                            </label>
                            <input
                              name="name"
                              required
                              value={form.name}
                              onChange={handleChange}
                              placeholder="e.g. David Williams"
                              className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm border outline-none transition-colors focus:border-amber-600 bg-white"
                              style={{ borderColor: "rgba(74,53,37,0.2)" }}
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                              Email Address *
                            </label>
                            <input
                              name="email"
                              type="email"
                              required
                              value={form.email}
                              onChange={handleChange}
                              placeholder="david@example.com"
                              className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm border outline-none transition-colors focus:border-amber-600 bg-white"
                              style={{ borderColor: "rgba(74,53,37,0.2)" }}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                              Phone / WhatsApp
                            </label>
                            <input
                              name="phone"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="+91 / +62 / +1..."
                              className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm border outline-none transition-colors focus:border-amber-600 bg-white"
                              style={{ borderColor: "rgba(74,53,37,0.2)" }}
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                              City / Country *
                            </label>
                            <input
                              name="cityCountry"
                              required
                              value={form.cityCountry}
                              onChange={handleChange}
                              placeholder="e.g. Jakarta, Indonesia"
                              className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm border outline-none transition-colors focus:border-amber-600 bg-white"
                              style={{ borderColor: "rgba(74,53,37,0.2)" }}
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                            Company / Studio / University
                          </label>
                          <input
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Current studio affiliation or academic institution"
                            className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm border outline-none transition-colors focus:border-amber-600 bg-white"
                            style={{ borderColor: "rgba(74,53,37,0.2)" }}
                          />
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="s2"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4 sm:space-y-5"
                      >
                        <h3 className="font-display text-lg sm:text-xl font-semibold" style={{ color: "var(--oniv-charcoal)" }}>
                          Program & Experience Calibration
                        </h3>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                            Interested In (Available Offerings) *
                          </label>
                          <select
                            name="interestedIn"
                            required
                            value={form.interestedIn}
                            onChange={handleChange}
                            className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm border outline-none transition-colors focus:border-amber-600 bg-white"
                            style={{ borderColor: "rgba(74,53,37,0.2)" }}
                          >
                            {AVAILABLE_OFFERINGS.map((offering) => (
                              <option key={offering} value={offering}>
                                {offering}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--oniv-charcoal)" }}>
                            Experience Level *
                          </label>
                          <div className="space-y-2.5">
                            {EXPERIENCE_LEVELS.map((level) => {
                              const isSelected = form.experienceLevel === level.id;
                              return (
                                <button
                                  key={level.id}
                                  type="button"
                                  onClick={() => handleLevelSelect(level.id)}
                                  className={`w-full p-3.5 sm:p-4 rounded-xl text-left transition-all border flex items-start justify-between cursor-pointer ${
                                    isSelected
                                      ? "bg-amber-50/80 border-amber-600 ring-1 ring-amber-600"
                                      : "bg-white border-stone-200 hover:border-stone-300"
                                  }`}
                                >
                                  <div>
                                    <span className="font-display font-semibold text-xs sm:text-sm text-stone-900 block">
                                      {level.title}
                                    </span>
                                    <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                                      {level.subtitle}
                                    </p>
                                  </div>
                                  <span
                                    className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border mt-0.5 shrink-0 flex items-center justify-center ${
                                      isSelected
                                        ? "border-amber-700 bg-amber-700"
                                        : "border-stone-300"
                                    }`}
                                  >
                                    {isSelected && <FiCheck className="text-white text-[10px]" />}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="s3"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3 sm:space-y-4"
                      >
                        <h3 className="font-display text-lg sm:text-xl font-semibold" style={{ color: "var(--oniv-charcoal)" }}>
                          Statement of Intent
                        </h3>

                        <div
                          className="p-3.5 sm:p-4 rounded-xl border text-xs space-y-2"
                          style={{
                            background: "var(--oniv-beige)",
                            borderColor: "rgba(74,53,37,0.12)",
                          }}
                        >
                          <div className="flex justify-between">
                            <span className="text-stone-500">Candidate:</span>
                            <strong className="text-stone-900 truncate max-w-[180px] sm:max-w-none">{form.name} • {form.cityCountry}</strong>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-stone-500">Track:</span>
                            <strong className="text-amber-800 truncate max-w-[180px] sm:max-w-none">{form.interestedIn}</strong>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-stone-500">Experience Profile:</span>
                            <strong className="text-stone-900">{form.experienceLevel}</strong>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                            Your Message / Design Objectives (Optional)
                          </label>
                          <textarea
                            name="message"
                            rows={4}
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Share any portfolio links, design goals, or specific wood technology questions..."
                            className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm border outline-none transition-colors focus:border-amber-600 bg-white resize-y"
                            style={{ borderColor: "rgba(74,53,37,0.2)" }}
                          />
                        </div>
                      </motion.div>
                    )}

                    <div className="pt-4 border-t flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
                      {step > 1 ? (
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="w-full sm:w-auto px-4 py-2.5 rounded-lg text-xs font-semibold border flex items-center justify-center gap-1.5 transition-colors hover:bg-black/5 cursor-pointer text-center"
                          style={{
                            borderColor: "rgba(74,53,37,0.25)",
                            color: "var(--oniv-charcoal)",
                          }}
                        >
                          <FiArrowLeft size={13} />
                          <span>Previous Step</span>
                        </button>
                      ) : (
                        <div />
                      )}

                      {step < 3 ? (
                        <button
                          type="button"
                          onClick={handleNext}
                          className="w-full sm:w-auto btn-oniv-primary py-3 px-6 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer text-center"
                        >
                          <span>Continue to Next Step</span>
                          <FiArrowRight size={13} />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full sm:w-auto btn-oniv-primary py-3.5 px-7 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-md text-center"
                        >
                          {loading ? (
                            <>
                              <FiLoader className="animate-spin" size={14} />
                              <span>Transmitting Application...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Official Application</span>
                              <FiCheckCircle size={14} />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-center py-8 sm:py-10 space-y-5 sm:space-y-6"
                  >
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto flex items-center justify-center"
                      style={{
                        background: "rgba(16, 185, 129, 0.15)",
                        color: "#059669",
                      }}
                    >
                      <FiCheckCircle size={38} />
                    </div>

                    <div className="space-y-2">
                      <span className="eyebrow block text-emerald-800 text-[10px] sm:text-xs font-bold tracking-widest">
                        APPLICATION RECEIVED
                      </span>
                      <h2
                        className="font-display text-2xl sm:text-4xl font-semibold"
                        style={{ color: "var(--oniv-charcoal)" }}
                      >
                        Thank you for your interest in ONIV WOODS.
                      </h2>
                      <p
                        className="text-sm sm:text-base max-w-md mx-auto leading-relaxed"
                        style={{ color: "rgba(30,27,24,0.75)" }}
                      >
                        Your application has been received.
                      </p>
                    </div>

                    <div
                      className="p-4 sm:p-5 rounded-2xl border max-w-md mx-auto flex items-center justify-between gap-3 text-left"
                      style={{
                        background: "var(--oniv-beige)",
                        borderColor: "rgba(74, 53, 37, 0.15)",
                      }}
                    >
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-stone-500 block">
                          Official Reference ID
                        </span>
                        <strong className="font-mono text-base sm:text-lg font-bold text-amber-800">
                          {refId}
                        </strong>
                      </div>
                      <button
                        type="button"
                        onClick={copyRef}
                        className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors bg-white hover:bg-stone-50 cursor-pointer shadow-xs"
                        style={{ borderColor: "rgba(74,53,37,0.2)" }}
                      >
                        {copied ? (
                          <>
                            <FiCheck className="text-emerald-600" size={13} />
                            <span className="text-emerald-700">Copied</span>
                          </>
                        ) : (
                          <>
                            <FiCopy size={13} />
                            <span>Copy ID</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="text-xs text-stone-600 max-w-md mx-auto space-y-1">
                      <p>
                        A confirmation record has been logged for <strong>{form.name}</strong> ({form.email}).
                      </p>
                      <p>
                        Selected track: <strong>{form.interestedIn}</strong>
                      </p>
                    </div>

                    <div className="pt-3 flex justify-center">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setStep(1);
                          setForm({
                            name: "",
                            email: "",
                            phone: "",
                            company: "",
                            cityCountry: "",
                            interestedIn: AVAILABLE_OFFERINGS[0],
                            experienceLevel: "Beginner",
                            message: "",
                          });
                        }}
                        className="w-full sm:w-auto px-6 py-2.5 rounded-lg text-xs font-semibold border transition-colors hover:bg-black/5 cursor-pointer text-center"
                        style={{
                          borderColor: "var(--oniv-charcoal)",
                          color: "var(--oniv-charcoal)",
                        }}
                      >
                        Submit Another Application
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
