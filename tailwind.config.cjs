/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        "tablet-xl": { min: "1024px", max: "1280px" },
        iphonerotate: { min: "643px", max: "1090px" },
        ipadAir: { min: "1024px", max: "1150px" },
        galxyFold: { min: "280px", max: "360px" },
      },
      colors: {
        greenToggle: "#05FF00",
        redColor: "#FF0000",
        greencheckout: "#98FF15",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("flowbite/plugin"),
  ],
};
