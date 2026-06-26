/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          950: '#1a0533',
          900: '#2D0A4E',
          800: '#3d1063',
          700: '#4B1F73',
          600: '#6b2fa3',
          500: '#8b45c5',
          400: '#a862d8',
          300: '#c48de8',
          200: '#ddb8f0',
          100: '#f0e0fa',
          50:  '#f9f0ff',
        },
        gold: {
          900: '#7a5a00',
          800: '#a07800',
          700: '#c49600',
          600: '#D4AF37',
          500: '#e0c050',
          400: '#eacf6b',
          300: '#f0dc8a',
          200: '#f5e9ad',
          100: '#faf4d0',
          50:  '#fefbee',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Cinzel"', '"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'cosmic': 'radial-gradient(ellipse at 50% 0%, #4B1F73 0%, #2D0A4E 40%, #1a0533 100%)',
        'gold-shimmer': 'linear-gradient(135deg, #D4AF37 0%, #f5e9ad 50%, #D4AF37 100%)',
        'purple-gold': 'linear-gradient(135deg, #4B1F73 0%, #2D0A4E 50%, #D4AF37 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,175,55,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(212,175,55,0.8)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(0.7)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      boxShadow: {
        'gold': '0 0 20px rgba(212,175,55,0.4)',
        'gold-lg': '0 0 40px rgba(212,175,55,0.6)',
        'purple': '0 0 20px rgba(75,31,115,0.4)',
        'purple-lg': '0 4px 40px rgba(75,31,115,0.6)',
        'luxury': '0 8px 32px rgba(75,31,115,0.3), 0 0 0 1px rgba(212,175,55,0.2)',
        'card': '0 4px 24px rgba(75,31,115,0.15)',
        'card-hover': '0 12px 48px rgba(75,31,115,0.25), 0 0 20px rgba(212,175,55,0.2)',
      },
    },
  },
  plugins: [],
}
