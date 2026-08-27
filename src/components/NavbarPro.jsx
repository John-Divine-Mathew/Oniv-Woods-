import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "Challenges", path: "/challenges" },
  { name: "Contact Us", path: "/contact" },
];

export default function NavbarPro({ onEnroll }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onHero = location.pathname === "/" && !scrolled;
  const textColor = onHero ? "var(--oniv-ivory)" : "var(--oniv-charcoal)";

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 transition-colors duration-300"
        style={{
          background: onHero ? "transparent" : "rgba(249,246,240,0.96)",
          borderBottom: onHero ? "none" : "1px solid rgba(74,53,37,0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" className="h-9 w-9 object-contain" alt="Oniv Woods" />
            <span className="font-display text-lg" style={{ color: textColor }}>
              Oniv Woods
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-sm font-medium transition-opacity hover:opacity-70"
                  style={{
                    color: textColor,
                    borderBottom:
                      location.pathname === link.path ? `2px solid var(--oniv-amber)` : "2px solid transparent",
                    paddingBottom: 4,
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={onEnroll}
                className="px-5 py-2.5 rounded-md text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ background: "var(--oniv-amber)", color: "var(--oniv-ivory)" }}
              >
                Enroll Now
              </button>
            </li>
          </ul>

          <button className="lg:hidden" style={{ color: textColor }} onClick={() => setMobileOpen(true)}>
            <FaBars size={20} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[60]"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-80 h-full z-[70] flex flex-col"
              style={{ background: "var(--oniv-ivory)" }}
            >
              <div className="flex justify-between items-center px-6 py-5 border-b" style={{ borderColor: "rgba(74,53,37,0.1)" }}>
                <span className="font-display text-lg" style={{ color: "var(--oniv-charcoal)" }}>
                  Menu
                </span>
                <button onClick={() => setMobileOpen(false)}>
                  <FaTimes size={20} style={{ color: "var(--oniv-charcoal)" }} />
                </button>
              </div>
              <ul className="flex flex-col px-6 mt-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-base font-medium"
                      style={{ color: "var(--oniv-charcoal)" }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-auto px-6 pb-8">
                <button
                  onClick={() => {
                    onEnroll();
                    setMobileOpen(false);
                  }}
                  className="w-full py-3 rounded-md font-semibold"
                  style={{ background: "var(--oniv-amber)", color: "var(--oniv-ivory)" }}
                >
                  Enroll Now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
