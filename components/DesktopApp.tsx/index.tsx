import clsx from 'clsx';

import { DesktopHeader } from "./DesktopHeader";

export const DesktopApp = (props: {windowName: string, children: React.ReactNode, className?: string, id?: string}) => {
  const { windowName, children, className, id } = props;

  return (
    <div className={clsx(
      "m-auto",
      "max-md:mx-3",
      "max-w-[1024px] w-full",
      "rounded-md shadow-lg bg-A1",
      className
    )}>
      <DesktopHeader windowName={windowName} />
      <div className="p-5">
        {children}
      </div>
    </div>
  );
}