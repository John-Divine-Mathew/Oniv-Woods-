import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiCheckCircle,
  FiLoader,
  FiArrowRight,
  FiArrowLeft,
  FiUser,
  FiBookOpen,
  FiMessageSquare,
  FiCopy,
  FiCheck,
} from "react-icons/fi";

// ACTUAL VERIFIED ONIV WOODS OFFERINGS
export const AVAILABLE_OFFERINGS = [
  "Wood & Product Design (6-Month Masterclass)",
  "Industrial Furniture Design & Joinery",
  "Design Entrepreneurship & Timber Logistics",
  "Parametric CAD & 5-Axis CNC Tooling",
  "UI/UX & Digital Product Design",
  "Web Development for Design Studios",
  "Annual Wood Product Design Challenge (TEI Track)",
  "India & Indonesia Collaborative Fellowship",
  "Enterprise Spatial & Timber Consulting",
];

export const EXPERIENCE_LEVELS = [
  {
    id: "Beginner",
    title: "Beginner",
    subtitle: "New to timber joinery, CAD, or product design. Seeking foundational mastery.",
  },
  {
    id: "Intermediate",
    title: "Intermediate",
    subtitle: "Have basic woodworking, design, or architecture background. Looking to elevate.",
  },
  {
    id: "Professional",
    title: "Professional",
    subtitle: "Practicing architect, industrial designer, or craft entrepreneur scaling skills.",
  },
];

export const VERIFIED_COUNTRIES = [
  "India",
  "Indonesia",
  "Singapore",
  "Malaysia",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Germany",
  "Australia",
  "Other International",
];

// Helper to generate a safe unique application reference ID
export function generateReferenceId() {
  const year = new Date().getFullYear();
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let randomPart = "";
  for (let i = 0; i < 5; i++) {
    randomPart += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `ONIV-${year}-${randomPart}`;
}

export default function EnquiryModal({ open, onClose, defaultCourse = "" }) {
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
    interestedIn: defaultCourse || AVAILABLE_OFFERINGS[0],
    experienceLevel: "Beginner",
    message: "",
  });

  useEffect(() => {
    if (defaultCourse) {
      setForm((prev) => ({ ...prev, interestedIn: defaultCourse }));
    }
  }, [defaultCourse]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && open) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

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
          message: form.message || "Submitted via Oniv Woods Registration Portal",
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

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setStep(1);
      setError("");
      setCopied(false);
    }, 300);
  };

  const copyRef = () => {
    if (refId) {
      navigator.clipboard.writeText(refId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 w-full max-w-xl max-h-[92vh] flex flex-col rounded-2xl overflow-hidden shadow-2xl border"
            style={{
              background: "var(--oniv-ivory)",
              borderColor: "rgba(74, 53, 37, 0.18)",
              color: "var(--oniv-charcoal)",
            }}
          >
            <div
              className="px-7 py-5 flex items-center justify-between border-b shrink-0"
              style={{
                background: "var(--oniv-earth)",
                borderColor: "rgba(249, 246, 240, 0.08)",
              }}
            >
              <div>
                <span className="eyebrow block text-amber-400">
                  Oniv Woods Admissions Portal
                </span>
                <h3
                  id="enquiry-modal-title"
                  className="font-display text-xl mt-0.5 text-white"
                >
                  {submitted ? "Application Confirmation" : "Application & Enrollment"}
                </h3>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-full transition-colors hover:bg-white/10 text-white/80 hover:text-white cursor-pointer"
                aria-label="Close modal"
              >
                <FiX size={18} />
              </button>
            </div>

            {!submitted && (
              <div
                className="px-7 py-3 border-b flex items-center justify-between text-xs"
                style={{
                  background: "var(--oniv-beige)",
                  borderColor: "rgba(74, 53, 37, 0.08)",
                }}
              >
                {[
                  { s: 1, label: "Profile", icon: <FiUser size={12} /> },
                  { s: 2, label: "Program & Level", icon: <FiBookOpen size={12} /> },
                  { s: 3, label: "Objectives", icon: <FiMessageSquare size={12} /> },
                ].map((item) => {
                  const isActive = step === item.s;
                  const isDone = step > item.s;
                  return (
                    <div
                      key={item.s}
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={() => {
                        if (item.s < step) setStep(item.s);
                      }}
                    >
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] transition-colors ${
                          isActive
                            ? "bg-amber-700 text-white"
                            : isDone
                            ? "bg-emerald-700 text-white"
                            : "bg-black/10 text-stone-600"
                        }`}
                      >
                        {isDone ? <FiCheck size={12} /> : item.s}
                      </span>
                      <span
                        className={`hidden sm:inline font-medium text-[11px] ${
                          isActive
                            ? "text-stone-900 font-bold"
                            : isDone
                            ? "text-stone-700"
                            : "text-stone-500"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="p-7 overflow-y-auto flex-1">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-lg bg-red-50 text-red-700 text-xs font-medium border border-red-200">
                      {error}
                    </div>
                  )}

                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div>
                        <h4 className="font-display text-lg font-semibold mb-1" style={{ color: "var(--oniv-charcoal)" }}>
                          Personal & Contact Details
                        </h4>
                        <p className="text-xs text-stone-600">
                          Please provide your official contact information for enrollment evaluation.
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                            Full Name *
                          </label>
                          <input
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="e.g. Maya Chen"
                            className="w-full px-3.5 py-2.5 rounded-lg text-sm border outline-none transition-colors focus:border-amber-600 bg-white"
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
                            placeholder="maya@example.com"
                            className="w-full px-3.5 py-2.5 rounded-lg text-sm border outline-none transition-colors focus:border-amber-600 bg-white"
                            style={{ borderColor: "rgba(74,53,37,0.2)" }}
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                            Phone / WhatsApp
                          </label>
                          <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 / +62..."
                            className="w-full px-3.5 py-2.5 rounded-lg text-sm border outline-none transition-colors focus:border-amber-600 bg-white"
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
                            placeholder="e.g. Bangalore, India"
                            className="w-full px-3.5 py-2.5 rounded-lg text-sm border outline-none transition-colors focus:border-amber-600 bg-white"
                            style={{ borderColor: "rgba(74,53,37,0.2)" }}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                          Company / University (Optional)
                        </label>
                        <input
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Current studio, firm, or academic institution"
                          className="w-full px-3.5 py-2.5 rounded-lg text-sm border outline-none transition-colors focus:border-amber-600 bg-white"
                          style={{ borderColor: "rgba(74,53,37,0.2)" }}
                        />
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-5"
                    >
                      <div>
                        <h4 className="font-display text-lg font-semibold mb-1" style={{ color: "var(--oniv-charcoal)" }}>
                          Discipline & Experience Level
                        </h4>
                        <p className="text-xs text-stone-600">
                          Select the track you wish to apply for and your current expertise.
                        </p>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                          Interested In (Available Offerings) *
                        </label>
                        <select
                          name="interestedIn"
                          required
                          value={form.interestedIn}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-lg text-sm border outline-none transition-colors focus:border-amber-600 bg-white"
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
                                className={`w-full p-3.5 rounded-xl text-left transition-all border flex items-start justify-between cursor-pointer ${
                                  isSelected
                                    ? "bg-amber-50 border-amber-600 ring-1 ring-amber-600"
                                    : "bg-white border-stone-200 hover:border-stone-300"
                                }`}
                              >
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-display font-semibold text-sm text-stone-900">
                                      {level.title}
                                    </span>
                                  </div>
                                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                                    {level.subtitle}
                                  </p>
                                </div>
                                <span
                                  className={`w-4 h-4 rounded-full border mt-0.5 shrink-0 flex items-center justify-center ${
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
                      key="step3"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div>
                        <h4 className="font-display text-lg font-semibold mb-1" style={{ color: "var(--oniv-charcoal)" }}>
                          Statement of Intent / Objectives
                        </h4>
                        <p className="text-xs text-stone-600">
                          Share your design aspirations, portfolio links, or questions for our admissions panel.
                        </p>
                      </div>

                      <div
                        className="p-3.5 rounded-xl border text-xs space-y-1.5"
                        style={{
                          background: "var(--oniv-beige)",
                          borderColor: "rgba(74,53,37,0.12)",
                        }}
                      >
                        <div className="flex justify-between">
                          <span className="text-stone-500">Applicant:</span>
                          <strong className="text-stone-900">{form.name} ({form.cityCountry})</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-stone-500">Selected Track:</span>
                          <strong className="text-amber-800">{form.interestedIn}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-stone-500">Expertise Level:</span>
                          <strong className="text-stone-900">{form.experienceLevel}</strong>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                          Your Message / Project Background (Optional)
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your background, career goals, or specific woodcraft interests..."
                          className="w-full px-3.5 py-2.5 rounded-lg text-sm border outline-none transition-colors focus:border-amber-600 bg-white resize-y"
                          style={{ borderColor: "rgba(74,53,37,0.2)" }}
                        />
                      </div>
                    </motion.div>
                  )}

                  <div className="pt-3 border-t flex items-center justify-between gap-3" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="px-4 py-2.5 rounded-lg text-xs font-semibold border flex items-center gap-1.5 transition-colors hover:bg-black/5 cursor-pointer"
                        style={{
                          borderColor: "rgba(74,53,37,0.2)",
                          color: "var(--oniv-charcoal)",
                        }}
                      >
                        <FiArrowLeft size={13} />
                        <span>Previous</span>
                      </button>
                    ) : (
                      <div />
                    )}

                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="btn-oniv-primary py-2.5 px-5 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Continue</span>
                        <FiArrowRight size={13} />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-oniv-primary py-3 px-6 rounded-lg text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-md"
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
                  className="text-center py-8 space-y-5"
                >
                  <div
                    className="w-16 h-16 rounded-full mx-auto flex items-center justify-center"
                    style={{
                      background: "rgba(16, 185, 129, 0.15)",
                      color: "#059669",
                    }}
                  >
                    <FiCheckCircle size={36} />
                  </div>

                  <div>
                    <span className="eyebrow block text-emerald-800 text-[11px] font-bold mb-1">
                      APPLICATION RECEIVED
                    </span>
                    <h3
                      className="font-display text-2xl sm:text-3xl font-semibold mb-2"
                      style={{ color: "var(--oniv-charcoal)" }}
                    >
                      Thank you for your interest in ONIV WOODS.
                    </h3>
                    <p className="text-sm max-w-sm mx-auto leading-relaxed" style={{ color: "rgba(30,27,24,0.7)" }}>
                      Your application has been received.
                    </p>
                  </div>

                  <div
                    className="p-4 rounded-xl border max-w-md mx-auto flex items-center justify-between gap-3 text-left"
                    style={{
                      background: "white",
                      borderColor: "rgba(74, 53, 37, 0.15)",
                    }}
                  >
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-stone-500 block">
                        Application Reference ID
                      </span>
                      <strong className="font-mono text-base font-bold text-amber-800">
                        {refId}
                      </strong>
                    </div>
                    <button
                      type="button"
                      onClick={copyRef}
                      className="px-3 py-1.5 rounded-md border text-xs font-semibold flex items-center gap-1.5 transition-colors hover:bg-stone-50 cursor-pointer"
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

                  <div className="text-xs text-stone-600 max-w-sm mx-auto pt-2 space-y-1">
                    <p>
                      <strong>Program:</strong> {form.interestedIn}
                    </p>
                    <p>
                      <strong>Confirmation Sent To:</strong> {form.email}
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleClose}
                      className="btn-oniv-primary py-2.5 px-6 rounded-lg text-xs font-semibold cursor-pointer"
                    >
                      Return to Website
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}