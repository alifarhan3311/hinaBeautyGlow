import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ImageLightbox = ({ src, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && src && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-plum/95 backdrop-blur-md"
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-cream/70 hover:text-gold transition-colors duration-200 z-10 cursor-pointer"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl max-h-[85vh] z-10 rounded-2xl overflow-hidden shadow-luxury border border-gold/15"
          >
            <img src={src} alt="Lightbox view" className="w-full h-auto max-h-[85vh] object-contain" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ImageLightbox;
