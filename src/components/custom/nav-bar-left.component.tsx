"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBarLeftComponent() {
  const pathname = usePathname();
  return (
    <div className="hidden lg:block border-r border-neutral-300 h-full bg-white text-black w-72">
      <div className="border-neutral-300 flex h-14 items-center justify-between border-b px-3 w-full">
        <Link className="font-semibold" href="/">
          Nextjs Starter Kit
        </Link>
      </div>
    </div>
  );
}
