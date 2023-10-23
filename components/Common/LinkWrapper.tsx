import { HTMLAttributeAnchorTarget } from "react";
import NextLink from 'next/link'

import { clsxm } from "@utils/clsxm";

type LinkProps = {
  children: JSX.Element,
  href: string,
  target?: HTMLAttributeAnchorTarget,
  className?: string
};

export const LinkWrapper = (props: LinkProps) => {
  const { children, href, target, className } = props;

  return (
    <NextLink
      href={href}
      target={target}
      className={clsxm("hover:underline", className)}>
      {children}
    </NextLink>
  )
};