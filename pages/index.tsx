import type { NextPage } from "next";
import { useRouter } from 'next/router'
import { Nunito } from "@next/font/google"

import Head from "next/head";
import React, { useRef, RefObject, useEffect } from "react";
import clsx from 'clsx';

import { PageWrapper } from "@layouts/PageWrapper";
import { SectionWrapper } from "@layouts/SectionWrapper";
import { ThemeSelection } from "@layouts/Sections/ThemeSelection";

import { NavigationBar } from "@components/NavigationBar"
import { Footer } from "@components/Footer";
import { Typography } from "@components/Styled/Typography";
import { AnimationHeaderWrapper } from "@components/AnimationHeaderWrapper";

import { useThemeStore } from "@store/themeStore"
import { useConfigStore } from "@store/configStore"
import { AnimationConfig } from "@layouts/Sections/AnimationConfig";
import { ColorDotAnimation } from "@components/ColorDotAnimation";

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

const HomePageHeader = () => {
  return (
    <div className="w-full h-[720px] flex justify-center items-center">
      <div className="m-auto w-fit h-fit">
        <h1 className={clsx(
          nunito.className,
          "text-5xl text-center font-bold ",
          "text-[#7E6F73]",
        )}>Hi, I'm Letanta</h1>

        <p className={clsx(
          nunito.className,
          "text-2xl text-center text-[#7E6F73] "
        )}>Welcome to my website 🌱</p>
      </div>
    </div>
  )
}

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

  return (
    <>
      <PageWrapper>
        <HomePageHeader />

        <div className="w-full flex justify-center items-center">
          <div className="m-auto w-[1024px] h-[600px] bg-[#FFFCFB] flex justify-evenly items-center shadow-lg">
            <div>
              <div className="w-[320px] h-[320px]">
                <ColorDotAnimation />
              </div>
              <h2 className={clsx(nunito.className, "text-xl font-semibold text-center text-[#7E6F73] mt-3")}>
                Color dot
              </h2>
              <p className={clsx(nunito.className, "text-base text-center text-[#7E6F73]")}>
                Made with p5js
              </p>
            </div>

            <div>
              <h2 className={clsx(nunito.className, "text-3xl text-left font-bold text-[#7E6F73]")}>
                About me
              </h2>

              <p className={clsx(nunito.className, "text-lg text-left text-[#7E6F73]")}>
                Currently, I'm working as a full-stack developer.
              </p>
              <p className={clsx(nunito.className, "text-lg text-left text-[#7E6F73]")}>
                I love to code silly useless stuffs for fun.
              </p>
            </div>
          </div>
        </div>

        <div className="h-[300px]" />
      </PageWrapper>
    </>
  );
};

export default Home;
