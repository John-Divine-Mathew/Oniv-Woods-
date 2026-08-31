import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiCheckCircle,
  FiArrowRight,
  FiLoader,
  FiGlobe,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import NavbarPro from "../components/NavbarPro";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";
import SectionHeading from "../components/SectionHeading";
import SEO from "../components/SEO";

const INQUIRY_TYPES = [
  "Wood Product Design Training & Admissions",
  "Spatial & Interior Architecture Collaboration",
  "Product Design Challenge Registration",
  "Student Internship & Campus Placements",
  "Enterprise Wood Technology Consulting",
  "Other General Inquiry",
];

const FAQS = [
  {
    q: "Where are Oniv Woods studio and workshop campuses located?",
    a: "We operate dedicated training workshops and collaborative research studios across key woodworking hubs in India and Indonesia, offering cross-continental student exchange and internships.",
  },
  {
    q: "Do I need prior woodworking or CAD experience to enroll in courses?",
    a: "No prior experience is necessary for our fundamental and foundation tracks. We begin with material science and hand-tool safety before advancing into parametric CAD, CNC tooling, and prototype finishing.",
  },
  {
    q: "How does the Trade Expo Indonesia (TEI) showcase sponsorship work?",
    a: "Shortlisted candidates from our annual Product Design Challenge receive sponsored travel, logistics assistance, and an exhibitor stall at Trade Expo Indonesia to pitch their products directly to international buyers.",
  },
  {
    q: "Can architectural firms hire directly from Oniv Woods?",
    a: "Yes. Our placement and career cell collaborates directly with leading interior, timber manufacturing, and architectural design studios to place graduates into full-time roles and apprenticeships.",
  },
];

export default function ContactPage() {
  const [openModal, setOpenModal] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "Wood Product Design Training & Admissions",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return "Please complete all required fields marked with *";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      return "Please enter a valid email address";
    }
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

    emailjs
      .send(
        "service_wg8dc56",
        "template_lzn5cep",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          college: form.company,
          course: form.inquiryType,
          message: form.message,
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

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "var(--oniv-ivory)", color: "var(--oniv-charcoal)" }}>
      <SEO
        title="Contact & Global Studio Admissions"
        description="Connect with Oniv Woods School of Design Wisdom for program admissions, spatial design collaborations, corporate workshops, and studio visits across India and Indonesia."
        canonical="/contact"
        ogType="website"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact ONIV WOODS",
          "description": "Direct communication channel for admissions, partnerships, and studio inquiries.",
          "url": "https://onivwoods.com/contact"
        }}
      />
      <EnquiryModal open={openModal} onClose={() => setOpenModal(false)} />
      <NavbarPro onEnroll={() => setOpenModal(true)} />

      {/* HERO SECTION */}
      <section
        className="relative w-full min-h-[52vh] sm:min-h-[65vh] flex items-center overflow-hidden pt-24 sm:pt-28 pb-12 sm:pb-16"
        style={{ background: "var(--oniv-earth)" }}
      >
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1800&auto=format&fit=crop"
          alt="Oniv Woods studio architecture"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,17,14,0.7) 0%, rgba(20,17,14,0.92) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs"
            style={{ color: "var(--oniv-ivory)", background: "rgba(176,113,60,0.25)" }}
          >
            Get In Touch
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-7xl leading-[1.12] sm:leading-[1.08] max-w-4xl mx-auto text-white"
          >
            Let's Create Something Exceptional.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 sm:mt-6 text-sm sm:text-xl max-w-2xl mx-auto leading-relaxed text-stone-300 font-light"
          >
            Collaborate with Oniv Woods for admissions, spatial design partnerships, corporate workshops, or global challenge submissions.
          </motion.p>
        </div>
      </section>

      {/* CONTACT INFORMATION & FORM SECTION */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div>
              <span className="eyebrow block mb-1.5 sm:mb-2" style={{ color: "var(--oniv-amber-dark)" }}>
                Direct Communication
              </span>
              <h2 className="font-display text-2xl sm:text-4xl mb-3 sm:mb-4" style={{ color: "var(--oniv-charcoal)" }}>
                Start a Conversation with Our Faculty & Advisory.
              </h2>
              <p className="text-xs sm:text-base leading-relaxed" style={{ color: "rgba(30,27,24,0.7)" }}>
                Whether you are an aspiring designer seeking admission, an architectural firm exploring custom timber solutions, or a student inquiring about international internships.
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-3 sm:space-y-4">
              <div
                className="p-4 sm:p-5 rounded-xl border flex items-start gap-3.5"
                style={{ background: "var(--oniv-beige)", borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "white", color: "var(--oniv-amber-dark)" }}
                >
                  <FiMail size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-0.5" style={{ color: "var(--oniv-charcoal)" }}>
                    Email Inquiries
                  </h4>
                  <a
                    href="mailto:info@onivwoods.com"
                    className="text-xs sm:text-sm font-medium hover:underline"
                    style={{ color: "var(--oniv-amber-dark)" }}
                  >
                    info@onivwoods.com
                  </a>
                  <p className="text-[11px] mt-0.5" style={{ color: "rgba(30,27,24,0.55)" }}>
                    Average response within 24 hours
                  </p>
                </div>
              </div>

              <div
                className="p-4 sm:p-5 rounded-xl border flex items-start gap-3.5"
                style={{ background: "var(--oniv-beige)", borderColor: "rgba(74,53,37,0.12)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "white", color: "var(--oniv-amber-dark)" }}
                >
                  <FiGlobe size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-0.5" style={{ color: "var(--oniv-charcoal)" }}>
                    Global Studio Hubs
                  </h4>
                  <p className="text-xs sm:text-sm" style={{ color: "var(--oniv-charcoal)" }}>
                    Indonesia & India Design Campuses
                  </p>
                  <p className="text-[11px] mt-0.5" style={{ color: "rgba(30,27,24,0.55)" }}>
                    Open Monday–Saturday, 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Scope List */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider mb-2.5" style={{ color: "var(--oniv-charcoal)" }}>
                Key Areas of Collaboration:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm" style={{ color: "rgba(30,27,24,0.75)" }}>
                {[
                  "Wood Product Design & Machinery Masterclasses",
                  "Interior, Spatial & Timber Architecture Projects",
                  "Student Exchange & Trade Expo Indonesia Sponsorships",
                  "Corporate Design R&D and Prototyping",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <FiCheckCircle className="text-amber-600 shrink-0" size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div
              className="p-6 sm:p-10 rounded-2xl border shadow-xl bg-white"
              style={{ borderColor: "rgba(74,53,37,0.12)" }}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl mb-1" style={{ color: "var(--oniv-charcoal)" }}>
                      Send an Inquiry
                    </h3>
                    <p className="text-xs sm:text-sm" style={{ color: "rgba(30,27,24,0.6)" }}>
                      Please provide your details below and our team will get in touch promptly.
                    </p>
                  </div>

                  {error && (
                    <div className="p-3.5 rounded-lg bg-red-50 text-red-700 text-xs font-medium border border-red-200">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. David Williams"
                        className="w-full px-4 py-3 rounded-lg text-sm border outline-none transition-colors focus:border-amber-600 bg-white"
                        style={{ borderColor: "rgba(74,53,37,0.2)" }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="david@example.com"
                        className="w-full px-4 py-3 rounded-lg text-sm border outline-none transition-colors focus:border-amber-600 bg-white"
                        style={{ borderColor: "rgba(74,53,37,0.2)" }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 / +62..."
                        className="w-full px-4 py-3 rounded-lg text-sm border outline-none transition-colors focus:border-amber-600 bg-white"
                        style={{ borderColor: "rgba(74,53,37,0.2)" }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                        Organization / University
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Company or Studio Name"
                        className="w-full px-4 py-3 rounded-lg text-sm border outline-none transition-colors focus:border-amber-600 bg-white"
                        style={{ borderColor: "rgba(74,53,37,0.2)" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                      Subject / Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      value={form.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm border outline-none transition-colors focus:border-amber-600 bg-white"
                      style={{ borderColor: "rgba(74,53,37,0.2)" }}
                    >
                      {INQUIRY_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                      Your Message or Project Brief *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your background, project timeline, or questions..."
                      className="w-full px-4 py-3 rounded-lg text-sm border outline-none transition-colors focus:border-amber-600 bg-white resize-y"
                      style={{ borderColor: "rgba(74,53,37,0.2)" }}
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 sm:py-4 rounded-lg font-semibold text-xs sm:text-sm transition-opacity hover:opacity-90 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                      style={{ background: "var(--oniv-amber)", color: "var(--oniv-ivory)" }}
                    >
                      {loading ? (
                        <>
                          <FiLoader className="animate-spin" size={16} />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <span>Submit Inquiry Message</span>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12 sm:py-16 space-y-4">
                  <div
                    className="w-16 h-16 rounded-full mx-auto flex items-center justify-center"
                    style={{ background: "rgba(176,113,60,0.15)", color: "var(--oniv-amber-dark)" }}
                  >
                    <FiCheckCircle size={34} />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold" style={{ color: "var(--oniv-charcoal)" }}>
                    Message Dispatched Successfully
                  </h3>
                  <p className="text-xs sm:text-sm max-w-md mx-auto leading-relaxed" style={{ color: "rgba(30,27,24,0.7)" }}>
                    Thank you for reaching out to Oniv Woods School of Design Wisdom. Our team has received your communication and will reply within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        inquiryType: "Wood Product Design Training & Admissions",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-lg text-xs font-semibold border transition-colors hover:bg-black/5 cursor-pointer"
                    style={{ borderColor: "var(--oniv-charcoal)", color: "var(--oniv-charcoal)" }}
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQS SECTION */}
      <section className="py-16 sm:py-24 border-t" style={{ background: "var(--oniv-beige)", borderColor: "rgba(74,53,37,0.1)" }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <SectionHeading
            align="center"
            eyebrow="Frequently Asked Questions"
            title="Common Inquiries About Programs & Collaborations"
            subtitle="Everything you need to know about our admissions, workshop facilities, and international opportunities."
          />

          <div className="mt-8 sm:mt-12 space-y-3 sm:space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border bg-white overflow-hidden transition-all shadow-xs"
                  style={{ borderColor: "rgba(74,53,37,0.12)" }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-3 cursor-pointer"
                  >
                    <span className="font-display text-base sm:text-lg font-medium" style={{ color: "var(--oniv-charcoal)" }}>
                      {faq.q}
                    </span>
                    <span className="shrink-0 text-amber-700">
                      {isOpen ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1 border-t text-xs sm:text-sm leading-relaxed" style={{ borderColor: "rgba(74,53,37,0.06)", color: "rgba(30,27,24,0.7)" }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}