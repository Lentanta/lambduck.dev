"use client";

import { useEffect, useState, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { DesktopApp } from '@components/DesktopApp.tsx';
import { LinkWrapper } from '@components/Common/LinkWrapper';
import { Paragraph, Head1 } from '@components/Common/Typography';

const TitleBox = ({ children }: PropsWithChildren) => {
  return (
    <div className={clsx(
      "border-2 border-gruvbox-light-fg",
      "rounded-md  shadow-lg",
      "w-fit h-full",
      "px-3 py-2"
    )}>
      {children}
    </div>
  )
}

export const Header = () => {
  return (
    <header>
      <nav className={clsx("w-ful")}>
        <div className={clsx("flex justify-center align-middle")}>
          <TitleBox>
            <Head1 className={clsx("font-nunito font-semibold text-center text-2xl")}>
              The Lambda Duck <span className="">_</span>
            </Head1>
          </TitleBox>
        </div>

        <div className='mx-auto flex justify-center mt-5'>

          <div className={clsx(
            "flex justify-evenly",
            "p-4",
            "gap-4 md:gap-8")}>

            <LinkWrapper href="/">
              <Paragraph className={clsx("text-lg")}>
                Home
              </Paragraph>
            </LinkWrapper>

            <LinkWrapper href="/projects">
              <Paragraph className={clsx("text-lg")}>
                Projects
              </Paragraph>
            </LinkWrapper>

            <LinkWrapper href="/blog">
              <Paragraph className={clsx("text-lg")}>
                Blog
              </Paragraph>
            </LinkWrapper>

            <LinkWrapper href="/games">
              <Paragraph className={clsx("text-lg")}>
                Games
              </Paragraph>
            </LinkWrapper>
          </div>

        </div>

      </nav>
    </header>
  )
}
