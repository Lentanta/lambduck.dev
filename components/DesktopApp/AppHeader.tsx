import clsx from 'clsx';

export const AppHeader = ({ windowName }: { windowName: string, }) => {
  return (
    <div className={clsx(
      "py-3 px-3",
      "bg-gruvbox-light-fg",
      "flex justify-between items-center",
    )}>

      <div className={clsx(
        "font-nunito",
        "text-md text-center font-bold",
        "text-gruvbox-light-bg-hard")}>
        {windowName}
      </div>

      <i className={clsx(
        "text-gruvbox-light-bg-hard",
        "ri-close-line",
        "text-md font-normal"
      )} />
    </div>
  )
}
