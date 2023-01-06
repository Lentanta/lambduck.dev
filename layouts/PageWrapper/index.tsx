import Head from "next/head";

import { NavigationBar } from "@components/NavigationBar"
import { Footer } from "@components/Footer";

import styled from "styled-components";
import React from "react";

export const MainContainer = styled.main`
  width: 1024px;
  margin: auto;
  height: 100%;
  background-color: #32302F;

  @media  (width < 1024px) {
    width: 100%;
  }
`;

export const PageWrapper = (props: any) => {
  const { children } = props;

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

      <MainContainer>
        {children}
      </MainContainer>

      <Footer />
    </React.Fragment>
  )
};