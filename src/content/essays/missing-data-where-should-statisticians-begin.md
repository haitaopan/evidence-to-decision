---
title: "Missing Data: Where Should Statisticians Begin?"
description: "A Complete Workflow from Imputation to Clinical Evidence"
pubDate: 2026-11-06
topics: ["Clinical Trials", "Evidence & Decisions", "AI & Methods"]
lang: en
translationKey: missing-data-where-to-begin
draft: false
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

# IV. The Complete Workflow I Believe Clinical Trial Statisticians Should Follow

If a clinical trial team handed me a dataset with missing data today, I would not begin by choosing MMRM or multiple imputation.

I would work through the following steps.

## Step 1. Start with the Clinical Decision: What Exactly Are We Trying to Decide with These Data?

I consider this the most important starting point of the entire workflow.

Clinical trials do not exist to produce a p-value.

They generally exist to support a particular decision.

For example:

- Should development of a drug continue?
- Should it advance to the next phase of clinical trials?
- Is a particular dose or schedule worth further investigation?
- Is there sufficient evidence to support clinical efficacy?
- Does the benefit of treatment outweigh its toxicity?
- Can an application be submitted to a regulatory agency?
- Should a treatment strategy change current clinical practice?

Different decisions may require very different levels of evidence completeness.

Suppose two clinical trials each have 10% missing data.

The first is a large randomized trial with a continuous symptom score as its primary endpoint.

The second is an early pediatric oncology trial with only 20 patients, using tumor response to support a go/no-go decision.

Even if their missing-data percentages are identical, the clinical evidence problems they face may be fundamentally different.

Especially in a small trial, the actual outcomes of just one or two patients may determine whether a prespecified decision threshold is crossed.

My first question, therefore, is:

**If we are uncertain about the true outcomes of these patients, which decision could that uncertainty affect?**

We should not first calculate a missing-data percentage and only then decide how serious the problem is.

We should first define the decision, then judge the actual impact of the missing information.

## Step 2. Define the Estimand: What Kind of Treatment Effect Do We Need to Know?

Once the clinical question is clear, the next step is to define the estimand.

At a minimum, we need to address five attributes:

**Population:** Which patients are we interested in?

**Treatment conditions:** Which treatment conditions or strategies are being compared?

**Variable:** Which particular outcome reflects the clinical question of interest?

**Intercurrent events:** When treatment discontinuation, rescue therapy, switching, progression, or death occurs, how should it be handled in the definition of the treatment effect?

**Population-level summary:** Are we trying to estimate a mean difference, risk difference, risk ratio, hazard ratio, or another clinically meaningful quantity?

Consider treatment discontinuation.

If we use a treatment-policy strategy, we may still need the outcomes observed after discontinuation.

If we use a hypothetical strategy, we may need to estimate what the outcome would have been if treatment had not been discontinued.

If we use a composite strategy, certain events may directly become part of the outcome definition.

If we use a while-on-treatment strategy, the observation window of interest may be different again.

There is an important additional point:

Death is not the same as ordinary treatment discontinuation.

For an outcome defined as a quality-of-life score among patients alive at a particular time, the score after death may not be defined at all.

In that situation, we cannot simply treat a post-death score as an ordinary missing value and hand it to MMRM.

We should first consider whether a composite endpoint, while-alive strategy, principal-stratum strategy, or another definition aligned with the clinical question is needed.

Therefore:

**Before the estimand is clear, the question “How should we impute the missing data?” is often not even fully defined.**

## Step 3. Build a Required-Evidence Map: Which Information Must Be Observed?

After defining the estimand, I would translate the clinical question into an explicit list of data requirements.

This is especially valuable during protocol development and CRF design.

For example, for a trial with a tumor-response endpoint evaluated within a fixed time window, we need to specify:

Did the patient receive treatment?

At which times should tumor imaging be performed?

Which response criteria should be used?

Who will assess the images?

Is response confirmation required?

Are outside-hospital images acceptable?

If a patient withdraws early, is an assessment still required?

How do disease progression and death affect endpoint classification?

If an imaging assessment cannot be obtained, is alternative clinical evidence available?

For a repeated-measures continuous outcome, we may need:

Measurements at each scheduled visit;

Baseline disease severity;

Important covariates associated with the outcome;

Timing of treatment discontinuation or rescue therapy;

Whether measurements continue after treatment is stopped;

Reasons for missingness and relevant auxiliary information.

These are not exclusively statistical-analysis questions.

They also involve the protocol, CRF, EDC, clinical visit schedule, imaging management, data quality, and the research team's ability to execute the study.

I would summarize this process as:

**Decision → Estimand → Required observations → Assessment timing → Data source → Provenance → Consequence if missing.**

Provenance is particularly important here.

We should know not just whether a data field contains a value, but, as far as possible, where that value came from, when it was measured, how it was confirmed, and whether it satisfies the endpoint definition.

In this way, missing-data analysis shifts from a statistical task performed shortly before database lock to a question addressed at the clinical trial design stage.

## Step 4. Diagnose Missingness: First Understand What “No Data” Actually Means

When we discover that a patient's outcome is absent, the next step is not simply to assign a missing indicator. It is to conduct an evidence diagnosis.

I would distinguish at least five situations.

| Situation | What it actually means | Priority action |
|---|---|---|
| Data exist but are not entered | The assessment was completed but has not entered the analysis database | Verify and enter the data |
| Data may be recoverable | The result may exist at an outside hospital, in an imaging system, or in source records | Investigate within applicable permissions |
| Outcome is defined by a clinical event | An event has occurred and, under prespecified rules, determines the outcome | Verify the event and endpoint rules |
| Outcome is genuinely unobserved | The target outcome was not actually measured | Assess the missingness mechanism and estimation assumptions |
| Outcome is not defined under the chosen variable | After a particular clinical event, the target variable does not exist or is not applicable | Revisit the estimand and event strategy |

These five situations should not be handled as though they were the same.

The third and fifth categories deserve particular emphasis.

For example, death may be an event for certain time-to-event endpoints, but it may render some continuous outcomes undefined.

Its treatment cannot be separated from the endpoint and estimand.

We should not mechanically reason:

“The database has no value for this outcome, so imputation is necessary.”

A blank field in the database is not the same thing as genuinely missing clinical evidence.

## Step 5. Clinical Adjudication: Review the Clinical Course of Important Missing Cases, Patient by Patient

For particularly important missing outcomes, especially in small trials or for critical endpoints, I favor a patient-by-patient review.

This does not mean that statisticians should replace physicians in making clinical judgments.

Quite the opposite: statisticians should work with the clinical PI, Data Management, Clinical Operations, and medical monitoring teams to understand what actually happened to each patient.

I generally want to see a timeline:

Randomization → First dose → Treatment exposure → Adverse events → Discontinuation or progression → Planned assessment → Actual available evidence.

For example:

A patient receives treatment on Day 1.

Grade 3 toxicity occurs on Day 12.

Treatment is discontinued on Day 18.

An efficacy assessment was scheduled for Day 28.

Ultimately, no Day 28 data are available.

At that point, the first question worth asking is not whether to use BOCF or MI.

Instead:

Why are there no Day 28 data for this patient?

Did the study stop requiring follow-up after the patient discontinued treatment because of toxicity?

Or did the patient continue receiving routine care at the hospital after discontinuation, while those clinical data were simply not entered into the research database?

If the data could originally have been collected, why did that not happen?

For our defined estimand, do the outcomes after treatment discontinuation remain meaningful?

Without answers to these questions, it is difficult to know how much assumption-related risk the chosen model must bear.

One further practical principle is essential:

**Patient-by-patient review must follow prespecified or objectively consistent rules, preferably while blinded and with appropriate clinical personnel involved, to avoid selectively recovering, interpreting, or excluding patients on the basis of known treatment results.**

The more important the clinical interpretation, the greater the need for an auditable process.

## Step 6. Recover Real Evidence First, Then Consider Statistical Imputation

This is a step I particularly want to emphasize.

Suppose five patients lack scheduled tumor assessments.

After reviewing the records, we discover:

Two patients completed their scans, but the images have not yet been uploaded.

One patient's outside-hospital assessment records are obtainable.

One patient died early and therefore did not undergo the scheduled scan.

The final patient was genuinely lost to follow-up, and no subsequent information can be obtained.

Initially, it appeared that we had five missing outcomes.

After investigating the clinical information, however, the situation is entirely different.

The first three patients' data may be recoverable.

The fourth patient's death is already a known clinical event and must be handled according to the prespecified endpoint and estimand.

Only the fifth patient may represent genuinely irrecoverable outcome uncertainty.

Of course, whether outside-hospital data can be used depends on the protocol, scope of consent, measurement comparability, time windows, and other prespecified requirements. Finding a numerical value does not automatically justify including it.

Nevertheless, the example illustrates a basic point:

**Recoverable evidence is not an imputation problem.**

I do not believe that a sophisticated multiple-imputation algorithm can replace a reasonable check of actual clinical records.

In practice, we should prioritize recovering information wherever doing so is clinically meaningful, operationally feasible, and consistent with ethical and authorization requirements.

Such investigations should also have reasonable limits in time, resources, and completeness; they should not prevent the database from being locked indefinitely.

Only when the information genuinely cannot be obtained should we move on to statistical inference.

That is the order I believe missing-data management should follow.

---

# V. When the Data Truly Cannot Be Recovered, What Should the Statistician Do?

Only at this point do we enter the core territory of traditional missing-data methodology.

I am not suggesting that we should stop the analysis here.

On the contrary, this is precisely where statistical methods can begin to play their proper role.

## Step 7. Choose the Analysis Method Based on the Estimand, Endpoint, and Missingness Mechanism

We first need to recognize a basic fact:

The missing-data mechanism generally cannot be fully verified from the observed data alone.

We can investigate whether missingness is associated with observed baseline covariates, treatment assignment, previous outcomes, toxicity events, or visit history.

But these investigations cannot prove that MAR holds, nor can they directly rule out MNAR.

For example, an analysis might assume:

$$
P(R=1\mid Y_{\mathrm{mis}},Y_{\mathrm{obs}},X,A)
=
P(R=1\mid Y_{\mathrm{obs}},X,A).
$$

This is a simplified representation of MAR.

It does not mean that the data are “missing completely at random.”

Rather, it means that after conditioning on the observed information included in the model, the probability of missingness no longer depends on the unobserved outcome.

An easily overlooked question follows:

**Did we actually collect sufficiently rich information in the database to make that assumption clinically credible?**

If patients stop attending follow-up because their disease has seriously worsened, but we do not record the reasons for deterioration, relevant symptoms, recent assessments, or changes in treatment, then imputation based only on baseline characteristics may fail to adequately explain the missingness mechanism.

Conversely, if the research team carefully documents prior efficacy trends, toxicity, reasons for discontinuation, and auxiliary assessments, the statistical model may have access to much more valuable information.

This again shows that the validity of missing-data methodology depends, to some extent, on the quality of clinical evidence collection that occurred earlier.

### MMRM: Useful, but Not Automatically Correct

MMRM can make highly effective use of observed longitudinal outcomes when analyzing certain kinds of incomplete repeated-measures data.

But using MMRM does not mean every missingness mechanism has been resolved.

The model must align with the target estimand and relies on assumptions about the outcome distribution, correlation structure, missingness mechanism, and other features.

In particular, when treatment discontinuation is related to the true outcome, retaining only on-treatment data and ignoring outcomes after discontinuation may cause MMRM to implicitly estimate a hypothetical treatment effect that was not the effect we originally intended to estimate.

Before analysis, therefore, we must confirm:

Is the treatment effect estimated by MMRM actually the treatment effect we need?

### Multiple Imputation: It Can Propagate Uncertainty, but It Cannot Create Real Observations

Multiple imputation can appropriately represent some of the uncertainty associated with missing data by generating unobserved outcomes repeatedly.

But its validity depends on the imputation model, target estimand, missingness assumptions, and compatibility between imputation and analysis.

If critical predictive information was never collected, increasing the number of imputations will not automatically repair incorrect assumptions about missingness.

Repeating the same guess many times does not turn it into a fact.

### BOCF or LOCF: Simplicity Does Not Mean Validity

Suppose a patient's baseline score is 20 and their first follow-up outcome is missing. Setting the change from baseline to zero does not mean that the patient truly experienced no change.

Their actual outcome may have improved or worsened.

In certain well-defined clinical or statistical circumstances, a particular conservative rule may be defensible.

But we cannot assume that a single-value imputation method will necessarily be conservative for the treatment contrast, Type I error, or clinical decision simply because it appears conservative.

Conservatism depends on the treatment groups, missingness mechanism, endpoint, and estimation target.

I would therefore not regard BOCF or LOCF as universally appropriate solutions to missing data.

### Non-Responder Imputation: Distinguishing Endpoint Definition from Assumption Is Especially Important

Non-responder imputation (NRI) is very common in oncology clinical trials.

But we must ask:

Does an unobserved response mean that no response occurred?

If the endpoint is “objectively confirmed response within a specified period,” a patient without any confirmable response may be classified as a non-responder under prespecified assessment rules.

But if the research question concerns whether a patient truly experienced tumor shrinkage and that shrinkage simply was not measured, NRI should not be presented as if we know that the patient did not respond.

The first situation may involve an observable, verifiable endpoint definition.

The second involves an assumption about an unobserved outcome.

The two may use the same numerical coding, but they have different scientific meanings.

---

# VI. A Concrete Example: Five Patients in an Early Pediatric Oncology Trial

Suppose we are conducting a small pediatric oncology Phase II trial with objective response within a fixed assessment window as its primary endpoint.

The study plans to enroll 25 patients.

Five patients do not complete their scheduled first response assessments.

Consider these patients:

| Patient | Known clinical information | How should we think about it? |
|---|---|---|
| A | Imaging was completed but not uploaded to the study database | Verify and obtain the images first |
| B | Severe toxicity after treatment, followed by early discontinuation | Clarify the toxicity event, endpoint, and subsequent assessment requirements |
| C | Death before the scheduled assessment | Apply prespecified rules for death; do not arbitrarily treat it as ordinary missingness |
| D | Imaging performed at an outside hospital | Assess whether it meets protocol requirements and can be used for endpoint determination |
| E | Lost contact, with no further clinical information | The patient for whom missingness assumptions particularly need examination |

If the statistician sees only the database, they may see five blank response fields.

But after clinical review, we find that the information status of each patient is very different.

We should then ask a further question:

What is the trial's go/no-go decision?

For example, is there a prespecified minimum number of confirmed responses required before the drug is considered worthy of further investigation?

If the true response classification of one patient could push the trial across its decision threshold, then that missing outcome is extremely important.

Conversely, if the prespecified go/no-go decision would remain unchanged regardless of that patient's outcome, the missingness must still be reported accurately and handled appropriately, but its impact on the current decision may be relatively limited.

This leads to a concept I find highly practical:

**Decision-relevant missingness.**

It is not a new statistical classification of missing-data mechanisms. It is a way to establish priorities in practice:

How much does a particular missing piece of information matter to the target clinical decision?

From this perspective, the importance of missingness should not be evaluated solely by the percentage of missing data.

We should also consider where the information is missing, the plausible clinical mechanism, the sensitivity of the endpoint, and the decision threshold.

This way of thinking is especially valuable for clinical research teams with limited resources.

---

# VII. A Simple Mathematical Example: Why Focus on the Impact of Missingness on the Conclusion?

Suppose a randomized trial has 50 patients in each group, with binary response as the primary endpoint.

We observe:

Treatment group: 16 patients with confirmed responses and 6 with unknown outcomes.

Control group: 10 patients with confirmed responses and 4 with unknown outcomes.

For simplicity, assume that all other patients with observed outcomes have been confirmed not to meet the response definition, and that we make no additional assumptions about the true binary status of patients whose outcomes are missing.

Then the logical bounds on the true response proportion in the treatment group are:

$$
\frac{16}{50}\le p_T\le\frac{16+6}{50},
$$

or:

$$
0.32\le p_T\le0.44.
$$

For the control group:

$$
\frac{10}{50}\le p_C\le\frac{10+4}{50},
$$

or:

$$
0.20\le p_C\le0.28.
$$

Therefore, the identification bounds for the true response risk difference are:

$$
0.32-0.28\le p_T-p_C\le0.44-0.20,
$$

which gives:

$$
0.04\le p_T-p_C\le0.24.
$$

An important clarification: these are logical bounds arising from the possible unobserved outcomes given the classifications of the observed patients. They are not a confidence interval, and they do not incorporate sampling error.

This example is interesting.

Even if we know nothing about the response status of the patients with missing outcomes, under these assumptions the treatment group's response proportion remains higher than the control group's.

However, the magnitude of the difference could range from 4 to 24 percentage points.

That may be very important for clinical interpretation.

If the research team uses only a fixed NRI analysis, it may report:

Treatment group: 32%; control group: 20%; risk difference: 12 percentage points.

That number is not useless.

But if we fail to distinguish “no confirmed response” from “true response status unknown,” we risk treating the result of an analysis rule as though it directly identified the underlying true response rate.

I would rather show the clinical team all of the following:

What is the observed evidence?

How much uncertainty is introduced by the missing information?

Under which assumptions is the conclusion stable?

Under what circumstances would it change?

This example uses no complex statistical model, yet clearly reveals the relationship between evidence and decisions.

Of course, a genuine confirmatory analysis must follow the prespecified estimand, statistical hypothesis, uncertainty quantification, and testing rules.

The purpose of this simple illustration is not to replace formal statistical analysis, but to help us understand the information boundaries created by unobserved outcomes.

---

# VIII. Sensitivity Analysis Should Ask More Than Whether Statistical Significance Changes

I believe that one of the most important purposes of missing-data analysis is to help us understand how much our conclusions depend on assumptions that cannot be verified.

We should take sensitivity analysis beyond a purely methodological comparison and use it to evaluate the reliability of the evidence.

For example, in a simplified analysis of a continuous endpoint, let:

$$
\mu_{a,\mathrm{mis}}
=
\mu_{a,\mathrm{MAR}}+\delta_a,
$$

where $\delta_a$ represents the deviation in the average outcome among patients with missing data in treatment group $a$ from the value predicted under MAR.

If larger values indicate better clinical outcomes, a negative $\delta_a$ may mean that patients with missing outcomes fared worse than the model predicts.

In a simple, single-time-point comparison of group means, if the proportion of missing data in group $a$ is $\pi_a$, the mean difference changes approximately as follows with the offset parameters:

$$
\theta(\delta_1,\delta_0)
=
\theta_{\mathrm{MAR}}+\pi_1\delta_1-\pi_0\delta_0.
$$

This is not a general formula for every longitudinal or complex-estimand model. It is merely a simplified example to illustrate the idea.

What is genuinely interesting is not scanning $\delta$ from −10 to +10 and then displaying a graph.

Instead, we should ask:

Based on clinical knowledge, what values of $\delta$ are plausible?

If patients leave the study because of worsening disease, what would be a reasonable range of offsets?

If patients are missing mainly for nonmedical reasons, what range would make sense?

Could the treatment and control groups have different missingness mechanisms?

How large would the offset need to be before the primary clinical conclusion changes?

The point at which the conclusion crosses a clinical or statistical decision threshold is the tipping point.

But tipping-point analysis has its own easily overlooked problem:

**Finding a mathematical parameter value that reverses the conclusion does not mean that value is clinically plausible.**

Thus, a good sensitivity analysis should not merely report:

“When $\delta=-3.7$, the p-value exceeds 0.05.”

It should also explain:

How much clinical deterioration does such a deviation represent?

Does actual clinical experience support deterioration of that magnitude?

Could such a deviation plausibly occur in only one treatment group?

If we lack the relevant clinical data, can we remain appropriately cautious about these assumptions?

Ultimately, I want sensitivity analysis to answer:

**How much unobserved information would have to differ from our assumptions before the clinical decision changes—and is that difference clinically plausible?**

Of course, primary sensitivity analyses should generally examine the robustness of key estimation assumptions for the same estimand.

If we change the estimand—for example, moving from a treatment-policy effect to a hypothetical effect—the analysis may still provide supplementary value, but it is not simply another test of the robustness of the same result.

That is a very important methodological boundary.

---

# IX. Why Can't the Same Missing-Data Method Be Applied Mechanically Across Clinical Fields?

I want to illustrate this with three different clinical scenarios.

## Scenario One: Continuous Depression Symptom Scores

Suppose a depression trial measures each patient's symptom score at baseline and at Weeks 2, 4, and 8.

One patient has a baseline score of 20 but no subsequent data at all.

We do not know whether the patient improved.

If we want to estimate the mean symptom score at Week 8, a reasonable analysis will generally need to draw on information from other patients, baseline severity, treatment assignment, auxiliary variables associated with missingness and outcomes, and clearly specified missing-data assumptions.

If the patient dropped out because of an early lack of efficacy, assuming MAR may require additional justification.

If the patient received rescue medication, we must also decide which estimand strategy applies to that event.

Here, MMRM, MI, reference-based imputation, or pattern-mixture approaches may all have practical value.

But whichever method is chosen must be aligned with the clinical question.

## Scenario Two: Objective Response in Pediatric Oncology

Now change the endpoint to objective response rate.

The patient has no Week 8 imaging.

We cannot simply apply the same reasoning we used for a continuous symptom score.

Here, imaging windows, response confirmation, disease progression, treatment discontinuation, death, and lesion evaluability all matter.

Sometimes a patient without a confirmed response may be classified as a non-responder according to protocol rules.

At other times, we need to discuss genuinely missing response information.

The key is the endpoint definition and estimand, rather than deciding in advance to use NRI.

## Scenario Three: Oncology PFS

PFS poses a different problem again.

A patient may miss one imaging assessment but then be found to have disease progression at the next scan.

If an unobserved progression occurred during the interval between assessments, the true progression time may be uncertain.

If the patient is completely lost to follow-up, censoring assumptions also come into play.

The question is no longer as simple as using MI to fill in a continuous numerical outcome.

We need to establish:

What are the event definitions and date-assignment rules?

Does death count as a PFS event?

How do missed scans affect the detection of disease progression?

Might censoring be associated with disease risk?

Could differences in assessment schedules affect comparisons between groups?

Do we need appropriate analyses addressing informative censoring, interval uncertainty, or other mechanisms?

Moreover, right-censoring caused by an administrative follow-up cutoff should not be treated as interchangeable with early loss to follow-up caused by deterioration in health.

Therefore:

**Even though all three cases involve missing information, continuous outcomes, binary response, and time-to-event outcomes may require entirely different statistical strategies.**

This is precisely why I do not favor treating any single missing-data algorithm as a universal answer.

---

# X. What Should We Still Do When the Data Can No Longer Be Recovered?

Someone may ask:

If the data truly do not exist and there is no remaining possibility of recovering them, does the earlier clinical review still have any value?

My answer is yes—and it may be extremely important.

Even when the true outcome cannot be recovered, clinical review can still help establish:

Whether missingness is associated with treatment;

Whether it is associated with severe toxicity or worsening disease;

Whether there are differences between treatment groups;

Which auxiliary information remains available;

Which missing-data assumptions are comparatively reasonable;

What range should be considered in sensitivity analyses;

And whether some conclusions go beyond what the existing evidence can support.

We must also acknowledge that some missingness mechanisms cannot be characterized sufficiently reliably using the available data.

In that case, statisticians should not pretend that these problems have been solved.

But neither should we refuse to analyze the data simply because information is incomplete.

Our inferences should be commensurate with the information available and the strength of the assumptions required.

For example, in a trial with a low missing-data rate, a relatively well-understood clinical mechanism, and conclusions that remain stable over a reasonable sensitivity range, we may maintain substantial confidence in the treatment effect.

Conversely, in a trial with a high missing-data rate, different discontinuation mechanisms between groups, and findings that depend heavily on an unverifiable assumption, we should be cautious about the credibility of the evidence—even if the primary analysis produces a very small p-value.

The key is not whether the method is sufficiently sophisticated.

It is whether confidence in the conclusion is justified by the quality of the data, the clinical facts, and the strength of the assumptions.

---

# XI. The Best Time to Prevent Missing-Data Problems Is During Trial Design

So far, we have mainly discussed what to do when a dataset already contains missing outcomes.

But for future trials, I believe the most important work should happen earlier.

During protocol design, CRF development, and study operations planning, we should already be considering which critical information might be missing later.

For example:

### Which Data Will We Continue to Collect After Treatment Is Discontinued?

The answer should be determined by the estimand and clinical question.

If we need to estimate the overall effect of a treatment strategy that includes treatment discontinuation, stopping the study drug generally should not mean that all efficacy follow-up automatically ends.

Whenever possible, trials should design mechanisms for continued data collection that are ethically appropriate and operationally feasible.

Of course, informed consent, the patient's wishes about withdrawing from research, and applicable requirements must be respected.

### If a Patient Cannot Complete a Scheduled Assessment, What Alternative Information Sources Do We Have?

In oncology trials, possible sources might include outside-hospital imaging, medical records, death records, or other qualifying assessment results.

For patient-reported outcomes, remote data collection or more flexible follow-up arrangements may be worth considering.

However, whether alternative data may be used for the primary endpoint should be considered in advance, including measurement comparability, data quality, and the relevant analysis rules.

### If a Particular Data Field Is Missing, What Are the Consequences?

I think an evidence-readiness assessment of critical variables could be conducted during CRF design:

Does the field support the primary endpoint?

Can the information be recovered if it is missing?

Can it be derived from other fields?

If it is irrecoverable, will endpoint evaluability be affected?

Will its absence change the assumptions on which the primary statistical analysis relies?

If it could affect an important clinical decision, can we take preventive measures before the trial begins?

This review is not intended to score protocols or create unnecessary data-collection burdens.

Its purpose is to ensure that:

**The evidence we genuinely need can be reasonably observed, documented, and preserved during the conduct of a clinical trial.**

There is also a trade-off in the allocation of resources.

Not every variable should be collected without limits.

More data fields can increase the burden on patients and research teams, and may even reduce overall data quality.

Good evidence-readiness planning is not about collecting everything. It is about giving priority to information essential to the main clinical questions.

---

# XII. Missing-Data Methodology Should Serve Evidence Credibility

I want to introduce a broader concept:

**Evidence credibility.**

In traditional statistical evaluation, we may focus primarily on:

Is bias small?

Is Type I error controlled?

Is power adequate?

Does confidence interval coverage achieve its nominal level?

These properties are extremely important.

But if we want statistical results to support real clinical decisions, I believe another level of assessment is necessary.

Given an estimate:

What assumptions does it depend on?

Can those assumptions be supported by clinical facts?

Were the most critical data actually observed?

Have the reasons for missingness been adequately explained?

Are there data that could have been recovered but were not?

Do the results remain stable under clinically plausible alternative assumptions?

If the results change, is it statistical significance, clinical importance, or the ultimate decision that changes?

Can we clearly explain to clinical PIs, DSMBs, regulatory reviewers, and other researchers which conclusions come from observed data and which depend on modeling assumptions?

I believe a genuinely credible missing-data analysis should be able to address these questions.

The goal is not to propose a new, unvalidated credibility score.

Instead, I advocate a transparent, structured process for judging evidence.

Statistical methods can help us quantify uncertainty, but they cannot replace judgments about the sources and applicability of evidence.

Nor can every type of uncertainty be fully expressed by a single standard error or confidence interval.

Sometimes we must also explicitly identify uncertainty about identification assumptions, model risk, and limitations of clinical interpretation.

This is another reason I believe missing-data research and clinical evidence engineering should become more closely integrated.

---

# XIII. Putting This Approach to Work in Everyday Statistical Practice

I do not want this article to remain purely theoretical.

Suppose a statistician receives an email saying:

“We have several subjects with no post-baseline assessment. Can you advise how to handle them in the analysis?”

I would suggest not immediately replying:

“Use multiple imputation.”

Nor should we immediately reply:

“Treat all missing assessments as non-response.”

A better approach is to organize a brief, structured review first.

## I Would Ask the Team to Prepare a Missing Outcome Review Table

| Item | Question to be answered |
|---|---|
| Subject ID | Which patient? |
| Treatment assignment | Which group? Maintain blinding where necessary |
| Endpoint / visit | Which endpoint and visit are missing? |
| Last available assessment | What was the last reliable observation? |
| Treatment / disease status | Did discontinuation, progression, toxicity, death, or another event occur? |
| Reason for missing | Why is the outcome absent? |
| Existing source information | Are source records, images, or other documentation available? |
| Recoverability | Can the information be recovered under the applicable requirements? |
| Relevant estimand | Which estimand is affected by this missingness? |
| Proposed resolution | What action is proposed? |
| Remaining assumptions | Which assumptions are still required if the data cannot be recovered? |
| Decision consequence | How might the missing information affect a critical clinical conclusion? |

This table need not be especially complex.

For a handful of critical patients, a concise and accurate review record may be more useful than immediately running dozens of imputation models.

If the problem continues to occur after the trial begins, the team should also monitor patterns of missingness regularly.

For example, are there substantial differences across study sites, treatment groups, visit stages, or reasons for discontinuation?

This may help not only with the final analysis but also with improving the follow-up process while the study is ongoing.

## Then Hold a Brief Clinical–Statistical Review

The goal of the meeting is not for everyone to select their favorite statistical method.

It is to reach several clear conclusions:

First, which data have been confirmed?

Second, which data can still be recovered?

Third, which missing outcomes are associated with intercurrent events?

Fourth, does the existing SAP adequately cover these situations?

Fifth, if the remaining missingness must be handled analytically, which assumptions best fit the clinical circumstances?

Sixth, which sensitivity analyses would genuinely test the robustness of the primary conclusions?

One point deserves particular attention: if the trial is already under way or approaching unblinding, the primary analysis should not be modified arbitrarily in light of observed treatment results.

Any necessary changes should follow principles such as prespecification, blinded review, appropriate approval, complete version records, and transparent reporting.

These are important safeguards against bias introduced by analytical flexibility.

Finally, the statistician should complete the formal analysis based on the clearly defined estimand, available data, and analysis plan.

I believe this sequence better reflects the actual needs of clinical trial evidence generation.

---

# XIV. How Do We Know When a Missing-Data Analysis Is Good Enough?

I do not believe there is a single missing-data solution suitable for every clinical trial.

But I do think that a relatively stable set of review criteria is possible.

A credible analysis should, at a minimum:

- [ ] Clearly identify the clinical question and estimand it serves.
- [ ] Distinguish genuinely unobserved outcomes, intercurrent events, and measurements that are not applicable.
- [ ] Describe the amount, timing, distribution between groups, and reasons for missingness.
- [ ] Make reasonable efforts to recover qualifying real data.
- [ ] Clarify the relationship between the primary estimator and the estimand.
- [ ] State the key missing-data assumptions and explain their clinical basis.
- [ ] Use reasonable sensitivity analyses to assess the robustness of the primary conclusion.
- [ ] Distinguish sensitivity analyses addressing the same estimand from supplementary analyses addressing different questions.
- [ ] Report analytical uncertainty and aspects that cannot be identified.
- [ ] Explain whether missing information could change the actual clinical decision.
- [ ] Maintain complete, auditable records of data handling and analysis.

This does not mean that every trial requires an equally complex investigation.

Some trials have very little missingness, and the issue is straightforward.

Others may require complex MNAR sensitivity analyses.

Still others may have lost so much information that sufficiently robust clinical conclusions cannot be drawn.

What really matters is matching the complexity of the analysis to the clinical question, missing-data risk, and consequences of the decision.

---

# XV. Rethinking Missing-Data Research: What Should We Study?

This article is not an argument that traditional missing-data methods are unworthy of research.

In fact, many important questions still deserve in-depth investigation.

For example, what are the properties of different estimators when missingness mechanisms are jointly influenced by treatment, disease severity, and earlier outcomes?

When the treatment and control groups have different missingness mechanisms, are estimates of the treatment effect stable?

When only a small number of patients have no post-baseline outcome at all, which methods can maintain reasonable frequentist operating characteristics?

In finite samples, how can we efficiently evaluate the impact of complex MNAR assumptions?

All of these research questions are highly meaningful.

But I hope future methodological research will connect more explicitly to real clinical evidence problems.

For example, could we study:

How much estimation bias can different data-recovery strategies reduce?

Under what circumstances is the informational value of additional clinical follow-up greater than that of a more sophisticated estimation model?

How can we prioritize follow-up and data verification based on the clinical decision at stake?

How much do different patterns of missingness affect go/no-go decisions?

How can we design simulations in which missingness mechanisms genuinely reflect disease worsening, treatment toxicity, rescue therapy, and clinical follow-up processes, rather than merely a mathematical missingness-probability function?

How can we translate clinically credible MNAR scenarios into interpretable sensitivity analyses?

This research is not fundamentally at odds with traditional methodology.

It connects statistical questions to evidence generation and decision-making.

I believe research of this kind would be of more direct value to actual clinical trials.

---

# XVI. A Statistician's Real Responsibility Is Not to Fill Every Blank Field

I want to return, finally, to a very simple question.

What responsibilities should statisticians actually assume in clinical trials?

Of course, we must choose appropriate statistical models.

We must ensure that hypothesis tests and confidence intervals have reasonable properties.

We must understand MAR, MNAR, MI, MMRM, pattern-mixture models, and a variety of modern statistical methods.

These are all fundamental professional competencies.

But I believe an experienced clinical trial statistician should be more than someone who knows how to run models.

We should also understand the clinical question.

We should know which data are genuinely important.

We should recognize when missingness may arise from unreasonable trial design or follow-up procedures.

We should know when it is essential to review patient records with the clinical team.

We should understand which estimands depend on stronger assumptions.

We should be clear about which problems statistical methods can solve—and which they cannot.

More importantly, we should be able to explain to the clinical team:

**What exactly do we know, what do we not know, and, given those limitations, which decisions can we still responsibly make?**

Statistics cannot create clinical facts that were never observed.

But statistics can help us make use of the available information, articulate assumptions, quantify uncertainty, and judge whether a conclusion is sufficiently robust.

That is the fundamental value of missing-data methodology.

The issue is not whether we use MMRM, MI, or another method.

The issue is whether we apply those methods to the right clinical question.

I would therefore organize the logic of missing-data analysis as follows:

**Clinical decision**

↓

**Clinical question and estimand**

↓

**Required observations and evidence sources**

↓

**Missingness diagnosis and intercurrent-event assessment**

↓

**Recovery of real clinical evidence where feasible**

↓

**Explicit identification assumptions and statistical estimation**

↓

**Clinically informed sensitivity analysis**

↓

**Evidence credibility and decision robustness**

↓

**Transparent interpretation and clinical action**

Within this workflow, the statistical estimator remains extremely important.

But it is not the starting point.

The true starting point is the clinical question we seek to answer.

And the true endpoint is not a complete data matrix, an attractive results table, or a statistically significant p-value.

It is to provide evidence that is as reliable, transparent, and interpretable as possible for real clinical decisions.

**The goal is not to make every randomized patient contribute an imputed value. The goal is to make the strongest defensible inference for the clinical question, while being transparent about what was never observed.**

That is the principle I hope clinical trial statisticians will always uphold when dealing with missing data.

---

## Further Reflection: A Question Worth Asking Ourselves Regularly

The next time someone hands us a dataset with missing outcomes and asks:

“Which imputation method should we use?”

Perhaps we should first ask a different question:

**“Before deciding how to impute the missing outcomes, can we first understand what happened to these patients, what information we truly need, and whether that information is still obtainable?”**

Only when we can answer that question does the subsequent missing-data analysis often become truly meaningful.

---

## References and Further Reading

1. International Council for Harmonisation. *ICH E9(R1): Addendum on Estimands and Sensitivity Analysis in Clinical Trials.* 2019.  
   https://database.ich.org/sites/default/files/E9-R1_Step4_Guideline_2019_1203.pdf

2. National Research Council. *The Prevention and Treatment of Missing Data in Clinical Trials.* National Academies Press, 2010.  
   https://doi.org/10.17226/12955

3. European Medicines Agency. *Guideline on Missing Data in Confirmatory Clinical Trials.* 2010; effective 2011.  
   https://www.ema.europa.eu/en/scientific-guidelines/missing-data-confirmatory-clinical-trials

4. Kahan BC, Hindley J, Edwards M, et al. *The estimands framework: a primer on the ICH E9(R1) addendum.* BMJ. 2024;384:e076316.  
   https://doi.org/10.1136/bmj-2023-076316

*This article is a personal methodological discussion of clinical trial statistical workflows. It aims to explain how missing-data handling can be connected to clinical questions, evidence collection, and decision-making, rather than to propose a new theory of missing-data estimation.*
