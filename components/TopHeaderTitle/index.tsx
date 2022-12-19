import { Roboto_Slab } from "@next/font/google"
import styles from "./styles.module.scss";

const robotoSlab = Roboto_Slab({
  subsets: ["vietnamese"]
})

export const TopHeaderTitle = (props: any) => {
  const { imageUrl } = props;
  const backgroundImgUrl = `url(${imageUrl})`;


  return (
    <div className={styles.topHeaderTitleWrapper} style={{ backgroundImage: backgroundImgUrl }}>
      <div className={styles.headerTitleContentWrapper}>
        <div className={styles.headerTitleContent}>
          <h1 className={robotoSlab.className} style={{ fontSize: "38px", marginBottom: "20px" }}>Hi, I'm Tâm</h1>
          <p className={robotoSlab.className} style={{ fontSize: "20px", lineHeight: "normal" }}>I'm a full-stack web developer who create some silly useless stuffs for fun. I really curious to learn new things, love drawing, and have a passion for game developement</p>
        </div>
      </div>

    </div>
  )
}