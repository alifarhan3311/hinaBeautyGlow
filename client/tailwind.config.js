/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FBF6E6',
          100: '#F5E9C2',
          200: '#E8D5A3',
          300: '#D4B870',
          DEFAULT: '#C9A84C',
          400: '#C9A84C',
          dark: '#8B6914',
          light: '#E8D5A3',
          500: '#A8842B',
          600: '#8B6914',
          700: '#6B4F0E',
        },
        plum: {
          950: '#0F0609',
          DEFAULT: '#1A0A12',
          900: '#1A0A12',
          850: '#241420',
          800: '#2D1B25',
          700: '#3D2535',
          600: '#4D3045',
          500: '#6B4956',
        },
        blush: {
          DEFAULT: '#F8E8F0',
          dark: '#E8C8D8',
        },
        rose: {
          DEFAULT: '#8B6B7A',
        },
        cream: {
          DEFAULT: '#FDF8F0',
        },
        // Semantic tokens (resolve to CSS variables that switch with .dark)
        surface: 'rgb(var(--hbg-surface-rgb) / <alpha-value>)',
        'surface-strong': 'rgb(var(--hbg-surface-strong-rgb) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        accent: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      fontSize: {
        'fluid--2': 'var(--step--2)',
        'fluid--1': 'var(--step--1)',
        'fluid-0': 'var(--step-0)',
        'fluid-1': 'var(--step-1)',
        'fluid-2': 'var(--step-2)',
        'fluid-3': 'var(--step-3)',
        'fluid-4': 'var(--step-4)',
        'fluid-5': 'var(--step-5)',
      },
      spacing: {
        '3.5': '0.875rem',
        '4.5': '1.125rem',
        '7': '1.75rem',
        '9': '2.25rem',
        '11': '2.75rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #C9A84C 0%, #E8D5A3 45%, #8B6914 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #8B6914 100%)',
        'plum-gradient': 'linear-gradient(135deg, #1A0A12 0%, #2D1B25 100%)',
        'hero-overlay': 'linear-gradient(135deg, rgba(26,10,18,0.85) 0%, rgba(45,27,37,0.6) 100%)',
        'shimmer-gold':
          'linear-gradient(110deg, transparent 20%, rgba(232,213,163,0.55) 50%, transparent 80%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'shimmer-sweep': 'shimmerSweep 0.9s ease-out',
        'ink-underline': 'inkUnderline 0.45s cubic-bezier(0.65, 0, 0.35, 1) forwards',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.4s ease-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        shimmerSweep: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
        inkUnderline: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0% 0 0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(201,168,76,0.35)' },
          '70%': { boxShadow: '0 0 0 12px rgba(201,168,76,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(201,168,76,0)' },
        },
      },
      boxShadow: {
        card: '0 14px 45px rgba(26,10,18,0.22)',
        gold: '0 4px 24px rgba(201,168,76,0.25)',
        'gold-lg': '0 8px 40px rgba(201,168,76,0.35)',
        'gold-glow': '0 0 40px rgba(201,168,76,0.35)',
        luxury: '0 20px 60px rgba(26,10,18,0.3)',
        'luxury-hover': '0 24px 60px rgba(201,168,76,0.18)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
