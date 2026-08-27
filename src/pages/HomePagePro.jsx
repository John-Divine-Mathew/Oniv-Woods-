import { useState } from "react";
import NavbarPro from "../components/NavbarPro";
import HeroPro from "../components/HeroPro";
import FeatureStrip from "../components/FeatureStrip";
import CourseGrid from "../components/CourseGrid";
import FinalCTAPro from "../components/FinalCTAPro";
import EnquiryModal from "../components/EnquiryModal";
import VisionSection from "../components/VisionSection";
import ReviewsSection from "../components/ReviewsSection";
import HiringPartner from "../components/HiringPartner";
import Footer from "../components/Footer";

export default function HomePagePro() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <EnquiryModal open={openModal} onClose={() => setOpenModal(false)} />
      <NavbarPro onEnroll={() => setOpenModal(true)} />

      <HeroPro onEnroll={() => setOpenModal(true)} />
      <FeatureStrip />
      <CourseGrid />
      <VisionSection />
      <ReviewsSection />
      <HiringPartner />
      <FinalCTAPro onEnroll={() => setOpenModal(true)} />
      <Footer />
    </div>
  );
}
