import type { NextPage } from 'next'
import Head from 'next/head'

import { MainPageHOC } from '../components/MainPageHOC';

import styles from "./styles.module.scss";
import { Fragment } from 'react';
import { SectionWrapper } from '../components/SectionWrapper';

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Lentanta</title>
        <meta name="description" content="Letanta website" />
      </Head>

      <MainPageHOC>
        <Fragment>
          <SectionWrapper>
            <div style={{ padding: "50px 10px" }}>
              <h1 className={styles.bigTitle}>Hi, my name is <span className={styles.orangeText}>Lê Thanh Tâm</span></h1>

              <section className={styles.intoduceSection}>
                <p className={styles.text}>Currently, I'm working as a </p>
                <p className={styles.text}>full-stack <span className={styles.orangeText}>Web developer</span></p>
              </section>

              <section className={styles.intoduceSection}>
                <p className={styles.text}>A very <span className={styles.aquaText}>curious developer</span> and have a passion for <span className={styles.orangeText}>game developement</span></p>
                <p className={styles.text}>♥ I also love to draw <span className={styles.aquaText}>pixel art</span> ♥</p>
              </section>
            </div>
          </SectionWrapper>

          {/* <SectionWrapper sectionTitle="About me">
            <div style={{ padding: "30px 10px" }}>
              <section>
                <p className={styles.text}>Currently, I'm working as a </p>
                <p className={styles.text}>full-stack <span className={styles.orangeText}>Web developer</span></p>
              </section>
            </div>
          </SectionWrapper> */}
        </Fragment>
      </MainPageHOC>

      <footer>

      </footer>
    </div>
  )
}

export default Home
