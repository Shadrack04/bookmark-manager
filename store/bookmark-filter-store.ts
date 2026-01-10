import Tags from "@/components/tags";
import { create } from "zustand";

interface FilterState {
  search: string;
  sortBy: string | undefined;
  tags: string[];
  isArchived: boolean | null;

  setSearch: (value: string) => void;
  setSortBy: (value: string | undefined) => void;
  setTags: (tags: string[]) => void;
  setIsArchived: (value: boolean | null) => void;
  toggleTag: (value: string) => void;
}

export const useBookmarkFilterStore = create<FilterState>((set) => ({
  search: "",
  sortBy: "recently-added",
  tags: [],
  isArchived: false,

  setSearch: (value) => set({ search: value }),
  setSortBy: (value) => set({ sortBy: value }),
  setIsArchived: (value) => set({ isArchived: value }),
  setTags: (value) => set({ tags: value }),
  toggleTag: (value) =>
    set((state) => ({
      tags: state.tags.includes(value)
        ? state.tags.filter((tag) => tag != value)
        : [...state.tags, value],
    })),
}));
