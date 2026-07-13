import React from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';

const StatItem = ({ stat }) => {
  const numeric = parseFloat(stat.value.replace(/[^0-9.]/g, '')) || 0;
  const isStar = stat.value.includes('★');
  const prefix = stat.value.startsWith('CAD') ? 'CAD ' : '';
  const suffix = stat.value.includes('+') ? '+' : isStar ? '★' : '';

  const [ref, formatted] = useCountUp(numeric, {
    duration: 1800,
    decimals: 0,
    prefix,
    suffix,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: stat.delay || 0 }}
      className="space-y-2 group"
    >
      <div className="text-4xl md:text-5xl font-extrabold text-gradient-gold tracking-tight transition-transform duration-300 group-hover:scale-[1.04]">
        {formatted}
      </div>
      <div className="text-[11px] md:text-xs font-medium theme-muted uppercase tracking-[0.28em]">
        {stat.label}
      </div>
    </motion.div>
  );
};

export const StatsBar = () => {
  const stats = [
    { value: '500+', label: 'Happy Clients' },
    { value: '10+', label: 'Premium Treatments' },
    { value: '5★', label: 'Client Rating' },
    { value: '100%', label: 'Hygiene Standard' },
  ];

  return (
    <section className="bg-surface-strong border-y border-gold/15 py-13 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-9 text-center">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={{ ...stat, delay: i * 0.12 }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
