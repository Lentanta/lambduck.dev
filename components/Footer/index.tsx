import packageInfo from "../../package.json";
import clsx from 'clsx';


export const Footer = () => {
  return (
    <footer className="max-w-[1024px] m-auto mt-[150px]">
      <div className="py-3">
        <p className={clsx(
          "font-nunito",
          "text-center text-lg text-mildly-cyan-black")}>
          Made by me (Lentanta) [version: {packageInfo.version}]
        </p>
      </div>
    </footer>
  )
}