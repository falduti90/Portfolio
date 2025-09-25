/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'xlsoft': '0 20px 60px -20px rgba(0,0,0,0.45)'
      }
    },
  },
  plugins: [],
}