# Evidence to Decision | Haitao Pan, PhD

A minimal Astro blog for scientific essays and reflections on evidence and clinical decisions.

## Site design
- The homepage lists posts in reverse chronological order, with a full publication date, title, and summary.
- The right sidebar groups posts by six topics; mobile layouts move topics below the posts.
- Navigation contains only **Home**, **Archive**, and **About**.
- Content is in Markdown/MDX under `src/content/essays/`. The essay layout supplies a full publication date, author byline `Haitao Pan, PhD`, and a clear source/attribution notice.
- Posts are published by setting `draft: false` in their frontmatter after a confidentiality review.
- All posts are the author's personal views; no institution is listed in the byline.

## Local preview
Requires Node.js 22+:

```bash
npm install
npm run dev
```

For production: `npm run build` and `npm run preview`.

## Deployment
The `.github/workflows/deploy.yml` workflow is prepared for GitHub Pages on pushes to `main`. To make the site publicly visible:
1. Set repository visibility to **Public** (if required by the account's GitHub Pages plan) and choose **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Verify the deployment at `https://haitaopan.github.io/evidence-to-decision/`.
3. To use `evidencetodecision.org`, configure the GitHub Pages custom domain and DNS. Then change build `PUBLIC_SITE_URL` to `https://evidencetodecision.org` and `PUBLIC_BASE_PATH` to an empty string (both can be supplied as workflow env vars), and set up HTTPS.
4. Do not announce the domain as live until it has been verified from outside GitHub.

**Copyright/attribution:** Please credit Haitao Pan, PhD and link to the original article on *Evidence to Decision* when quoting, sharing, or republishing.

See `EDITORIAL_GUIDE.md` and `PUBLICATION_SAFETY.md` before posting. No patient-level, confidential study, DSMB, internal protocol, or collaborator information may be committed, whether or not the repository is private.

## Comments (Hyvor Talk)

Hyvor Talk is integrated below every essay and loads only when the public `HYVOR_TALK_WEBSITE_ID` GitHub Actions variable is set. Guests may comment with a required name and optional email (not shown publicly, but visible to moderators). Configure site-wide pre-moderation and moderator email notifications **before** enabling comments. See [HYVOR_TALK_SETUP.md](HYVOR_TALK_SETUP.md) for signup, pricing, setup, and verification.
