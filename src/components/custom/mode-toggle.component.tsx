"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export enum ModeToggleComponentThemeNames {
  LIGHT = "light",
  DARK = "dark",
  SYSTEM = "system",
}

export function ModeToggleComponent() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="dark:border-neutral-800 dark:bg-black dark:bg-opacity-50 bg-white"
        >
          <Sun className="h-5 w-5 transition-all dark:scale-0" />
          <Moon className="absolute h-5 w-5 scale-0 transition-all dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="dark:border-neutral-800 dark:bg-black dark:bg-opacity-50 bg-white"
      >
        <DropdownMenuItem
          onClick={() => setTheme(ModeToggleComponentThemeNames.LIGHT)}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme(ModeToggleComponentThemeNames.DARK)}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme(ModeToggleComponentThemeNames.SYSTEM)}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
