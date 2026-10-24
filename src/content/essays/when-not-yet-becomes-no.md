---
title: 'When “Not Yet” Becomes “No”'
description: 'The hidden time assumption in Phase II futility rules'
pubDate: 2026-10-24
topics:
  - Clinical Trials
  - Evidence & Decisions
  - Oncology & Rare Diseases
draft: false
featured: true
---

At the first planned response assessment in a hypothetical Phase II oncology trial, a patient’s scans show stable disease. The protocol counts only complete or partial responses at that visit, so the patient is recorded as a nonresponder.

The patient continues treatment. Two months later, the tumor has shrunk enough to qualify as a partial response.

Was the early assessment wrong?

Now imagine that the trial uses the number of early responders to decide whether enrollment should stop for futility. By the time the later scan is obtained, the trial may already have concluded that the treatment is not promising enough to pursue.

There is nothing unusual about recording a negative result at a fixed time point. Nor does one late response prove that a treatment works.

The puzzle is subtler: what, exactly, was the stopping rule designed to detect?

**A lack of treatment activity—or a lack of activity by a particular date?**

## The Statistics May Be Exactly Right

Phase II trials often use futility rules to avoid exposing additional patients to treatments unlikely to provide sufficient benefit. Simon's two-stage designs, Bayesian monitoring rules, and related approaches provide formal ways to make these decisions.

These designs can be carefully calibrated, with well-understood probabilities of stopping under different assumed response rates.

But there is a distinction that can get lost in practice.

A stopping rule monitors the endpoint it was given.

If response is defined as complete or partial response at Cycle 2, then the design evaluates activity visible at Cycle 2. A patient who develops a response at Cycle 5 does not change the Cycle 2 result.

This is not a statistical error. The patient was correctly classified according to the protocol.

The difficulty arises when we interpret the result more broadly. A trial that finds insufficient evidence of *early response* may be described as finding insufficient evidence of *treatment activity*.

Those conclusions are not necessarily equivalent.

A mathematically sound stopping boundary cannot, by itself, correct a mismatch between the endpoint's timing and the treatment's expected biology.

## Why Not Simply Wait Longer?

One tempting solution is to extend the response assessment window.

If some therapies take longer to work, why not evaluate response after six cycles instead of two?

There are good reasons to be cautious.

Patients entering early-phase oncology trials may have aggressive disease and limited treatment options. Waiting longer to determine whether a treatment is promising may delay an important decision.

Some patients will progress before the later assessment. Others may die, discontinue treatment because of toxicity, or begin another therapy. Scheduled scans may be missed.

These situations are not interchangeable. Progression or death may reasonably count as treatment failure for a particular endpoint. Starting a different anticancer treatment raises a question about what subsequent tumor shrinkage can tell us. A missing scan creates a different problem: we may simply not know the outcome.

A later assessment also means that more patients may still have pending outcomes when the trial needs to make an interim decision.

So the choice is not between a bad early endpoint and a good late endpoint.

It is a genuine trade-off between **early ascertainment and biological maturity**.

The appropriate assessment time depends on what kind of benefit is clinically meaningful, how quickly that benefit might appear, and what risks patients face while waiting.

## What Are We Actually Screening For?

Before discussing a futility boundary, it helps to ask a simpler question:

What would convince us that this treatment deserves further investigation?

Sometimes the answer is rapid tumor shrinkage. For a patient with symptomatic, rapidly progressing disease, an early response may be particularly important.

For another therapy, the relevant signal might be a response occurring within several months, even if little changes on the first scan.

For still another treatment, the more meaningful outcome may be prolonged disease control rather than substantial shrinkage.

These are different clinical questions.

An early objective response rate, a best overall response rate within a prespecified window, a durable disease control measure, and progression-free survival do not describe the same thing.

Calling all of them simply "efficacy" can obscure the differences.

This is where the idea of an *estimand* becomes useful, even without its formal terminology. We need to specify what outcome matters, for which patients, over what period, and how events that occur before assessment affect the question.

There is another consequence that is easy to overlook.

If the endpoint changes from response at Cycle 2 to response within six cycles, the benchmark response rate may also need to change. A historical response rate measured at an earlier landmark is not automatically a suitable comparison for a longer observation window.

The endpoint, its benchmark, and the decision rule must belong to the same question.

## Four Reasonable Design Choices

There is no single statistical solution to this problem. Several approaches may be reasonable, depending on the clinical setting.

**Keep the early landmark.**

An early response endpoint may be exactly what the trial needs. If rapid activity is clinically important, there is no reason to abandon it merely because later responses are possible.

But we should call it what it is: early response.

Later best overall response, time to response, progression-free survival, and duration of response can provide complementary evidence. A prespecified non-binding futility rule might also permit clinical review when credible delayed activity is emerging, although such flexibility must be evaluated for its effects on trial operating characteristics.

**Define response within a meaningful window.**

Instead of asking whether a patient has responded at a single early visit, we might ask whether a response occurs within the first six cycles.

This is more than moving the assessment date. It changes the meaning of an early nonresponse. A patient with stable disease at Cycle 2 is no longer necessarily a failure; the patient's response status may still be pending.

But giving a treatment more time does not mean counting only patients who remain well enough to complete that time. One patient may respond at Cycle 5. Another may progress at Cycle 3, stop treatment, and start something else. If we look only at those who stay on treatment long enough for a late scan, we risk making the response rate look better than it is.

So a meaningful window needs more than an end date. We must also decide what happens when a patient's course changes before that date—and whether a later response still answers our original clinical question.

**Allow for delayed or pending outcomes.**

When the endpoint takes time to become observable, traditional interim monitoring can become awkward. Some patients have completed the assessment window while others are still being followed.

Methods such as the time-to-event Bayesian optimal Phase II (TOP) design address this problem by using information from patients whose outcomes are not yet mature.

TOP also evaluates the risk of incorrect stopping decisions through simulation. But even a carefully calibrated rule cannot guarantee that an early decision is appropriate in every clinical setting. We still need to ask whether the available information is strong enough to justify the action we are about to take.

Sometimes, when too much remains unknown, the appropriate decision is neither "go" nor "no-go," but **"not yet."**

But an important distinction remains: **managing incomplete follow-up is not the same as redefining treatment success.**

**TOP can help us make decisions before every patient's outcome is known. But it cannot correct an endpoint that asks for an answer too early.**

**Choose a different efficacy variable.**

If the central question is whether treatment produces sustained disease control, a time-to-event outcome may sometimes be more informative than an early binary response.

That choice introduces its own challenges, including longer follow-up, censoring, and the interpretation of subsequent therapies.

The goal is not to make the endpoint more complicated. It is to make it more relevant.

## For Whom, and by When?

There is a broader issue hiding inside this small example.

A binary response endpoint divides patients into responders and nonresponders. That simplicity is useful, especially in small trials.

But it can hide differences in patients' opportunities to meet the definition.

Consider baseline disease measurability. Some patients may have clinically important disease that cannot be evaluated for conventional measurable-tumor response in the same way as other patients. Whether they belong in the primary response population is a design decision, not merely a matter of counting.

Time introduces another form of heterogeneity.

Even among patients with measurable disease, a fixed early assessment may capture the activity of treatments that act quickly more readily than treatments whose effects emerge gradually.

These are not identical problems. One concerns who can satisfy the response definition; the other concerns when the response can be observed.

Yet both point toward the same question:

**What exactly constitutes a responder—for whom, and by when?**

A binary endpoint can be useful without capturing every dimension of clinical benefit. The important thing is to understand what its simplicity leaves out.

## Design the Question Before the Boundary

Futility monitoring is essential in Phase II oncology development. We need ways to recognize insufficient evidence early, protect patients, and use limited research resources responsibly.

But early stopping is not an end in itself. It is a decision made in service of a particular clinical question.

Before selecting a stopping rule, a useful sequence is:

**Treatment mechanism → expected response kinetics → assessment time → intercurrent events → endpoint → benchmark → stopping rule.**

Each step shapes the interpretation of the next.

A rapidly acting cytotoxic therapy and a treatment expected to produce gradual biological changes may require different evidence timelines. Neither should receive an assessment schedule simply because it is conventional.

And when a trial stops for futility, we should be precise about what has been ruled out.

Insufficient early activity? Insufficient activity within a clinically meaningful window? Or insufficient evidence of a particular form of benefit?

Those distinctions can change what a Phase II result means—and what we decide to do next.

**A stopping rule can be statistically correct and still stop the wrong question.**

---

### Further Reading

1. Lin R, Coleman RL, Yuan Y. [TOP: Time-to-Event Bayesian Optimal Phase II Trial Design for Cancer Immunotherapy](https://doi.org/10.1093/jnci/djz049). *Journal of the National Cancer Institute*. 2020;112(1):38–45.
2. Seymour L, et al. [iRECIST: Guidelines for Response Criteria for Use in Trials Testing Immunotherapeutics](https://doi.org/10.1016/S1470-2045(17)30074-8). *The Lancet Oncology*. 2017;18(3):e143–e152.
3. International Council for Harmonisation. [ICH E9(R1): Addendum on Estimands and Sensitivity Analysis in Clinical Trials](https://database.ich.org/sites/default/files/E9-R1_Step4_Guideline_2019_1203.pdf). 2019.

*Note: The patient and trial scenario are entirely hypothetical. The discussion illustrates a general issue in trial design rather than the conduct or interpretation of any particular study.*
