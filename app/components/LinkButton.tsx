import { clsxm } from "@/utils/clsxm";
import NextLink from "next/link";

export const LinkButton = ({ href, target, icon, className }: any) => {
  return (
    <NextLink href={href} target={target}
      className={clsxm(
        "w-full h-full p-5",
        "flex justify-center items-center",
        "rounded-lg hover:opacity-80",
        className
      )}>
      {icon}
    </NextLink >
  )
}

