"use client";

import { ModeToggleComponent } from "@/components/custom/mode-toggle.component";
import { UserProfileComponent } from "@/components/custom/user-profile.component";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose } from "@/components/ui/dialog";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { navItems } from "@/lib/nav/nav-items";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export function NavBarTopComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white text-black w-full flex flex-col">
      <header className="w-full h-14 border-b border-neutral-300 px-3 flex justify-between">
        <div className="min-[1024px]:hidden">
          <Dialog>
            <SheetTrigger className="h-14 transition">
              <GiHamburgerMenu />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Next Starter</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-3 mt-4">
                {navItems.map((item) => {
                  return (
                    <DialogClose asChild key={item.name}>
                      <Link href={item.href}>
                        <Button variant="outline" className="w-full">
                          {item.icon("mr-2 h-4 w-4")}
                          {item.name}
                        </Button>
                      </Link>
                    </DialogClose>
                  );
                })}
              </div>
            </SheetContent>
          </Dialog>
        </div>
        <div className="flex justify-center items-center gap-2 ml-auto">
          <UserProfileComponent />
          <ModeToggleComponent />
        </div>
      </header>
      {children}
    </div>
  );
}
