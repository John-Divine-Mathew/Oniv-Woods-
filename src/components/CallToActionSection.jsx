import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const listContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};

const CallToActionSection = () => {
  return (
    <section className="relative w-full bg-[#f8f5f1] py-10 px-6 overflow-hidden">

      {/* WARM GLOW BACKGROUND */}
      {/* <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#E8D8B5]/40 blur-[140px] rounded-full"></div> */}

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-extrabold text-center mb-12 text-[#2B2B2B]"
        >
          YOUR CALL TO ELEVATE DESIGN EDUCATION
        </motion.h2>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT — CONTENT */}
          <motion.div
            variants={listContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.ul
              variants={listContainer}
              className="space-y-6 text-lg md:text-xl leading-relaxed text-[#2B2B2B]"
            >
              {[
                "At OnivWoods, we don’t just run programs—we build ecosystems. Indian colleges aiming for thought leadership and global alumni diversity will soon recognise this as an essential collaboration.",
                "Join us. Champion us. Celebrate our students.",
                "Together we will craft a new benchmark for excellence in design education—across India, in the region, and in the world.",
              ].map((text, i) => (
                <motion.li
                  key={i}
                  variants={listItem}
                  className="flex items-start gap-3"
                >
                  <span className="shrink-0 text-green-500 mt-1">
                    <FiCheckCircle size={22} />
                  </span>
                  {text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* RIGHT — SUPER IMAGE STACK */}
          {/* <motion.div
            initial={{ opacity: 0, x: 80, rotateY: 25 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full max-w-md mx-auto h-96 perspective-distant"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              whileHover={{ scale: 1.08, rotate: -2 }}
              className="absolute bottom-0 left-0 w-3/4 z-0"
            >
              <img
                src="https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/house1_g7onmd.png"
                alt="Design Education 2"
                className="w-full rounded-3xl shadow-xl object-cover"
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="absolute top-0 right-0 w-3/4 z-10"
            >
              <img
                src="https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/house2_ft6ved.png"
                alt="Design Education 1"
                className="w-full rounded-3xl shadow-2xl object-cover"
              />
            </motion.div>

            <div className="absolute inset-0 -z-10 bg-[#B89B5E]/20 blur-[120px] rounded-full"></div>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="relative text-center md:text-left rounded-2xl"
          >
            <img
              src="https://res.cloudinary.com/dofuxic0j/image/upload/v1765380101/university_kkatqa.png"
              alt="Model"
              className="w-full  object-cover mx-auto md:mx-0 drop-shadow-xl rounded-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
