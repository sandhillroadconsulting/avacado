/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'avocado': {
          dark: '#01110c',
          DEFAULT: '#87A96B',
          light: '#A3C585',
        }
      }
    },
  },
  plugins: [],
}

