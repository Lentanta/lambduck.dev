import * as fs from "fs";

// @ts-ignore
import Markdown from "react-markdown";
import "./style.css";

const ArticlePage = ({ params }: { params: { id: string } }) => {
  const publicPath = "./public/posts/";
  const markdownFile = fs.readFileSync(publicPath + params.id, "utf8");

  return (
    <article>
      <Markdown>
        {markdownFile}
      </Markdown>
    </article>
  )

}

export default ArticlePage;
