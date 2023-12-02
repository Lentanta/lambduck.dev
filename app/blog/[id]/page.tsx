// @ts-ignore
import Markdown, { Components } from "react-markdown";

import { DesktopApp } from "@components/DesktopApp";
import { H1, H2, H3, P } from './ArticleTypo';

const getPosts = async (id: number) => {
  try {
    const result = await fetch(
      `${process.env.DIRECTUS_URL}/items/articles/${id}`,
      { cache: "no-cache" });

    if (!result.ok) return [];
    return result.json();

  } catch (error) {
    return [];
  }
}

const components: Partial<Components> = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P
};

const Page = async ({ params }: { params: { id: number } }) => {
  const { data } = await getPosts(params.id)

  return (
    <DesktopApp windowName={data?.title || ""}>
      <H1 className="text-center font-semibold uppercase">
        {data?.title || ""}
      </H1>

      <Markdown components={components}>
        {data?.content}
      </Markdown>
    </DesktopApp>
  )
}

export default Page;