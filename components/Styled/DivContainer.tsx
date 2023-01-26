import styled from "styled-components";

import { css } from "styled-components";

import {
  flexbox,
  FlexboxProps,
  display,
  DisplayProps
} from "styled-system";

export const StyledBox = css<FlexboxProps & DisplayProps>`
  ${flexbox}
  ${display}
`;

type DivContainerProps = {
  gap?: number;
};

export const DivContainer = styled.div<FlexboxProps & DisplayProps & DivContainerProps>`
  ${StyledBox}
  gap: ${({ gap }: any) => gap ? gap : 0}px;
`;