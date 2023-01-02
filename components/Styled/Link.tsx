import NextLink from 'next/link'

import styled from "styled-components";
import { color } from "@styles/style-constant";
import { Typography } from "@components/Styled/Typography"

const StyledBody = styled(Typography.Body)`
  &:hover {
    color: #${color.lightBlue};
  }
`;

const Link = styled(NextLink)`
  
`;