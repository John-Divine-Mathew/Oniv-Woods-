import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCpu,
  FiMonitor,
  FiBriefcase,
  FiAward,
  FiUserCheck,
  FiArrowRight,
} from "react-icons/fi";

const modes = [
  {
    title: "Workshop Training",
    desc: "Hands-on practical training with real industrial machines, tools & safety methods.",
    icon: <FiCpu />,
    img: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/training1_nhhdkn.png",
  },
  // {
  //   title: "Simulation Training",
  //   desc: "VR and digital machine simulation for safe and confident learning.",
  //   icon: <FiMonitor />,
  //   img: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/training2_t8by4c.png",
  // },
  {
    title: "Internship & Live Projects",
    desc: "Direct factory, site and studio exposure through real client projects.",
    icon: <FiBriefcase />,
    img: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/training3_buix0r.png",
  },
  // {
  //   title: "Placement & Certification",
  //   desc: "Job assistance with resume support and industry-recognized certificates.",
  //   icon: <FiAward />,
  //   img: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/training4_kzb32i.png",
  // },
  {
    title: "Mentorship & Portfolio",
    desc: "1-on-1 expert mentors with portfolio guidance and interview preparation.",
    icon: <FiUserCheck />,
    img: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/training5_ap3lag.png",
  },
];

const cardAnim = {
  hidden: { opacity: 0, y: 50, scale: 0.92 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const ModesOfTraining = () => {
  const [show, setShow] = useState(null); // for mobile tap preview

  return (
    <section className="relative bg-[#f8f5f1] py-10 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-extrabold text-center text-gray-900 mb-16"
        >
          WOOD TECHNOLOGY TRAINING APPROACH
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {modes.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardAnim}
              whileHover={{ y: -14, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative overflow-hidden rounded-xl p-4
    bg-[#FFFDF8] backdrop-blur-xl
    shadow-[0_14px_36px_-18px_rgba(0,0,0,0.2)]
    border border-orange-100"
            >

              {/* IMAGE OVERLAY (Hover + Click) */}
              <div
                className={`absolute inset-0 transition duration-500 
      ${show === i ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* CONTENT */}
              <div className="relative z-10">

                {/* ICON */}
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-2xl
    bg-gray-900 text-white mb-6 shadow-lg transition
    group-hover:bg-white group-hover:text-gray-900
    ${show === i ? "bg-gray-900 text-white" : ""}`}
                >
                  <span className="text-2xl">{item.icon}</span>
                </div>

                {/* TITLE */}
                <h3
                  className={`text-xl font-semibold mb-3 transition
    text-gray-900 group-hover:text-white
    ${show === i ? "text-white" : ""}`}
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className={`leading-relaxed transition
    text-gray-700 group-hover:text-gray-200
    ${show === i ? "text-white" : ""}`}
                >
                  {item.desc}
                </p>

                {/* PREVIEW BUTTON */}
                <div
                  onClick={() => setShow(show === i ? null : i)}
                  className={`mt-6 flex items-center gap-2 cursor-pointer font-medium transition
        text-gray-800 group-hover:text-white
        ${show === i ? "text-white" : ""}`}
                >
                  <FiArrowRight
                    className={`text-xl transition 
          ${show === i ? "text-white" : ""}`}
                  />
                  <span className={`${show === i ? "text-white" : ""}`}>
                    Preview
                  </span>
                </div>

                {/* BOTTOM ACCENT BAR */}
                <div
                  className={`relative z-10 mt-7 w-14 h-1 rounded-full transition
    bg-orange-300 group-hover:bg-white
    ${show === i ? "bg-white" : ""}`}
                ></div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModesOfTraining;