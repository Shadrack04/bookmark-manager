"use client";

import React from "react";
import BookmarkCard from "./bookmark-card";
import { useGetBookmarks } from "../hooks/useGetBookmarks";
import Loading from "@/features/bookmark/components/loading";
import EmptyBookmark from "./empty-bookmark";

export default function Bookmarks() {
  const { data, isPending, isError, error } = useGetBookmarks();

  if (isPending) {
    return <Loading />;
  }

  if (data?.data.data.length === 0) {
    return <EmptyBookmark />;
  }

  if (isError) {
    console.log(error);
  }
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4">
      {data?.data.data.map((item) => (
        <BookmarkCard
          key={item._id}
          title={item.title}
          description={item.description}
          url={item.url}
          _id={item._id}
          tags={item.tags}
          favicon={item.favicon}
          isArchived={item.isArchived}
          lastVisited={item.lastVisited}
          pinned={item.pinned}
          visitCount={item.visitCount}
        />
      ))}
      {/* <BookmarkCard />
      <BookmarkCard />
      <BookmarkCard /> */}
    </div>
  );
}
