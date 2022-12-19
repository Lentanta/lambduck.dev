import 'remixicon/fonts/remixicon.css'

export const Icon = (props: any) => {
  const { size, iconName } = props;
  const sizeInPx = `${size}px`

  return (
    <div style={{ fontSize: sizeInPx, width: sizeInPx, height: sizeInPx }}>
      <i className={iconName}></i>
    </div>
  )
}