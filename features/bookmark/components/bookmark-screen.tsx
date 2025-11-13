import Sort from "@/components/sort";
import React from "react";
import Bookmarks from "./bookmarks";

export default function BookmarkScreen() {
  return (
    <section className=" flex flex-col gap-4">
      <div className=" flex items-center justify-between">
        <h1 className=" text-secondary font-medium text-2xl">All bookmarks</h1>
        <Sort />
      </div>
      <Bookmarks />
    </section>
  );
}
