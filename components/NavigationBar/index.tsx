import NextLink from 'next/link';
import { Nunito } from "@next/font/google"
import clsx from 'clsx';

import 'remixicon/fonts/remixicon.css'

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

export const LinkText = (
  { text, href }: { text: string, href: string }
) => (
  <NextLink href={href} className={clsx(
    nunito.className,
    "text-lg font-semibold text-[#7E6F73]",
    "leading-relaxed",
    "hover:opacity-60 hover:underline",
  )}>
    {text}
  </NextLink>
);

export const NavigationBar = () => {
  return (
    <header>
      <div className={clsx(
        "w-full h-[70px]",
        "bg-[#FFFCFB]",
        "drop-shadow-md")}>

        <div className={clsx(
          "h-full m-auto",
          "lg:w-[1024px]",
          "md:w-[768px]"
        )}>

          <ul className={clsx(
            "h-full",
            "flex gap-[45px]",
            "justify-center items-center"
          )}>
            <li><LinkText href="/" text="About" /></li>
            <li><LinkText href="projects" text="Projects" /></li>
            <i className={clsx(
              "ri-cpu-line",
              "text-2xl text-[#7E6F73]",
            )} />
            <li><LinkText href="contact" text="Github" /></li>
            <li><LinkText href="contact" text="Contact" /></li>
          </ul>

        </div>
      </div>
    </header>
  )
};