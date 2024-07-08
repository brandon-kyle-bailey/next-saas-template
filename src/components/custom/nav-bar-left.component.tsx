"use client";
import clsx from "clsx";
import { RoutesEnum } from "@/lib/enum/routes.enum";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: RoutesEnum.DASHBOARD, name: "Dashboard" },
  { href: RoutesEnum.DASHBOARD_SETTINGS, name: "Settings" },
];
export function NavBarLeftComponent() {
  const pathname = usePathname();
  return (
    <div className="hidden lg:block border-r border-neutral-300 h-full bg-white text-black w-72">
      <div className="border-neutral-300 flex h-14 items-center justify-between border-b px-3 w-full">
        <Link className="font-semibold" href={RoutesEnum.HOME}>
          Nextjs Starter Kit
        </Link>
      </div>
      <nav className="px-4 font-medium text-sm py-4">
        <ul className="flex flex-col gap-4">
          {navItems.map((item) => {
            return (
              <li
                key={item.name}
                className={clsx("", {
                  "text-red-500": item.href === pathname,
                })}
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
