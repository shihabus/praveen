const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        teal: colors.teal,
        "light-blue": colors.lightBlue,
      },
      dropShadow: {
        xl: "0 0 0.75rem crimson",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
