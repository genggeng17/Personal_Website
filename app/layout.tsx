import "./globals.css";
import type { Metadata } from "next";
import { site } from "@/site.config";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: site.name,
  description: site.tagline !== "NONE" ? site.tagline : "个人主页",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.language || "zh"} suppressHydrationWarning>
      <body className="bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 antialiased">
        <ThemeProvider attribute="class" defaultTheme={site.theme.dark_mode ? "dark" : "light"} enableSystem={false}>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
