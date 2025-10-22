import { useId } from "react";
import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

export default function SearchInput() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <div className="relative">
        <Input
          id={id}
          className="peer ps-9 pe-9 h-12 w-40 md:w-90 placeholder:text-[10px] md:placeholder:text-lg text-primary hover:bg-background border-2 border-primary"
          placeholder="Search by title..."
          type="search"
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <SearchIcon size={16} />
        </div>
      </div>
    </div>
  );
}
