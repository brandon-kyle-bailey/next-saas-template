"use client";

export function NavBarTopComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white text-black w-full">
      <header className="fixed w-full h-14 border-b border-neutral-300 px-3 flex"></header>
      {children}
    </div>
  );
}
