/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
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
        "color-light": "#FFFFFF",
        dark: {
          bg: "#282828",
          bg0_h: "#1d2021",
          bg1: "#3C3836",
          bg2: "#504945",
          bg3: "#665c54",

          fg0: "#fbf1c7",
          fg1: "#ebdbb2",

          blue1: "#458588",
          blue2: "#83a598",
          red1: "#cc241d",
          red2: "#fb4934",
          yellow1: "#d79921",
          yellow2: "#fabd2f"
        },
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
})
