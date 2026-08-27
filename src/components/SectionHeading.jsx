import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col ${alignClass} max-w-2xl`}
    >
      {eyebrow && (
        <span className="eyebrow mb-3" style={{ color: "var(--oniv-amber-dark)" }}>
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl leading-tight mb-3" style={{ color: "var(--oniv-charcoal)" }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-base leading-relaxed" style={{ color: "rgba(30,27,24,0.65)" }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
