import styles from "./styles.module.scss";

type propsType = {
  children: JSX.Element,
  sectionTitle?: string;
}

export const SectionWrapper = ({ children, sectionTitle }: propsType) => {
  const _renderTitle = () => {
    return (
      <div className={styles.sectionTitleContainer}>
        {sectionTitle}
      </div>)
  }

  return (
    <section className={styles.sectionWrapper}>
      {sectionTitle && _renderTitle()}
      {children}
    </section>
  )
}