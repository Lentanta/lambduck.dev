import styles from "./styles.module.scss";

import { NavigationBar } from "../NavigationBar"
import { Fragment } from "react";

type propsType = {
  children: JSX.Element
}

export const MainPageHOC = ({ children }: propsType) => {
  return (
    <Fragment>
      <NavigationBar />
      <main className={styles.main}>
        {children}
      </main>
    </Fragment>
  )
}