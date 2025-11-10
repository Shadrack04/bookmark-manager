import {
  Archive,
  BoltIcon,
  ChevronDownIcon,
  Copy,
  CopyPlusIcon,
  EllipsisVertical,
  ExternalLink,
  FilesIcon,
  Layers2Icon,
  Pin,
  SquarePen,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUpdateViewCount } from "../hooks/use-update-view-count";

export default function BookmarkDropdown({ id }: { id: string }) {
  const { mutate: updateViewCount } = useUpdateViewCount(id);

  const handleUpdateViewCount = () => {
    updateViewCount();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <EllipsisVertical className=" size-7 cursor-pointer hover:bg-background p-0.5 border-2 border-border rounded-md" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" w-48 flex flex-col gap-1 bg-foreground">
        <DropdownMenuItem onClick={handleUpdateViewCount}>
          <ExternalLink size={16} className="opacity-60" aria-hidden="true" />
          Visit
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Copy size={16} className="opacity-60" aria-hidden="true" />
          Copy Url
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Pin size={16} className="opacity-60" aria-hidden="true" />
          Unpin
        </DropdownMenuItem>

        <DropdownMenuItem>
          <SquarePen size={16} className="opacity-60" aria-hidden="true" />
          Edit
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Archive size={16} className="opacity-60" aria-hidden="true" />
          Archive
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
