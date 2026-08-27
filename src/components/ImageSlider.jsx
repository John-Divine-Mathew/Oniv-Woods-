import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ImageSlider = () => {
  const images = [
    "https://res.cloudinary.com/dofuxic0j/image/upload/v1765100279/onivBg4_efk2ra.png",
    "https://res.cloudinary.com/dofuxic0j/image/upload/v1765346584/hero2_n6uayg.png",
    "https://res.cloudinary.com/dofuxic0j/image/upload/v1765353165/hero3_fuombk.png",
    "https://res.cloudinary.com/dofuxic0j/image/upload/v1765728459/landscape_2_zvgply.png",
  ];

  return (
    <div className="absolute inset-0 -z-10">
      <Zoom scale={1.4} indicators={true} duration={2000} autoplay={true}>
        {images.map((each, index) => (
          <div key={index} style={{ width: "100%" }}>
            <img
              src={each}
              alt="Slide"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100vh",
              }}
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default ImageSlider;