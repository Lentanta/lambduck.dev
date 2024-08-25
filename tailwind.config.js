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
        "dark0_hard": "#1d2021",
        "dark0": "#282828",
        "dark0_soft": "#32302f",
        "dark1": "#3c3836",
        "dark2": "#504945",
        "dark3": "#665c54",
        "dark4": "#7c6f64",

        "gray": "#928374",

        "light0_hard": "#f9f5d7",
        "light0": "#fbf1c7",
        "light0_soft": "#f2e5bc",
        "light1": "#ebdbb2",
        "light2": "#d5c4a1",
        "light3": "#bdae93",
        "light4": "#a89984",

        "bright_red": "#fb4934",
        "bright_green": "#b8bb26",
        "bright_yellow": "#fabd2f",
        "bright_blue": "#83a598",
        "bright_purple": "#d3869b",
        "bright_aqua": "#8ec07c",
        "bright_orange": "#fe8019",

        "neutral_red": "#cc241d",
        "neutral_green": "#98971a",
        "neutral_yellow": "#d79921",
        "neutral_blue": "#458588",
        "neutral_purple": "#b16286",
        "neutral_aqua": "#689d6a",
        "neutral_orange": "#d65d0e",

        "faded_red": "#9d0006",
        "faded_green": "#79740e",
        "faded_yellow": "#b57614",
        "faded_blue": "#076678",
        "faded_purple": "#8f3f71",
        "faded_aqua": "#427b58",
        "faded_orange": "#af3a03"
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
