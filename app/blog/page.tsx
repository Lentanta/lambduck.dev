import { DesktopApp } from "@components/DesktopApp";
import { LinkWrapper } from "@components/Common/LinkWrapper";
import { Paragraph } from "@components/Common/Typography";
import { get } from "./get";

const getPosts = get("http://157.245.54.8:8055/items/articles?fields=id,title");

const ProjectsPage = async () => {
  const defaultValue: [] = [];
  const data = await getPosts(defaultValue);

  return (
    <DesktopApp windowName="Articles">
      {data.map((post: any) => {
        return (
          <LinkWrapper href={`/blog/${post.id}`}>
            <Paragraph>
              {post.title}
            </Paragraph>
          </LinkWrapper>
        )
      })}
    </DesktopApp>
  )
}

export default ProjectsPage;