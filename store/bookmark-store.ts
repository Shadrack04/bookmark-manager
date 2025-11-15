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
  searchQuery: string | null;
  setSearchQuery: (query: string) => void;
};

export const useBookmarkStore = create<BookmarkStoreType>((set) => ({
  isOpen: false,
  bookmarkItemData: null,
  setIsOpen: (value) => set(() => ({ isOpen: value })),
  setBookmarkItemData: (bookmarkItem: BookmarkItemData) =>
    set({ bookmarkItemData: bookmarkItem }),
  clearBookmarkItemData: () => set({ bookmarkItemData: null }),
  searchQuery: null,
  setSearchQuery: (query: string) => set({ searchQuery: query }),
}));
