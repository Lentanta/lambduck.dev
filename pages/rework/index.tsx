import type { NextPage } from "next";
import clsx from 'clsx';

import { Nunito } from "@next/font/google"

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

const NavBar = () => {
  return (
    <div className={clsx(
      "w-full h-[50px]",
      "bg-#FFF4EE",
      "drop-shadow-md")}>

      <div className="h-full w-[1024px] m-auto">
        <div className={clsx(
          "h-full",
          "flex gap-[45px]",
          "justify-center items-center"
        )}>
          <p className={`${nunito.className}`}>About me</p>
          <p>About me</p>
          <div className="h-[15px] w-[15px] rounded-full bg-blue-100" />
          <p>About me</p>
          <p>About me</p>
        </div>
      </div>
    </div>
  )
}

const MainPage: NextPage = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-[#EDF4F5] 0% to-[#FFF4EE] 100%">
      <NavBar />
    </div>
  )
}
export default MainPage;