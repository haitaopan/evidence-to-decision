---
title: 'Is a Digital Twin Just a Prediction Model with a Better Name?'
description: 'What children with rare diseases can teach us about prediction, simulation, and causal evidence.'
pubDate: 2026-10-29
topics:
  - Clinical Trials
  - Evidence & Decisions
  - Oncology & Rare Diseases
  - AI & Methods
draft: false
featured: false
---

Imagine a nine-year-old boy with Duchenne muscular dystrophy (DMD), a rare genetic disorder that progressively weakens his muscles.

He can still walk, but his family and clinicians know that his physical abilities may decline over time. A new treatment is being studied, and everyone hopes it might slow the progression of his disease.

Before treatment begins, researchers use his clinical information to predict how far he will be able to walk 48 weeks later if he continues his current background care without the investigational drug.

The prediction is 330 meters.

The researchers call this prediction his *Digital Twin*.

But what exactly makes it a twin?

Is it a new type of statistical model? A virtual representation of the child? A simulation of his future? Or simply an individualized prediction given a more compelling name?

The question is not merely about terminology.

If the Digital Twin predicts how a child might progress without a new treatment, and the child subsequently does better than predicted, we may be tempted to interpret the difference as evidence that the treatment worked.

That interpretation involves a much larger scientific step than generating the original prediction.

To understand why, we first need to ask what a Digital Twin actually is—and what it adds to the prediction models clinicians and statisticians have used for decades.

## Prediction Was Already Personal

A prediction model uses information available today to estimate an outcome that has not yet occurred.

In medicine, these models are familiar. They estimate the probability of disease recurrence, the risk of treatment complications, expected survival, or the progression of a chronic illness.

For example, a model may use age, disease severity, previous treatments, and laboratory measurements to predict a patient's future health.

Importantly, a conventional prediction model can already produce a prediction for an individual patient.

There is nothing fundamentally new about entering one patient's characteristics into a model and obtaining that patient's predicted outcome.

We can express the distinction simply:

**Prediction model:** Patient characteristics → predicted outcome.

**Individualized prediction:** This patient's characteristics → this patient's predicted outcome.

The second is more specific in its application, but it is not necessarily a new statistical model.

Nor does prediction have to produce just one number.

A model can provide a probability distribution describing possible future outcomes. Rather than predicting that a child will walk exactly 330 meters, it might predict an average of 330 meters while acknowledging substantial uncertainty around that estimate.

This is *predictive inference*: using a model to describe what may happen, including the uncertainty associated with future outcomes.

Statistical methods have long supported such predictions through regression, longitudinal models, Bayesian models, and other approaches.

A model can also predict an entire disease trajectory rather than a single outcome. It may estimate how walking ability changes at weeks 12, 24, 36, and 48. It may simulate progression under different assumptions about disease severity or supportive care.

More sophisticated models can incorporate physiological mechanisms, biological pathways, and interactions among multiple organ systems.

These capabilities can be scientifically demanding and clinically valuable.

But none requires the term *Digital Twin*.

The important question, then, is what the Digital Twin concept adds beyond the predictive or simulation model itself.

## What Makes a Digital Twin a Twin?

There is no universally accepted definition of a medical Digital Twin.

The [National Academies' 2024 report](https://www.nationalacademies.org/read/26894/chapter/2) emphasizes a virtual representation that is dynamically updated using information from its real-world counterpart, can make predictions, and supports decisions. Interaction in both directions—information flowing into the virtual system and its outputs informing the real system—is central to that definition.

Under this relatively strict interpretation, a model that generates a single prediction and is never updated would not constitute a fully functioning Digital Twin.

However, clinical researchers have proposed more flexible definitions.

In a [2024 scoping review](https://doi.org/10.2196/58504), David Drummond and Apolline Gonsard distinguished between *simulation patient Digital Twins*, which often provide personalized simulations at a particular point in time, and *monitoring patient Digital Twins*, which incorporate continuing information to update predictions and support care.

Their review identified 80 distinct systems described as patient Digital Twins in studies published through August 2023. Only 11% involved two-way data flow between patients and their virtual counterparts.

The findings illustrate how differently researchers have used the same term.

Other authors emphasize the architecture of the system itself.

In [The Lancet Digital Health](https://doi.org/10.1016/j.landig.2025.02.004), Sadée and colleagues described five connected components: the patient, a data connection, a computational representation of the patient, an interface through which the representation can be used, and synchronization between the patient and the virtual system.

That description captures something important.

A Digital Twin may be much more than a model generating a numerical forecast. It may be an organized system that connects clinical measurements, patient-specific representations, simulations, and decisions.

And the computational models inside that system need not all be conventional statistical prediction models.

Some may be mechanistic models describing physiological processes through mathematical equations. Others may integrate imaging, genomics, longitudinal observations, and machine learning. As [De Domenico and colleagues](https://doi.org/10.1038/s41746-024-01402-3) have argued, mechanistic and multiscale modeling can provide opportunities to investigate biological behavior and possible interventions.

Such capabilities should not be dismissed as mere rebranding.

Nevertheless, a sophisticated model does not automatically become a Digital Twin simply because it incorporates many variables or produces impressive visualizations.

A useful distinction is emerging:

**The model may be the engine; the Digital Twin is the patient-linked system built around it.**

This is not a universal definition. Some researchers use the term more broadly, while others insist on continuous synchronization and feedback.

But it offers a practical way to understand what may be genuinely different.

The scientific contribution may lie not in inventing an entirely new statistical model, but in linking computational representations to particular patients, maintaining those representations as new information arrives, and using them within a clinical decision process.

## A Simple Test: What Changes If We Remove the Name?

Here is a practical question I would ask whenever I encounter a medical Digital Twin:

**If I replace the term "Digital Twin" with "patient-specific prediction model," does anything scientifically important change?**

Consider three situations.

In the first, researchers use baseline clinical characteristics to predict a patient's outcome at 48 weeks. The model is applied once, produces a number, and is not subsequently updated.

Calling that prediction a Digital Twin may add little scientific information. The work may still be valuable, but its principal capability is individualized prediction.

In the second, researchers construct a patient-specific physiological representation incorporating anatomy, disease mechanisms, and individual measurements. The system can simulate how different treatment strategies might affect relevant physiological processes.

Now the replacement loses something. A simple description as a prediction model may not adequately communicate the system's mechanistic representation or ability to explore different scenarios.

In the third, a virtual representation is continuously—or periodically—updated as the patient's condition changes. New measurements alter the simulated state, predictions are revised, and the outputs inform subsequent clinical decisions.

Here, the distinction becomes more substantial. The system is not merely issuing a forecast; it is maintaining a relationship between a real patient, evolving information, and decision-making.

Even so, dynamic prediction and model updating are not new statistical inventions. Their value depends on whether the patient linkage and feedback process produce more reliable or useful decisions.

The test therefore has two parts.

First, identify what capability is genuinely added.

Second, determine whether that capability has been shown to work reliably for its intended purpose.

A new capability is not the same thing as evidence that the capability improves clinical care.

## One Child, Three Predictions—and a Tempting Fourth Claim

Return to our nine-year-old boy with DMD.

His baseline six-minute walk distance (6MWD)—the distance he can walk in six minutes—is 390 meters.

He receives corticosteroid therapy as part of his background care.

Researchers want to understand how his walking ability might change over the next 48 weeks without the investigational drug.

This is a reasonable clinical question. DMD natural-history studies have documented substantial variation in walking trajectories, associated with factors such as age, baseline function, and corticosteroid treatment.

For illustration, consider three progressively richer modeling approaches.

### Level 1: A point prediction

A model uses the child's characteristics to predict his 48-week 6MWD under continued background care:

**Predicted 48-week 6MWD: 330 meters.**

This suggests a decline of 60 meters from his baseline of 390 meters.

The prediction is personalized in the sense that it uses information about this child. But it remains a statistical forecast.

It does not tell us exactly what will happen.

### Level 2: Predictive inference

Instead of reporting only 330 meters, the model provides an uncertainty interval:

**Predicted 48-week 6MWD: 330 meters.**

**80% predictive interval: 270–385 meters.**

The interval acknowledges that different outcomes remain possible, even among children with similar measured characteristics.

If the predictive distribution is appropriately calibrated, such intervals should achieve their stated coverage when evaluated across comparable patients under the specified care strategy.

This is more informative than a point estimate.

But the interval describes uncertainty about the child's future walking ability under the modeled conditions. It does not describe uncertainty about a treatment effect.

### Level 3: A simulation Digital Twin

Now suppose researchers construct a virtual representation of this child.

The representation incorporates baseline function, age, steroid exposure, and other relevant clinical information. It produces a projected trajectory at several time points over 48 weeks.

Perhaps it also simulates how that trajectory would change under different assumptions about disease progression or supportive care.

This may reasonably be described as a simulation Digital Twin under some clinical definitions.

But its predicted untreated trajectory remains a model-generated representation of what might happen.

Even if the simulation is complex, individualized, and biologically plausible, it is not automatically a record of what would actually have happened.

### The tempting fourth claim

Now imagine that the child receives the investigational drug.

After 48 weeks, his observed 6MWD is 370 meters.

His walking distance declined by 20 meters, rather than the 60 meters forecast under background care alone.

The arithmetic is simple:

**Observed outcome: 370 meters.**

**Predicted outcome without investigational treatment: 330 meters.**

**Difference: +40 meters.**

It is tempting to conclude that the treatment preserved 40 meters of walking ability.

But that conclusion requires a fundamentally different kind of evidence.

*This is a hypothetical example for illustrating the statistical argument. The patient, model outputs, predictive interval, and observed treatment outcome are not derived from a real clinical dataset or validated Digital Twin.*

## A Prediction Is Not the Missing Untreated Outcome

The central problem is that we cannot observe two different treatment histories for the same child over the same 48 weeks.

We can observe his walking ability after receiving the investigational drug.

We cannot simultaneously observe how far he would have walked if he had continued the specified background care without that drug.

That missing outcome is called a *counterfactual outcome*: what would have occurred under an alternative treatment strategy.

The treatment effect for this particular child is conceptually the difference between those two outcomes.

But we only observe one of them.

A prediction model attempts to fill the gap using information from other patients, assumed disease mechanisms, or both.

That can be useful. It may even provide a credible estimate of the *average* untreated outcome among patients with similar measured characteristics.

However, the predicted average untreated outcome is not necessarily the actual untreated outcome that this particular child would have experienced.

Even among children with the same age, baseline function, and steroid regimen, some may decline quickly while others remain relatively stable.

A model can predict their average outcome accurately while being unable to determine which trajectory this particular child would have followed.

This explains why the +40-meter difference is not automatically an individual treatment effect.

The distinction is not simply that the prediction is uncertain. It is that the causal question requires us to justify why the modeled outcome represents the correct alternative treatment history.

Suppose a model has excellent predictive accuracy among historical patients who received background care without the investigational drug.

That is encouraging.

But it does not, by itself, establish that its predictions can be interpreted as valid untreated counterfactuals for children enrolled in a new treatment study.

The historical patients might differ in disease severity, functional status, steroid regimens, standards of supportive care, or other factors that influence disease progression.

Some differences may be measured and adjusted for. Others may be unrecorded.

Even the starting point of follow-up matters. A historical trajectory beginning at an arbitrary clinic visit may not be directly comparable with a trial trajectory beginning when a child becomes eligible for and starts a new treatment.

And the treatment strategies themselves must be clearly defined.

For our DMD example, "untreated" should not mean receiving no medical care. It should mean continuing a specified background treatment strategy—including appropriate corticosteroid care—without the investigational drug.

The outcome must also be defined consistently. Are we comparing absolute 6MWD at week 48, change from baseline, or another measure? How are loss of ambulation, inability to complete the test, treatment discontinuation, and missing assessments handled?

These choices determine what treatment effect the study is actually trying to estimate.

Statisticians describe the required causal conditions using terms such as *consistency*, *exchangeability*, *positivity*, and *transportability*.

Their practical meanings are straightforward.

We need sufficiently well-defined treatment strategies so that the outcomes being compared correspond to the intended interventions. We need treatment groups or historical populations to be comparable with respect to factors affecting the outcome, after appropriate adjustment. We need relevant types of patients to be represented under the treatment strategies being compared. And we need evidence that the relationships learned from historical populations still apply to the present trial population.

None of these conditions is guaranteed by calling the prediction a Digital Twin.

**Calling a prediction a Digital Twin does not turn predictive accuracy into causal validity.**

This does not mean that a Digital Twin can never support causal inference.

A model can be explicitly designed to represent alternative interventions, incorporate causal assumptions, and estimate treatment effects. A combination of mechanistic knowledge, patient data, and appropriate study design may strengthen a causal argument.

But those assumptions must be made explicit, examined, and tested where possible.

The name of the system cannot do that work for us.

There is also an important distinction between individual and population conclusions.

Even if researchers can credibly estimate the average untreated outcome for a group of treated children, that does not mean they have established the treatment benefit for each particular child.

An appropriately justified comparison between observed and modeled outcomes may support estimation of an average treatment effect.

It does not automatically reveal every child's individual treatment effect.

## Why the Same Prediction Can Be Useful in One Trial and Insufficient in Another

This distinction becomes especially important in clinical trials.

A Digital Twin prediction can play very different roles depending on the study design.

Consider a randomized trial in which some patients receive the investigational drug and others receive the control treatment.

Before treatment begins, a model predicts each participant's expected outcome under control care.

Researchers can use that predicted outcome as a *prognostic covariate*—a summary of how well or poorly the patient would be expected to do, based on baseline information.

If the prediction explains meaningful variation in subsequent outcomes, including it in the statistical analysis may improve precision.

The trial may then estimate the treatment effect with less statistical noise.

Crucially, randomization still supplies the foundation for the causal comparison between treatment groups.

The Digital Twin prediction helps make the comparison more efficient; it does not have to serve as an observed control outcome.

This is not merely theoretical.

The [European Medicines Agency qualified the PROCOVA methodology in 2022](https://www.ema.europa.eu/en/documents/regulatory-procedural-guideline/qualification-opinion-prognostic-covariate-adjustment-procovatm_en.pdf) for a specified use of prognostic covariate adjustment in randomized clinical trials with continuous outcomes.

In a [2025 peer-reviewed analysis](https://doi.org/10.1002/trc2.70181), investigators from AbbVie and Unlearn evaluated AI-generated Digital Twin prognostic scores using Alzheimer's disease trial data. They reported reductions of approximately 9%–15% in residual variance with Digital Twin prognostic covariate adjustment and projected opportunities to improve future trial efficiency.

These results are promising, although estimated sample-size savings are projections rather than proof of prospective benefit across all clinical settings.

This is also an example of the gap between terminology and statistical function.

[Unlearn describes its Digital Twins](https://www.unlearn.ai/digital-twins) as individualized forecasts of trial participants' outcomes under control conditions. That is the company's terminology, not a universally accepted clinical definition.

The published prognostic-covariate application demonstrates a legitimate use for individualized predictions.

It does not establish that such predictions can routinely replace randomized control patients, nor does the EMA qualification amount to broad regulatory endorsement of all Digital Twin applications.

Now consider a different trial.

Suppose every enrolled child receives the investigational drug. There is no concurrent randomized control group.

Researchers use Digital Twin predictions to construct a virtual control comparison.

This time, the predictions play a much larger role.

They are no longer simply helping explain variation within an existing randomized comparison. They are being used to represent outcomes that were not observed in the trial.

The causal interpretation now depends heavily on whether the model and its source data provide a credible comparison under the intended alternative treatment strategy.

That is a much stronger requirement.

The same predicted number may be scientifically useful as a prognostic covariate in a randomized trial while being insufficient to establish treatment effectiveness in a single-arm study.

**What matters is not only how the prediction was generated, but also what the trial asks that prediction to prove.**

This is particularly relevant in rare diseases.

When recruitment is difficult and patients have limited treatment options, the attraction of virtual controls is understandable. Reviews by [Pammi and colleagues](https://doi.org/10.1016/j.landig.2025.01.007) and [Malik-Sheriff and colleagues](https://doi.org/10.1002/psp4.70234) discuss the opportunities for Digital Twins, synthetic data, and simulation in pediatric and rare-disease research.

The scientific motivation is compelling.

But the scarcity of patients does not eliminate the difference between predicting an outcome and identifying a treatment effect.

It makes understanding that difference even more important.

## What If the Digital Twin Keeps Learning?

A genuine monitoring Digital Twin may update its representation as new patient information becomes available.

Suppose our DMD patient has another walking assessment at week 24.

The Digital Twin incorporates this observation, revises its estimate of the child's current state, and updates its forecast for week 48.

This can be valuable for monitoring disease progression and supporting clinical decisions.

But an important question arises if the child has already started the investigational treatment.

The week-24 observation may itself have been influenced by the drug.

Using it to update a prediction of the child's future *under continued treatment* is one task.

Using it to reconstruct what would have happened *without the treatment* is another.

The latter requires a model capable of representing the alternative treatment history appropriately.

Simply feeding additional measurements into a prognostic algorithm may not achieve that.

Indeed, new information can improve prediction of the observed treatment course while making an untreated counterfactual more difficult to interpret if treatment-affected measurements are handled incorrectly.

This illustrates a broader point.

Continuous updating is an important capability, but it is not a substitute for a clearly defined causal question.

Nor does a feedback loop automatically establish clinical benefit.

If a Digital Twin influences treatment decisions, those decisions may change the patient's subsequent observations. Future validation must account for this interaction between prediction and clinical action.

The system is no longer merely forecasting the future. It may be participating in shaping it.

## What Evidence Should We Ask For?

The Digital Twin literature is increasingly moving toward this question.

Sel and colleagues, in a [2025 review](https://doi.org/10.1038/s41746-025-01447-y), emphasized the importance of verification, validation, and uncertainty quantification.

These concepts address related but different concerns.

*Verification* asks whether the computational system has been implemented correctly.

*Validation* asks whether the system adequately represents the real-world phenomenon for its intended use.

*Uncertainty quantification* asks how uncertain the outputs are, including uncertainty arising from measurements, model parameters, and model structure.

A prediction interval captures some of that uncertainty, but not necessarily all of it.

A model can be computationally correct yet clinically inappropriate. It can also make accurate predictions for patients similar to its development population while performing poorly in a different population or care setting.

Recent work has further emphasized that validation must match the clinical claim. In a [2026 Perspective](https://doi.org/10.3389/fdgth.2026.1908794), Alexandre Vallée distinguished the evidence requirements for descriptive, predictive, counterfactual, and interventional uses of medical Digital Twins. A separate [2026 Perspective](https://doi.org/10.1038/s41746-026-02871-4) by Ruhrberg Estévez and colleagues explored how Digital Twins and causal inference could complement each other across the clinical-trial lifecycle.

These discussions reinforce an important principle: a Digital Twin should be evaluated according to what it is expected to accomplish, not simply how sophisticated it appears.

If the claim is that the Digital Twin represents a patient's current clinical state, we should ask whether that representation is accurate.

If the claim is that it predicts future outcomes, we should ask whether the predictions are calibrated, externally validated, and accompanied by meaningful uncertainty estimates.

If the claim is that it simulates alternative treatments, we should ask whether those alternatives are well defined and whether the relevant biological and causal assumptions are credible.

If the claim is that it establishes treatment effectiveness, we need a defensible causal comparison, appropriate treatment-effect definitions, and analyses of the assumptions on which the conclusions depend.

And if the claim is that using the Digital Twin improves clinical decisions, we should seek evidence of actual clinical utility—whether decisions become safer, more effective, or otherwise better than they would have been without the system.

An impressive simulation is not the same thing as an improved patient outcome.

These standards should not be interpreted as requiring every Digital Twin to establish treatment effects or demonstrate clinical benefit before it can be useful.

A disease-monitoring tool and a virtual control for a pivotal trial serve different purposes. Their validation requirements should reflect those purposes.

The task is to match the evidence to the intended claim.

## The Promise Is Real. So Is the Distinction.

The Digital Twin concept offers an appealing vision for medicine.

A patient-linked computational system may bring together clinical observations, biological knowledge, disease-progression models, simulation, uncertainty assessment, and decisions in ways that conventional isolated models do not.

For children with rare diseases, such integration could be particularly valuable.

It may help researchers explore disease mechanisms, improve trial planning, forecast clinical outcomes, identify relevant patient differences, and investigate possible treatment strategies.

But we should also recognize that some systems described as Digital Twins are, in statistical terms, individualized prediction models.

That does not make those models unimportant.

A reliable prediction can be valuable without being described as a virtual patient. A carefully validated simulation can support clinical understanding without claiming to reveal an unobservable treatment effect.

The scientific problem arises when the terminology encourages us to claim more than the evidence supports.

For our child with DMD, a prediction of 330 meters may be useful. A predictive interval of 270–385 meters may be more informative. A patient-specific simulation may help us explore possible disease trajectories.

But if the child's observed outcome after treatment is 370 meters, the difference of 40 meters is not automatically proof that treatment preserved 40 meters of walking ability.

The missing untreated outcome remains missing.

A Digital Twin may help us estimate it, but the credibility of that estimate must come from the model, the data, the assumptions, the study design, and their validation.

Not from the name.

**A Digital Twin may be more than a prediction model. But calling a prediction a Digital Twin does not turn it into causal evidence.**

Perhaps the most useful question is therefore not whether a computational system deserves the title *Digital Twin*.

It is a more practical one:

**What can this system reliably tell us—and what clinical decision does that evidence actually justify?**

That is where prediction becomes evidence, and where evidence must earn its place in a decision.

---

## Selected References and Further Reading

1. National Academies of Sciences, Engineering, and Medicine. *Foundational Research Gaps and Future Directions for Digital Twins*. 2024. [Report](https://doi.org/10.17226/26894).
2. Drummond D, Gonsard A. Definitions and Characteristics of Patient Digital Twins Being Developed for Clinical Use: Scoping Review. *Journal of Medical Internet Research*. 2024. [DOI](https://doi.org/10.2196/58504).
3. Sadée C, et al. Medical digital twins: enabling precision medicine and medical artificial intelligence. *The Lancet Digital Health*. 2025. [DOI](https://doi.org/10.1016/j.landig.2025.02.004).
4. De Domenico M, et al. Challenges and opportunities for digital twins in precision medicine from a complex systems perspective. *npj Digital Medicine*. 2025. [DOI](https://doi.org/10.1038/s41746-024-01402-3).
5. Pammi M, et al. Digital twins, synthetic patient data, and in-silico trials: can they empower paediatric clinical trials? *The Lancet Digital Health*. 2025. [DOI](https://doi.org/10.1016/j.landig.2025.01.007).
6. Malik-Sheriff RS, et al. The Potential of Digital Twins for Pediatric Rare Diseases. *CPT: Pharmacometrics & Systems Pharmacology*. 2026. [DOI](https://doi.org/10.1002/psp4.70234).
7. Goemans N, et al. Suitability of external controls for drug evaluation in Duchenne muscular dystrophy. *Neurology*. 2020. [DOI](https://doi.org/10.1212/WNL.0000000000010170).
8. Sel K, et al. Survey and perspective on verification, validation, and uncertainty quantification of digital twins for precision medicine. *npj Digital Medicine*. 2025. [DOI](https://doi.org/10.1038/s41746-025-01447-y).
9. European Medicines Agency. Qualification opinion for Prognostic Covariate Adjustment (PROCOVA). 2022. [EMA document](https://www.ema.europa.eu/en/documents/regulatory-procedural-guideline/qualification-opinion-prognostic-covariate-adjustment-procovatm_en.pdf).
10. Wang D, et al. Using AI-generated digital twins to boost clinical trial efficiency in Alzheimer's disease. *Alzheimer's & Dementia: Translational Research & Clinical Interventions*. 2025. [DOI](https://doi.org/10.1002/trc2.70181).
11. Ruhrberg Estévez S, et al. Causal inference and digital twins: a roadmap for the future of clinical trials. *npj Digital Medicine*. 2026. [DOI](https://doi.org/10.1038/s41746-026-02871-4).
12. Vallée A. From digital twins to clinically trustworthy twins: a clinical-claim-based validation framework for personalized digital health. *Frontiers in Digital Health*. 2026. [DOI](https://doi.org/10.3389/fdgth.2026.1908794).
