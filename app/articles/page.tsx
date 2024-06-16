import NextLink from "next/link";
import { isFullPage } from "@notionhq/client";
import { getNotionClient } from "@/utils/services/notionClient";

const ArticlesPage = async () => {

  const notion = getNotionClient();
  const articlesRes = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID || ""
  });

  const articles = articlesRes.results.map((data) => {
    if (!isFullPage(data)) return {
      id: data.id,
      title: "Unknown"
    };

    if (data.properties["title"].type === "title") {
      return {
        id: data.id || "",
        title: data.properties["title"].title[0].plain_text
      }
    };

    return {
      id: data.id,
      title: "Unknown"
    }
  })

  return (
    <div>
      {articles.map((article) => (
        <NextLink
          key={article.id}
          href={"/articles/" + article.id}
          className="block w-fit text-smallSubTitle my-1">
          &gt; {article.title}
        </NextLink>
      ))}
    </div>
  )
}

export default ArticlesPage;
