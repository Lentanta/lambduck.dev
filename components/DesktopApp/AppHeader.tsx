import clsx from 'clsx';

export const AppHeader = ({ windowName }: { windowName: string, }) => {
  return (
    <div className={clsx(
      "py-3 px-3",
      "bg-color-dark",
      "flex justify-between items-center",
    )}>

      <p className="text-color-light font-bold text-body">
        {windowName}
      </p>

      <i className="text-color-light ri-close-line" />
    </div>
  )
}
