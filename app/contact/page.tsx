import clsx from 'clsx';

import { DesktopApp } from '@components/DesktopApp.tsx';
import { Paragraph } from '@components/Common/Typography';

const ContactPage = () => {

  return (
    <DesktopApp windowName="Contact">
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

export default ContactPage;