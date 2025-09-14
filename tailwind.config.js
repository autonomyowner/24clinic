/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dental-purple': '#7c3aed', // purple-600
        'dental-slate': '#0f172a',
        'dental-purple-light': '#a855f7', // purple-500 for highlights
      },
      backgroundImage: {
        'gradient-dental': 'linear-gradient(to bottom right, #0f172a, #7c3aed, #0f172a)',
      }
    },
  },
  plugins: [],
} 