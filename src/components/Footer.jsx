import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend, FiArrowUpRight, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3500);
    }
  };

  const quickLinks = [
    { name: "Home", linkTo: "/" },
    { name: "About Us", linkTo: "/about" },
    { name: "All Courses", linkTo: "/courses" },
    { name: "Design Challenge", linkTo: "/challenges" },
    { name: "Contact & Enquiry", linkTo: "/contact" },
  ];

  const disciplines = [
    { name: "Product Designing", linkTo: "/course/productDesign" },
    { name: "Industrial Designing", linkTo: "/course/industrialDesign" },
    { name: "Business & Startup", linkTo: "/course/business" },
    { name: "UI/UX Design", linkTo: "/course/uiux" },
    { name: "Web Development", linkTo: "/course/webDev" },
  ];

  return (
    <footer
      className="border-t"
      style={{
        background: "var(--oniv-earth)",
        borderColor: "rgba(249, 246, 240, 0.08)",
        color: "var(--oniv-ivory)",
      }}
    >
      {/* MAIN WRAPPER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
        {/* BRAND */}
        <div className="lg:col-span-4">
          <Link to="/" className="inline-flex items-center gap-3 mb-5">
            <img src="/logo.png" className="h-9 w-9 object-contain" alt="Oniv Woods" />
            <span className="font-display text-2xl tracking-tight" style={{ color: "var(--oniv-ivory)" }}>
              Oniv Woods
            </span>
          </Link>
          <p className="text-sm leading-relaxed max-w-sm" style={{ color: "rgba(249,246,240,0.65)" }}>
            School of Design Wisdom. Shaping the next generation of wood technology, product design, and architectural artisans across India & Indonesia.
          </p>

          <div className="mt-6 space-y-2.5 text-sm" style={{ color: "rgba(249,246,240,0.8)" }}>
            <p className="flex items-center gap-2.5">
              <FiMail className="text-amber-400 shrink-0" />
              <span>info@onivwoods.com</span>
            </p>
            <p className="flex items-center gap-2.5">
              <FiMapPin className="text-amber-400 shrink-0" />
              <span>Indonesia & India Global Studios</span>
            </p>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="lg:col-span-2">
          <h3 className="eyebrow mb-5" style={{ color: "var(--oniv-amber)" }}>
            Navigation
          </h3>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.linkTo}
                  className="transition-colors hover:text-amber-400 inline-flex items-center gap-1"
                  style={{ color: "rgba(249,246,240,0.7)" }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* DISCIPLINES */}
        <div className="lg:col-span-3">
          <h3 className="eyebrow mb-5" style={{ color: "var(--oniv-amber)" }}>
            Featured Courses
          </h3>
          <ul className="space-y-2.5 text-sm">
            {disciplines.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.linkTo}
                  className="transition-colors hover:text-amber-400 inline-flex items-center gap-1 group"
                  style={{ color: "rgba(249,246,240,0.7)" }}
                >
                  {item.name}
                  <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-xs" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="lg:col-span-3">
          <h3 className="eyebrow mb-3" style={{ color: "var(--oniv-amber)" }}>
            Stay Connected
          </h3>
          <p className="text-xs mb-4 leading-relaxed" style={{ color: "rgba(249,246,240,0.6)" }}>
            Receive periodic updates on new courses, design challenges, and studio workshops.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-2">
            <div className="flex items-center rounded-lg overflow-hidden border" style={{ borderColor: "rgba(249,246,240,0.15)", background: "rgba(255,255,255,0.05)" }}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-3.5 py-2.5 text-xs bg-transparent outline-none"
                style={{ color: "var(--oniv-ivory)" }}
              />
              <button
                type="submit"
                className="px-4 py-2.5 transition-colors shrink-0"
                style={{ background: "var(--oniv-amber)", color: "var(--oniv-ivory)" }}
                aria-label="Subscribe"
              >
                {subscribed ? <FiCheck size={16} /> : <FiSend size={14} />}
              </button>
            </div>
            {subscribed && (
              <p className="text-xs text-green-400">Thank you for subscribing!</p>
            )}
          </form>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        className="border-t py-6 text-center text-xs"
        style={{
          borderColor: "rgba(249,246,240,0.06)",
          color: "rgba(249,246,240,0.45)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Oniv Woods School of Design Wisdom. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/courses" className="hover:underline">Courses</Link>
            <Link to="/challenges" className="hover:underline">Challenges</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
