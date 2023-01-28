import { create } from 'zustand';
import { animationTypeNames } from "@utils/constant"

export type ConfigState = {
  animationType: string,
  animationFrame: number,
  changeAnimationType: (type: string) => void,
  changeAnimationFrame: (frame: number) => void,
};

export const useConfigStore = create<ConfigState>()((set) => {
  return {
    animationType: animationTypeNames.HORIZONTAL_SIN_WAVE,
    animationFrame: 30,

    changeAnimationType: (type) => set(() => ({ animationType: type })),
    changeAnimationFrame: (frame) => set(() => ({ animationFrame: frame })),
  }
});
