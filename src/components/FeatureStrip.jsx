import { FiTool, FiAward, FiUsers, FiGlobe } from "react-icons/fi";

const FEATURES = [
  { icon: <FiTool size={20} />, title: "Real Workshop Training", desc: "Hands-on, not just theory" },
  { icon: <FiAward size={20} />, title: "Certified Programs", desc: "Industry-recognized skills" },
  { icon: <FiUsers size={20} />, title: "Hiring Partners", desc: "Direct industry connections" },
  { icon: <FiGlobe size={20} />, title: "India & Indonesia", desc: "Training across two nations" },
];

export default function FeatureStrip() {
  return (
    <section className="border-b overflow-hidden" style={{ background: "var(--oniv-ivory)", borderColor: "rgba(74,53,37,0.1)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
        {FEATURES.map((f) => (
          <div key={f.title} className="flex items-start gap-3.5">
            <div
              className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center shadow-xs"
              style={{ background: "var(--oniv-beige)", color: "var(--oniv-amber-dark)" }}
            >
              {f.icon}
            </div>
            <div>
              <p className="font-semibold text-sm" style={{ color: "var(--oniv-charcoal)" }}>
                {f.title}
              </p>
              <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "rgba(30,27,24,0.6)" }}>
                {f.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
