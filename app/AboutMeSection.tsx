import { ColorDotAnimation } from "@components/ColorDotAnimation";
import clsx from 'clsx';

export const AboutMeSection = () => {
  return (
    <div className="
    m-auto max-w-[1024px] min-h-[600px] bg-[#FFFCFB] 
    flex justify-evenly items-center shadow-lg rounded-md
    px-10 py-10">

      {/* Color dots animation */}
      <div>
        <div className="w-[320px] h-[320px]">
          <ColorDotAnimation />
        </div>

        <h2 className={clsx(
          "font-nunito",
          "text-xl font-semibold text-center text-[#7E6F73] mt-3")}>
          Color dot
        </h2>
        <p className={clsx(
          "font-nunito",
          "text-base text-center text-[#7E6F73]")}>
          Made with p5js
        </p>
      </div>

      {/* About me */}
      <div>
        <h2 className={clsx(
          "font-nunito",
          "text-3xl text-left font-bold text-[#7E6F73]")}>
          Little about me
        </h2>

        <p className={clsx(
          "font-nunito",
          "text-lg text-left text-[#7E6F73]")}>
          Currently, I'm working as a full-stack developer.
        </p>

        <p className={clsx(
          "font-nunito",
          "text-lg text-left text-[#7E6F73]")}>
          I love to code silly useless stuffs for fun.
        </p>
      </div>
    </div>
  )
}