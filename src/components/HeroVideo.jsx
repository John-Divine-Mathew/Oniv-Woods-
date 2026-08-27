import React from 'react';

export default function HeroVideo({ videoSrc = '/videos/oniv-woods-hero.mp4', posterSrc = '/assets/hero-poster.webp' }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0E0D0B]">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={posterSrc}
        className="w-full h-full object-cover opacity-60 filter brightness-90 contrast-105"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Luxury Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0B] via-transparent to-[#0E0D0B]/70 pointer-events-none" />
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
    </div>
  );
}
