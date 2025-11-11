import { create } from "zustand";

type BookmarkItemData = {
  title: string | null;
  url: string | null;
  description?: string | null;
  tags?: [string] | [];
};

type BookmarkStoreType = {
  bookmarkItemData: BookmarkItemData | null;
  setBookmarkItemData: (item: BookmarkItemData) => void;
  isOpen: boolean;
  setIsOpen: () => void;
};

export const useBookmarkStore = create<BookmarkStoreType>((set) => ({
  isOpen: false,
  bookmarkItemData: null,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  setBookmarkItemData: (bookmarkItem: BookmarkItemData) =>
    set({ bookmarkItemData: bookmarkItem }),
}));
