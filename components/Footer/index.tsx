import packageInfo from "../../package.json";
import { Paragraph } from "@components/Common/Typography";

export const Footer = () => {

  return (
    <footer className="w-full m-auto mt-10 bg-color-dark">
      <div className="py-7">
        <p className="text-center text-color-light">
          Made by me
        </p>
        <p className="text-center text-sm text-color-light">
          [version: {packageInfo.version}]
        </p>
      </div>
    </footer>
  )
}
