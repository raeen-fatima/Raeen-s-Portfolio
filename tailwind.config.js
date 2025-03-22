/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7b506f",
        secondry: "#C599B6",
        thirdry: "#e5b3fe",

      },
    },
  },
  plugins: [],
}