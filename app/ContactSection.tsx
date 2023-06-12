import clsx from 'clsx';

import { Paragraph } from '@components/Common/Typography';
import { DesktopApp } from '@components/DesktopApp.tsx';

export const ContactSection = () => {
  return (
    <DesktopApp windowName="Contact" className="mt-3">
      <div className={clsx("flex items-center gap-2 mt-1")}>
        <i className={clsx(
          "ri-map-pin-line",
          "text-xl text-A3",
        )} />

        <Paragraph>
          Saigon, Vietnam
        </Paragraph>
      </div>

      <div className={clsx("flex items-center gap-2 mt-1")}>
        <i className={clsx(
          "ri-mail-line",
          "text-xl text-A3",
        )} />

        <Paragraph>
          thanhtam180298@gmail.com
        </Paragraph>
      </div>

      <div className={clsx("flex items-center gap-2 mt-1")}>
        <i className={clsx(
          "ri-github-line",
          "text-xl text-A3",
        )} />

        <Paragraph>
          Lentanta
        </Paragraph>
      </div>
    </DesktopApp>
  )
}