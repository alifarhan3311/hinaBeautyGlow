import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

export const TestimonialsCarousel = () => {
  const reduceMotion = useReducedMotion();
  const reviews = [
    {
      name: 'Ayesha Khan',
      treatment: 'Hydra Facial',
      text: 'My skin was dull and flaky. After one Signature Hydra Facial at Hina Beauty Glow, my face has this clean glass-like finish that lasts for weeks.',
    },
    {
      name: 'Sadia Ahmed',
      treatment: 'Collagen Treatment',
      text: 'Super high standard setup. The aesthetician explains every single step. Highly professional, skin looks tighter and healthier.',
    },
    {
      name: 'Sana Fatima',
      treatment: 'Pigmentation Therapy',
      text: 'Really happy with the results of their pigmentation peel. My acne scars are visibly reduced. Totally recommend them!',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const next = () => { setDir(1); setActiveIndex((i) => (i + 1) % reviews.length); };
  const prev = () => { setDir(-1); setActiveIndex((i) => (i - 1 + reviews.length) % reviews.length); };

  const variants = {
    enter: (d) => ({ opacity: 0, x: reduceMotion ? 0 : d * 60, filter: 'blur(8px)' }),
    center: { opacity: 1, x: 0, filter: 'blur(0px)' },
    exit: (d) => ({ opacity: 0, x: reduceMotion ? 0 : d * -60, filter: 'blur(8px)', transition: { duration: 0.35 } }),
  };

  return (
    <section className="section-pad bg-surface-strong/20 font-sans relative">
      <div className="container-luxury">
        <SectionTitle
          eyebrow="Reviews"
          title="What Our Clients Say"
          subtitle="Read honest feedback from customers who have experienced our premium salon sessions."
        />

        <div className="max-w-3xl mx-auto mt-13 theme-card border border-gold/10 rounded-2xl p-9 md:p-13 relative shadow-luxury overflow-hidden">
          {/* Parallax quote marks — drift subtly with hover */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-4 -top-6 font-display text-[10rem] leading-none text-gold/10 select-none transition-transform duration-500 hover:-translate-y-1"
          >
            &ldquo;
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 -bottom-10 font-display text-[10rem] leading-none text-gold/10 select-none transition-transform duration-500 hover:translate-y-1"
          >
            &rdquo;
          </span>

          <div className="relative text-center space-y-7 min-h-[260px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={activeIndex}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/20 bg-gold/10 text-gold shadow-gold">
                  <Quote size={26} strokeWidth={1.8} />
                </span>
                <p className="text-base md:text-lg italic theme-text leading-relaxed font-accent px-8 md:px-12">
                  {reviews[activeIndex].text}
                </p>
                <div className="divider-gold w-12 h-0.5 mx-auto" />
                <div>
                  <h4 className="font-display text-base font-bold text-gold">{reviews[activeIndex].name}</h4>
                  <span className="text-xs theme-muted uppercase tracking-[0.28em]">{reviews[activeIndex].treatment} Client</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="pointer-events-auto group bg-gold/15 hover:bg-gold hover:text-plum text-gold w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-gold-lg cursor-pointer hover:-translate-x-0.5"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="pointer-events-auto bg-gold/15 hover:bg-gold hover:text-plum text-gold w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-gold-lg cursor-pointer hover:translate-x-0.5"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDir(i > activeIndex ? 1 : -1); setActiveIndex(i); }}
                aria-label={`Review ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-7 bg-gold' : 'w-2 bg-gold/30 hover:bg-gold/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
