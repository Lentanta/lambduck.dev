import clsx from 'clsx';

import { AppHeader } from "./AppHeader";

export const DesktopApp = (props: { windowName: string, children: React.ReactNode, className?: string, id?: string }) => {
  const { windowName, children, className } = props;

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
      <div className="">
        {children}
      </div>
    </div>
  );
}