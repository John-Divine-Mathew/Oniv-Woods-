import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const DesignSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="relative w-full bg-[#f8f5f1] py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="px-6 md:px-16">

        {/* TITLE */}
        <motion.h2
          className="text-2xl md:text-4xl font-extrabold text-center text-[#2B2B2B] tracking-tight mb-5"
          variants={itemVariants}
        >
          THE ONIVWOODS PRODUCT DESIGN CHALLENGE 
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <motion.div
              className="bg-[#EFE4D9] backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden transition-transform duration-500 hover:scale-105"
              variants={imageVariants}
            >
              <img
                src="https://res.cloudinary.com/dofuxic0j/image/upload/v1765728459/landscape_2_zvgply.png"
                alt="Design Challenge"
                className="w-full object-cover h-100"
              />
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-span-2 p-6 md:p-10">

            <motion.p
              className="text-base md:text-lg text-[#5A5A5A] mb-6 leading-relaxed"
              variants={itemVariants}
            >
              A national design platform celebrating young innovators in India —
              open to individuals and teams.
            </motion.p>

            <motion.h3
              className="text-xl md:text-2xl font-extrabold text-[#2B2B2B] mb-4"
              variants={itemVariants}
            >
              Key Features
            </motion.h3>

            <motion.ul
              className="space-y-6 text-[#2B2B2B] text-base md:text-lg leading-7"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.li className="flex items-start gap-3" variants={itemVariants}>
                <FiCheckCircle className="shrink-0 mt-1 text-green-500" size={28} />
                <div>
                  <span className="font-semibold text-[#2B2B2B]">
                    International Jury:
                  </span>{" "}
                  Industry-leading architects, industrial designers, and UX
                  experts from India & Indonesia.
                </div>
              </motion.li>

              <motion.li className="flex items-start gap-3" variants={itemVariants}>
                <FiCheckCircle className="shrink-0 mt-1 text-green-500" size={28} />
                <div>
                  <span className="font-semibold text-[#2B2B2B]">
                    Free trip to Trade Expo Indonesia (TEI):
                  </span>{" "}
                  The largest global trade event with 1,500+ exhibitors.
                </div>
              </motion.li>

              <motion.li className="flex items-start gap-3" variants={itemVariants}>
                <FiCheckCircle className="shrink-0 mt-1 text-green-500" size={28} />
                <div>
                  <span className="font-semibold text-[#2B2B2B]">
                    Dedicated exhibitor stall:
                  </span>{" "}
                  Showcase your product with bilingual credentials and marketing
                  support.
                </div>
              </motion.li>

              <motion.li className="flex items-start gap-3" variants={itemVariants}>
                <FiCheckCircle className="shrink-0 mt-1 text-green-500" size={28} />
                <div>
                  <span className="font-semibold text-[#2B2B2B]">
                    Certificates for all shortlisted teams:
                  </span>{" "}
                  Endorsed by Indonesian university partners.
                </div>
              </motion.li>

              <motion.li className="flex items-start gap-3" variants={itemVariants}>
                <FiCheckCircle className="shrink-0 mt-1 text-green-500" size={28} />
                <div>
                  <span className="font-semibold text-[#2B2B2B]">
                    Pre-event masterclasses:
                  </span>{" "}
                  Covering sustainable design, branding, and export strategies.
                </div>
              </motion.li>
            </motion.ul>

          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default DesignSection;
