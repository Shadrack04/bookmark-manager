import { create } from "zustand";

interface FilterState {
  search: string;
  sortBy: string | null;
  tags: string[];
  isArchived: boolean | null;

  setSearch: (value: string) => void;
  setSortBy: (value: string | null) => void;
  setTags: (tags: string[]) => void;
  setIsArchived: (value: boolean | null) => void;
}

export const useBookmarkFilterStore = create<FilterState>((set) => ({
  search: "",
  sortBy: null,
  tags: [],
  isArchived: false,

  setSearch: (value) => set({ search: value }),
  setSortBy: (value) => set({ sortBy: value }),
  setIsArchived: (value) => set({ isArchived: value }),
  setTags: (value) => set({ tags: value }),
}));
