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
import { useUpdateBookmark } from "../hooks/use-update-bookmark";

type BookmarkDropdownProps = {
  id: string;
  pinned: boolean;
  isArchived: boolean;
};

export default function BookmarkDropdown({
  id,
  pinned,
  isArchived,
}: BookmarkDropdownProps) {
  const { mutate: updateViewCount } = useUpdateViewCount(id);

  const { mutate: updatePinStatues } = useUpdateBookmark(id, {
    pinned: !pinned,
  });

  const { mutate: updateArchivedStatues } = useUpdateBookmark(id, {
    isArchived: !isArchived,
  });

  const handleUpdateViewCount = () => {
    updateViewCount();
  };

  const handleUpdatePinStatus = () => {
    updatePinStatues();
  };
  const handleUpdateArchivedStatus = () => {
    updateArchivedStatues();
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

        <DropdownMenuItem onClick={handleUpdatePinStatus}>
          <Pin size={16} className="opacity-60" aria-hidden="true" />
          {pinned ? "Unpin" : "Pin"}
        </DropdownMenuItem>

        <DropdownMenuItem>
          <SquarePen size={16} className="opacity-60" aria-hidden="true" />
          Edit
        </DropdownMenuItem>

        <DropdownMenuItem onClick={handleUpdateArchivedStatus}>
          <Archive size={16} className="opacity-60" aria-hidden="true" />
          {isArchived ? "Unarchive" : "Archived"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
