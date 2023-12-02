import { PropsWithChildren, ReactNode } from "react"
import clsx from 'clsx';

import { AppHeader } from "./AppHeader";


type DesktopAppWrapperProps = {
  windowName: string,
  className?: string,
}

export const DesktopApp = (props: PropsWithChildren<DesktopAppWrapperProps>) => {
  const { children, windowName, className } = props;

  return (
    <div className={clsx(
      "mx-3",
      "md:mt-5 md:mx-auto",
      "max-w-[768px]",
      "border-gruvbox-light-fg border-solid border-2",
      "rounded-md shadow-md",
      className
    )}>
      <AppHeader windowName={windowName} />

      <div className="py-2 px-4">
        {children}
      </div>
    </div>
  );
}