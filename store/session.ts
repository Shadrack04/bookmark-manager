import { User } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface SessionState {
  token: string | null;
  user: User | null;
  setSession: (token: string, user: User) => void;
  clearSession: () => void;
}

export const useSessionStore = create<SessionState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      setSession: (token, user) => set({ token, user }),
      clearSession: () => set({ token: null, user: null }),
    }),
    { name: "session-storage", storage: createJSONStorage(() => localStorage) }
  )
);
