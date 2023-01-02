import styled from "styled-components";
import { Roboto_Slab } from "@next/font/google"
import { color, desktopFontSize } from "@styles/style-constant";

const robotoSlab = Roboto_Slab({
  subsets: ["latin", "vietnamese"]
});

// line height = font size * 1.5

// 34px
const H1 = styled.h1`
  font-size: 2.125em;
  font-family: ${robotoSlab.style.fontFamily};
  line-height: 51px;
  color: ${color.text};
`;

// 28px
const H2 = styled.h2`
  font-size: 1.75em;
  font-family: ${robotoSlab.style.fontFamily};
  line-height: 42px;
  color: ${color.text};
`;

// 24px
const H3 = styled.h3`
  font-size: 1.5em;
  font-family: ${robotoSlab.style.fontFamily};
  line-height: 36px;
  color: ${color.text};
`;

// 18px
const Body = styled.p`
  font-size: 1.125em;
  font-family: ${robotoSlab.style.fontFamily};
  line-height: 27px;
  color: ${color.text};
`;

export const Typography = {
  H1, H2, H3, Body
};
