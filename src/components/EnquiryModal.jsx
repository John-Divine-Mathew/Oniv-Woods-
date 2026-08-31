import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiCheckCircle,
  FiLoader,
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
  "Full-Stack Web Development for Studios",
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
  "Canada",
  "Japan",
  "Other Country",
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
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [refId, setRefId] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    program: defaultCourse || "",
    organization: "",
  });

  useEffect(() => {
    if (defaultCourse) {
      setForm((prev) => ({ ...prev, program: defaultCourse }));
    }
  }, [defaultCourse]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setError("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your full name.";
    if (!form.email.trim()) return "Please enter your email address.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) return "Please enter a valid email address.";
    if (!form.country) return "Please select your country.";
    if (!form.program) return "Please select a program or discipline.";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valError = validate();
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
          college: `${form.organization ? form.organization + " | " : ""}${form.country}`,
          course: `${form.program} (Ref: ${newRef})`,
          message: `Application via Modal for ${form.program} from ${form.country}. Organization: ${form.organization || "N/A"}`,
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

  const handleResetAndClose = () => {
    setSubmitted(false);
    setForm({
      name: "",
      email: "",
      phone: "",
      country: "",
      program: defaultCourse || "",
      organization: "",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border flex flex-col my-auto"
            style={{
              background: "#FAF7F2",
              borderColor: "rgba(74, 53, 37, 0.15)",
            }}
          >
            {/* Dark Header */}
            <div
              className="px-6 py-5 flex items-start justify-between shrink-0"
              style={{
                background: "#191512",
              }}
            >
              <div>
                <span
                  className="eyebrow block text-[11px] font-semibold tracking-wider uppercase mb-1"
                  style={{ color: "#B0713C" }}
                >
                  ONIV WOODS ADMISSIONS & ENQUIRY
                </span>
                <h2
                  className="font-display text-2xl sm:text-3xl font-normal leading-tight"
                  style={{ color: "#FAF7F2" }}
                >
                  Begin Your Journey
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="p-1.5 -mr-1.5 rounded-full text-stone-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-7 overflow-y-auto max-h-[82vh]">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-lg bg-red-50 text-red-700 text-xs font-medium border border-red-200">
                      {error}
                    </div>
                  )}

                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider mb-1 text-stone-800">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Maya Chen"
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm border outline-none transition-colors bg-white focus:border-amber-700 placeholder:text-stone-400 text-stone-900"
                        style={{ borderColor: "rgba(74, 53, 37, 0.2)" }}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider mb-1 text-stone-800">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="maya@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm border outline-none transition-colors bg-white focus:border-amber-700 placeholder:text-stone-400 text-stone-900"
                        style={{ borderColor: "rgba(74, 53, 37, 0.2)" }}
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider mb-1 text-stone-800">
                        PHONE / WHATSAPP
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 / +62..."
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm border outline-none transition-colors bg-white focus:border-amber-700 placeholder:text-stone-400 text-stone-900"
                        style={{ borderColor: "rgba(74, 53, 37, 0.2)" }}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider mb-1 text-stone-800">
                        COUNTRY *
                      </label>
                      <select
                        name="country"
                        required
                        value={form.country}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm border outline-none transition-colors bg-white focus:border-amber-700 text-stone-900 cursor-pointer"
                        style={{ borderColor: "rgba(74, 53, 37, 0.2)" }}
                      >
                        <option value="">Select Country</option>
                        {VERIFIED_COUNTRIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Program / Discipline */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1 text-stone-800">
                      PROGRAM / DISCIPLINE OF INTEREST *
                    </label>
                    <select
                      name="program"
                      required
                      value={form.program}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm border outline-none transition-colors bg-white focus:border-amber-700 text-stone-900 cursor-pointer"
                      style={{ borderColor: "rgba(74, 53, 37, 0.2)" }}
                    >
                      <option value="">Select Discipline / Program</option>
                      {AVAILABLE_OFFERINGS.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 4: College / Organization */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1 text-stone-800">
                      COLLEGE / ORGANIZATION (OPTIONAL)
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={form.organization}
                      onChange={handleChange}
                      placeholder="University or Company"
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm border outline-none transition-colors bg-white focus:border-amber-700 placeholder:text-stone-400 text-stone-900"
                      style={{ borderColor: "rgba(74, 53, 37, 0.2)" }}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 rounded-lg text-white font-bold text-sm sm:text-base tracking-wide transition-all shadow-md hover:opacity-95 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                      style={{
                        background: "#B0713C",
                      }}
                    >
                      {loading ? (
                        <>
                          <FiLoader className="animate-spin" size={16} />
                          <span>Processing Application...</span>
                        </>
                      ) : (
                        <span>Submit Application & Request Syllabus</span>
                      )}
                    </button>

                    <p className="text-center text-xs text-stone-500 mt-3 font-normal">
                      Our admissions mentors respond within 24 business hours.
                    </p>
                  </div>
                </form>
              ) : (
                /* Success State */
                <div className="text-center py-6 sm:py-8 space-y-4">
                  <div
                    className="w-16 h-16 rounded-full mx-auto flex items-center justify-center"
                    style={{
                      background: "rgba(16, 185, 129, 0.12)",
                      color: "#059669",
                    }}
                  >
                    <FiCheckCircle size={36} />
                  </div>

                  <div className="space-y-1.5">
                    <span className="eyebrow block text-emerald-800 text-[11px] font-bold tracking-widest uppercase">
                      APPLICATION RECEIVED
                    </span>
                    <h3
                      className="font-display text-2xl sm:text-3xl font-semibold"
                      style={{ color: "var(--oniv-charcoal)" }}
                    >
                      Thank you for your interest in ONIV WOODS.
                    </h3>
                    <p
                      className="text-sm text-stone-600 max-w-sm mx-auto leading-relaxed"
                    >
                      Your application has been received.
                    </p>
                  </div>

                  {refId && (
                    <div
                      className="p-4 rounded-xl border max-w-sm mx-auto flex items-center justify-between gap-3 text-left"
                      style={{
                        background: "#F5F0E6",
                        borderColor: "rgba(74, 53, 37, 0.15)",
                      }}
                    >
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-stone-500 block">
                          Reference ID
                        </span>
                        <strong className="font-mono text-base font-bold text-amber-900">
                          {refId}
                        </strong>
                      </div>
                      <button
                        type="button"
                        onClick={copyRef}
                        className="px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors bg-white hover:bg-stone-50 cursor-pointer shadow-xs"
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
                  )}

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleResetAndClose}
                      className="px-6 py-2.5 rounded-lg text-xs font-semibold border transition-colors hover:bg-black/5 cursor-pointer text-stone-800"
                      style={{ borderColor: "rgba(74,53,37,0.25)" }}
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}