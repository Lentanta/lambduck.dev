import clsx from 'clsx';

export const AppHeader = ({ windowName }: { windowName: string, }) => {
  return (
    <div className={clsx(
      "py-3 px-3",
      "bg-color-1",
      "flex justify-between items-center",
    )}>

      <div className={clsx(
        "font-nunito",
        "text-md text-center font-bold",
        "text-color-4")}>
        {windowName}
      </div>

      <i className={clsx(
        "text-color-4",
        "ri-close-line",
        "text-md font-normal"
      )} />
    </div>
  )
}
