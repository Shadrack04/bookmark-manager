import { Menu, Plus } from "lucide-react";
import React from "react";
import SearchInput from "./search-input";
import { Button } from "./ui/button";
import ProfileDisplay from "./profile-display";

export default function TopBar() {
  return (
    <nav className=" custom-padding flex items-center justify-between w-full h-20 bg-foreground">
      <Menu className=" text-secondary p-2 border-2 size-12 rounded-lg cursor-pointer" />
      <SearchInput />
      <Button className=" px-2 py-3 h-auto">
        <Plus className=" size-6" /> <span className=" hidden"></span>
      </Button>
      <ProfileDisplay />
    </nav>
  );
}
