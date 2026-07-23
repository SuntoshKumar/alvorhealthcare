"use client";

import { clsx } from "clsx";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export const Container = ({
  children,
  size = "lg",
  className,
  ...props
}: ContainerProps) => {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-[80rem]",
    full: "max-w-full",
  };

  return (
    <div
      className={clsx(
        "mx-auto px-4 sm:px-6 lg:px-8",
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "alternate" | "dark" | "gradient";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

export const Section = ({
  children,
  variant = "default",
  padding = "lg",
  className,
  ...props
}: SectionProps) => {
  const variants = {
    default: "bg-white",
    alternate: "bg-neutral-50",
    dark: "bg-neutral-900 text-white",
    gradient: "bg-gradient-to-b from-primary-50 via-white to-secondary-50",
  };

  const paddings = {
    none: "",
    sm: "py-12 sm:py-16",
    md: "py-16 sm:py-20",
    lg: "py-20 sm:py-28",
    xl: "py-28 sm:py-36",
  };

  return (
    <section
      className={clsx(
        "w-full",
        variants[variant],
        paddings[padding],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: "none" | "sm" | "md" | "lg" | "xl";
  responsive?: boolean;
}

export const Grid = ({
  children,
  cols = 1,
  gap = "md",
  responsive = true,
  className,
  ...props
}: GridProps) => {
  const gapClasses = {
    none: "gap-0",
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  };

  const colClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
    6: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
    12: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6",
  };

  return (
    <div
      className={clsx(
        "grid",
        responsive ? colClasses[cols] : `grid-cols-${cols}`,
        gapClasses[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  gap?: "none" | "sm" | "md" | "lg" | "xl";
  wrap?: boolean;
}

export const Flex = ({
  children,
  direction = "row",
  align = "stretch",
  justify = "start",
  gap = "md",
  wrap = false,
  className,
  ...props
}: FlexProps) => {
  const directions = {
    row: "flex-row",
    col: "flex-col",
    "row-reverse": "flex-row-reverse",
    "col-reverse": "flex-col-reverse",
  };

  const aligns = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  };

  const justifies = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  };

  const gaps = {
    none: "gap-0",
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  };

  return (
    <div
      className={clsx(
        "flex",
        directions[direction],
        aligns[align],
        justifies[justify],
        gaps[gap],
        wrap && "flex-wrap",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};