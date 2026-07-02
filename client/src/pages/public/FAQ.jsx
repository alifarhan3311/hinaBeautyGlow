import React, { useEffect } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import FAQSection from '@/components/sections/FAQSection';

export const FAQ = () => {
  useEffect(() => {
    document.title = 'Frequently Asked Questions | Hina Beauty Glow';
  }, []);

  return (
    <div className="py-12 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Faqs" title="Questions & Answers" />
      </div>
      <FAQSection />
    </div>
  );
};

export default FAQ;
