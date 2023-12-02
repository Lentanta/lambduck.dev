import { PropsWithChildren } from "react";
import { clsxm } from "@utils/clsxm";

type ParagraphProps = PropsWithChildren<{ className?: string }>

const fontStyle = "font-nunito text-gruvbox-light-fg";

export const P = ({ children, className }: ParagraphProps) => (
  <p className={clsxm(
    fontStyle,
    "text-lg",
    "leading-snug",
    "mb-6 mt-2",
    className
  )}>
    {children}
  </p>
);

export const H1 = ({ children, className }: ParagraphProps) => (
  <h1 className={clsxm(
    fontStyle,
    "text-5xl font-extrabold",
    "leading-tight",
    "mb-7 mt-4",
    className
  )}>
    {children}
  </h1>
);

export const H2 = ({ children, className }: ParagraphProps) => (
  <h2 className={clsxm(
    fontStyle,
    "text-2xl",
    "leading-tight",
    "font-semibold",
    "pt-3 mb-3",
    className
  )}>
    {children}
  </h2>
);

export const H3 = ({ children, className }: ParagraphProps) => (
  <h3 className={clsxm(
    fontStyle,
    "text-xl",
    "leading-tight",
    "font-normal",
    "pt-3 mb-3",
    className
  )}>
    {children}
  </h3>
);