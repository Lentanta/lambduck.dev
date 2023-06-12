import clsx from 'clsx';

import { DesktopApp } from '@components/DesktopApp.tsx'

export const IntroduceSection = () => {
  return (
    <DesktopApp windowName="Introduce" className='mt-3'>
      <div className="m-auto my-[200px]">
        <h1 className={clsx(
          "font-nunito",
          "text-3xl text-center font-bold",
          "text-[#7E6F73]",
        )}>Hi, I'm Letanta</h1>

        <p className={clsx(
          "font-nunito",
          "text-lg text-center text-[#7E6F73]",
          "mt-2"
        )}>Welcome to my website 🌱</p>
      </div>
    </DesktopApp>
  )
}