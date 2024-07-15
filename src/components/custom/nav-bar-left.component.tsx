"use client";
import clsx from "clsx";
import { RoutesEnum } from "@/lib/enum/routes.enum";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/nav/nav-items";

export function NavBarLeftComponent() {
  const pathname = usePathname();
  return (
    <div className="fixed hidden lg:block border-r border-neutral-300 dark:border-neutral-800 h-full bg-white dark:bg-black dark:text-white text-black w-72">
      <div className="border-neutral-300 dark:border-neutral-800 flex h-14 items-center justify-between border-b px-3 w-full">
        <Link className="font-semibold" href={RoutesEnum.HOME}>
          Nextjs Starter Kit
        </Link>
      </div>
      <nav className="px-4 text-sm py-4">
        <ul className="flex flex-col font-semibold">
          {navItems.map((item) => {
            return (
              <li
                key={item.name}
                className={clsx(
                  "text-gray-500 hover:text-gray-900 dark:hover:text-gray-50 rounded-lg py-2 px-3",
                  {
                    "text-gray-800 dark:text-gray-50 bg-gray-100 dark:bg-gray-800":
                      item.href === pathname,
                  },
                )}
              >
                <Link className="flex flex-row gap-2" href={item.href}>
                  <div className="border rounded-lg border-gray-300 dark:border-neutral-800 p-1 bg-white dark:bg-black dark:text-gray-300">
                    {item.icon()}
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
