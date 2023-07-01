import clsx from 'clsx';

import { DesktopApp } from '@components/DesktopApp.tsx'
import { Head1, Paragraph } from "@components/Common/Typography";

export const IntroduceSection = () => {
  return (
    <DesktopApp windowName="Introduce" className='mt-3'>
      <div className="m-auto my-[200px]">
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