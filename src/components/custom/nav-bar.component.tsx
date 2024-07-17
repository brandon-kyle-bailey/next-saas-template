"use client";

import * as React from "react";
import { useAuth } from "@clerk/nextjs";
import { Boxes } from "lucide-react";
import Link from "next/link";
import { DashboardIcon } from "@radix-ui/react-icons";
import { ModeToggleComponent } from "./mode-toggle.component";
import { Button } from "../ui/button";
import { Dialog, DialogClose } from "@radix-ui/react-dialog";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";

export function NavBarComponent() {
  return (
    <div className="fixed min-w-full z-10 flex flex-row justify-between p-2 border-b dark:border-neutral-800 dark:bg-black dark:bg-opacity-50 bg-white">
      <div className="min-[768px]:hidden">
        <Dialog>
          <SheetTrigger className="p-2 transition">
            <GiHamburgerMenu />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Next Starter</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-4">
              <DialogClose asChild>
                <Link href="/">
                  <Button variant="outline" className="w-full">
                    Home
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link
                  href="/dashboard"
                  legacyBehavior
                  passHref
                  className="cursor-pointer"
                >
                  <Button variant="outline">Dashboard</Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link
                  href="/blog"
                  legacyBehavior
                  passHref
                  className="cursor-pointer"
                >
                  <Button variant="outline">Blog</Button>
                </Link>
              </DialogClose>
            </div>
          </SheetContent>
        </Dialog>
      </div>
      <div className="flex flex-row items-center p-2 max-md:hidden">
        <Link href="/">
          <Boxes />
        </Link>
      </div>
      <div className="flex flex-row space-x-2">
        <Link href="/dashboard" className="max-md:hidden">
          <Button
            className="rounded-lg dark:border-neutral-800 dark:bg-black dark:bg-opacity-50 bg-white"
            variant="outline"
          >
            <DashboardIcon className="w-3 h-4" />
            <p className="pl-1">Dashboard</p>
          </Button>
        </Link>
        <ModeToggleComponent />
      </div>
    </div>
  );
}
