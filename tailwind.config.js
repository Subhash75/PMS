/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      vodafone: ["Work Sans", "sans-serif"],
      Montserrat: ["Montserrat Medium", "sans-serif"],
      MontserratSemiBold: ["Montserrat SemiBold", "sans-serif"],
      Inter: ["Inter Medium", 'sans-serif']
    },
    extend: {
      colors: {
        primary: "#e40404",
        secondary: "#fcd5d2",
        ideaColor: "#FFC600",
        lightPrimary: "#EF4444",
      },
      boxShadow: {
        customBoxShadow: "0 0 3px #000",
      },
    },
  },
  plugins: [],
}

