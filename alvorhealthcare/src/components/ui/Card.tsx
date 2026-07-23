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
      default: "bg-white border border-neutral-100 shadow-soft",
      elevated: "bg-white border border-neutral-100 shadow-medium",
      outlined: "bg-white border-2 border-neutral-200",
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
          hover && "hover:shadow-large hover:-translate-y-1 hover:border-neutral-200",
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

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
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
      className={clsx("heading-lg font-semibold text-neutral-900", className)}
      {...props}
    >
      {children}
    </Component>
  )
);

CardTitle.displayName = "CardTitle";

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ children, className, ...props }, ref) => (
    <p
      ref={ref}
      className={clsx("body-sm text-neutral-500 mt-1", className)}
      {...props}
    >
      {children}
    </p>
  )
);

CardDescription.displayName = "CardDescription";

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
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

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx("mt-4 pt-4 border-t border-neutral-100 flex items-center gap-3", className)}
      {...props}
    >
      {children}
    </div>
  )
);

CardFooter.displayName = "CardFooter";