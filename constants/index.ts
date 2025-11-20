import { NavLinks } from "@/types";
import { Archive, Home } from "lucide-react";

export const COOKIE_NAME = "session-storage";

export const navLinks: NavLinks[] = [
  {
    icon: Home,
    name: "Home",
    isActive: false,
  },
  {
    icon: Archive,
    name: "Archived",
    isActive: true,
  },
];
