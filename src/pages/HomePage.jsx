import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import "aos/dist/aos.css";
import AOS from "aos";
import HiringPartner from "../Components/HiringPartner";
import Footer from "../Components/Footer";
import CourseList from "../Components/CourseList";
import ReviewsSection from "../Components/ReviewsSection";
import ModesOfTraining from "../Components/ModesOfTraining";
import DesignSection from "../Components/DesignSection";
import CallToActionSection from "../Components/CallToActionSection";
import RealWorldPrecedents from "../Components/RealWorldPrecedents";
import VisionSection from "../Components/VisionSection";
import ImageSlider from "../Components/ImageSlider";
import YouTubeVideo from "../Components/YouTubeVideo";

// ⭐ Import Link for navigation
// import { Link } from "react-router-dom";
import EnquiryModal from "../Components/EnquiryModal";

export default function HomePage() {

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="">

    <EnquiryModal open={openModal} onClose={() => setOpenModal(false)} />

      <Navbar />

      {/* ✅ HERO SECTION - WITH ENROLL BUTTON */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* Background Slider */}
        <ImageSlider />

        {/* Text Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 bg-black/50">
          <div className="max-w-4xl mx-auto">
            <h1
              className="font-bold text-4xl md:text-5xl text-white drop-shadow-lg"
              data-aos="fade-down"
            >
              Oniv Woods School Of Design Wisdom
            </h1>

            <p
              className="text-lg mt-3 text-white drop-shadow-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Craft Your Future with World-Class Woodworking Skills.
            </p>

            <p
              className="text-white mt-3 max-w-3xl mx-auto drop-shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Expert-led training. Real workshop experience. Advanced woodworking
              machines. Become a certified wood technology professional.
            </p>

            {/* ⭐ ENROLL BUTTON UPDATE - NOW WORKS WITH ROUTER */}
            <div data-aos="fade-up" data-aos-delay="300">
              <button
                onClick={() => setOpenModal(true)}
                className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-600 transition text-black font-semibold px-8 py-3 rounded-full shadow-lg"
              >
                Enroll Now
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Slider repeated? Keep or remove */}
      <ImageSlider />

      {/* Sections */}
      <div data-aos="fade-up">
        <YouTubeVideo />
      </div>

      <div data-aos="fade-up">
        <DesignSection />
      </div>

      <div data-aos="fade-up">
        <CallToActionSection />
      </div>

      <div data-aos="fade-up">
        <HiringPartner />
      </div>

      <div data-aos="fade-up">
        <ModesOfTraining />
      </div>

      <div data-aos="fade-up" id="courses">
        <CourseList />
      </div>

      <div data-aos="fade-up">
        <ReviewsSection />
      </div>

      <Footer />
    </div>
  );
}
