import { Link } from "@components/Styled/Link";
import {
  StyledIcon,
  HeaderContentContainer
} from "./styled"

import styled from "styled-components";
import {
  flexbox,
  FlexboxProps,
  display,
  DisplayProps
} from "styled-system";

import 'remixicon/fonts/remixicon.css'
import { Button } from "@components/Styled/Button";
import { Icon } from "@components/Icon";
import { Typography } from "@components/Styled/Typography";
import { useState } from "react";
import { motion } from "framer-motion";

const Box = styled.div<FlexboxProps & DisplayProps>`
  ${flexbox}
  ${display}
  gap: 10px;
`;

const Header = styled.header<FlexboxProps & DisplayProps>`
  ${flexbox}
  ${display}
`;

const ContentWrapper = styled.div`
  padding: 25px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LinkWithBorder = styled(Link)`
  border: 2px solid #EBDBB2;
  border-radius: 4px;

  padding: 15px 20px;
  font-size: 20px;

  &:hover {
    color: #99B898;
    cursor: pointer;
    border: 2px solid #99B898;
  }
`;

const ExtendedNavItems = styled(motion.nav) <any>`
  /* display: ${props => props.isExtended ? "block" : "none"}; */
  background-color: #32302f;
  border-radius: 4px;

  line-height:0;
  height: 0;
  overflow: hidden;
`;

const variants = {
  closed: {
    height: 0,
    transitionEnd: {
      display: "none",
    },
  },
  open: {
    display: "block",
    height: "auto",
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
  const [isExtended, setIsExtended] = useState<boolean>(false);

  const handleClickButton = () => {
    setIsExtended((prevState) => !prevState);
  };

  return (
    <Header>
      <HeaderContentContainer>
        <ContentWrapper>
          <Box display="flex" alignItems="center">
            <LinkWithBorder href="/">Lentanta</LinkWithBorder>
            {/* <Link href="/useful-websites">Useful websites</Link> */}
          </Box>

          <Box display="flex" alignItems="center">
            {/* <NavLinkLogo size={42} href="https://github.com/Lentanta" /> */}
            {/* <Button onClick={() => setIsExtended(!isExtended)}> */}
            <Button onClick={handleClickButton}>
              <Icon iconName="ri-menu-line" size={24} />
            </Button>
          </Box>
        </ContentWrapper>


        <ExtendedNavItems isExtended={isExtended}
          animate={isExtended ? "open" : "closed"}
          variants={variants}>
          <StyledList>
            <StyledListItem>
              <StyledLink href="/" onClick={() => setIsExtended(false)}>
                Home
              </StyledLink>
            </StyledListItem>

            <StyledListItem>
              <StyledLink href="/useful-websites" onClick={() => setIsExtended(false)}>
                Useful websites
              </StyledLink>
            </StyledListItem>

            <StyledListItem>
              <StyledLink href="https://github.com/Lentanta" target="_blank">
                My github
                (<Icon size={27} iconName="ri-github-fill" />)
              </StyledLink>
            </StyledListItem>
          </StyledList>
        </ExtendedNavItems>

      </HeaderContentContainer>
    </Header>
  );
};
