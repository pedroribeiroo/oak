/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#FFF",

      gray: {
        900: "#121414",
        800: "#202020",
        400: "#343434",
        200: "#c4c4cc",
        100: "#e1e1e6",
      },

      blue: {
        400: "#008EFF",
        200: "#74C1FF",
      },
      red: {
        400: "#FF4242",
        200: "#FF7070",
      },
      green: {
        800: "#003E11",
        400: "#5AFF88",
        200: "#5AFF98",
      },
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
