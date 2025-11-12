import { BookmarkFormSchema } from "@/features/bookmark/validation";
import { create } from "zustand";

type BookmarkItemData = {
  title: string;
  url: string;
  description?: string | null;
  tags?: [string];
};

type BookmarkStoreType = {
  bookmarkItemData: BookmarkFormSchema | null;
  setBookmarkItemData: (item: BookmarkFormSchema) => void;
  clearBookmarkItemData: () => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const useBookmarkStore = create<BookmarkStoreType>((set) => ({
  isOpen: false,
  bookmarkItemData: null,
  setIsOpen: (value) => set(() => ({ isOpen: value })),
  setBookmarkItemData: (bookmarkItem: BookmarkFormSchema) =>
    set({ bookmarkItemData: bookmarkItem }),
  clearBookmarkItemData: () => set({ bookmarkItemData: null }),
}));
