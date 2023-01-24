import Head from "next/head";
import React from "react";
import styled from "styled-components";

import { NavigationBar } from "@components/NavigationBar"
import { Footer } from "@components/Footer";

import { useThemeStore } from "@store/themeStore";

export const MainContainer = styled.main`
  width: 1024px;
  margin: auto;
  height: 100%;
  background-color: ${({ theme }) => theme.contentBg};

  padding-bottom: 30px;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const PageWrapper = (props: any) => {
  const { children } = props;
  const theme = useThemeStore(
    (state: any) => state.theme)

  return (
    <React.Fragment>
      <Head>
        <title>Lentanta</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Lentanta website" />
        <meta name="author" content="Lentanta" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <NavigationBar />

      <MainContainer theme={theme}>
        {children}
      </MainContainer>

      <Footer />
    </React.Fragment>
  )
};