import NextLink from "next/link"

import { DesktopApp } from "@components/DesktopApp";
import { clsxm } from "@utils/clsxm";

import dayjs from "dayjs";

const fetchDataUrl = `${process.env.DIRECTUS_URL}/items/articles?fields=id,title,status,createdDate`;

type Article = {
  id: string,
  title: string,
  content: string,
  status: string,
  createdDate: string
};

const PostTitle = (props: { article: Article }) => {
  const { id, title, createdDate } = props.article;

  return (
    <div className="my-4">
      <NextLink
        href={`/blog/${id}`}
        className={clsxm(
          "block w-fit",
          "hover:underline",
          "text-color-dark",
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

  const data: Article[] = await fetch(fetchDataUrl, { method: "GET", cache: "no-cache" })
    .then((res) => res.ok ? res.json() : { data: defaultValue })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
      return { data: defaultValue }
    });

  const publicPosts = data.filter(
    (article: Article) => article.status === "published")

  return (
    <DesktopApp windowName="Articles">
      {publicPosts.map((article: Article) => {
        return <PostTitle key={article.id} article={article} />
      })}
    </DesktopApp>
  )
}

export default ProjectsPage;