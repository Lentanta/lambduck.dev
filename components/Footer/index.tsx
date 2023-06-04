import packageInfo from "../../package.json";
import clsx from 'clsx';

import 'remixicon/fonts/remixicon.css'

export const Footer = () => {
  return (
    <div className="py-7 bg-[#FFF4EE]">
      <div>
        <p className={clsx(
          "font-nunito",
          "text-center text-lg text-[#7E6F73]")}>
          Made by me (Lentanta)
        </p>
        <p className={clsx(
          "font-nunito",
          "text-center text-base text-[#7E6F73]")}>
          Version: {packageInfo.version}
        </p>
      </div>
    </div>
  )
}