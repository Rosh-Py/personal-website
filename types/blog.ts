/** Full blog post data including raw MDX content. */
export interface BlogPost {
  slug: string;
  title: string;
  /** ISO date string (e.g. "2024-01-15"). */
  date: string;
  excerpt: string;
  /** Raw MDX content body (used for reading-time calculation). */
  content: string;
  tags: string[];
  featured?: boolean;
  /** Cover image path relative to public/ (e.g. "/blog/my-image.webp"). */
  coverImage?: string;
  /** Estimated reading time in minutes. */
  readingTime?: number;
  /** Canonical URL pointing to the original post (e.g. Hashnode). */
  canonicalUrl?: string;
}

/** Lightweight metadata returned by list queries (no content body). */
export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  featured?: boolean;
  coverImage?: string;
  readingTime?: number;
  canonicalUrl?: string;
}
