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
    ? 'bg-plum-800 text-cream border border-plum-700'
    : gold
      ? 'bg-gradient-to-br from-gold/10 to-gold-light/20 border border-gold/30 theme-text'
      : 'theme-card theme-text border theme-border';

  const base = `rounded-2xl overflow-hidden transition-all duration-300
    ${tone}
    ${hover ? 'hover:shadow-luxury hover:-translate-y-1' : ''}
    ${padding}
    ${className}`;

  return (
    <motion.div
      className={base}
      onClick={onClick}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;