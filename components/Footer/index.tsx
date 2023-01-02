import { Typography } from "@components/Styled/Typography";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 35px 0;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <Typography.Body>
        Made by me (Lentanta)
      </Typography.Body>
    </FooterContainer>
  )
}