"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function TopBarLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cleanup = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const bar = barRef.current;
    if (!container || !bar) return;

    cleanup();

    container.style.display = "block";
    bar.className = "top-bar-loader__bar top-bar-loader__bar--animating";

    timeoutRef.current = setTimeout(() => {
      bar.className = "top-bar-loader__bar top-bar-loader__bar--complete";
      setTimeout(() => {
        container.style.display = "none";
      }, 300);
    }, 400);

    return cleanup;
  }, [pathname, searchParams, cleanup]);

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  return (
    <div
      ref={containerRef}
      className="top-bar-loader"
      style={{ display: "none" }}
      role="progressbar"
      aria-hidden="true"
    >
      <div ref={barRef} className="top-bar-loader__bar" />
    </div>
  );
}
