import type { NextPage } from "next";
import { useRef } from "react";
import styled from "styled-components";

import { PageWrapper } from "@layouts/PageWrapper";
import { SectionWrapper } from "@layouts/SectionWrapper";
import { Typography } from "@components/Styled/Typography";
import { DivContainer } from "@components/Styled/DivContainer";
import { Button } from "@components/Styled/Button";
import { CanvasHeaderWrapper } from "@components/CanvasHeaderWrapper";
import { ThemeSelector } from "@components/ThemeSelector";

import { useThemeStore } from "@store/themeStore"
import { useConfigStore } from "@store/configStore"

import { animationTypeNames } from "@utils/constant";

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
    gap: 20px;
  }
`;

const Home: NextPage = () => {
  const canvasRef = useRef<HTMLDivElement>(null)

  const theme = useThemeStore(
    (state: any) => state.theme)
  const changeTheme = useThemeStore(
    (state: any) => state.changeTheme)
  const changeAnimationType = useConfigStore(
    (state) => state.changeAnimationType);

  const handleClickTheme = (theme: any) => {
    changeTheme(theme);
  };

  const handleChangeAnimationType = (name: string) => {
    changeAnimationType(name);
    console.log(canvasRef.current)
    if(canvasRef.current){
      canvasRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      })
    }
  };

  return (
    <PageWrapper>
      <CanvasHeaderWrapper innerRef={canvasRef}>
        <Typography.H1 theme={theme}>
          Hi, I'm Tam
        </Typography.H1>
        <Typography.Body theme={theme}>
          Welcome to my website 🌱
        </Typography.Body>
        <Typography.Body theme={theme}>
          Currently, I'm working as a full-stack web developer 💻. I like to make silly useless stuffs for fun, love drawing and learning new things.
        </Typography.Body>
      </CanvasHeaderWrapper>

      <SectionWrapper>
        <FlexBox>
          <DivContainer display="flex" flexDirection="column" flex={1} gap={10}>
            <Typography.H3 theme={theme}>Theme <b>[ {theme.name} ]</b></Typography.H3>
            <ThemeSelector onClickTheme={handleClickTheme} />
          </DivContainer>

          <DivContainer display="flex" flexDirection="column" flex={1} gap={10}>
            <Typography.H3 theme={theme}>Animation background</Typography.H3>
            {Object.values(animationTypeNames).map((name: string) => (
              <Button theme={theme} onClick={() => handleChangeAnimationType(name)}>
                <Typography.Body theme={theme}>
                  {name}
                </Typography.Body>
              </Button>
            ))}
          </DivContainer>
        </FlexBox>
      </SectionWrapper>
    </PageWrapper >
  );
};

export default Home;
