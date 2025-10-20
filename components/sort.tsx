import { ArrowDownUp } from "lucide-react";
import React from "react";
import { Card } from "./ui/card";

export default function Sort() {
  return (
    <Card className=" p-3 bg-foreground hover:bg-transparent flex-row items-center gap-1 rounded-md border-1 border-secondary/50 cursor-pointer shadow-sm">
      <ArrowDownUp className=" text-secondary" />
      <p className=" text-secondary text-md font-medium">Sort by</p>
    </Card>
  );
}
