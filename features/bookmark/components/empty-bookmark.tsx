import React from "react";

export default function EmptyBookmark() {
  return (
    <div className=" flex flex-col gap-3 items-center justify-center my-10">
      <p className=" text-secondary text-2xl font-bold">Empty Bookmark</p>
      <p className=" text-md text-muted">
        Click Add bookmark button to add your first bookmark
      </p>
    </div>
  );
}
