"use client";

import * as React from "react";
import { useAuth } from "@clerk/nextjs";
import { Boxes } from "lucide-react";
import Link from "next/link";
import { DashboardIcon } from "@radix-ui/react-icons";
import { ModeToggleComponent } from "./mode-toggle.component";
import { Button } from "../ui/button";

export function NavBarComponent() {
  const { userId } = useAuth();

  return (
    <div className="flex flex-row justify-between p-2 border-b dark:border-neutral-800 dark:bg-black dark:bg-opacity-50 bg-white">
      <div className="flex flex-row items-center">
        <Link href="/">
          <Boxes />
        </Link>
      </div>
      <div className="flex flex-row space-x-1">
        <Link href="/" className="">
          <Button className="rounded-lg" variant="outline">
            <DashboardIcon className="w-3 h-4" />
            <p className="pl-1">Dashboard</p>
          </Button>
        </Link>
        <ModeToggleComponent />
      </div>
    </div>
  );
}
