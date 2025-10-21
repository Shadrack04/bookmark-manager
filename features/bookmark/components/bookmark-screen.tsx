import Sort from "@/components/sort";
import React from "react";
import BookmarkCard from "./bookmark-card";

export default function BookmarkScreen() {
  return (
    <section className=" flex flex-col gap-4">
      <div className=" flex items-center justify-between">
        <h1 className=" text-secondary font-medium text-2xl">All bookmarks</h1>
        <Sort />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
        <BookmarkCard />
        <BookmarkCard />
        <BookmarkCard />
      </div>
    </section>
  );
}
