import { Metadata } from 'next';
import { Nunito } from "@next/font/google"

import { ColorDotAnimation } from "@components/ColorDotAnimation";
import { HomePageHeader } from "./HomePageHeader";

import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'My Page Title',
};

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

// className="w-full flex justify-center items-center"
export default function Page() {
  return (
    <div>
      <HomePageHeader />

      <div className="m-auto w-[1024px] h-[600px] bg-[#FFFCFB] flex justify-evenly items-center shadow-lg">
        <div>
          <div className="w-[320px] h-[320px]">
            <ColorDotAnimation />
          </div>
          <h2 className={clsx(nunito.className, "text-xl font-semibold text-center text-[#7E6F73] mt-3")}>
            Color dot
          </h2>
          <p className={clsx(nunito.className, "text-base text-center text-[#7E6F73]")}>
            Made with p5js
          </p>
        </div>

        <div>
          <h2 className={clsx(nunito.className, "text-3xl text-left font-bold text-[#7E6F73]")}>
            About me
          </h2>

          <p className={clsx(nunito.className, "text-lg text-left text-[#7E6F73]")}>
            Currently, I'm working as a full-stack developer.
          </p>
          <p className={clsx(nunito.className, "text-lg text-left text-[#7E6F73]")}>
            I love to code silly useless stuffs for fun.
          </p>
        </div>
      </div>
    </div>
  );
}