"use client";

import React from "react";
import { motion } from "motion/react";
import BookmarkCard from "./bookmark-card";
import { useGetBookmarks } from "../hooks/useGetBookmarks";
import Loading from "@/features/bookmark/components/loading";
import EmptyBookmark from "./empty-bookmark";
import Error from "./error";

export default function Bookmarks() {
  const { data, isPending, isError, error } = useGetBookmarks();
  console.log(data?.data.data);

  if (isPending) {
    return <Loading />;
  }

  if (data?.data.data.length === 0) {
    return <EmptyBookmark />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 overflow-y-auto max-h-[80vh] scrollbar-hide"
    >
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
          createdAt={item.createdAt}
        />
      ))}
      {/* <BookmarkCard />
      <BookmarkCard />
      <BookmarkCard /> */}
    </motion.div>
  );
}
