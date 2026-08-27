import { motion } from "framer-motion";

export default function HeroPro({ onEnroll }) {
  return (
    <section
      className="relative w-full min-h-[92vh] flex items-center overflow-hidden"
      style={{ background: "var(--oniv-earth)" }}
    >
      <img
        src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1800&auto=format&fit=crop"
        alt="Woodworking workshop"
        className="absolute inset-0 w-full h-full object-cover opacity-55"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(20,17,14,0.95) 10%, rgba(20,17,14,0.55) 55%, rgba(20,17,14,0.3) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow inline-block mb-5 px-3 py-1 rounded-full"
            style={{ color: "var(--oniv-ivory)", background: "rgba(176,113,60,0.25)" }}
          >
            Oniv Woods School Of Design Wisdom
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl leading-[1.06]"
            style={{ color: "var(--oniv-ivory)" }}
          >
            Craft Your Future with World-Class Woodworking Skills.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg max-w-xl"
            style={{ color: "rgba(249,246,240,0.8)" }}
          >
            Expert-led training. Real workshop experience. Advanced woodworking
            machines. Become a certified wood technology professional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <button
              onClick={onEnroll}
              className="px-8 py-3.5 rounded-md font-semibold tracking-wide transition-colors"
              style={{ background: "var(--oniv-amber)", color: "var(--oniv-ivory)" }}
            >
              Enroll Now
            </button>
            <a
              href="#courses"
              className="px-8 py-3.5 rounded-md font-semibold tracking-wide border transition-colors hover:bg-white/10"
              style={{ borderColor: "rgba(249,246,240,0.4)", color: "var(--oniv-ivory)" }}
            >
              View Courses
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
