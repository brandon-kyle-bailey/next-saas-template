import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/providers/ui/theme-provider";
import { AuthProvider } from "@/lib/providers/auth/auth-provider";
import { Toaster } from "sonner";
import { GeistSans } from "geist/font/sans";

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
      <html lang="en suppressHydrationWarning" className={GeistSans.className}>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
