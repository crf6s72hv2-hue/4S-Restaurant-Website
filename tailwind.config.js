/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#e6f2f2',
          100: '#c4e0e0',
          200: '#8fc4c4',
          300: '#5aa3a3',
          400: '#2e8585',
          500: '#0F5B5B',
          600: '#0d4f4f',
          700: '#0a3f3f',
          800: '#072e2e',
          900: '#041d1d',
          950: '#021212',
        },
        ember: {
          50: '#fef3e8',
          100: '#fde0c4',
          200: '#fac488',
          300: '#f7a14d',
          400: '#F47B20',
          500: '#e26a13',
          600: '#bb5510',
          700: '#944312',
          800: '#6d3212',
          900: '#4a2310',
        },
        charcoal: {
          50: '#f6f6f7',
          100: '#e2e2e4',
          200: '#c4c4c8',
          300: '#9d9da4',
          400: '#75757e',
          500: '#575760',
          600: '#43434b',
          700: '#2f2f35',
          800: '#1c1c20',
          900: '#121214',
          950: '#08080a',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(244,123,32,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(244,123,32,0.7)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 1.2s ease both',
        'scale-in': 'scale-in 0.8s cubic-bezier(0.22,1,0.36,1) both',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'slow-zoom': 'slow-zoom 20s ease-out infinite alternate',
      },
    },
  },
  plugins: [],
};
