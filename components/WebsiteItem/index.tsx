import styles from "./styles.module.scss";

type propsType = {
  title: string,
  url: string,
  tags?: string[],
};

export const WebsiteItem = (props: propsType) => {
  const { title, tags, url } = props;
  return (
    <div className={styles.websiteItemContainer}>
      <a href={url} target="_blank"
        className={styles.linkItem}>
        {title}
      </a>
      <p>[{tags?.join(", ")}]</p>
    </div>
  )
}