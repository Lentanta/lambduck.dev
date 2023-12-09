import clsx from 'clsx';

import { DesktopApp } from '@components/DesktopApp/index'
import { Heading1, Paragraph } from "@components/Common/Typography";

export const Animation = () => {
  return (
    <DesktopApp windowName="About me" className='mt-3'>
      <div className="flex items-center justify-center w-full aspect-square">
        <iframe src="https://animation-dots-ewruf1buu-thanhtam1802.vercel.app/"
          className='w-full h-full' />
      </div>
    </DesktopApp>
  )
}