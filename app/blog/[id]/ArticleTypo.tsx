import { PropsWithChildren } from "react";
import { clsxm } from "@utils/clsxm";

type ParagraphProps = PropsWithChildren<{ className?: string }>

const fontStyle = "font-nunito text-color-dark";

export const P = ({ children, className }: ParagraphProps) => (
  <p className={clsxm(
    fontStyle,
    "text-base",
    "leading-snug",
    "mb-1 mt-2",
    "break-words",
    className
  )}>
    {children}
  </p>
);

export const H1 = ({ children, className }: ParagraphProps) => (
  <h1 className={clsxm(
    fontStyle,
    "text-3xl font-extrabold",
    "leading-tight",
    "my-5",
    className
  )}>
    {children}
  </h1>
);

export const H2 = ({ children, className }: ParagraphProps) => (
  <h2 className={clsxm(
    fontStyle,
    "text-xl",
    "leading-tight",
    "font-bold",
    "pt-2 mb-3",
    className
  )}>
    {children}
  </h2>
);

export const H3 = ({ children, className }: ParagraphProps) => (
  <h3 className={clsxm(
    fontStyle,
    "text-lg",
    "leading-tight",
    "font-bold",
    "pt-3 mb-3",
    className
  )}>
    {children}
  </h3>
);