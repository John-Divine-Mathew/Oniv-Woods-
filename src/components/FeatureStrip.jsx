import { motion } from "framer-motion";
import { FiTool, FiAward, FiUsers, FiGlobe } from "react-icons/fi";

const FEATURES = [
  { icon: <FiTool size={19} />, title: "Real Workshop Training", desc: "Hands-on, not just theory" },
  { icon: <FiAward size={19} />, title: "Certified Programs", desc: "Industry-recognized skills" },
  { icon: <FiUsers size={19} />, title: "Hiring Partners", desc: "Direct industry connections" },
  { icon: <FiGlobe size={19} />, title: "India & Indonesia", desc: "Training across two nations" },
];

export default function FeatureStrip() {
  return (
    <section className="border-b overflow-hidden" style={{ background: "var(--oniv-ivory)", borderColor: "rgba(74,53,37,0.1)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-7 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="p-3.5 sm:p-4 rounded-xl border bg-white/50 hover:bg-white transition-all flex items-start gap-3.5 shadow-xs hover:shadow-md cursor-default"
            style={{ borderColor: "rgba(74, 53, 37, 0.08)" }}
          >
            <div
              className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{ background: "var(--oniv-beige)", color: "var(--oniv-amber-dark)" }}
            >
              {f.icon}
            </div>
            <div>
              <p className="font-semibold text-sm tracking-tight" style={{ color: "var(--oniv-charcoal)" }}>
                {f.title}
              </p>
              <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "rgba(30,27,24,0.6)" }}>
                {f.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
