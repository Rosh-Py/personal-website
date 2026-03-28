# Personal Website & Tech Blog

A modern, highly-optimized personal portfolio and technical blog built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **MDX**. 

Designed to be a centralized, easy-to-manage platform to showcase your professional journey, technical skills, and share your knowledge through rich, markdown-based blog articles.

## ✨ Features

- **Blazing Fast Performance:** Powered by Next.js Server Components and statically generated blog routes.
- **Dynamic MDX Blog:** 
  - Write articles in standard Markdown with JSX superpowers (`.mdx`).
  - Seamless syntax highlighting for code blocks.
  - Custom UI Callouts (`<TipBox>`, `<WarningBox>`, `<InfoBox>`, `<SuccessBox>`).
  - Native `next/image` optimization seamlessly integrated into standard markdown tags.
- **Centralized Data Management:** The entire site (Header, Hero, About, Skills, Footer, SEO metadata) is driven by a single intuitive data source file (`data/personal.ts`).
- **SEO Optimized:** Dynamic metadata generation for all blog posts and main pages. OpenGraph cards configured out-of-the-box.
- **Responsive & Accessible Design:** Crafted with Tailwind CSS ensuring pixel-perfect display across all devices, including a clean Dark Mode setup.

## 🚀 Getting Started

### Prerequisites

You need [Node.js](https://nodejs.org/) (version 18+ recommended) and `npm` installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:Rosh-Py/personal-website.git
   cd personal-website
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Managing Content

### Personal details & Configuration

To update your name, email, social links, resume, career milestones, or skills, simply edit the **`data/personal.ts`** file. The changes will automatically propagate across the entire website from the Hero section to the Footer.

### Writing a new Blog Post

Blog posts live in the `content/blog/` directory as `.mdx` files. 

1. Create a new `.mdx` file in `content/blog/` (e.g. `my-new-post.mdx`).
2. Add the YAML Frontmatter to the top of the file:
   ```yaml
   ---
   title: "Your Awesome Article Title"
   date: "2026-03-28"
   excerpt: "A short description of what this article is about."
   tags:
     - react
     - nextjs
   featured: true
   coverImage: "/blog/your-cover-image.webp"
   ---
   ```
3. Place your images inside the `public/blog/` directory and reference them smoothly inside your post:
   ```mdx
   <Image src="/blog/your-cover-image.webp" alt="Description" fill />
   ```
4. **Register your post route**: For static Next.js compilation, add your new MDX post mapping reference in `app/blog/[slug]/page.tsx` under the `MDX_IMPORTERS` constant map so the platform can bundle the MDX safely.

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React framework)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Content:** [MDX](https://mdxjs.com/) for hybrid Markdown & JSX pages
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment:** Recommended on [Vercel](https://vercel.com/)

## 📄 License

This project is open-sourced under the [MIT License](LICENSE).
