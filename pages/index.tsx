import type { NextPage } from "next";
import { useRouter } from 'next/router'
import React, { useRef, RefObject, useEffect } from "react";

import { PageWrapper } from "@layouts/PageWrapper";
import { SectionWrapper } from "@layouts/SectionWrapper";
import { ThemeSelection } from "@layouts/Sections/ThemeSelection";

import { Typography } from "@components/Styled/Typography";
import { AnimationHeaderWrapper } from "@components/AnimationHeaderWrapper";

import { useThemeStore } from "@store/themeStore"
import { useConfigStore } from "@store/configStore"
import { AnimationConfig } from "@layouts/Sections/AnimationConfig";

const Home: NextPage = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", (url) => { console.log("Loading...", url) });
    router.events.on("routeChangeComplete", (url) => { console.log("Done", url) });

    return () => {
      router.events.off("routeChangeStart", (url) => { console.log("Loading...", url) });
      router.events.off("routeChangeComplete", (url) => { console.log("Done", url) });
    };
  }, [])

  const theme = useThemeStore(
    (state) => state.theme)
  const changeTheme = useThemeStore(
    (state) => state.changeTheme)
  const changeAnimationType = useConfigStore(
    (state) => state.changeAnimationType);

  const scrollToElm = (element: RefObject<HTMLDivElement>) => {
    if (element && element.current) {
      element.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      })
    };
  };

  const handleClickTheme = (theme: any) => {
    changeTheme(theme);
  };

  const handleChangeAnimationType = (type: number) => {
    changeAnimationType(type);
    if (window && window.innerWidth < 768) {
      scrollToElm(canvasRef);
    }

  };

  return (
    <PageWrapper>
      <AnimationHeaderWrapper innerRef={canvasRef}>
        <Typography.H1 theme={theme}>
          Hi, I'm Tam
        </Typography.H1>
        <Typography.Body theme={theme}>
          Welcome to my website 🌱
        </Typography.Body>
        <Typography.Body theme={theme}>
          Currently, I'm working as a full-stack web developer 💻.
          I like to make silly useless stuffs for fun,
          love drawing and learning new things.
        </Typography.Body>
      </AnimationHeaderWrapper>

      <SectionWrapper>
        <ThemeSelection
          theme={theme}
          onSelectTheme={handleClickTheme} />
      </SectionWrapper>

      <SectionWrapper>
        <AnimationConfig
          theme={theme}
          onSelectAnimation={handleChangeAnimationType} />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default Home;
