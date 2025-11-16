import { useQuery } from "@tanstack/react-query";
import { getAllBookmarks } from "../services/api";
import { useBookmarkFilterStore } from "@/store/bookmark-filter-store";
import { urlQueryBuilder } from "@/lib/url-query-builder";

export const useGetBookmarks = () => {
  const { search, isArchived, tags, sortBy } = useBookmarkFilterStore();
  const query = urlQueryBuilder({ search, isArchived, tags, sortBy });
  return useQuery({
    queryKey: ["bookmarks", { search, isArchived, tags, sortBy }],
    queryFn: () => getAllBookmarks(query),
    retry: 3,
  });
};
