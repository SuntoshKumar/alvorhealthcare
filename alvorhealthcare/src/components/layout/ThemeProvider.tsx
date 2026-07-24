"use client";

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextValue {
  theme: Theme;
  resolved: "light" | "dark";
  setTheme: (theme: Theme) => void;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "system",
  resolved: "light",
  setTheme: () => {},
  toggle: () => {},
});

function getStoredTheme(): Theme | null {
  try {
    const stored = window.localStorage.getItem("alvor-theme");
    return stored === "light" || stored === "dark" || stored === "system" ? stored : null;
  } catch {
    return null;
  }
}

function storeTheme(theme: Theme) {
  try {
    window.localStorage.setItem("alvor-theme", theme);
  } catch {
    // Theme switching should still work when browser storage is unavailable.
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolved, setResolved] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  const getSystemTheme = useCallback((): "light" | "dark" => {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }, []);

  const applyTheme = useCallback((t: Theme) => {
    const resolvedTheme = t === "system" ? getSystemTheme() : t;
    document.documentElement.setAttribute("data-theme", resolvedTheme);
    setResolved(resolvedTheme);
  }, [getSystemTheme]);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    storeTheme(t);
    applyTheme(t);
  }, [applyTheme]);

  const toggle = useCallback(() => {
    const next = resolved === "dark" ? "light" : "dark";
    setTheme(next);
  }, [resolved, setTheme]);

  useEffect(() => {
    const stored = getStoredTheme();
    const initial = stored || "system";
    /* eslint-disable react-hooks/set-state-in-effect -- browser preferences are only available after mount */
    setThemeState(initial);
    applyTheme(initial);
    setMounted(true);
    /* eslint-enable react-hooks/set-state-in-effect */

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (theme === "system") applyTheme("system");
    };
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }

    mq.addListener(handler);
    return () => mq.removeListener(handler);
  }, [applyTheme, theme]);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, resolved, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
