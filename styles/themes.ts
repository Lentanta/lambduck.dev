export type Theme = {
  name: string,
  bodyBg: string,
  contentBg: string,
  text: string,
  primary: string,
  secondary: string
};

export const themes = [
  {
    name: "gruvbox",
    bodyBg: "#282828",
    contentBg: "#32302F",
    text: "#EBDBB2",
    primary: "#99B898",
    secondary: "#FF847C"
  },
  {
    name: "bakery shop",
    bodyBg: "#d8e2dc",
    contentBg: "#ffe5d9",
    text: "#9d8189",
    primary: "#f4acb7",
    secondary: "#ffcad4"
  },
  {
    name: "sunset",
    bodyBg: "#84465F",
    contentBg: "#593E67",
    text: "#FEA837",
    primary: "#B85B56",
    secondary: "#DE741C"
  },
  {
    name: "ice cold",
    bodyBg: "#03045E",
    contentBg: "#0077B6",
    text: "#CAF0F8",
    primary: "#90E0EF",
    secondary: "#00B4D8"
  },
  {
    name: "matcha tea",
    bodyBg: "#344e41",
    contentBg: "#3a5a40",
    text: "#dad7cd",
    primary: "#a3b18a",
    secondary: "#588157"
  },
  {
    name: "oranji",
    bodyBg: "#e76f51",
    contentBg: "#f4a261",
    text: "#264653",
    primary: "#2a9d8f",
    secondary: "#e9c46a"
  },
];