"use client";

import { Toaster } from "react-hot-toast";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#fff",
            color: "#171717",
            boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 20px 50px -10px rgba(0, 0, 0, 0.04)",
            borderRadius: "1rem",
            padding: "1rem 1.25rem",
            border: "1px solid #e5e5e5",
          },
          success: {
            iconTheme: {
              primary: "#16a34a",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#dc2626",
              secondary: "#fff",
            },
          },
        }}
      />
    </>
  );
}
