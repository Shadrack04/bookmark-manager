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

export default function BookmarkCard() {
  return (
    <Card className=" gap-4">
      <CardHeader className=" px-4">
        <div className="flex justify-between">
          <div className=" flex items-center gap-4 ">
            <Image
              src="/favicon-frontend-mentor.png"
              alt="Favicon"
              width={60}
              height={60}
              className=" p-1 size-10 border-2 border-border rounded-md"
            />
            <div className=" flex flex-col ">
              <p className=" text-xl lg:text-lg text-secondary font-bold">
                Frontend Mentor
              </p>
              <Link href="#" className=" text-xs">
                frontendmentor.io
              </Link>
            </div>
          </div>

          <EllipsisVertical className=" size-7 cursor-pointer hover:bg-background p-0.5 border-2 border-border rounded-md" />
        </div>
        <div className="w-full h-[1px] my-1 bg-muted/50" />
      </CardHeader>

      <CardContent className=" px-4">
        <p className=" text-sm text-muted">
          The library for the web and native user interfaces. Build user
          interface out of individual pieces called components
        </p>
        <div className=" flex items-center gap-3 my-4">
          <TagCard tagName="Practice" />
          <TagCard tagName="Practice" />
        </div>

        <div className="w-full h-[1px] my-1 bg-muted/50" />
      </CardContent>

      <CardFooter className=" justify-between">
        <div className=" flex items-center gap-3">
          <div className=" flex items-center gap-1 text-muted">
            <Eye className=" size-4" />
            <span className=" text-xs">152</span>
          </div>

          <div className=" flex items-center gap-1 text-muted">
            <Clock className=" size-4" />
            <span className=" text-xs">24 Sep</span>
          </div>

          <div className=" flex items-center gap-1 text-muted">
            <Calendar className=" size-4" />
            <span className=" text-xs">10 Jan</span>
          </div>
        </div>
        <Pin className=" size-4 text-primary" />
      </CardFooter>
    </Card>
  );
}
