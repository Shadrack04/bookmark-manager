"use client";

import React from "react";
import { Input } from "./ui/input";

import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

type TagItemProps = {
  isChecked: boolean;
  tagName: string;
  tagCount?: number;
};

export default function TagItem() {
  return (
    <div className=" flex items-center justify-between">
      <div className=" flex items-center gap-2">
        <Checkbox
          className=" size-5 data-[state=checked]:text-white"
          id="terms"
        />
        <Label htmlFor="terms" className=" text-muted">
          Accept terms
        </Label>
      </div>
      <div className=" size-6 flex items-center justify-center rounded-full bg-background">
        <p className=" text-muted ">2</p>
      </div>
    </div>
  );
}
