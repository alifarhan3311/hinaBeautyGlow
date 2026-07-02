import React, { useEffect } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

export const Cancellation = () => {
  useEffect(() => {
    document.title = 'Cancellation Policy | Hina Beauty Glow';
  }, []);

  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-sans leading-relaxed text-cream/80 text-sm space-y-6">
      <SectionTitle eyebrow="Legal" title="Cancellation Policy" />
      <p className="text-xs text-gold">Last updated: June 30, 2026</p>

      <h3 className="font-display text-xl font-bold text-gold mt-6">1. 24-Hour Notice Requirement</h3>
      <p>
        If you need to reschedule or cancel your glow session, please let us know at least 24 hours in advance. This gives us enough time to allocate your aesthetic suite slot to another customer waiting on our list.
      </p>

      <h3 className="font-display text-xl font-bold text-gold mt-6">2. No-Show Terms</h3>
      <p>
        If a client does not show up for their scheduled time slot and has not notified our salon via Call or WhatsApp, they may be required to pay a non-refundable deposit for any future treatment requests.
      </p>
    </div>
  );
};

export default Cancellation;
