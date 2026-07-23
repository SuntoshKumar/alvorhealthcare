"use client";

import { clsx } from "clsx";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      loading = false,
      leftIcon,
      rightIcon,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary: "btn-primary",
      secondary: "btn-secondary",
      outline: "btn-outline",
      ghost: "btn-ghost",
      link: "btn-ghost text-primary-600 hover:text-primary-700 px-0",
    };

    const sizes = {
      sm: "btn-sm",
      md: "",
      lg: "btn-lg",
      xl: "px-8 py-4 text-base",
    };

    return (
      <button
        ref={ref}
        className={clsx(
          "btn",
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          loading && "cursor-wait",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        <span className={clsx(loading && "opacity-0")}>{children}</span>
        {!loading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </button>
    )
  }
);

Button.displayName = "Button";

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const LinkButton = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  ...props
}: LinkButtonProps) => {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
    ghost: "btn-ghost",
    link: "btn-ghost text-primary-600 hover:text-primary-700 px-0",
  };

  const sizes = {
    sm: "btn-sm",
    md: "",
    lg: "btn-lg",
    xl: "px-8 py-4 text-base",
  };

  return (
    <a
      className={clsx(
        "btn",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </a>
  );
};