/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/ui/**/*.tsx"
  ],
  theme: {
    extend: {
      // if you imported the shadcn theme file:
      colors: require("./src/theme/colors"),
      fontFamily: {
        inter: ["Inter", "sans‑serif"],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // optional, if you want the animations helper
  ],
}
