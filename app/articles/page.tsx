import * as fs from "fs";
import NextLink from "next/link";
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
          <p className="text-2xl max-w-fit">
            &gt; {item}
          </p>
        </NextLink>
      ))}
    </div>
  )
}

export default ArticlesPage;
