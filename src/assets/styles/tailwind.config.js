const colors = require('tailwindcss/colors');



module.exports = {
  content: [
    './src/components/**/*.js',
    './public/index.html',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#212121',
    },
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        sm: '768px',
      },
    },
    extend: {},
  },
  plugins: [],
}
