/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:"#FF3B3F",
        bgPurple:'#AF9CF3',
        borderGreen:'#44B77B'
      }
    },
  },
  plugins: [],
}