import clsx from 'clsx';

import { DesktopApp } from '@components/DesktopApp/index'

export const AboutMe = () => {
  return (
    <DesktopApp windowName="About me" className='mt-3'>
      <div className="my-[100px] md:my-[200px]">
        <h1 className={clsx("text-center font-bold z-10")}>
          Hi, I'm Tam
        </h1>

        <p className={clsx("text-center text-lg mt-2 z-10")}>
          Welcome to my website 🌱
        </p>
      </div>
    </DesktopApp>
  )
}
