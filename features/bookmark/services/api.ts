import {
  GET_ALL_BOOKMARKS_ENDPOINT,
  GET_BOOKMARK_ENDPOINT,
} from "@/constants/endpoint";
import api from "@/lib/axios";
import { BookmarkResponse } from "../types";

export const getAllBookmarks = async (): Promise<BookmarkResponse> => {
  return await api.get(GET_ALL_BOOKMARKS_ENDPOINT);
};

export const getBookmarkById = async (id: string) => {
  return await api.get(GET_BOOKMARK_ENDPOINT(id));
};
