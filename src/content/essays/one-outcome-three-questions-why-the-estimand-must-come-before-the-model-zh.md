---
title: "同一个临床结局，三个不同的问题：为什么必须先定义 Estimand，再选择统计模型？"
description: "重新思考临床试验中连续型、有序分类与二分类结局的统计分析"
pubDate: 2026-11-13
topics: ["Clinical Trials", "Evidence & Decisions", "AI & Methods"]
draft: false
featured: false
---

*重新思考临床试验中连续型、有序分类与二分类结局的统计分析*

[Read the English version: One Outcome, Three Questions: Why the Estimand Must Come Before the Model](/essays/one-outcome-three-questions-why-the-estimand-must-come-before-the-model/)

---

## 一、一个我们非常熟悉的统计学争论

假设我们正在开展一项随机临床试验，比较两种治疗慢性疼痛的方法。

研究人员在治疗开始前，以及治疗八周后，分别测量了患者的疼痛评分。现在，数据收集已经完成，统计分析即将开始。

这时，一个非常熟悉的问题出现了：

**我们究竟应该把疼痛评分作为连续型变量（continuous outcome）、有序分类变量（ordinal outcome），还是二分类变量（binary outcome）进行分析？**

一位统计学家建议使用 linear regression。

另一位统计学家认为，疼痛评分虽然用数字表示，但本质上是有序分类，因此使用 ordinal logistic regression 更为合适。

临床医生则提出了不同的意见：

“患者真正关心的，难道不是自己的疼痛有没有得到有意义的缓解吗？为什么我们不直接比较两组患者的 responder rate？”

这三种观点听起来都有道理。

于是，我们很容易开始讨论：

- Linear regression 的模型假设是否合理？
- Ordinal logistic regression 是否满足 proportional odds assumption？
- 将原始评分转换成二分类变量，会损失多少统计信息？
- 哪一种分析方法具有更高的 statistical power？

这些都是合理而且重要的统计学问题。

但是，我认为，在讨论这些问题之前，我们忽略了一个更加根本的问题。

**我们究竟希望通过这项临床试验，了解治疗的什么效果？**

我们想知道的是：

治疗 A 能让患者的疼痛评分平均改善多少？

还是：

接受治疗 A 的患者，比接受治疗 B 的患者更有可能获得较好的结局吗？

或者：

治疗 A 能让多少额外的患者获得具有临床意义的疼痛缓解？

这实际上是三个不同的科学问题。

虽然它们使用的是同一种临床结局，但对应的 treatment effect 并不相同。

更有意思的是，**即使使用完全相同的临床试验数据，这三个问题也可能产生非常不同的答案。**

理解这一点，可能比单纯争论应该使用哪一种统计模型更加重要。

## 二、一个历史悠久的争论：临床评分究竟是什么类型的变量？

关于临床评分应该如何进行统计分析，这场争论已经持续了很多年。

1946 年，S. S. Stevens 在发表于 *Science* 的经典论文中，提出了四种 measurement scales 的分类：

1. Nominal scale：名义尺度。
2. Ordinal scale：顺序尺度。
3. Interval scale：区间尺度。
4. Ratio scale：比率尺度。

这套分类对统计学和测量理论产生了深远影响。

Nominal scale 只能区分不同类别，没有大小顺序。

Ordinal scale 可以区分顺序，但不一定意味着相邻类别之间的距离相等。

Interval scale 则允许我们对数值差异作出有意义的解释。

Ratio scale 还具有具有实际意义的零点，因此可以解释比值。

这为什么重要？

假设我们使用一个五级 Likert item，要求患者回答：

Strongly disagree、Disagree、Neutral、Agree、Strongly agree。

我们当然知道：

Strongly agree 比 Agree 表示更强的认同。

但是，Strongly disagree 到 Disagree 的差异，是否等同于 Agree 到 Strongly agree 的差异？

不一定。

因此，如果直接把这五个等级编码成 1、2、3、4、5，然后计算平均值，我们其实已经引入了一个值得思考的假设：

**这些数字之间的差异，在多大程度上能够代表被测量概念的真实差异？**

当然，单个 Likert item 和由多个项目组合而成的 validated questionnaire 也不是一回事。

经过科学验证的多项目量表，可能具有更好的测量性质。但是，简单地把多个 ordinal items 加总，并不能自动证明总分具有完全相等的数值间隔。

再考虑临床试验中经常使用的 0–10 疼痛评分。

从 0 分到 1 分的变化，与从 8 分到 9 分的变化，是否具有完全相同的临床意义？

我们不能简单地假定一定如此。

同样，8 分的疼痛，也不意味着患者感受到的疼痛一定是 4 分的两倍。

那么，是不是意味着我们绝对不能使用 linear regression？

也不是。

2010 年，Geoff Norman 在 *Advances in Health Sciences Education* 发表了一篇很有影响力的文章，讨论 Likert scales、measurement levels，以及统计分析中的一些传统观念。

这篇文章解释了一个重要问题：

**即使数据不完全符合传统的测量尺度或分布假设，某些参数统计方法依然可能具有相当好的稳健性。**

因此，不能仅仅因为某个变量是 ordinal，就断言 linear regression 一定不合适。

但反过来也一样。

一种统计方法具有良好的 robustness，并不意味着原始评分中每一个数值差异都具有明确、相同的临床意义。

我们不能把统计方法的有效性，直接等同于测量结果的临床可解释性。

此外，也不能依靠一个 normality test 来决定是否应该使用 continuous analysis。

因为正态性检验既不能证明平均差异具有临床意义，也不是对均值进行有效统计推断的普遍必要条件。

另一方面，将原始评分转化为 binary outcome，通常确实会损失信息。

例如，疼痛改善两分的患者，和疼痛完全消失的患者，可能都被归类为 responder。

两者改善程度的差异，因此不再反映在这个二分类变量中。

但是，信息损失并不意味着 responder analysis 一定没有科学价值。

如果研究真正关心的就是患者能否达到某个重要的临床状态，那么 responder probability 本身就可能是一个非常有意义的研究目标。

近年的研究也反映出这个问题的复杂性。

Selman 等人在 2024 年发表的 scoping review 中，调查了随机临床试验中 ordinal outcomes 的统计分析实践，发现不同研究采用的方法差异明显，而且一些研究对模型假设的报告并不充分。

Long 等人 2025 年在 *Neurology* 发表的研究，则进一步讨论了 proportional odds assumption 对 ordinal outcome analysis 的影响，提醒我们不要简单地把模型假设的检验结果当作选择主要分析方法的唯一依据。

更值得关注的是，Al-Jaishi 等人在 2026 年发表于 *BMC Medical Research Methodology* 的文章中，已经明确强调，应当根据 clinical question 和 target estimand 选择统计方法。

因此，estimand-first 并不是一个新提出的统计学原则。

真正值得我们进一步理解的是这个原则所带来的科学含义：

**对同一个临床结局进行不同的分析，可能并不只是采用了不同的数学方法，而是在对治疗效果提出不同的临床主张。**

## 三、同一个临床试验，三个不同的 Treatment Effects

现在，让我们回到前面的疼痛临床试验。

假设这是一项随机临床试验，比较 Treatment A 和 Treatment B。

所有患者来自同一个目标人群。

疼痛使用经过适当验证的 0–10 numerical rating scale 测量。

分数越低，说明疼痛越轻。

患者在随机分组前进行 baseline assessment，并在治疗八周后进行主要结局测量。

为了简化讨论，我们先假设所有患者都有完整的结局数据，也没有治疗中断、rescue medication 等需要特别处理的 intercurrent events。

在这个简单场景下，我们可以提出三个不同的问题。

### 问题 A：哪一种治疗能够带来更大的平均改善？

这是我们最熟悉的临床试验问题之一。

假设每个患者的疼痛改善定义为：

**Improvement = Baseline pain score − Week 8 pain score**

由于疼痛评分越低越好，因此 improvement 越大，说明疼痛缓解越明显。

现在，我们比较 Treatment A 和 Treatment B 的平均改善：

**Mean treatment effect = Mean improvement under A − Mean improvement under B**

如果这个差异为正，说明 Treatment A 能够带来更大的平均改善。

为了估计这个 treatment effect，我们可以使用：

- 两组样本均值之差。
- Linear regression。
- 调整 baseline pain score 的 ANCOVA。
- 在具有重复测量数据时使用适当的 longitudinal model。

这些统计方法在模型假设、精度、协变量调整以及缺失数据处理方面可能存在区别。

但这里最关键的一点是：

**我们要估计的 treatment effect，并不是 linear regression 本身。**

我们真正关心的是两种治疗所对应的 population mean improvement 之差。

Linear regression 或 ANCOVA 只是帮助我们估计这个 quantity 的工具。

而且，即使是对同一个目标治疗效应进行估计，不同的 estimator 也可能具有不同的效率。

例如，对治疗八周时的评分进行 baseline-adjusted ANCOVA，与直接比较 change scores，在某些条件下可以对应相同或密切相关的 marginal treatment contrast，但不一定具有相同的 statistical efficiency。

这种分析特别适合回答：

“在目标患者人群中，治疗 A 比治疗 B 平均能够多改善多少分？”

但是，它并不能完整描述患者之间的治疗反应差异。

### 问题 B：哪一种治疗更有可能产生较好的结局？

现在，我们换一个角度。

假设我们从 Treatment A 的目标人群中随机选择一位患者。

再从 Treatment B 的目标人群中独立随机选择另一位患者。

我们想问：

**Treatment A 患者的八周疼痛评分，比 Treatment B 患者更低的可能性有多大？**

这个问题可以使用 win probability，也称 probabilistic index，进行描述。

由于疼痛评分越低越好，我们定义：

$$
WP=P(Y_A<Y_B)+\frac12 P(Y_A=Y_B)
$$

其中：

- \(Y_A\) 表示 Treatment A 人群中随机抽取患者的八周疼痛评分。
- \(Y_B\) 表示 Treatment B 人群中独立随机抽取患者的八周疼痛评分。

如果 Treatment A 的患者疼痛更轻，就算一次 win。

如果两个患者的评分相同，则各计半次。

因此：

- WP = 50%：两组之间的优势与劣势比较在平分 ties 后达到平衡。
- WP > 50%：总体比较更有利于 Treatment A。
- WP < 50%：总体比较更有利于 Treatment B。

这种 quantity 可以通过 Mann–Whitney 类型的方法、probabilistic-index regression，以及其他适当的统计方法进行估计。

这里还需要区分 win probability、win ratio、win odds，以及 proportional-odds regression 所产生的 common odds ratio。

它们虽然都与结局排序或胜负比较有关，但在 ties 的处理、定义及数值解释上并不完全相同。

然而，这里隐藏着一个更深刻的因果推断问题。

**Win probability 并不等于某一位特定患者选择 Treatment A 而不是 Treatment B 时，自己获益的概率。**

为什么？

因为 win probability 比较的是从两个治疗人群中独立抽取的两位患者。

而对于某一个具体患者，我们真正想了解的可能是：

如果他接受 A，会怎样？

如果同一个人接受 B，又会怎样？

这实际上涉及同一个人的两个 potential outcomes。

常规随机临床试验可以帮助我们识别不同治疗条件下的 marginal outcome distributions，却不能直接观察同一个患者在两种治疗下的两个潜在结局。

因此，独立跨组比较的概率，不能简单解释成个人层面的 causal benefit probability。

此外，如果患者 baseline pain severity 不同，或者比较时要求按照某些 baseline characteristics 进行匹配，所定义的 win probability 也可能发生改变。

所以，即使是这样一个看似简单的 probability，我们仍然必须首先明确：

**我们究竟想比较哪一种患者、按照什么规则进行比较，以及这种比较具有怎样的临床意义？**

### 问题 C：哪一种治疗能让更多患者获得有意义的疼痛缓解？

现在，我们提出第三个问题。

假设医生和患者最关心的是：

有多少患者能够获得真正有意义的疼痛缓解？

这里我们可以定义 responder。

例如，在某个特定试验中，如果患者证据和量表验证研究支持将疼痛改善至少两分作为具有临床意义的改善，那么我们可以定义：

$$
R=I(Y_{\text{baseline}}-Y_{\text{week 8}}\geq 2)
$$

满足条件者为 responder。

然后，我们关心：

$$
\Delta_{\text{response}}=P(R=1\mid A)-P(R=1\mid B)
$$

这就是两组之间的 responder risk difference。

假设 Treatment A 有 60% 的患者达到 response，而 Treatment B 有 40%。

那么，Treatment A 可以使 response probability 绝对增加 20 个百分点。

当然，我们也可以使用 risk ratio 或 odds ratio 来描述这一 binary outcome 的治疗差异。

但这些 effect measures 具有不同的数学含义，不能简单互换。

这里真正需要认真讨论的，是 responder threshold 本身。

为什么要选择改善两分？

为什么不是一分或者三分？

这个阈值是否具有来自患者、临床医生或测量学研究的支持？

是否适用于当前疾病、目标人群以及 baseline severity？

FDA 的 Patient-Focused Drug Development 系列指南，非常重视 clinical outcome assessments 的 fit-for-purpose 性质，以及如何从患者视角理解 meaningful change。

因此，一个合理的 responder definition，应当建立在科学证据和临床意义基础上，并尽可能在研究开始前明确。

而不是等到数据出来以后，再寻找哪个 cutoff 能够产生最显著的 p-value。

但这并不意味着 dichotomization 本身必然错误。

如果临床研究真正希望回答的是：

“这种治疗能让多少额外的患者达到有意义的缓解？”

那么，responder risk difference 就是一个非常直接、重要的 estimand。

问题不在于我们是否使用了 binary outcome。

问题在于，**我们是否先定义了有意义的临床问题，再根据这个问题选择分析方法。**

## 四、最有意思的部分：同一组数据，竟然可以支持不同的治疗结论

现在，我们构建一个完全假设性的例子。

假设所有患者在 baseline 的疼痛评分都是 6 分。

治疗八周后，两组患者的结局分布如下：

| 八周疼痛评分 | Treatment A | Treatment B |
|---|---:|---:|
| 0 分：疼痛完全消失 | 35% | 0% |
| 4 分：改善两分 | 15% | 80% |
| 6 分：没有改善 | 50% | 20% |

这些数字是专门设计的教学示例，并不来自真实临床试验。

现在，我们分别计算前面定义的三个 treatment effects。

### 第一种分析：平均改善——Treatment A 更好

首先计算 Treatment A 的平均改善：

$$
E(I_A)=0.35(6)+0.15(2)+0.50(0)=2.4
$$

Treatment B 的平均改善为：

$$
E(I_B)=0.80(2)+0.20(0)=1.6
$$

因此：

$$
\Delta_{\text{mean}}=2.4-1.6=0.8
$$

Treatment A 平均比 Treatment B 多改善 0.8 分。

如果我们的主要科学问题是平均疼痛改善程度，那么这个结果支持 Treatment A。

但请注意，这个结果不意味着大多数患者使用 A 都会获得更好的结局。

### 第二种分析：Win probability——两种治疗几乎持平

现在，我们按照八周疼痛评分，对两个治疗人群中的患者进行独立跨组比较。

Treatment A 获胜的概率为：

$$
P(Y_A<Y_B)=0.38
$$

Treatment B 获胜的概率为：

$$
P(Y_A>Y_B)=0.40
$$

两位患者评分相同的概率为：

$$
P(Y_A=Y_B)=0.22
$$

所以：

$$
WP_A=0.38+\frac12(0.22)=0.49
$$

也就是说，Treatment A 的 win probability 只有 49%。

这与前面的平均改善结果形成了一个有趣的对比。

虽然 Treatment A 的平均改善更大，但如果从两组各随机抽取一名患者，按八周疼痛程度比较，Treatment A 并没有明显优势。

### 第三种分析：Responder probability——Treatment B 明显更好

最后，我们使用改善至少两分作为 responder definition。

Treatment A 中：

35% 的患者改善六分，15% 的患者改善两分。

所以：

$$
P(R_A=1)=35\%+15\%=50\%
$$

Treatment B 中：

80% 的患者改善两分。

因此：

$$
P(R_B=1)=80\%
$$

两组之间的 responder risk difference 为：

$$
\Delta_{\text{response}}=50\%-80\%=-30\%
$$

换句话说，Treatment B 的 responder rate 比 Treatment A 高 30 个百分点。

这次结果明显支持 Treatment B。

### 我们究竟应该相信哪个结果？

现在，把三个结果放在一起：

| Treatment effect | 结果 | 表面上更有利于 |
|---|---|---|
| Mean improvement difference | +0.8 分 | Treatment A |
| Win probability for A | 49% | 基本持平，略偏 B |
| Responder risk difference | −30 个百分点 | Treatment B |

请注意：

这不是因为有某个统计模型错了。

也不是因为某个分析方法 statistical power 不够。

更不是因为不同方法产生了不同的 p-values。

我们甚至还没有讨论统计显著性。

在这个例子中，三个结果完全来自同一组假设的结局分布。

它们之间的差异是真实的数学差异，因为它们描述的是不同的 population-level treatment effects。

为什么会出现这样的情况？

因为 Treatment A 和 Treatment B 的治疗效果具有不同的分布特征。

Treatment A 可以让 35% 的患者疼痛完全消失。

但与此同时，50% 的患者没有任何改善。

Treatment B 则没有让任何患者达到完全无痛，但有 80% 的患者改善了两分。

换句话说：

**Treatment A 让一部分患者获得非常大的改善，而 Treatment B 让更多患者获得相对稳定、中等程度的改善。**

如果我们重视平均改善，A 更好。

如果我们重视达到预先定义的 meaningful improvement 的概率，B 更好。

如果我们考察随机跨组比较，二者则几乎持平。

因此，真正值得讨论的问题不再是：

哪一种统计方法算得更准确？

而是：

**哪一种 treatment effect 最能回答我们当前需要解决的临床问题？**

这个例子还有一个重要启示。

当两组治疗的结局分布发生交叉，或者患者之间存在明显的 treatment effect heterogeneity 时，任何单一的 summary measure 都可能无法完整反映治疗的全部特点。

因此，除了报告一个主要 treatment effect，我们有时还应该展示完整的 outcome distribution，帮助读者理解不同患者可能获得怎样的治疗结果。

## 五、Estimand 不是 Estimator：我们经常混淆的三个概念

讨论到这里，有必要进一步澄清三个概念：

Estimand、Estimator 和 Estimate。

它们听起来相似，却代表完全不同的东西。

**Estimand 是我们希望了解的治疗效果。**

**Estimator 是我们使用什么统计方法来估计这个效果。**

**Estimate 是最终根据实际数据得到的数值结果。**

例如，我们希望比较两个治疗组的 mean improvement。

这就是 estimand 的一部分。

我们可以使用两组样本均值之差，也可以使用 baseline-adjusted ANCOVA，或者其他合适的估计方法。

这些都是可能的 estimators。

最后，我们从实际数据中计算出 Treatment A 平均比 Treatment B 多改善 0.8 分。

这个 0.8 才是 estimate。

这种区分非常重要。

因为一个 estimand 不一定只对应一种 estimator。

同样，一类统计模型也不一定只能估计一个 estimand。

例如，如果我们使用足够灵活的模型来估计整个 outcome distribution，就可能进一步计算平均值、responder probability 或 win probability 等不同 summary measures。

因此，我们不能简单地认为：

Continuous outcome 就等于 linear regression。

Ordinal outcome 就等于 ordinal logistic regression。

Binary outcome 就等于 logistic regression。

更准确地说，我们需要先明确目标治疗效果，然后选择能够可靠估计这一目标的统计方法。

这个原则也能帮助我们理解临床试验中经常出现的一个现象。

有时候，同一项研究的不同分析给出了不同结果。

但我们首先应当判断：

**这些分析究竟是在估计同一个 estimand，还是在估计不同的 estimands？**

如果两个方法估计的是同一个 estimand，却得到明显不同的结果，那么我们需要调查：

- 是否存在模型设定错误？
- 是否依赖不同的缺失数据假设？
- 是否存在估计偏倚？
- 是否因为样本量有限而产生较大的统计不确定性？
- 是否存在数值不稳定或其他技术问题？

但是，如果两个分析本来就对应不同的 estimands，那么不同结果可能反映的是治疗效果本身的不同特征。

我们也需要区分 sensitivity analysis 和 additional analysis。

Sensitivity analysis 通常是通过改变合理的假设或分析方法，评估针对同一个 estimand 的推断是否稳健。

而如果另一项分析改变了目标 estimand，它回答的就已经是另外一个科学问题，即使在方案中被称为 supportive analysis 或 supplementary analysis。

这两种情况在科学解释上具有重要区别。

## 六、一个完整的 Estimand，远不只是选择 Mean、Probability 或 Risk Difference

到目前为止，我们的讨论主要集中在三种 population-level summaries。

但是，这还不是 estimand 的全部。

ICH E9(R1) 提供了一个更加完整的框架，要求研究者明确五个关键属性：

1. **Population：** 我们关心的是哪一类患者？
2. **Treatment conditions：** 我们比较的是哪两种治疗条件？
3. **Variable：** 我们希望比较什么结局？
4. **Intercurrent-event strategies：** 如何定义和处理治疗后发生、影响结局解释的事件？
5. **Population-level summary：** 使用什么指标概括治疗差异？

回到我们的疼痛试验。

如果所有患者都按照随机分配的治疗完成了八周随访，问题相对简单。

但真实临床试验往往没有这么理想。

例如：

有些患者在第四周停止治疗。

有些患者因为疼痛加重而使用 rescue analgesics。

有些患者出现严重不良事件。

还有一些患者没有完成八周的疼痛评估。

这些情况应该如何处理？

假设一个患者在第四周停止治疗，但仍然完成了第八周的疼痛评分。

我们是否应该使用这个数据？

这取决于我们希望定义怎样的治疗效果。

如果研究目标是比较两种初始治疗策略在实际使用过程中产生的结果，那么 treatment-policy strategy 可能是合适的。

在这种策略下，治疗中断或 rescue medication 的发生可能本身就是治疗使用过程的一部分。

但如果研究问题是：

“假设患者没有使用 rescue analgesics，治疗 A 和 B 的疼痛结局会有什么差异？”

那么，我们实际上是在提出一个 hypothetical estimand。

这个 estimand 所对应的治疗效果，与前面的 treatment-policy estimand 并不相同。

它们不是简单地使用了不同的 missing-data 方法。

它们试图回答的是不同的临床问题。

再考虑严重不良事件。

严重不良事件可能影响患者是否继续治疗、是否接受其他治疗，以及之后的疼痛评分。

如果患者在八周评估前死亡，问题会更加复杂。

此时，患者的八周疼痛评分可能根本没有定义。

死亡不能简单地被当作一个普通的 missing pain score。

研究者可能需要考虑 composite strategy，或者其他能够合理反映临床问题的 estimand strategy。

另一方面，如果患者本来应该具有八周疼痛结局，只是由于失访或其他原因没有观测到，那么这属于 missing data 问题。

我们需要通过相应的统计假设和估计方法来处理，并开展必要的 sensitivity analyses。

因此：

**Intercurrent events 的处理策略参与定义我们究竟想估计什么治疗效果；missing data 的处理则主要涉及我们在数据不完整时，如何识别和估计这个治疗效果。**

这一区分非常重要。

所以，即使我们已经决定主要结果应该报告 mean difference、win probability 或 responder risk difference，也不意味着 estimand 已经完整定义。

我们仍然需要认真考虑目标人群、治疗条件、intercurrent events，以及最终结论希望适用于什么临床场景。

## 补充讨论：我们想回答什么，也决定了我们应该收集什么数据

到目前为止，我们主要讨论了如何根据临床问题定义 estimand，以及如何选择适当的 estimator。

但是，这个思路实际上还可以向前延伸一步。

**如果我们希望在研究结束时回答某个科学问题，那么，在研究开始之前，就必须认真考虑：我们究竟需要收集什么样的数据，才能支持这个问题的回答？**

还是以我们的疼痛临床试验为例。

假设我们只关心治疗八周后的 responder rate。

那么，我们可能只需要知道每位患者是否达到预先定义的 clinically meaningful improvement。

如果数据库最终只保存了 responder 和 non-responder 两种分类，我们仍然可以比较两组的 response probabilities。

但是，我们将无法仅凭这个二分类变量，可靠地还原患者究竟改善了多少分。

也无法知道，那些被归类为 responder 的患者，有多少只是改善了两分，又有多少人的疼痛完全消失。

更无法从这个二分类结果直接计算原来的 mean improvement difference 或完整评分对应的 win probability。

换句话说，**当我们决定只保留某一种经过简化的数据表达时，我们也可能同时失去回答其他科学问题的能力。**

当然，如果研究完整保留了 baseline 和八周时的原始 0–10 疼痛评分，我们就可以利用同一批数据计算前面讨论的 mean difference、win probability 和 responder risk difference。

这说明，并不是每个 estimand 都需要完全不同的数据采集方案。

但它提醒我们：原始数据的保留程度，以及测量的质量，直接影响研究结束后能够进行哪些有意义的分析。

现在，让我们再向前思考一步。

假设研究者关心的不只是患者八周后是否获得疼痛缓解，还希望知道：

患者需要多长时间才能开始缓解？

疼痛缓解能够持续多久？

治疗带来的改善是否稳定？

如果我们只在 baseline 和第八周测量疼痛，那么，即使这两次测量都非常准确，也无法直接回答这些关于治疗过程中变化轨迹的问题。

这时，我们可能需要在多个预先安排的时间点进行测量。

但这并不意味着测量越频繁就一定越好。

我们需要考虑疾病与症状变化的时间尺度、测量误差、患者负担，以及额外数据是否真正能够改善目标治疗效果的估计和解释。

再考虑一个更加现实的情况。

假设某位患者在第四周因为疗效不足而停止研究治疗，并开始使用 rescue medication。

如果我们的 estimand 采用 treatment-policy strategy，希望比较两种初始治疗策略下患者实际经历的八周结局，那么，原则上就需要尽可能继续收集这位患者停止治疗后的疼痛评分。

但如果研究方案规定，一旦患者停止研究治疗，就不再收集疼痛评分，那么研究结束时，我们可能发现一个严重问题：

我们想估计的 treatment-policy estimand，需要的数据并没有被充分收集。

此时，统计学家也许能够通过模型或缺失数据方法进行估计，但推断将更加依赖难以直接验证的假设。

这与研究一开始就按目标 estimand 设计随访，并尽可能保留这些观测数据，并不是同样强的证据基础。

反过来，如果研究目标涉及一个 hypothetical strategy，例如希望了解假设患者没有使用 rescue medication 时的治疗效果，那么我们也需要记录 rescue medication 的使用情况、发生时间，以及相关的临床信息。

但仅仅增加这些记录，并不意味着 hypothetical treatment effect 就可以被直接观察。其估计仍然可能需要额外的因果和统计假设。

这些例子共同说明一个重要原则：

**数据采集不仅是临床试验实施过程中的 operational activity，也是临床证据生成过程中不可缺少的科学设计。**

我们需要思考的不只是数据库中应该有哪些变量。

还包括：

变量应该如何定义？

应该在什么时间测量？

需要保留原始测量结果，还是只保存经过分类或计算的结果？

当患者发生治疗中断、使用额外药物或其他 intercurrent events 时，还需要记录哪些信息？

没有完成预定测量时，我们能否知道缺失发生的时间和原因？

这些问题最终会进入 Clinical Research Forms（CRFs）、Electronic Data Capture（EDC）系统、随访计划以及数据管理和质量控制要求之中。

但是，它们在科学上的起点，不应该只是数据库设计者认为哪些字段方便采集。

而应该是：

**我们希望形成什么样的临床证据？这些证据需要支持什么样的 treatment-effect claim？**

需要说明的是，我们并不主张为了将来可能出现的每一种分析而无限制地收集数据。

数据采集本身具有成本，也可能增加患者和研究团队的负担。

真正合理的原则应当是，根据事先明确的科学问题、目标 estimand 和证据用途，收集足够且质量可靠的数据。

临床问题、测量可行性和 estimand 的定义，也可能需要在设计过程中反复协调，而不是机械地遵循一个完全单向的顺序。

我们希望避免的，是研究结束后才发现：

需要回答的问题已经非常明确，但最关键的观测却从来没有被收集。

**统计模型可以帮助我们从有限数据中进行推断，但不能自动弥补研究设计阶段遗漏的科学信息。**

因此，在问应该使用什么统计模型之前，我们不仅应该先问希望估计什么治疗效果，还应该进一步问：

**为了可靠地估计这个治疗效果，我们需要观察什么、测量什么，以及保留什么证据？**

## 七、从 Statistical Evidence 到 Clinical Decision

为什么我们需要如此认真地区分这些概念？

原因并不是为了让统计分析变得更加复杂。

恰恰相反。

**我们的目的是确保统计分析真正回答了临床决策需要解决的问题。**

对于不同的人，同一项治疗效果可能具有不同的意义。

### 对患者而言

一位患者可能更加关心：

“如果我接受这种治疗，我有多大的机会获得明显缓解？”

另一位患者可能愿意承担较高的无效风险，以换取一个完全缓解的机会。

他们对治疗效果分布的偏好可能不同。

因此，平均改善程度并不能自动代表每一位患者的治疗偏好。

### 对临床医生而言

临床医生可能不仅关心平均疗效，还需要了解：

哪些患者能够明显获益？

哪些患者几乎没有改善？

是否存在病情恶化的风险？

治疗会带来什么不良反应？

患者需要承担多大的治疗负担？

这些问题往往需要结合多个结局以及完整的 benefit–risk profile 才能回答。

### 对临床试验设计者而言

研究者需要确定一个可以清楚解释、符合研究目标，并且具有足够证据支持的 primary estimand。

同时，还需要选择能够可靠估计该 estimand 的统计方法。

如果计划提出多个 confirmatory claims，还可能需要考虑 multiplicity control。

这里最重要的不是做尽可能多的分析，而是事先明确各项分析分别希望支持什么科学主张。

### 对监管机构而言

监管决策不仅取决于一个 treatment effect estimate 是否具有统计显著性。

还需要考虑：

该 treatment effect 是否具有明确的临床意义？

它是否适用于拟批准的目标患者人群？

研究是否具有可靠的设计和实施质量？

估计结果是否稳健？

总体 benefit–risk balance 是否支持该治疗的使用？

所以，estimand 的选择是连接统计分析和临床决策的重要一步，但并不是临床决策的全部。

即使我们精确定义并可靠估计了某个 treatment effect，也仍然需要结合安全性、治疗负担、患者偏好以及其他证据来判断治疗价值。

这里还有一个值得强调的区别。

我们鼓励研究者使用多种互补分析来理解治疗效果。

但这不意味着可以先进行大量分析，然后选择其中最有利的结果作为主要结论。

Primary estimand、主要统计检验以及具有临床意义的阈值，都应当尽可能事先明确。

互补分析的目的，应当是帮助我们理解治疗效果的其他维度，而不是为某个预期结论寻找统计支持。

最终，一项统计分析是否有价值，取决于我们是否能够清楚解释：

这个结果支持什么样的 treatment-effect claim？

支持这个结论需要哪些假设？

证据中还存在什么不确定性？

以及，这个结论究竟能够帮助我们作出什么临床决策？

## 八、在选择统计模型之前，我们应该先问什么？

回到文章开头的那个问题：

临床评分究竟应该作为 continuous、ordinal，还是 binary outcome 进行分析？

现在，我们应该能够更加清楚地看到：

这个问题当然重要，但它并不应该是我们思考的起点。

测量尺度很重要。

统计模型的假设很重要。

估计方法的效率与稳健性也很重要。

但是，在这些问题之前，我们首先应该问：

**我们究竟希望通过临床试验，了解治疗的什么效果？**

是治疗能够带来多大的平均改善？

是接受一种治疗的患者，在随机跨组比较中，更有可能获得较好的结局？

还是有多少额外的患者能够达到真正具有临床意义的改善？

这些问题可以使用同一个临床结局进行研究。

但它们对应的 estimands 并不相同。

而且，正如我们在疼痛试验的例子中看到的那样：

这些 estimands 甚至可能指向不同的治疗优势。

这并不一定意味着统计分析存在矛盾。

它可能意味着治疗效果具有不同的维度，而不同的 summary measures 正在揭示这些维度。

因此，临床试验统计分析的真正目标，并不只是寻找一种最适合数据形式的数学模型。

我们希望获得的是能够准确回答有意义的科学问题、并且真正帮助临床决策的证据。

**在问哪一种统计模型最合适之前，我们必须首先问：对于眼前需要作出的临床决策，究竟什么样的治疗效果才是真正有意义的？**

---

## 参考文献

1. Stevens SS. On the theory of scales of measurement. *Science*. 1946;103:677–680.  
   https://doi.org/10.1126/science.103.2684.677

2. Norman G. Likert scales, levels of measurement and the "laws" of statistics. *Advances in Health Sciences Education*. 2010;15:625–632.  
   https://doi.org/10.1007/s10459-010-9222-y

3. Selman CJ, et al. Statistical analyses of ordinal outcomes in randomised controlled trials: a scoping review. *Trials*. 2024;25:241.  
   https://doi.org/10.1186/s13063-024-08072-2

4. Long Y, et al. Role of the proportional odds assumption for the analysis of ordinal outcomes in neurologic trials. *Neurology*. 2025;105:e214146.  
   https://doi.org/10.1212/WNL.0000000000214146

5. Al-Jaishi AA, et al. Statistical analysis of Likert-based ordinal scales: a guide for clinical trialists. *BMC Medical Research Methodology*. 2026;26:78.  
   https://doi.org/10.1186/s12874-026-02793-5

6. International Council for Harmonisation. *ICH E9(R1): Addendum on Estimands and Sensitivity Analysis in Clinical Trials*. Finalized 2019; FDA final guidance 2021.  
   https://www.fda.gov/regulatory-information/search-fda-guidance-documents/e9r1-statistical-principles-clinical-trials-addendum-estimands-and-sensitivity-analysis-clinical

7. Kahan BC, Hindley J, Edwards M, Cro S, Morris TP. The estimands framework: a primer on the ICH E9(R1) addendum. *BMJ*. 2024;384:e076316.  
   https://doi.org/10.1136/bmj-2023-076316

8. US Food and Drug Administration. *Patient-Focused Drug Development: Selecting, Developing, or Modifying Fit-for-Purpose Clinical Outcome Assessments*. Final guidance, October 2025. See also *Incorporating Clinical Outcome Assessments Into Endpoints for Regulatory Decision-Making*, draft guidance, April 2023.  
   https://www.fda.gov/drugs/development-approval-process-drugs/fda-patient-focused-drug-development-guidance-series-enhancing-incorporation-patients-voice-medical
