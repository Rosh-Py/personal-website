import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import BlogCard from '@/components/blog/BlogCard';
import { getFeaturedPosts } from '@/lib/blog';
import Link from 'next/link';

export default async function HomePage() {
  const featuredPosts = await getFeaturedPosts();

  return (
    <>
      <Hero />
      <About />
      <Skills />

      {featuredPosts.length > 0 && (
        <section className="section-spacing bg-white dark:bg-slate-950">
          <div className="container-custom">
            <div className="mb-12 flex items-center justify-between">
              <div>
                <h2 className="mb-3 text-4xl font-semibold text-slate-900 dark:text-slate-50 md:text-5xl">
                  Latest posts
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  Experiments, notes, and practical deep dives.
                </p>
              </div>
              <Link
                href="/blog"
                aria-label="See all posts"
                className="hidden items-center gap-2 text-sm font-medium text-blue-500 transition-colors hover:text-blue-600 md:inline-flex"
              >
                See all posts
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link
                href="/blog"
                className="btn-primary inline-flex items-center gap-2"
              >
                See all posts
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
