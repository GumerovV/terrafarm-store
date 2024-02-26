/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xl: '1440px',
      md: '1024px',
      sm: '500px'
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
        border: '#84A07C',
        btnBlack: 'rgb(19, 20, 21)',
        gradientTo: 'rgb(35, 35, 35)',
        gradientFrom: 'rgb(19, 20, 21)'
      },
      animation: {
        fade: 'fade 0.75s ease-in-out',
      },
      keyframes: {
        fade: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-text-balance'),
    require('flowbite/plugin'),
  ],
}

