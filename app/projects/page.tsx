import clsx from 'clsx';
import { DesktopApp } from '@components/DesktopApp/index';

const ProjectsPage = () => {
  return (
    <DesktopApp windowName="Projects">
      <div className={clsx(
        "flex justify-center items-center gap-1",
        "m-auto my-5",
      )}>
        <i className={clsx(
          "ri-hammer-line",
          "text-base text-[#7E6F73]",
        )} />

        <p>
          work in progress...
        </p>
      </div>
    </DesktopApp>
  )
}

export default ProjectsPage;
