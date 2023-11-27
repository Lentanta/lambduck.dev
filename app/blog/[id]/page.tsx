// @ts-ignore
import Markdown, { Components } from "react-markdown";

import { DesktopApp } from "@components/DesktopApp";
import {
  Heading1,
  Heading2,
  Heading3,
  Paragraph
} from '@components/Common/Typography';

const getPosts = async (id: number) => {
  const res = await fetch(`http://157.245.54.8:8055/items/articles/${id}`, { cache: "no-cache" });
  if (!res.ok) {
    return [];
  }
  return res.json();
}

const components: Partial<Components> = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  p: Paragraph
}

export default async function Page({ params }: { params: { id: number } }) {
  const { data } = await getPosts(params.id)
  return (
    <DesktopApp windowName={data.title}>
      <Heading1 className="text-center font-semibold">
        {data.title}
      </Heading1>

      <Markdown components={components}>
        {data.content}
      </Markdown>
    </DesktopApp>
  )
}