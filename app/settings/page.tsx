import clsx from 'clsx';
import { DesktopApp } from '@components/DesktopApp.tsx';
import { Paragraph } from '@components/Common/Typography';

const SettingsPage = () => {
  return (
    <DesktopApp windowName="Settings">
      <div className={clsx(
        "flex justify-center items-center gap-1",
        "my-5"
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

export default SettingsPage;