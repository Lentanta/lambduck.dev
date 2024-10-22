import clsx from "clsx"

export const ColorSquare = ({ color }: { color: string }) => {
  return (
    <div className={clsx("aspect-square h-full w-full md:h-[32px] md:w-[32px]", color,)} />)
}
