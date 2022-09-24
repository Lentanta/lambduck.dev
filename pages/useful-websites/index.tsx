import { PageWrapper } from '../../layouts/PageWrapper';
import { WebsiteItem } from "../../components/WebsiteItem";
import { queryNotionDatabase } from "../../utils/queryNotionDatabase";
import { get } from "radash";

const BlogPage = (props: any) => {
  return (
    <PageWrapper pageName="Useful websites">
      {props.listwebsite.map((item: any) =>
        !item.isHide && <WebsiteItem
          key={item.id}
          title={item.title}
          tags={item.tags}
          url={item.url}
        />)}
    </PageWrapper >
  )
}
export default BlogPage;

export const getServerSideProps = async () => {
  const queryNotionData = await queryNotionDatabase(process.env.NOTION_DATABASE_ID || "") || []

  const listwebsite = queryNotionData.map((item: any) => {
    return {
      id: get(item, (obj) => obj.id, "No id"),
      title: get(item, (obj) => obj.properties.title.title[0].text.content, "No title"),
      url: get(item, (obj) => obj.properties.url.url, ""),
      tags: get(item, (obj) => obj.properties.tags.multi_select, []).map((item: any) => item.name),
      isHide: get(item, (obj) => obj.properties.hide.checkbox, true)
    }
  }).reverse();

  const props = {
    listwebsite,
    rawData: queryNotionData
  };
  return { props }
};
