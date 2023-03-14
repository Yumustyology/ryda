/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        screens: {
          lg: { max: "1800px" },
          md: { max: "990px" },
          sm: { max: "600px" },
          xs: { max: "400px" },
          minmd: "1700px",
          minlg: "2100px",
        },
        fontFamily: {
          IBMPlex: ["IBM Plex Sans", "sans-serif"],
        },
  
    },
  },
  plugins: [],
}