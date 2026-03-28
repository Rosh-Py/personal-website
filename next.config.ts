import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeHighlight from 'rehype-highlight';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    // Disable MDX-RS so our remark/rehype plugins are applied correctly.
    mdxRs: false,
  },
};

/**
 * MDX pipeline configuration:
 *  - remark-frontmatter: parses YAML frontmatter blocks
 *  - remark-mdx-frontmatter: exposes frontmatter as named exports
 *  - rehype-highlight: applies syntax highlighting to code blocks
 */
const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [rehypeHighlight],
  },
});

export default withMDX(nextConfig);
