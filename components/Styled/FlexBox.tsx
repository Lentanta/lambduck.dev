import styled from "styled-components";

import {
  flexbox,
  FlexboxProps,
} from "styled-system";

export const FlexBox = styled.div<FlexboxProps & { gap?: number }>`
  ${flexbox}
  display: flex;
  gap: ${({ gap }) => gap ? gap : 0}px;
`;