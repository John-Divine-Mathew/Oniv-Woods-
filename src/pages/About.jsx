import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGlobe, FaGraduationCap, FaIndustry, FaCogs } from "react-icons/fa"; // Using react-icons for features

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out",
      once: true,
    });
  }, []);

  // Define the features with icons
  const features = [
    {
      title: "Industry-Oriented Training",
      icon: FaIndustry,
      delay: 0,
    },
    {
      title: "International Exposure & Internships",
      icon: FaGlobe,
      delay: 150,
    },
    {
      title: "Modern Labs & Real-World Projects",
      icon: FaCogs,
      delay: 300,
    },
    {
      title: "Career-Focused Design Education",
      icon: FaGraduationCap,
      delay: 450,
    },
  ];

  return (
    <>
      <Navbar />

      {/* MAIN BG - A slightly richer off-white/beige tone for warmth */}
      <div className="bg-[#FFFDF9] min-h-screen">

        {/* HERO SECTION - Enhanced visual appeal */}
        <section className="relative w-full h-[55vh] lg:h-[60vh] flex items-center justify-center overflow-hidden">
          <img
            src="https://res.cloudinary.com/dofuxic0j/image/upload/v1765100288/topimg_dhnqsd.png" // Use a more appropriate placeholder image path if available
            alt="Oniv Woods Banner"
            data-aos="zoom-out"
            data-aos-duration="1600"
            className="absolute inset-0 w-full h-full object-cover object-center transform scale-105"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#2a2a2a]/60 to-[#2a2a2a]/30"></div>

          <div data-aos="fade-up" className="relative z-10 text-center px-6 py-12">
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#FFFFFF] tracking-tighter">
              About Oniv Woods
            </h1>
            <p className="mt-4 md:mt-6 max-w-3xl mx-auto text-xl text-[#F3EDE3] font-light">
              A new generation design institute shaping future-ready wood & interior designers.
            </p>
          </div>
        </section>

        {/* ABOUT CONTENT - Two-column layout with visual divider */}
        <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT IMAGE BLOCK - Stylishly placed image with border radius */}
          <div data-aos="fade-right" className="relative order-2 lg:order-1">
            <img
              src="https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/aboutoniv_oknzrv.png" // Replace with a more suitable image for the about section
              alt="Design Studio"
              className="rounded-3xl shadow-2xl shadow-[#b89b5e]/30 w-full object-cover h-[450px] lg:h-full"
            />
            {/* Decorative element */}
            <div className="hidden lg:block absolute -top-8 -left-8 w-24 h-24 bg-[#B89B5E] opacity-10 rounded-full"></div>
          </div>

          {/* RIGHT TEXT - Clean and impactful typography */}
          <div data-aos="fade-left" className="order-1 lg:order-2">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[#B89B5E] mb-3">
                Our Story
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight">
              Oniv Woods School of <br className="hidden md:inline"/> Design Wisdom
            </h3>

            <div className="w-16 h-1 bg-[#B89B5E] mt-6 mb-8"></div>

            <p className="text-[#4A4A4A] text-lg leading-relaxed mb-6 border-l-4 border-[#B89B5E] pl-4 italic">
              "Dedicated to shaping skilled, confident, and future-ready designers for the wood and design industry."
            </p>

            <p className="text-[#5A5A5A] text-lg leading-relaxed mb-6">
              Oniv Woods School of Design Wisdom is a forward-thinking design institute
              dedicated to wood product design, interior design, and creative technology education.
              We empower students through a unique blend of traditional craftsmanship,
              modern tools like CAD & 3D modeling, and real-world industry training.
            </p>

            <p className="text-[#5A5A5A] text-lg leading-relaxed">
              With a strong focus on international exposure, internships, and practical learning,
              Oniv Woods prepares students to meet global design standards and build successful
              creative careers. Our mission is to shape skilled, confident, and future-ready
              designers for the wood and design industry.
            </p>
          </div>

        </section>

        {/* MISSION STRIP - Highlighted callout section */}
        <section className="bg-[#1a1a1a] py-20 lg:py-24">
          <div className="max-w-5xl mx-auto text-center px-6" data-aos="zoom-in">
            <h3 className="text-4xl font-extrabold text-[#FFFFFF] tracking-wide">
                Our Global Mission
            </h3>
            <p className="mt-8 text-[#E0DCCA] text-xl leading-relaxed font-light">
              To build a new generation of globally skilled designers through innovation,
              craftsmanship excellence, and future-driven education, setting a new standard in the design world.
            </p>
          </div>
        </section>

        {/* FEATURES GRID - Enhanced card design with icons */}
        <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
            <h2 className="text-4xl font-bold text-center text-[#1a1a1a] mb-16" data-aos="fade-down">
                Why Choose Oniv Woods?
            </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {features.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={item.delay}
                className="bg-white border border-[#EBE3D6] rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl hover:shadow-[#B89B5E]/20 transition duration-500 transform hover:-translate-y-1"
              >
                <div className="flex justify-center mb-6">
                    <item.icon className="text-5xl text-[#B89B5E]"/>
                </div>
                <h4 className="text-xl font-bold text-[#2B2B2B] leading-snug">{item.title}</h4>
                <p className="mt-3 text-[#5A5A5A] text-base">
                    {/* Add a short, generic description for better presentation */}
                    Fostering excellence through practical learning and cutting-edge design methodologies.
                </p>
              </div>
            ))}

          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}