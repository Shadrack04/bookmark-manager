import Cookies from "js-cookie";
import { LogOutIcon, Palette } from "lucide-react";

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

import { useSessionStore } from "@/store/session";
import { COOKIE_NAME } from "@/constants";

export default function ProfileDisplay() {
  const { clearSession } = useSessionStore();
  const handleSignOut = () => {
    clearSession();

    Cookies.remove(COOKIE_NAME, {
      path: "/",
    });

    window.location.href = "/auth/sign-in";
  };

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
      <DropdownMenuContent
        sideOffset={12}
        align="end"
        alignOffset={4}
        className="w-64 bg-foreground"
      >
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
          <DropdownMenuItem
            onSelect={(e) => e.preventDefault()}
            className=" gap-4 py-3 justify-between"
          >
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

        <DropdownMenuItem onClick={handleSignOut} className=" gap-4">
          <LogOutIcon className="opacity-60 size-5" aria-hidden="true" />
          <span className=" text-lg lg:text-md">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
