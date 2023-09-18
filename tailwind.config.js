/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "50% 50%",
      },
      gridTemplateAreas: {
        layout: ["bioimage bio bio bio", "aw1 aw1 aw2 aw2"],
        defaultLayout: ["bioimage", "bio", "aw1", "aw2"],
        contactLayout: [
          "name email",
          "subject phone",
          "message message",
          "recaptcha recaptcha",
          "button button",
        ],
        defaultContactLayout: [
          "name",
          "email",
          "subject",
          "phone",
          "message",
          "recaptcha",
          "button",
        ],
      },
      colors: {
        main: "#ffbc00",
        light: "#f4f4f4",
        medium: "#ccc",
        dark: "#333",
        lightGrey: "#555",
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
      scale: {
        200: "2.00",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.2, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
