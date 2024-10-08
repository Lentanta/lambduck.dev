export const ColorPalette = () => {
  return (
    <div className="bg-dark-bg col-span-2 rounded-lg p-4">
      <div className="flex items-center gap-1">
        <i className="ri-palette-fill text-neutral_orange text-xl" />
        <h2 className="text-xl text-neutral_orange">Grubbox palette</h2>
      </div>

      <div className="grid grid-cols-[70px_minmax(0,1fr)] mt-2">
        <p className="text-md text-dark-fg1 flex items-center">Dark</p>
        <div className="flex items-center border-light0 border-2 rounded-md overflow-hidden w-fit">
          <div className="aspect-square h-[32px] w-[32px] bg-dark0_hard" />
          <div className="aspect-square h-[32px] w-[32px] bg-dark0" />
          <div className="aspect-square h-[32px] w-[32px] bg-dark0_soft" />
          <div className="aspect-square h-[32px] w-[32px] bg-dark1" />
          <div className="aspect-square h-[32px] w-[32px] bg-dark2" />
          <div className="aspect-square h-[32px] w-[32px] bg-dark3" />
          <div className="aspect-square h-[32px] w-[32px] bg-dark4" />
        </div>
      </div>

      <div className="grid grid-cols-[69px_minmax(0,1fr)] mt-2">
        <p className="text-md text-dark-fg0 flex items-center">Light</p>
        <div className="flex items-center border-dark3 border-2 rounded-md overflow-hidden w-fit">
          <div className="aspect-square h-[31px] w-[32px] bg-light0_hard" />
          <div className="aspect-square h-[31px] w-[32px] bg-light0" />
          <div className="aspect-square h-[31px] w-[32px] bg-light0_soft" />
          <div className="aspect-square h-[31px] w-[32px] bg-light1" />
          <div className="aspect-square h-[31px] w-[32px] bg-light2" />
          <div className="aspect-square h-[31px] w-[32px] bg-light3" />
          <div className="aspect-square h-[31px] w-[32px] bg-light4" />
        </div>
      </div>

      <div className="grid grid-cols-7">

        <div className="grid grid-cols-1 mt-2">
          <p className="text-md text-dark-fg1 flex items-center">Red</p>
          <div className="flex flex-col items-center border-dark4 border-2 rounded-md overflow-hidden w-fit">
            <div className="aspect-square h-[32px] w-[32px] bg-bright_red" />
            <div className="aspect-square h-[32px] w-[32px] bg-neutral_red" />
            <div className="aspect-square h-[32px] w-[32px] bg-faded_red" />
          </div>
        </div>

        <div className="grid grid-cols-1 mt-2">
          <p className="text-md text-dark-fg1 flex items-center">Gre</p>
          <div className="flex flex-col items-center border-dark4 border-2 rounded-md overflow-hidden w-fit">
            <div className="aspect-square h-[32px] w-[32px] bg-bright_green" />
            <div className="aspect-square h-[32px] w-[32px] bg-neutral_green" />
            <div className="aspect-square h-[32px] w-[32px] bg-faded_green" />
          </div>
        </div>

        <div className="grid grid-cols-1 mt-2">
          <p className="text-md text-dark-fg1 flex items-center">Yel</p>
          <div className="flex flex-col items-center border-dark4 border-2 rounded-md overflow-hidden w-fit">
            <div className="aspect-square h-[32px] w-[32px] bg-bright_yellow" />
            <div className="aspect-square h-[32px] w-[32px] bg-neutral_yellow" />
            <div className="aspect-square h-[32px] w-[32px] bg-faded_yellow" />
          </div>
        </div>

        <div className="grid grid-cols-1 mt-2">
          <p className="text-md text-dark-fg1 flex items-center">Blu</p>
          <div className="flex flex-col items-center border-dark4 border-2 rounded-md overflow-hidden w-fit">
            <div className="aspect-square h-[32px] w-[32px] bg-bright_blue" />
            <div className="aspect-square h-[32px] w-[32px] bg-neutral_blue" />
            <div className="aspect-square h-[32px] w-[32px] bg-faded_blue" />
          </div>
        </div>

        <div className="grid grid-cols-1 mt-2">
          <p className="text-md text-dark-fg1 flex items-center">Pur</p>
          <div className="flex flex-col items-center border-dark4 border-2 rounded-md overflow-hidden w-fit">
            <div className="aspect-square h-[32px] w-[32px] bg-bright_purple" />
            <div className="aspect-square h-[32px] w-[32px] bg-neutral_purple" />
            <div className="aspect-square h-[32px] w-[32px] bg-faded_purple" />
          </div>
        </div>

        <div className="grid grid-cols-1 mt-2">
          <p className="text-md text-dark-fg1 flex items-center">Aqu</p>
          <div className="flex flex-col items-center border-dark4 border-2 rounded-md overflow-hidden w-fit">
            <div className="aspect-square h-[32px] w-[32px] bg-bright_aqua" />
            <div className="aspect-square h-[32px] w-[32px] bg-neutral_aqua" />
            <div className="aspect-square h-[32px] w-[32px] bg-faded_aqua" />
          </div>
        </div>

        <div className="grid grid-cols-1 mt-2">
          <p className="text-md text-dark-fg1 flex items-center">Ora</p>
          <div className="flex flex-col items-center border-dark4 border-2 rounded-md overflow-hidden w-fit">
            <div className="aspect-square h-[32px] w-[32px] bg-bright_orange" />
            <div className="aspect-square h-[32px] w-[32px] bg-neutral_orange" />
            <div className="aspect-square h-[32px] w-[32px] bg-faded_orange" />
          </div>
        </div>
      </div>

    </div>
  )
}
