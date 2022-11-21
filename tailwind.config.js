/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Lora", "serif"],
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
      colors: {
        light: "#f6f7fa",
      },
      spacing: {
        13: "3.25rem",
        14: "4rem",
        15: "7.68rem",
        16: "10.25rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
