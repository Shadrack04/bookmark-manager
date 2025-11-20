import { LucideIcon } from "lucide-react";

export type User = {
  _id: string;
  name: string;
  email: string;
};

export type NavLinks = {
  name: string;
  icon: LucideIcon;
  isActive: boolean;
};
