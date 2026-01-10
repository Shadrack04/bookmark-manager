// createdAt: "2025-11-02T09:05:47.755Z";
// description: "Vercel gives developers the frameworks, workflows, and infrastructure to build a faster, more personalized web.";
// favicon: "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/4JmubmYDJnFtstwHbaZPev/0c3576832aae5b1a4d98c8c9f98863c3/Vercel_Home_OG.png";
// isArchived: false;
// lastVisited: null;
// pinned: false;
// tags: (2)[("deploy", "tech")];
// title: "Vercel";
// updatedAt: "2025-11-02T09:05:47.755Z";
// url: "https://vercel.com";
// userId: "6900d478a5b612139618fe07";
// visitCount: 0;
// __v: 0;
// _id: "69071eeb223b6961d693abbb";

export type BookmarkRequest = {
  title: string;
  url: string;
  description?: string;
  tags?: string[];
};

export type Bookmark = {
  title: string;
  url: string;
  description: string;
  isArchived: boolean;
  lastVisited: string;
  _id: string;
  visitCount: number;
  tags: [string];
  favicon: string;
  pinned: boolean;
};

export type BookmarkResponse = {
  data: {
    data: Bookmark[];
  };
};

export type UpdateRequestData = {
  id: string;
  payload: Partial<{
    pinned: boolean;
    isArchived: boolean;
    title: string;
    url: string;
    description: string;
    tags: string[];
  }>;
};

type Tag = {
  _id: string;
  tagName: string;
};

export type TagResponseType = {
  data: {
    data: Tag[];
  };
};
