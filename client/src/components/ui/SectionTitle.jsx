import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const reduceMotion = useReducedMotion();
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col mb-13 font-sans ${alignClasses[align]} ${className}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="section-label mb-3 uppercase text-[11px] font-semibold tracking-[0.28em] text-gold"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16, filter: reduceMotion ? 'blur(0px)' : 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="heading-lg text-gradient-gold font-bold pb-2"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mt-4 text-sm md:text-base leading-relaxed theme-muted"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: align === 'center' ? 0 : 0, width: align === 'center' ? undefined : 0 }}
        whileInView={{ scaleX: 1, width: align === 'center' ? undefined : '80px' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
        className={`h-[2px] bg-gradient-gold mt-6 ${
          align === 'center' ? 'w-20 origin-center mx-auto' : 'origin-left'
        }`}
      />
    </div>
  );
};

export default SectionTitle;
