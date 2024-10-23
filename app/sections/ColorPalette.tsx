import { ColorSquare } from "../components/ColorSquare"



export const ColorPalette = () => {
  return (
    <div className="bg-dark-bg col-span-3 rounded-lg p-4">
      <div className="flex items-center gap-1">
        <i className="ri-palette-fill text-neutral_orange text-xl" />
        <h2 className="text-xl text-neutral_orange">Grubbox palette</h2>
      </div>

      <div className="grid grid-cols-[70px_minmax(0,1fr)] mt-3">
        <p className="text-md text-dark-fg1 flex items-center">Dark</p>
        <div className="flex items-center border-light0 border-2 rounded-md overflow-hidden w-full">
          <ColorSquare color="bg-dark0_hard" />
          <ColorSquare color="bg-dark0" />
          <ColorSquare color="bg-dark0_soft" />
          <ColorSquare color="bg-dark1" />
          <ColorSquare color="bg-dark2" />
          <ColorSquare color="bg-dark3" />
          <ColorSquare color="bg-dark4" />
        </div>
      </div>

      <div className="grid grid-cols-[69px_minmax(0,1fr)] mt-2">
        <p className="text-md text-dark-fg0 flex items-center">Light</p>
        <div className="flex items-center border-dark3 border-2 rounded-md overflow-hidden w-full">
          <ColorSquare color="bg-light0_hard" />
          <ColorSquare color="bg-light0" />
          <ColorSquare color="bg-light0_soft" />
          <ColorSquare color="bg-light1" />
          <ColorSquare color="bg-light2" />
          <ColorSquare color="bg-light3" />
          <ColorSquare color="bg-light4" />
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">

        <div className="grid grid-cols-1 mt-2">
          <p className="text-md text-dark-fg1 overflow-hidden flex items-center">Red</p>
          <div className="flex flex-col items-center border-dark4 border-2 rounded-md overflow-hidden w-full">
            <ColorSquare color="bg-bright_red" />
            <ColorSquare color="bg-neutral_red" />
            <ColorSquare color="bg-faded_red" />
          </div>
        </div>

        <div className="grid grid-cols-1 mt-2">
          <p className="text-md text-dark-fg1 overflow-hidden flex items-center">Green</p>
          <div className="flex flex-col items-center border-dark4 border-2 rounded-md overflow-hidden w-full">
            <ColorSquare color="bg-bright_green" />
            <ColorSquare color="bg-neutral_green" />
            <ColorSquare color="bg-faded_green" />
          </div>
        </div>

        <div className="grid grid-cols-1 mt-2">
          <p className="text-md text-dark-fg1 overflow-hidden flex items-center">Yellow</p>
          <div className="flex flex-col items-center border-dark4 border-2 rounded-md overflow-hidden w-full">
            <ColorSquare color="bg-bright_yellow" />
            <ColorSquare color="bg-neutral_yellow" />
            <ColorSquare color="bg-faded_yellow" />

          </div>
        </div>

        <div className="grid grid-cols-1 mt-2">
          <p className="text-md text-dark-fg1 overflow-hidden flex items-center">Blue</p>
          <div className="flex flex-col items-center border-dark4 border-2 rounded-md overflow-hidden w-full">
            <ColorSquare color="bg-bright_blue" />
            <ColorSquare color="bg-neutral_blue" />
            <ColorSquare color="bg-faded_blue" />

          </div>
        </div>

        <div className="grid grid-cols-1 mt-2">
          <p className="text-md text-dark-fg1 overflow-hidden flex items-center">Purple</p>
          <div className="flex flex-col items-center border-dark4 border-2 rounded-md overflow-hidden w-full">
            <ColorSquare color="bg-bright_purple" />
            <ColorSquare color="bg-neutral_purple" />
            <ColorSquare color="bg-faded_purple" />
          </div>
        </div>

        <div className="grid grid-cols-1 mt-2">
          <p className="text-md text-dark-fg1 overflow-hidden flex items-center">Aqua</p>
          <div className="flex flex-col items-center border-dark4 border-2 
            rounded-md overflow-hidden w-full">
            <ColorSquare color="bg-bright_aqua" />
            <ColorSquare color="bg-neutral_aqua" />
            <ColorSquare color="bg-faded_aqua" />
          </div>
        </div>

        <div className="grid grid-cols-1 mt-2">
          <p className="text-md text-dark-fg1 overflow-hidden flex items-center">Orange</p>
          <div className="flex flex-col items-center border-dark4 border-2 
            rounded-md overflow-hidden w-full">
            <ColorSquare color="bg-bright_orange" />
            <ColorSquare color="bg-neutral_orange" />
            <ColorSquare color="bg-faded_orange" />
          </div>
        </div>
      </div>

    </div>
  )
}
