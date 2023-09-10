/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'proxima': ['"proxima nova light"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'Sans-serif']
      }
    },
  },
}