# Email subscriptions — setup and release gate

## Current status (2026-10-24)
The site supports RSS at `https://evidencetodecision.org/rss.xml`. The blog also has a `/subscribe/` page. Email signups are **not** active until a publisher-controlled follow.it feed and working subscribe link are verified.

## Recommended lightweight service
follow.it's current basic publisher plan supports RSS-to-email notifications, a free tier, and subscriber-managed notifications. Service features and pricing may change: see https://follow.it/features-and-pricing.

## To activate (requires the account owner's action)
1. Confirm `https://evidencetodecision.org/rss.xml` is publicly reachable on the canonical domain, returns valid RSS, and only contains approved articles.
2. Create or sign into a follow.it publisher account. Claim/add the **correct** RSS feed, not an unrelated feed with a similar name.
3. Complete provider verification and confirm sender/site labeling is clearly **Evidence to Decision | Haitao Pan, PhD**.
4. Review whether initial import would send old posts; choose not to blast subscribers with back-catalog articles unless explicitly approved.
5. Test an opt-in subscription with an address you control; verify confirmation, email delivery, article links, and one-click unsubscribe.
6. Copy the actual official HTTPS follow.it subscription landing-page link; do not invent the link.
7. In the GitHub repository, navigate to **Settings → Secrets and variables → Actions → Variables** and add `FOLLOWIT_SUBSCRIBE_URL` with that verified URL (public link, not a password).
8. Trigger/re-run the existing deployment workflow. Confirm the `/subscribe/` page now shows **Subscribe by email** pointing to the tested provider link.

## Editorial and privacy considerations
- The blog itself does not store subscriber email addresses; follow.it handles signups and delivery under its privacy terms.
- Do not embed a form or collect addresses directly in GitHub Pages unless a working secure backend and consent flow are separately approved.
- Make opt-in and unsubscribe clearly available.
- Check provider branding and unwanted promotions before enabling.
- Do not confuse 'an RSS feed exists' with 'an email subscription service is configured'.

## Institutional link
The site's About page and footer link to https://www.stjude.org/research/labs/pan-lab.html. The disclaimer remains visible and article bylines identify only Haitao Pan, PhD.
