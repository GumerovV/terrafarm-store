/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xl: '1440px',
      md: '1024px'
    },

    extend: {},
  },
  plugins: [],
}

