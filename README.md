# Evidence to Decision | Haitao Pan, PhD

A minimal Astro blog for scientific essays and reflections on evidence and clinical decisions.

## Site design
- The homepage lists posts in reverse chronological order, with a full publication date, title, and summary.
- The right sidebar groups posts by six topics; mobile layouts move topics below the posts.
- Navigation contains **Home**, **Archive**, **About**, and a minimal **Subscribe** link.
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

## Subscriptions and institutional profile

- RSS remains public at `/rss.xml`, generated from published essays only.
- The `/subscribe/` page links to RSS now. Until follow.it is configured, the email section clearly says it is not available and **collects no email addresses**.
- To activate the email link, follow the verified setup steps in `SUBSCRIPTIONS_SETUP.md`. Configure the public GitHub Actions variable `FOLLOWIT_SUBSCRIBE_URL` with the real follow.it subscribe URL after testing and consent/unsubscribe review.
- The About page and footer link to the publicly accessible [St. Jude Pan Group page](https://www.stjude.org/research/labs/pan-lab.html) for institutional context, without placing an institutional affiliation in the article byline or implying that this is an official St. Jude site.

## Readership analytics (Google Analytics 4)
- Measurement ID: `G-ZS9BVFX6K5` (public website identifier, not an account password).
- The shared site layout includes `src/components/AnalyticsConsent.astro`; the Google tag is added only after the visitor opts in to optional analytics. Rejection or lack of consent does not load the Google tag.
- Consent preferences are stored locally in the visitor's browser. Readers can change their choice via **Cookie settings** or **Privacy** in the footer.
- Page views are recorded by Google Analytics automatically for each page of the static Astro site after consent, including every published essay, the home page, and archive. Approximate country, region, and city summaries are available through GA4 reports.
- Site owner can verify collection at https://analytics.google.com/ in **Reports → Realtime**, by opening the blog, selecting **Allow analytics**, and visiting an essay. Some browsers block analytics; GA may take time to surface data.
- For trust and privacy, the implementation disables Google advertising signals. Do not claim that GA4 uniquely identifies every reader or reconstructs historical visits before the tag was installed.
