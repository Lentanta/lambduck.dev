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

      <div>

      </div>

      <i className={clsx(
        "ri-close-line",
        "text-md font-normal text-gruvbox-light-bg-hard")}
      />
    </div>
  )
}
