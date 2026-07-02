import React from 'react';
import { FlaskConical, ShieldCheck, Sparkles, UserRoundCheck } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

export const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Expert Aesthetician',
      desc: 'Highly trained professionals focused on customized skincare mapping and target treatments.',
      Icon: UserRoundCheck,
    },
    {
      title: 'Premium Formulations',
      desc: 'We only use authentic, medical-grade products to ensure safety and clinical results.',
      Icon: FlaskConical,
    },
    {
      title: 'Luxury Private Ambience',
      desc: 'A calm, sanitary, modern salon setup designed to give you a completely relaxing escape.',
      Icon: Sparkles,
    },
    {
      title: 'Sterilized Hygiene Protocol',
      desc: 'Rigorous tools sterilization and single-use supplies to prioritize client health first.',
      Icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-20 bg-plum-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Our Standard"
          title="Why Choose Hina Beauty Glow"
          subtitle="Discover what makes our salon Canadian clients' favorite sanctuary for skin correction."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {reasons.map(({ Icon, ...item }) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-plum-850 border border-gold/15 flex flex-col items-center text-center space-y-4 hover:border-gold/45 transition-colors duration-300"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold shadow-gold">
                <Icon size={30} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-gold">{item.title}</h3>
              <p className="text-xs text-cream/70 leading-relaxed font-sans">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
