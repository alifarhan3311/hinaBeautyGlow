import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, ShieldCheck, Sparkles, UserRoundCheck } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { useScrollReveal } from '@/hooks/useScrollReveal';

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

  const { ref, container, item } = useScrollReveal({ threshold: 0.18, stagger: 0.1, y: 28 });

  return (
    <section className="section-pad bg-surface-strong/40 relative overflow-hidden">
      {/* Decorative parallax gold botanical wash */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-30 animate-float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.16) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      <div className="container-luxury relative">
        <SectionTitle
          eyebrow="Our Standard"
          title="Why Choose Hina Beauty Glow"
          subtitle="Discover what makes our salon Canadian clients' favorite sanctuary for skin correction."
        />

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 mt-13"
        >
          {reasons.map(({ Icon, ...reason }) => (
            <motion.article
              key={reason.title}
              variants={item}
              className="group p-9 rounded-2xl bg-surface-strong border border-gold/15 flex flex-col items-center text-center space-y-5 hover:border-gold/45 hover:shadow-luxury-hover hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold shadow-gold transition-all duration-500 group-hover:scale-110 group-hover:shadow-gold-lg">
                <Icon size={30} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-gradient-gold text-gradient-gold-hover">
                {reason.title}
              </h3>
              <p className="text-xs theme-muted leading-relaxed font-sans">{reason.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
