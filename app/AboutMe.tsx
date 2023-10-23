import clsx from 'clsx';

import { DesktopApp } from '@components/DesktopApp.tsx'
import { Head1, Paragraph } from "@components/Common/Typography";

export const AboutMe = () => {
  return (
    <DesktopApp windowName="About me" className='mt-3'>
      <div className="my-[100px] md:my-[200px]">
        <Head1 className={clsx("text-center font-bold")}>
          Hi, I'm Tam
        </Head1>

        <Paragraph className={clsx("text-center text-lg mt-2")}>
          Welcome to my website 🌱
        </Paragraph>
      </div>
    </DesktopApp>
  )
}