"use client";

import { clsx } from "clsx";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
  dot?: boolean;
  dotColor?: string;
}

export const Badge = ({
  children,
  variant = "default",
  size = "md",
  dot,
  dotColor,
  className,
  ...props
}: BadgeProps) => {
  const variants = {
    default: "bg-neutral-100 text-neutral-700",
    primary: "bg-primary-100 text-primary-700",
    secondary: "bg-secondary-100 text-secondary-700",
    success: "bg-success-100 text-success-700",
    warning: "bg-warning-100 text-warning-700",
    danger: "bg-danger-100 text-danger-700",
    outline: "bg-transparent border border-neutral-200 text-neutral-600 hover:border-neutral-300",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-xs",
    lg: "px-3 py-1 text-sm",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 font-medium rounded-full",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: dotColor || "currentColor" }}
        />
      )}
      {children}
    </span>
  );
};

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  removable?: boolean;
  onRemove?: () => void;
}

export const Tag = ({ children, removable, onRemove, className, ...props }: TagProps) => (
  <span className={clsx("inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-neutral-100 text-neutral-700 rounded-full", className)} {...props}>
    {children}
    {removable && (
      <button
        type="button"
        onClick={onRemove}
        className="flex items-center justify-center w-4 h-4 rounded-full hover:bg-neutral-200 transition-colors"
        aria-label="Remove tag"
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    )}
  </span>
);