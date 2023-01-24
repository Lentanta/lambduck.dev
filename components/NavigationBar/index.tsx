import { useState } from "react";
import { useThemeStore } from "@store/themeStore";
import styled from "styled-components";

import {
  flexbox,
  FlexboxProps,
  display,
  DisplayProps
} from "styled-system";

import { Link } from "@components/Styled/Link";
import { Button } from "@components/Styled/Button";
import { Icon } from "@components/Icon";

import {
  LinkWithBorder,
  ContentWrapper,
  ExtendedNav,
  HeaderContentContainer
} from "./styled"

import 'remixicon/fonts/remixicon.css';

const Box = styled.div<FlexboxProps & DisplayProps>`
  ${flexbox}
  ${display}
`;

const variants = {
  closed: {
    height: 0,
    transitionEnd: {
      display: "none",
    },
  },
  open: {
    height: "auto",
    display: "block",
    marginRight: "25px",
    marginLeft: "25px",
    marginBottom: "25px",
  }
};

const StyledList = styled.ul`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;


export const NavigationBar = (props: any) => {
  const theme = useThemeStore(
    (state: any) => state.theme)

  const [isExtended, setIsExtended] = useState<boolean>(false);

  const handleClickButton = () => {
    setIsExtended((prevState) => !prevState);
  };

  return (
    <header>
      <HeaderContentContainer>
        <ContentWrapper>
          <Box display="flex" alignItems="center">
            <LinkWithBorder href="/" theme={theme}>
              Lentanta
            </LinkWithBorder>
          </Box>

          <Box display="flex" alignItems="center">
            <Button theme={theme} onClick={handleClickButton}>
              <Icon iconName="ri-menu-line" size={24} color={theme.text} />
            </Button>
          </Box>
        </ContentWrapper>


        <ExtendedNav
          theme={theme}
          animate={isExtended ? "open" : "closed"}
          variants={variants}>
          <StyledList>
            <StyledListItem>
              <StyledLink href="/" onClick={() => setIsExtended(false)} theme={theme}>
                Home
              </StyledLink>
            </StyledListItem>

            <StyledListItem>
              <StyledLink href="/useful-websites" onClick={() => setIsExtended(false)} theme={theme}>
                Useful websites
              </StyledLink>
            </StyledListItem>

            <StyledListItem>
              <StyledLink href="https://github.com/Lentanta" target="_blank" theme={theme}>
                My github
                (<Icon size={27} iconName="ri-github-fill" color={theme.text} />)
              </StyledLink>
            </StyledListItem>
          </StyledList>
        </ExtendedNav>

      </HeaderContentContainer>
    </header>
  );
};
