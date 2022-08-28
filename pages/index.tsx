import type { NextPage } from 'next'
import Head from 'next/head'

import { NavigationBar } from '../components/NavigationBar';
import { MainPageHOC } from '../components/MainPageHOC';

import styles from "./styles.module.scss";
import { Fragment } from 'react';

const Home: NextPage = () => {
  
  return (
    <div>
      <Head>
        <title>Lentanta</title>
        <meta name="description" content="Letanta website" /> 
      </Head>

      <MainPageHOC>
        <Fragment>
          <section>
            <h1 className={styles.bigTitle}>Hi, my name is <span className={styles.orangeText}>Lê Thanh Tâm</span></h1>
            <p className={styles.text}>[Full-time <span className={styles.orangeText}>web developer</span>]</p>
          </section>

          <section style={{marginTop: "30px"}}>
            <p className={styles.text}> I'm a <span className={styles.aquaText}>curious developer</span> and have a passion in <span className={styles.orangeText}>game developement</span></p>
            <p className={styles.text}> I also love to draw <span className={styles.aquaText}>pixel art</span></p>
          </section>
        </Fragment>
      </MainPageHOC>

      <footer>

      </footer>
    </div>
  )
}

export default Home
