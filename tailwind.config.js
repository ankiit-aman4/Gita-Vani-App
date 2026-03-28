/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF5E6',
        maroon: '#6B1414',
        'deep-maroon': '#3D0A0A',
        gold: '#C9963A',
        saffron: '#D4620A',
      },
    },
  },
  plugins: [],
};
