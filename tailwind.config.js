/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "50% 50%",
      },
      gridTemplateAreas: {
        layout: ["bioimage bio bio bio", "aw1 aw1 aw2 aw2"],
      },
      colors: {
        main: "#ffbc00",
        light: "#f4f4f4",
        medium: "#ccc",
        dark: "#333",
      },
      backgroundImage: {
        image: "url('../project_resources/img/showcase.jpg')", //relative to output.css file
      },
      backgroundPosition: {
        "left-middle": "20% 30%",
      },
      fontFamily: {
        dosis: ["Dosis", "sans-serif", "Arial"],
      },
      lineHeight: {
        12: "70px",
        13: "96px",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
