import styled, { css } from "styled-components";
import { typography, TypographyProps } from "styled-system";

import { Roboto_Slab } from "@next/font/google"
import { colors } from "@styles/style-constant";

const robotoSlab = Roboto_Slab({
  subsets: ["latin", "vietnamese"]
});

export const StyledTypography = css<TypographyProps>`
  ${typography}
  font-family: ${robotoSlab.style.fontFamily};
  color: ${colors.text};
`;

// line height = font size * 1.5
// 34px
const H1 = styled.h1`
  ${StyledTypography}
  font-size: 2.125em;
  line-height: 51px;
`;

// 28px
const H2 = styled.h2`
  ${StyledTypography}
  font-size: 1.75em;
  line-height: 42px;
`;

// 24px
const H3 = styled.h3`
  ${StyledTypography}
  font-size: 1.5em;
  line-height: 36px;
`;

// 18px
const Body = styled.p`
  ${StyledTypography}
  font-size: 1.125em;
  line-height: 27px;
`;

// 16px
const Caption = styled.p`
  ${StyledTypography}
  font-size: 1em;
  line-height: 24px;
`;

export const Typography = {
  H1, H2, H3, Body, Caption
};
