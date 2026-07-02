import React, { useEffect } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

export const Terms = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions | Hina Beauty Glow';
  }, []);

  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-sans leading-relaxed text-cream/80 text-sm space-y-6">
      <SectionTitle eyebrow="Legal" title="Terms & Conditions" />
      <p className="text-xs text-gold">Last updated: June 30, 2026</p>

      <h3 className="font-display text-xl font-bold text-gold mt-6">1. Appointment Rules</h3>
      <p>
        Clients must book 24 hours in advance. If a client is late by more than 15 minutes, we reserve the right to reschedule or shorten the treatment time to preserve the calendar slots of other bookings.
      </p>

      <h3 className="font-display text-xl font-bold text-gold mt-6">2. Pricing Updates</h3>
      <p>
        Salon services prices are subject to change without prior notice. Packages purchased online remain valid for up to 90 days from the purchase receipt date.
      </p>
    </div>
  );
};

export default Terms;
