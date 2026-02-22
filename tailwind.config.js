/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B4332",     // Dark Green
        chocolate: "#5C3A21",   // Brown
        cream: "#F8F9FA",       // White-ish
        softgreen: "#D8F3DC",
      },
    },
  },
  plugins: [],
}
