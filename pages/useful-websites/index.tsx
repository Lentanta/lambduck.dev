import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { get } from "radash";

import Link from "next/link"
import styled from "styled-components";

import { PageWrapper } from "@layouts/PageWrapper";

import {
  queryNotionDB,
  retrieveNotionDB
} from "@utils/queryNotionDatabase";
import { SectionWrapper } from "@layouts/SectionWrapper";
import { AnimationHeaderWrapper } from "@components/AnimationHeaderWrapper";

import { Typography } from "@components/Styled/Typography";
import { Button } from "@components/Styled/Button";

import { useThemeStore } from "@store/themeStore"

const StyledBody = styled(Typography.Body)`
  text-align: center;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const UsefulWebsites = (props: any) => {
  const { listWebsite, listPostTags } = props;
  const myRef = useRef<HTMLDivElement>(null)
  const [selectedTag, setSelectedTag] = useState("All");

  const theme = useThemeStore(
    (state: any) => state.theme)

  const filteredWebsites = useMemo(() => {
    if (selectedTag === "All") return listWebsite;
    return listWebsite.filter((item: any) => {
      return item.tags.includes(selectedTag)
    })
  }, [selectedTag])

  const onClick = (item: any) => {

    if (myRef.current) {
      myRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      })
      setTimeout(() => {
        setSelectedTag(item)
      }, 500)
    }
  }

  return (
    <PageWrapper>
      <AnimationHeaderWrapper>
        <Typography.H1 theme={theme}>
          My useful websites
        </Typography.H1>
        <Typography.Body theme={theme}>
          This is my collection of sites that I think is it interesting and may help me in the future.
        </Typography.Body>
      </AnimationHeaderWrapper>

      <SectionWrapper
        title="List of websites"
        gridColumnSize={["100%"]}
        gridGap={0}>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "20px auto",
            maxWidth: "768px"
          }}
          ref={myRef}
        >
          {listPostTags.map((item: any) => (
            <Button key={item} theme={theme} onClick={() => onClick(item)}>
              <Typography.Body theme={theme}>
                {item}
              </Typography.Body>
            </Button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}>
          {filteredWebsites.map((item: any, index: number) => {
            if (item.isHide) return;
            return (
              <Link key={index} href={item.url}>
                <StyledBody theme={theme}>{item.title}</StyledBody>
              </Link>
            )
          })}
        </motion.div>

      </SectionWrapper>
    </PageWrapper>
  );
};
export default UsefulWebsites;

export const getServerSideProps = async () => {
  if (!process.env.NOTION_DATABASE_ID) return {
    props: { listWebsite: [] }
  };

  const queryNotionData = await queryNotionDB(process.env.NOTION_DATABASE_ID);
  const retrieveNotionData = await retrieveNotionDB(process.env.NOTION_DATABASE_ID);

  const listPostTags = get(
    retrieveNotionData,
    (obj) => obj.properties.tags.multi_select.options,
    []
  ).map((item: any) => item.name)


  const listWebsite = queryNotionData.map((item: any) => {
    return {
      id: get(
        item,
        (obj) => obj.id,
        "No id"
      ),
      title: get(
        item,
        (obj) => obj.properties.title.title[0].text.content,
        "No title"
      ),
      url: get(
        item,
        (obj) => obj.properties.url.url,
        ""
      ),
      tags: get(
        item,
        (obj) => obj.properties.tags.multi_select.map((item: any) => item.name),
        []
      ),
      isHide: get(
        item,
        (obj) => obj.properties.hide.checkbox,
        true
      ),
    };
  })

  const props = {
    listWebsite: listWebsite.reverse(),
    listPostTags: [...listPostTags, "All"].reverse(),
  };
  return { props };
};
