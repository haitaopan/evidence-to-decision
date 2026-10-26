# Public Global Readership dashboard

**LIVE — verified 2026-10-25.** The public world map, per-article views, and global metrics are deployed. The read-only GA4 Data API has returned a real aggregate through 2026-10-24: **17 measured page views, 1 tracked user, and 17 views from the United States**. Each of the three published essays had one measured view at that cut-off. A successful 2026-10-25 rerun also confirmed `totalUsers: 1`. The site continues to show its last verified data with an explicit through-date between daily refreshes. Never insert demonstration counts as real data.

- Homepage: the Global Readership section displays totals and a world map. Link to `/readership/`.
- Article pages: byline shows measured cumulative views; the homepage article listing shows views per post.
- Dedicated `/readership/` page: larger map, totals, country-level table, and most-read essays.
- No raw visitor-level events, identities, emails, IPs, cities, or exact visitor locations are published.
- Small map dots are **symbolic country-level markers**, computed from map country outlines, **not actual visitor coordinates**.
- Data comes from Google Analytics 4 and counts **only visitors who consented to analytics**; “Views” means page views, not unique people. The headline user count now uses GA4 **`totalUsers`** (the distinct tracked GA4 users during the full reporting interval), keeping `activeUsers` as a secondary metric. Neither can verify unique human identities; tracking blockers can lead to undercounting.
- Reporting period begins 2026-10-24; the script includes **today** on the initial launch date, then requests data through **yesterday** (Chicago property timezone).
- Automatic snapshot sync runs daily at 11:17 UTC, and can be manually triggered. GitHub Actions commits `src/data/readership.json` and deploys the site; the website itself makes no secret-bearing GA4 API calls.
- Read-only access; existing blog analytics consent settings remain unchanged.
- Attribution for world shapes: VectorAtlas / Natural Earth, CC BY 4.0: https://vectoratlas.menelabs.com/.

## One-time owner setup (do not share secrets in a chat or public repo)

The GitHub Actions secret and property ID are now configured. The workflow checks the secret on each run; if removed or invalid, the refresh fails safely without exposing credentials. **No further account setup is required.** The steps below document the configuration already completed.

**Step 1: GA4 Property ID — DONE.** The publicly shareable numeric Property ID is already configured in the scheduled workflow as `560666026`. The site's tag ID is separately `G-ZS9BVFX6K5`. You do not need to create a GitHub variable for this number.

**Step 2: Google Cloud service account — DONE.** At https://console.cloud.google.com/ select or create a small project and enable the **Google Analytics Data API**. Go to IAM & Admin → Service Accounts → Create Service Account (e.g. `e2d-readership`). Under its Keys, generate a JSON key. Download it securely and do **not** email, paste into chat, or commit it to GitHub.

**Step 3: GA4 Viewer access — DONE.** Copy the service account's email (usually ending in `.iam.gserviceaccount.com`). In Google Analytics → Admin → Property access management → Add users, enter this service account email with **Viewer**, property-level only. Do not grant Editor or Administrator privileges.

**Step 4: GitHub encrypted credentials — DONE.** Go to repository Settings → Secrets and variables → Actions:
- Under **Secrets** create `GA4_SERVICE_ACCOUNT_JSON` containing the entire JSON service account key as a **repository secret**, never in variables or source code. The property ID `560666026` is already configured in the workflow, so no separate GA4 property variable is required.

**Step 5: Run/read the verified data sync — DONE.** This workflow also runs automatically when its sync script or workflow definition changes. To rerun manually later: GitHub Actions → **Sync Public Readership** → Run workflow → main. Confirm workflow status Success and visit https://evidencetodecision.org/readership/.

If the action fails, check the message for a missing property ID, Data API not enabled, or the service account lacking Viewer access. Do not share workflow logs that accidentally contain secrets. Once configured, updates run automatically every day and new essay URLs are picked up without any new analytics setup.

**Note:** The first public snapshot may take 24–48 hours to show processed views even if Realtime is already reporting users. A scheduled sync deliberately preserves a previous verified snapshot if the Data API returns no activity, and does not publish a misleading zero. When processed data appears, the first public snapshot may contain only a handful of views because the blog and analytics property are new and visitor consent is optional. After initial setup, counts appear automatically; future runs rebuild the site with current cumulative data. Data might differ from GA4 live reports because the API uses processed full days and may apply privacy thresholds.

## Verification (2026-10-25)
- The real, read-only GA4 snapshot for 2026-10-24 is available: **17 measured page views**, **1 active user**, **US 17 measured views**; each of the three published essays has one measured page view.
- The public world map, homepage summary, per-essay view count and country totals already bind to this snapshot at static build time.
- The automated workflow refreshes at `11:17 UTC` daily and can be manually triggered from GitHub Actions. Until the next successful sync, the website continues to show the last verified snapshot with its historical through-date.
- The pipeline now requests `totalUsers` as the long-window tracked-user measure rather than assuming active users equals cumulative visitors, and avoids falsely showing 0 for newly published essays when GA4 hasn't reported any data yet.
- GitHub Pages builds and automated workflow runs have been successful; the live custom-domain HTML couldn't be fetched using our external preview tool, so a manual browser visual check on the publicly deployed domain is still desirable.
