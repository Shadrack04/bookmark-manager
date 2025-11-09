import { useQuery } from "@tanstack/react-query";
import { getAllBookmarks } from "../services/api";

export const useGetBookmarks = () => {
  return useQuery({
    queryKey: ["bookmarks"],
    queryFn: getAllBookmarks,
  });
};
