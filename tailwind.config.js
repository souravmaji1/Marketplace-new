/** @type {import('tailwindcss').Config} */
function pxToRem(value) {
  return `${value / 16}rem`;
}
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A259FF",
        secondary: "#858584",
        "secondary-bg": "#3B3B3B",
        "primary-bg": "#2B2B2B",
        "main-green": "#00AC4F",
        lighterInfo: "#d3d3d47a",
      },
      padding: {
        base: pxToRem(100),
      },
      fontSize: {},
    },
  },
  plugins: [require("tw-elements/dist/plugin"), require("@tailwindcss/forms")],
};
