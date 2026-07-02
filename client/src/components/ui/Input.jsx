import React from 'react';

export const Input = React.forwardRef(({
  label,
  error,
  type = 'text',
  className = '',
  ...props
}, ref) => {
  return (
    <div className="w-full font-sans">
      {label && <label className="block text-sm font-semibold text-gold mb-2">{label}</label>}
      <input
        type={type}
        ref={ref}
        className={`w-full bg-plum-800/50 border ${error ? 'border-red-500 focus:border-red-500' : 'border-gold/20 focus:border-gold/60'} rounded-xl px-4 py-3 text-cream placeholder-cream/30 text-sm focus:outline-none focus:bg-plum-800 transition-all duration-300 ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500 mt-1 block">{error.message || error}</span>}
    </div>
  );
});
Input.displayName = 'Input';
export default Input;
