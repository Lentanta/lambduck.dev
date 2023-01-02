import Head from "next/head";

import { NavigationBar } from "@components/NavigationBar"
import { MainContainer } from "@components/Styled/MainContainer"
import { Footer } from "@components/Footer";

export const PageWrapper = (props: any) => {
  const { children } = props;

  return (
    <MainContainer>
      <Head>
        <title>Lentanta</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Lentanta website" />
        <meta name="author" content="Lentanta" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <NavigationBar />
      {children}
      <Footer />
    </MainContainer>
  )
};