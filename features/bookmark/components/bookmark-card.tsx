import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Calendar, Clock, EllipsisVertical, Eye, Pin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagCard from "./tag-card";
import BookmarkDropdown from "./bookmark-card-dropdown";
import { Bookmark } from "../types";
import { formatDate } from "@/helper-functions/format-date";

export default function BookmarkCard({
  favicon,
  title,
  url,
  description,
  tags,
  isArchived,
  pinned,
  _id,
  visitCount,
  lastVisited,
  createdAt,
}: Bookmark) {
  const decodedFavicon: string =
    favicon.startsWith("https://") || favicon.startsWith("http://")
      ? favicon
      : "/favicon-frontend-mentor.png";

  const lastVisit = formatDate(lastVisited ? lastVisited : createdAt);

  return (
    <Card className=" gap-4">
      <CardHeader className=" px-4">
        <div className="flex justify-between">
          <div className=" flex items-center gap-3 ">
            <Image
              src={decodedFavicon}
              alt="Favicon"
              width={60}
              height={60}
              className=" size-10 border-1 border-border rounded-md"
            />
            <div className=" flex flex-col ">
              <p className=" text-xl lg:text-lg text-secondary font-bold">
                {title}
              </p>
              <Link href={url} target="_blank" className=" text-xs">
                {url.slice(8)}
              </Link>
            </div>
          </div>

          <BookmarkDropdown
            id={_id}
            pinned={pinned}
            isArchived={isArchived}
            title={title}
            url={url}
            description={description}
            tags={tags}
          />

          {/* <EllipsisVertical className=" size-7 cursor-pointer hover:bg-background p-0.5 border-2 border-border rounded-md" /> */}
        </div>
        <div className="w-full h-[1px] my-1 bg-muted/50" />
      </CardHeader>

      <CardContent className=" px-4 flex-1 flex flex-col justify-between">
        <p className=" text-sm text-muted h-auto">{description}</p>
        <div className=" flex items-center gap-3 my-4">
          {tags?.map((tag) => (
            <TagCard key={tag} tagName={tag} />
          ))}
          {/* <TagCard tagName="Practice" />
          <TagCard tagName="Practice" /> */}
        </div>

        <div className="w-full h-[1px] my-1 bg-muted/50" />
      </CardContent>

      <CardFooter className=" justify-between">
        <div className=" flex items-center gap-3">
          <div className=" flex items-center gap-1 text-muted">
            <Eye className=" size-4" />
            <span className=" text-xs">{visitCount}</span>
          </div>

          <div className=" flex items-center gap-1 text-muted">
            <Clock className=" size-4" />
            <span className=" text-xs">{lastVisit}</span>
          </div>

          <div className=" flex items-center gap-1 text-muted">
            <Calendar className=" size-4" />
            <span className=" text-xs">{formatDate(createdAt)}</span>
          </div>
        </div>
        <Pin className=" size-4 text-primary" />
      </CardFooter>
    </Card>
  );
}
