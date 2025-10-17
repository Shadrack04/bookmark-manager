import { Menu, Plus } from "lucide-react";
import React from "react";
import SearchInput from "./search-input";
import { Button } from "./ui/button";
import ProfileDisplay from "./profile-display";
import SideDrawer from "./side-drawer";

export default function TopBar() {
  return (
    <nav className=" custom-padding flex items-center justify-between md:jus w-full h-20 bg-foreground">
      <div className=" flex items-center gap-2 md:gap-4">
        {/* <Menu className=" text-secondary p-2 border-border border-2 size-12 rounded-lg cursor-pointer" /> */}
        <SideDrawer />
        <SearchInput />
      </div>
      <div className=" flex items-center gap-2 md:gap-4">
        <Button className=" px-2 md:px-6 py-3 h-auto">
          <Plus className=" size-6" />{" "}
          <span className=" hidden md:block text-white">Add Bookmark</span>
        </Button>
        <ProfileDisplay />
      </div>
    </nav>
  );
}
