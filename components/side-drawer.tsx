import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Archive, Home, LucideIcon, Menu } from "lucide-react";
import Logo from "./logo";
import { useBookmarkFilterStore } from "@/store/bookmark-filter-store";
import { navLinks } from "@/constants";
import Tags from "./tags";

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

export default function SideDrawer() {
  const { isArchived, setIsArchived } = useBookmarkFilterStore();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className=" text-secondary p-2 border-border border-2 size-12 rounded-lg cursor-pointer lg:hidden" />
      </SheetTrigger>
      <SheetContent side="left" className=" p-2">
        <SheetHeader className=" p-0">
          <SheetTitle className="h-20 lg:h-18 flex items-center">
            <Logo />
          </SheetTitle>
        </SheetHeader>
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
      </SheetContent>
    </Sheet>
  );
}
