import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogPost } from '@/types/blog';
import { calculateReadingTime } from './utils';

const CONTENT_DIR = path.join(process.cwd(), 'content/blog');

/** Parse frontmatter into a full BlogPost (single source of truth for field mapping). */
function parsePost(slug: string, raw: string): BlogPost {
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? '',
    date: data.date ?? '',
    excerpt: data.excerpt ?? '',
    content,
    tags: data.tags ?? [],
    featured: data.featured ?? false,
    coverImage: data.coverImage,
    readingTime: calculateReadingTime(content),
    canonicalUrl: data.canonicalUrl,
  };
}

/** Omit content body for list views (reading time still computed from content). */
export type PostWithoutContent = Omit<BlogPost, 'content'>;

/** Retrieve all blog posts sorted by date (newest first). */
export async function getAllPosts(): Promise<PostWithoutContent[]> {
  try {
    if (!fs.existsSync(CONTENT_DIR)) return [];

    const files = fs.readdirSync(CONTENT_DIR);

    const posts = files
      .filter((file) => file.endsWith('.mdx'))
      .map((file): PostWithoutContent => {
        const slug = file.replace(/\.mdx$/, '');
        const fullPath = path.join(CONTENT_DIR, file);
        return parsePost(slug, fs.readFileSync(fullPath, 'utf8'));
      });

    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

/** Retrieve a single blog post by its slug, or `null` if not found. */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(CONTENT_DIR, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) return null;

    return parsePost(slug, fs.readFileSync(fullPath, 'utf8'));
  } catch (error) {
    console.error('Error reading blog post:', error);
    return null;
  }
}

/** Return up to 3 featured posts for the homepage. */
export async function getFeaturedPosts(): Promise<PostWithoutContent[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.featured).slice(0, 3);
}

/** Find up to 3 related posts based on shared tags (excludes the current post). */
export async function getRelatedPosts(
  currentSlug: string,
  tags: string[],
): Promise<PostWithoutContent[]> {
  const allPosts = await getAllPosts();
  return allPosts
    .filter(
      (post) =>
        post.slug !== currentSlug &&
        post.tags.some((tag) => tags.includes(tag)),
    )
    .slice(0, 3);
}

/** Return all available post slugs (used for static generation). */
export async function getPostSlugs(): Promise<string[]> {
  try {
    if (!fs.existsSync(CONTENT_DIR)) return [];

    return fs
      .readdirSync(CONTENT_DIR)
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => file.replace(/\.mdx$/, ''));
  } catch (error) {
    console.error('Error reading post slugs:', error);
    return [];
  }
}
