/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        background: "#2D132C", // Background color
        primary: {
          DEFAULT: "#F15BB5", // Default when using `bg-primary`
          100: "#FDE4F3", // Lightest
          200: "#FCCAE8",
          300: "#F9A8D6",
          400: "#F587C3",
          500: "#F15BB5", // Base primary (also DEFAULT)
          600: "#E042A3",
          700: "#C52B8D",
          800: "#9E1C70",
          900: "#74144E",
        },
        secondary: {
          DEFAULT: "#9B5DE5", // Default when using `bg-secondary`
          100: "#F1E7FC",
          200: "#E1C4F8",
          300: "#D1A0F3",
          400: "#C17DEA",
          500: "#9B5DE5", // Base secondary (also DEFAULT)
          600: "#8545D3",
          700: "#6F30B1",
          800: "#55228A",
          900: "#3A145C",
        },
        accent: {
          DEFAULT: "#FEE440", // Default when using `bg-accent`
          100: "#FFFBE5",
          200: "#FFF6B8",
          300: "#FFF089",
          400: "#FEEB59",
          500: "#FEE440", // Base accent (also DEFAULT)
          600: "#F9D600",
          700: "#E6C000",
          800: "#B59A00",
          900: "#806C00",
        },
        neutral: {
          DEFAULT: "#E0E0E0", // Default when using `text-neutral`
          100: "#F7F7F7",
          200: "#EDEDED",
          300: "#E0E0E0", // Base neutral (also DEFAULT)
          400: "#C0C0C0",
          500: "#A0A0A0",
          600: "#808080",
          700: "#606060",
          800: "#404040",
          900: "#202020",
        },
        lightblue: {
          DEFAULT: "#00BBF9", // Default for light blue
        },
        mintgreen: {
          DEFAULT: "#00F5D4", // Default for mint green
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
