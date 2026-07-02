import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

export const TestimonialsCarousel = () => {
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

  const next = () => setActiveIndex((activeIndex + 1) % reviews.length);
  const prev = () => setActiveIndex((activeIndex - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-20 bg-plum-800/20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Reviews"
          title="What Our Clients Say"
          subtitle="Read honest feedback from customers who have experienced our premium salon sessions."
        />
        <div className="max-w-3xl mx-auto mt-12 theme-card border border-gold/10 rounded-2xl p-8 md:p-12 relative shadow-luxury">
          <div className="text-center space-y-6">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/20 bg-gold/10 text-gold">
              <Quote size={26} strokeWidth={1.8} />
            </span>
            <p className="text-base md:text-lg italic theme-text leading-relaxed font-accent px-8 md:px-12">
              {reviews[activeIndex].text}
            </p>
            <div className="divider-gold w-12 h-0.5 mx-auto" />
            <div>
              <h4 className="font-display text-base font-bold text-gold">{reviews[activeIndex].name}</h4>
              <span className="text-xs theme-muted uppercase tracking-widest">{reviews[activeIndex].treatment} Client</span>
            </div>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="pointer-events-auto bg-gold/15 hover:bg-gold hover:text-plum text-gold w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="pointer-events-auto bg-gold/15 hover:bg-gold hover:text-plum text-gold w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;