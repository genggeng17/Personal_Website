"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      onClick={() => setTheme(nextTheme)}
      className="text-sm px-3 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-primary hover:text-primary transition"
      title="切换主题"
    >
      {theme === "dark" ? "🌞 亮" : "🌙 暗"}
    </button>
  );
}
