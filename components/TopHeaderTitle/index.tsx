import { Roboto_Slab, IBM_Plex_Mono, Roboto } from "@next/font/google"
import styled from "styled-components";
import styles from "./styles.module.scss";

const robotoSlab = Roboto_Slab({
  subsets: ["latin", "vietnamese"]
});

const StyledH1 = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  font-family: ${robotoSlab.style.fontFamily};
`;

export const TopHeaderTitle = (props: any) => {
  const { imageUrl } = props;
  const backgroundImgUrl = `url(${imageUrl})`;

  return (
    <div className={styles.topHeaderTitleWrapper} style={{ backgroundImage: backgroundImgUrl }}>
      <div className={styles.headerTitleContentWrapper}>
        <div className={styles.headerTitleContent}>
          <StyledH1>Hi, I'm Tam</StyledH1>
          <p style={{ fontSize: "20px", lineHeight: "normal", fontFamily: robotoSlab.style.fontFamily }}>I'm a full-stack web developer who create some silly useless stuffs for fun. I really curious to learn new things, love drawing, and have a passion for game development</p>
        </div>
      </div>

    </div>
  )
}