import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  hover = true,
  gold = false,
  dark = false,
  padding = 'p-6',
  onClick,
  ...props
}) => {
  const tone = dark
    ? 'bg-surface-strong text-cream border border-plum-700'
    : gold
      ? 'bg-gradient-to-br from-gold/10 to-gold-light/20 border border-gold/30 theme-text'
      : 'theme-card theme-text border theme-border';

  const base = `group relative rounded-2xl overflow-hidden transition-all duration-500
    ${tone}
    ${hover ? 'hover:shadow-luxury-hover hover:-translate-y-2 hover:border-gold/45' : ''}
    ${padding}
    ${className}`;

  return (
    <motion.div
      className={base}
      onClick={onClick}
      whileHover={hover ? { y: -8 } : {}}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {/* Gold inner sheen on hover */}
      {hover && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              'linear-gradient(135deg, rgba(201,168,76,0.06) 0%, transparent 55%, rgba(232,213,163,0.05) 100%)',
          }}
        />
      )}
      {children}
    </motion.div>
  );
};

export default Card;
