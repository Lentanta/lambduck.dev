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
        nunito: [`var(--font-nunito)`],
        notoSans: [`var(--font-notoSans)`]
      },
      colors: {
        "color-dark": "#000000",
        "color-light": "#FFFFFF"
      },
      fontSize: {
        title: [
          "2.25rem",
        ],
        subTitle: [
          "1.5rem",
        ],
        smallSubTitle: [
          "1.25rem",
        ],
        body: [
          "1rem",
        ]
      }
    },
  },
}

