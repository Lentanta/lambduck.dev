import { Fragment } from "react";

import { ChildPageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { isFullBlock } from "@notionhq/client";
import { getNotionClient } from "@/utils/services/notionClient";
import { NotionBlock } from "../NotionBlock";
import clsx from "clsx";

const ArticlePage = async ({ params }: { params: { id: string } }) => {
  const notion = getNotionClient()

  // The header of page
  const pageProperties = await notion.blocks.retrieve({
    block_id: params.id
  });

  const pageContent = await notion.blocks.children.list({
    block_id: params.id,
  });

  if (!isFullBlock(pageProperties)) return <Fragment />
  if (pageProperties.type !== "child_page") return <Fragment />

  return (
    <article className={
      clsx(
        "mt-10 mb-20",
        "lg:w-[768px]",
        "w-full",
      )}>
      <h1 className={clsx(
        "mb-3",
        "font-nunito font-bold text-title",
      )}>
        {pageProperties.child_page.title}
      </h1>
      <hr />

      {pageContent.results.map((block) => {
        return isFullBlock(block)
          ? <NotionBlock block={block} />
          : <Fragment />
      })}
    </article>
  )
}

export default ArticlePage;
