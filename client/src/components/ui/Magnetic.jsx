import React from 'react';
import { Link } from 'react-router-dom';
import { useMagnetic } from '@/hooks/useMagnetic';

/**
 * Magnetic wrapper for premium CTAs. Translates slightly toward the pointer.
 * Falls back to a non-magnetic <Link>/<a> on touch devices / reduced-motion.
 */
const Magnetic = ({
  children,
  to,
  href,
  onClick,
  type = 'button',
  strength = 0.32,
  className = '',
  disabled = false,
  ...props
}) => {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(strength);

  const base = `magnetic btn-shimmer btn-glow ${className}`;

  if (to) {
    return (
      <Link
        ref={ref}
        to={to}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={base}
        {...props}
      >
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={base}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={base}
      {...props}
    >
      {children}
    </button>
  );
};

export default Magnetic;
