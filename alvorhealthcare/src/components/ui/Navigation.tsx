"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { ChevronDown } from "lucide-react";

interface NavLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  active?: boolean;
  variant?: "default" | "muted";
}

export const NavLink = ({ active = false, variant = "default", children, className, ...props }: NavLinkProps) => (
  <Link
    className={clsx(
      "relative px-3 py-2 text-sm font-medium transition-colors rounded-lg",
      variant === "default"
        ? active
          ? "text-primary-600"
          : "text-neutral-600 hover:text-primary-600 hover:bg-primary-50"
        : active
        ? "text-primary-600"
        : "text-neutral-500 hover:text-neutral-700",
      className
    )}
    aria-current={active ? "page" : undefined}
    {...props}
  >
    {children}
  </Link>
);

interface MegaMenuProps {
  columns: MegaMenuColumn[];
  cta?: { label: string; href: string; variant: "primary" | "secondary" };
}

interface MegaMenuColumn {
  title: string;
  links: MegaMenuLink[];
}

interface MegaMenuLink {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  badgeVariant?: "primary" | "secondary" | "success";
}

export const MegaMenu = ({ columns, cta }: MegaMenuProps) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className="absolute left-0 top-full w-full lg:w-[800px] mt-2 rounded-2xl bg-white border border-neutral-100 shadow-large p-6 lg:p-8 z-50"
    role="menu"
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="space-y-4">
          <h4 className="font-heading font-semibold text-neutral-900 text-sm uppercase tracking-wider">
            {column.title}
          </h4>
          <ul className="space-y-2" role="none">
            {column.links.map((link, linkIndex) => (
              <li key={linkIndex} role="none">
                <Link
                  href={link.href}
                  className="flex items-start gap-3 px-3 py-2 rounded-xl text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  role="menuitem"
                >
                  <span className="font-medium">{link.label}</span>
                  {link.description && (
                    <span className="text-neutral-400 text-xs hidden sm:inline">· {link.description}</span>
                  )}
                  {link.badge && (
                    <span className={clsx(
                      "ml-auto px-2 py-0.5 text-xs font-medium rounded-full",
                      link.badgeVariant === "primary" && "bg-primary-100 text-primary-700",
                      link.badgeVariant === "secondary" && "bg-secondary-100 text-secondary-700",
                       link.badgeVariant === "success" && "bg-success-100 text-success-700"
                    )}>
                      {link.badge}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {cta && (
      <div className="mt-6 pt-6 border-t border-neutral-100">
        <Link
          href={cta.href}
          className={clsx(
            "inline-flex items-center justify-center w-full px-6 py-3 rounded-xl font-semibold text-sm transition-all",
            cta.variant === "primary"
              ? "btn-primary"
              : "btn-secondary"
          )}
          role="menuitem"
        >
          {cta.label}
        </Link>
      </div>
    )}
  </motion.div>
);

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
  separator?: React.ReactNode;
}

export const Breadcrumb = ({ items, separator = <span className="mx-2 text-neutral-400">/</span> }: BreadcrumbProps) => (
  <nav className="flex items-center gap-1 text-sm" aria-label="Breadcrumb">
    <ol className="flex items-center gap-1">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-1">
          {index > 0 && separator}
          {item.href ? (
            <Link href={item.href} className="text-neutral-500 hover:text-primary-600 transition-colors font-medium">
              {item.label}
            </Link>
          ) : (
            <span className="text-neutral-900 font-medium" aria-current="page">
              {item.label}
            </span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisiblePages?: number;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  maxVisiblePages = 5,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const pages: (number | "ellipsis")[] = [];
    const half = Math.floor(maxVisiblePages / 2);

    let start = Math.max(1, currentPage - half);
    const end = Math.min(totalPages, start + maxVisiblePages - 1);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    if (showFirstLast && start > 1) {
      pages.push(1);
      if (start > 2) pages.push("ellipsis");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (showFirstLast && end < totalPages) {
      if (end < totalPages - 1) pages.push("ellipsis");
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getVisiblePages();

  return (
    <nav className="flex items-center justify-center gap-2" aria-label="Pagination">
      {showPrevNext && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn-ghost p-2 disabled:opacity-50"
          aria-label="Previous page"
        >
          <ChevronDown className="w-5 h-5 rotate-180" />
        </button>
      )}
      {pages.map((page, index) =>
        page === "ellipsis" ? (
          <span key={`ellipsis-${index}`} className="px-2 text-neutral-400">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page as number)}
            className={clsx(
              "w-10 h-10 rounded-xl font-medium transition-all",
              page === currentPage
                ? "bg-primary-600 text-white shadow-glow"
                : "text-neutral-600 hover:bg-neutral-100 hover:text-primary-600"
            )}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        )
      )}
      {showPrevNext && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="btn-ghost p-2 disabled:opacity-50"
          aria-label="Next page"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      )}
    </nav>
  );
};

interface TabsProps {
  tabs: { id: string; label: string; icon?: React.ReactNode }[];
  activeTab: string;
  onChange: (id: string) => void;
  variant?: "default" | "pills" | "underline";
  fullWidth?: boolean;
}

export const Tabs = ({ tabs, activeTab, onChange, variant = "default", fullWidth = false }: TabsProps) => {
  const variants = {
    default: "bg-neutral-100 rounded-xl p-1",
    pills: "bg-transparent",
    underline: "bg-transparent border-b border-neutral-200",
  };

  const tabVariants = {
    default: (active: boolean) =>
      clsx(
        "px-4 py-2 rounded-lg font-medium text-sm transition-all",
        active ? "bg-white text-primary-600 shadow-soft" : "text-neutral-600 hover:text-neutral-900"
      ),
    pills: (active: boolean) =>
      clsx(
        "px-5 py-2.5 rounded-xl font-medium text-sm transition-all",
        active ? "bg-primary-600 text-white shadow-glow" : "text-neutral-600 hover:bg-primary-50 hover:text-primary-600"
      ),
    underline: (active: boolean) =>
      clsx(
        "px-4 py-3 border-b-2 font-medium text-sm transition-all -mb-px",
        active ? "border-primary-600 text-primary-600" : "border-transparent text-neutral-600 hover:text-neutral-900"
      ),
  };

  return (
    <div className={clsx("flex gap-1", variants[variant], fullWidth && "w-full")} role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={tab.id === activeTab}
          aria-controls={`panel-${tab.id}`}
          id={`tab-${tab.id}`}
          onClick={() => onChange(tab.id)}
          className={clsx(tabVariants[variant](tab.id === activeTab), fullWidth && "flex-1 flex items-center justify-center gap-2")}
        >
          {tab.icon && <span className="flex-shrink-0">{tab.icon}</span>}
          {tab.label}
        </button>
      ))}
    </div>
  );
};

interface TabPanelProps {
  id: string;
  activeTab: string;
  children: React.ReactNode;
}

export const TabPanel = ({ id, activeTab, children }: TabPanelProps) => (
  <div
    role="tabpanel"
    id={`panel-${id}`}
    aria-labelledby={`tab-${id}`}
    hidden={id !== activeTab}
    className="animate-fade-in"
  >
    {children}
  </div>
);