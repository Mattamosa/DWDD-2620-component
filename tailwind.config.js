/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],  
  theme: {
    extend: {
      colors: {
        layer2gray: '#090b0bb3', /* This is the layer 2 color with the opacity of 70% */
        cardPgray: '#72777A', /* This is the card paragraph color */
        btnColor: '#6B4EFF', /* This is the button & button background color */
      }
    },
  },
  plugins: [],
}