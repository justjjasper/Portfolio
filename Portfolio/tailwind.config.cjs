/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'proxima': ['"proxima nova light"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'Sans-serif'],
        'proxima-semibold': ['"proxima nova semibold"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'Sans-serif']
      },
      boxShadow: {
        'latestWorksShadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 -3px 2px -2px rgba(0, 0, 0, 0.1)',
        'latetstWorksShadow-lg':'0 10px 15px -3px rgb(0, 0, 0, 0.3), 0 -6px 6px -4px rgb(0, 0, 0, 0.1)'
      }
    },
  },
}