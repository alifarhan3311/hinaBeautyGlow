import React, { useEffect } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';

export const Testimonials = () => {
  useEffect(() => {
    document.title = 'Client Reviews | Hina Beauty Glow';
  }, []);

  return (
    <div className="py-12 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Testimonials" title="Client Transformations Reviews" />
      </div>
      <TestimonialsCarousel />
    </div>
  );
};

export default Testimonials;
