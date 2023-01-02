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
        <meta name="description" content="Letanta website" />
      </Head>

      <NavigationBar />
      {children}
      <Footer />
    </MainContainer>
  )
};