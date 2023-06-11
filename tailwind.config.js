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
        "A1": "#fffcfb",
        "A2": "#edf4f5",
        "A3": "#393e41",
      },
      screens: {

      }
    },
  },
}

