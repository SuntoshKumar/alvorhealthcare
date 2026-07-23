"use client";

import { clsx } from "clsx";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, leftIcon, rightIcon, fullWidth = true, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={clsx(fullWidth && "w-full", className)}>
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-neutral-700 mb-1.5">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={clsx(
              "w-full rounded-xl border transition-colors duration-200",
              "bg-white text-neutral-900 placeholder:text-neutral-400",
              "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
              "disabled:bg-neutral-50 disabled:cursor-not-allowed",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              error
                ? "border-danger-300 focus:ring-danger-500"
                : "border-neutral-200 hover:border-neutral-300",
              "py-3 px-4 text-body-md"
            )}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
            {...props}
          />
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-neutral-400">
              {rightIcon}
            </div>
          )}
        </div>
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-sm text-danger-600" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="mt-1.5 text-sm text-neutral-500">
            {hint}
          </p>
        )}
      </div>
    )
  }
);

Input.displayName = "Input";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, fullWidth = true, className, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={clsx(fullWidth && "w-full", className)}>
        {label && (
          <label htmlFor={textareaId} className="block text-sm font-medium text-neutral-700 mb-1.5">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={clsx(
            "w-full rounded-xl border transition-colors duration-200 resize-y min-h-[100px]",
            "bg-white text-neutral-900 placeholder:text-neutral-400",
            "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
            "disabled:bg-neutral-50 disabled:cursor-not-allowed",
            error
              ? "border-danger-300 focus:ring-danger-500"
              : "border-neutral-200 hover:border-neutral-300",
            "py-3 px-4 text-body-md"
          )}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined}
          {...props}
        />
        {error && (
          <p id={`${textareaId}-error`} className="mt-1.5 text-sm text-danger-600" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${textareaId}-hint`} className="mt-1.5 text-sm text-neutral-500">
            {hint}
          </p>
        )}
      </div>
    )
  }
);

Textarea.displayName = "Textarea";

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
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
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

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, className, id, ...props }, ref) => {
    const checkboxId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={clsx("flex items-start gap-3", className)}>
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          className={clsx(
            "mt-0.5 h-4 w-4 rounded border-neutral-300",
            "text-primary-600 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
            "transition-colors duration-200",
            "checked:border-primary-600 checked:bg-primary-600"
          )}
          {...props}
        />
        <label htmlFor={checkboxId} className="cursor-pointer">
          <span className="block text-body-md text-neutral-900 font-medium">{label}</span>
          {description && (
            <span className="block text-body-sm text-neutral-500 mt-0.5">{description}</span>
          )}
        </label>
      </div>
    )
  }
);

Checkbox.displayName = "Checkbox";

interface RadioGroupProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  label: string;
  options: { value: string; label: string; description?: string }[];
  name: string;
  error?: string;
}

export const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  ({ label, options, name, error, className, ...props }, ref) => {
    const groupId = name;

    return (
      <fieldset ref={ref} className={clsx("w-full", className)} {...props}>
        <legend className="block text-sm font-medium text-neutral-700 mb-3">{label}</legend>
        <div className="space-y-3" role="radiogroup" aria-labelledby={`${groupId}-label`} aria-invalid={error ? "true" : "false"}>
          {options.map((option) => (
            <label key={option.value} className="flex items-start gap-3 cursor-pointer">
              <input
                type="radio"
                name={name}
                value={option.value}
                className={clsx(
                  "mt-0.5 h-4 w-4 border-neutral-300",
                  "text-primary-600 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                  "transition-colors duration-200"
                )}
              />
              <div>
                <span className="block text-body-md text-neutral-900 font-medium">{option.label}</span>
                {option.description && (
                  <span className="block text-body-sm text-neutral-500 mt-0.5">{option.description}</span>
                )}
              </div>
            </label>
          ))}
        </div>
        {error && <p className="mt-2 text-sm text-danger-600" role="alert">{error}</p>}
      </fieldset>
    )
  }
);

RadioGroup.displayName = "RadioGroup";