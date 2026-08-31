import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function FinalCTAPro({ onEnroll }) {
  return (
    <section className="relative py-14 sm:py-20 overflow-hidden" style={{ background: "var(--oniv-charcoal)" }}>
      {/* Subtle Ambient Radial Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-600/10 blur-[100px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8"
      >
        <div className="text-center md:text-left">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl" style={{ color: "var(--oniv-ivory)" }}>
            Let's craft your future.
          </h2>
          <p className="mt-2 text-xs sm:text-base leading-relaxed font-light" style={{ color: "rgba(249,246,240,0.7)" }}>
            Transforming creators into industry leaders — starting with a single enquiry.
          </p>
        </div>
        <button
          onClick={onEnroll}
          className="w-full sm:w-auto shrink-0 btn-oniv-primary py-3.5 px-8 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xl group text-center"
        >
          <span>Get In Touch</span>
          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={15} />
        </button>
      </motion.div>
    </section>
  );
}
