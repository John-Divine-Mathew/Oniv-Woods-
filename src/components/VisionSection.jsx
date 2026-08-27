import { FaRegStar, FaBullseye, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-5 bg-[#f8f5f1] text-[#2B2B2B]">

      {/* Soft Warm Accent Glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-[#E8D8B5]/40 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 -right-24 w-96 h-96 bg-[#EADFCF]/40 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2B2B2B] text-[#FFF8EE] text-sm mb-6">
            <FaRegStar size={16} /> Our Philosophy
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#2B2B2B]">
            Our Vision & Core Purpose
          </h2>

          <p className="text-[#5A5A5A] text-lg mb-8 leading-relaxed">
            To cultivate the next generation of visionary designers by blending traditional craftsmanship,
            modern innovation, and global exposure — empowering students to create real-world industry impact.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {[
              {
                icon: <FaEye />,
                title: "Our Vision",
                desc: "To lead global wood design education through creativity and innovation.",
                bg: "bg-[#F3E6CF]"
              },
              {
                icon: <FaBullseye />,
                title: "Our Purpose",
                desc: "To build highly skilled professionals for the future wood industry.",
                bg: "bg-[#EFE4D9]"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.4,
                  ease: "easeInOut"
                }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className={`p-3 rounded-xl text-[#2B2B2B] ${item.bg}`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-[#2B2B2B]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#5A5A5A]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="px-8 py-4 rounded-xl bg-[#B89B5E] text-[#2B2B2B] font-semibold shadow-lg hover:brightness-110"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl border border-[#E6DCCB]"></div>

          <motion.img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Students studying together"
            className="relative z-10 w-full rounded-3xl object-cover shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute bottom-6 right-6 bg-[#FFF9F1]/90 backdrop-blur px-5 py-4 rounded-2xl text-sm shadow text-[#2B2B2B]"
          >
            International Student Collaboration
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default VisionSection;
