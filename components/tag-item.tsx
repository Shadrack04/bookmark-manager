"use client";

import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";

import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { useBookmarkFilterStore } from "@/store/bookmark-filter-store";

type TagItemProps = {
  tagName: string;
  tagCount?: number;
};

export default function TagItem({ tagName, tagCount }: TagItemProps) {
  const { toggleTag, tags } = useBookmarkFilterStore();

  const isChecked = tags.includes(tagName);

  return (
    <div className=" flex items-center justify-between">
      <div className=" flex items-center gap-2">
        <Checkbox
          checked={isChecked}
          onCheckedChange={() => toggleTag(tagName)}
          className=" size-5 data-[state=checked]:text-white"
          id={tagName}
        />
        <Label htmlFor={tagName} className=" text-muted">
          {tagName}
        </Label>
      </div>
      <div className=" size-6 flex items-center justify-center rounded-full bg-background">
        <p className=" text-muted ">2</p>
      </div>
    </div>
  );
}
