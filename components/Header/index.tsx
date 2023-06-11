"use client";

import { useState } from 'react';

import { HeaderLink } from "./HeaderLink";
import { TodayDate } from "./TodayDate";
import clsx from 'clsx';



export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseHeaderMenu = (): void => {
    setIsOpen(false);
  };

  const NavigationLink = ({ text, href }: { text: string, href: string }) => {
    return (
      <li className="ml-3 py-1">
        <HeaderLink
          text={text}
          href={href}
          onClick={handleCloseHeaderMenu} />
      </li>
    )
  }

  return (
    <header className="w-full">
      <nav className="bg-A1 drop-shadow-md rounded-md max-w-[1024px] m-auto mt-2 max-md:mx-3">
        <div className={clsx(
          "max-full h-[70px]",
          "m-auto"
        )}>
          <div className={clsx(
            "flex justify-between items-center",
            "h-full w-full",
            "px-4 py-1"
          )}>
            <TodayDate />
            <button
              className={clsx(
                "border-solid border-A3",
                "flex justify-between items-center",
                "rounded-md",
                "px-2 py-1"
              )}
              onClick={() => setIsOpen(!isOpen)}>
              <i className="ri-menu-line text-lg font-normal text-A3" />
            </button>
          </div>
        </div>

        <div className={clsx(
          `${isOpen ? "block" : "hidden"}`,
          "w-full px-2",
          "absolute left-0 top-[55px] rounded-md",
        )}>
          <ul className="rounded-md bg-A1 shadow-inner p-2">
            <NavigationLink text="Home" href="/" />
            <NavigationLink text="Projects" href="/projects" />
            <NavigationLink text="Contact" href="/contact" />
            <NavigationLink text="Settings" href="/settings" />
          </ul>
        </div>
      </nav>
    </header>
  )
}