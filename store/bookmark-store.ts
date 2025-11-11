import { BookmarkFormSchema } from "@/features/bookmark/validation";
import { create } from "zustand";

type BookmarkItemData = {
  title: string;
  url: string;
  description?: string | null;
  tags?: [string] | [];
};

type BookmarkStoreType = {
  bookmarkItemData: BookmarkFormSchema | null;
  setBookmarkItemData: (item: BookmarkFormSchema) => void;
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
