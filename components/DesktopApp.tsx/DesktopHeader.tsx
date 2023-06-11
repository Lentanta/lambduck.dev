import clsx from 'clsx';

export const DesktopHeader = ({ windowName }: { windowName: string, }) => {
  // <div className='py-3 px-3 bg-A1 shadow-sm rounded-md flex justify-between items-center'>

  return (
    <div className={clsx(
      "py-3 px-3",
      "bg-A1 shadow-sm rounded-md",
      "flex justify-between items-center",
    )}>
      <div className={clsx(
        "font-nunito",
        "text-base text-center font-semibold",
        "text-[#7E6F73]")}>
        {windowName}
      </div>

      <i className="ri-close-line text-lg font-normal text-A3" />
    </div>
  )
}