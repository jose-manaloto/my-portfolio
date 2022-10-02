/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'oat': '#e9e7df',
        'oat-dark': '#afa686',
        'oat-dark-100': '#c9c3ad',
        'oat-icon': '#fff3c3',
        'oat-pink': '#ffba9c',
        'oat-pink-100': '#ffd5c3'
      }
    },
  },
  plugins: [],
}
