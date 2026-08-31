import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiPlay, FiPause, FiVolume2, FiVolumeX, FiMaximize, FiFilm } from "react-icons/fi";
import VideoModal from "./VideoModal";

export default function AboutWorkshopVideo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showYoutube, setShowYoutube] = useState(false);
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

      <div className="relative w-full group">
        {/* Main Video Presentation Card */}
        <div
          className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border bg-[#14110E] min-h-[320px] sm:min-h-[420px] md:min-h-[480px] flex items-center justify-center transition-all duration-500 group-hover:border-amber-700/50"
          style={{ borderColor: "rgba(74,53,37,0.25)" }}
        >
          {showYoutube ? (
            <iframe
              className="w-full h-full min-h-[320px] sm:min-h-[420px] md:min-h-[480px] object-cover"
              src="https://www.youtube.com/embed/DdNo_fa0DwY?autoplay=1&mute=1&loop=1&playlist=DdNo_fa0DwY&controls=1"
              title="Oniv Woods Workshop Masterclass"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                poster="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop"
                className="w-full h-full min-h-[320px] sm:min-h-[420px] md:min-h-[480px] object-cover filter brightness-95 contrast-105 transition-transform duration-700 ease-out group-hover:scale-105"
              >
                <source
                  src="https://assets.mixkit.co/videos/preview/mixkit-carpenter-measuring-and-cutting-wood-41315-large.mp4"
                  type="video/mp4"
                />
                <source
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
                  type="video/mp4"
                />
              </video>

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(20,17,14,0.4) 0%, rgba(20,17,14,0.15) 45%, rgba(20,17,14,0.9) 100%)",
                }}
              />

              {/* Top Floating Badge Bar */}
              <div className="absolute top-3 left-3 right-3 sm:top-5 sm:left-5 sm:right-5 flex items-center justify-between z-10 pointer-events-auto">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full backdrop-blur-md bg-black/60 border border-white/20 text-white shadow-lg">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="eyebrow text-[9px] sm:text-[10px] tracking-wider text-amber-200">
                    Live Workshop Film
                  </span>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2">
                  <button
                    onClick={toggleMute}
                    className="p-2 sm:p-2.5 rounded-full backdrop-blur-md bg-black/60 hover:bg-black/85 border border-white/20 text-white transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-md"
                    title={isMuted ? "Unmute Sound" : "Mute Sound"}
                  >
                    {isMuted ? <FiVolumeX size={13} /> : <FiVolume2 size={13} />}
                  </button>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="p-2 sm:p-2.5 rounded-full backdrop-blur-md bg-black/60 hover:bg-black/85 border border-white/20 text-white transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-md"
                    title="Fullscreen HD View"
                  >
                    <FiMaximize size={13} />
                  </button>
                </div>
              </div>

              {/* Central Play Trigger with Radar Pulse */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-amber-600/30 animate-ping pointer-events-none" />
                  <motion.button
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={() => setIsModalOpen(true)}
                    className="pointer-events-auto relative w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center backdrop-blur-md bg-[#B0713C] hover:bg-[#8A551F] text-white shadow-2xl border border-amber-300/60 transition-all duration-300 cursor-pointer group/btn"
                    title="Play Masterclass Video"
                  >
                    <FiPlay className="ml-1 text-xl sm:text-3xl text-white group-hover/btn:scale-110 transition-transform" />
                  </motion.button>
                </div>
              </div>

              {/* Bottom Caption Glass Bar */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-md bg-black/75 border border-white/15 text-white z-10 transition-all duration-300 hover:bg-black/85">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
                  <div>
                    <span className="eyebrow text-amber-300 block mb-0.5 text-[9px] sm:text-[10px]">
                      Master Apprenticeship & Wood Technology
                    </span>
                    <p className="text-[11px] sm:text-xs text-white/90 font-light leading-snug">
                      Students transforming raw timber into heirloom furniture and commercial prototypes.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-white/20 hover:bg-white/30 text-white transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shrink-0 border border-white/15"
                  >
                    <span>Watch Full Film</span>
                    <FiFilm size={12} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Accent Floating Badge with Subtle Float Animation */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
        </motion.div>
      </div>
    </>
  );
}
