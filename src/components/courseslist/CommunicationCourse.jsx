import { motion } from "framer-motion";
import { FiUsers, FiMessageCircle, FiClipboard, FiBookOpen } from "react-icons/fi";

const CommunicationCourse = () => {
  const topics = [
    {
      icon: <FiUsers className="text-4xl" />,
      title: "Workplace Communication",
      desc: "Learn to communicate clearly with supervisors, team members, and workshop staff using simple and effective language.",
    },
    {
      icon: <FiMessageCircle className="text-4xl" />,
      title: "Client Interaction",
      desc: "Understand how to speak professionally with customers, explain wood materials, pricing, and design ideas confidently.",
    },
    {
      icon: <FiClipboard className="text-4xl" />,
      title: "Technical Communication",
      desc: "Use correct woodworking terms, explain measurements, cutting details, and project updates professionally.",
    },
    {
      icon: <FiBookOpen className="text-4xl" />,
      title: "Documentation Skills",
      desc: "Learn basic email writing, digital communication, WhatsApp updates, quotations, and work reports.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen py-16 px-4">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Communication Skills for Wood Industry
        </h1>
        <p className="text-gray-600 text-lg">
          Build confidence and learn to communicate professionally in woodworking,
          carpentry, furniture design, and client interaction environments.
        </p>
      </motion.div>

      {/* Topics Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-2">
        {topics.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <div className="text-orange-600 mb-4 flex justify-center">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              {item.title}
            </h3>
            <p className="text-gray-600 text-center">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mt-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          What You Will Learn
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          ✔ Clear verbal communication in workshops & client sites  
          ✔ Understanding woodworking terms & measurements  
          ✔ Handling clients politely and professionally  
          ✔ Presenting ideas, drawings, and material choices  
          ✔ Writing simple emails, quotes, and reports  
          ✔ Improving confidence, clarity & teamwork  
        </p>
      </motion.div>
    </div>
  );
};

export default CommunicationCourse;
