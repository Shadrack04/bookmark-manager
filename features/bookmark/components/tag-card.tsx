import React from "react";

type TagCardProps = {
  tagName: string;
};

export default function TagCard({ tagName }: TagCardProps) {
  return (
    <p className=" p-2 bg-background text-muted text-sm rounded-md">
      {tagName}
    </p>
  );
}
