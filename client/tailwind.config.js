/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          dark: '#8B6914',
          light: '#E8D5A3',
        },
        plum: {
          DEFAULT: '#1A0A12',
          800: '#2D1B25',
          700: '#3D2535',
          600: '#4D3045',
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
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        accent: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #C9A84C 0%, #E8D5A3 45%, #8B6914 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #8B6914 100%)',
        'plum-gradient': 'linear-gradient(135deg, #1A0A12 0%, #2D1B25 100%)',
        'hero-overlay': 'linear-gradient(135deg, rgba(26,10,18,0.85) 0%, rgba(45,27,37,0.6) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'shimmer': 'shimmer 2s infinite',
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
      },
      boxShadow: {
        card: '0 14px 45px rgba(26,10,18,0.22)',
        gold: '0 4px 24px rgba(201,168,76,0.25)',
        'gold-lg': '0 8px 40px rgba(201,168,76,0.35)',
        luxury: '0 20px 60px rgba(26,10,18,0.3)',
      },
    },
  },
  plugins: [],
};

