import clsx from "clsx"

export const WebsiteInformations = () => {
  return (
    <div className={clsx(
      "bg-dark-bg col-span-full rounded-lg p-4",
      "md:col-span-3"
    )}>

      <div className="flex items-center gap-1">
        <i className="ri-information-fill text-dark-blue1 text-xl" />
        <p className="text-xl text-dark-blue1">Website informations:</p>
      </div>

      <ul className="mt-2 h-full">
        <li className="flex items-center">
          <div className="flex items-center gap-2">
            <i className="ri-window-line text-dark-fg1 text-2xl" />
            <p className="text-md text-dark-fg1">Version: 3.0</p>
          </div>
        </li>

        <li className="flex items-center">
          <div className="flex items-center gap-2">
            <i className="ri-ubuntu-line text-dark-fg1 text-2xl" />
            <p className="text-md text-dark-fg1">OS: Ubuntu v22.0</p>
          </div>
        </li>

        <li className="flex items-center">
          <div className="flex items-center gap-2">
            <i className="ri-nextjs-line text-dark-fg1 text-2xl" />
            <p className="text-md text-dark-fg1">Framework: NextJS v13</p>
          </div>
        </li>
      </ul>
    </div>
  )
}
