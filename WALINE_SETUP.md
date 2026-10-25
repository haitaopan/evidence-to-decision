# Evidence to Decision — Free Waline guest comments

**Status:** Astro integration added; intentionally **not live** until Vercel/Neon, administrator moderation, and email notifications have been configured and tested.

## Why Waline
- Free open-source comments, without Disqus advertisements.
- Visitors comment without login: `login: 'disable'`.
- Require nickname only: `requiredMeta: ['nick']`; email is optional: `meta: ['nick','mail']`.
- A visitor's email does not appear in the public thread; moderators and mail service may use the address provided.
- Separate permanent discussion for each article: `/essays/<slug>/`.
- Owner approves every message: server environment `COMMENT_AUDIT=true`.
- Enable admin and reply email notifications with SMTP; never paste SMTP credentials into GitHub source or ChatGPT.
- No need to alter Evidence to Decision's existing GitHub Pages deployment, analytics, RSS, article publication dates, or bylines.

## Owner setup, one screen at a time

### Step 1 — Vercel
Open https://waline.js.org/en/guide/get-started/ and select **Deploy with Vercel**. Sign in to Vercel using the same GitHub account if preferred. Select a personal **Hobby** project, named `e2d-comments` (choose an available project name); avoid any upsell or trial requiring payment. Vercel Hobby is limited to non-commercial personal projects. If/when the blog becomes a commercial consulting website, reassess licensing and hosting or upgrade.

### Step 2 — Neon database
In Vercel → project `e2d-comments` → **Storage**, choose **Create Database** → **Neon**, choose an eligible Free plan, and connect the resulting database to the Vercel project. In Neon → **SQL Editor**, initialize the Waline schema described in https://waline.js.org/en/guide/deploy/vercel.html. Redeploy from Vercel. Database connection information must remain in Vercel's encrypted environment variables; never add it to the public GitHub repository.

### Step 3 — Admin and safety
Open `https://YOUR-WALINE-SERVER.vercel.app/ui/register` and create the **first account** yourself to become administrator; use a strong unique password. Afterward disable public account registration in Waline's server settings if appropriate. Set these **server-side environment variables in Vercel**:

| Variable | Value |
| --- | --- |
| `COMMENT_AUDIT` | `true` — every comment requires owner approval |
| `SECURE_DOMAINS` | `evidencetodecision.org,www.evidencetodecision.org,YOUR-WALINE-SERVER.vercel.app` |
| `SITE_NAME` | `Evidence to Decision` |
| `SITE_URL` | `https://evidencetodecision.org` |
| `DISABLE_REGION` | `true` — optional privacy improvement |
| `DISABLE_USERAGENT` | `true` — optional privacy improvement |

Review Waline documentation for exact variable values and any deployment-specific settings. **Test** that a guest comment appears in Pending and is not public until approved.

### Step 4 — Owner email alerts
Configure Waline's documented SMTP notification environment variables inside Vercel: `SMTP_SERVICE` or `SMTP_HOST` / `SMTP_PORT`, plus `SMTP_USER`, `SMTP_PASS`, and `AUTHOR_EMAIL`. Where supported, use a separate app password or transactional sender credential, **not the primary Google account password**. Test that a guest comment sends a moderator email and replying can send a notification when the guest supplied an email. See https://waline.js.org/en/guide/features/notification.html.

### Step 5 — Activate public widget
Once the moderation and email checks pass, go to GitHub repository **Settings → Secrets and variables → Actions → Variables**. Create `WALINE_SERVER_URL` with the verified public HTTPS URL of the Waline server (for example, `https://e2d-comments.vercel.app`). **Only a public URL belongs in this nonsecret variable**. Trigger a GitHub Pages workflow from **Actions → Deploy to GitHub Pages → Run workflow**, then visit `https://evidencetodecision.org/essays/when-not-yet-becomes-no/` and verify the guest form.

The site's static Astro comments component is at `src/components/EssayComments.astro`. If the public backend URL is unset or invalid, **no Waline requests or comment widget** appear on the live site.

### Verification
1. Guest can submit with a name and no email, without login.
2. Message stays pending until administrator approves it.
3. Moderator receives a notice via email.
4. Approving makes it publicly visible on only that essay.
5. Administrator can reply; supplied guest email, if any, remains private.
6. A separate essay has a separate thread.
7. No advertisements or unexpected third-party widgets appear.
8. Articles, analytics, readability and mobile layouts remain intact.

References: https://waline.js.org/en/guide/get-started/ · https://waline.js.org/en/reference/client/props.html · https://waline.js.org/en/reference/server/env.html · https://waline.js.org/en/guide/features/notification.html.
