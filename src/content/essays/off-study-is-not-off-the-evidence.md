---
title: 'Off Study Is Not Off the Evidence: Who Belongs in the Survival Analysis?'
description: 'Time Zero, Analysis Populations, Follow-up, and Informative Censoring in Clinical Trials'
pubDate: 2026-11-02
topics:
  - Clinical Trials
  - Evidence & Decisions
  - Oncology & Rare Diseases
draft: false
featured: false
---

## A Patient Dies After Leaving the Trial. Does the Death Count?

Imagine a clinical trial investigating a new treatment strategy for a serious pediatric disease.

The treatment involves several steps. Patients are randomized first, receive a preliminary treatment, and subsequently proceed to an investigational therapy if they remain clinically eligible.

Now consider one patient.

**A hypothetical patient timeline**

| Day | What happens |
| --- | --- |
| **Day 0** | The patient is randomized. The overall survival clock begins. |
| **Day 5** | The patient receives preliminary treatment and satisfies the protocol's evaluability definition. |
| **Day 65** | The disease worsens. The patient becomes ineligible for investigational therapy and comes off study. |
| **Day 100** | The patient dies. |

The trial's primary endpoint is overall survival (OS), defined as the time from randomization to death from any cause.

Should this patient's death on Day 100 contribute to the primary survival analysis?

The answer depends on the intended estimand, analysis population, and available outcome information. But consider two possibilities.

**Scenario A: Survival follow-up continues.**

Although the patient is no longer receiving protocol treatment, the study continues to ascertain survival status through permitted follow-up procedures. The death on Day 100 is recorded and counted as an OS event.

**Scenario B: Follow-up stops at Day 65.**

The patient leaves the study, and no further survival information is obtained. The study knows the patient was alive on Day 65, but does not ascertain the subsequent death.

If the patient remains in the analysis, their observed survival time may be right-censored on Day 65.

This does not mean the patient disappears from the Kaplan–Meier analysis. They still contribute information through Day 65. What is missing is the later survival experience.

That distinction matters.

If patients who deteriorate clinically are more likely to stop follow-up, and those same patients are also more likely to die soon afterward, a conventional survival analysis may overestimate survival.

However, early censoring does not inevitably produce upward bias. The direction and magnitude depend on the relationship between censoring, prognosis, and the survival outcomes that remain unobserved.

The more fundamental question is whether the trial's outcome-collection process can support the survival estimand it intends to estimate.

## Leaving Treatment Is Not the Same as Leaving the Evidence

Clinical trial protocols use several terms that sound similar but describe different circumstances.

**Off protocol treatment** means the patient has stopped receiving the intervention specified in the protocol. They may still participate in follow-up assessments and contribute outcome information.

**Off study** is more ambiguous. Some protocols use it to indicate the end of active treatment participation; others use it to mean that all study participation and data collection have ended. Its operational meaning must be explicitly defined.

**Treatment withdrawal** refers to discontinuing an intervention. It does not necessarily imply withdrawal from every research activity.

**Withdrawal of consent** concerns the participant's permission to continue participating. The scope of withdrawal matters: a participant or legally authorized representative may decline further treatment while agreeing to certain follow-up procedures, or may withdraw from all research participation.

**Loss to follow-up** means that outcome information cannot be obtained as planned. It is not synonymous with treatment discontinuation or an investigator-directed decision to stop treatment.

**Exclusion from the primary analysis** is a separate statistical decision about whether a participant belongs to the prespecified analysis population.

**Right censoring** represents incomplete observation of a time-to-event outcome. It records that the event had not occurred by the last time the participant was known to be event-free, without asserting what happened afterward.

Finally, **death is an OS event** when the endpoint is death from any cause and the death is observed within the relevant analysis framework.

These distinctions are not merely linguistic.

A participant may stop experimental treatment, begin another therapy, and remain under survival follow-up. Another participant may withdraw from all research contact, while information already collected remains available for analysis where permitted.

A third may complete treatment exactly as planned but subsequently become genuinely lost to follow-up.

The statistical consequences differ.

Importantly, continuing follow-up is never a justification for overriding a participant's rights. Consent, privacy protections, institutional review board requirements, and applicable regulations determine which activities are permitted. In pediatric research, parental permission and assent requirements also warrant appropriate attention.

The goal is to plan ethically permissible outcome ascertainment—not to collect data without authorization.

## Who Belongs in the Primary Analysis?

Return to the hypothetical trial.

Four populations might be considered:

1. All randomized patients.
2. Randomized patients who receive at least one preliminary treatment.
3. Patients who successfully receive the investigational therapy.
4. Patients who complete the prescribed treatment course.

These populations are not interchangeable.

If the question is the effect of assigning patients to a treatment strategy beginning at randomization, the first population is generally the most natural starting point.

That strategy may include preliminary therapy, waiting periods, reassessment, and the possibility that some patients never receive the experimental intervention.

Failure to reach the investigational treatment is then part of what happens under the assigned strategy.

But researchers may also have a legitimate question about outcomes among patients who actually initiate therapy, or among patients who can tolerate a particular regimen.

Such questions require different estimands and potentially different designs or analytical methods.

The difficulty arises when membership in the analysis population is determined using information that becomes available only after randomization.

Consider patients selected because they successfully received investigational treatment.

By definition, these patients survived and remained sufficiently eligible to reach treatment initiation. Patients who died or deteriorated before that point cannot enter this selected group.

If survival is then measured from the original randomization date, the period before treatment receipt can create *guarantee-time bias*, also called *immortal time bias*. Membership in the treated group requires surviving long enough to receive treatment.

More broadly, conditioning on post-randomization treatment receipt or continued eligibility can create survivor selection and undermine the comparability originally established through randomization.

These related problems are not identical, and not every post-randomization restriction creates the same bias. Their consequences depend on the scientific question, the selection mechanism, and the analytical design.

Giobbie-Hurder, Gelber, and Regan provide an especially useful discussion of guarantee-time bias in oncology survival analyses.

A possible alternative is to define eligibility and time zero at actual treatment initiation, if that matches the scientific question and the design permits it. Landmark analyses or appropriate time-dependent approaches can address other questions.

But these approaches do not automatically recover the effect of assignment from the original randomization date.

**Changing the analysis population can change the question being answered—even when the endpoint is still called overall survival.**

## Treatment Discontinuation Is an Estimand Question

The ICH E9(R1) framework helps distinguish the clinical question from the statistical method used to answer it.

An estimand describes the treatment effect of interest through attributes including the treatment conditions, target population, endpoint, population-level summary, and handling of relevant intercurrent events.

An *intercurrent event* occurs after treatment initiation and affects the interpretation or existence of measurements relevant to the clinical question.

Examples include treatment discontinuation, switching therapy, or receiving an additional intervention.

ICH E9(R1) distinguishes several strategies.

Under a **treatment-policy strategy**, the endpoint is evaluated regardless of specified intercurrent events. For example, survival after treatment discontinuation or subsequent therapy remains relevant when comparing the overall consequences of the initially assigned strategies.

Under a **hypothetical strategy**, the question concerns what outcomes would have occurred under a specified alternative scenario—for example, if treatment switching had not occurred. Such analyses require assumptions about outcomes that cannot be directly observed.

A **while-on-treatment strategy** focuses on outcomes during a defined period of treatment exposure. This may be useful for some safety or symptom outcomes, but it does not automatically answer a question about overall survival from randomization.

A **principal-stratum strategy** focuses on a population defined by potential occurrences or nonoccurrences of intercurrent events under specified treatment conditions. Such a population is not generally equivalent to simply selecting patients who actually received or completed therapy.

For our hypothetical trial, failure to initiate investigational therapy may be an intercurrent event requiring an explicit strategy, or it may already be accommodated by the definition of the overall treatment regimen.

The distinction depends on the intended estimand.

There is also an essential distinction involving death.

When overall survival is defined as time to death from any cause, **death is the endpoint event itself**. It is not an intercurrent event that should automatically trigger censoring.

Death may instead be an intercurrent event for another endpoint, such as a symptom score that cannot be measured after death.

Similarly, treatment discontinuation and study withdrawal should not be conflated. ICH E9(R1) distinguishes treatment-related intercurrent events from study withdrawal that produces missing outcome information.

This framework does not require every trial to choose a treatment-policy estimand. It requires the chosen strategy to reflect a clinically meaningful question and the analysis to support that question.

## What Does Kaplan–Meier Censoring Actually Do?

Kaplan–Meier estimation uses information from participants with observed events and those whose event times are incompletely observed.

Suppose a patient is known to be alive through Day 65 but has no further survival information.

The analysis does not assume that the patient died on Day 65. Nor does it assume that the patient survived indefinitely.

Instead, the patient contributes to the risk sets before censoring and is removed from risk sets for subsequent event times.

In a conventional Kaplan–Meier analysis, the validity of this procedure depends on an appropriate independent-censoring assumption.

Intuitively, patients who are censored should not have systematically different future survival prospects from comparable patients who remain under observation, in ways that invalidate the estimator.

The precise assumption depends on the estimator and any conditioning or adjustment used.

Consider two kinds of censoring.

**Administrative censoring** occurs, for example, when a study reaches its planned analysis cutoff and a participant remains alive. This is often compatible with independent censoring, although the assumption is not automatic—for example, when follow-up duration is related to calendar-time changes in prognosis.

**Clinically triggered censoring** occurs when follow-up ends because a patient's condition worsens. Here, the reason for stopping observation may itself predict the risk of death.

If patients who are deteriorating disproportionately leave follow-up, the remaining observed patients may have better prognoses than those censored.

The Kaplan–Meier curve can consequently be too optimistic.

The reverse direction is possible when censoring disproportionately removes lower-risk patients. Other patterns can create more complicated distortions.

In randomized comparisons, differential informative censoring can also undermine the interpretation of log-rank tests and treatment-effect estimates, even when baseline randomization was correctly implemented.

Randomization does not guarantee that later outcome observation is independent of prognosis.

## Censoring Can Be Correct—and the Evidence Still Incomplete

Censoring is not, by itself, a statistical mistake. If a patient's subsequent survival status is genuinely unknown, censoring at the last date they were known to be alive is the appropriate way to represent the available data.

But correct data handling does not necessarily guarantee valid inference. If patients are more likely to stop being followed because their condition is deteriorating, censoring may be informative.

There is also an earlier design question: Could the study have continued to ascertain survival, even after the patient stopped treatment or came off study, where consent and applicable requirements allowed?

A known death should not be treated as a censored observation simply because the patient is no longer receiving study treatment.

This distinction separates three questions that are easy to conflate: whether the observed data are recorded correctly, whether the statistical assumptions support valid inference, and whether the study was designed to obtain the information necessary for its intended estimand.

**The question is not only whether we censor correctly, but whether we designed the trial to collect the outcomes needed to answer its scientific question.**

## A Ten-Patient Thought Experiment

Consider a deliberately simplified example with ten patients followed from Day 0.

Nobody dies before Day 65.

On Day 65, three patients deteriorate and stop participating in follow-up. Of these three patients, two actually die by Day 100, while one survives beyond Day 100.

Among the other seven patients, one dies on Day 90 and six remain alive through Day 100.

If survival outcomes are available for everyone, seven of the ten patients are alive beyond Day 100.

The Kaplan–Meier survival estimate at Day 100 is:

**70%.**

Now imagine that follow-up information is unavailable after Day 65 for the three patients who deteriorated.

They are censored at Day 65.

The remaining seven patients form the risk set immediately before the Day 90 death. One death occurs among those seven.

The resulting Kaplan–Meier estimate at Day 100 is:

**6/7, or approximately 85.7%.**

| Outcome ascertainment | Estimated survival at Day 100 |
| --- | ---: |
| Complete survival follow-up | 70.0% |
| Three deteriorating patients censored on Day 65 | 85.7% |

These figures are hypothetical, not empirical evidence of bias in a clinical trial.

The example illustrates how selective loss of survival information can change the estimate. The numerical difference arises because patients censored after deterioration are not representative of those remaining under observation.

Censoring itself does not establish bias; its relationship to subsequent, potentially unobserved outcomes is the crucial issue.

## Why Early Randomization May Not Be Enough

Randomizing before investigational treatment begins can be scientifically valuable.

It allows investigators to evaluate a complete treatment strategy, including barriers to reaching the planned intervention.

It can also avoid selecting patients solely because they successfully survived and remained eligible until treatment initiation.

But early randomization provides only part of the protection.

Suppose a trial randomizes patients on Day 0 and defines OS from Day 0, yet excludes patients from the primary analysis if they never receive investigational therapy.

The analysis may still condition on survival and eligibility after randomization.

Alternatively, suppose all randomized patients remain eligible for analysis, but patients who deteriorate before investigational treatment routinely stop survival follow-up.

The resulting analysis may suffer from prognosis-related censoring.

These are distinct potential problems: selection into the analysis population and incomplete ascertainment of the endpoint.

Neither is established merely by observing an off-study rule.

The relevant questions are how the rule is implemented, which patients remain in the analysis, whether survival information continues to be obtained, and whether the assumptions supporting the estimator are plausible.

An early time zero does not, by itself, ensure that the intended survival contrast will be estimated reliably.

## When Different Protocol Sections Tell an Incomplete Story

Clinical trial protocols are written in sections, but patients experience the trial as a continuous sequence of events.

A protocol might define OS from randomization, establish an evaluable population, permit discontinuation before experimental therapy, and specify censoring at the last-known-alive date.

None of these provisions is necessarily incorrect.

Yet uncertainty remains if the protocol never explains whether survival follow-up continues after active treatment participation ends.

A useful review approach is to connect the relevant components.

| Protocol component | What should be checked? |
| --- | --- |
| **Eligibility** | Who may enter the trial, and are additional eligibility requirements imposed after randomization? |
| **Time zero** | When does the OS clock begin, and does that date match the intended clinical question? |
| **Analysis population** | Are all randomized patients included, or does inclusion depend on subsequent treatment receipt or evaluability? |
| **Off-treatment/off-study criteria** | What circumstances stop treatment, and which specifically end further research participation? |
| **Survival follow-up** | Are OS outcomes sought after treatment discontinuation, ineligibility, or subsequent therapy, where permitted? |
| **CRF and database** | Can the system distinguish treatment discontinuation, study withdrawal, last-known-alive date, and confirmed death? |
| **Statistical analysis** | How are deaths, censoring, exclusions, and missing survival information handled, and what assumptions are required? |

The operational chain is:

**Clinical objective → Estimand → Analysis population → Treatment-discontinuation rules → Survival follow-up → Data capture → Statistical analysis**

This sequence matters because statistical analysis cannot manufacture outcome information that was never collected.

A sophisticated censoring rule may be mathematically well specified while the study lacks adequate procedures for ascertaining clinically important outcomes.

This is a design and conduct problem before it becomes a statistical problem.

The CONSORT 2025 reporting guideline reinforces these distinctions by separately addressing allocation, receipt of intervention, losses to follow-up, exclusions after randomization, analysis populations, and missing-data methods.

Although CONSORT is a reporting guideline rather than a substitute for protocol development, these categories provide a practical framework for evaluating whether a trial can transparently account for its participants and their outcomes.

## What Can Be Done About Informative Censoring?

The best strategy is often to prevent avoidable missing outcome information.

When scientifically appropriate and ethically permitted, trials can plan survival ascertainment after treatment discontinuation through low-burden follow-up, authorized medical-record review, or other approved sources.

The protocol should specify the permissible mechanisms, frequency, responsibilities, and documentation requirements.

When incomplete follow-up cannot be avoided, investigators should examine the amount, timing, and reasons for censoring, including differences between treatment groups and associations with measured prognostic factors.

Sensitivity analyses can explore how conclusions change under alternative assumptions about unobserved outcomes.

Inverse probability of censoring weighting (IPCW) is another possible approach. It uses information about observed patient characteristics and histories to account for differences in the probability of remaining under observation.

However, such approaches require assumptions, including adequate measurement of relevant predictors of censoring and survival, sufficient probabilities of continued observation, and appropriate modeling.

If important factors determining both censoring and mortality are unmeasured, weighting may not eliminate bias.

Methodological work by Scharfstein and Robins illustrates approaches that address censoring related to measured prognosis while examining sensitivity to residual dependence.

A statistical adjustment should not be interpreted as automatically recovering deaths that were never observed.

The priority remains collecting the information required by the estimand whenever feasible and permissible.

## A Reviewer Does Not Need to Declare the Protocol Invalid

Imagine encountering the hypothetical Day 65 situation during protocol review.

One response might be to claim that patients who come off study are being incorrectly excluded or that the OS analysis must be biased.

But this may be premature.

The protocol could already allow continued survival follow-up through procedures described elsewhere. The patients may remain in the analysis, and their later deaths may be captured appropriately.

Alternatively, the intended estimand may legitimately target a different population or treatment strategy.

A more productive review question is:

> If a patient becomes ineligible before receiving the investigational treatment and comes off study, will that patient remain in the primary OS analysis, and will survival follow-up continue where permitted?

The answer may resolve the issue immediately—or identify a gap requiring clarification.

Before trial activation, investigators, statisticians, and clinical research teams can apply several practical checks:

- Trace a hypothetical patient who deteriorates or dies before receiving investigational treatment.
- Verify whether treatment discontinuation, study withdrawal, and consent withdrawal are distinguished in the protocol and participant-disposition records.
- Confirm that the primary analysis population is defined without unintended post-randomization selection.
- Specify how survival status and dates will be ascertained after treatment discontinuation, including any consent limitations.
- Check that CRFs and database fields can represent the different clinical and follow-up states.
- Prespecify censoring conventions, describe key assumptions, and plan appropriate sensitivity analyses.

These checks are useful precisely because they connect statistical reasoning with trial operations.

## Four Conclusions That Should Not Be Confused

When reviewing a protocol, it helps to distinguish four levels of concern.

**A legitimate estimand difference:** The investigators intentionally target a particular population or treatment strategy, and the design and analysis appropriately support that question.

**A protocol ambiguity:** The documents do not clearly establish whether certain patients remain in the analysis or under follow-up. Clarification is needed, but a statistical problem has not yet been demonstrated.

**A potential or actual assumption violation:** The censoring process depends on prognosis in a manner incompatible with the chosen estimator. Establishing such a violation requires more than observing that some patients were censored.

**Evidence of bias:** Additional information, an analytical argument, or a sensitivity assessment supports a conclusion that the estimator is distorted, potentially with a particular direction and magnitude.

Moving from ambiguity directly to a declaration of bias skips important scientific reasoning.

Good protocol review should be critical without being presumptive.

## Conclusion: A Trial's Evidence Extends Beyond Its Treatment

Clinical trials are often organized around treatment milestones: eligibility, randomization, treatment initiation, completion, and discontinuation.

But the evidence generated by a trial does not necessarily end when protocol treatment stops.

For a survival endpoint defined from randomization, outcomes after treatment discontinuation may be essential to understanding the clinical consequences of assigning patients to a treatment strategy.

A patient who never receives the investigational therapy may still provide important information about that strategy. A patient who becomes ineligible may still belong in the primary analysis. And a patient who is censored has contributed observed survival time, even though their later outcome is unknown.

The challenge is to determine which information the scientific question requires—and then design an ethical, feasible system to collect and analyze it.

Time zero, randomization, evaluability, discontinuation rules, follow-up, and censoring are related parts of that system. None can substitute for the others.

Perhaps the most important lesson is also the simplest:

**A patient can leave protocol treatment without leaving the evidence base. But whether that evidence remains available depends on decisions made long before the survival curve is drawn.**

---

## References and Further Reading

1. International Council for Harmonisation. (2019). *ICH E9(R1): Addendum on Estimands and Sensitivity Analysis in Clinical Trials to the Guideline on Statistical Principles for Clinical Trials.* Adopted November 20, 2019. [Official ICH guideline](https://database.ich.org/sites/default/files/E9-R1_Step4_Guideline_2019_1203.pdf).
2. Hopewell S, Chan AW, Collins GS, et al. (2025). CONSORT 2025 Statement: Updated Guideline for Reporting Randomized Trials. *JAMA*, 333(22), 1998–2005. [https://doi.org/10.1001/jama.2025.4347](https://doi.org/10.1001/jama.2025.4347).
3. National Research Council. (2010). *The Prevention and Treatment of Missing Data in Clinical Trials.* Washington, DC: National Academies Press. [https://doi.org/10.17226/12955](https://doi.org/10.17226/12955).
4. U.S. Food and Drug Administration. (2025). *Approaches to Assessment of Overall Survival in Oncology Clinical Trials.* Draft Guidance for Industry, August 2025. [FDA guidance page](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/approaches-assessment-overall-survival-oncology-clinical-trials). **Draft, not for implementation.** The guidance primarily addresses randomized oncology trials, particularly OS assessment as a safety endpoint.
5. Giobbie-Hurder A, Gelber RD, Regan MM. (2013). Challenges of Guarantee-Time Bias. *Journal of Clinical Oncology*, 31(23), 2963–2969. [https://doi.org/10.1200/JCO.2013.49.5283](https://doi.org/10.1200/JCO.2013.49.5283).
6. Scharfstein DO, Robins JM. (2002). Estimation of the Failure Time Distribution in the Presence of Informative Censoring. *Biometrika*, 89(3), 617–634. [https://doi.org/10.1093/biomet/89.3.617](https://doi.org/10.1093/biomet/89.3.617).
7. U.S. Department of Health and Human Services, Office for Human Research Protections. (2010). *Guidance on Withdrawal of Subjects from Research: Data Retention and Other Related Issues.* [Official HHS guidance](https://www.hhs.gov/ohrp/regulations-and-policy/guidance/guidance-on-withdrawal-of-subject/index.html).
8. U.S. Food and Drug Administration. (2008). *Data Retention When Subjects Withdraw from FDA-Regulated Clinical Trials: Guidance for Sponsors, Clinical Investigators, and IRBs.* [Official FDA guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/data-retention-when-subjects-withdraw-fda-regulated-clinical-trials).

*Editorial note: All patient details and numerical examples are hypothetical and are provided solely for methodological education. No confidential protocol or unpublished trial evidence is discussed.*
