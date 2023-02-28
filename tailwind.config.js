/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xxs: '200px',
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primaryGreen: '#00A651',
        primaryBlue: '#060720',
        lightGray: '#F7F7F7',
      },
      fontFamily: {
        primary: ['Roboto'],
      },
      backgroundColor: {
        'main-bg': '#F1F1F1',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
