import yaml from "js-yaml";
import isEmpty from "lodash/isEmpty";

type Metadata = {
  title: string,
  createdDate: string,
  [key: string]: any
}

export const markdownMetadataParser = (markdown: string): {
  metadata: Metadata;
  content: string,
} => {
  const parts = markdown.split("---").slice(1);
  const metadata = yaml.load(parts[0]) as Metadata;
  const content = parts[1];
  return {
    metadata,
    content: !isEmpty(content) ? content : "Updating..."
  };
};
