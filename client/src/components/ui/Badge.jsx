const variantStyles = {
  gold: 'bg-gold/10 text-gold-dark border border-gold/30 font-semibold',
  plum: 'bg-plum text-cream',
  blush: 'bg-blush text-rose border border-blush-dark',
  green: 'bg-green-50 text-green-700 border border-green-200',
  rose: 'bg-rose/10 text-rose border border-rose/30',
  popular: 'bg-gold text-plum font-bold',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs rounded-md',
  md: 'px-3 py-1 text-sm rounded-lg',
  lg: 'px-4 py-1.5 text-base rounded-xl',
};

const Badge = ({ children, variant = 'gold', size = 'md', className = '' }) => {
  return (
    <span className={`inline-flex items-center gap-1 font-sans ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
