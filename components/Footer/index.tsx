import clsx from "clsx";
import packageInfo from "../../package.json";

export const Footer = () => {

  return (
    <footer className={clsx(
      "absolute bottom-0",
      "h-[120px] w-full",
      "bg-color-dark"
    )}>
      <div className={clsx(
        "h-full w-full",
        "flex justify-center items-center"
      )}>
        <div>
          <p className={clsx("text-body text-center text-color-light")}>
            Made by me
          </p>
          <p className={clsx("text-body text-center text-color-light")}>
            [version: {packageInfo.version}]
          </p>
        </div>
      </div>
    </footer>
  )
}
