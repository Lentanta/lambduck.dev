"use client";

import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { HeaderLink } from "./HeaderLink";
import { TodayDate } from "./TodayDate";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <nav className={clsx("bg-mildly-green-white max-w-[1024px] m-auto mt-2 max-md:mx-3",
        "border-mildly-cyan-black border-solid border-2")}>
        <div className={clsx(
          "max-full",
          "m-auto"
        )}>
          <div className={clsx(
            "flex justify-between items-center",
            "h-full w-full",
            "px-4 py-4"
          )}>
            {/* <TodayDate /> */}
            <div className={clsx("flex items-center gap-3")}>
              <img src="/images/logo-200.jpg" />
              <div>
                <h1 className="font-nunito font-semibold text-xl">LENTANTA</h1>
                <TodayDate />
              </div>
            </div>

            {/* <button
              className={clsx(
                "border-solid border-mildly-cyan-black",
                "flex justify-between items-center",
                "rounded-md",
                "px-2 py-1"
              )}
              onClick={() => setIsOpen(!isOpen)}>
              <i className="ri-menu-line text-lg font-normal text-mildly-cyan-black" />
            </button> */}
          </div>
        </div>

        {/* <div className={clsx(
          `${isOpen ? "block" : "hidden"}`,
          "w-full px-2",
          "absolute left-0 top-[55px] rounded-md",
        )}>
          <ul className="rounded-md bg-mildly-green-white shadow-inner p-2">
            <NavigationLink text="Home" href="/" />
            <NavigationLink text="Projects" href="/projects" />
            <NavigationLink text="Contact" href="/contact" />
            <NavigationLink text="Settings" href="/settings" />
          </ul>
        </div> */}
      </nav>
    </header>
  )
}