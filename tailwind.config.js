/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')],
}
