
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Yahan hum apne custom colors add kar rahe hain
      colors: {
        'brand-purple': '#8A2BE2', // Main purple color for accents
        'brand-light-purple': '#F3E8FF', // Selected answer ka background
        'brand-dark-text': '#333333', // Questions ke liye dark text
        'brand-light-text': '#6B7280', // Options ke liye halka text
        'brand-background': '#F9F7FF', // Main background color
        'brand-wrong': '#FF4136', // Galat answer ke liye Red
        'brand-right': '#2ECC40', // Sahi answer ke liye Green
      },
    },
  },
  plugins: [],
}