import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Rising gold particles (counter-parallax: drift up against scroll)
const PARTICLES = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  left: `${10 + i * 11}%`,
  delay: `${i * 0.7}s`,
  duration: `${5 + (i % 3)}s`,
  size: 6 + (i % 4) * 3,
}));

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="section-pad bg-plum border-t border-gold/10 font-sans relative overflow-hidden">
      {/* Counter-parallax rising particles */}
      <div className="pointer-events-none absolute inset-0">
        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            aria-hidden="true"
            className="absolute bottom-0 rounded-full bg-gold/30"
            style={{ left: p.left, width: p.size, height: p.size }}
            animate={reduceMotion ? undefined : { y: [0, -300], opacity: [0, 0.7, 0] }}
            transition={{ duration: parseFloat(p.duration), repeat: Infinity, delay: parseFloat(p.delay), ease: 'easeOut' }}
          />
        ))}
      </div>

      <div className="container-prose relative text-center space-y-7">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          <span className="text-3xl">✉️</span>
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16, filter: reduceMotion ? 'blur(0px)' : 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl md:text-4xl font-bold text-gradient-gold"
        >
          Join the Glow Club
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="max-w-md mx-auto theme-muted text-sm leading-relaxed"
        >
          Subscribe to receive monthly skin tips, exclusive luxury salon discounts, and priority bookings announcements.
        </motion.p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gold/10 border border-gold/30 text-gold font-semibold text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            Thank you for subscribing! Check your inbox soon.
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.32 }}
            onSubmit={handleSubscribe}
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="input-luxury flex-1"
              required
            />
            <button
              type="submit"
              className="btn-shimmer btn-glow bg-gold hover:bg-gold-light hover:shadow-gold-lg text-plum font-bold px-6 py-3 rounded-xl text-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              Subscribe
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
