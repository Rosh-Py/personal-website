---
name: add-blog-post
description: Use when the user asks to add a new blog post from a Hashnode source URL to the personal website.
---

# Add a New Blog Post

> Add a new blog post to the personal website from a Hashnode source URL.

## Inputs
- `source_url`: The Hashnode blog post URL (e.g. `https://jroshan.hashnode.dev/post-slug`)
- `slug`: The URL slug for the post (derived from filename or provided)

## Steps

### 1. Fetch the source content
- Navigate to `{{source_url}}` and extract the blog content.
- If Cloudflare blocks the fetch, hand browser control to the user to bypass verification.

### 2. Download and optimize images
- Download all images referenced in the post (cover image + inline images) to `public/blog/`.
- Use descriptive kebab-case filenames (e.g., `browser-rendering-pipeline.webp`).
- Convert ALL images to `.webp` by running the included optimization script:
  ```bash
  node .gemini/skills/add-blog-post/scripts/optimize-images.mjs
  ```
  This script automatically processes all PNGs, JPGs, and GIFs in `public/blog/` and removes the originals.
- Never leave PNG, JPG, or GIF files in `public/blog/`.

### 3. Create the MDX file
- Create `content/blog/{{slug}}.mdx` with the following structure:

#### Frontmatter (required)
```yaml
---
title: "Post Title Here"
date: "YYYY-MM-DD"
excerpt: "A short 1-2 sentence summary for cards and SEO."
tags:
  - tag1
  - tag2
featured: true
coverImage: "/blog/cover-image-name.webp"
canonicalUrl: "https://jroshan.hashnode.dev/{{slug}}"
---
```

#### Image imports
```jsx
import myImage from '@/public/blog/my-image.webp';
```

#### Body content
- Start with a `#` heading (display title/subtitle).
- Use `>` blockquotes for key takeaways or introductory quotes.
- Use `---` horizontal rules between major sections.
- Use `##` for main sections, `###` for subsections.
- Code blocks must specify language (`js`, `jsx`, `javascript`, etc.).
- End with a `## Resources` section containing reference links.

### 4. Register the slug in the MDX importer map

Open `app/blog/[slug]/page.tsx` and add an entry to the `MDX_IMPORTERS` object:

```ts
'{{slug}}': () =>
  import('@/content/blog/{{slug}}.mdx'),
```

> **Why this is required:** Next.js needs static import paths at build time to bundle MDX files correctly. Without this entry the route returns 404 even if the `.mdx` file exists.

### 5. Convert Hashnode-specific markup

| Hashnode markup | Replace with |
|---|---|
| `<div data-node-type="callout">` with emoji + text | `<TipBox>` component (markdown works inside) |
| `![](hashnode-cdn-url)` images | `<Image src={importedVar} placeholder="blur" alt="..." width={1600} height={840} />` |
| `align="center"` and other Hashnode HTML attrs | Remove entirely |
| "References" heading | Rename to "Resources" |

### 6. Available MDX components

**`<TipBox>`** — Styled callout box:
```jsx
<TipBox>

**Tip content here.** Markdown works inside.

</TipBox>
```

**`<Table>`** — Custom table with JSX rows:
```jsx
<Table
  headers={['Col1', 'Col2']}
  rows={[
    [<strong>Label</strong>, <span>Value</span>],
  ]}
/>
```

**`<Embed>`** — External sandbox embed:
```jsx
<Embed src="https://stackblitz.com/edit/..." title="Demo Title" />
```

### 7. Verify
- Grep the codebase for any stale image references (`.png`, `.gif`, `.jpg` in `content/blog/`).
- Confirm frontmatter has all required fields.
- Confirm all image imports resolve to existing `.webp` files in `public/blog/`.
- Confirm the slug is present in `MDX_IMPORTERS` in `app/blog/[slug]/page.tsx`.
