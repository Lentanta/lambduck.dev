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
      <div>
        <Typography.Body textAlign={"center"}>
          Made by me (Lentanta)
        </Typography.Body>
        <Typography.Caption textAlign={"center"}>
          Version: 2.1.0
        </Typography.Caption>
      </div>
    </FooterContainer>
  )
}