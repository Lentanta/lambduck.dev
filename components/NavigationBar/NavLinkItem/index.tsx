import Link from 'next/link'
import styles from "./styles.module.scss";

export const NavLinkItem = (props: any) => {
  const { content, withBorder, href } = props;

  const className = withBorder
    ? styles.navigationLinkWithBorder
    : styles.navigationLink

  return (
    <Link href={href}>
      <p className={className}>
        {content}
      </p>
    </Link>
  )
}