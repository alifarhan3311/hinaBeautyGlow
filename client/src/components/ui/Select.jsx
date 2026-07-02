import React from 'react';

export const Select = React.forwardRef(({
  label,
  error,
  options = [],
  className = '',
  children,
  ...props
}, ref) => {
  return (
    <div className="w-full font-sans">
      {label && <label className="block text-sm font-semibold text-gold mb-2">{label}</label>}
      <div className="relative">
        <select
          ref={ref}
          className={`w-full bg-plum-800/50 border ${error ? 'border-red-500 focus:border-red-500' : 'border-gold/20 focus:border-gold/60'} rounded-xl px-4 py-3 text-cream text-sm focus:outline-none focus:bg-plum-800 transition-all duration-300 appearance-none ${className}`}
          {...props}
        >
          {children || options.map((opt) => (
            <option key={opt.value || opt} value={opt.value || opt} className="bg-plum-800 text-cream">
              {opt.label || opt}
            </option>
          ))}\
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gold">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      {error && <span className="text-xs text-red-500 mt-1 block">{error.message || error}</span>}
    </div>
  );
});
Select.displayName = 'Select';
export default Select;
