/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    colors: {
      'auretto-white': '#F9F2ED',
      'auretto-dark-blue': '#27223A',
      auretto: '#C68232',
      white: '#FFFFFF',
    },
    fontFamily: {
      sans: ['PT Sans', 'sans-serif'],
    },
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animated')
  ],
}