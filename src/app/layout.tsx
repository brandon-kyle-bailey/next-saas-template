import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/providers/ui/theme-provider";
import { AuthProvider } from "@/lib/providers/auth/auth-provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en suppressHydrationWarning">
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  );
}