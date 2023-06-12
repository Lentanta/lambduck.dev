import clsx from 'clsx';
import { DesktopApp } from '@components/DesktopApp.tsx';
import { Paragraph } from '@components/Common/Typography';

export const ProjectsSection = () => {
  return (
    <DesktopApp windowName="Projects" className="mt-3">
      <div className={clsx(
        "flex justify-center items-center gap-1",
        "m-auto my-5",
      )}>
        <i className={clsx(
          "ri-hammer-line",
          "text-base text-[#7E6F73]",
        )} />

        <Paragraph>
          work in progress...
        </Paragraph>
      </div>
    </DesktopApp>
  )
}