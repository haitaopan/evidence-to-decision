# Bilingual publication rules

Evidence to Decision is one blog with English and Chinese article editions.

- Add `lang: en` for English or `lang: zh` for Chinese in frontmatter. Neither language is mandatory.
- Pair translations of the **same essay** with a shared `translationKey`. An essay can remain monolingual indefinitely.
- Original filenames and URLs never change when adding a translation.
- A newly published edition can appear later, with its own date, summary and text.
- The All feed groups real translations into one entry; the English and 中文 views show only their language.
- A translation link is displayed only if its edition exists and is published.
- Do not automatically translate or overwrite original essays.
- Existing translationKey pairs: `if-ai-can-do-the-analysis`, `missing-data-where-to-begin`, `one-outcome-three-questions`, `when-has-a-clinical-trial-collected-enough-evidence`.
- The existing `/rss.xml` feed and follow.it signup endpoint remain unchanged. The all-language feed may send distinct email alerts for editions published separately; do not claim otherwise before any mailing policy is tested.
- Original comment threads and GA4 article counts remain at each unchanged article URL.
