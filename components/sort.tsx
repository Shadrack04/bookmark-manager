import { ArrowDownUp } from "lucide-react";
import React from "react";

export default function Sort() {
  return (
    <div className=" p-3 bg-foreground flex items-center gap-1 rounded-md border-2 border-border">
      <ArrowDownUp className=" text-secondary" />
      <p className=" text-secondary text-md font-medium">Sort by</p>
    </div>
  );
}
