import { create } from 'zustand';
import { themes, Themes } from "@styles/themes";

export type ThemeState = {
  theme: Themes,
  changeTheme: (theme: Themes) => void
};

export const useThemeStore = create<ThemeState>()((set) => ({
  theme: themes[0],
  changeTheme: (theme: any) => set(() => ({ theme: theme }))
}));
