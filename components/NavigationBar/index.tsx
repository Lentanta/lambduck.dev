import { NavLinkItem } from "./NavLinkItem";
import { NavLinkLogo } from "./NavLinkLogo";

import 'remixicon/fonts/remixicon.css'
import styles from "./styles.module.scss";

export const NavigationBar = (props: any) => {
  return (
    <nav className={styles.navigationBar}>
      <div className={styles.navigationContentWrapper}>
        <div className={styles.navigationBarContent}>
          <NavLinkItem content="Lentanta" href="/" withBorder />
          <NavLinkItem content="Useful websites" href="/useful-websites" />
        </div>

        <div className={styles.navigationBarContent}>
          <NavLinkLogo size={42} href="https://github.com/Lentanta" />
        </div>
      </div>
    </nav>
  );
};
