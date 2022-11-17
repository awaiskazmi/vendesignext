/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Averta", "sans-serif"],
      serif: ["Dia", "serif"],
    },
    container: {
      center: true,
      screens: {
        // sm: '600px',
        // md: '728px',
        // lg: '984px',
        // xl: '1240px',
        // '2xl': '1496px',
        lg: "1160px",
      },
    },
    extend: {
      width: {
        half: "50vw",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
