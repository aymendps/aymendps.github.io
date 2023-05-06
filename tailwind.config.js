/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "screen-2xl": { max: "1535px" },

      "screen-xl": { max: "1279px" },

      "screen-lg": { max: "1024px" },

      "screen-md": { max: "768px" },

      "screen-sm": { max: "426px" },
    },
    extend: {
      colors: {
        darkblue: "rgb(0, 30, 60)",
      },
    },
  },
  plugins: [],
  important: true,
};
