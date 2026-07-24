"use client";

import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { clsx } from "clsx";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  className?: string;
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = "md",
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  className,
}: ModalProps) => {
  const sizes = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-4xl",
  };

  useEffect(() => {
    if (!closeOnEscape) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeOnEscape, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={closeOnOverlayClick ? onClose : undefined}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        aria-describedby={description ? "modal-description" : undefined}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className={clsx(
            "w-full bg-white dark:bg-neutral-900 rounded-2xl shadow-large overflow-hidden",
            sizes[size],
            className
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {(title || showCloseButton) && (
            <div className="flex items-start justify-between p-6 border-b border-neutral-100 dark:border-neutral-700/50">
              <div>
                {title && (
                  <h2 id="modal-title" className="heading-lg font-semibold text-neutral-900 dark:text-white">
                    {title}
                  </h2>
                )}
                {description && (
                  <p id="modal-description" className="mt-1 body-sm text-neutral-500 dark:text-neutral-400">
                    {description}
                  </p>
                )}
              </div>
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="flex-shrink-0 p-1 rounded-lg text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-ring"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          )}
          <div className="p-6">{children}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  if (typeof window === "undefined") return null;

  return createPortal(modalContent, document.body);
};

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  position?: "left" | "right" | "bottom";
  size?: "sm" | "md" | "lg" | "full";
  title?: string;
  showCloseButton?: boolean;
}

export const Drawer = ({
  isOpen,
  onClose,
  children,
  position = "right",
  size = "md",
  title,
  showCloseButton = true,
}: DrawerProps) => {
  const sizes = {
    sm: "w-64",
    md: "w-96",
    lg: "w-[32rem]",
    full: "w-full max-w-md",
  };

  const positions = {
    left: "left-0",
    right: "right-0",
    bottom: "bottom-0 left-0 right-0 h-[60vh] max-h-[80vh]",
  };

  if (!isOpen) return null;

  const drawerContent = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.aside
          initial={{ x: position === "left" ? -300 : position === "right" ? 300 : 300, y: position === "bottom" ? 300 : 0 }}
          animate={{ x: 0, y: 0 }}
          exit={{ x: position === "left" ? -300 : position === "right" ? 300 : 300, y: position === "bottom" ? 300 : 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className={clsx(
            "fixed z-50 bg-white dark:bg-neutral-900 shadow-large flex flex-col",
            positions[position],
            sizes[size],
            position === "bottom" ? "rounded-t-2xl" : "h-full rounded-none"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {(title || showCloseButton) && (
            <div className="flex items-start justify-between p-6 border-b border-neutral-100 dark:border-neutral-700/50">
              <div>
                {title && <h2 className="heading-lg font-semibold text-neutral-900 dark:text-white">{title}</h2>}
              </div>
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="flex-shrink-0 p-1 rounded-lg text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  aria-label="Close drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          )}
          <div className="flex-1 overflow-y-auto p-6">{children}</div>
        </motion.aside>
      </motion.div>
    </AnimatePresence>
  );

  if (typeof window === "undefined") return null;

  return createPortal(drawerContent, document.body);
};

interface ToastProps {
  id: string;
  title: string;
  description?: string;
  type?: "success" | "error" | "warning" | "info";
  onClose: (id: string) => void;
  duration?: number;
}

export const Toast = ({ id, title, description, type = "info", onClose }: Omit<ToastProps, "duration">) => {
  const types = {
    success: "bg-success-50 border-success-200 text-success-800",
    error: "bg-danger-50 border-danger-200 text-danger-800",
    warning: "bg-warning-50 border-warning-200 text-warning-800",
    info: "bg-info-50 border-info-200 text-info-800",
  };

  const icons = {
    success: <svg className="w-5 h-5 text-success-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>,
    error: <svg className="w-5 h-5 text-danger-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10 7.293 11.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>,
    warning: <svg className="w-5 h-5 text-warning-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM10 13a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5A.75.75 0 0110 13zm0-6.5a.75.75 0 01.75-.75.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5z" clipRule="evenodd" /></svg>,
    info: <svg className="w-5 h-5 text-info-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0111 5zm0 10a1 1 0 110-2 1 1 0 010 2z" clipRule="evenodd" /></svg>,
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 300, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: 300 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className={clsx(
        "flex items-start gap-3 p-4 rounded-xl border shadow-medium min-w-[300px] max-w-md",
        types[type]
      )}
      role="alert"
      aria-live="polite"
    >
      <div className="flex-shrink-0 mt-0.5">{icons[type]}</div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm">{title}</p>
        {description && <p className="mt-1 text-sm opacity-90">{description}</p>}
      </div>
      <button
        onClick={() => onClose(id)}
        className="flex-shrink-0 p-1 rounded-lg hover:bg-black/5 transition-colors"
        aria-label="Dismiss"
      >
        <X className="w-4 h-4 opacity-50 hover:opacity-100" />
      </button>
    </motion.div>
  );
};

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
}

export const Tooltip = ({ children, content, position = "top", delay = 200 }: TooltipProps) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
  };

  const hide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrows = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-neutral-900",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-neutral-900",
    left: "left-full top-1/2 -translate-y-1/2 border-l-neutral-900",
    right: "right-full top-1/2 -translate-y-1/2 border-r-neutral-900",
  };

  return (
    <div className="relative inline-block" onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={clsx(
              "absolute z-50 px-3 py-2 text-xs font-medium text-white bg-neutral-900 rounded-lg shadow-medium whitespace-nowrap",
              positions[position]
            )}
            role="tooltip"
          >
            {content}
            <div
              className={clsx(
                "absolute w-0 h-0 border-4 border-transparent",
                arrows[position]
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

import React from "react";