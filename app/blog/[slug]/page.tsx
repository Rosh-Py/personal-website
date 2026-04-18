import BlogPost from '@/components/blog/BlogPost';
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/blog';
import { siteConfig } from '@/data/personal';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { ComponentType } from 'react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} - ${siteConfig.name}`,
    description: post.excerpt,
    ...(post.canonicalUrl && {
      alternates: {
        canonical: post.canonicalUrl,
      },
    }),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
      ...(post.coverImage && {
        images: [
          {
            url: `${siteConfig.url}${post.coverImage}`,
            alt: post.title,
          },
        ],
      }),
    },
    twitter: {
      card: post.coverImage ? 'summary_large_image' : 'summary',
      title: post.title,
      description: post.excerpt,
      ...(post.coverImage && {
        images: [`${siteConfig.url}${post.coverImage}`],
      }),
    },
  };
}

/**
 * Static MDX import map — Next.js requires static import paths for bundling,
 * so we maintain an explicit mapping from slug → dynamic import.
 * Add a new entry here whenever you create a new blog post.
 */
const MDX_IMPORTERS: Record<
  string,
  () => Promise<{ default: ComponentType }>
> = {
  'the-idle-secret-to-faster-apps': () =>
    import('@/content/blog/the-idle-secret-to-faster-apps.mdx'),
  'under-the-hood-of-redux-create-a-lightweight-state-manager': () =>
    import('@/content/blog/under-the-hood-of-redux-create-a-lightweight-state-manager.mdx'),
  'your-browser-is-doing-too-much-work': () =>
    import('@/content/blog/your-browser-is-doing-too-much-work.mdx'),
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const relatedPosts = await getRelatedPosts(slug, post.tags);

  const importer = MDX_IMPORTERS[slug];
  if (!importer) notFound();

  let MDXContent: ComponentType;
  try {
    MDXContent = (await importer()).default;
  } catch (error) {
    console.error('Error loading MDX content:', error);
    notFound();
  }

  return (
    <div className="container-custom section-spacing">
      <BlogPost post={post} mdxContent={MDXContent} />

      {relatedPosts.length > 0 && (
        <div className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-700">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-50">
            Related Posts
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group"
              >
                <div className="rounded-lg border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg group-hover:scale-105 dark:border-slate-800 dark:bg-slate-950">
                  <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-slate-900 dark:text-slate-50">
                    {relatedPost.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                    {relatedPost.excerpt}
                  </p>
                  <span className="text-sm font-medium text-blue-500 group-hover:underline">
                    Read More
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
