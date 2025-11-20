"use client";

import React from "react";
import Logo from "./logo";
import { Archive, Home, LucideIcon } from "lucide-react";
import Tags from "./tags";
import { usePathname } from "next/navigation";
import { useBookmarkFilterStore } from "@/store/bookmark-filter-store";
import { navLinks } from "@/constants";

// type NavLinks = {
//   name: string;
//   icon: LucideIcon;
//   isActive: boolean;
// };

// const navLinks: NavLinks[] = [
//   {
//     icon: Home,
//     name: "Home",
//     isActive: false,
//   },
//   {
//     icon: Archive,
//     name: "Archived",
//     isActive: true,
//   },
// ];

export default function SideBar() {
  const pathName = usePathname();
  const { isArchived, setIsArchived } = useBookmarkFilterStore();

  if (pathName.startsWith("/auth")) return null;
  return (
    <div className=" hidden lg:flex flex-col gap-2 w-82 border-1 bg-foreground min-h-screen px-4">
      <div className="h-20 lg:h-18 flex items-center">
        <Logo />
      </div>
      <div className=" flex flex-col gap-1">
        {navLinks?.map(({ name, icon: Icon, isActive }) => (
          <div
            onClick={() => setIsArchived(name === "Archived")}
            key={name}
            // href={href}
            className={`${
              isActive === isArchived ? " bg-background/80" : ""
            } text-muted hover:text-secondary cursor-pointer hover:bg-background/80 py-2 px-2 flex rounded-md items-center gap-2`}
          >
            <Icon />
            <span>{name}</span>
          </div>
        ))}
      </div>

      <Tags />
    </div>
  );
}
