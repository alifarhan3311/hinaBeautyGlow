import React, { useEffect } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

export const About = () => {
  useEffect(() => {
    document.title = 'About Us | Hina Beauty Glow';
  }, []);

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
      <SectionTitle eyebrow="Our Story" title="About Hina Beauty Glow" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
        <div className="space-y-6">
          <h3 className="font-display text-2xl font-bold text-gold">+1 437-937-8612</h3>
          <p className="text-cream/80 leading-relaxed text-sm">
            Founded with a vision to redefine skincare and aesthetic wellness, Hina Beauty Glow offers Canadian clients a clean, sophisticated, private environment for specialized skin correction.
          </p>
          <p className="text-cream/70 leading-relaxed text-sm">
            Our approach combines clinical-grade equipment with pure skincare ingredients. Whether you are addressing acne scabs, dryness, pigmentation, or locking in a wedding glow, our customized skincare mapping ensures you receive treatments suited uniquely to your skin type.
          </p>
          <div className="divider-gold-left w-12 h-0.5" />
          <div className="pt-4">
            <span className="block font-display text-lg text-gold font-bold">Hina</span>
            <span className="text-xs text-cream/55 uppercase tracking-widest">Founder & Lead Aesthetician</span>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-luxury border border-gold/15 bg-plum-800 aspect-[4/3]">
          <img
            src="https://images.pexels.com/photos/11118765/pexels-photo-11118765.jpeg"
            alt="Lead aesthetician consulting"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
