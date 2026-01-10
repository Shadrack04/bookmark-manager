import {
  CREATE_BOOKMARK_ENDPOINT,
  GET_ALL_BOOKMARKS_ENDPOINT,
  GET_ALL_TAGS,
  GET_BOOKMARK_ENDPOINT,
  UPDATE_BOOKMARK_BY_ID,
  UPDATE_VIEW_COUNT_ENDPOINT,
} from "@/constants/endpoint";
import api from "@/lib/axios";
import {
  BookmarkRequest,
  BookmarkResponse,
  TagResponseType,
  UpdateRequestData,
} from "../types";

export const getAllBookmarks = async (
  query: string
): Promise<BookmarkResponse> => {
  return await api.get(GET_ALL_BOOKMARKS_ENDPOINT(query));
};

export const getBookmarkById = async (id: string) => {
  return await api.get(GET_BOOKMARK_ENDPOINT(id));
};

export const updateViewCount = async (id: string) => {
  return await api.patch(UPDATE_VIEW_COUNT_ENDPOINT(id));
};

export const updateBookmarkById = async (data: UpdateRequestData) => {
  return await api.put(UPDATE_BOOKMARK_BY_ID(data.id), data.payload);
};

export const createBookmark = async (data: BookmarkRequest) => {
  return await api.post(CREATE_BOOKMARK_ENDPOINT, data);
};
export const editBookmark = async (data: UpdateRequestData) => {
  return await api.put(UPDATE_BOOKMARK_BY_ID(data.id), data.payload);
};

export const getAllTags = async (): Promise<TagResponseType> => {
  return await api.get(GET_ALL_TAGS);
};
