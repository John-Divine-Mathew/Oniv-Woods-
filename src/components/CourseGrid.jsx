import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const COURSES = [
  {
    category: "Wood & Product Design",
    id: "productDesign",
    title: "Product Designing Course",
    image:
      "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/course3_rjg7ld.webp",
  },
  {
    category: "Industrial & Spatial",
    id: "industrialDesign",
    title: "Industrial Designing Course",
    image:
      "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/course4_zk3izx.webp",
  },
  {
    category: "Business & Enterprise",
    id: "business",
    title: "Business & Startup Course",
    image:
      "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/course1_sucxsg.webp",
  },
];

export default function CourseGrid() {
  const navigate = useNavigate();

  return (
    <section id="courses" className="py-16 sm:py-24" style={{ background: "var(--oniv-ivory)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-12">
          <SectionHeading
            eyebrow="Courses"
            title="A craft for every discipline."
            subtitle="From wood technology to digital design and business — structured, practical courses taught by practitioners."
          />
          <button
            onClick={() => navigate("/courses")}
            className="w-full sm:w-auto px-6 py-3 rounded-lg font-medium text-xs sm:text-sm border transition-all duration-300 hover:bg-stone-900 hover:text-white hover:shadow-md cursor-pointer text-center"
            style={{ borderColor: "var(--oniv-charcoal)", color: "var(--oniv-charcoal)" }}
          >
            View All Courses
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {COURSES.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              onClick={() => navigate(`/course/${c.id}`)}
              className="group cursor-pointer rounded-2xl overflow-hidden border bg-white transition-all duration-300 hover:shadow-xl hover:border-amber-700/40 active:scale-[0.99] flex flex-col justify-between"
              style={{ borderColor: "rgba(74,53,37,0.12)" }}
            >
              <div>
                <div className="relative h-48 sm:h-52 overflow-hidden bg-stone-100">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <span className="eyebrow text-[10px] sm:text-[11px]" style={{ color: "var(--oniv-amber-dark)" }}>
                    {c.category}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl mt-1.5 leading-snug" style={{ color: "var(--oniv-charcoal)" }}>
                    {c.title}
                  </h3>
                </div>
              </div>

              <div className="px-5 pb-5 pt-0">
                <span
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition-colors duration-200 group-hover:text-amber-800"
                  style={{ color: "var(--oniv-amber-dark)" }}
                >
                  <span>View Details</span>
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
