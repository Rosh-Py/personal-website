import Link from 'next/link';
import Image from 'next/image';
import { FiCalendar, FiClock } from 'react-icons/fi';
import type { PostWithoutContent } from '@/lib/blog';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
  post: PostWithoutContent;
}

export default function BlogCard({
  post,
}: BlogCardProps) {


  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-900"
    >
      <div className="relative mb-4 aspect-video overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            // placeholder="blur"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Post
            </span>
          </div>
        )}
      </div>

      <div className="mb-2 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-1">
          <FiCalendar className="h-4 w-4" />
          <span>{formatDate(post.date)}</span>
        </div>
        {post.readingTime && (
          <div className="flex items-center gap-1">
            <FiClock className="h-4 w-4" />
            <span>{post.readingTime} min read</span>
          </div>
        )}
      </div>

      <h3 className="mb-2 line-clamp-2 text-xl font-semibold text-slate-900 dark:text-slate-50">
        {post.title}
      </h3>

      <p className="mb-4 line-clamp-3 text-slate-600 dark:text-slate-300">
        {post.excerpt}
      </p>

      {post.tags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-slate-200 px-2.5 py-1 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
