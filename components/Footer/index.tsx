import { Typography } from "@components/Styled/Typography";
import styled from "styled-components";
import { version } from "../../package.json";

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
          Version: {version}
        </Typography.Caption>
      </div>
    </FooterContainer>
  )
}