/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3E76B5",
        secondary: "#6BBEF2",
        primaryDark: "#2C377C",
      },
    },
  },
  plugins: [],
};
