import packageInfo from "../../package.json";
import { Paragraph } from "@components/Common/Typography";

export const Footer = () => {

  return (
    <footer className="max-w-[1024px] m-auto mt-10">
      <div className="py-3">
        <Paragraph className="text-center">
          Made by me
        </Paragraph>
        <Paragraph className="text-center text-sm">
          [version: {packageInfo.version}]
        </Paragraph>
      </div>
    </footer>
  )
}
