import { PropsWithChildren } from "react";
import { clsxm } from "@utils/clsxm";

type ParagraphProps = PropsWithChildren<{ className?: string }>

export const Paragraph = ({ children, className }: ParagraphProps) => (
  <p className={clsxm(
    "text-gruvbox-light-fg",
    "font-nunito",
    "text-lg",
    "leading-snug",
    className
  )}>
    {children}
  </p>
);

export const Heading1 = ({ children, className }: ParagraphProps) => (
  <h1 className={clsxm(
    "text-gruvbox-light-fg",
    "font-nunito",
    "text-5xl",
    "leading-tight",
    "mb-7",
    className
  )}>
    {children}
  </h1>
);

export const Heading2 = ({ children, className }: ParagraphProps) => (
  <h2 className={clsxm(
    "text-gruvbox-light-fg",
    "font-nunito",
    "text-2xl",
    "leading-tight",
    "font-medium",
    "pt-3 mb-3",
    className
  )}>
    {children}
  </h2>
);

export const Heading3 = ({ children, className }: ParagraphProps) => (
  <h3 className={clsxm(
    "text-gruvbox-light-fg",
    "font-nunito",
    "text-xl",
    "leading-tight",
    "font-normal",
    "pt-2 mb-2",
    className
  )}>
    {children}
  </h3>
);