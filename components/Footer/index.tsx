import { Typography } from "@components/Styled/Typography";
import styled from "styled-components";
import packageInfo from "../../package.json";

import { useThemeStore } from "@store/themeStore";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 35px 0;
`;

export const Footer = () => {
  const theme = useThemeStore(
    (state: any) => state.theme)

  return (
    <FooterContainer>
      <div>
        <Typography.Body textAlign={"center"} theme={theme}>
          Made by me (Lentanta)
        </Typography.Body>
        <Typography.Caption textAlign={"center"} theme={theme}>
          Version: {packageInfo.version}
        </Typography.Caption>
      </div>
    </FooterContainer>
  )
}