import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeState = {
  isDarkTheme: boolean;
  setIsDarkTheme: () => void;
  initializeTheme: () => void;
};

// export const useTheme = create<ThemeState>((set) => ({
//   isDarkTheme: false,
//   setIsDarkTheme: () => set((state) => ({ isDarkTheme: !state.isDarkTheme })),
// }));

export const useTheme = create<ThemeState>()(
  persist(
    (set, get) => ({
      isDarkTheme: false,

      setIsDarkTheme: () => {
        const newTheme = !get().isDarkTheme;
        // set((state) => ({ isDarkTheme: !state.isDarkTheme })),
        set({ isDarkTheme: newTheme });

        if (typeof window !== "undefined") {
          document.documentElement.classList.toggle("dark", newTheme);
        }
      },

      initializeTheme: () => {
        if (typeof window !== "undefined") {
          const { isDarkTheme } = get();
          document.documentElement.classList.toggle("dark", isDarkTheme);
        }
      },
    }),
    {
      name: "theme-storage",
    }
  )
);
