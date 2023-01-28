import { create } from 'zustand';
import { themes, Theme } from "@styles/themes";

export type ThemeState = {
  theme: Theme,
  changeTheme: (theme: Theme) => void
};

export const useThemeStore = create<ThemeState>()((set) => ({
  theme: themes[0],
  changeTheme: (theme: any) => set(() => ({ theme: theme }))
}));
