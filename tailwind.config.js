/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: "#ffbc00",
        light: "#f4f4f4",
        medium: "#ccc",
        dark: "#333",
      },
      backgroundImage: {
        showcase: "url('../project_resources/img/showcase.jpg')", //relative to output.css file
      },
      maxWidth: {
        website: "1280px",
      },
      fontFamily: {
        dosis: ["Dosis", "sans-serif", "Arial"],
      },
    },
  },
  plugins: [],
};
