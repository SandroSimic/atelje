/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       "background-primary": "#363636",
       "background-primary-transparent": "rgba(0, 0, 0, 0.3)",
       "background-secondary": "#BBBBBB",
       "background-white": "#F4F3F2"
      },
    },
  },
  plugins: [],
};
