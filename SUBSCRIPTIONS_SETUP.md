# Email subscriptions — setup and release gate

## Current status (2026-10-25)
The RSS feed is live and its title includes **Haitao Pan, PhD**. The publisher supplied the official follow.it HTML form generated in the follow.it dashboard. Its public HTTPS subscription-form POST action is now installed as a native-styled HTML form at `/subscribe/`, so readers can enter an email address without third-party scripts. **Sign-up and confirmation verified 2026-10-25:** the site owner submitted a test email, received an official follow.it confirmation message naming `Evidence to Decision | Haitao Pan, PhD`, clicked to confirm and reported the flow working. No automatic new-post email has yet been observed; check the next *genuinely new* published essay and its unsubscribe link before marking the entire delivery loop verified.

## Historical account-side setup — already completed

The site owner has already used Sign in with Google on follow.it, but we have not verified an actual publisher feed under that account. There is no direct follow.it account connector available to this workflow.

1. Open https://follow.it/publisher/create and sign in as the existing publisher.
2. Select **From my website or RSS feed (automatically)**.
3. Enter **https://evidencetodecision.org/rss.xml** (not another feed with a similar name).
4. Follow the setup wizard, keeping the **Basic (free)** plan, with **Evidence to Decision | Haitao Pan, PhD** as the publisher label if editable.
5. If the service asks to **claim / verify ownership**, provide its exact non-secret website verification snippet or HTML-file contents so the blog repository can be updated, then complete the claim process. Never provide passwords or OAuth tokens.
6. Copy the actual subscribe-page URL or official form embed snippet from follow.it. Do **not** guess a slug.
7. Configure the link in the GitHub Pages site, and independently test a real opt-in and unsubscribe.

Important: The free follow.it Basic tier may show follow.it branding or promotions in delivered mail; an ad-free whitelabel email plan is a paid feature. There is no new advertising component on the Evidence to Decision webpages. Review this tradeoff before presenting the mail to readers as fully ad-free.

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

## Integration record

- Source: official HTML form copied by the publisher from follow.it's `Define the follow form's design` page.
- Code location: `src/pages/subscribe/index.astro`; its `followItFormAction` is a public subscription-form POST endpoint provided by follow.it, **not a private password**.
- Input field: `email` with `type=email` and `required`.
- The post endpoint and follow.it handle the subscription process; GitHub Pages does not collect or retain email addresses.
- No remote CSS, script, analytics pixel, or follow.it page embed is needed to render the input.
- The email sender and feed association are controlled by follow.it. If the provider regenerates the form, update `followItFormAction` with a newly verified value.
- Basic follow.it messages may include branding or other material; no claim of advertisement-free email is made.
- **Test case 1**: open `https://evidencetodecision.org/subscribe/`, enter a controlled test email, click Subscribe, and verify which follow.it feed is offered and any confirmation email.
- **Test case 2**: verify unsubscribe works via follow.it.
- **Test case 3**: on the next *new* published article, check RSS includes it and the subscriber receives the expected notification. Do not publish a fake article just to test without editorial approval.

## Actual subscriber acceptance
- 2026-10-25: the publisher-provided follow.it form is embedded on `/subscribe/`.
- 2026-10-25: owner received a confirmation mail from follow.it for the correctly named feed and confirmed subscription activation.
- Remaining operational check: the next newly published essay is included in RSS and triggers follow.it email to the consenting test subscriber. Verify delivery and unsubscribe without publishing a dummy essay.
