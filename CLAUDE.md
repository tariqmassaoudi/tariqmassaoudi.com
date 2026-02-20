# CLAUDE.md — tariqmassaoudi.com

Personal portfolio and blog for Tariq Massaoudi. Built with Gatsby v4 and Tailwind CSS v3.

## Tech Stack

- **Framework**: Gatsby 4 (static site generator, React-based)
- **Styling**: Tailwind CSS 3 + PostCSS
- **Content**: Markdown files transformed by `gatsby-transformer-remark`
- **Data layer**: GraphQL (Gatsby's built-in)
- **Language**: JavaScript (JSX), one legacy TypeScript page (`using-typescript.tsx`)
- **Fonts**: Merriweather, Montserrat (typeface packages), Fuzzy Bubbles + Dancing Script (Google Fonts via CSS)
- **Charting**: Chart.js, Plotly, Reaviz (used in data-story pages)

## Development Commands

```bash
npm run develop    # Start dev server at http://localhost:8000
npm run build      # Production build
npm run serve      # Serve production build locally
npm run clean      # Clear Gatsby cache (.cache and public/)
npm run format     # Run Prettier on all JS/TS/JSON/MD files
```

There is no test suite — the `test` script prints a placeholder and exits 1.

## Project Structure

```
tariqmassaoudi.com/
├── content/
│   └── blog/              # Markdown blog posts (one folder per post)
│       └── <slug>/
│           └── index.md   # Post content with frontmatter
├── src/
│   ├── components/        # Reusable React components
│   ├── pages/             # Gatsby pages (file-based routing)
│   ├── templates/         # Gatsby page templates (blog-post.js)
│   ├── images/            # Static images imported in components
│   ├── map/               # GeoJSON data (morocco.json)
│   ├── styles/
│   │   └── global.css     # Tailwind directives + global overrides
│   ├── normalize.css
│   └── style.css
├── static/                # Files copied verbatim to /public
├── back/                  # Backend scripts (separate, not part of Gatsby)
├── gatsby-config.js       # Plugins, siteMetadata
├── gatsby-node.js         # Page creation logic, slug generation
├── gatsby-browser.js      # Browser-side lifecycle hooks
├── gatsby-ssr.js          # SSR lifecycle hooks
├── tailwind.config.js
└── postcss.config.js
```

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `src/pages/index.js` | Homepage — shows 3 hardcoded featured articles |
| `/articles` | `src/pages/articles.js` | Full list of blog posts |
| `/about` | `src/pages/about.js` | Bio, certifications, skills, personal recommendations |
| `/side` | `src/pages/side.js` | Side projects grid |
| `/quotes` | `src/pages/quotes.js` | Favourite quotes |
| `/stories` | `src/pages/stories.js` | Data Stories showcase |
| `/traintrends` | `src/pages/traintrends.js` | Interactive train pricing data visualization |
| `/dashboard` | `src/pages/dashboard.js` | Analytics dashboard |
| `/pricehistory` | `src/pages/pricehistory.js` | E-commerce price history tool |
| `/jumiaapp` | `src/pages/jumiaapp.js` | Jumia price comparator app page |
| `/<post-slug>/` | `src/templates/blog-post.js` | Individual blog posts (auto-generated) |
| `/404` | `src/pages/404.js` | 404 page |

## Components

| Component | Purpose |
|---|---|
| `layout.js` | Root wrapper — renders `<Header>`, main content, footer. Shows hero intro only on root path |
| `header.js` | Responsive navbar with hamburger menu for mobile. Links: Home, Articles, Side Projects, Quotes, About |
| `blogcard.js` | Blog post card with gradient border. Accepts `style` prop (1, 2, or 3) for different gradient colours |
| `article.js` | Row-style article listing used on `/articles` |
| `sidecard.js` | Project card with image, title, description, and typed icon links (github/demo/article) |
| `tag.js` | Small blue badge for topic tags |
| `quote.js` | Quote display with author image |
| `seo.js` | Sets `<title>`, meta description, OG tags, Twitter card via `useStaticQuery` |
| `searchbar.js` | Search input (used on articles page) |
| `kpiCard.js`, `kpiSection.js` | KPI metric display components for dashboards |
| `bardays.js`, `histogram.js`, `heatmap.js`, `linehours.js`, etc. | Chart components for data story pages (Chart.js / Plotly) |

## Blog Posts (Content)

Posts live in `content/blog/<slug>/index.md`. Required frontmatter:

```yaml
---
title: "Post Title"
date: "2025-01-22T12:00:00.000Z"
description: Short description shown in listings
tag: Tag1,Tag2
---
```

- `tag` is a **comma-separated string** — no spaces around commas. Components call `.split(',')` to parse.
- Slugs are auto-generated from the folder name by `gatsby-node.js`.
- Previous/next navigation is generated in `gatsby-node.js` based on `ASC` date order.

## Homepage Curation (Important)

The homepage (`src/pages/index.js`) does **not** show the latest posts automatically. It uses a GraphQL filter to fetch exactly 3 posts by title:

```js
filter: {frontmatter: {title: {in: [
  "From Idea to Reality: Building a Price History Tool for Moroccan Ecommerce",
  "Arabic Topic Classification On The Hespress News Dataset",
  "I Use Coding Agents Daily: Here's What Works"
]}}}
```

The first card slot is also **hardcoded** to always show the train trends article regardless of what GraphQL returns. To feature different articles, update both the GraphQL `in` filter and the hardcoded override in the JSX.

## Articles Page Quirk

`src/pages/articles.js` manually inserts the train trends article at position index 1 of the listing — it is not in the markdown blog posts (it's a custom page at `/traintrends`). If you add new posts, be aware of this injection.

## Data Visualization Pages

Several pages (`traintrends`, `dashboard`, `pricehistory`) embed heavy charting libraries (Plotly, Chart.js, Reaviz). These pages fetch data from external sources or use hardcoded datasets and are self-contained. They do not follow the blog-post template pattern.

## Styling Conventions

- **Tailwind utility classes** are the primary styling mechanism. Avoid writing custom CSS unless necessary.
- **No CSS modules** — all styles are inline via Tailwind.
- `darkMode: 'class'` is set in `tailwind.config.js` but dark mode is not actively used across the site.
- Global CSS (`src/styles/global.css`) adds:
  - Google Fonts import (Fuzzy Bubbles, Dancing Script)
  - Tailwind directives (`@tailwind base/components/utilities`)
  - `ul { @apply list-inside list-disc; }` — all `<ul>` elements get bullet styling globally.
- The header logo uses `font-['Fuzzy_Bubbles']` — an arbitrary Tailwind font value.

## GraphQL Patterns

Every page that needs data uses a named `pageQuery` export:

```js
export const pageQuery = graphql`
  query {
    site { siteMetadata { title } }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes { excerpt fields { slug } frontmatter { date(formatString: "MMMM DD, YYYY") title description } }
    }
  }
`
```

Data is passed as props: `({ data, location })`.

The SEO component uses `useStaticQuery` instead of a page query.

## Adding a New Blog Post

1. Create a new folder: `content/blog/<your-slug>/`
2. Create `content/blog/<your-slug>/index.md` with required frontmatter (`title`, `date`, `description`, `tag`)
3. Write content in Markdown below the frontmatter
4. Run `gatsby develop` — the page is auto-created at `/<your-slug>/`
5. To feature it on the homepage, update the title filter in `src/pages/index.js`

## Adding a New Page

1. Create `src/pages/<page-name>.js`
2. Export a default React component and a `Head` component using `<Seo title="..." />`
3. Wrap content in `<Layout location={location} title={siteTitle}>` for consistent nav/header
4. Add a link to `src/components/header.js` if it should appear in navigation

## Adding a New Side Project

Edit `src/pages/side.js` and add a `<SideCard>` component with:

```jsx
<SideCard
  imageSrc="https://..."
  title="Project Name"
  description="Short description"
  links={[
    { type: "github", url: "https://github.com/...", label: "GitHub" },
    { type: "demo", url: "https://...", label: "Demo" },
    { type: "article", url: "https://...", label: "Article" },
  ]}
/>
```

`type` controls which icon renders: `"github"` → FaGithub, `"demo"` → FaExternalLinkAlt, `"article"` → FaNewspaper.

## Site Metadata

Defined in `gatsby-config.js`:

```js
siteMetadata: {
  title: "Tariq Massaoudi",
  author: { name: "Tariq Massaoudi", summary: "Senior Software Engineer specializing in GenAI, RAG & MLOps" },
  description: "Senior Software Engineer specializing in GenAI, RAG architectures, and MLOps...",
  siteUrl: "https://www.tariqmassaoudi.com",
  social: { twitter: "taraborr" },
}
```

Update this for changes to the site-wide title, description, or social links.

## Gatsby Plugins Configured

- `gatsby-plugin-postcss` — enables Tailwind via PostCSS
- `gatsby-plugin-image` + `gatsby-plugin-sharp` + `gatsby-transformer-sharp` — image optimisation
- `gatsby-source-filesystem` — sources `content/blog/` and `src/images/`
- `gatsby-transformer-remark` — converts Markdown to HTML with:
  - `gatsby-remark-images` (max width 1000px)
  - `gatsby-remark-prismjs` (syntax highlighting)
  - `gatsby-remark-embed-gist` (embed GitHub Gists)
  - `gatsby-remark-classes` (adds `list-disc` to `<ul>`)
  - `gatsby-remark-responsive-iframe`, `gatsby-remark-copy-linked-files`, `gatsby-remark-smartypants`
- `gatsby-plugin-feed` — generates `/rss.xml`
- `gatsby-plugin-manifest` — PWA manifest, icon is `src/images/tea-icon.png`

## Key Notes for AI Assistants

- This is a **Gatsby** project, not Next.js. There is no `app/` directory, no server components, no API routes.
- All data fetching happens at **build time** via GraphQL. There is no runtime data fetching in page components.
- The `back/` directory is separate backend code and is not part of the Gatsby build.
- No TypeScript is used in practice (one legacy file exists). Stick to `.js`/`.jsx`.
- There are no tests. `npm test` will always fail by design.
- Prettier is configured — run `npm run format` before committing.
- After making changes to pages or components, restart `gatsby develop` or clear cache with `gatsby clean` if hot-reload doesn't pick up changes.
- Blog post tags must be comma-separated with **no spaces** around commas (e.g. `tag: AI,Engineering` not `tag: AI, Engineering`).
