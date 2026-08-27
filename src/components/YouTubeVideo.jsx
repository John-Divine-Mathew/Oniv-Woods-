import React from "react";
import { motion } from "framer-motion";

const TrainingVideoSection = () => {
  return (
    <section className="w-full bg-[#f8f5f1] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-[#1a1a1a]">
            Learn Woodworking From Real Workshop Experience
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Oniv Woods offers hands-on training designed for beginners and professionals.
            Watch how real woodworking, machine handling, safety training, and 
            finishing techniques are done by experts.
          </p>

          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✔</span>
              <p>Live industrial-level woodworking demonstrations</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✔</span>
              <p>Machine handling, cutting, sanding & safety practices</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✔</span>
              <p>Learn with real Indonesian & Indian woodworking experts</p>
            </li>
          </ul>

          <button className="px-6 py-3 bg-black text-white rounded-xl font-semibold shadow-md hover:bg-gray-800 transition">
            Explore Our Full Training Program
          </button>
        </motion.div>

        {/* RIGHT VIDEO BOX */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
        >
          <iframe
            className="w-full h-[250px] sm:h-[350px] md:h-[420px] rounded-2xl"
            src="https://www.youtube.com/embed/DdNo_fa0DwY?autoplay=1&mute=1&controls=1&loop=1&playlist=DdNo_fa0DwY"
            title="YouTube video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
};

export default TrainingVideoSection;
