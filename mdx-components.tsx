import Image from 'next/image';
import type { MDXComponents } from 'mdx/types';
import { FiAlertCircle, FiCheckCircle, FiInfo } from 'react-icons/fi';
import { TbBulb } from 'react-icons/tb';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Embed from '@/components/blog/Embed';
import Table from '@/components/blog/Table';

/**
 * Required by Next.js to customise MDX rendering in the `app` directory.
 * Standard HTML elements get Tailwind typography styles; custom callout
 * components (TipBox, WarningBox, etc.) are available in any MDX file.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    // ── Standard HTML overrides ────────────────────────────────────────

    h1: ({ children }) => (
      <h1 className="mb-4 mt-8 text-4xl font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-3 mt-6 text-3xl font-semibold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-2 mt-4 text-2xl font-semibold">{children}</h3>
    ),
    p: ({ children }) => <p className="my-4 leading-7">{children}</p>,
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-blue-500 underline hover:text-blue-600"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    code: ({ children, className }) => {
      const isInline = !className;

      if (isInline) {
        return (
          <code
            className={cn(
              className,
              'rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-800',
            )}
          >
            {children}
          </code>
        );
      }

      // Preserve className from syntax highlighters (e.g. `language-tsx hljs`)
      return (
        <code className={cn(className, 'font-mono text-sm')}>{children}</code>
      );
    },
    pre: ({ children, className }) => (
      <pre
        className={cn(
          'my-4 overflow-x-auto rounded-lg bg-gray-100 p-4 dark:bg-gray-800',
          className,
        )}
      >
        {children}
      </pre>
    ),
    ul: ({ children }) => (
      <ul className="my-4 list-inside list-disc space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="my-4 list-inside list-decimal space-y-2">{children}</ol>
    ),
    li: ({ children }) => <li className="ml-4">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="my-4 border-l-4 border-gray-300 pl-4 italic dark:border-gray-600">
        {children}
      </blockquote>
    ),
    img: ({ src, alt, width, height }) => {
      if (width && height) {
        return (
          <Image
            src={src || ''}
            alt={alt || ''}
            width={Number(width)}
            height={Number(height)}
          />
        );
      }

      return (
        <span className="relative my-4 block aspect-video w-full overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
          <Image
            src={src || ''}
            alt={alt || ''}
            fill
            objectFit='contain'
          />
        </span>
      );
    },
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm text-slate-800 dark:text-slate-200">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="border-b-2 border-slate-300 dark:border-slate-600">
        {children}
      </thead>
    ),
    th: ({ children }) => (
      <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-50">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">
        {children}
      </td>
    ),
    hr: () => (
      <hr className="my-8 border-gray-300 dark:border-gray-700" />
    ),
    // ── Custom callout components ──────────────────────────────────────

    TipBox: ({ children }: { children: ReactNode }) => (
      <div className="tip-box my-4 flex items-start gap-3 rounded-lg border border-purple-200 bg-purple-100 p-4 dark:border-purple-800 dark:bg-purple-900/20">
        <TbBulb className="mt-1 h-5 w-5 flex-shrink-0 text-purple-600 dark:text-purple-300" />
        <div className="flex-1">{children}</div>
      </div>
    ),
    WarningBox: ({ children }: { children: ReactNode }) => (
      <div className="warning-box my-4 flex items-start gap-3 rounded-lg border border-yellow-200 bg-yellow-100 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
        <FiAlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-600 dark:text-yellow-300" />
        <div className="flex-1">{children}</div>
      </div>
    ),
    InfoBox: ({ children }: { children: ReactNode }) => (
      <div className="info-box my-4 flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-100 p-4 dark:border-blue-800 dark:bg-blue-900/20">
        <FiInfo className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-300" />
        <div className="flex-1">{children}</div>
      </div>
    ),
    SuccessBox: ({ children }: { children: ReactNode }) => (
      <div className="success-box my-4 flex items-start gap-3 rounded-lg border border-green-200 bg-green-100 p-4 dark:border-green-800 dark:bg-green-900/20">
        <FiCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-300" />
        <div className="flex-1">{children}</div>
      </div>
    ),

    // ── Embed components ──────────────────────────────────────────────

    Embed,
    Table,
    Image,
  };
}
