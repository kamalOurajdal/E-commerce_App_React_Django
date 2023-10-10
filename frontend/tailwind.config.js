/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
      '50vh': '50vh', // Add a custom height value
      '80vh': '80vh', // Add another custom height value
      'custom-height': '200px', // You can also use fixed pixel values
    },
  },
  },
  plugins: [],
}

