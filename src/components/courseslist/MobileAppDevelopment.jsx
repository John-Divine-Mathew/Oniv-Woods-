import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const MobileAppDevelopment = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* HERO SECTION */}
      <div className="w-full h-[60vh] bg-[url('https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-4xl md:text-6xl font-bold drop-shadow-xl"
        >
          Mobile App Development
        </motion.h1>
      </div>

      {/* SECTION 1 */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Create Powerful & User-Friendly Mobile Applications
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Learn to build high-performance Android and iOS applications using modern
            frameworks like React Native, Flutter, and native technologies.
            This course helps you become a job-ready mobile app developer by teaching
            UI/UX design, API integration, database handling, and app deployment.
          </p>

          <ul className="mt-5 space-y-3">
            {[
              "Learn Android & iOS App Development",
              "Master Flutter & React Native Frameworks",
              "UI/UX for Mobile App Interfaces",
              "API Integration & Database Management",
              "Publish apps to Play Store / App Store",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <FiCheckCircle className="text-green-600" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop"
          className="rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        />
      </div>

      {/* SECTION 2 */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        <motion.img
          src="https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=2070&auto=format&fit=crop"
          className="rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What You Will Learn
          </h2>
          <p className="mt-4 text-gray-600">
            You will gain complete practical knowledge to build, test, and launch
            mobile applications used by real customers. 
          </p>

          <ul className="mt-5 space-y-3">
            {[
              "Mobile UI/UX Wireframing & Prototyping",
              "Backend API Connectivity",
              "Firebase Authentication & Cloud Storage",
              "State Management & Performance Optimization",
              "Real-Time Notifications & App Security",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <FiCheckCircle className="text-blue-600" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default MobileAppDevelopment;
