/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#000",
        light: "#fff",
      },
      screens: {
        "xs": "500px", // Extra small screens
        "xmd": "800px", // Extra small screens
        "2xl": "1440px", // Extra large screens
      },
    },
  },
  plugins: [],
};
