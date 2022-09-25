/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
        Anybody: ['Anybody', 'cursive'],
        Courgette:['Courgette', 'cursive'],
        Poppins:['Poppins', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}