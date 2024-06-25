"use client"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/prism"

type CodeBlockProps = {
  code: string;
  language: string;
}

export const CodeBlock = (props: CodeBlockProps) => {
  const { code, language } = props;
  return (
    <SyntaxHighlighter
      language={language}
      style={gruvboxDark}
      customStyle={{
        marginTop: "5px",
        borderRadius: "8px"
      }}>
      {code}
    </SyntaxHighlighter>
  )
}
