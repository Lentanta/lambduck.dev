import type { NextPage } from "next";
import { useRouter } from 'next/router'
import { Nunito } from "@next/font/google"

import React, { useRef, RefObject, useEffect } from "react";
import clsx from 'clsx';

import { PageWrapper } from "@layouts/PageWrapper";
import { SectionWrapper } from "@layouts/SectionWrapper";
import { ThemeSelection } from "@layouts/Sections/ThemeSelection";

import { Typography } from "@components/Styled/Typography";
import { AnimationHeaderWrapper } from "@components/AnimationHeaderWrapper";

import { useThemeStore } from "@store/themeStore"
import { useConfigStore } from "@store/configStore"
import { AnimationConfig } from "@layouts/Sections/AnimationConfig";

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

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

      <div className="w-full h-[600px] flex justify-center items-center">
        <div className="m-auto w-fit h-fit">
          <h1 className={clsx(
            nunito.className,
            "text-5xl text-center font-bold"
          )}>Hi, I'm Letanta</h1>
          <p className={clsx(
            nunito.className,
            "text-2xl text-center"
          )}>Welcome to my website 🌱</p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="m-auto w-[1024px] h-[600px] bg-[#FFFCFB] flex justify-evenly items-center">
          <div className="w-[400px] h-[400px] bg-slate-200 rounded" />

          <div>
            <h2 className={clsx(
              nunito.className,
              "text-3xl text-left font-bold"
            )}>
              About me
            </h2>
            <p className={clsx(
              nunito.className,
              "text-lg text-left"
            )}>Currently, I'm working as a full-stack developer.</p>
            <p className={clsx(
              nunito.className,
              "text-lg text-left"
            )}>I love to code silly useless stuffs for fun.</p>
          </div>

        </div>
      </div>
      {/* <AnimationHeaderWrapper innerRef={canvasRef}>
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
      </SectionWrapper> */}
    </PageWrapper>
  );
};

export default Home;
