import { motion } from "framer-motion";
import { FiArrowRight, FiCompass } from "react-icons/fi";

export default function HeroPro({ onEnroll }) {
  return (
    <section
      className="relative w-full min-h-[88vh] sm:min-h-[92vh] flex items-center overflow-hidden pt-20 sm:pt-0"
      style={{ background: "var(--oniv-earth)" }}
    >
      <img
        src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1800&auto=format&fit=crop"
        alt="Woodworking workshop"
        className="absolute inset-0 w-full h-full object-cover opacity-50 sm:opacity-55 transition-transform duration-1000 scale-100 hover:scale-105"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,17,14,0.92) 0%, rgba(20,17,14,0.7) 60%, rgba(20,17,14,0.95) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full py-16 sm:py-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full mb-4 sm:mb-5 backdrop-blur-xs border transition-all duration-300 hover:border-amber-500/50"
            style={{
              color: "var(--oniv-ivory)",
              background: "rgba(176,113,60,0.25)",
              borderColor: "rgba(176,113,60,0.35)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
            <span className="eyebrow text-[10px] sm:text-xs">
              Oniv Woods School Of Design Wisdom
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl leading-[1.12] sm:leading-[1.06] tracking-tight text-white"
          >
            Craft Your Future with World-Class Woodworking Skills.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-4 sm:mt-6 text-sm sm:text-lg max-w-xl leading-relaxed text-stone-200 font-light"
          >
            Expert-led training. Real workshop experience. Advanced woodworking
            machines. Become a certified wood technology professional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onEnroll}
              className="btn-oniv-primary text-xs sm:text-sm uppercase tracking-wider font-bold py-3.5 px-8 shadow-xl group text-center"
            >
              <span>Enroll Now</span>
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" size={15} />
            </button>
            <a
              href="#courses"
              className="btn-oniv-outline text-xs sm:text-sm uppercase tracking-wider font-bold py-3.5 px-7 text-center group"
            >
              <span>View Courses</span>
              <FiCompass className="transition-transform duration-300 group-hover:rotate-45" size={15} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
