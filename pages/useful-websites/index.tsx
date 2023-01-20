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
import { HeaderWrapper } from "@components/HeaderWrapper";

import { Typography } from "@components/Styled/Typography";
import { colors } from "@styles/style-constant";
import { Button } from "@components/Styled/Button";

const StyledBody = styled(Typography.Body)`
  text-align: center;
  &:hover {
    color: ${colors.lightBlue};
  }
`;

const BlogPage = (props: any) => {
  const { listWebsite, listPostTags } = props;
  const myRef = useRef<HTMLDivElement>(null)

  const [selectedTag, setSelectedTag] = useState("All");

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
      <HeaderWrapper imageUrl="/images/dalat-v1.jpg">
        <Typography.H1>
          My useful websites
        </Typography.H1>
        <Typography.Body>
          This is my collection of sites that I think is it interesting and may help me in the future.
        </Typography.Body>
      </HeaderWrapper>

      <SectionWrapper title="List of websites">

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
            <Button key={item} onClick={() => onClick(item)}>
              <Typography.Body>
                {item}
              </Typography.Body>
            </Button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}>
          {filteredWebsites.map(
            (item: any) =>
              !item.isHide && (
                <Link key={item.key} href={item.url}>
                  <StyledBody>{item.title}</StyledBody>
                  {/* <div>{item.tags[0]}</div> */}
                </Link>
              )
          )}
        </motion.div>

      </SectionWrapper>
    </PageWrapper>
  );
};
export default BlogPage;

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
