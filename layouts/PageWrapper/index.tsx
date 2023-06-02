// import Head from "next/head";
import React from "react";
// import styled from "styled-components";
// import clsx from "clsx";

import { NavigationBar } from "@components/NavigationBar"
import { Footer } from "@components/Footer";

// import { useThemeStore } from "@store/themeStore";

export const PageWrapper = (props: any) => {
  const { children } = props;

  return (
    <>
      {/* <Head>
        <title>Lentanta</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Lentanta website" />
        <meta name="author" content="Lentanta" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head> */}

      <NavigationBar />

      <main className="h-full bg-gradient-to-b from-[#EDF4F5] 0% to-[#FFF4EE] 100%">
        {children}
      </main>

      {/* <Footer /> */}
    </>
  )
};