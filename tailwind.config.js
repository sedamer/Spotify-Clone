/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Projeye uygun yolları ekleyin
  ],
  theme: {
    extend: {
      colors: {
        backdrop: "#121212",
        primary: "#1DB954",
        secondary: "#282828",
        tertiary: "#181818",
        link: "#B3B3B3",
      },
    },
  },
  plugins: [],
};
