import type { NextPage } from "next";

import { HeaderWrapper } from "../components/HeaderWrapper";
import { ColorDot } from "@components/ColorDot";
import { PageWrapper } from "@layouts/PageWrapper";
import { SectionWrapper } from "@layouts/SectionWrapper";
import { Typography } from "@components/Styled/Typography";

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <HeaderWrapper imageUrl="/images/dalat-light-v1.jpg">
        <Typography.H1>
          Hi, I'm Tam
        </Typography.H1>
        <Typography.Body>
          I'm a full-stack web developer who create some silly useless stuffs for fun. I really curious to learn new things, love drawing, and have a passion for game development
        </Typography.Body>
      </HeaderWrapper>

      <SectionWrapper title={"My website colors"}>
        <ColorDot hexColor="#282828" />
        <ColorDot hexColor="#32302F" />
        <ColorDot hexColor="#FF847C" />
        <ColorDot hexColor="#EBDBB2" />
        <ColorDot hexColor="#99B898" />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default Home;
