import { readFileSync } from "fs";
import clsx from "clsx";
import dayjs from 'dayjs';
import Markdown from "react-markdown"

import { PUBLIC_POSTS_PATH } from '@/utils/constant';
import { markdownMetadataParser } from '@/utils/markdownMetadataParser';
import { getReadingTime } from '../functions/getReadingTime';

const ArticlePage = async ({ params }: { params: { id: string } }) => {
  const md = readFileSync(`${PUBLIC_POSTS_PATH}/${params.id}`, "utf8");
  const { metadata, content } = markdownMetadataParser(md);
  const { title } = metadata;

  const dateTime = dayjs(metadata.createdDate, "DD/MM/YYYY");
  const dateFormated = dateTime.isValid()
    ? dateTime.format("MMM DD, YYYY")
    : "Today"
  const readingTime = getReadingTime(content);

  return (
    <article className={clsx(
      "mt-[1.3em] mb-[1.5em]",
      "lg:w-[768px] lg:px-0",
      "w-full px-3",
      "rounded-lg",
      "backdrop-blur"
    )}>
      <h1 className="text-title font-bold">
        {title}
      </h1>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <i className="ri-calendar-line" />
          <small>{dateFormated}</small>
        </div>
        <div className="flex items-center gap-1">
          <i className="ri-time-line" />
          <small>{readingTime} minutes to read</small>
        </div>
      </div>

      <Markdown
        className="mt-[1.2em]"
        components={{
          h2: (props) => (
            <h2 className={clsx(
              "mt-[1em]",
              "text-subTitle",
              "font-semibold font-nunito"
            )}>
              {props.children}
            </h2>
          ),
          h3: (props) => (
            <h3 className={clsx(
              "mt-[1em]",
              "text-smallSubTitle",
              "font-semibold font-nunito"
            )}>
              {props.children}
            </h3>
          ),
          p: (props) => (<p className="text-body hyphens-auto mt-1">{props.children}</p>)
        }}>
        {content}
      </Markdown>
    </article>
  )
}

export default ArticlePage;
