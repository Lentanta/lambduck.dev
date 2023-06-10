import packageInfo from "../../package.json";
import clsx from 'clsx';

import 'remixicon/fonts/remixicon.css'

export const Footer = () => {
  return (
    <footer className="max-w-[1024px] m-auto mt-10">
      <div className="py-3">
        <p className={clsx(
          "font-nunito",
          "text-center text-lg text-A3")}>
          Made by me (Lentanta) [version: {packageInfo.version}]
        </p>
      </div>
    </footer>
  )
}