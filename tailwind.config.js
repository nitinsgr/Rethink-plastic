const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './Components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
     extend: {
      colors : {
        'purple': '#5800FF',
        'yellow' : "#FFC900",
        'lightGreen' : "#93FFD8",
        primaryColor : '#0390099',
        secColor : '#ff0054',
        TreColor : '#00043a',
        color2 : '#00f5d4',
        whiteboard : '#fff',
      },
      fontFamily : {
        'comfortaa' : ['Comfortaa'],
        'Montserrat' : ['Montserrat Alternates']
      },
     },
  },
  variants: {
    extend: {},
  },
  plugins: []
}