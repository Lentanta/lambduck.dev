import type { NextPage } from "next";
import Head from "next/head";

import { MainPageWrapper } from "../components/MainPageWrapper";

import styles from "./styles.module.scss";
import { Fragment, useEffect } from "react";
import { TopHeaderTitle } from "../components/TopHeaderTitle";
import { NavigationBar } from "@components/NavigationBar";
import { ColorDot } from "@components/ColorDot";
import { StyledMain } from "@components/Styled/StyledMain";

const Home: NextPage = () => {

  const rdnNum = Math.floor(Math.random() * 2);
  const imgUrl = rdnNum > 0
    ? "url('/images/dalat-light-v1.jpg')"
    : "url('/images/dalat-v1.jpg')"

  return (
    <div>
      <Head>
        <title>Lentanta</title>
        <meta name="description" content="Letanta website" />
      </Head>

      <StyledMain>
        <NavigationBar />
        <TopHeaderTitle imageUrl="/images/dalat-v1.jpg" />

        <ColorDot colorHex="#2A363B" />
        <ColorDot colorHex="#E84A5F" />
        <ColorDot colorHex="#FF847C" />
        <ColorDot colorHex="#FECEA8" />
        <ColorDot colorHex="#99B898" />
      </StyledMain>

      <footer>

      </footer>
    </div>
  );
};

export default Home;
