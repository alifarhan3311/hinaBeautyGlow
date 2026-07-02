import React, { useEffect } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider';

export const BeforeAfter = () => {
  useEffect(() => {
    document.title = 'Client Transformations | Hina Beauty Glow';
  }, []);

  return (
    <div className="py-12 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Real Proof" title="Transformations & Results" />
        <p className="text-center text-cream/70 text-sm max-w-xl mx-auto -mt-6">
          See the differences side-by-side. The slider comparison highlights acne scarring recovery, pigmentation balancing, and deep skin clearing therapies.
        </p>
      </div>
      <BeforeAfterSlider />
    </div>
  );
};

export default BeforeAfter;
