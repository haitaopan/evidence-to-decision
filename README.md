# Evidence to Decision | Haitao Pan
A private-development Astro website for long-form, public-safe scientific essays.

## Status
**Design/prototype only. Not published.** No custom domain or DNS changes have been made. All five seed essay files are marked `draft: true`; the homepage displays *editorial preview cards*, clearly marked drafts, not links to public essays.

## Local preview
Requires Node.js 22+:

```bash
npm install
npm run dev
```
Open the localhost URL shown by Astro. `npm run build` builds a static site; `npm run preview` shows the built result. The initial CI uses `npm install` because the starter has no lockfile yet. After the first successful install, commit `package-lock.json` and switch CI to `npm ci` for reproducible builds.

## Publishing procedure (not active yet)
1. Keep the existing GitHub repo `haitaopan/evidence-to-decision` **private** during development.
2. Upload source (not secrets); develop and review on a `feature/` or `essay/` branch.
3. Only publish safe, reviewed material. Do not place confidential material even in private repo history.
4. Review PR and merge into `main` when ready. A draft is excluded from the generated site if `draft: true`, but not secret once the repo is public.
5. **Only after explicit owner approval:** enable `.github/workflows/deploy.yml.disabled` as `deploy.yml`, configure GitHub Pages to GitHub Actions, and update Astro site/base settings for deployment.
6. **Only after explicit owner approval:** connect `evidencetodecision.org` by following current GitHub domain verification, DNS, and HTTPS guidance. With the custom domain use `PUBLIC_SITE_URL=https://evidencetodecision.org` and `PUBLIC_BASE_PATH=` during build.

## Editorial guide
See `EDITORIAL_GUIDE.md` and `PUBLICATION_SAFETY.md`.

## Safety of the initial GitHub upload
- CI only **builds**; it does not publish or deploy.
- `.github/workflows/deploy.yml.disabled` is an inert reference, not an active workflow.
- All seed essays use `draft: true`, and contain **no trial-specific data**.
- The domain `evidencetodecision.org` is not yet connected; Porkbun DNS should stay unchanged.
- Do not turn on GitHub Pages or change repository visibility without express owner approval.
