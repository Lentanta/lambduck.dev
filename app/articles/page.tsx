import { readFileSync, readdirSync } from "fs";
import NextLink from "next/link";
import get from "lodash/get";

import { markdownMetadataParser } from "@/utils/markdownMetadataParser";
import customParseFormat from "dayjs/plugin/customParseFormat"
import dayjs from "dayjs";
import { getReadingTime } from "./functions/getReadingTime";
import { PUBLIC_POSTS_PATH } from "@/utils/constant";
import clsx from "clsx";

dayjs.extend(customParseFormat)
const ArticlesPage = async () => {
  const files = readdirSync(PUBLIC_POSTS_PATH);

  const fileNames = files.map((fileName: string) => {
    const md = readFileSync(`${PUBLIC_POSTS_PATH}/${fileName}`, "utf8");
    const { metadata, content } = markdownMetadataParser(md);

    const dateTime = dayjs(metadata.createdDate, "DD/MM/YYYY");
    const dateFormated = dateTime.isValid()
      ? dateTime.format("MMM DD, YYYY")
      : "Don't remember"

    return {
      fileName,
      publish: metadata.publish,
      title: get(metadata, "title", "Post title here"),
      createdDate: dateFormated,
      readingTime: getReadingTime(content || "")
    };
  })

  return (
    <div className={clsx(
      "lg:px-1",
      "px-3"
    )}>
      {fileNames.map((post) => {
        if (!post.publish) return <></>;
        return (
          <div className={clsx("my-4")}>
            <NextLink
              key={post.title}
              href={"/articles/" + post.fileName}
              className="block w-fit text-smallSubTitle">
              <p className="text-smallSubTitle">{post.title}</p>
            </NextLink>

            <div className="flex gap-3">
              <div className="flex items-center gap-1">
                <i className="ri-calendar-line" />
                <small>{post.createdDate}</small>
              </div>
              <div className="flex items-center gap-1">
                <i className="ri-time-line" />
                <small>{post.readingTime} minutes to read</small>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ArticlesPage;
