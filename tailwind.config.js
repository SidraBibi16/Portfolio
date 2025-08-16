/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        primary: '#6366F1', // indigo-500
        background: '#F9FAFB',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
