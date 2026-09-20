"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch: only render after mount
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-10 h-10" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark / light mode"
      className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-white/20 hover:border-primary-500 hover:text-primary-500 transition-colors duration-300"
    >
      {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}
