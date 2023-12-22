/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        "primary": "#2DC7FF",
        "secondary": "#EAD2AC",
      },
      screens: {
        sm: { max: "768px" },
        md: { max: "992px" }
      }
    },
  },
  plugins: [],
};