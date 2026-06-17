/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Esto le dice a Tailwind que busque en todos tus archivos de React/JS
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
      colors: {
        'rosasuave': '#ffd0d3',
        'rosaclaro': '#f0e0e3',
        'rosapetalo': '#C25261',
        'rosaoscuro': '#8B3A4A',
        'rosamuyoscuro': '#5c2536',
      },
    },
  },
  plugins: [],
}