import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageStubProps {
  title: string;
  description?: string;
}

export function PageStub({ title, description }: PageStubProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white dark:bg-neutral-950">
      <div className="container max-w-2xl text-center px-6">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
          <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h1 className="display-md font-bold text-neutral-900 dark:text-white mb-4">{title}</h1>
        {description && <p className="body-lg text-neutral-600 dark:text-neutral-300 mb-8">{description}</p>}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
