"use client";
import { Dialog, DialogClose } from "@radix-ui/react-dialog";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";

const navItems = [
  { href: "/", name: "Home" },
  { href: "/dashboard/settings", name: "Settings" },
];
export function NavBarTopComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white text-black w-full">
      <header className="fixed w-full h-14 border-b border-neutral-300 px-3 flex">
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
      </header>
      {children}
    </div>
  );
}
