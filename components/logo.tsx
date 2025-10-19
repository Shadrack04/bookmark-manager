import { Bookmark } from "lucide-react";
import Link from "next/link";
import React from "react";

type LogoProps = {
  href?: string;
};

export default function Logo({ href }: LogoProps) {
  return (
    <Link href={href || "/"} className=" flex gap-2">
      <Bookmark className=" size-8 p-1 bg-primary text-white rounded-sm" />
      <span className=" text-lg text-secondary font-bold">
        Bookmark Manager
      </span>
    </Link>
  );
}
