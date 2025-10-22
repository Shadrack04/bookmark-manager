"use client";

import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ArrowDownUp } from "lucide-react";
import { Card } from "./ui/card";

// export default function Sort() {
//   return (
//     <Card className=" p-3 bg-foreground hover:bg-transparent flex-row items-center gap-1 rounded-md border-1 border-secondary/50 cursor-pointer shadow-sm">
//       <ArrowDownUp className=" text-secondary" />
//       <p className=" text-secondary text-md font-medium">Sort by</p>
//     </Card>
//   );
// }

type Checked = boolean;

export default function Sort() {
  const [nextjs, setNextjs] = useState<Checked>(false);
  const [sveltekit, setSveltekit] = useState<Checked>(true);
  const [astro, setAstro] = useState<Checked>(false);
  const [remix, setRemix] = useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Card className=" px-3 py-2 bg-foreground hover:bg-transparent flex-row items-center gap-1 rounded-md border-1 border-secondary/50 cursor-pointer shadow-sm">
          <ArrowDownUp className=" text-secondary size-5" />
          <p className=" text-secondary text-sm font-medium">Sort by</p>
        </Card>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" w-48">
        <DropdownMenuCheckboxItem checked={nextjs} onCheckedChange={setNextjs}>
          Recently added
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={sveltekit}
          onCheckedChange={setSveltekit}
        >
          Recently visited
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem checked={astro} onCheckedChange={setAstro}>
          Most visited
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
