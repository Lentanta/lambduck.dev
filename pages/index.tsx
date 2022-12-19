import type { NextPage } from "next";
import Head from "next/head";

import { MainPageHOC } from "../components/MainPageHOC";

import styles from "./styles.module.scss";
import { Fragment, useEffect } from "react";
import { TopHeaderTitle } from "../components/TopHeaderTitle";
import { NavigationBar } from "@components/NavigationBar";

const Home: NextPage = () => {

  const rdnNum = Math.floor(Math.random() * 2);
  const imgUrl = rdnNum > 0
    ? "url('/images/dalat-light-v1.jpg')"
    : "url('/images/dalat-v1.jpg')"

  return (
    <div style={{ height: "5000px" }}>
      <Head>
        <title>Lentanta</title>
        <meta name="description" content="Letanta website" />
      </Head>

      <NavigationBar />
      <TopHeaderTitle imageUrl="/images/dalat-v1.jpg"/>

      {/* <div className={styles.headerTitleSection}> */}
        {/* <div className={styles.headerTitleContent}>
          <h1 style={{ fontSize: "38px", marginBottom: "20px" }}>Hi, I'm Tam</h1>
          <p style={{ fontSize: "20px" }}>I'm a full-stack web developer who create some silly useless stuffs for fun. I really curious to learn new things, love drawing, and have a passion for game developement</p>
        </div> */}

        {/* <div className={styles.headerShadow} /> */}

        
      {/* </div> */}
      <footer>

      </footer>
    </div>
  );
};

export default Home;
