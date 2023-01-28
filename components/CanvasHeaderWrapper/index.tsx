import dynamic from 'next/dynamic'
import styled from "styled-components";

import { useThemeStore } from "@store/themeStore";
import { useConfigStore } from "@store/configStore";

const P5JSCanvas = dynamic<any>(
  () => import('./P5JSCanvas')
    .then(module => module.P5JSCanvas),
  { ssr: false }
);

const StyledContainer = styled.div`
  position: relative;
  min-height: 512px;
  max-width: 1024px;
`;

const StyledContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  
  margin: auto;
  height: 512px;
  max-width: 1024px;

  @media only screen and (max-width: 768px) {
    height: 512px;
  }
`;

const ContentContainer = styled.div`
  max-width: 632px;
  backdrop-filter: blur(12px);
  background-color: ${({ theme }) => theme.contentBg + "4D"};

  border-radius: 12px;
  padding: 35px 40px;

  margin-top: 50px;
  margin-left: 50px;

  @media only screen and (max-width: 1024px) {
    margin: 10%;
  }
 `;

export const CanvasHeaderWrapper = (props: any) => {
  const { children, innerRef } = props;
  const theme = useThemeStore(
    (state: any) => state.theme)
  const animationType = useConfigStore(
    (state) => state.animationType);

  return (
    <StyledContainer ref={innerRef}>
      <P5JSCanvas
        theme={theme}
        animationType={animationType}
      />

      {children && (
        <StyledContent>
          <ContentContainer theme={theme}>
            {children}
          </ContentContainer>
        </StyledContent>
      )}
    </StyledContainer>
  )
}