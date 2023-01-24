import type { NextPage } from "next";

import { PageWrapper } from "@layouts/PageWrapper";
import { SectionWrapper } from "@layouts/SectionWrapper";
import { Typography } from "@components/Styled/Typography";
import { CanvasHeaderWrapper } from "@components/CanvasHeaderWrapper";
import { ThemeSelector } from "@components/ThemeSelector";

import { useThemeStore } from "@store/themeStore"

const Home: NextPage = () => {
  const theme = useThemeStore(
    (state: any) => state.theme)
  const changeTheme = useThemeStore(
    (state: any) => state.changeTheme)

  const handleClickTheme = (theme: any) => {
    changeTheme(theme);
  };

  return (
    <PageWrapper>
      <CanvasHeaderWrapper>
        <Typography.H1 theme={theme}>
          Hi, I'm Tam
        </Typography.H1>
        <Typography.Body theme={theme}>
          I'm a full-stack web developer who create some silly useless stuffs for fun. I really curious to learn new things, love drawing, and have a passion for game development.
        </Typography.Body>
      </CanvasHeaderWrapper>
      {/* 
      <SectionWrapper title={"My website colors"}>
        <button onClick={() => changeTheme(themes[0])}>AAA</button>
        <button onClick={() => changeTheme(themes[1])}>BBB</button>
      </SectionWrapper> */}

      <SectionWrapper title={"Choose your favorite theme"}>
        <ThemeSelector onClickTheme={handleClickTheme} />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default Home;
