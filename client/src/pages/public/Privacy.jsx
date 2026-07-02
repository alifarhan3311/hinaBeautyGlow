import React, { useEffect } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

export const Privacy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | Hina Beauty Glow';
  }, []);

  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-sans leading-relaxed text-cream/80 text-sm space-y-6">
      <SectionTitle eyebrow="Legal" title="Privacy Policy" />
      <p className="text-xs text-gold">Last updated: June 30, 2026</p>

      <h3 className="font-display text-xl font-bold text-gold mt-6">1. Information We Collect</h3>
      <p>
        We collect client name, phone numbers, and booking options to set up appointments correctly. Payment processes or secure keys are stored using SSL standards.
      </p>

      <h3 className="font-display text-xl font-bold text-gold mt-6">2. Data Safety</h3>
      <p>
        Your data is strictly processed client-side and server-side with database protection. We do not sell or export client lists to external advertising platforms.
      </p>
    </div>
  );
};

export default Privacy;
