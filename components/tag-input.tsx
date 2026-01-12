"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";

type TagInputType = {
  value: string[];
  onChange: (value: string[]) => void;
  placeHolder?: string;
};

export default function TagInput({
  value,
  onChange,
  placeHolder = "Press enter to add tag",
}: TagInputType) {
  const [inputValue, setInputValue] = useState("");

  const addTag = (tag: string) => {
    const trim = tag.trim();
    if (!trim) return;
    if (value.includes(trim)) return;
    onChange([...value, trim]);
    setInputValue("");
  };

  const removeTag = (tag: string) => {
    onChange(value.filter((t) => t !== tag));
  };

  return (
    <div className="flex flex-wrap gap-1 rounded-md ">
      {value.map((tag) => (
        <span
          key={tag}
          className="flex items-center gap-1 text-secondary rounded-md border border-input bg-background px-2 py-1 text-xs font-medium"
        >
          {tag}
          <button
            type="button"
            onClick={() => removeTag(tag)}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="size-3" />
          </button>
        </span>
      ))}

      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            addTag(inputValue);
          }

          if (e.key === "Backspace" && !inputValue && value.length) {
            removeTag(value[value.length - 1]);
          }
        }}
        placeholder={placeHolder}
        // className="h-7 min-w-[120px] border-0 shadow-none focus-visible:ring-0"
      />
    </div>
  );
}
