import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Challenges", path: "/challanges" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 
          ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
        `}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between py-4">

          {/* Logo */}
          <Link
            to="/"
            className={`flex items-center gap-2 text-2xl font-extrabold transition-colors duration-300 
              ${scrolled ? "text-black" : "text-white"}
            `}
          >
            Oniv
            <img src="/logo.png" className="h-12" alt="Logo" />
            Woods
          </Link>

          {/* -------- DESKTOP NAV (Visible ≥ lg) -------- */}
          <ul className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`font-semibold text-lg transition-colors duration-200 
                    ${
                      location.pathname === link.path
                        ? scrolled
                          ? "text-black underline underline-offset-8"
                          : "text-white underline underline-offset-8"
                        : scrolled
                        ? "text-gray-800 hover:text-black"
                        : "text-white hover:text-gray-200"
                    }
                  `}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden transition-colors duration-300 
              ${scrolled ? "text-black" : "text-white"}
            `}
            onClick={() => setMobileOpen(true)}
          >
            <FaBars size={28} />
          </button>
        </div>
      </nav>

      {/* -------- MOBILE MENU -------- */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300
          ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={() => setMobileOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 w-72 h-full bg-white shadow-xl z-60 transform transition-transform duration-300 
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h3 className="text-xl font-bold">Menu</h3>
          <button onClick={() => setMobileOpen(false)}>
            <FaTimes size={26} className="text-gray-700" />
          </button>
        </div>

        {/* MOBILE LINKS */}
        <ul className="flex flex-col gap-6 px-6 mt-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block text-lg font-medium py-2 transition-all 
                  ${
                    location.pathname === link.path
                      ? "text-black font-semibold"
                      : "text-gray-700 hover:text-black"
                  }
                `}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        {/* <div className="mt-10 px-6 flex flex-col gap-4">
          <button
            onClick={() => {
              setOpenModal(true);
              setMobileOpen(false);
            }}
            className="w-full py-2 rounded border border-black text-black font-bold hover:bg-black hover:text-white transition"
          >
            Enquire Now
          </button>

          <Link
            to="/enroll"
            onClick={() => setMobileOpen(false)}
            className="w-full py-2 rounded bg-black text-white font-bold text-center hover:bg-gray-900 transition"
          >
            Enroll Now
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;