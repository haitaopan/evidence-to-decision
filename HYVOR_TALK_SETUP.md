# Hyvor Talk setup for Evidence to Decision

The blog's essay template includes the Hyvor Talk comments integration, but **it remains hidden until a Hyvor Website ID is configured**. This is deliberate: readers must not see a broken or unmoderated comment form.

## Account and cost

1. Create an account at https://hyvor.com/signup (one account for the blog owner).
2. Start Hyvor Talk's **14-day free trial** (no card required).
3. The Personal plan is listed at **€5/month equivalent, €50 billed annually**, for one website, one moderator, and 2,500 monthly credits (prices and terms may change). There is no perpetual free plan. Check https://talk.hyvor.com/pricing before paying.
4. Add the website **Evidence to Decision**, domain `evidencetodecision.org`.

## Required owner-only Console settings BEFORE activating the embed

1. In Console → Settings → Website, find the **Website ID**. The Website ID is public and safe to place in a GitHub Actions variable. **Do not share passwords, session cookies, or API keys.**
2. Check Website → Allowed Domains; add `evidencetodecision.org` and `www.evidencetodecision.org` if asked. (The main address is `https://evidencetodecision.org`.)
3. Leave **Guest commenting enabled**, so visitors can comment without creating an account. Hyvor's guest form requires a **name**, and accepts an **optional email**. Email is not public, but moderators can see an email submitted by a guest.
4. Enable **site-wide pre-moderation** under Console → Settings → Embed → Configuration. The goal is to hold all newly submitted comments in **Pending** until approved. Do this before making the widget visible. You can review them from Console → Comments.
5. Set up/check moderator **email notifications** for new or pending comments in the Hyvor Console's notification or moderation preferences. Hyvor documents moderator email alerts; settings labels may vary. Confirm by submitting one clearly labeled test comment and verifying an email arrives. Review spam/junk if necessary.
6. Optionally configure the visible moderator badge/alias as **Haitao Pan, PhD** in moderator settings.
7. When ready, open GitHub repository `haitaopan/evidence-to-decision` → Settings → Secrets and variables → Actions → **Variables** → **New repository variable**:
   - Name: `HYVOR_TALK_WEBSITE_ID`
   - Value: your numeric Hyvor Website ID (without quotes)
8. Go to Actions → **Deploy to GitHub Pages** → Run workflow on `main` (or push a new commit). This lets Astro read `PUBLIC_HYVOR_TALK_WEBSITE_ID` when it builds the static pages.
9. Verify the comment form at `https://evidencetodecision.org/essays/when-not-yet-becomes-no/` and at any new essay. Publish a clearly labeled test comment to confirm it stays **Pending** until you approve it, email alerts work, and your author reply appears.

## Technical notes

- `src/components/EssayComments.astro` owns the integration and is automatically included after the article's existing attribution statement on **every** published essay page. No comment section appears on the homepage, archive, or topic pages.
- Each article uses `essay:<entry.id>` as a **stable Hyvor page ID**, independent of domain or title changes.
- `page-url` and `page-title` identify each essay in moderation emails and the Console.
- `loading="lazy"` defers comment loading until the section enters the viewport, helping conserve the credits in the Personal plan.
- No private Hyvor API key is needed or stored in the repository.
- If the variable is unset, the comment form and third-party script will not be emitted into the site, so the existing blog remains unaffected.
- **Privacy**: visitor emails are not shown publicly, but guest emails provided are visible to site moderators. Do not describe guest comments as anonymous to the owner. Hyvor Talk is a third party; its own privacy policy applies.
- **Safety**: do not post patient-identifiable, confidential trial, unpublished results, internal study documents, or DSMB information in public comments.

Documentation:
- https://hyvor.com/talk/docs/commenting
- https://hyvor.com/talk/docs/comments
- https://hyvor.com/talk/docs/moderation
- https://hyvor.com/talk/docs/notifications
