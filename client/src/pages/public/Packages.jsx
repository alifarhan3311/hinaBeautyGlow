import React, { useEffect } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import PackagesSection from '@/components/sections/PackagesSection';

export const Packages = () => {
  useEffect(() => {
    document.title = 'Discount Packages | Hina Beauty Glow';
  }, []);

  return (
    <div className="py-12 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Offers" title="Skincare & Waxing Packages" />
        <p className="text-center text-cream/70 text-sm max-w-xl mx-auto -mt-6">
          Combine our selected facial, skin renewal, and face, arm, and leg waxing services for a polished beauty session.
        </p>
      </div>
      <PackagesSection />
    </div>
  );
};

export default Packages;
