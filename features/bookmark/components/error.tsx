import React from "react";

export default function Error() {
  return (
    <div className=" flex flex-col gap-3 items-center justify-center my-10">
      <p className=" text-secondary text-2xl font-bold">
        Error getting Bookmarks
      </p>
      <p className=" text-md text-muted text-center md:w-[30rem]">
        Something went wrong while trying to fetch your bookmarks. Please
        refresh this page to try again
      </p>
    </div>
  );
}
