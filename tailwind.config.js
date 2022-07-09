/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
    },
    extend: {
      colors: {
        brightBlue: "hsl(220, 98%, 61%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        veryLightGrayishBlue: "hsl(236, 33%, 92%)",
        lightGrayishBlue: "hsl(233, 11%, 84%)",
        darkGrayishBlue: "hsl(236, 9%, 61%)",
        veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
        // Dark Theme Colors
        veryDarkBlue: "hsl(235, 21%, 11%)",
        veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        lightGrayishBlue1: "hsl(234, 39%, 85%)",
        lightGrayishBlue2: "hsl(236, 33%, 92%)",
        darkGrayishBlue1: "hsl(234, 11%, 52%)",
        veryDarkGrayishBlue1: "hsl(233, 14%, 35%)",
        veryDarkGrayishBlue2: "hsl(237, 14%, 26%)",
      },
      backgroundImage: () => ({
        checkBackground:
          "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
        "desktop-dark": "url('/bg-desktop-dark.jpg')",
        "desktop-light": "url('/bg-desktop-light.jpg')",
      }),
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
