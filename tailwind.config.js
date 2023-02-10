/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "rgb(0, 30, 60)",
      },
    },
  },
  plugins: [],
  important: true,
};
