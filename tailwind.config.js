/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container : {
      center : true,
      padding : '16px',
    },
    extend: {
      colors: {
        primary: "#f97316",
        secondary : "#f59e0b",
        dark: "#7c2d12",
      },
      screens : {
        '2xl' : '1320'
      }
    },
  },
  plugins: [],
}

