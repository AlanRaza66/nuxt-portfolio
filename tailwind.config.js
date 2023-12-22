/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        "primary": "#00ABE7",
        "secondary": "#2DC7FF",
      },
      screens: {
        sm: { max: "768px" },
        md: { max: "992px" }
      }
    },
  },
  plugins: [],
};