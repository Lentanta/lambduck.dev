import styled from "styled-components";

import { motion } from "framer-motion";
import { Link } from "@components/Styled/Link";

export const HeaderContentContainer = styled.div`
  max-width:  1024px;
  margin: auto;
`;

export const LinkWithBorder = styled(Link)`
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 4px;

  padding: 12px 18px;
  font-size: 20px;

  &:hover {
    color: ${({ theme }) => theme.success};
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.success};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 25px 20px;
`;

export const ExtendedNav = styled(motion.nav)`
  background-color: ${({ theme }) => theme.contentBg};
  border-radius: 4px;

  line-height:0;
  height: 0;
  overflow: hidden;
`;