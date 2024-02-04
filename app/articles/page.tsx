import * as fs from "fs";
import NextLink from "next/link";

// @ts-ignore
import Markdown from "react-markdown";
import "./style.css";

const ArticlesPage = async () => {
  const postsDir = "./public/posts"
  const files = fs.readdirSync(postsDir);

  const fileNames = files.map((name: string) => {
    return name
      .replaceAll("-", " ")
      .replace(".md", "")
  })

  return (
    <div className="articles-page">
      <hr />
      {fileNames.map((item) => (
        <NextLink href={"/articles/" + files[0]} className="block w-fit">
          <p className="normal-case max-w-fit">{item}</p>
        </NextLink>
      ))}
    </div>
  )
}

export default ArticlesPage;
