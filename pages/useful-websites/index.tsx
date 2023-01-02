import Link from "next/link"
import styled from "styled-components";

import { PageWrapper } from "@layouts/PageWrapper";

import { queryNotionDatabase } from "../../utils/queryNotionDatabase";
import { get } from "radash";
import { SectionWrapper } from "@layouts/SectionWrapper";
import { HeaderWrapper } from "@components/HeaderWrapper";

import { Typography } from "@components/Styled/Typography";
import { color } from "@styles/style-constant";

const StyledBody = styled(Typography.Body)`
  &:hover {
    color: #${color.lightBlue};
  }
`;

const BlogPage = (props: any) => {
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
        {props.listWebsite.map(
          (item: any) =>
            !item.isHide && (
              <Link key={item.key} href={item.url}>
                <StyledBody>{item.title}</StyledBody>
                {/* <div>{item.tags[0]}</div> */}
              </Link>

              // <WebsiteItem
              //   key={item.id}
              //   title={item.title}
              //   tags={item.tags}
              //   url={item.url}
              // />
            )
        )}
      </SectionWrapper>
    </PageWrapper>
  );
};
export default BlogPage;

export const getServerSideProps = async () => {
  const queryNotionData =
    (await queryNotionDatabase(process.env.NOTION_DATABASE_ID || "")) || [];

  const listWebsite = queryNotionData
    .map((item: any) => {
      return {
        id: get(item, (obj) => obj.id, "No id"),
        title: get(
          item,
          (obj) => obj.properties.title.title[0].text.content,
          "No title"
        ),
        url: get(item, (obj) => obj.properties.url.url, ""),
        tags: get(item, (obj) => obj.properties.tags.multi_select, []).map(
          (item: any) => item.name
        ),
        isHide: get(item, (obj) => obj.properties.hide.checkbox, true),
      };
    })


  const props = {
    listWebsite: listWebsite.reverse(),
    rawData: queryNotionData,
  };
  return { props };
};
