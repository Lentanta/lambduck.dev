import { PropsWithChildren } from "react";
import { clsxm } from "@utils/clsxm";

type ParagraphProps = PropsWithChildren<{ className?: string }>

export const Paragraph = ({ children, className }: ParagraphProps) => (
  <p className={clsxm(
    "text-color-dark",
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
    "text-color-dark",
    "font-nunito",
    "text-5xl",
    "leading-tight",
    className
  )}>
    {children}
  </h1>
);

export const H2 = ({ children, className }: ParagraphProps) => (
  <h2 className={clsxm(
    "text-color-dark",
    "font-nunito",
    "text-2xl",
    "leading-tight",
    "font-medium",
    className
  )}>
    {children}
  </h2>
);

export const Heading3 = ({ children, className }: ParagraphProps) => (
  <h3 className={clsxm(
    "text-color-dark",
    "font-nunito",
    "text-xl",
    "leading-tight",
    "font-normal",
    className
  )}>
    {children}
  </h3>
);
