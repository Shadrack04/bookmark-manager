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
import ConfirmationDialog from "./confirmation-dialog";

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
    id,
    title,
    url,
    tags,
    description,
  };
  const { mutate: updateViewCount } = useUpdateViewCount(id);
  const { mutate: updatePinStatues } = useUpdateBookmark();
  const { mutate: updateArchivedStatues } = useUpdateBookmark();
  const { setBookmarkItemData, setIsOpen } = useBookmarkStore();

  const handleUpdateViewCount = () => {
    updateViewCount();
    window.open(url, "_blank");
  };

  const handleUpdatePinStatus = () => {
    updatePinStatues({
      id,
      payload: {
        pinned: !pinned,
      },
    });
  };
  const handleUpdateArchivedStatus = () => {
    console.log("archive");
    updateArchivedStatues({
      id,
      payload: {
        isArchived: !isArchived,
      },
    });
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
      <DropdownMenuContent
        side="bottom"
        sideOffset={6}
        align="end"
        alignOffset={4}
        className=" w-40 flex flex-col gap-1 bg-foreground"
      >
        <DropdownMenuItem onClick={handleUpdateViewCount} className="">
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

        <ConfirmationDialog
          dialogTitle={isArchived ? "Unarchive bookmark" : "Archive bookmark"}
          dialogDescription={`Are you sure you want ${
            isArchived ? "Unarchive" : "Archive"
          } this bookmark`}
          confirmText={isArchived ? "Unarchive" : "Archive"}
          onConfirm={() => handleUpdateArchivedStatus()}
        >
          <DropdownMenuItem
            onSelect={(e) => {
              e.preventDefault();
            }}
          >
            <Archive size={16} className="opacity-60" aria-hidden="true" />
            {isArchived ? "Unarchive" : "Archive"}
          </DropdownMenuItem>
        </ConfirmationDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
