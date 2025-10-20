import Sort from "@/components/sort";
import React from "react";

export default function BookmarkScreen() {
  return (
    <section>
      <div className=" flex items-center justify-between">
        <h1 className=" text-secondary font-medium text-2xl">All bookmarks</h1>
        <Sort />
      </div>
    </section>
  );
}
