'use client'

export const ActionBar = () => {
  return (
    <div className="col-span-full bg-dark0 rounded-lg p-2">

      <div className="flex items-center justify-end gap-2">
        <button
          className="aspect-square bg-neutral_aqua flex items-center justify-center rounded-lg p-2"
          onClick={() => { location.reload() }}>
          <i className="ri-refresh-line text-light0 text-xl"></i>
        </button>

        <button
          className="aspect-square bg-neutral_red flex items-center justify-center rounded-lg p-2"
          onClick={() => { window.close() }}>
          <i className="ri-shut-down-line text-light0 text-xl"></i>
        </button>
      </div>

    </div>
  )
}
