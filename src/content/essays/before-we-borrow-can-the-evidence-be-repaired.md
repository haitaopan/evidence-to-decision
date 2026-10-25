---
title: 'Before We Borrow: Can the Evidence Be Repaired?'
description: 'Why deciding whether external evidence is usable must come before deciding how much to borrow.'
pubDate: 2026-10-24
topics:
  - Clinical Trials
  - External Controls
  - Evidence & Decisions
  - Oncology & Rare Diseases
draft: false
featured: false
---

Suppose a historical neuroblastoma study reports a response rate of 50%, while the control group in a current clinical trial has a response rate of 36%.

Should we borrow information from the historical study?

A natural statistical response is to examine how well the two sources agree, then use a dynamic borrowing model to decide how much weight the historical data should receive.

But there is a more fundamental question:

**Are the two studies measuring the same thing?**

What if the historical study reports the best response observed through four treatment cycles, while the current trial evaluates response at the end of Cycle 2?

The two response rates may look comparable, but they represent different outcomes. A statistical model that sees only 50% and 36% cannot determine whether that difference reflects a genuine difference between patients, random variation, or simply different assessment windows.

And borrowing less from an incorrectly defined endpoint does not make that endpoint correct.

This is the problem that motivated my recent paper, *Qualify-Then-Borrow: A Five-Step Framework for Bayesian Borrowing Beyond Outcome Agreement*.

The central idea is straightforward: before deciding how much external evidence to borrow, we need to decide whether that evidence is appropriate for the target question, whether identified differences can be repaired, and when borrowing should not proceed.

## When Evidence Can Be Repaired

Return to the neuroblastoma example.

Suppose the historical study retains the original imaging dates, disease measurements, and response information. Although its published response rate covers four cycles, we can go back to the patient-level records and reconstruct the Cycle-2 response endpoint used by the current trial.

In a hypothetical example developed in the paper, this reconstruction changes the historical response rate from 50% to 31%.

Now the relevant comparison is 31% versus 36%, rather than 50% versus 36%.

The repair was not performed to make the response rates look more similar. It was performed because the clinical question specified a Cycle-2 endpoint, and the historical data contained the information needed to reconstruct that endpoint.

Only after this reconstruction should a dynamic borrowing method evaluate the remaining disagreement.

Interestingly, repair can sometimes lead to **more borrowing, not less**, because the correctly reconstructed evidence may be more compatible with the current trial.

This distinction matters. Repair is about making the evidence appropriate for the question. Borrowing strength is determined afterward.

## When the Patients Are Different

Consider another hypothetical neuroblastoma example.

A historical study contains 70% patients with refractory disease and 30% with relapsed disease. The current trial targets a population with the opposite mix: 40% refractory and 60% relapsed.

The historical overall response rate is 27.5%, compared with 36% in the current controls.

Should we immediately conclude that the historical data are incompatible?

Not necessarily.

If the target clinical question includes both populations, refractory or relapsed status is measured reliably, and there is adequate information in both groups, we may be able to account for the different patient composition.

In the paper's illustrative example, standardizing the historical response information to the current trial's patient mix changes the historical response rate from 27.5% to approximately 34.8%.

The historical patients have not changed. The clinical question has not changed. What has changed is how the historical evidence is represented for that question.

This is a different task from simply reducing the influence of historical data because the marginal response rates disagree.

It also demonstrates why access to relevant patient-level information matters. If the important prognostic factors were never recorded, or the historical data provide inadequate support for parts of the target population, the same repair may not be defensible.

## When Repair Is Impossible

Some differences cannot be repaired with the data available.

Imagine a cellular therapy trial that begins following patients at enrollment or leukapheresis.

The trial captures patients who never reach infusion because of disease progression, manufacturing failure, or other events during the intervening period.

Now imagine an external registry that contains only patients who actually received an infusion and begins follow-up on the infusion date.

These are not necessarily the same populations or the same time origin.

If the registry retains the earlier treatment history and patients who never received infusion, we may be able to reconstruct the relevant population and follow-up.

But what if those patients were never included in the database?

We cannot recover their outcomes by changing a Bayesian prior. We cannot repair the missing risk set by showing that post-infusion survival curves look similar.

For an analysis whose target begins at enrollment, the external source may simply be unsuitable for primary borrowing.

That does not mean the database has no scientific value. It may still describe outcomes among infused patients or provide clinical context. But those are different uses of the evidence.

**Not every useful dataset is suitable for every clinical question.**

## Why Outcome Agreement Is Not Enough

This problem goes beyond any single clinical example.

Two external datasets can produce identical observed response-rate distributions while having very different scientific meanings.

One may measure the intended endpoint correctly. Another may have a known endpoint-recording error that cannot be reconstructed from the available data.

A borrowing model driven only by the observed response counts sees the same statistical information in both cases.

But the appropriate decision about whether those datasets should enter the analysis may be entirely different.

Our simulations show why this matters. When external data with a known, unrepairable endpoint problem were borrowed, dynamic downweighting reduced the resulting distortion but did not eliminate it. In one simulated setting, the nominal 95% credible intervals covered the true treatment effect only 91.8% of the time, with a remaining treatment-effect bias of −4.8 percentage points.

Reducing the influence of problematic evidence is not the same as determining that the evidence is appropriate to use.

There is an equally important qualification: passing a source assessment does not establish that external and current data are fully exchangeable. Unmeasured differences and residual bias may remain, and dynamic borrowing itself is not a guarantee against them.

We need both scientific assessment and statistical safeguards.

## A Different Sequence of Decisions

The Qualify-Then-Borrow framework organizes this process into five steps: define the clinical target, assess the external evidence, classify it, take the appropriate action, and then apply dynamic borrowing to the information that remains.

The practical distinction is between three possible actions:

- **Use:** No identified material problem requires modification before borrowing.
- **Repair:** A meaningful difference can be addressed using available information and a scientifically justified procedure.
- **Refuse:** An important difference cannot be adequately addressed, so the external evidence should not enter the primary borrowing analysis for that target.

These are not three arbitrary discount levels. They are different decisions about what evidence is allowed to contribute to an analysis and in what form.

Existing external-control frameworks have long recognized the importance of source assessment, endpoint alignment, and potential bias. QTB brings these considerations into an explicit decision sequence and links each assessment to what happens before the borrowing model is applied.

The downstream Bayesian model need not be new. What changes is the question we ask before using it.

## The Question Worth Asking First

External information is especially valuable in rare diseases, pediatric oncology, and other settings where large randomized trials may be difficult.

We should make the best possible use of that information.

But making better use of evidence does not always mean borrowing more. Sometimes it means reconstructing an endpoint, adjusting the population, or changing the comparison so that the evidence addresses the intended question.

And sometimes it means recognizing that an important piece of information cannot be recovered.

The goal is neither to maximize borrowing nor to avoid it. The goal is to use external evidence in a way that supports the clinical decision we actually need to make.

**Before asking how much to borrow, ask what the evidence means, whether it can be repaired, and whether it belongs in the analysis at all.**

---

### Related Research

Pan H. *Qualify-Then-Borrow: A Five-Step Framework for Bayesian Borrowing Beyond Outcome Agreement.* arXiv:2609.19382.

[Read the full paper](https://arxiv.org/abs/2609.19382)

*The numerical clinical examples above are hypothetical illustrations developed in the paper, not analyses of actual NANT or INRG patient-level data.*
