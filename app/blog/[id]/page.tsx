// @ts-ignore
import Markdown, { Components } from "react-markdown";

import { DesktopApp } from "@components/DesktopApp";
import { Head1, Paragraph } from '@components/Common/Typography';

const getPosts = async (id: number) => {
  const res = await fetch(`http://157.245.54.8:8055/items/posts/${id}`, { cache: "no-cache" });
  if (!res.ok) {
    return [];
  }
  return res.json();
}

const components: Partial<Components> = {
  h1: Head1,
  p: Paragraph
}

export default async function Page({ params }: { params: { id: number } }) {
  const { data } = await getPosts(params.id)
  return (
    <DesktopApp windowName={data.title}>
      <Markdown components={components}>
        {data.postContent}
      </Markdown>
    </DesktopApp>
  )
}