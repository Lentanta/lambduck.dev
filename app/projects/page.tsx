import clsx from 'clsx';
import { DesktopApp } from '@components/DesktopApp/index';
import { Paragraph } from '@components/Common/Typography';

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

        <Paragraph>
          work in progress...
        </Paragraph>
      </div>
    </DesktopApp>
  )
}

export default ProjectsPage;