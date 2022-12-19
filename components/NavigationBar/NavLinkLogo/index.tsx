import Link from 'next/link'
import { Icon } from "../../Icon"
import styles from "./styles.module.scss"

export const NavLinkLogo = (props: any) => {
  const { size, href } = props;

  const MAGIC_NUMBER_A = 9;
  const MAGIC_NUMBER_B = 42;

  // Nhan cheo chia ngang
  const sizeCalculate = MAGIC_NUMBER_A * size / MAGIC_NUMBER_B;

  return (
    <Link href={href} target="_blank">
      <div className={styles.navigationLinkLogo} style={{ padding: `${sizeCalculate}px` }}>
        <Icon iconName="ri-github-fill" size={size} />
      </div>
    </Link>
  )
}