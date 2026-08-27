import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiPlay, FiPause, FiVolume2, FiVolumeX, FiMaximize, FiShield } from "react-icons/fi";
import VideoModal from "./VideoModal";

export default function AboutWorkshopVideo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoSrc="https://assets.mixkit.co/videos/preview/mixkit-carpenter-measuring-and-cutting-wood-41315-large.mp4"
      />

      <div className="relative group">
        {/* Main Video Container */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl border bg-[#0E0D0B] aspect-[4/3] sm:aspect-[16/11]"
          style={{ borderColor: "rgba(74,53,37,0.2)" }}
        >
          {/* HTML5 Autoplay Video */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=1200&auto=format&fit=crop"
            className="w-full h-full object-cover filter brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-105"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-carpenter-measuring-and-cutting-wood-41315-large.mp4"
              type="video/mp4"
            />
            {/* Fallback secondary source */}
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
              type="video/mp4"
            />
          </video>

          {/* Luxury Vignette Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(20,17,14,0.3) 0%, rgba(20,17,14,0.1) 40%, rgba(20,17,14,0.85) 100%)",
            }}
          />

          {/* Top Floating Badge */}
          <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-black/60 border border-white/15 text-white shadow-lg">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="eyebrow text-[10px] tracking-wider text-amber-200">
                Live Workshop Studio
              </span>
            </div>

            {/* Sound & Fullscreen Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="p-2.5 rounded-full backdrop-blur-md bg-black/50 hover:bg-black/80 border border-white/15 text-white transition-all hover:scale-105 cursor-pointer"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <FiVolumeX size={15} /> : <FiVolume2 size={15} />}
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="p-2.5 rounded-full backdrop-blur-md bg-black/50 hover:bg-black/80 border border-white/15 text-white transition-all hover:scale-105 cursor-pointer"
                aria-label="Expand video modal"
              >
                <FiMaximize size={15} />
              </button>
            </div>
          </div>

          {/* Center Play/Pause Trigger */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="pointer-events-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center backdrop-blur-md bg-[#B0713C]/90 text-white shadow-2xl border border-amber-300/40 hover:bg-[#8A551F] transition-colors cursor-pointer group/btn"
              aria-label="Play full film"
            >
              <FiPlay className="ml-1 text-2xl sm:text-3xl text-white group-hover/btn:scale-110 transition-transform" />
            </motion.button>
          </div>

          {/* Bottom Glass Caption */}
          <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl backdrop-blur-md bg-black/60 border border-white/15 text-white">
            <div className="flex items-center justify-between">
              <div>
                <span className="eyebrow text-amber-300 block mb-0.5 text-[10px]">
                  Authentic Workshop Apprenticeship
                </span>
                <p className="text-xs text-white/90 font-light">
                  Watch our artisans & students mastering industrial timber machinery.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer shrink-0 border border-white/10"
              >
                <span>Full Film</span>
                <FiPlay size={10} />
              </button>
            </div>
          </div>
        </div>

        {/* Accent Floating Badge */}
        <div
          className="hidden sm:flex absolute -bottom-6 -right-6 p-5 rounded-2xl shadow-2xl flex-col border z-20 backdrop-blur-md"
          style={{
            background: "var(--oniv-beige)",
            borderColor: "rgba(74,53,37,0.18)",
            maxWidth: "220px",
          }}
        >
          <span className="font-display text-3xl font-bold" style={{ color: "var(--oniv-amber-dark)" }}>
            2 Nations
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-wider mt-1" style={{ color: "var(--oniv-charcoal)" }}>
            India & Indonesia Studio Network
          </span>
        </div>
      </div>
    </>
  );
}
