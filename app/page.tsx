import { Metadata } from 'next';
import clsx from 'clsx';

import { Paragraph } from '@components/Common/Typography';
import { DesktopApp } from '@components/DesktopApp.tsx';

export const metadata: Metadata = {
  title: 'Lentanta website',
};

export default function Page() {
  return (
    <div>
      <DesktopApp windowName="Introduce" className="mt-[100px]">
        <div className="m-auto w-fit h-fit my-[200px]">
          <h1 className={clsx(
            "font-nunito",
            "text-5xl text-center font-bold",
            "text-[#7E6F73]",
          )}>Hi, I'm Letanta</h1>

          <p className={clsx(
            "font-nunito",
            "text-lg text-center text-[#7E6F73]",
            "mt-2"
          )}>Welcome to my website 🌱</p>
        </div>
      </DesktopApp>
    </div>
  );
}