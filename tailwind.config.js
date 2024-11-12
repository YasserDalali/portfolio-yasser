/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.*"],
  theme: {




    extend: {

      colors: {
        primary: "#172554",
        secondary: "#FF6500",
        tertiary: "#1E3E62",
        accent: "#0B192C",
        dark: "#000000",
        light: "#d3d4d8",
      },
      fontFamily: {
        misc: ["Bebas Neue", "cursive"],
        minor: ["Poppins", "sans-serif"],
        major: ["Lexend Deca", "sans-serif"],
      },

      spacing: {
        ws: "1rem 2rem",
        ws_lg: "3rem 6rem",
      }
    },


  },
  plugins: [require('tailwindcss-motion')],
}