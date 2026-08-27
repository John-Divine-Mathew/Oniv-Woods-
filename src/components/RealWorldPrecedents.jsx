import { motion } from "framer-motion";

const RealWorldPrecedents = () => {
  return (
    <section className="w-full bg-[#f8f5f1] py-10 px-6 md:px-16 overflow-hidden">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl text-center font-extrabold text-gray-900 mb-10"
      >
        REAL-WORLD PRECEDENTS
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center rounded-2xl">

        {/* LEFT SECTION — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="relative text-center md:text-left rounded-2xl"
        >
          <img
            src="https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/university_didr0l.png"
            alt="Model"
            className="w-full h-100 object-cover mx-auto md:mx-0 drop-shadow-xl rounded-2xl"
          />
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-16 col-span-2 flex flex-col justify-around"
        >

          {/* ITEM 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-5xl font-light text-orange-200">01</p>
            <h3 className="text-2xl font-semibold mt-1 text-gray-900">
              University of Indonesia
            </h3>
            <p className="text-lg text-gray-700 mt-3 leading-relaxed">
              University of Indonesia runs internship programs globally,
              including independent credit schemes and industry placements
              in architecture and design.
            </p>
          </motion.div>

          {/* ITEM 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <p className="text-5xl font-light text-orange-200">02</p>
            <h3 className="text-2xl font-semibold mt-1 text-gray-900">
              Indonesia’s Creative Economy
            </h3>
            <p className="text-lg text-gray-700 mt-3 leading-relaxed">
              Indonesia’s Creative Economy Ministry promotes exhibitions like
              IFFINA (Indonesia Meubel & Design Expo) that draw international
              attention to student and SME creations.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default RealWorldPrecedents;
