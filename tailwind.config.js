/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'HeaderGreen': '#677510',
        'HeaderHoverGreen': '#B5CC22',
      },
      backgroundColor: {
        'LoginButGreen': '#B5CC22',
      },
    },
  },
  plugins: [],
}

