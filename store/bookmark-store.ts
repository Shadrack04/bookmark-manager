import { BookmarkFormSchema } from "@/features/bookmark/validation";
import { create } from "zustand";

type BookmarkItemData = {
  id: string;
  title: string;
  url: string;
  description?: string;
  tags?: string[];
};

type BookmarkStoreType = {
  bookmarkItemData: BookmarkItemData | null;
  setBookmarkItemData: (item: BookmarkItemData) => void;
  clearBookmarkItemData: () => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const useBookmarkStore = create<BookmarkStoreType>((set) => ({
  isOpen: false,
  bookmarkItemData: null,
  setIsOpen: (value) => set(() => ({ isOpen: value })),
  setBookmarkItemData: (bookmarkItem: BookmarkItemData) =>
    set({ bookmarkItemData: bookmarkItem }),
  clearBookmarkItemData: () => set({ bookmarkItemData: null }),
}));
