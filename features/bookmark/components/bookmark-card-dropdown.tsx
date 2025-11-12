import {
  Archive,
  Copy,
  EllipsisVertical,
  ExternalLink,
  Pin,
  SquarePen,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUpdateViewCount } from "../hooks/use-update-view-count";
import { useUpdateBookmark } from "../hooks/use-update-bookmark";
import { useBookmarkStore } from "@/store/bookmark-store";
import { toast } from "sonner";

type BookmarkDropdownProps = {
  id: string;
  pinned: boolean;
  isArchived: boolean;
  title: string;
  url: string;
  tags: [string];
  description: string;
};

export default function BookmarkDropdown({
  id,
  pinned,
  isArchived,
  title,
  url,
  tags,
  description,
}: BookmarkDropdownProps) {
  const bookmarkData = {
    title,
    url,
    tags,
    description,
  };
  const { mutate: updateViewCount } = useUpdateViewCount(id);
  const { mutate: updatePinStatues } = useUpdateBookmark(id, {
    pinned: !pinned,
  });
  const { mutate: updateArchivedStatues } = useUpdateBookmark(id, {
    isArchived: !isArchived,
  });
  const { setBookmarkItemData, setIsOpen } = useBookmarkStore();

  const handleUpdateViewCount = () => {
    updateViewCount();
  };

  const handleUpdatePinStatus = () => {
    updatePinStatues();
  };
  const handleUpdateArchivedStatus = () => {
    updateArchivedStatues();
  };
  const handleEditBookmark = () => {
    setBookmarkItemData(bookmarkData);
    setIsOpen(true);
  };

  const handleCopyURL = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Url copied successfully");
    } catch (error) {
      toast.error("Failed to copy URL");
      console.log(error);
    }
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

        <DropdownMenuItem onClick={handleCopyURL}>
          <Copy size={16} className="opacity-60" aria-hidden="true" />
          Copy Url
        </DropdownMenuItem>

        <DropdownMenuItem onClick={handleUpdatePinStatus}>
          <Pin size={16} className="opacity-60" aria-hidden="true" />
          {pinned ? "Unpin" : "Pin"}
        </DropdownMenuItem>

        <DropdownMenuItem onClick={handleEditBookmark}>
          <SquarePen size={16} className="opacity-60" aria-hidden="true" />
          Edit
        </DropdownMenuItem>

        <DropdownMenuItem onClick={handleUpdateArchivedStatus}>
          <Archive size={16} className="opacity-60" aria-hidden="true" />
          {isArchived ? "Unarchive" : "Archive"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
