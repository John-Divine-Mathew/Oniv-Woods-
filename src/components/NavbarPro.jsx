import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "Challenges", path: "/challenges" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function NavbarPro({ onEnroll }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);

  // Track scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  // Check if current route is active
  const isLinkActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const isDarkHero = !scrolled;
  const textColor = isDarkHero ? "var(--oniv-ivory)" : "var(--oniv-charcoal)";

  return (
    <>
      <header
        role="banner"
        className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out"
        style={{
          backgroundColor: scrolled ? "rgba(249, 246, 240, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(74, 53, 37, 0.1)"
            : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <nav
          role="navigation"
          aria-label="Main Navigation"
          className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"
        >
          {/* BRAND LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md py-1"
            aria-label="Oniv Woods Home"
          >
            <img
              src="/logo.png"
              alt="Oniv Woods Logo"
              className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span
              className="font-display text-xl tracking-tight font-bold transition-colors duration-300"
              style={{ color: textColor }}
            >
              Oniv Woods
            </span>
          </Link>

          {/* DESKTOP NAVIGATION LINKS */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <li key={link.name} className="relative py-2">
                  <Link
                    to={link.path}
                    className="text-sm font-medium transition-colors duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm px-1 py-1"
                    style={{
                      color: active
                        ? "var(--oniv-amber)"
                        : textColor,
                    }}
                  >
                    {link.name}
                  </Link>

                  {/* ACTIVE PAGE INDICATOR */}
                  {active && (
                    <motion.div
                      layoutId="nav-active-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                      style={{ background: "var(--oniv-amber)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* DESKTOP PRIMARY CTA BUTTON */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onEnroll}
              className="btn-oniv-primary text-xs uppercase tracking-wider font-bold py-2.5 px-6 shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Register or Get Started with Oniv Woods programs"
            >
              Register / Get Started
            </button>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2.5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer"
            style={{ color: textColor }}
            aria-label="Open Navigation Menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu-drawer"
          >
            <FaBars size={22} />
          </button>
        </nav>
      </header>

      {/* MOBILE DRAWER MODAL */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-[100] flex justify-end" id="mobile-menu-drawer">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-out Drawer */}
            <motion.div
              ref={mobileMenuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="relative z-10 w-full max-w-xs sm:max-w-sm h-full flex flex-col shadow-2xl border-l"
              style={{
                background: "var(--oniv-ivory)",
                borderColor: "rgba(74, 53, 37, 0.15)",
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-6 py-5 border-b"
                style={{ borderColor: "rgba(74, 53, 37, 0.1)" }}
              >
                <div className="flex items-center gap-2">
                  <img src="/logo.png" alt="Oniv Woods" className="h-8 w-8 object-contain" />
                  <span className="font-display text-lg font-bold" style={{ color: "var(--oniv-charcoal)" }}>
                    Oniv Woods
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer"
                  style={{ color: "var(--oniv-charcoal)" }}
                  aria-label="Close Navigation Menu"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
                <span className="eyebrow block mb-4" style={{ color: "var(--oniv-amber-dark)" }}>
                  Explore Oniv Woods
                </span>
                {navLinks.map((link) => {
                  const active = isLinkActive(link.path);
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-3 px-4 rounded-xl text-base font-medium transition-all ${active
                          ? "bg-amber-100/70 font-semibold shadow-xs"
                          : "hover:bg-black/5"
                        }`}
                      style={{
                        color: active
                          ? "var(--oniv-amber-dark)"
                          : "var(--oniv-charcoal)",
                      }}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* Bottom CTA Action Bar */}
              <div
                className="p-6 border-t space-y-3"
                style={{
                  background: "var(--oniv-beige)",
                  borderColor: "rgba(74, 53, 37, 0.1)",
                }}
              >
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onEnroll();
                  }}
                  className="w-full py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg transition-opacity hover:opacity-90 flex items-center justify-center cursor-pointer"
                  style={{
                    background: "var(--oniv-amber)",
                    color: "var(--oniv-ivory)",
                  }}
                >
                  Register / Get Started
                </button>
                <p className="text-center text-[11px]" style={{ color: "rgba(30,27,24,0.55)" }}>
                  International admissions across India & Indonesia
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
