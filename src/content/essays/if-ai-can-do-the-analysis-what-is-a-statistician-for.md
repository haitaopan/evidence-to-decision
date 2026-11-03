---
title: "If AI Can Do the Analysis, What Is a Statistician For?"
description: "From Statistical Execution to Scientific Judgment and Better Decisions"
pubDate: 2026-11-02
topics:
  - AI & Methods
  - Evidence & Decisions
  - Clinical Trials
  - Oncology & Rare Diseases
draft: false
featured: false
---

## The Analysis Is Finished. But Have We Answered the Question?

Imagine a clinical development team evaluating a promising new cancer treatment.

An AI system has helped draft the trial protocol, generated statistical code, simulated several designs, prepared the statistical analysis plan, and produced tables and figures summarizing the results.

A development strategy that once required considerable programming and analytical effort can now be explored much more quickly.

The report looks impressive. The simulations are complete. A preferred design has emerged. The predicted probability of success looks encouraging.

The team is ready to move forward.

But several questions remain.

Was the right treatment effect defined? Do the simulations represent the patients who will actually enter the trial? Are the assumptions about efficacy and toxicity credible? Would the recommended strategy still be attractive if those assumptions were wrong?

And perhaps most importantly: **What decision can the available evidence actually support?**

A statistical analysis can be technically correct and still fail to answer the scientific question that matters.

This distinction is becoming increasingly important as artificial intelligence changes how statistical work is performed.

A presentation handout prepared by Kaspar Rufibach for November 3, 2026, *Value Proposition for Statisticians and Other Quantitative Scientists in AI-Enhanced Drug Development*, prompted me to reflect on this question. The presentation draws on a broader professional discussion involving the EFSPI Statistical Methodology Leaders, Chris Harbron, Peter Bühlmann, David Donoho and colleagues, and others.

Their perspectives differ in emphasis, but they point toward an important opportunity: as producing analyses becomes easier, statistical scientists can contribute more directly to how scientific questions are formulated, evidence is evaluated, and decisions are made.

The question is not simply whether AI will replace statisticians.

A more interesting question is what statistical science should contribute when generating an analysis is increasingly easier than determining whether its conclusions deserve to be trusted.

## When Analysis Becomes Easier, What Becomes More Valuable?

Statisticians have always benefited from technologies that make their work more efficient.

Statistical software replaced much manual calculation. Faster computers enabled increasingly complex simulations. Modern programming environments made large-scale data analysis and reproducible research more practical.

AI represents another major development in this progression.

It can assist with programming, debugging, simulation, statistical modeling, literature reviews, protocol drafting, analysis plans, data summaries, and scientific communication.

Some tasks that previously required hours of repetitive work can be completed much faster.

These improvements are valuable. There is little scientific benefit in preserving inefficient work merely because statisticians have traditionally performed it.

But easier execution does not automatically produce more reliable evidence.

A program can calculate a confidence interval without establishing whether the underlying data are representative.

A simulation can produce excellent operating characteristics under assumptions that are clinically unrealistic.

A prediction model can demonstrate impressive accuracy in one population but fail when applied to another.

An AI-generated analysis plan can be internally consistent while targeting the wrong scientific question.

The limitations are not necessarily computational. They often concern the relationship between the analysis, the data-generating process, and the decision the research is intended to inform.

Chris Harbron, in his 2026 article *Will the Pharmaceutical Industry Need Statisticians in an AI World?*, emphasizes the continuing importance of understanding data, uncertainty, scientific rigor, and drug development.

Peter Bühlmann similarly argues that statistics should move beyond its traditional technical role and become more involved in formulating important scientific questions.

These arguments suggest an important distinction:

**The ability to produce a statistical answer is not the same as establishing that the answer is scientifically credible, relevant, and sufficient for the intended decision.**

This is where the discussion becomes much more interesting than a debate about professional survival.

## Four Levels of Statistical Contribution

Rufibach's presentation offers a useful framework for thinking about the contribution of statistical scientists:

**Execution → Interpretation → Judgment → Decision Leadership**

These should not be understood as rigid divisions between human and AI capabilities, or as a hierarchy in which technical work becomes unimportant.

They represent different dimensions of scientific contribution.

Consider a hypothetical Phase II oncology trial in which 35 of 100 patients achieve a prespecified tumor response.

**Execution: What is the result?**

The observed response rate is 35%. A statistician—or an appropriately validated automated system—can calculate a confidence interval, perform hypothesis tests, and generate the analysis report.

These calculations must be correct and reproducible. Execution remains essential because unreliable computation undermines everything that follows.

**Interpretation: What does the result mean?**

The response rate must be understood in context.

How was response defined? When was it assessed? Were patients who discontinued treatment included in the denominator? How were deaths before response assessment handled? How precise is the estimate?

A numerical result becomes meaningful only when we understand what it measures.

**Judgment: What can the evidence support?**

Suppose historical studies reported a 20% response rate.

The observed difference may appear promising, but were the historical patients comparable? Were response criteria and assessment schedules consistent? Could changes in eligibility or supportive care explain part of the difference?

Statistical judgment involves evaluating whether the proposed comparison supports the intended inference.

The appropriate conclusion may be that the treatment shows encouraging activity without establishing a reliable comparative treatment effect.

**Decision leadership: What should happen next?**

Should the treatment advance to another development stage? Is a randomized trial necessary? Would additional information materially reduce uncertainty? What are the consequences of advancing an ineffective treatment—or abandoning an effective one?

Statistical scientists can help examine these alternatives and communicate their evidentiary implications.

They do not make every decision independently. Clinical development requires shared expertise and clearly defined decision authority.

The four levels illustrate a broader principle: the value of statistical work is not measured solely by how difficult the computation is.

A conventional randomized design chosen for the right reasons may contribute more than an elaborate adaptive design that introduces complexity without improving the answer.

**Technical sophistication and scientific value are related, but they are not interchangeable.**

## What Statistical Judgment Actually Involves

It is easy to claim that statisticians provide judgment. It is more useful to explain what that judgment entails.

Statistical judgment is not mysterious intuition possessed by experienced researchers.

It is a disciplined process of examining how scientific questions, data, assumptions, uncertainty, and decisions fit together.

It begins with defining the question.

Before selecting a statistical method, we need to determine what is being estimated, for whom, under what treatment conditions, and for what purpose.

The estimand framework in clinical trials makes this especially clear. A treatment-effect question requires careful specification of the population, outcome, treatment conditions, and how relevant events after treatment initiation are addressed.

For example, estimating the effect of assigning patients to a treatment strategy is not necessarily the same as comparing outcomes only among patients who complete treatment.

Both analyses may be computable. They answer different questions.

Judgment also requires understanding how the data were generated.

Clinical observations reflect enrollment criteria, measurement practices, treatment choices, follow-up schedules, missing data, and numerous other processes.

A sophisticated statistical model cannot automatically recover information that was never collected or eliminate bias arising from fundamental design limitations.

Then there is uncertainty.

A confidence interval describes uncertainty under a particular statistical model and its assumptions. It does not necessarily capture every clinically important source of uncertainty.

An estimate may be extremely precise while remaining systematically biased.

Consider a large historical dataset that provides a narrowly estimated response rate. If those patients differ substantially from the current trial population, the historical estimate may be precise but inappropriate for the intended comparison.

**Precision is not the same as validity.**

Similarly, predictive accuracy is not the same as causal evidence.

A model may accurately predict which patients are likely to relapse without telling us whether a particular treatment will reduce their risk.

An association may be strong without establishing what would happen under an intervention.

Good judgment requires recognizing these distinctions.

Finally, it requires considering the consequences of being wrong.

The evidence required to explore a scientific hypothesis may differ from that needed to justify exposing patients to a potentially harmful treatment.

A conclusion that is reasonable for early development may not support a confirmatory efficacy claim.

Sometimes the correct recommendation is to obtain additional evidence.

Sometimes it is to simplify an unnecessarily complicated design.

And sometimes it is to say that the available data cannot support the conclusion the team hopes to make.

That last contribution can be particularly valuable.

## Three Clinical Decisions Where the Distinction Matters

Three hypothetical oncology examples illustrate how statistical execution and scientific judgment interact.

The numbers are illustrative rather than results from actual clinical trials.

### 1. Which Treatment Dose Should We Choose?

Imagine an oncology program evaluating three doses of a new drug.

Model-based predictions suggest the following:

| Dose | Predicted response | Predicted severe toxicity |
|---|---:|---:|
| Low | 35% | 8% |
| Medium | 47% | 12% |
| High | 50% | 30% |

An AI-assisted model identifies the highest dose as producing the greatest predicted tumor response.

Should the team choose it?

Not necessarily.

The predicted improvement from the medium to the high dose is only three percentage points, while severe toxicity increases substantially.

Even these predictions may be uncertain. Perhaps relatively few patients received the highest dose. Perhaps the exposure–toxicity relationship is sensitive to model assumptions. Perhaps the next trial will enroll patients whose characteristics differ from those in the original dataset.

An AI system can fit models, estimate dose–response curves, compare scenarios, and identify promising candidates.

But the development question concerns an acceptable balance of efficacy, toxicity, and uncertainty.

Statistical judgment involves asking whether the apparent advantage of the highest dose is robust, whether the toxicity predictions are credible, and whether more data would meaningfully improve the decision.

The final recommendation might favor the medium dose. It might support further evaluation of both doses. Or additional evidence might justify selecting the highest dose for a particular population.

The point is not that a statistician must personally select the dose.

It is that a reliable decision requires understanding the assumptions, trade-offs, and evidence supporting the choice.

The final ICH M15 guidance on model-informed drug development provides a useful framework. It explicitly connects modeling evidence to the question of interest, context of use, influence on the decision, and consequences of making a wrong decision.

A model is not valuable merely because it predicts well. Its value also depends on whether it provides sufficiently reliable information for the decision it is intended to support.

### 2. Does a Single-Arm Trial Demonstrate Better Efficacy?

Now imagine a rare pediatric cancer where conducting a randomized trial is challenging.

Investigators design a single-arm Phase II trial using a historical response rate of 20% as the benchmark.

The new treatment produces an observed response rate of 35%.

An AI-assisted statistical workflow can calculate confidence intervals, test against the historical benchmark, evaluate a two-stage design, and generate simulations of the probability of declaring success.

Everything may be mathematically correct.

But does the 15-percentage-point difference represent the treatment's causal effect?

Not necessarily.

Suppose historical patients had received more prior therapies. Perhaps their disease was more advanced, or imaging techniques and response definitions differed.

Perhaps response was assessed at 12 weeks in the historical studies but over a longer period in the new trial.

Perhaps patients with early clinical deterioration were handled differently.

These differences can affect response rates independently of treatment efficacy.

Importantly, increasing the size of the historical database does not automatically solve the problem.

Five thousand historical patients may provide a highly precise estimate of their response rate. But precision does not establish that their outcomes represent what would have happened to the new trial patients under the historical treatment.

**More data do not necessarily correct structural bias.**

Covariate adjustment and other statistical methods may reduce some differences when the necessary variables are measured and appropriate assumptions hold.

But no analysis can guarantee comparability when important sources of bias remain unmeasured or incompatible endpoint definitions cannot be reconciled.

This is where statistical judgment becomes essential.

Which historical studies are relevant? Are their patient populations and endpoint definitions sufficiently aligned? Which differences can be addressed analytically, and which remain unresolved?

How sensitive is the conclusion to alternative plausible historical response rates?

AI can assist with evidence extraction, data harmonization, and sensitivity analyses. But the resulting evidence still needs to be evaluated against the scientific claim being made.

A reasonable conclusion might be that the new treatment demonstrates promising activity relative to a prespecified benchmark, while a strong comparative efficacy claim remains uncertain.

That distinction matters.

The trial may still provide sufficient evidence to justify further development. It may not establish that the new treatment is superior to the historical alternative.

The statistical contribution is not simply to make the historical comparison more sophisticated.

It is to clarify what the comparison can legitimately tell us.

### 3. Can an Accurate AI Prediction Model Improve Patient Care?

Consider an AI model developed to predict cancer recurrence.

It demonstrates strong discrimination and apparently good calibration in a retrospective study.

The clinical team proposes using its predictions to determine who should receive more intensive monitoring or treatment.

Suppose one patient has a predicted recurrence risk of 60%, while another has a predicted risk of 10%.

Should the first patient automatically receive intensified therapy?

No.

A higher predicted risk does not necessarily imply a greater benefit from intensified treatment.

The high-risk patient may have disease that is relatively resistant to additional therapy. The treatment may cause substantial toxicity. The lower-risk patient might have a biological characteristic associated with a larger treatment effect.

Predicting what is likely to happen under existing care is different from estimating what would happen if care were changed.

This is the distinction between prognostic information and evidence about treatment effects.

Even when a model accurately identifies high-risk patients, another question remains: what should clinicians do with that information?

A high-risk prediction might trigger additional imaging, closer monitoring, or a more intensive treatment regimen.

Each action has potential benefits and harms.

False-positive predictions may lead to unnecessary procedures or treatment. False-negative predictions may delay recognition of disease progression.

A useful clinical evaluation must therefore examine not only model performance but also the consequences of using its predictions.

Frameworks such as PROBAST+AI help assess the quality, risk of bias, and applicability of clinical prediction models.

But demonstrating that a prediction model is statistically sound does not, by itself, establish that a model-guided clinical strategy improves patient outcomes.

That stronger claim may require an appropriate evaluation of the clinical strategy itself.

**A model can predict risk accurately without sufficient evidence that acting on its predictions will improve care.**

This is an important distinction in the development of AI-enabled precision medicine.

## Is Human Judgment Necessarily Better Than AI?

There is a tempting response to these examples: machines calculate, while humans judge.

But that division is too simple.

AI systems can already suggest alternative designs, identify potential biases, critique model assumptions, and explain statistical trade-offs.

Their capabilities will continue to evolve, and some forms of AI-assisted reasoning may outperform unaided human reasoning on particular tasks.

Meanwhile, experienced statisticians are not immune to mistakes.

Human experts can be overconfident, attached to familiar methods, influenced by prior beliefs, or reluctant to challenge institutional expectations.

Clinical development decisions may also be shaped by organizational pressures and incentives.

The relevant question is therefore not whether human judgment is inherently superior to machine-generated judgment.

It is how to build scientific processes that evaluate both reliably.

Research on AI-assisted physician reasoning illustrates the importance of examining actual workflows rather than assuming that adding AI automatically improves decisions.

A randomized study published in *JAMA Network Open* in 2024 found no statistically significant improvement in physicians' diagnostic reasoning when they were given access to an LLM, compared with conventional resources.

A different randomized study, published in *Nature Medicine* in 2025, found improved performance with LLM assistance on simulated clinical management tasks.

These studies involved different tasks and evaluation settings. Neither establishes that AI assistance will always help—or never help—in routine clinical practice.

They demonstrate why the performance of human–AI systems should be evaluated empirically.

The same principle applies to statistical research.

An AI-generated trial design should be subjected to simulation, independent verification, and examination of assumptions.

An experienced statistician's recommendation should also withstand scientific scrutiny.

Good judgment should be explainable, challengeable, and, where possible, testable.

If someone argues that a historical control is unsuitable, they should be able to identify the relevant comparability problems and explain their implications.

If a model is considered insufficiently robust, its weaknesses should be demonstrated through appropriate evaluations rather than asserted on intuition alone.

Human oversight should be meaningful, not ceremonial.

Having a statistician approve an AI-generated report provides limited protection if that person cannot inspect the underlying evidence, challenge assumptions, or change the recommendation.

The goal is not to defend human judgment against machines.

**It is to create more trustworthy systems for producing, examining, and acting on scientific evidence.**

## The Training Paradox: Who Will Develop Judgment?

Rufibach raises another concern that deserves serious attention.

AI may make experienced statisticians more productive while reducing some of the traditional opportunities through which younger statisticians develop expertise.

Consider a graduate student learning clinical trial simulation.

Traditionally, the student writes code, encounters unexpected results, investigates programming mistakes, questions assumptions, and gradually understands how the design behaves.

These experiences are sometimes frustrating and inefficient.

But discovering why an analysis fails can be as educational as obtaining the correct result.

Now imagine that AI generates the simulation code and a polished report within minutes.

The student may complete the assignment without fully understanding the design, recognizing its failure modes, or developing the ability to detect incorrect results.

This creates a genuine educational challenge.

However, prohibiting AI is not a compelling solution.

Statisticians did not become less scientific when statistical software replaced manual calculation. Instead, education adapted to new tools.

AI requires a similar adaptation, perhaps a more deliberate one.

Students should still learn probability, statistical inference, experimental design, programming fundamentals, and causal reasoning.

But training should increasingly emphasize the ability to formulate problems, inspect assumptions, evaluate analytical workflows, and defend scientific conclusions.

For example, a trainee might be required to specify the estimand and propose a trial design before using AI.

AI could then help generate simulation programs and alternative designs.

The trainee would remain responsible for verifying the code, explaining operating characteristics, constructing unfavorable scenarios, and identifying circumstances under which the recommendation changes.

Clinical mentorship is equally important.

Young statisticians need opportunities to participate in protocol discussions, observe scientific disagreements, understand competing clinical objectives, and explain difficult conclusions to interdisciplinary teams.

They also need to experience uncertainty firsthand—not merely receive polished summaries of it.

Donoho and colleagues, in their 2026 discussion of rebuilding statistics in the age of AI, argue for broader engagement with data infrastructure, modern computational systems, interdisciplinary collaboration, and new approaches to training.

This perspective is important because developing judgment is not solely an individual responsibility.

Institutions must provide the environments in which such expertise can develop.

**The goal should not be to preserve routine work for training purposes, but to preserve the learning experiences that make independent scientific judgment possible.**

## From Statistical Support to Scientific Partnership

The AI discussion also highlights a longstanding challenge in clinical research: statisticians are sometimes brought into projects too late.

A clinical team may select the endpoint, define the population, establish the treatment strategy, and decide on the study structure before asking a statistician to calculate the sample size or prepare the analysis plan.

Statistical support at that stage can still be valuable.

But opportunities to improve the research question or design may already have been lost.

Earlier collaboration changes the conversation.

Instead of asking only, "How many patients do we need?", the team can first ask, "What uncertainty must this study resolve?"

Instead of focusing immediately on which analysis to perform, investigators can discuss what evidence would justify advancing the treatment.

Instead of selecting an elaborate design because it is innovative, they can ask whether its complexity meaningfully improves the quality of the decision.

These conversations bring statistical reasoning into the development of the scientific question rather than restricting it to the analysis of completed data.

This is consistent with Bühlmann's argument that statistics should play a visible role in the frontyard of science, helping formulate important problems rather than remaining primarily in the technical background.

But scientific partnership should not become professional territorialism.

Clinicians, pharmacologists, patients, regulatory experts, statisticians, and other researchers bring complementary knowledge.

The goal is not for statisticians to replace other decision-makers.

It is to ensure that important decisions benefit from rigorous reasoning about evidence, uncertainty, bias, and consequences.

Statistical decision leadership is best understood as a contribution to shared scientific responsibility.

That contribution also requires meaningful participation in the decision process.

A statistician cannot be expected to provide effective scientific oversight if critical assumptions have already been fixed, alternative recommendations are discouraged, or the role is limited to approving analytical outputs.

Expertise must be connected to opportunities to influence the research.

## Beyond Individual Expertise: Building Better Evidence Systems

There is an even broader implication.

The reliability of clinical research does not depend on a statistician or an AI model in isolation.

It depends on an entire evidence-generation process.

Consider a study in which the statistical analysis is technically flawless, but the endpoint was poorly defined.

Or a prediction model with strong internal performance but inadequate external validation.

Or a trial whose design is sound but whose important outcomes are no longer collected after patients discontinue treatment.

These problems arise at different stages.

Some concern research formulation. Others involve data collection, model development, validation, interpretation, or organizational decision-making.

No single statistical analysis can compensate for every weakness in that process.

This suggests a wider role for statistical science: helping research teams build systems in which scientific questions, data, analytical methods, validation, and decisions remain aligned.

AI could make such systems substantially more capable.

It might help detect inconsistencies across protocols, monitor data quality, generate simulation scenarios, compare competing assumptions, and identify potential evidence gaps.

But these capabilities need appropriate evaluation, documentation, and governance.

Statistical scientists can contribute not only by reviewing individual outputs, but by helping design how evidence is generated, checked, updated, and used.

This is not an entirely new mission. Statistical science has long been concerned with designing experiments, understanding uncertainty, and producing reliable inference.

What is changing is the scale, speed, and complexity of the systems through which evidence can now be produced.

## What Should Future Statisticians Learn?

Statistical execution will remain essential.

Programming, probability, estimation, hypothesis testing, clinical trial design, modeling, reproducibility, and quality control are not becoming irrelevant.

Indeed, increasingly automated analytical systems may make rigorous testing and validation more important.

But technical competence must be accompanied by broader scientific capabilities.

Statisticians need to understand the clinical and developmental context in which analyses are used.

They need strong causal reasoning and the ability to distinguish prediction from evidence about interventions.

They need to understand AI systems well enough to use them productively, evaluate their limitations, and recognize where independent validation is necessary.

They need communication skills that allow them to explain complex uncertainty without obscuring the scientific question.

They also need creativity: the ability to develop new methods when existing tools cannot adequately address important problems.

Perhaps most importantly, they need to understand what consequences follow when an analytical conclusion is wrong.

These capabilities are not replacements for statistical foundations.

They are ways of applying those foundations more effectively.

The best future statistical scientists will not simply supervise AI-generated analyses.

They will help develop better questions, better studies, better methods, better evaluation systems, and more reliable paths from evidence to decisions.

## The Purpose of Statistical Science Has Not Changed

AI is transforming how statistical work is performed.

It can reduce the effort required to generate code, simulations, models, analyses, and reports. It may also contribute increasingly to scientific interpretation and methodological reasoning.

These developments should be welcomed, studied critically, and evaluated carefully.

But the fundamental purpose of statistical science has never been to produce the greatest possible number of analyses.

It is to help us learn reliably from data.

In clinical research, that means understanding what can be concluded about treatments, patients, benefits, harms, and uncertainty—and helping those conclusions inform responsible decisions.

Sometimes this requires sophisticated statistical methodology.

Sometimes it requires a simple design chosen carefully.

Sometimes it requires better data or additional validation.

And sometimes the most valuable contribution is recognizing that the available evidence does not justify the conclusion we wish to reach.

The future of statistics should not depend on defending tasks that AI may increasingly perform.

Nor should it depend on claiming that human judgment is automatically superior.

It should depend on a continuing commitment to scientific reasoning, reliable evidence, transparent uncertainty, rigorous validation, and meaningful interdisciplinary collaboration.

**If AI makes analysis easier, the opportunity for statistical science is to make the evidence—and the decisions informed by it—better.**

That is not merely a strategy for keeping statisticians relevant.

It is a reason statistical science matters in the first place.

---

## References and Further Reading

The following sources informed this educational essay. The article synthesizes existing professional perspectives and examples; it does not propose an original methodological framework.

1. **Rufibach K.** *Value Proposition for Statisticians and Other Quantitative Scientists in AI-Enhanced Drug Development.* Presentation handout prepared for November 3, 2026.

2. **Vandemeulebroecke M, Akacha M, Kähler Holst K, et al.** (2026). *Towards a Value Proposition for Statisticians and Other Quantitative Scientists in AI-Enhanced Drug Development.* EFSPI Statistical Methodology Leaders. Submitted viewpoint/preprint. [Public preprint](https://osf.io/2kebj/files/a7qgy).

3. **Harbron C.** (2026). Will the Pharmaceutical Industry Need Statisticians in an AI World? *Pharmaceutical Statistics*, 25(4), e70100. [https://doi.org/10.1002/pst.70100](https://doi.org/10.1002/pst.70100).

4. **Bühlmann P.** (2026). Statistics in the Next Quarter-Century: Playing Also in the Frontyard? *Statistical Learning and Data Science*, 1, 100006. [https://doi.org/10.1016/j.slads.2026.100006](https://doi.org/10.1016/j.slads.2026.100006).

5. **Donoho DL, Kang J, Lin X, et al.** (2026). "Rebuilding" Statistics in the Age of AI: Culture, Infrastructure, and Training. *Journal of the American Statistical Association*. Published online August 28, 2026. [https://doi.org/10.1080/01621459.2026.2680161](https://doi.org/10.1080/01621459.2026.2680161).

6. **Harrell FE.** (2026). *Thoughts About the Roles of AI for Statistics.* May 19, 2026. [Presentation and resources](https://www.fharrell.com/talk/ai/).

7. **International Council for Harmonisation.** *ICH E9(R1): Statistical Principles for Clinical Trials—Addendum on Estimands and Sensitivity Analysis.* [FDA guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/e9r1-statistical-principles-clinical-trials-addendum-estimands-and-sensitivity-analysis-clinical).

8. **International Council for Harmonisation.** *ICH M15: General Principles for Model-Informed Drug Development.* Final guidance, June 2026. [FDA guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/m15-general-principles-model-informed-drug-development).

9. **US Food and Drug Administration.** (2023). *Considerations for the Design and Conduct of Externally Controlled Trials for Drug and Biological Products.* Draft guidance. [FDA guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/considerations-design-and-conduct-externally-controlled-trials-drug-and-biological-products).

10. **Moons KGM, Damen JAA, Kaul T, et al.** (2025). PROBAST+AI: An Updated Quality, Risk of Bias, and Applicability Assessment Tool for Prediction Models Using Regression or Artificial Intelligence Methods. *BMJ*, 388, e082505. [https://doi.org/10.1136/bmj-2024-082505](https://doi.org/10.1136/bmj-2024-082505).

11. **Goh E, Gallo R, Hom J, et al.** (2024). Large Language Model Influence on Diagnostic Reasoning: A Randomized Clinical Trial. *JAMA Network Open*, 7(10), e2440969. [https://doi.org/10.1001/jamanetworkopen.2024.40969](https://doi.org/10.1001/jamanetworkopen.2024.40969).

12. **Goh E, Gallo RJ, Strong E, et al.** (2025). GPT-4 Assistance for Improvement of Physician Performance on Patient Care Tasks: A Randomized Controlled Trial. *Nature Medicine*, 31, 1233–1238. [https://doi.org/10.1038/s41591-024-03456-y](https://doi.org/10.1038/s41591-024-03456-y).

---

*Evidence to Decision is an independent educational blog exploring clinical trials, statistical reasoning, evidence generation, and scientific decision-making. The perspectives expressed here are personal and educational, not statements on behalf of any institution or professional organization.*
