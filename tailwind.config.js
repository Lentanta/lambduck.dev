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
        "gruvbox-light-bg-hard": "#f9f5d7",
        "gruvbox-light-bg-soft": "#f2e5bc",
        "gruvbox-light-bg":   "#fbf1c7",
        "gruvbox-light-bg-1":  "#ebdbb2",
        "gruvbox-light-bg-2":  "#d5c4a1",
        "gruvbox-light-bg-3":  "#bdae93",
        "gruvbox-light-bg-4":  "#a89984",
      
        "gruvbox-light-fg":  "#282828",
        "gruvbox-light-fg-1": "#3c3836",
        "gruvbox-light-fg-2": "#504945",
        "gruvbox-light-fg-3": "#665c54",
        "gruvbox-light-fg-4": "#7c6f64",
      
        "gruvbox-light-red":    "#9d0006",
        "gruvbox-light-green":  "#79740e",
        "gruvbox-light-yellow": "#b57614",
        "gruvbox-light-blue":   "#076678",
        "gruvbox-light-purple": "#8f3f71",
        "gruvbox-light-aqua":   "#427b58",
        "gruvbox-light-orange": "#af3a03",
        "gruvbox-light-gray":   "#928374",
      
        "gruvbox-light-red-dim":    "#cc2412",
        "gruvbox-light-green-dim":  "#98971a",
        "gruvbox-light-yellow-dim": "#d79921",
        "gruvbox-light-blue-dim":   "#458598",
        "gruvbox-light-purple-dim": "#b16286",
        "gruvbox-light-aqua-dim":   "#689d6a",
        "gruvbox-light-orange-dim": "#d65d0e",
        "gruvbox-light-gray-dim":   "#7c6f64",
      },
      screens: {

      }
    },
  },
}

