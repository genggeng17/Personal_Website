"use client";

import Link from "next/link";
import { site } from "@/site.config";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-950/70 bg-white/80 dark:bg-neutral-950/80 border-b border-neutral-200/60 dark:border-neutral-800">
      <nav className="max-w-4xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">{site.name}</Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
