import NextLink from "next/link"

import { DesktopApp } from "@components/DesktopApp";
import { clsxm } from "@utils/clsxm";
import { get } from "./get";
import dayjs from "dayjs";

const getPosts = get(`${process.env.DIRECTUS_URL}/items/articles?fields=id,title,status,createdDate`);

type Article = {
  id: string,
  title: string,
  content: string,
  createdDate: string
}

const PostTitle = (props: { article: Article }) => {
  const { id, title, createdDate } = props.article;

  return (
    <div className="my-2">
      <NextLink
        href={`/blog/${id}`}
        className={clsxm(
          "block w-fit",
          "hover:underline",
          "text-gruvbox-light-fg",
          "font-nunito",
          "leading-normal",
          "text-xl font-semibold"
        )}>
        {title}
      </NextLink>

      <div className="flex items-center gap-1 text-md">
        <i className="ri-time-line" />
        <p className="text-md">
          {dayjs(createdDate).format("MMM DD, YYYY")}
        </p>
      </div>

    </div>

  )
}

const ProjectsPage = async () => {
  const defaultValue: [] = [];
  const data = await getPosts(defaultValue);
  console.log(data)
  const publicPosts = data.filter((post: any) => post.status === "published")

  return (
    <DesktopApp windowName="Articles">
      {publicPosts.map((article: Article) => {
        return <PostTitle key={article.id} article={article} />
      })}
    </DesktopApp>
  )
}

export default ProjectsPage;