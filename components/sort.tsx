"use client";

import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

import { ArrowDownUp, CheckIcon } from "lucide-react";
import { Card } from "./ui/card";

export default function Sort() {
  const [sortOption, setSortOption] = useState<string>("recently-added");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Card className=" px-3 py-2 bg-foreground hover:bg-transparent flex-row items-center gap-1 rounded-md border-1 border-secondary/50 cursor-pointer shadow-sm">
          <ArrowDownUp className=" text-secondary size-5" />
          <p className=" text-secondary text-sm font-medium">Sort by</p>
        </Card>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" custom-sort-menu w-48 bg-foreground">
        <DropdownMenuRadioGroup
          value={sortOption}
          onValueChange={setSortOption}
        >
          <DropdownMenuRadioItem
            value="recently-added"
            className=" pl-2 [&>span.absolute.left-2]:hidden flex items-center justify-between"
          >
            Recently added
            {sortOption === "recently-added" && (
              <CheckIcon className="size-4" />
            )}
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem
            value="recently-visited"
            className=" pl-2 [&>span.absolute.left-2]:hidden flex items-center justify-between"
          >
            Recently visited
            {sortOption === "recently-visited" && (
              <CheckIcon className="size-4" />
            )}
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem
            value="most-visited"
            className=" pl-2 [&>span.absolute.left-2]:hidden flex items-center justify-between"
          >
            Most visited
            {sortOption === "most-visited" && <CheckIcon className="size-4" />}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
