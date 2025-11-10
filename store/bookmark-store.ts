import { create } from "zustand";

type BookmarkStoreType = {
  isOpen: boolean;
  setIsOpen: () => void;
};

export const useBookmarkStore = create<BookmarkStoreType>((set) => ({
  isOpen: true,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
