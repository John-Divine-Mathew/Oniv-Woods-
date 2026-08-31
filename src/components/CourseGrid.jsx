import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const COURSES = [
  {
    category: "Designing Course",
    id: "productDesign",
    title: "Product Designing Course",
    image:
      "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/course3_rjg7ld.webp",
  },
  {
    category: "Designing Course",
    id: "industrialDesign",
    title: "Industrial Designing",
    image:
      "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/course4_zk3izx.webp",
  },
  {
    category: "Business Course",
    id: "business",
    title: "Business & Startup Course",
    image:
      "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/course1_sucxsg.webp",
  },
  {
    category: "Software Development",
    id: "webDev",
    title: "Web Development",
    image:
      "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/course16_a5b0aj.webp",
  },
  {
    category: "Software Development",
    id: "dm",
    title: "Digital Marketing",
    image:
      "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/course7_gh0vce.webp",
  },
  {
    category: "Software Development",
    id: "uiux",
    title: "UI/UX Designing",
    image:
      "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/course18_c3v8rf.webp",
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
            className="w-full sm:w-auto px-6 py-3 rounded-md font-medium text-xs sm:text-sm border transition-colors hover:bg-black/5 cursor-pointer text-center"
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
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              onClick={() => navigate(`/course/${c.id}`)}
              className="group cursor-pointer rounded-xl overflow-hidden border bg-white transition-all hover:shadow-xl active:scale-[0.99]"
              style={{ borderColor: "rgba(74,53,37,0.1)" }}
            >
              <div className="relative h-48 sm:h-52 overflow-hidden bg-stone-100">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-5">
                <span className="eyebrow text-[10px] sm:text-[11px]" style={{ color: "var(--oniv-amber-dark)" }}>
                  {c.category}
                </span>
                <h3 className="font-display text-lg sm:text-xl mt-1.5" style={{ color: "var(--oniv-charcoal)" }}>
                  {c.title}
                </h3>
                <span
                  className="inline-block mt-3 text-xs sm:text-sm font-semibold"
                  style={{ color: "var(--oniv-amber-dark)" }}
                >
                  View Details →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
