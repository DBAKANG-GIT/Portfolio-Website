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
        image: "url('../project_resources/img/showcase.jpg')", //relative to output.css file
      },
      fontFamily: {
        dosis: ["Dosis", "sans-serif", "Arial"],
      },
    },
  },
  plugins: [],
};
