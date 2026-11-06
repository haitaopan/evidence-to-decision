---
title: "Missing Data: Where Should Statisticians Begin?"
description: "A Complete Workflow from Imputation to Clinical Evidence"
pubDate: 2026-11-06
topics: ["Clinical Trials", "Evidence & Decisions", "AI & Methods"]
draft: true
featured: false
---

## A Complete Workflow from Imputation to Clinical Evidence

*Missing Data Should Begin With the Clinical Question, Not the Imputation Algorithm*

**Evidence to Decision | English Discussion Draft**

---

## I. A Clinical Trial Problem We All Know Very Well

Suppose we are conducting a randomized clinical trial.

Enrollment is complete, and the database is approaching lock. The Data Management team tells the statistician:

“Several patients completed their baseline assessments but have no post-baseline efficacy assessments at all. How should we handle these patients?”

This may be one of the most ordinary questions in clinical trials.

Traditionally, statisticians can easily move straight into a technical discussion:

Should we use MMRM?

Should we use multiple imputation?

Could we use baseline observation carried forward (BOCF)?

Can we classify these patients as non-responders?

Do we need a pattern-mixture model?

How should these patients be retained in the ITT analysis?

If we choose different methods, how will Type I error, bias, and statistical power change?

These are, of course, legitimate statistical questions. Over the past several decades, the statistical community has developed a substantial body of methodological research around them.

But I increasingly believe that when we begin discussing these questions immediately, we may already have skipped several of the most important steps in a clinical trial.

**We do not yet know why these patients have no data.**

We do not know whether they actually received treatment.

We do not know whether they withdrew because of severe toxicity, lack of efficacy, disease progression, scheduling problems, or simply a data-entry error.

We do not know whether the same assessments were performed at another medical institution.

We may not even know how important the unobserved information is to the clinical question the trial was actually designed to answer.

If none of these questions has been clarified, what problem are we really solving by immediately comparing different imputation methods?

I would like to propose a principle:

> Missing-data methodology should begin with understanding why information is missing, what decision it affects, and whether that information can still be recovered—not with choosing an imputation algorithm.

Put another way:

**Handling missing data should begin by understanding why information is missing, which clinical decisions it may affect, and whether that information can be recovered—not by selecting an imputation algorithm.**

This is not a rejection of missing-data methodology.

Quite the opposite: it is an attempt to put missing-data methodology back in its proper place.

What needs to change is not the statistical methodology itself, but the order in which statisticians approach problems of clinical evidence.

---

## II. What Has Traditional Missing-Data Research Solved—and What Has It Not Solved?

Missing-data methodology is a mature and critically important field in modern statistics.

From Rubin’s missing-data framework to likelihood-based methods, multiple imputation, inverse probability weighting, selection models, pattern-mixture models, reference-based imputation, and tipping-point analyses, statisticians have developed a rich collection of theoretical and practical tools.

These methods are far from worthless.

Indeed, without them, reasonable statistical inference would be impossible in many clinical trials.

But I think we need to distinguish clearly between two questions.

### The First Question: Given Missing Data and Certain Assumptions, How Do We Estimate a Quantity Statistically?

This is the central question of traditional missing-data methodology.

Formally, suppose we wish to estimate the difference in mean outcomes between the treatment and control groups at time T:

$$
\theta=E[Y_T(1)]-E[Y_T(0)].
$$

Here, $Y_T(1)$ and $Y_T(0)$ denote the potential outcomes under two treatment conditions, with the treatment and intercurrent-event strategies explicitly specified. This expression is meaningful only when the clinical objective and outcome definition are sufficiently clear.

For each patient, we may observe only part of the outcome information.

Define:

$$
R_i =
\begin{cases}
1,& \text{the target outcome is observed},\\
0,& \text{the target outcome is not observed}.
\end{cases}
$$

The data available to us are:

$$
O_i=(A_i,X_i,R_i,R_iY_i),
$$

where:

- $A_i$ is the randomized treatment assignment;
- $X_i$ represents baseline covariates;
- $Y_i$ is the target outcome;
- $R_i$ indicates whether the target outcome was observed.

For now, this is a simplified, single-time-point outcome framework.

The statistical question is whether we can reasonably estimate $\theta$ from the observed data and additional assumptions.

For example, under certain conditions, we might assume:

$$
R\perp Y_{\mathrm{mis}} \mid A,X,Y_{\mathrm{obs}}.
$$

This is one simplified expression of the missing at random (MAR) idea.

With appropriate model specification, identifiability, and support conditions, we may use the observed data to make inferences.

That is an entirely legitimate research question.

### The Second Question: Do We Actually Have Sufficiently Credible Evidence to Answer the Question Needed for a Clinical Decision?

This is the question that I believe should come first.

If patients have no post-baseline outcomes, we should first establish:

Was the outcome supposed to have been collected?

Why was it not collected?

Did a treatment-related event occur?

Did that event change the meaning of the outcome?

Can the existing clinical information help explain the missingness mechanism?

Can we recover the actual observed result?

If not, what assumptions must we rely on?

Are those assumptions clinically credible?

How sensitive is the final conclusion to them?

Only after answering these questions does choosing a statistical estimator become truly meaningful.

In other words, the traditional statistical question is:

**Given incomplete data, how should we estimate the treatment effect?**

I would add an earlier question:

**Given a clinical decision, what evidence is required, what evidence is available, and what can we responsibly infer from the evidence that remains?**

These two questions are not in conflict.

The second should determine how we approach the first.

---

## III. Why Does “No Data” Not Simply Mean “Imputation Is Needed”?

Three concepts that are often mixed together need to be clarified.

### 1. Not Observing an Outcome Does Not Mean the Outcome Did Not Occur

For example, in an oncology clinical trial, a patient’s failure to complete a scheduled imaging assessment does not mean their disease did not progress. Nor does it mean a tumor response did not occur.

The scan may already have been performed, but the imaging files were never uploaded.

The patient may have undergone the scan at another hospital.

Or the patient may have been too ill to attend the scheduled visit because their disease was worsening.

These three situations contain very different information.

The first may be a data-management problem.

The second may be a data-access problem.

The third may be directly related to the clinical outcome and the missingness mechanism.

If we label all three simply as “missing” and pass them to the same imputation model, we have already discarded important clinical information.

### 2. Missing Data Are Not the Same as an Intercurrent Event

This is a particularly important distinction in the ICH E9(R1) framework.

For example, suppose a patient discontinues treatment because of a severe adverse event.

Treatment discontinuation itself may constitute an intercurrent event because it may affect how we interpret the treatment effect of interest.

But the failure to continue collecting efficacy data after treatment discontinuation is a separate problem.

Suppose our clinical question is:

“What is the ultimate efficacy of this treatment strategy when patients receive it in clinical practice, including the possibility of early treatment discontinuation?”

Then outcomes after discontinuation may still be extremely important.

If we stop collecting those data, we may create a missing-data problem that could otherwise have been avoided.

Conversely, if our estimand uses a hypothetical strategy and seeks to estimate what would have happened had a particular treatment-discontinuation event not occurred, then we must explicitly infer a hypothetical outcome.

These two analyses do not merely involve changing the imputation method.

They may represent different clinical questions.

Therefore:

**The intercurrent-event strategy determines which outcomes we need; missing-data methodology determines how we make inferences when those required outcomes are unobserved.**

The two must be coordinated, but they must not be confused.

### 3. Retaining Randomized Patients Does Not Mean Assigning Everyone an Imputed Number

The ITT principle is critically important in randomized trials.

But ITT should not be mechanically interpreted to mean that every randomized patient must receive an artificially imputed outcome value.

Randomization defines the treatment groups we wish to compare and the target population.

If some patients have no post-baseline outcome at all, merely retaining their records in the database does not automatically generate information about their post-treatment outcomes.

In some models, their baseline information may help with modeling. In other standard outcome models, however, patients with no post-baseline outcome may not directly contribute the information needed to estimate a treatment effect.

We cannot assume that the outcome evidence from all randomized patients has been fully utilized simply because an analysis is called an ITT analysis.

Nor should we manufacture clinical observations that do not exist merely to preserve the nominal sample size.

The correct question is:

**Are we still making inferences about the randomized target population? What assumptions does our analysis rely on to address unobserved outcomes? Are those assumptions sufficient to support an interpretation of the treatment effect in that target population?**

That is the question ITT and missing-data analysis should answer together.

---
