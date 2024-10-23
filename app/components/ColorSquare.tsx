"use client"
import clsx from "clsx"

export const ColorSquare = ({ color }: { color: string }) => {
  const handleOnClick = () => {
    navigator.clipboard.writeText(color)
  };

  return (
    <button className="aspect-square h-full w-full" onClick={handleOnClick}>
      <div className={clsx("aspect-square h-full w-full", color,)} />
    </button>
  )
}
