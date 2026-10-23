# Evidence to Decision | Haitao Pan

A minimal, private-development Astro personal blog for scientific essays.

## Site design
- The homepage lists blog posts in reverse chronological order, with each article's title and short summary.
- The right sidebar groups posts by six concise topics; narrow screens move the sidebar below the posts.
- Navigation contains only **Home**, **Archive**, and **About**.
- Essays are written as Markdown/MDX in `src/content/essays/`.
- **All five sample post files are `draft: true`**, excluded from production builds, RSS, and published article pages. In **local development only**, their titles and summaries appear as non-clickable, labeled draft previews.
- No publication or DNS configuration has been activated.

## Local preview
Requires Node.js 22+. Run:

```bash
npm install
npm run dev
```

To verify production-safe output: `npm run build`, then `npm run preview`.

## Publication process (not active)
1. Keep `haitaopan/evidence-to-decision` **private** until the owner explicitly approves publication.
2. Draft new essays on an `essay/` branch with `templates/essay-template.md`.
3. Review sources, links, and `PUBLICATION_SAFETY.md` before changing `draft: true` to `draft: false`.
4. Review and merge PRs after approval; `main` contains production-suitable source only.
5. After **separate deployment approval**, enable `.github/workflows/deploy.yml.disabled` and configure GitHub Pages and correct site/base.
6. After separate approval, verify and connect the purchased `evidencetodecision.org` domain per current GitHub HTTPS/DNS instructions.

**Important:** `draft: true` is not secrecy; if the repository becomes public, its history becomes public. Never commit confidential trial information.

See `EDITORIAL_GUIDE.md` and `PUBLICATION_SAFETY.md`.
