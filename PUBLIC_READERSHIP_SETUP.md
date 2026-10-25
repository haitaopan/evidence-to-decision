# Public Global Readership dashboard

The public global-readership feature is **implemented but intentionally shows “—” until real, verified GA4 aggregates are configured.** Never insert demo counters into the public website.

- Homepage: the Global Readership section displays totals and a world map. Link to `/readership/`.
- Article pages: byline shows measured cumulative views; the homepage article listing shows views per post.
- Dedicated `/readership/` page: larger map, totals, country-level table, and most-read essays.
- No raw visitor-level events, identities, emails, IPs, cities, or exact visitor locations are published.
- Small map dots are **symbolic country-level markers**, computed from map country outlines, **not actual visitor coordinates**.
- Data comes from Google Analytics 4 and counts **only visitors who consented to analytics**; displayed “Views” means page views, not unique people. GA4 `activeUsers` reflects estimated active users, not a perfect headcount.
- Reporting period begins 2026-10-24; the script requests data through **yesterday** (Chicago property timezone).
- Automatic snapshot sync runs daily at 11:17 UTC, and can be manually triggered. GitHub Actions commits `src/data/readership.json` and deploys the site; the website itself makes no secret-bearing GA4 API calls.
- Read-only access; existing blog analytics consent settings remain unchanged.
- Attribution for world shapes: VectorAtlas / Natural Earth, CC BY 4.0: https://vectoratlas.menelabs.com/.

## One-time owner setup (do not share secrets in a chat or public repo)

The workflow checks for a configured GitHub Actions secret before attempting any sync. Without it, the public dashboard stays in its safe pending state and the scheduled job skips data retrieval.

**Step 1: GA4 Property ID — DONE.** The publicly shareable numeric Property ID is already configured in the scheduled workflow as `560666026`. The site's tag ID is separately `G-ZS9BVFX6K5`. You do not need to create a GitHub variable for this number.

**Step 2: Create a Google Cloud service account.** At https://console.cloud.google.com/ select or create a small project and enable the **Google Analytics Data API**. Go to IAM & Admin → Service Accounts → Create Service Account (e.g. `e2d-readership`). Under its Keys, generate a JSON key. Download it securely and do **not** email, paste into chat, or commit it to GitHub.

**Step 3: Give it only GA4 Viewer access.** Copy the service account's email (usually ending in `.iam.gserviceaccount.com`). In Google Analytics → Admin → Property access management → Add users, enter this service account email with **Viewer**, property-level only. Do not grant Editor or Administrator privileges.

**Step 4: Save credentials securely in GitHub.** Go to repository Settings → Secrets and variables → Actions:
- Under **Secrets** create `GA4_SERVICE_ACCOUNT_JSON` containing the entire JSON service account key as a **repository secret**, never in variables or source code. The property ID `560666026` is already configured in the workflow, so no separate GA4 property variable is required.

**Step 5: Run the initial data sync.** GitHub Actions → **Sync Public Readership** → Run workflow → main. Confirm workflow status Success and visit https://evidencetodecision.org/readership/.

If the action fails, check the message for a missing property ID, Data API not enabled, or the service account lacking Viewer access. Do not share workflow logs that accidentally contain secrets. Once configured, updates run automatically every day and new essay URLs are picked up without any new analytics setup.

**Note:** The first public snapshot may contain only a handful of views, because the blog and analytics property are new and visitor consent is optional. After initial setup, counts appear automatically; future runs rebuild the site with current cumulative data. Data might differ from GA4 live reports because the API uses processed full days and may apply privacy thresholds.
