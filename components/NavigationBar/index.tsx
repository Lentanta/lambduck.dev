import Link from "next/link";

import styles from "./styles.module.scss";

export const NavigationBar = (props: any) => {
  return (
    <nav>
      <div className={styles.navigationBar}>
        <div className={styles.navigationContent}>
          <div className={styles.leftSection}>
            <div className={styles.pageLogo}>
              <Link href="/">
                <a>Lentanta</a>
              </Link>
            </div>

            <a href="/useful-websites">
              <div className={styles.linkItem}>[Useful websites]</div>
            </a>
          </div>

          <div className={styles.rightSection}>
            <div className={styles.pageLogo}>
              <Link href="/">
                <a>Github</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
