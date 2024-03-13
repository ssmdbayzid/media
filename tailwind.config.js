/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#009688",
        headingColor: "#181A1E",
        accent: "#e2e8f0"
      }
    },
  },
  plugins: [],
}

