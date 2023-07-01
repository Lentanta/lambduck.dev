import clsx from 'clsx';

export const DesktopHeader = ({ windowName }: { windowName: string, }) => {
  return (
    <div className={clsx(
      "py-3 px-3",
      "bg-mildly-cyan-black",
      "flex justify-between items-center",
    )}>
      <div className={clsx(
        "font-nunito",
        "text-md text-center font-semibold",
        "text-mildly-green-white")}>
        {windowName}
      </div>

      <i className="ri-close-line text-lg font-normal text-mildly-green-white" />
    </div>
  )
}