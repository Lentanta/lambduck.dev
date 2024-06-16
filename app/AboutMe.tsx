import clsx from 'clsx';

import { DesktopApp } from '@components/DesktopApp/index'

export const AboutMe = () => {
  return (
    <DesktopApp windowName="About me" className='mt-3'>
      <div className="my-[100px] md:my-[200px]">
        <h1 className={clsx("text-center font-bold text-title")}>
          Hi, I'm Tam
        </h1>

        <p className="text-center text-subTitle">
          Welcome to my website 🌱
        </p>

      </div>
    </DesktopApp >
  )
}
