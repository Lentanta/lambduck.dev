import { ColorDotAnimation } from "@components/ColorDotAnimation";
import { Paragraph } from "@components/Common/Typography";
import clsx from 'clsx';

export const AboutMeSection = () => {
  return (
    <div className={clsx(
      // "m-auto max-w-[1024px] min-h-[600px]",
      // "bg-[#FFFCFB]",
      // "flex justify-evenly items-center flex-wrap",
      "columns-2"
      // "shadow-lg rounded-md",
      // "px-10 py-10"
    )}>

      <div>
        <ColorDotAnimation />

        <h2 className={clsx(
          "font-nunito",
          "text-xl font-semibold  text-A3")}>
          Color dot
        </h2>
        <Paragraph>
          Made with p5js
        </Paragraph>
      </div>

      <div>
        <h2 className={clsx(
          "font-nunito",
          "text-3xl text-left font-bold text-[#7E6F73]")}>
          About me
        </h2>

        <Paragraph>
          Currently, I'm working as a full-stack developer.
        </Paragraph>
        <Paragraph>
          I love to code silly useless stuffs for fun.
        </Paragraph>
      </div>
    </div>
  )
}