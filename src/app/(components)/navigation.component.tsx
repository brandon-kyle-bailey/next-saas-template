import { ModeToggleComponent } from "@/components/custom/mode-toggle.component";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose } from "@/components/ui/dialog";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Hexagon } from "lucide-react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavigationSection() {
  return (
    <div id="navigation">
      <div className="lg:hidden">
        <Dialog>
          <SheetTrigger className="p-2 transition">
            <GiHamburgerMenu />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <div className="flex flex-row gap-4 justify-center items-center">
                <Hexagon />
                <h1 className="text-lg">The Startup Stack</h1>
              </div>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-4">
              <DialogClose asChild>
                <Link href="#features">
                  <Button variant="outline" className="w-full">
                    Features
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="#faq">
                  <Button variant="outline" className="w-full">
                    FAQ
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="#pricing">
                  <Button variant="outline" className="w-full">
                    Pricing
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/blog">
                  <Button variant="outline" className="w-full">
                    Blog
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/documentation">
                  <Button variant="outline" className="w-full">
                    Documentation
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/sign-in">
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
              </DialogClose>
            </div>
          </SheetContent>
        </Dialog>
      </div>
      <div className="hidden lg:flex justify-between">
        <NavigationMenu className="shadow flex justify-between">
          <NavigationMenuList className="flex flex-row">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <div className="flex flex-row gap-4 justify-center items-center">
                    <Hexagon />
                    <h1 className="text-lg">The Startup Stack</h1>
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#features" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <p className="text-muted-foreground">Features</p>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#faq" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <p className="text-muted-foreground">FAQ</p>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#pricing" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <p className="text-muted-foreground">Pricing</p>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <p className="text-muted-foreground">Blog</p>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/documentation" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <p className="text-muted-foreground">Documentation</p>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-row justify-center items-center gap-2">
          <Link href={"/sign-in"}>
            <Button>Login</Button>
          </Link>
          <ModeToggleComponent />
        </div>
      </div>
    </div>
  );
}
