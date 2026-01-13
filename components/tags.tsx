import React from "react";
import TagItem from "./tag-item";
import { useGetTags } from "@/features/bookmark/hooks/use-get-tags";

export default function Tags() {
  const { data } = useGetTags();
  console.log(data?.data.data);
  return (
    <div className=" px-2 flex flex-col gap-2">
      <h2 className=" text-muted text-lg mb-2">Tags</h2>
      {data?.data.data.map((item) => (
        <TagItem tagName={item.tagName} key={item.tagName} />
      ))}
    </div>
  );
}
