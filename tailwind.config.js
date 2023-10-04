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
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        bg: '#3F4045',
        btn: 'rgb(132, 160, 124)',
        gradientTo: 'rgb(35, 35, 35)',
        gradientFrom: 'rgb(19, 20, 21)'
      },
    },
  },
  plugins: [],
}

