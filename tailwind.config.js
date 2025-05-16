/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: "#b4d455"
      },
      fontFamily: {
        'custom': ['Gotham'],
      },
    },
  },
  plugins: [],
}

