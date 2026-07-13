import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Magnetic from '../ui/Magnetic';

// Three distinct (de-duplicated) hero imagery picks
const heroImages = [
  ['https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=560&q=80', 'Hydra facial care'],
  ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=560&q=80', 'Luxury makeup finish'],
  ['src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=520&q=80', 'Premium skincare ritual'],
];

// Background particle positions for atmospheric depth
const particles = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  left: `${10 + (i * 11) % 90}%`,
  top: `${15 + ((i * 37) % 70)}%`,
  size: 80 + (i % 4) * 40,
  delay: `${(i % 5) * 0.8}s`,
}));

export const HeroSection = () => {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Layer 1: far background — slow drift
  const yBg = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0%', '0%'] : ['0%', '25%']);
  const scaleBg = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1, 1.12]);
  // Layer 2: atmospheric mid glow
  const yMid = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0%', '0%'] : ['0%', '15%']);
  // Layer 3: foreground content escapes upward faster
  const yHead = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0%', '0%'] : ['0%', '60%']);
  const oHead = useTransform(scrollYProgress, [0, 0.7], [1, reduceMotion ? 1 : 0]);

  const heroImageVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, delay: 0.58 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  // Precompute per-tile parallax transforms (constant-length array — hooks-safe)
  const tileY0 = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -40]);
  const tileY1 = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -22]);
  const tileY2 = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -4]);
  const tileYs = [tileY0, tileY1, tileY2];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] flex items-center justify-center bg-plum overflow-hidden"
    >
      {/* Layer 1 — far background */}
      <motion.div
        style={{ y: yBg, scale: scaleBg }}
        className="parallax-layer absolute inset-0 bg-cover bg-center"
      >
        <img
          src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1920&q=85"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover scale-110"
          fetchpriority="high"
          decoding="async"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(26,10,18,0.86) 0%, rgba(45,27,37,0.68) 55%, rgba(15,6,9,0.92) 100%)',
          }}
        />
      </motion.div>

      {/* Layer 2 — atmospheric particle bokeh */}
      <motion.div style={{ y: yMid }} className="parallax-layer absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background:
                'radial-gradient(circle, rgba(232,213,163,0.18) 0%, rgba(201,168,76,0.06) 45%, transparent 70%)',
              filter: 'blur(8px)',
            }}
            animate={reduceMotion ? undefined : { opacity: [0, 0.85, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: parseFloat(p.delay) }}
          />
        ))}
      </motion.div>

      {/* Bottom fade-out ribbon into next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-plum to-transparent" />

      {/* Layer 3 — foreground content */}
      <motion.div
        style={{ y: yHead, opacity: oHead }}
        className="parallax-layer relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-7 py-28"
      >
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-gold bg-gold/10 border border-gold/25 px-4 py-1.5 rounded-full backdrop-blur"
        >
          Premium Skincare & Beauty Studio
        </motion.span>

        {/* Headline with clip-path reveal — "crystallizing" text reveal */}
        <motion.h1
          initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
          animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.77, 0, 0.18, 1] }}
          className="heading-hero font-display text-gradient-gold"
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
          transition={{ duration: 0.6, delay: 0.72 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <Magnetic
            to="/book-appointment"
            className="bg-gold hover:bg-gold-light text-plum font-bold px-8 py-3.5 rounded-full shadow-gold-lg transition-colors"
          >
            Book Appointment
          </Magnetic>
          <Magnetic
            href="tel:+14379378612"
            strength={0.22}
            className="border border-gold text-gold hover:bg-gold hover:text-plum font-bold px-8 py-3.5 rounded-full transition-colors"
          >
            Call Now
          </Magnetic>
        </motion.div>

        {/* Triptych — staggered entry, each tile parallax-drifts at a unique rate */}
        <div className="hidden md:grid grid-cols-3 gap-4 max-w-3xl mx-auto pt-10">
          {heroImages.map(([src, alt], i) => (
            <motion.picture
              key={src}
              custom={i}
              variants={heroImageVariants}
              initial="hidden"
              animate="visible"
              style={{ y: tileYs[i] }}
              className="parallax-layer block"
            >
              <img
                src={src}
                alt={alt}
                className="h-32 w-full rounded-2xl border border-gold/20 object-cover shadow-luxury transition-transform duration-500 hover:scale-[1.04]"
                loading="lazy"
                decoding="async"
              />
            </motion.picture>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

