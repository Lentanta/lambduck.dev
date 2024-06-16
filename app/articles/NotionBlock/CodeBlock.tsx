"use client"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

type CodeBlockProps = {
  code: string;
  language: string;
}

export const CodeBlock = (props: CodeBlockProps) => {
  const { code, language } = props;
  return (
    <SyntaxHighlighter
      language={language}
      customStyle={{
        borderRadius: "8px"
      }}>
      {code}
    </SyntaxHighlighter>
  )
}
