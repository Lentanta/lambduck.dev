import { NavLinkLogo } from "./NavLinkLogo";
import { Link } from "@components/Styled/Link";

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

const Box = styled.div<FlexboxProps & DisplayProps>`
  ${flexbox}
  ${display}
  gap: 10px;
`;

const NavigationBarContainer = styled.nav<FlexboxProps & DisplayProps>`
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


export const NavigationBar = (props: any) => {
  const [isExtended, setIsExtended] = useState<boolean>(false);

  return (
    <NavigationBarContainer>
      <ContentWrapper>
        <Box display="flex" alignItems="center">
          <LinkWithBorder href="/">Lentanta</LinkWithBorder>
          {/* <Link href="/useful-websites">Useful websites</Link> */}
        </Box>

        <Box display="flex" alignItems="center">
          {/* <NavLinkLogo size={42} href="https://github.com/Lentanta" /> */}
          <Button onClick={() => setIsExtended(!isExtended)}>
            <Icon iconName="ri-menu-line" size={24} />
          </Button>
        </Box>
      </ContentWrapper>

      {isExtended && (
        <div>
          <Link href="/useful-websites">Useful websites</Link>
        </div>
      )}
    </NavigationBarContainer>
  );
};
