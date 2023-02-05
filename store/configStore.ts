import { create } from 'zustand';

export type ConfigState = {
  animationType: number,
  animationFrame: number,
  changeAnimationType: (type: number) => void,
  changeAnimationFrame: (frame: number) => void,
};

export const useConfigStore = create<ConfigState>()((set) => {
  return {
    animationType: 0,
    animationFrame: 30,

    changeAnimationType: (type) => set(() => ({ animationType: type })),
    changeAnimationFrame: (frame) => set(() => ({ animationFrame: frame })),
  }
});
