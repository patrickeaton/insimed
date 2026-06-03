import { useEffect, useState } from "react";

type ThemeName = "default" | "space";

/**
 * Flips `<html data-theme>` between the default and the dark "space" palette.
 * Demonstrates the swappable-theme system — all colors update with no
 * component changes because utilities reference CSS variables.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeName>("default");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "space") root.dataset.theme = "space";
    else delete root.dataset.theme;
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme((t) => (t === "space" ? "default" : "space"))}
      className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-primary hover:text-primary"
      aria-label="Toggle color theme"
    >
      {theme === "space" ? "☀ Light" : "🌑 Space"}
    </button>
  );
}
