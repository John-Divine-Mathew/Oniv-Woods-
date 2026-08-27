import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const ECommerce = () => {
  return (
    <div className="w-full bg-gray-50">

      {/* HERO SECTION */}
      <div className="w-full h-[60vh] bg-[url('https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-4xl md:text-6xl font-bold drop-shadow-2xl"
        >
          E-Commerce Development
        </motion.h1>
      </div>

      {/* SECTION 1 */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Build Powerful Online Stores & Shopping Platforms
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            This course teaches you how to build secure, scalable, and user-friendly 
            e-commerce websites. You will learn product management, payment gateway 
            integration, shopping cart systems, and complete store automation using 
            modern web technologies.
          </p>

          <ul className="mt-5 space-y-3">
            {[
              "Build full e-commerce websites from scratch",
              "Product, Cart & Checkout System",
              "Payment Gateways (Razorpay, Stripe, Cashfree)",
              "Admin Dashboard & Inventory Management",
              "Order Tracking & Customer Accounts",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <FiCheckCircle className="text-blue-600" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop"
          className="rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* SECTION 2 */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

        <motion.img
          src="https://images.unsplash.com/photo-1556745732-6b132c8f9b48?q=80&w=2070&auto=format&fit=crop"
          className="rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 0.99, x: 0 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 0.99, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Topics You Will Master
          </h2>

          <p className="mt-4 text-gray-600">
            You will gain complete real-world e-commerce development skills and 
            create a fully functional online store by the end of the course.
          </p>

          <ul className="mt-5 space-y-3">
            {[
              "Frontend Store UI/UX design",
              "Backend API & Database (Node.js / Firebase / MongoDB)",
              "Coupon System, Reviews & Ratings",
              "SEO for E-Commerce Products",
              "Store Deployment & Maintenance",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <FiCheckCircle className="text-green-600" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ECommerce;
