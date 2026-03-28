import { FiCalendar, FiClock, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import type { BlogPost } from '@/types/blog';
import { formatDate } from '@/lib/utils';
import { siteConfig } from '@/data/personal';
import type { ComponentType } from 'react';

interface BlogPostProps {
  post: BlogPost;
  /** Pre-imported MDX component — rendered as the article body. */
  mdxContent: ComponentType;
}

export default function BlogPost({
  post,
  mdxContent: MDXContent,
}: BlogPostProps) {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="mb-4 inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-blue-500 dark:text-slate-400"
        >
          <FiArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-slate-50 md:text-5xl">
          {post.title}
        </h1>

        <div className="mb-4 flex items-center gap-6 text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <FiCalendar className="h-4 w-4" />
            <span>{formatDate(post.date)}</span>
          </div>
          {post.readingTime && (
            <div className="flex items-center gap-2">
              <FiClock className="h-4 w-4" />
              <span>{post.readingTime} min read</span>
            </div>
          )}
        </div>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* MDX article body */}
      <div className="prose dark:prose-invert">
        <MDXContent />
      </div>

      {/* Contact CTA */}
      <div className="mt-8 border-t border-gray-200 pt-8 text-center dark:border-gray-700">
        <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-50">
          Let&apos;s Discuss
        </h3>
        <p className="mb-6 text-slate-600 dark:text-slate-400">
          Have questions or want to discuss this article? Feel free to reach out!
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="btn-primary inline-flex items-center gap-2"
        >
          <span>Email Me</span>
        </a>
      </div>
    </article>
  );
}
