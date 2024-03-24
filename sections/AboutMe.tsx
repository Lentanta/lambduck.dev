import clsx from 'clsx';

import { DesktopApp } from '@components/DesktopApp/index'

export const AboutMe = () => {
  return (
    <DesktopApp windowName="About me" className='mt-3'>
      <div className="my-[100px] md:my-[100px]">
        <h1 className={clsx("text-center font-bold z-10")}>
          Hi, I'm Tam
        </h1>

        <p className="text-center mt-2">
          Welcome to my website 🌱
        </p>

        <p className="text-center mt-7 px-5">
          I'm a software engineer, having been working as a web developer since 2020. I use Linux as my main operating system and  while I'm at it, I pretend I'm a Vim user. I enjoy functional programming, math, game development, and drawing.
        </p>

      </div>
    </DesktopApp >
  )
}
