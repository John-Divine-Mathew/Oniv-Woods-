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
import SEO from "../components/SEO";

export default function HomePagePro() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <SEO
        title="Wood Technology & Architectural Design Masterclasses"
        description="Master solid hardwood joinery, parametric CNC fabrication, spatial architecture, and commercial product design at ONIV WOODS School of Design Wisdom across India and Indonesia."
        canonical="/"
        ogType="website"
        image="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1200&auto=format&fit=crop"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "ONIV WOODS School of Design Wisdom",
          "url": "https://onivwoods.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://onivwoods.com/courses?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />
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
