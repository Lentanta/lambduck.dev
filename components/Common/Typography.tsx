import { PropsWithChildren } from "react";
import { clsxm } from "@utils/clsxm";

type ParagraphProps = PropsWithChildren<{ className?: string }>

export const Paragraph = ({ children, className }: ParagraphProps) => (
  <p className={clsxm(
    "font-nunito text-mildly-cyan-black",
    "text-base",
    className
  )}>
    {children}
  </p>
);

export const Head1 = ({ children, className }: ParagraphProps) => (
  <h1 className={clsxm(
    "font-nunito text-mildly-cyan-black",
    "text-3xl",
    className
  )}>
    {children}
  </h1>
);

export const Head2 = ({ children, className }: ParagraphProps) => (
  <p className={clsxm(
    "font-nunito text-mildly-cyan-black",
    "text-2xl",
    className
  )}>
    {children}
  </p>
);

export const Head3 = ({ children, className }: ParagraphProps) => (
  <p className={clsxm(
    "font-nunito text-mildly-cyan-black",
    "text-xl",
    className
  )}>
    {children}
  </p>
);
