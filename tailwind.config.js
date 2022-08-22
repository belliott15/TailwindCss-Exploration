/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px' ,
      lg: '976px',
      xlg: '1440px'
    },
    extend: {
      colors: {
        sage:'hsla(161, 63%, 33%, 1)',
        darkSage: 'hsla(161, 63%, 21%, 1)', 
        lightSage: 'hsla(161, 63%, 43%, 1)',
        red: 'hsla(3, 70%, 32%, 1)',
        darkRed: 'hsla(3, 79%, 25%, 1)',
        lightRed: 'hsla(3, 59%, 38%, 1)',
        gray: 'hsla(150, 7%, 46%, 1)',
        darkGray: 'hsla(150, 7%, 30%, 1)',
        lightGray: 'hsla(150, 7%, 48%, 1)'
      },
    },
  },
  plugins: [],
}
