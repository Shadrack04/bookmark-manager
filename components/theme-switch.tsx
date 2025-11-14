"use client";

import { useId } from "react";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/store/theme-store";

export default function ThemeSwitch() {
  const id = useId();
  const { isDarkTheme, setIsDarkTheme } = useTheme();

  return (
    <div
      className="relative inline-flex items-center"
      onClick={(e) => e.stopPropagation()}
    >
      <Switch
        id={id}
        checked={isDarkTheme}
        onCheckedChange={setIsDarkTheme}
        className="
          peer relative h-10 w-20 rounded-md transition-all duration-500
          data-[state=checked]:bg-[#004342]
          data-[state=unchecked]:bg-background
          
          [&_span]:absolute
          [&_span]:top-1/2
          [&_span]:left-1
          [&_span]:-translate-y-1/2
          [&_span]:h-8
          [&_span]:w-8
          [&_span]:rounded-md
          [&_span]:bg-white
          [&_span]:flex
          [&_span]:items-center
          [&_span]:justify-center
          [&_span]:shadow-md
          [&_span]:transition-transform
          [&_span]:duration-500
          [&_span]:ease-in-out
          [&_span]:data-[state=checked]:translate-x-[2.75rem]
          [&_span]:data-[state=unchecked]:translate-x-0
        "
      />

      {/* Sun Icon */}
      <Sun
        className="
          pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 h-5 w-5
          text-yellow-600 transition-all duration-500
          peer-data-[state=checked]:opacity-0
          peer-data-[state=checked]:scale-50
          peer-data-[state=unchecked]:opacity-100
          peer-data-[state=unchecked]:scale-100
        "
      />

      {/* Moon Icon */}
      <Moon
        className="
          pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5
          text-zinc-200 transition-all duration-500
          peer-data-[state=checked]:opacity-100
          peer-data-[state=checked]:scale-100
          peer-data-[state=unchecked]:opacity-0
          peer-data-[state=unchecked]:scale-50
        "
      />
    </div>
  );
}
