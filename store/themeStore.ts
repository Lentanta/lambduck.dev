import { create } from 'zustand';
import { themes } from "@styles/themes";

export const useThemeStore = create((set) => ({
  theme: themes[0],
  changeTheme: (theme: any) => set(() => ({ theme: theme }))
}));
