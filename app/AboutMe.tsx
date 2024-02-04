import clsx from 'clsx';

import { DesktopApp } from '@components/DesktopApp/index'
import { Heading1, Paragraph } from "@components/Common/Typography";

export const AboutMe = () => {
  return (
    <DesktopApp windowName="About me" className='mt-3'>
      <div className="my-[100px] md:my-[200px]">
        <Heading1 className={clsx("text-center font-bold z-10")}>
          Hi, I'm Tam
        </Heading1>

        <Paragraph className={clsx("text-center text-lg mt-2 z-10")}>
          Welcome to my website 🌱
        </Paragraph>
      </div>
    </DesktopApp>
  )
}
