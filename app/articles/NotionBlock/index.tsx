// import { Fragment } from "react";
// import first from "lodash/first";
// import isNil from "lodash/isNil";
//
// import clsx from "clsx";
// import { CodeBlock } from "./CodeBlock";
//
// const renderH1 = (blockType: Heading1BlockObjectResponse) => {
//   const richText = first(blockType.heading_1.rich_text);
//   if (isNil(richText)) return <Fragment />;
//   if (!isTextRichTextItemResponse(richText)) return <Fragment />
//
//   return (
//     <h1 className={"text-title"}>
//       {richText.text.content}
//     </h1>
//   );
// };
//
// const renderH2 = (blockType: Heading2BlockObjectResponse) => {
//   const richText = first(blockType.heading_2.rich_text);
//   if (isNil(richText)) return <Fragment />;
//   if (!isTextRichTextItemResponse(richText)) return <Fragment />
//
//   return (
//     <h2 className={clsx(
//       "mt-[1.4em]",
//       "text-subTitle",
//       "font-bold font-nunito"
//     )}>
//       {richText.text.content}
//     </h2>
//   );
// };
//
// const renderH3 = (blockType: Heading3BlockObjectResponse) => {
//   const richText = first(blockType.heading_3.rich_text);
//   if (isNil(richText)) return <Fragment />;
//   if (!isTextRichTextItemResponse(richText)) return <Fragment />
//
//   return (
//     <h3 className={clsx(
//       "mt-[1em]",
//       "text-smallSubTitle",
//       "font-bold font-nunito"
//     )}>
//       {richText.text.content}
//     </h3>
//   );
// };
//
// const renderParagraph = (blockType: ParagraphBlockObjectResponse) => {
//   const richText = blockType.paragraph.rich_text;
//
//   return (
//     <div className={clsx(
//       "font-nunito break-normal text-body",
//       "px-[3px] py-[2px]"
//     )}>
//       {richText.map((item) => {
//         if (!isTextRichTextItemResponse(item)) return <Fragment />
//         if (!isNil(item.text.link?.url)) return (
//           <a href={item.text.link?.url || ""}>{item.text.content}</a>)
//         return <p className={clsx(
//           "inline",
//           "font-nunito",
//           item.annotations.bold ? "font-bold" : "",
//           item.annotations.italic ? "italic" : ""
//         )}>{item.text.content}</p>
//       })}
//     </div>
//   )
// };
//
// const renderCode = (blockType: CodeBlockObjectResponse) => {
//   const code = blockType.code;
//   const richText = first(code.rich_text);
//
//   if (isNil(richText)) return <Fragment />
//   return (
//     <CodeBlock
//       code={richText?.plain_text}
//       language={code.language}
//     />
//   );
// }
//
//
// export const NotionBlock = ({ block }: { block: BlockObjectResponse }) => {
//   const { type } = block;
//   switch (type) {
//     case "paragraph":
//       return renderParagraph(block)
//     case "heading_1":
//       return renderH1(block)
//     case "heading_2":
//       return renderH2(block)
//     case "heading_3":
//       return renderH3(block)
//     case "bulleted_list_item":
//       break;
//     case "numbered_list_item":
//       break;
//     case "quote":
//       break;
//     case "to_do":
//       break;
//     case "toggle":
//       break;
//     case "template":
//       break;
//     case "synced_block":
//       break;
//     case "child_page":
//       break;
//     case "child_database":
//       break;
//     case "equation":
//       break;
//     case "code":
//       return renderCode(block);
//     case "callout":
//     case "divider":
//       return <hr />
//     case "breadcrumb":
//     case "table_of_contents":
//     case "column_list":
//     case "column":
//     case "link_to_page":
//     case "table":
//     case "table_row":
//     case "embed":
//     case "bookmark":
//     case "image":
//     case "video":
//     case "pdf":
//     case "file":
//     case "audio":
//     case "link_preview":
//     case "unsupported":
//   }
// };
