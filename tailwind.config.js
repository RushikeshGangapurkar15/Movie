/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6D38C3",
        black: "#131523",
        secondary: "#f7fbfe",
        tertiary: "#FE830C",
        greyFour: "#F3F2f7",
        textLight: "#7c7c7c",
      },
      fontFamily: {
        plight: ["Poppins-Light", "sans-serif"],
        psemibold: ["Poppins-Semibold", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
