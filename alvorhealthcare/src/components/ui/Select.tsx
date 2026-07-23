"use client";

import { forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  fullWidth?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, hint, options, placeholder, fullWidth = true, className, id, ...props }, ref) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={clsx(fullWidth && "w-full", className)}>
        {label && (
          <label htmlFor={selectId} className="block text-sm font-medium text-neutral-700 mb-1.5">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={clsx(
              "w-full rounded-xl border transition-colors duration-200 appearance-none",
              "bg-white text-neutral-900",
              "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
              "disabled:bg-neutral-50 disabled:cursor-not-allowed",
              error
                ? "border-danger-300 focus:ring-danger-500"
                : "border-neutral-200 hover:border-neutral-300",
              "py-3 px-4 pr-10 text-body-md"
            )}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${selectId}-error` : hint ? `${selectId}-hint` : undefined}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-neutral-400">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        {error && (
          <p id={`${selectId}-error`} className="mt-1.5 text-sm text-danger-600" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${selectId}-hint`} className="mt-1.5 text-sm text-neutral-500">
            {hint}
          </p>
        )}
      </div>
    )
  }
);

Select.displayName = "Select";