import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-gold text-plum font-bold hover:bg-gold-dark hover:shadow-gold-lg transition-all duration-300',
  secondary: 'border-2 border-gold text-gold hover:bg-gold hover:text-plum font-bold transition-all duration-300',
  ghost: 'text-gold hover:text-gold-dark underline-offset-4 hover:underline transition-all duration-300',
  dark: 'bg-plum text-cream hover:bg-plum-800 font-bold transition-all duration-300',
  white: 'bg-white text-plum font-bold hover:bg-cream transition-all duration-300',
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
  xl: 'px-10 py-5 text-xl rounded-2xl',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon,
  iconRight,
  fullWidth = false,
  ...props
}) => {
  const base = `inline-flex items-center justify-center gap-2 font-sans font-semibold cursor-pointer select-none
    ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {iconRight && <span className="flex-shrink-0">{iconRight}</span>}
    </>
  );

  if (to) {
    return (
      <motion.div whileHover={{ scale: disabled ? 1 : 1.02 }} whileTap={{ scale: disabled ? 1 : 0.98 }}>
        <Link to={to} className={base} {...props}>{content}</Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={base}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={base}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
