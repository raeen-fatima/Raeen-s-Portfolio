/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {


      fontFamily: {
        playfair: [
          "Playfair Display", "serif"],
      },
      colors: {
        primary: "#7b506f",
        secondry: "#7b506f",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        '2xl': '6rem',
        },

      }
    },
  },
  plugins: [],
}

