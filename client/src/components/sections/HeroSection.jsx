import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const heroImages = [
  ['https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=520&q=80', 'Hydra facial care'],
  ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=520&q=80', 'Luxury makeup finish'],
  ['https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=520&q=80', 'Premium skincare ritual'],
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-plum overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26,10,18,0.9) 0%, rgba(45,27,37,0.68) 100%), url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1920&q=85')`,
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-plum to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-6 py-28">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-xs font-semibold uppercase tracking-widest text-gold bg-gold/10 border border-gold/25 px-4 py-1.5 rounded-full backdrop-blur"
        >
          Premium Skincare & Beauty Studio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display text-5xl md:text-7xl font-bold tracking-tight text-gradient-gold"
        >
          Hina Beauty Glow
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-sm md:text-lg text-cream/80 leading-relaxed font-accent italic"
        >
          Experience customized aesthetic facials, collagen enhancements, and immaculate waxing treatments in a clean, sophisticated, private environment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <Link
            to="/book-appointment"
            className="bg-gold hover:bg-gold-light text-plum font-bold px-8 py-3.5 rounded-full shadow-gold transition-all duration-300 hover:-translate-y-0.5"
          >
            Book Appointment
          </Link>
          <a
            href="tel:+14379378612"
            className="border border-gold text-gold hover:bg-gold hover:text-plum font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
          >
            Call Now
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.58 }}
          className="hidden md:grid grid-cols-3 gap-4 max-w-3xl mx-auto pt-8"
        >
          {heroImages.map(([src, alt]) => (
            <img
              key={src}
              src={src}
              alt={alt}
              className="h-32 w-full rounded-2xl border border-gold/20 object-cover shadow-luxury"
              loading="lazy"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
