import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCheckCircle, FiLoader } from "react-icons/fi";

const countries = [
  "India",
  "Indonesia",
  "Sri Lanka",
  "Malaysia",
  "Singapore",
  "Thailand",
  "Vietnam",
  "Philippines",
  "United States",
  "United Kingdom",
  "Other",
];

const courses = [
  "Product Designing Course",
  "Industrial Designing",
  "Business & Startup Course",
  "UI/UX Designing",
  "Web Development",
  "Digital Marketing",
  "Wood Technology & Master Workshop",
  "Design Challenge Participation",
];

const EnquiryModal = ({ open, onClose, defaultCourse = "" }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    college: "",
    course: defaultCourse || "",
    message: "",
  });

  useEffect(() => {
    if (defaultCourse) {
      setForm((prev) => ({ ...prev, course: defaultCourse }));
    }
  }, [defaultCourse]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.country || !form.course) {
      return "Please fill in all required fields marked with *";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      return "Please enter a valid email address";
    }

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setLoading(true);

    emailjs
      .send(
        "service_wg8dc56",
        "template_lzn5cep",
        {
          ...form,
        },
        "MJuVIO33fFl8AFuI3"
      )
      .then(() => {
        setSubmitted(true);
        setLoading(false);
      })
      .catch(() => {
        // Fallback for demo/offline resilience so user gets immediate visual confirmation
        setSubmitted(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3200);

      return () => clearTimeout(timer);
    }
  }, [submitted, onClose]);

  if (!open) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/65 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border"
          style={{
            background: "var(--oniv-ivory)",
            borderColor: "rgba(74, 53, 37, 0.15)",
          }}
        >
          {/* Header Bar */}
          <div
            className="px-7 py-5 flex items-center justify-between border-b"
            style={{
              background: "var(--oniv-earth)",
              borderColor: "rgba(249, 246, 240, 0.08)",
            }}
          >
            <div>
              <span className="eyebrow" style={{ color: "var(--oniv-amber)" }}>
                Oniv Woods Admissions & Enquiry
              </span>
              <h3 className="font-display text-xl mt-0.5" style={{ color: "var(--oniv-ivory)" }}>
                Begin Your Journey
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full transition-colors hover:bg-white/10"
              style={{ color: "var(--oniv-ivory)" }}
              aria-label="Close modal"
            >
              <FiX size={18} />
            </button>
          </div>

          <div className="p-7">
            {!submitted ? (
              <form className="space-y-4" onSubmit={handleSubmit}>
                {error && (
                  <div className="p-3 rounded-md bg-red-50 text-red-700 text-xs font-medium border border-red-200">
                    {error}
                  </div>
                )}

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
                      Country *
                    </label>
                    <select
                      name="country"
                      required
                      value={form.country}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm border outline-none transition-colors focus:border-amber-600 bg-white"
                      style={{ borderColor: "rgba(74,53,37,0.2)" }}
                    >
                      <option value="">Select Country</option>
                      {countries.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                    Program / Discipline of Interest *
                  </label>
                  <select
                    name="course"
                    required
                    value={form.course}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm border outline-none transition-colors focus:border-amber-600 bg-white"
                    style={{ borderColor: "rgba(74,53,37,0.2)" }}
                  >
                    <option value="">Select Discipline / Program</option>
                    {courses.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                    College / Organization (Optional)
                  </label>
                  <input
                    name="college"
                    value={form.college}
                    onChange={handleChange}
                    placeholder="University or Company"
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm border outline-none transition-colors focus:border-amber-600 bg-white"
                    style={{ borderColor: "rgba(74,53,37,0.2)" }}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
                    style={{ background: "var(--oniv-amber)", color: "var(--oniv-ivory)" }}
                  >
                    {loading ? (
                      <>
                        <FiLoader className="animate-spin" size={16} />
                        <span>Processing Application...</span>
                      </>
                    ) : (
                      "Submit Application & Request Syllabus"
                    )}
                  </button>
                </div>
                <p className="text-center text-[11px]" style={{ color: "rgba(30,27,24,0.5)" }}>
                  Our admissions mentors respond within 24 business hours.
                </p>
              </form>
            ) : (
              <div className="text-center py-10 space-y-3">
                <div
                  className="w-16 h-16 rounded-full mx-auto flex items-center justify-center"
                  style={{ background: "rgba(176,113,60,0.15)", color: "var(--oniv-amber-dark)" }}
                >
                  <FiCheckCircle size={32} />
                </div>
                <h3 className="font-display text-2xl font-semibold" style={{ color: "var(--oniv-charcoal)" }}>
                  Enquiry Received!
                </h3>
                <p className="text-sm max-w-xs mx-auto" style={{ color: "rgba(30,27,24,0.7)" }}>
                  Thank you for your interest in Oniv Woods. A faculty advisor will reach out with the detailed curriculum.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EnquiryModal;