import { FaRegStar, FaBullseye, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const VisionSection = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-[#f8f5f1] text-[#2B2B2B]">
      {/* Soft Warm Accent Glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 bg-[#E8D8B5]/40 blur-[100px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-[#EADFCF]/40 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2B2B2B] text-[#FFF8EE] text-xs mb-4">
            <FaRegStar size={13} className="text-amber-400" />
            <span className="eyebrow tracking-wider text-[11px]">Our Philosophy</span>
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-4 sm:mb-6 text-[#2B2B2B]">
            Our Vision & Core Purpose
          </h2>

          <p className="text-[#5A5A5A] text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
            To cultivate the next generation of visionary designers by blending traditional craftsmanship,
            modern innovation, and global exposure — empowering students to create real-world industry impact.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
            {[
              {
                icon: <FaEye size={18} />,
                title: "Our Vision",
                desc: "To lead global wood design education through creativity and innovation.",
                bg: "bg-[#F3E6CF]",
              },
              {
                icon: <FaBullseye size={18} />,
                title: "Our Purpose",
                desc: "To build highly skilled professionals for the future wood industry.",
                bg: "bg-[#EFE4D9]",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.15,
                }}
                viewport={{ once: true }}
                className="flex gap-3.5 items-start p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs"
              >
                <div className={`p-2.5 rounded-lg text-[#2B2B2B] shrink-0 ${item.bg}`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-0.5 text-[#2B2B2B]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#5A5A5A] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Link
            to="/about"
            className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-3.5 rounded-lg bg-[#B89B5E] text-[#2B2B2B] text-xs font-bold uppercase tracking-wider shadow-md hover:brightness-105 transition-all text-center"
          >
            Learn More About Our Heritage
          </Link>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E6DCCB]">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="Students studying together at Oniv Woods"
              className="w-full h-64 sm:h-96 object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#FFF9F1]/95 backdrop-blur-md px-4 py-2.5 rounded-xl text-xs shadow-md text-[#2B2B2B] border border-amber-900/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              <span className="font-medium">International Student Collaboration</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
