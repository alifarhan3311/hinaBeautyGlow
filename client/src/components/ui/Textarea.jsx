import React from 'react';

export const Textarea = React.forwardRef(({
  label,
  error,
  className = '',
  ...props
}, ref) => {
  return (
    <div className="w-full font-sans">
      {label && <label className="block text-sm font-semibold text-gold mb-2">{label}</label>}
      <textarea
        ref={ref}
        className={`w-full bg-plum-800/50 border ${error ? 'border-red-500 focus:border-red-500' : 'border-gold/20 focus:border-gold/60'} rounded-xl px-4 py-3 text-cream placeholder-cream/30 text-sm focus:outline-none focus:bg-plum-800 transition-all duration-300 min-h-[120px] resize-y ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500 mt-1 block">{error.message || error}</span>}
    </div>
  );
});
Textarea.displayName = 'Textarea';
export default Textarea;
