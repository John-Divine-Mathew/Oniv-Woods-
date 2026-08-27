import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, videoSrc = '/videos/oniv-woods-hero.mp4' }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-12"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 cursor-pointer"
          aria-label="Close video"
        >
          <X size={32} />
        </button>

        <div className="relative w-full max-w-5xl aspect-video rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-black">
          <video
            controls
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
