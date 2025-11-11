export const SIGN_UP_ENDPOINT = "/auth/sign-up";

export const SIGN_IN_ENDPOINT = "/auth/sign-in";

export const GET_ALL_BOOKMARKS_ENDPOINT = "/bookmark";

export const CREATE_BOOKMARK_ENDPOINT = "/bookmark";

export const GET_BOOKMARK_ENDPOINT = (id: string) => `/bookmark/${id}`;

export const UPDATE_VIEW_COUNT_ENDPOINT = (id: string) =>
  `/bookmark/${id}/view`;

export const UPDATE_BOOKMARK_BY_ID = (id: string) => `/bookmark/${id}`;
