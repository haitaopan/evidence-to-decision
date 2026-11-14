---
title: "One Outcome, Three Questions: Why the Estimand Must Come Before the Model"
description: "Rethinking Continuous, Ordinal, and Binary Analyses in Clinical Trials"
pubDate: 2026-11-13
topics: ["Clinical Trials", "Evidence & Decisions", "AI & Methods"]
draft: false
featured: false
---

*Rethinking Continuous, Ordinal, and Binary Analyses in Clinical Trials*

[阅读中文版：同一个临床结局，三个不同的问题：为什么必须先定义 Estimand，再选择统计模型？](/essays/one-outcome-three-questions-why-the-estimand-must-come-before-the-model-zh/)

---

Imagine a randomized clinical trial comparing two treatments for chronic pain. Investigators have collected pain scores at baseline and after eight weeks of treatment. The dataset is complete, and the statistical analysis is about to begin.

Then comes a familiar question:

Should we analyze the pain scores as continuous, ordinal, or binary outcomes?

One statistician suggests linear regression. Another recommends an ordinal model, arguing that pain ratings are ordered categories rather than truly continuous measurements. A clinician proposes classifying patients as responders or nonresponders because patients care about achieving meaningful relief.

Each suggestion sounds reasonable. But something important is missing from the conversation.

Before deciding which statistical model to use, we should ask what we actually want to learn about the treatment.

Do we want to know how much pain improves on average? Whether patients receiving one treatment tend to have better outcomes than patients receiving another? Or how many additional patients experience a clinically meaningful improvement?

These are different scientific questions. They can be investigated using the same clinical outcome, yet they define different treatment effects.

And sometimes they lead to surprisingly different conclusions.

## An Old Statistical Debate—and a More Fundamental Question

The debate over analyzing clinical rating scales has a long history.

In 1946, S. S. Stevens introduced the influential distinction among nominal, ordinal, interval, and ratio measurement scales [1].

Nominal scales distinguish categories without ordering. Ordinal scales establish an ordering but do not necessarily establish equal distances between categories. Interval scales support meaningful numerical differences, while ratio scales additionally have a meaningful zero that permits ratio comparisons.

These distinctions matter when analyzing patient-reported outcomes.

Consider a five-category response ranging from "strongly disagree" to "strongly agree." We know the categories are ordered. But is the difference between "strongly disagree" and "disagree" equivalent to the difference between "agree" and "strongly agree"?

Not necessarily.

A single Likert item also differs from a validated multi-item questionnaire. Combining several items may produce a score with stronger measurement properties, but summation alone does not establish equal intervals or guarantee clinical interpretability.

An 11-point numerical pain rating scale, ranging from 0 to 10, presents a somewhat different situation. Its numerical increments may support useful quantitative summaries in a particular clinical context. Nevertheless, a score of 8 does not necessarily represent twice as much experienced pain as a score of 4.

Does this mean linear regression is inappropriate?

Not automatically.

Geoff Norman's influential 2010 paper reviewed evidence that many parametric statistical methods can perform robustly despite departures from conventional distributional and measurement assumptions [2]. The mere presence of ordinal categories does not establish that a linear analysis is invalid.

Conversely, obtaining satisfactory statistical performance does not automatically establish that every numerical difference has a meaningful clinical interpretation.

Nor can a normality test settle the matter. Normality of observed scores is neither a sufficient justification for a mean-based estimand nor a universal requirement for valid inference about mean differences.

The opposite strategy—turning a rating scale into a binary outcome—creates another concern. Categorization discards distinctions among observations. Patients whose pain improves by two points and those whose pain disappears completely might both be labeled responders.

But the loss of information is not, by itself, proof that the responder estimand is scientifically unimportant.

These issues remain relevant in contemporary trials. A 2024 scoping review by Selman and colleagues documented substantial variation in the analysis of ordinal outcomes and incomplete reporting of analytical assumptions [3]. More recent methodological papers have examined proportional-odds models, win-based approaches, and alternatives to dichotomization [4,5].

Importantly, Al-Jaishi and colleagues explicitly emphasized choosing methods according to the target estimand and clinical question in their 2026 methodological paper [5].

The principle is therefore not new.

What deserves greater attention is its implication for interpreting clinical evidence:

**Different analyses of the same outcome may support fundamentally different claims about treatment benefit.**

## One Trial, Three Treatment Effects

Consider a hypothetical randomized trial of Treatment A versus Treatment B for chronic pain.

Patients are drawn from the same target population. Pain is measured using a prespecified 0–10 numerical rating scale, with lower scores indicating less pain. Baseline pain is assessed before randomization, and the principal follow-up assessment occurs at eight weeks.

For now, assume that the outcomes are completely observed and that no treatment changes or other intercurrent events complicate interpretation.

We can ask three questions.

### Question A: How Much Does Pain Improve on Average?

The first question concerns the average magnitude of improvement.

Suppose each patient's improvement is defined as their baseline score minus their eight-week score.

We might compare the mean improvement under Treatment A with the mean improvement under Treatment B:

**Mean treatment effect = Mean improvement under A − Mean improvement under B.**

If the estimated difference is positive, Treatment A produces greater average improvement on the numerical scale.

This treatment effect can be estimated using several approaches, including linear regression, analysis of covariance (ANCOVA) adjusting for baseline pain, or appropriate longitudinal models when repeated assessments are available.

The choice among these estimators involves considerations such as precision, covariate adjustment, missing-data assumptions, and model specification.

But the estimand itself is not linear regression.

It is the difference in population mean improvement.

Moreover, an ANCOVA of eight-week pain scores and a comparison of change scores need not have identical statistical efficiency. In a randomized trial, they can nevertheless be aligned with the same marginal treatment contrast under appropriate assumptions and standardization.

A mean difference is especially useful when a treatment's average impact on a clinically interpretable quantitative scale is central to the research question.

But it cannot tell us everything about the distribution of individual outcomes.

### Question B: Which Treatment Is More Likely to Produce a Better Outcome?

Now consider a different question.

Suppose we randomly select one patient from the Treatment A population and, independently, another patient from the Treatment B population.

What is the probability that the Treatment A patient has a better eight-week pain score?

This leads to the *win probability*, also called a probabilistic index.

Because lower pain scores are better, we can define:

**Win probability = P(Y_A < Y_B) + ½ P(Y_A = Y_B)**

Here, Y_A and Y_B represent eight-week outcomes from independently sampled patients in the two treatment populations.

A comparison in which the Treatment A patient has less pain counts as a win. A comparison in which both patients have the same score contributes half a win.

A win probability of 50% means that favorable and unfavorable pairwise comparisons balance after ties are split. Values above 50% favor Treatment A; values below 50% favor Treatment B.

This quantity can be estimated using Mann–Whitney-type methods, probabilistic-index regression, or other appropriate approaches that account for the target population and covariates.

Related quantities include win odds and win ratios, but their treatment of ties and their numerical interpretations can differ. None should be confused with the common odds ratio from proportional-odds regression.

There is also an important causal distinction.

**The probability that one randomly selected Treatment A patient does better than one independently selected Treatment B patient is not the probability that a particular patient would benefit from receiving A rather than B.**

The latter involves comparing two potential outcomes for the same individual. A conventional randomized trial reveals the marginal distributions under the two treatments, but not the joint distribution of both potential outcomes for each person.

Baseline severity and pairing rules also matter. Comparing every possible pair targets a different quantity from comparing only patients with similar baseline characteristics.

The clinical question must determine which comparison is relevant.

### Question C: How Many More Patients Achieve Meaningful Relief?

A third question concerns the probability of achieving an outcome that matters to patients.

Suppose patient-centered evidence supports defining meaningful improvement as a reduction of at least two points on the pain scale in this particular trial.

Then we can define a responder as someone whose pain score improves by at least two points between baseline and eight weeks.

The treatment effect might be the difference in response probabilities:

**Responder risk difference = P(Response under A) − P(Response under B).**

If 60% respond under Treatment A and 40% under Treatment B, the absolute increase in response probability is 20 percentage points.

Risk ratios and odds ratios offer alternative summaries of the same binary outcome, although they are different effect measures and are not numerically interchangeable.

The threshold requires careful justification. A two-point change is not universally meaningful across every disease, baseline severity, patient population, or clinical outcome assessment.

The FDA's patient-focused drug development guidance emphasizes fit-for-purpose outcome measurement and the importance of understanding meaningful change from the patient's perspective [8].

A responder definition should therefore be clinically supported and established prospectively, rather than selected after inspecting which cutoff gives the most attractive result.

Dichotomization is not inherently inappropriate when the scientific question genuinely concerns crossing a clinically important threshold.

The mistake is not choosing a binary estimand.

The mistake is allowing a convenient cutoff—or a favorable statistical result—to substitute for a meaningful clinical question.

## When the Three Answers Disagree

Now comes the most interesting part.

Imagine the following hypothetical eight-week outcomes. To make the example transparent, suppose everyone begins with a pain score of 6.

| Eight-week pain score | Treatment A | Treatment B |
|---|---:|---:|
| 0: Complete pain relief | 35% | 0% |
| 4: Two-point improvement | 15% | 80% |
| 6: No improvement | 50% | 20% |

These are constructed distributions, not results from an actual trial.

What can we conclude?

**First, Treatment A produces greater average improvement.**

The mean improvement is 2.4 points under A and 1.6 points under B.

Treatment A therefore has an advantage of 0.8 points in average improvement.

**Second, Treatment A does not produce a higher win probability.**

Comparing all possible independent cross-group pairs, Treatment A produces a better eight-week score in 38% of comparisons, a worse score in 40%, and a tie in 22%.

Splitting the ties equally gives:

Win probability for A = 38% + ½(22%) = **49%**.

Thus, the probability-based comparison is essentially balanced, with a slight numerical advantage for B.

**Third, Treatment B produces a substantially higher response rate.**

Using the prespecified hypothetical threshold of at least two points of improvement, 50% respond under A and 80% respond under B.

The responder risk difference for A versus B is therefore **−30 percentage points**.

We now have three answers from exactly the same outcome distributions:

- Average improvement favors A by 0.8 points.
- Win probability for A is 49%.
- Meaningful response favors B by 30 percentage points.

No statistical error is needed to explain the discrepancy.

Treatment A provides complete pain relief to a substantial subgroup, but many patients receive no benefit. Treatment B produces a more consistent, moderate improvement across a larger proportion of patients.

The treatment distributions cross rather than displaying a uniform shift in one direction.

The estimands capture different features of those distributions.

This is why the disagreement is scientifically informative.

An average may reward a large benefit concentrated in fewer patients. A responder analysis may favor a treatment that helps more patients cross a particular threshold. A win probability considers the ordering of outcomes in cross-group comparisons without assigning numerical weight to the magnitude of each difference.

None of these summaries is automatically the correct answer to every clinical question.

And none should be mistaken for a complete description of patient benefit.

## A Different Estimand Is Not a Different Estimator

This distinction is easy to lose when clinical discussions focus mainly on statistical software.

An estimand defines the treatment effect we want to learn about.

An estimator is a statistical procedure used to learn about that effect from observed data.

An estimate is the numerical result produced when that procedure is applied.

These are three distinct concepts.

For example, a difference in mean pain improvement might be estimated using a simple difference in sample means, baseline-adjusted ANCOVA, or a suitable model-based standardization procedure.

These methods may target the same treatment effect while differing in efficiency, robustness, or assumptions.

Conversely, a sufficiently flexible model for the complete outcome distribution may support estimation of multiple summaries, including means, response probabilities, and win probabilities.

The model family does not uniquely determine the estimand.

This distinction also changes how we interpret seemingly conflicting analyses.

If two estimators target the same estimand but give substantially different answers, we should investigate estimation assumptions, missing data, model misspecification, numerical instability, and sampling uncertainty.

If two analyses target different estimands, disagreement may instead reveal important characteristics of the treatment effect.

A sensitivity analysis ordinarily examines the robustness of inference for the same estimand under alternative assumptions or estimation approaches. An analysis targeting a different estimand answers an additional scientific question, even when it is described as supportive or supplementary.

Those distinctions should be explicit.

## An Estimand Is More Than a Summary Statistic

The ICH E9(R1) framework provides a more complete structure for thinking about treatment effects [6,7].

A properly defined estimand specifies five attributes: the target population, treatment conditions, outcome variable, strategy for intercurrent events, and population-level summary measure.

Our three pain questions primarily differ in the outcome summary or variable definition. But real trials require considerably more precision.

What happens when patients discontinue treatment before week eight?

Should their pain scores still contribute to the treatment comparison?

What if patients begin rescue analgesics?

A treatment-policy strategy might compare outcomes under the assigned treatment strategies regardless of discontinuation or rescue medication. This can be clinically relevant when those events are part of how treatments are used in practice.

A hypothetical strategy might instead ask what the outcomes would have been under a well-defined scenario in which rescue medication was not used.

These are not merely different methods for handling inconvenient observations. They can define different treatment effects.

A serious adverse event may influence subsequent treatment and outcome interpretation. A death before the scheduled pain assessment creates an even more fundamental problem: the intended pain outcome may no longer exist. An appropriate estimand may require a composite outcome or another explicitly justified strategy rather than treating death as an ordinary missing pain score.

Missing follow-up assessments are a separate issue. When an outcome is relevant to the chosen estimand but unobserved, its estimation requires assumptions and appropriate sensitivity analyses.

Thus, even after deciding whether the primary summary should be a mean difference, win probability, or response probability, we have not finished defining the scientific question.

We have only begun.

## What We Choose to Ask Also Determines What We Need to Measure

There is another implication of estimand-first thinking, one that begins well before a statistician opens an analysis dataset.

**If we know what scientific question we want to answer at the end of a trial, we should ask at the beginning what observations must be collected to support that answer.**

Return to the pain trial.

Suppose the only outcome retained in the database is whether each patient met a prespecified responder threshold. Those binary data may be sufficient to compare response probabilities.

But they cannot, by themselves, recover the magnitude of each patient's improvement. We cannot distinguish patients who improved by two points from those whose pain disappeared entirely. Nor can we reconstruct the mean improvement or a win probability based on the original pain scores.

If the trial instead retains the baseline and eight-week scores, the same observations can support all three of our treatment-effect summaries.

This does not mean each estimand requires an entirely different dataset. It means the level of detail preserved in the data places limits on the scientific questions we can answer.

Now suppose the question concerns not only improvement at eight weeks but also *how quickly* relief begins, *how long* it lasts, or *how stable* that relief is over time.

Two pain assessments, even if perfectly measured, cannot reveal the full trajectory between them. We would need appropriately timed repeated measurements. More frequent measurement is not automatically better: the schedule should reflect the expected time course, measurement error, patient burden, and what extra observations would contribute to the target question.

Consider, too, a patient who discontinues assigned treatment in week four and starts rescue analgesics.

If the estimand adopts a treatment-policy strategy, the week-eight outcome may remain relevant regardless of treatment discontinuation or rescue medication. A protocol that stops collecting pain scores as soon as treatment ends could leave the trial poorly equipped to estimate its own intended treatment effect. Statistical methods may still be available, but the conclusions may depend more heavily on assumptions about unobserved outcomes.

For a hypothetical strategy that asks what would have happened without rescue medication, the timing and details of that medication and relevant clinical circumstances also matter. Recording them does not make the counterfactual outcome observable; causal and statistical assumptions may still be necessary.

This illustrates a broader principle:

**Data collection is not merely an operational activity that follows trial design. It is part of the scientific design of clinical evidence.**

The practical questions extend beyond which variables appear in the database. We must consider how outcomes are defined, how precisely they are measured, when and how often assessments occur, whether raw scores are retained, how intercurrent events are documented, and whether the timing and reasons for missing assessments can be understood.

Those scientific requirements ultimately shape case report forms, electronic data capture systems, follow-up schedules, and quality-control procedures.

But their starting point should not simply be which fields are easiest to collect. It should be the treatment-effect claim the evidence is expected to support.

This is not an argument for collecting everything. Unnecessary assessments consume resources, burden patients, and may reduce data quality. Clinical questions, measurement feasibility, and estimand definition often need to be refined together.

The goal is to collect sufficient, fit-for-purpose evidence for the intended claims—and to avoid discovering, after the trial ends, that a critical observation was never made.

**A statistical model can help us reason from incomplete data, but it cannot automatically restore scientific information that the study never collected.**

Thus, before choosing an estimator, the trial team should ask not only which treatment effect matters but also what must be observed, when it must be measured, and what information must be preserved to estimate that effect credibly.

## From Statistical Evidence to Clinical Decisions

Why does any of this matter beyond statistical methodology?

Because clinical decisions depend on what a treatment effect means, not simply whether its associated p-value is small.

A patient may prefer a treatment with a greater chance of meaningful improvement, even if the average benefit is smaller.

Another patient may accept a greater probability of no improvement in exchange for a chance of complete relief.

A clinician may need to understand not only the average response but also the probability of deterioration, the distribution of benefit, adverse effects, and treatment burden.

A trialist must choose a primary estimand that is scientifically interpretable and appropriately aligned with the trial's objective.

Regulators must evaluate whether a prespecified treatment effect, supported by sufficiently reliable evidence, establishes a clinically relevant benefit in the intended population.

These perspectives are not necessarily in conflict. They emphasize different dimensions of the evidence.

In some trials, the mean difference may be the most appropriate primary estimand. In others, a carefully justified responder probability or an ordinal summary may be preferable.

And when treatment effects vary markedly across the outcome distribution, displaying the complete distribution may be essential for interpreting any single summary.

This does not mean conducting many analyses and choosing the most favorable result afterward.

Primary estimands, confirmatory testing strategies, and clinically meaningful thresholds should be prespecified. Multiple confirmatory claims may also require appropriate control of multiplicity.

A thoughtful trial can identify one primary estimand while presenting complementary analyses that illuminate other aspects of benefit and harm.

The important distinction is between using multiple analyses to understand treatment effects and using multiple analyses to search for a desirable conclusion.

Ultimately, a treatment effect estimate becomes clinically useful only when we understand the claim it supports, the assumptions required to support that claim, and the decision for which that claim is relevant.

## The Question Before the Model

The familiar debate over continuous, ordinal, and binary outcomes remains important. Measurement properties matter. Statistical assumptions matter. Efficiency and robustness matter.

But there is a question that comes earlier.

What exactly are we trying to learn about the treatment?

Is it the average magnitude of improvement? The probability of a better outcome in a population-level comparison? Or the proportion of patients who experience meaningful relief?

Those questions may require different estimands, even when the underlying outcome is identical.

And the answers may tell different stories.

The goal of clinical trial analysis is not simply to find the best mathematical representation of the data. It is to produce evidence that accurately addresses a scientifically meaningful question.

**Before asking which statistical model is appropriate, we must ask which treatment effect would be meaningful for the clinical decision.**

---

## References

1. Stevens SS. On the theory of scales of measurement. *Science*. 1946;103:677–680. [DOI](https://doi.org/10.1126/science.103.2684.677).

2. Norman G. Likert scales, levels of measurement and the "laws" of statistics. *Adv Health Sci Educ*. 2010;15:625–632. [DOI](https://doi.org/10.1007/s10459-010-9222-y).

3. Selman CJ, et al. Statistical analyses of ordinal outcomes in randomised controlled trials: a scoping review. *Trials*. 2024;25:241. [DOI](https://doi.org/10.1186/s13063-024-08072-2).

4. Long Y, et al. Role of the proportional odds assumption for the analysis of ordinal outcomes in neurologic trials. *Neurology*. 2025;105:e214146. [DOI](https://doi.org/10.1212/WNL.0000000000214146).

5. Al-Jaishi AA, et al. Statistical analysis of Likert-based ordinal scales: a guide for clinical trialists. *BMC Med Res Methodol*. 2026;26:78. [DOI](https://doi.org/10.1186/s12874-026-02793-5).

6. International Council for Harmonisation. *ICH E9(R1): Addendum on Estimands and Sensitivity Analysis in Clinical Trials*. Finalized 2019; FDA final guidance 2021. [FDA guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/e9r1-statistical-principles-clinical-trials-addendum-estimands-and-sensitivity-analysis-clinical).

7. Kahan BC, Hindley J, Edwards M, Cro S, Morris TP. The estimands framework: a primer on the ICH E9(R1) addendum. *BMJ*. 2024;384:e076316. [DOI](https://doi.org/10.1136/bmj-2023-076316).

8. US Food and Drug Administration. *Patient-Focused Drug Development: Selecting, Developing, or Modifying Fit-for-Purpose Clinical Outcome Assessments*. Final guidance, October 2025. See also *Incorporating Clinical Outcome Assessments Into Endpoints for Regulatory Decision-Making*, draft guidance, April 2023. [FDA PFDD guidance series](https://www.fda.gov/drugs/development-approval-process-drugs/fda-patient-focused-drug-development-guidance-series-enhancing-incorporation-patients-voice-medical).
