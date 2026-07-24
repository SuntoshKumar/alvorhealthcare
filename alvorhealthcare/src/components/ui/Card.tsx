"use client";

import { clsx } from "clsx";
import { forwardRef } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined" | "glass";
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = "default", padding = "md", hover = false, className, ...props }, ref) => {
    const variants = {
      default: "bg-white dark:bg-neutral-800/30 border border-neutral-100 dark:border-neutral-700/50 shadow-soft",
      elevated: "bg-white dark:bg-neutral-800/30 border border-neutral-100 dark:border-neutral-700/50 shadow-medium",
      outlined: "bg-white dark:bg-neutral-800/30 border-2 border-neutral-200 dark:border-neutral-700/50",
      glass: "glass",
    };

    const paddings = {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    };

    return (
      <div
        ref={ref}
        className={clsx(
          "rounded-2xl transition-all duration-300",
          variants[variant],
          paddings[padding],
          hover && "hover:shadow-large hover:-translate-y-1 hover:border-neutral-200 dark:hover:border-neutral-600",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
);

Card.displayName = "Card";

export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx("mb-4", className)}
      {...props}
    >
      {children}
    </div>
  )
);

CardHeader.displayName = "CardHeader";

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ children, as: Component = "h3", className, ...props }, ref) => (
    <Component
      ref={ref}
      className={clsx("heading-lg font-semibold text-neutral-900 dark:text-white", className)}
      {...props}
    >
      {children}
    </Component>
  )
);

CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ children, className, ...props }, ref) => (
    <p
      ref={ref}
      className={clsx("body-sm text-neutral-500 dark:text-neutral-400 mt-1", className)}
      {...props}
    >
      {children}
    </p>
  )
);

CardDescription.displayName = "CardDescription";

export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(className)}
      {...props}
    >
      {children}
    </div>
  )
);

CardContent.displayName = "CardContent";

export const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx("mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-700/50 flex items-center gap-3", className)}
      {...props}
    >
      {children}
    </div>
  )
);

CardFooter.displayName = "CardFooter";