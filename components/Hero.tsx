import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiBookOpen } from 'react-icons/fi';
import { heroContent } from '@/data/personal';

export default function Hero() {
  return (
    <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="container-custom py-20 md:py-28">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:gap-12 md:text-left max-w-4xl">
          <Image
            src="/roshan.jpeg"
            alt="Roshan Kumar Jha"
            width={160}
            height={160}
            className="h-32 w-32 flex-shrink-0 rounded-full border-2 border-slate-200 object-cover dark:border-slate-700 md:h-40 md:w-40"
            priority
          />
          <div className="space-y-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            {heroContent.tag}
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 md:text-6xl">
            {heroContent.greeting}
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 md:text-xl">
            {heroContent.intro}
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2 md:justify-start">
            <Link
              href="/blog"
              className="btn-primary inline-flex items-center gap-2"
            >
              Read the blog
              <FiBookOpen className="h-4 w-4" />
            </Link>
            <Link
              href="/#about"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
            >
              Learn more
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
