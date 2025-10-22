import {
  BoltIcon,
  BookOpenIcon,
  Layers2Icon,
  LogOutIcon,
  Palette,
  PinIcon,
  UserPenIcon,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeSwitch from "./theme-switch";

export default function ProfileDisplay() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 hover:bg-transparent ">
          <Avatar className=" size-12">
            <AvatarImage
              src="/origin/avatar.jpg"
              alt="Profile image"
              className=""
            />
            <AvatarFallback className=" bg-amber-500">KK</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={12} className="w-64">
        <DropdownMenuLabel className="flex min-w-0 flex-row items-center gap-4">
          <div>
            <Avatar className=" size-12">
              <AvatarImage
                src="/origin/avatar.jpg"
                alt="Profile image"
                className=""
              />
              <AvatarFallback className=" bg-amber-500">KK</AvatarFallback>
            </Avatar>
          </div>
          <div className=" flex flex-col gap-1">
            <span className="truncate text-sm font-medium text-secondary">
              Keith Kennedy
            </span>
            <span className="truncate text-xs font-normal text-muted-foreground">
              k.kennedy@coss.com
            </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className=" gap-4 py-3 justify-between">
            <div className=" flex items-center gap-4">
              <Palette className="opacity-60 size-5" aria-hidden="true" />
              <span className=" text-lg lg:text-md">Theme</span>
            </div>
            <div>
              <ThemeSwitch />
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem className=" gap-4">
          <LogOutIcon className="opacity-60 size-5" aria-hidden="true" />
          <span className=" text-lg lg:text-md">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
