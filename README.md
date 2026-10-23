# Evidence to Decision | Haitao Pan

A minimal, private-development Astro personal blog for scientific essays.

## Site design
- The homepage lists blog posts in reverse chronological order, with each article's publication date, title, and short summary.
- The right sidebar groups posts by six topics; mobile layouts move topics below the posts.
- Navigation contains only **Home**, **Archive**, and **About**.
- Content is stored in Markdown/MDX files under `src/content/essays/`.
- **No posts have been written or published yet.** The site intentionally contains no sample articles or draft previews. The `templates/essay-template.md` file is an unpublished authoring template, not blog content.
- Publication and DNS configuration remain disabled.

## Local preview
Requires Node.js 22+. Run:

```bash
npm install
npm run dev
```

For a production build: `npm run build`, then `npm run preview`.

## Publication process (not active)
1. Keep `haitaopan/evidence-to-decision` **private** until explicit approval to publish.
2. Draft new essays on an `essay/` branch using `templates/essay-template.md`.
3. Review sources, links, and `PUBLICATION_SAFETY.md` before changing `draft: true` to `draft: false`.
4. Review and merge PRs after approval. `main` must contain only public-safe source.
5. After **separate deployment approval**, enable `.github/workflows/deploy.yml.disabled` and configure GitHub Pages plus the right site/base.
6. After separate approval, verify and connect the purchased `evidencetodecision.org` domain per current GitHub HTTPS/DNS instructions.

**Important:** `draft: true` is not a privacy boundary; if the repository becomes public, its entire Git history is exposed. Never commit confidential trial information.

See `EDITORIAL_GUIDE.md` and `PUBLICATION_SAFETY.md`.
