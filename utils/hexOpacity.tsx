export const hexOpacity = (hexColor: string, opacityPercent: number) => {
  const hexNumber = (Math.floor(opacityPercent * 255 / 100)).toString(16);

  if (hexColor.length > 7) {
    return hexColor.replace(/.{0,2}$/, '') + hexNumber;
  };

  return hexColor + hexNumber;
};