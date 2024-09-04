/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      redHat: ["Red Hat Display", "sans-serif"],
    },

    extend: {
      colors: {
        cyan: {
          600: "#4D96A9",
          300: "#8FE3F9",
        },
        purple: {
          600: "#855FB1",
          300: "#D9B8FF",
        },
        slate: {
          900: "#28283D",
          600: "#87879D",
          300: "#D1D1DF",
        },
      },
      backgroundImage: {
        mobile: "url('./starter-code/assets/mobile/image-footer.jpg')",
      },
    },
  },
  plugins: [],
};
