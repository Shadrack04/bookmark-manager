import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeState = {
  isDarkTheme: boolean;
  setIsDarkTheme: () => void;
};

// export const useTheme = create<ThemeState>((set) => ({
//   isDarkTheme: false,
//   setIsDarkTheme: () => set((state) => ({ isDarkTheme: !state.isDarkTheme })),
// }));

export const useTheme = create<ThemeState>()(
  persist(
    (set) => ({
      isDarkTheme: false,
      setIsDarkTheme: () =>
        set((state) => ({ isDarkTheme: !state.isDarkTheme })),
    }),
    {
      name: "theme-storage",
    }
  )
);
