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
        "mildly-green-white": "#f0f6f0",
        "mildly-cyan-black": "#222323",
      },
      screens: {

      }
    },
  },
}

