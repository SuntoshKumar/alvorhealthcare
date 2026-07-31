"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function TopBarLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setAnimating(true);
    setVisible(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setAnimating(false);
      setTimeout(() => setVisible(false), 300);
    }, 400);
  }, [pathname, searchParams]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="top-bar-loader"
      role="progressbar"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className={`top-bar-loader__bar ${animating ? "top-bar-loader__bar--animating" : "top-bar-loader__bar--complete"}`}
      />
    </div>
  );
}
