import React from "react";
import Logo from "./logo";
import { Archive, Home, LucideIcon } from "lucide-react";
import Link from "next/link";

type NavLinks = {
  href: string;
  name: string;
  icon: LucideIcon;
};

const navLinks: NavLinks[] = [
  {
    icon: Home,
    name: "Home",
    href: "/",
  },
  {
    icon: Archive,
    name: "Archived",
    href: "/archived",
  },
];

export default function SideBar() {
  return (
    <div className=" hidden lg:flex flex-col gap-4 w-82 border-1 bg-foreground min-h-screen px-4">
      <div className="h-20 lg:h-18 flex items-center">
        <Logo />
      </div>
      <div className=" flex flex-col gap-1">
        {navLinks?.map(({ name, href, icon: Icon }) => (
          <Link
            key={name}
            href={href}
            className=" text-muted hover:text-secondary hover:bg-background/80 py-2 px-2 flex rounded-md items-center gap-2"
          >
            <Icon />
            <span>{name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
