"use client";
import clsx from "clsx";
import { RoutesEnum } from "@/lib/enum/routes.enum";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, Settings } from "lucide-react";

const navItems = [
  {
    href: RoutesEnum.DASHBOARD,
    name: "Dashboard",
    icon: <HomeIcon className="h-3 w-3" />,
  },
  {
    href: RoutesEnum.DASHBOARD_SETTINGS,
    name: "Settings",
    icon: <Settings className="h-3 w-3" />,
  },
];
export function NavBarLeftComponent() {
  const pathname = usePathname();
  return (
    <div className="hidden lg:block border-r border-neutral-300 h-full bg-white  text-black w-72">
      <div className="border-neutral-300 flex h-14 items-center justify-between border-b px-3 w-full">
        <Link className="font-semibold" href={RoutesEnum.HOME}>
          Nextjs Starter Kit
        </Link>
      </div>
      <nav className="px-4 font-medium text-sm py-4">
        <ul className="flex flex-col">
          {navItems.map((item) => {
            return (
              <li
                key={item.name}
                className={clsx(
                  "text-gray-500 hover:text-gray-900 rounded-lg py-2 px-3",
                  {
                    "text-gray-900 bg-gray-100": item.href === pathname,
                  },
                )}
              >
                <Link className="flex flex-row gap-2" href={item.href}>
                  <div className="border rounded-lg border-gray-400 p-1 bg-inherit">
                    {item.icon}
                  </div>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
