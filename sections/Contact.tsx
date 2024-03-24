import clsx from 'clsx';
import NextLink from "next/link";

import { DesktopApp } from '@components/DesktopApp/index';

export const Contact = () => {
  return (
    <DesktopApp windowName="Contact" className="mt-5">
      <div className={clsx("flex items-center gap-2 mt-1")}>
        <i className="ri-map-pin-line text-color-dark" />
        <p>Saigon, Vietnam</p>
      </div>

      <div className={clsx("flex items-center gap-2 mt-1")}>
        <i className="ri-mail-line text-color-dark" />
        <p>thanhtam180298@gmail.com</p>
      </div>

      <div className={clsx("flex items-center gap-2 mt-1")}>
        <i className="ri-github-line text-color-dark" />
        <NextLink href="https://github.com/Lentanta" target="_blank">
          <p>Lentanta</p>
        </NextLink>
      </div>
    </DesktopApp>
  )
}
