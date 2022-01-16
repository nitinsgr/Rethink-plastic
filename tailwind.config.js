module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
     extend: {
      colors : {
        'purple': '#5800FF',
        'yellow' : "#FFC900",
        'lightGreen' : "#93FFD8",
      },
      fontFamily : {
        'comfortaa' : ['Comfortaa'],
        'Montserrat' : ['Montserrat Alternates']
      }
     },
  },
  variants: {
    extend: {},
  },
  plugins: []
}