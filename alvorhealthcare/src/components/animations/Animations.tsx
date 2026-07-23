"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] as const } },
};

const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] as const } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] as const } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] as const } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export const FadeInUp = forwardRef<HTMLDivElement, HTMLMotionProps<"div"> & { delay?: number }>(
  ({ children, delay = 0, className, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);

FadeInUp.displayName = "FadeInUp";

export const FadeInDown = forwardRef<HTMLDivElement, HTMLMotionProps<"div"> & { delay?: number }>(
  ({ children, delay = 0, className, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);

FadeInDown.displayName = "FadeInDown";

export const FadeInLeft = forwardRef<HTMLDivElement, HTMLMotionProps<"div"> & { delay?: number }>(
  ({ children, delay = 0, className, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      animate="visible"
      variants={fadeInLeft}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);

FadeInLeft.displayName = "FadeInLeft";

export const FadeInRight = forwardRef<HTMLDivElement, HTMLMotionProps<"div"> & { delay?: number }>(
  ({ children, delay = 0, className, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      animate="visible"
      variants={fadeInRight}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);

FadeInRight.displayName = "FadeInRight";

interface AnimationProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

export const ScaleIn = forwardRef<HTMLDivElement, AnimationProps>(
  ({ children, delay = 0, className, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      animate="visible"
      variants={scaleIn}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);

ScaleIn.displayName = "ScaleIn";

export const FadeIn = forwardRef<HTMLDivElement, AnimationProps>(
  ({ children, delay = 0, className, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);

FadeIn.displayName = "FadeIn";

export const StaggerContainer = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ children, className, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);

StaggerContainer.displayName = "StaggerContainer";

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

export const StaggerItem = forwardRef<HTMLDivElement, StaggerItemProps>(
  ({ children, className, delay = 0, ...props }, ref) => (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className={className}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
);

StaggerItem.displayName = "StaggerItem";

export const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.3 } },
      exit: { opacity: 0, transition: { duration: 0.2 } },
    }}
  >
    {children}
  </motion.div>
);

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  once?: boolean;
  margin?: string;
  delay?: number;
}

export const ScrollReveal = forwardRef<HTMLDivElement, ScrollRevealProps>(
  ({ children, once = true, margin = "0px 0px -100px 0px", delay = 0, className, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={fadeInUp}
      className={className}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
);

ScrollReveal.displayName = "ScrollReveal";

interface HoverScaleProps extends HTMLMotionProps<"div"> {
  scale?: number;
}

export const HoverScale = forwardRef<HTMLDivElement, HoverScaleProps>(
  ({ children, scale = 1.02, className, ...props }, ref) => (
    <motion.div
      ref={ref}
      whileHover={{ scale, transition: { duration: 0.2, ease: [0.34, 1.56, 0.64, 1] } }}
      whileTap={{ scale: 0.98 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);

HoverScale.displayName = "HoverScale";

export const Floating = ({ children, duration = 6, amplitude = 10 }: { children: React.ReactNode; duration?: number; amplitude?: number }) => (
  <motion.div
    animate={{ y: [-amplitude, amplitude, -amplitude] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

export const PulseGlow = ({ children, color = "primary" }: { children: React.ReactNode; color?: "primary" | "secondary" }) => {
  const colors = {
    primary: "rgba(14, 165, 233, 0.4)",
    secondary: "rgba(22, 163, 74, 0.4)",
  };

  return (
    <motion.div
      style={{
        boxShadow: `0 0 0 0 ${colors[color]}`,
      }}
      animate={{
        boxShadow: [`0 0 0 0 ${colors[color]}`, `0 0 30px 10px ${colors[color].replace("0.4", "0")}`],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export const Shimmer = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    className={className}
    style={{
      background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
      backgroundSize: "200% 100%",
    }}
    animate={{ backgroundPosition: ["-200% 0", "200% 0"] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
  >
    {children}
  </motion.div>
);