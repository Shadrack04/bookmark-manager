import { useEffect, useId, useState } from "react";
import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { useBookmarkFilterStore } from "@/store/bookmark-filter-store";
import { useDebounce } from "@/hooks/use-debounce";

export default function SearchInput() {
  const id = useId();
  const { search, setSearch } = useBookmarkFilterStore();
  const [inputValue, setInputValue] = useState(search);
  const debouncedValue = useDebounce(inputValue, 400);

  useEffect(() => {
    setSearch(debouncedValue);
  }, [debouncedValue, setSearch]);

  return (
    <div className="*:not-first:mt-2">
      <div className="relative">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          id={id}
          className="peer ps-9 pe-9 h-12 w-40 md:w-90 placeholder:text-[10px] md:placeholder:text-lg text-secondary  hover:bg-background border-2 border-primary"
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
