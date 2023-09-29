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
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        bg: '#333',
        btn: 'rgb(132, 160, 124)'
      },
    },
  },
  plugins: [],
}

