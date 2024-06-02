import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

export function AuthProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
