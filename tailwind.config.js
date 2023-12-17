/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: [`var(--font-nunito)`]
      },
      colors: {
        "color-1": "#000000",
        "color-2": "#F4DFC8",
        "color-3": "#F4EAE0",
        "color-4": "white"
      },
      screens: {

      }
    },
  },
}

