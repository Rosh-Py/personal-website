import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge Tailwind classes with conflict resolution via `tailwind-merge`. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a date string or Date object into a human-readable form (e.g. "January 15, 2024"). */
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/** Return a human-friendly relative time string (e.g. "3 days ago"). */
export function formatRelativeTime(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - d.getTime()) / 1000);

  const thresholds: [number, string][] = [
    [60, 'just now'],
    [3600, 'minute'],
    [86400, 'hour'],
    [2592000, 'day'],
    [31536000, 'month'],
    [Infinity, 'year'],
  ];

  for (const [limit, unit] of thresholds) {
    if (diffInSeconds < limit) {
      if (unit === 'just now') return unit;

      const divisors: Record<string, number> = {
        minute: 60,
        hour: 3600,
        day: 86400,
        month: 2592000,
        year: 31536000,
      };
      const count = Math.floor(diffInSeconds / divisors[unit]);
      return `${count} ${unit}${count > 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
}

/** Estimate reading time in minutes based on word count (~200 WPM). */
export function calculateReadingTime(content: string): number {
  const WORDS_PER_MINUTE = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / WORDS_PER_MINUTE);
}

/** Truncate text to `maxLength` characters, appending "…" if trimmed. */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/** Convert arbitrary text into a URL-safe slug. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
