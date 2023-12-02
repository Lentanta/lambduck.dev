import NextLink from "next/link"

import { DesktopApp } from "@components/DesktopApp";
import { clsxm } from "@utils/clsxm";
import { get } from "./get";

const getPosts = get(`${process.env.DIRECTUS_URL}/items/articles?fields=id,title,status,createdDate`);

const PostTitle = (props: { id: string, title: string }) => {
  const { id, title } = props;

  const nextLinkClass = clsxm(
    "block",
    "w-fit",
    "hover:underline",
    "text-gruvbox-light-fg",
    "font-nunito",
    "text-2xl font-semibold",
    "leading-snug",
  )

  return (
    <div className="my-2">
      <NextLink href={`/blog/${id}`} className={nextLinkClass}>
        {title}
      </NextLink>
      <p>Created date updating...</p>
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
      {publicPosts.map((post: any) => {
        return <PostTitle id={post.id} title={post.title} />
      })}
    </DesktopApp>
  )
}

export default ProjectsPage;