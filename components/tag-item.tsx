import React from "react";
import { Input } from "./ui/input";

type TagItemProps = {
  isChecked: boolean;
  tagName: string;
  tagCount?: number;
};

export default function TagItem({
  tagName,
  tagCount,
  isChecked,
}: TagItemProps) {
  return (
    <div className=" flex items-center justify-between">
      <div className=" flex items-center gap-2">
        <Input type="checkbox" className=" size-4 rounded-sm" />
        <p className=" text-muted">Ai</p>
      </div>
      <div className=" size-6 flex items-center justify-center rounded-full bg-background">
        <p className=" text-muted ">2</p>
      </div>
    </div>
  );
}
