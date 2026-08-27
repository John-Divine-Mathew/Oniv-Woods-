import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={goToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 p-3.5 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 z-50 cursor-pointer"
        style={{
          background: "var(--oniv-amber)",
          color: "var(--oniv-ivory)",
          boxShadow: "0 10px 25px -5px rgba(176, 113, 60, 0.4)",
        }}
      >
        <FaArrowUp size={16} />
      </button>
    )
  );
};

export default ScrollTopButton;