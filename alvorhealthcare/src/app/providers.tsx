"use client";

import { Toaster } from "react-hot-toast";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "var(--bg-elevated)",
            color: "var(--text-primary)",
            boxShadow: "var(--shadow-large)",
            borderRadius: "var(--radius-2xl)",
            padding: "1rem 1.25rem",
            border: "1px solid var(--border-primary)",
          },
          success: {
            iconTheme: { primary: "#16a34a", secondary: "#fff" },
          },
          error: {
            iconTheme: { primary: "#dc2626", secondary: "#fff" },
          },
        }}
      />
    </ThemeProvider>
  );
}
