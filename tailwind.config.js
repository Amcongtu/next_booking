/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        loadingpagechange: {
          'from':{
            right: '100%'
          },
          'to': {
            right: '0'
          }
        }
      },
      animation: {
        loadingpagechange: 'loadingpagechange 3s linear'
      }
    },
  },
  plugins: [],
}