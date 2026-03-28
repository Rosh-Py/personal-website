import BlogCard from '@/components/blog/BlogCard';
import { getAllPosts } from '@/lib/blog';
import { siteConfig } from '@/data/personal';

export const metadata = {
  title: `Blog - ${siteConfig.name}`,
  description:
    'Thoughts, tutorials, and insights about web development, technology, and more.',
  openGraph: {
    title: `Blog - ${siteConfig.name}`,
    description:
      'Thoughts, tutorials, and insights about web development, technology, and more.',
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  if (posts.length === 0) {
    return (
      <div className="container-custom section-spacing">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-slate-900 dark:text-slate-50 md:text-5xl">
            No Blog Posts Yet
          </h1>
          <p className="mb-8 text-lg text-slate-600 dark:text-slate-300">
            Be the first to share your thoughts! Check back soon for updates.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom section-spacing">
      <div className="mx-auto mb-12 max-w-2xl">
        <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-slate-50 md:text-5xl">
          Blog
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Thoughts, tutorials, and insights about web development, technology,
          and more.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
