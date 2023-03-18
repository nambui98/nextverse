/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        dark: {
          100: '#31373E',
          200: '#151515',
        },
        orange: {
          100: '#ff9000',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
      },
      animation: {
        circle: 'circle 1.5s ease-in-out infinite',
      },
      keyframes: {
        circle: {
          '0%': {
            boxShadow: '0 0 0 0 rgba(255,145,0, 0.6)',
          },

          '70%': {
            boxShadow: '0 0 0 15px rgba(255,145,0, 0.0)',
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(255,145,0, 0.0)',
          },
        },
      },
    },
    backgroundImage: {
      'bg-primary': "url('/assets/images/background.png')",
      'bg-header': "url('/assets/images/background-header.png')",
    },
    fontFamily: {
      ArcaMajora3: ['var(--font-arcaMajora3)', ...fontFamily.sans],
      BeVietNamPro: ['var(--font-bevietnampro)', ...fontFamily.serif],
      Cabin: ['var(--font-cabin)', ...fontFamily.sans],
      Arena: ['var(--font-arena)', ...fontFamily.sans],
    },
  },
  plugins: [],
};
