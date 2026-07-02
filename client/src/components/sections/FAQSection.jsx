import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Accordion from '../ui/Accordion';

export const FAQSection = () => {
  const faqs = [
    {
      question: 'What is a Hydra Facial, and is it suitable for sensitive skin?',
      answer: 'Our Signature Hydra Facial is a medical-grade device-based treatment that extracts impurities, hydrates deep layers using hyaluronic serums. It is highly customizable and completely safe for dry, oily, acne-prone, and sensitive skin.',
    },
    {
      question: 'How do I book an appointment?',
      answer: 'You can book your appointment online through our booking screen. Simply select your service, select the slot, fill in your details, and submit. Our staff will coordinate to confirm via WhatsApp or Call.',
    },
    {
      question: 'What preparations should I take before facial treatments?',
      answer: 'Avoid active sun exposure for 48 hours. Stop using retinoids, salicylic acid, or heavy chemical exfoliants 3 days before your facial session to prevent skin irritation.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'We request at least 24 hours notice for any cancellations or reschedules. This allows us to offer the slot to clients on our waiting list. Same-day cancellations may incur a late fee.',
    },
  ];

  return (
    <section className="py-20 bg-plum-800/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Support" title="Frequently Asked Questions" />
        <div className="mt-12">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
