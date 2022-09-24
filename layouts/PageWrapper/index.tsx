import { NavigationBar } from "@components/NavigationBar"

import styles from "./styles.module.scss";

export const PageWrapper = (props: any) => {
  const { children, pageName } = props;

  return (
    <div>
      <NavigationBar pageName={pageName}/>
      <div className={styles.pageWrapperStyle}>
        {children}
      </div>
    </div>
  )
};