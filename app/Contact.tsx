import clsx from 'clsx';

import { Paragraph } from '@components/Common/Typography';
import { LinkWrapper } from '@components/Common/LinkWrapper';
import { DesktopApp } from '@components/DesktopApp.tsx';

export const Contact = () => {
  return (
    <DesktopApp windowName="Contact" className="mt-5">
      <div className="py-2 px-4">
        <div className={clsx("flex items-center gap-2 mt-1")}>
          <i className={clsx(
            "ri-map-pin-line",
            "text-xl text-mildly-cyan-black",
          )} />

          <Paragraph>
            Saigon, Vietnam
          </Paragraph>
        </div>

        <div className={clsx("flex items-center gap-2 mt-1")}>
          <i className={clsx(
            "ri-mail-line",
            "text-xl text-mildly-cyan-black",
          )} />

          <Paragraph>
            thanhtam180298@gmail.com
          </Paragraph>
        </div>

        <div className={clsx("flex items-center gap-2 mt-1")}>
          <i className={clsx(
            "ri-github-line",
            "text-xl text-mildly-cyan-black",
          )} />

          <LinkWrapper href="https://github.com/Lentanta" target="_blank">
            <Paragraph>
              Lentanta
            </Paragraph>
          </LinkWrapper>
        </div>
      </div>
    </DesktopApp>
  )
}