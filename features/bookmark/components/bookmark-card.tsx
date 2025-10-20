import { Card, CardHeader } from "@/components/ui/card";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BookmarkCard() {
  return (
    <Card>
      <CardHeader className=" flex justify-between">
        <div className=" flex items-center gap-4">
          <Image
            src="/favicon-frontend-mentor.png"
            alt="Favicon"
            width={60}
            height={60}
            className=" p-1 border-2 border-border rounded-md"
          />
          <div className=" flex flex-col ">
            <p className=" text-xl text-secondary font-bold">Frontend Mentor</p>
            <Link href="#">frontendmentor.io</Link>
          </div>
        </div>
        <EllipsisVertical className=" size-9 p-1 border-2 border-border rounded-md" />
      </CardHeader>
    </Card>
  );
}
