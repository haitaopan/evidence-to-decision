---
title: "Missing Data：统计学家应该从哪里开始？"
description: "从缺失值填补到临床证据的完整工作流程"
pubDate: 2026-11-06
topics: ["Clinical Trials", "Evidence & Decisions", "AI & Methods"]
lang: zh
translationKey: missing-data-where-to-begin
draft: false
featured: false
---

## 从缺失值填补到临床证据的完整工作流程

*Missing Data Should Begin With the Clinical Question, Not the Imputation Algorithm*

**Evidence to Decision｜中文讨论稿**

---

## 一、一个我们非常熟悉的临床试验问题

假设我们正在开展一项随机临床试验。

试验已经完成入组，数据库也接近锁定。Data Management 团队告诉统计学家：

“有几名患者虽然完成了 baseline assessment，但之后没有任何 post-baseline efficacy assessment。我们应该怎样处理这些患者？”

这可能是临床试验中再普通不过的一个问题。

传统上，统计学家很容易立即进入技术性讨论：

应该使用 MMRM 吗？

应该采用 multiple imputation 吗？

是否可以使用 baseline observation carried forward（BOCF）？

能否把这些患者算作 non-responders？

是否需要 pattern-mixture model？

在 ITT 分析中应该怎样保留这些患者？

如果选择不同方法，Type I error、bias 和 statistical power 会怎样变化？

这些当然都是合理的统计问题。过去几十年，统计学界也围绕它们建立了大量方法学研究。

但是，我越来越认为，当我们立即开始讨论这些问题时，很可能已经跳过了临床试验中最关键的几个步骤。

**我们还不知道这些患者为什么没有数据。**

我们不知道他们是否真正接受了治疗。

不知道他们是因为严重毒性退出，还是因为治疗无效、疾病进展、访视安排问题，或者单纯的数据录入错误。

不知道有没有在其他医疗机构完成相同的检查。

甚至还不知道，这些没有观察到的信息，对于试验真正需要回答的临床问题，究竟有多么重要。

如果这些问题都没有弄清楚，直接比较不同的 imputation methods，究竟是在解决什么问题？

我想提出一个原则：

> Missing-data methodology should begin with understanding why information is missing, what decision it affects, and whether that information can still be recovered—not with choosing an imputation algorithm.

中文可以表达为：

**缺失数据的处理，应该从理解信息为什么缺失、会影响什么临床决策、以及能否恢复这些信息开始，而不是从选择一种插补算法开始。**

这不是否定 missing-data methodology。

恰恰相反，这是希望把 missing-data methodology 放回它真正应该处于的位置。

我们需要改变的，不是统计学方法本身，而是统计学家处理临床证据问题的工作顺序。

---

## 二、传统 missing-data research 解决了什么，又没有解决什么？

Missing-data methodology 是现代统计学中一个非常成熟、非常重要的研究领域。

从 Rubin 的 missing-data framework，到 likelihood-based methods、multiple imputation、inverse probability weighting，再到 selection models、pattern-mixture models、reference-based imputation 和 tipping-point analyses，统计学家已经建立了相当丰富的理论和实践工具。

这些方法并非没有价值。

事实上，如果完全没有这些方法，我们在许多临床试验中根本无法进行合理的统计推断。

但我认为，需要明确区分两个问题。

### 第一个问题：给定缺失数据和某些假设，怎样进行统计估计？

这是传统 missing-data methodology 的核心问题。

形式上，假设我们希望估计治疗组与对照组在时间 T 的平均结果差异：

$$
\theta=E[Y_T(1)]-E[Y_T(0)].
$$

这里的 $Y_T(1)$ 和 $Y_T(0)$ 表示在明确规定的治疗及 intercurrent-event 策略下，两种治疗条件对应的潜在结局。这个表达式只有在临床目标和结局定义足够明确时才有意义。

对于每个患者，我们可能只观察到部分结果。

定义：

$$
R_i =
\begin{cases}
1,& \text{目标结局被观察到},\\
0,& \text{目标结局未被观察到}.
\end{cases}
$$

我们所拥有的数据是：

$$
O_i=(A_i,X_i,R_i,R_iY_i),
$$

其中：

- $A_i$ 是随机分配的治疗；
- $X_i$ 是 baseline covariates；
- $Y_i$ 是目标结局；
- $R_i$ 表示目标结局是否被观察。

这里暂时使用一个简化的、单时间点的结局框架。

统计学方法要解决的问题，是能否根据观察到的数据及额外假设，合理估计 $\theta$。

例如，在某些条件下，我们可能假设：

$$
R\perp Y_{\mathrm{mis}}
\mid A,X,Y_{\mathrm{obs}}.
$$

这是 missing at random（MAR）思想的一种简化表达。

在适当的模型设定、可识别性与支持条件下，我们可以利用观察数据进行推断。

这个研究问题完全合理。

### 第二个问题：我们究竟有没有足够可信的证据，回答临床决策所需要的问题？

这就是我认为应该放在更前面的问题。

如果有患者没有 post-baseline outcome，我们首先应该知道：

这个 outcome 原本是不是应该被收集？

为什么没有被收集？

是不是发生了治疗相关的事件？

该事件是否改变了结局的含义？

现有临床信息是否能够解释缺失机制？

能否恢复真正的观察结果？

如果不能恢复，我们需要依赖什么假设？

这些假设是否具有临床可信度？

最终结论对这些假设有多敏感？

只有回答这些问题之后，选择某种 statistical estimator 才真正有意义。

换句话说，传统统计问题是：

**Given incomplete data, how should we estimate the treatment effect?**

我更希望增加一个先行问题：

**Given a clinical decision, what evidence is required, what evidence is available, and what can we responsibly infer from the evidence that remains?**

这两个问题并不冲突。

第二个问题应该决定第一个问题如何展开。

---

## 三、为什么“没有数据”不能简单理解为“需要插补”？

这里需要澄清三个经常被混在一起的概念。

### 1. 没有观察到结局，不等于结局没有发生

例如，在肿瘤临床试验中，患者没有完成预定的影像评估，并不代表疾病没有进展，也不代表没有发生肿瘤缓解。

有可能检查已经完成，但影像文件没有上传。

有可能患者在其他医院完成检查。

也有可能患者因疾病恶化无法参加访视。

这三种情形所蕴含的信息完全不同。

第一种可能是数据管理问题。

第二种可能是数据获取问题。

第三种则可能与临床结局及缺失机制直接相关。

如果把它们统一标记为 missing，再交给同一个 imputation model，我们实际上已经丢失了重要的临床信息。

### 2. Missing data 不等于 intercurrent event

这是 ICH E9(R1) 框架中特别重要的区别。

例如，一名患者因为严重不良反应停止治疗。

治疗停止本身可能属于一个 intercurrent event，因为它可能影响我们希望估计的 treatment effect 的解释。

但是，停止治疗之后没有继续收集疗效数据，则是另一个问题。

假如我们的 clinical question 是：

“如果患者按临床实践接受这一治疗策略，包括可能发生的早期停药，最终疗效如何？”

那么治疗停止之后的结果可能依然非常重要。

如果我们停止收集数据，便可能制造一个本来可以避免的 missing-data problem。

反过来，如果我们的 estimand 采用 hypothetical strategy，想估计没有发生某种治疗中止事件时的结果，那么我们需要明确地推断一个假设性结局。

这两种分析不是简单换一种插补方法。

它们可能代表不同的临床问题。

因此：

**Intercurrent-event strategy 决定我们需要什么结果；missing-data methodology 决定当所需结果未被观察到时，我们如何进行推断。**

两者必须相互协调，但不能混为一谈。

### 3. 保留随机化患者，不等于必须给每个人填入一个数字

ITT 原则在随机试验中极其重要。

但是，ITT 不应该被机械地解释为，每一位随机患者都必须得到一个人为填补的 outcome value。

随机化定义了我们希望比较的治疗组和目标人群。

如果某些患者完全没有 post-baseline outcome，仅仅在数据库中保留他们的记录，并不会自动产生关于治疗后结局的信息。

在某些模型中，这些患者的 baseline 信息可以辅助建模；但在另一些标准结局模型中，没有 post-baseline outcome 的患者可能无法直接贡献治疗效应估计所需的信息。

我们不能因为一项分析被称作 ITT analysis，就认为所有随机患者的结局证据都得到了充分利用。

更不应该为了形式上保持样本量，而人为创造并不存在的临床观察。

正确的问题应该是：

**我们是否仍然以随机化目标人群为推断对象？分析方法依赖什么假设来处理未观察到的结局？这些假设是否足以支持目标人群中的治疗效应解释？**

这才是 ITT 和 missing-data analysis 应该共同回答的问题。

---

# 四、我认为临床试验统计学家应该采用的完整工作流程

如果今天一个临床试验团队把一份存在缺失数据的数据库交给我，我不会从选择 MMRM 或 multiple imputation 开始。

我会按照下面的顺序展开工作。

## Step 1. 首先明确临床决策：我们到底想用这些数据决定什么？

这是我认为整个流程最关键的起点。

临床试验并不是为了产生一个 p-value 而存在。

试验往往需要支持某个具体决策。

例如：

- 是否继续开发一种药物？
- 是否进入下一阶段临床试验？
- 某个 dose 或 schedule 是否值得继续研究？
- 是否有足够证据支持临床疗效？
- 治疗的获益是否足以抵消毒性？
- 是否可以向监管机构提交申请？
- 某种治疗策略是否应该改变当前临床实践？

不同决策，对证据完整性的要求可能完全不同。

假设两项临床试验都有 10% 的 missing data。

第一项是以连续症状评分为主要终点的大型随机试验。

第二项是只有 20 名患者、以肿瘤反应支持 go/no-go decision 的早期儿科肿瘤试验。

即使缺失比例完全相同，它们面临的临床证据问题也可能有根本区别。

尤其在小样本试验中，一两名患者的真实 outcome 就可能改变是否达到预设决策阈值。

因此，我首先要问：

**如果我们对这些缺失患者的真实结局存在不确定性，究竟会影响哪一个决定？**

我们不是先计算缺失比例，再决定严重程度。

而是先明确决策，再判断缺失信息的实际影响。

## Step 2. 明确 estimand：我们需要知道什么样的 treatment effect？

当 clinical question 明确后，下一步是定义 estimand。

至少需要回答五个方面：

**Population：** 我们关心哪一类患者？

**Treatment conditions：** 比较哪些治疗条件或治疗策略？

**Variable：** 具体什么结局反映我们关心的临床问题？

**Intercurrent events：** 发生停药、救援治疗、换药、进展或死亡时，应该怎样在 treatment effect 定义中处理？

**Population-level summary：** 我们希望估计的是平均差异、风险差异、风险比、hazard ratio，还是其他临床上有意义的量？

以治疗停止为例：

如果我们使用 treatment-policy strategy，可能仍然需要治疗停止之后的 outcome。

如果使用 hypothetical strategy，我们可能需要估计假设治疗没有停止时的 outcome。

如果使用 composite strategy，某些事件可能直接成为结局定义的一部分。

如果采用 while-on-treatment strategy，所关心的观察窗口又可能不同。

这里还必须注意：

死亡与一般治疗停止并不相同。

对于一个定义为生存患者在某个时间点的生活质量评分的 outcome，死亡之后的评分可能根本没有定义。

这种情况下，不能简单地把死亡后的评分当作普通 missing value，再交给 MMRM。

应该先考虑是否需要 composite endpoint、while-alive strategy、principal-stratum strategy 或其他与临床问题一致的定义。

因此：

**在 estimand 没有明确之前，所谓“应该怎样填补缺失数据”，往往还是一个尚未定义完整的问题。**

## Step 3. 建立 required-evidence map：哪些信息是必须观察到的？

定义 estimand 以后，我会把临床问题转化成一份明确的数据需求清单。

这一步尤其适合在 protocol development 和 CRF design 阶段完成。

例如，对于一个以固定时间窗口内肿瘤反应为终点的试验，我们需要明确：

患者是否接受了治疗？

肿瘤影像应该在哪些时间进行？

评估需要使用哪一套 response criteria？

影像由谁判断？

是否需要确认缓解？

是否允许外院影像？

如果患者提前退出，是否仍需要评估？

疾病进展和死亡如何影响 endpoint classification？

如果某项影像没有获得，有没有替代的临床证据？

对于一个 repeated-measures continuous outcome，我们可能需要：

各个访视时间点的测量；

baseline disease severity；

与结局相关的重要协变量；

治疗停止或救援治疗的时间；

停止治疗后是否继续测量；

缺失原因及相关辅助信息。

这些并不完全是 statistical analysis 的问题。

它们同时涉及 protocol、CRF、EDC、临床访视安排、影像管理、数据质量以及研究团队的实际执行能力。

我会把这个过程概括为：

**Decision → Estimand → Required observations → Assessment timing → Data source → Provenance → Consequence if missing.**

这里的 provenance 非常重要。

我们不仅要知道一个数据字段有没有值，还应该尽可能知道这个值来自哪里、何时测量、如何确认、是否满足 endpoint definition。

这样一来，missing-data analysis 就从一项数据库锁定前的统计任务，前移到了临床试验设计阶段。

## Step 4. 诊断缺失：先弄清楚“没有数据”究竟意味着什么

当我们发现某名患者缺少 outcome 时，下一步不是立即赋予 missing indicator，而是进行 evidence diagnosis。

我会至少区分五种情形。

| 情形 | 实际含义 | 优先行动 |
|---|---|---|
| Data exist but are not entered | 检查已经完成，但没有进入分析数据库 | 核查和补录 |
| Data may be recoverable | 结果可能存在于外院、影像系统或原始记录 | 在许可范围内追查 |
| Outcome is defined by a clinical event | 某项事件已发生，并根据预先定义的规则决定结局 | 核实事件和 endpoint 规则 |
| Outcome is genuinely unobserved | 目标结局确实没有被测量 | 评估缺失机制和估计假设 |
| Outcome is not defined under the chosen variable | 特定临床事件之后，目标变量本身不存在或不适用 | 重新核对 estimand 与事件策略 |

这五类不应该混在一起处理。

尤其要强调第三类和第五类。

例如，死亡可能是某些 time-to-event endpoints 的事件之一，却可能使某些连续结局不再有定义。

这种情况的处理不能脱离 endpoint 与 estimand。

我们不能机械地认为：

“数据库没有对应 outcome，因此需要 imputation。”

数据库中的空白字段，与临床证据中的真正缺失，并不是一回事。

## Step 5. Clinical adjudication：逐例检查重要缺失患者的临床过程

对于特别重要的缺失，尤其是小样本试验或关键终点，我倾向于采用逐例审查方式。

这不意味着统计学家需要替代临床医生判断。

恰恰相反，统计学家应该与临床 PI、Data Management、Clinical Operations、医学监查团队合作，理解每位患者实际发生的临床过程。

我通常希望看到一条时间线：

Randomization → First dose → Treatment exposure → Adverse events → Discontinuation or progression → Planned assessment → Actual available evidence。

例如：

一名患者第 1 天接受治疗。

第 12 天发生 grade 3 toxicity。

第 18 天停止治疗。

原定第 28 天进行疗效评估。

最终没有第 28 天数据。

这时，最值得先问的不是应该使用 BOCF 还是 MI。

而是：

这名患者为什么没有第 28 天数据？

是因毒性停止治疗后，试验不再要求随访？

还是患者虽然停药，但继续在医院接受常规护理，只是没有录入研究数据库？

如果原本可以继续收集，为什么没有继续收集？

对于我们所定义的 estimand，停止治疗后的结果是否仍然有意义？

如果这些问题不能回答，我们很难知道所选模型需要承担多大的假设风险。

还有一个实践原则：

**逐例审查必须遵循预先定义或客观一致的规则，最好在盲态下、由适当的临床人员参与，避免因为已知治疗结果而选择性地补充、解释或排除患者。**

临床解释越重要，越需要有可审计的操作过程。

## Step 6. 先恢复真实证据，再考虑统计填补

这是我尤其想强调的一步。

假设我们有五名患者没有 scheduled tumor assessment。

经过审查发现：

两人的影像已经完成，只是尚未上传。

一人的外院检查记录可以获得。

一人因提前死亡，没有完成原定影像。

最后一人确实失访，无法取得任何后续资料。

最初看起来，我们有五个 missing outcomes。

但完成临床信息追查之后，实际上情况已经完全不同。

前三位患者的数据可能可以恢复。

第四位患者的死亡已经是一个已知临床事件，需要按照预先定义的 endpoint 和 estimand 处理。

只有第五位患者才可能构成真正无法恢复的 outcome uncertainty。

当然，能否使用外院数据，还需要取决于方案、同意范围、测量一致性、时间窗口和其他预设要求；不能因为找到一个数值，就无条件纳入。

但这个例子说明了一个基本问题：

**Recoverable evidence is not an imputation problem.**

我不认为一个复杂的 multiple-imputation algorithm，能够替代对真实临床记录的一次合理核查。

实际工作中，应该在临床上有意义、操作上可行、符合伦理和授权的范围内，优先查找可恢复的信息。

而且这种追查应当有合理的时间、资源和完整性边界，不应该使数据库无限期无法锁定。

数据确实无法获得之后，我们再进入 statistical inference。

这就是我认为 missing-data management 应该坚持的工作顺序。

---

# 五、当数据确实无法恢复时，统计学家应该怎样做？

到这里，我们才真正进入传统 missing-data methodology 的核心领域。

我并不主张此时停止分析。

相反，现在才是统计学方法能够正确发挥作用的时候。

## Step 7. 根据 estimand、endpoint 和缺失机制选择分析方法

首先要区分一个基本事实：

Missing-data mechanism 通常不能仅凭观察数据被完全验证。

我们可以检查缺失是否与已观察到的 baseline covariates、治疗分组、既往结局、毒性事件或访视历史有关。

但这些检查不能证明 MAR 一定成立，也不能直接排除 MNAR。

例如，某项分析可能假设：

$$
P(R=1\mid Y_{\mathrm{mis}},Y_{\mathrm{obs}},X,A)
=
P(R=1\mid Y_{\mathrm{obs}},X,A).
$$

这是简化的 MAR 表达。

它的含义不是“缺失完全随机”。

而是说，在条件化于所使用的已观察信息以后，缺失概率不再依赖未观察到的结果。

这里有一个容易被忽略的问题：

**我们的数据库中是否真正收集了足够丰富的信息，使这个假设在临床上具有可信度？**

假如患者因为疾病严重恶化而停止随访，但我们没有记录恶化原因、相关症状、近期检测和治疗变化，那么仅凭 baseline characteristics 进行 imputation，很可能无法充分解释缺失机制。

反过来，如果研究团队详细记录了此前的疗效趋势、毒性、治疗停止原因和辅助评估，统计模型就可能获得更有价值的信息。

这再次表明：

Missing-data methodology 的有效性，在一定程度上依赖前期 clinical evidence collection 的质量。

### MMRM：适用，但不是自动正确

MMRM 可以非常有效地利用纵向观察结果，处理某些不完整重复测量数据。

但使用 MMRM 并不意味着所有缺失机制都得到解决。

模型必须与目标 estimand 相匹配，并依赖关于结局分布、相关结构、缺失机制等方面的假设。

尤其当治疗停止与真实结局相关时，如果仅保留治疗期间的数据而忽略停药后的 outcome，MMRM 可能隐含一个并非原本希望估计的 hypothetical treatment effect。

因此，分析之前必须确认：

MMRM 所估计的 treatment effect，是不是我们真正需要的 treatment effect？

### Multiple imputation：可以传播不确定性，但不能创造真实观察

Multiple imputation 能够通过多次生成未观察结果，适当地反映部分缺失数据不确定性。

但其有效性取决于 imputation model、目标 estimand、缺失假设以及分析与插补之间的协调。

如果关键预测信息根本没有被收集，增加 imputation 次数不会自动修复缺失机制的错误假设。

多次插补不是让同一个猜测重复很多遍后变成事实。

### BOCF 或 LOCF：简单不等于合理

对于一名 baseline score 为 20 的患者，如果第一次随访没有数据，我们把变化设为 0，并不意味着患者真实地没有变化。

真实结果可能改善，也可能恶化。

在某些明确的临床或统计场景中，特定的保守规则可能可以被辩护。

但不能因为一种单值填补方法看起来保守，就假定它对 treatment contrast、Type I error 或 clinical decision 一定保守。

保守性取决于治疗组、缺失机制、endpoint 和估计目标。

因此，我不会将 BOCF 或 LOCF 视为普遍适用的缺失数据解决方案。

### Non-responder imputation：特别需要区分 endpoint definition 与假设

在肿瘤临床试验中，non-responder imputation（NRI）非常常见。

但我们必须问：

未观察到 response，是否等于没有发生 response？

如果终点是“在规定时间内被确认的客观缓解”，按照事先规定的评价规则，没有任何可确认 response 的患者可能会被分类为 non-responder。

但是，如果研究问题是患者是否真实地发生过肿瘤缩小，而只是没有得到测量，那么 NRI 不应被表述为我们已经知道该患者没有缓解。

前一种可能是可观察、可核查的 endpoint definition。

后一种则涉及未观察 outcome 的假设。

这两者可以采用相同的数值编码，但科学含义并不相同。

---

# 六、一个具体案例：儿科肿瘤早期试验中的五名患者

假设我们正在开展一项小样本儿科肿瘤 Phase II trial，以固定评估窗口内的 objective response 作为主要终点。

研究计划纳入 25 名患者。

其中五名患者没有完成预定的第一次 response assessment。

我们先看看这些患者：

| 患者 | 已知临床信息 | 应该怎样思考 |
|---|---|---|
| A | 已完成影像，但没有上传研究数据库 | 先核查、取得影像 |
| B | 治疗后严重毒性，提前停药 | 明确毒性事件、endpoint 与后续评估要求 |
| C | 评估前死亡 | 根据预定义规则处理死亡，不随意视为普通缺失 |
| D | 在外院完成影像 | 评估是否符合方案并可用于终点判定 |
| E | 失去联系，无后续临床信息 | 真正需要重点评估缺失假设的患者 |

如果统计学家只拿到数据库，很可能看到五个空白的 response 字段。

但经过临床审查，我们发现五人的信息状态截然不同。

更进一步，我们要问：

这项试验的 go/no-go decision 是什么？

例如，是否规定至少观察到某个数量的 confirmed responses，才认为药物值得进一步研究？

如果一名患者的真实 response classification 足以让试验跨过决策门槛，那么这名患者的缺失就非常重要。

反过来，如果无论该患者发生什么结果，预定 go/no-go decision 都不会改变，那么缺失仍应被如实报告和妥善处理，但它对当前决策的影响可能相对有限。

这里可以引出一个我认为很实用的概念：

**Decision-relevant missingness。**

它并不是一种新的统计缺失机制分类，而是一种实践上的优先级判断：

某项缺失信息对目标临床决策有多大影响？

从这个角度看，missingness 的重要程度不应该只用 missing percentage 来衡量。

还应该考虑缺失位置、可能的临床机制、终点的敏感程度和决策门槛。

对于有限资源的临床研究团队，这种思维尤其有价值。

---

# 七、一个简单的数学例子：为什么应该关注缺失对结论的影响？

假设一项随机试验，每组 50 名患者，主要终点是 binary response。

我们观察到：

治疗组：16 人确认缓解，6 人结局未知。

对照组：10 人确认缓解，4 人结局未知。

为了讨论方便，假设其余已观察患者均已确认不符合 response 定义，并且对缺失患者的真实二分类状态暂不作额外假设。

那么治疗组真实 response proportion 的逻辑边界是：

$$
\frac{16}{50}\le p_T\le\frac{16+6}{50},
$$

即

$$
0.32\le p_T\le0.44.
$$

对照组为：

$$
\frac{10}{50}\le p_C\le\frac{10+4}{50},
$$

即

$$
0.20\le p_C\le0.28.
$$

因此，真实 response risk difference 的识别边界是：

$$
0.32-0.28\le p_T-p_C
\le0.44-0.20,
$$

也就是

$$
0.04\le p_T-p_C\le0.24.
$$

需要特别说明：这里计算的是给定已观察患者分类后、未观察结局可能导致的逻辑范围，不是 confidence interval，也没有包含抽样误差。

这个例子很有意思。

即使我们完全不知道缺失患者的 response status，在这些假设下，治疗组的 response proportion 仍然高于对照组。

但是差异大小可能从 4 个百分点到 24 个百分点。

这对临床解释可能很重要。

如果研究团队只有一种固定的 NRI 分析，它可能报告：

治疗组 32%，对照组 20%，risk difference 为 12 个百分点。

这个数字并不是没有用。

但如果我们没有区分“没有确认缓解”与“真实缓解状态未知”，就有可能把一个分析规则对应的结果，误当成对潜在真实 response rate 的直接识别。

我更愿意让临床团队同时看到：

观察证据是什么？

缺失带来的不确定性有多大？

在什么假设下结论稳定？

又在什么条件下结论会改变？

这里没有使用复杂的统计模型，却能够清楚揭示证据与决策之间的关系。

当然，真正的 confirmatory analysis 还需要按照预先规定的 estimand、statistical hypothesis、uncertainty quantification 和检验规则进行。

这个简单例子的目的，不是取代正式统计分析，而是帮助我们理解未观察结局所造成的信息边界。

---

# 八、Sensitivity analysis 应该回答的，不只是统计显著性会不会改变

我认为 missing-data analysis 最重要的任务之一，是让我们理解结论对不可验证假设的依赖程度。

这里需要把 sensitivity analysis 从纯粹的方法比较，推进到证据可靠性的评估。

举例来说，我们可以在一个连续型 endpoint 的简化分析中，令：

$$
\mu_{a,\mathrm{mis}}
=
\mu_{a,\mathrm{MAR}}+\delta_a,
$$

其中 $\delta_a$ 表示第 $a$ 个治疗组缺失患者的平均结果相对于 MAR 预测值的偏移。

如果以正值表示较好的临床结果，那么负的 $\delta_a$ 可以表示缺失患者可能比模型预测得更差。

在一个简单的单时间点、组均值比较框架下，如果组内缺失比例为 $\pi_a$，那么均值差会随偏移参数近似按以下关系变化：

$$
\theta(\delta_1,\delta_0)
=
\theta_{\mathrm{MAR}}
+
\pi_1\delta_1-\pi_0\delta_0.
$$

这不是所有 longitudinal 或 complex-estimand models 的通用公式；它只是一个便于理解的简化示例。

真正有意思的并不是把 $\delta$ 从 −10 扫描到 +10，然后展示一张图。

而是追问：

根据临床知识，什么样的 $\delta$ 是有可能发生的？

如果患者因为疾病恶化退出，合理的偏移范围是什么？

如果患者主要因为非医疗原因缺失，又应该采用什么范围？

治疗组与对照组是否可能具有不同的缺失机制？

多大的偏移会使主要临床结论发生改变？

这个使结论跨越临床或统计决策阈值的位置，就是 tipping point。

但是 tipping-point analysis 也有一个容易被忽略的问题：

**找到一个能够推翻结论的数学参数值，并不意味着该参数值在临床上具有合理性。**

因此，一份好的 sensitivity analysis 不应该只报告：

“当 $\delta=-3.7$ 时，p-value 超过 0.05。”

它还应该解释：

这样的偏移相当于多大的临床恶化？

真实临床经验是否支持这种程度的恶化？

这种偏移是否可能只发生在一个治疗组？

如果我们没有相应临床数据，能否对这些假设保持足够谨慎？

最终我希望 sensitivity analysis 回答：

**How much unobserved information would have to differ from our assumptions before the clinical decision changes—and is that difference clinically plausible?**

当然，primary sensitivity analysis 通常应当尽量针对同一个 estimand 检验关键估计假设的稳健性。

如果我们改变 estimand，例如从 treatment-policy effect 转向 hypothetical effect，那么分析可能具有补充价值，但那不等于简单地验证同一个结果的稳健性。

这是非常重要的方法学边界。

---

# 九、为什么同样的 missing-data 方法不能机械地跨临床领域使用？

我想用三个不同的临床场景说明。

## 场景一：连续的抑郁症评分

假设一项抑郁症试验，每名患者在 baseline、第 2 周、第 4 周和第 8 周完成症状评分。

一名患者 baseline 为 20 分，却没有任何后续数据。

我们不知道他是否改善。

如果想估计第 8 周的平均症状评分，合理的分析通常需要借助其他患者的信息、baseline severity、治疗组别、与缺失和结局相关的辅助变量，以及明确的 missing-data assumptions。

如果患者因为早期缺乏疗效退出，假设其缺失满足 MAR 可能需要进一步论证。

如果患者接受了 rescue medication，我们还需要确定该事件应采用什么 estimand strategy。

这里，MMRM、MI、reference-based imputation 或 pattern-mixture approaches 都可能有实际意义。

但不同方法必须与临床问题一致。

## 场景二：儿科肿瘤的 objective response

现在把终点换成 objective response rate。

患者没有第 8 周影像。

我们不能简单套用连续型症状评分的处理逻辑。

因为这里涉及影像时间窗口、response confirmation、疾病进展、治疗中止、死亡和病灶可评价性等问题。

有时我们可以根据方案将没有确认缓解的患者分类为 non-responder。

有时则需要讨论真正缺失的 response information。

关键取决于 endpoint 的定义和 estimand，而不是先决定使用 NRI。

## 场景三：肿瘤 PFS

PFS 是另一种不同的问题。

患者可能错过某次影像，但随后在下一次影像发现疾病进展。

如果在观察间隔中间发生未观察到的疾病进展，真实的 progression time 可能存在一定不确定性。

如果患者完全失访，还涉及 censoring assumptions。

这里的问题不再是对一个连续数值进行 MI 那么简单。

我们需要明确：

事件定义和日期规则是什么？

死亡是否计入 PFS event？

错过的影像如何影响疾病进展的识别？

Censoring 是否可能与疾病风险有关？

不同的 assessment schedules 是否会影响组间比较？

是否需要对 informative censoring、interval uncertainty 或其他机制开展适当分析？

而且，行政性随访截止造成的右删失，与因健康恶化而提前失访，并不能不加区别地看待。

所以：

**同样都是 missing information，连续型结局、二分类 response 以及 time-to-event outcome，可能需要完全不同的统计策略。**

这正是为什么我不赞成把某一种 missing-data algorithm 视为通用答案。

---

# 十、数据已经无法恢复时，我们仍然应该做什么？

有人可能会问：

如果数据的确不存在，而且已经没有任何机会恢复，前面的临床审查还有价值吗？

我的回答是：有，而且可能非常重要。

即使无法恢复真实 outcome，临床审查仍然可以帮助我们明确：

缺失是否与治疗相关；

是否与严重毒性或疾病恶化相关；

是否存在组间差异；

哪些辅助信息仍然可用；

哪一种 missing-data assumption 比较合理；

应该使用什么范围进行 sensitivity analysis；

以及某些结论是否已经超出了现有证据能够支持的程度。

我们也必须承认，有些缺失机制无法从现有数据中获得足够可靠的信息。

这时候，统计学家不应该装作这些问题已经被解决。

但也不应该因为信息不足，就完全拒绝分析。

应当给出与信息量和假设强度相称的推断。

例如，在一个低缺失率、临床机制相对明确、结论在合理敏感性范围内稳定的试验中，我们可能对治疗效应保持较强信心。

相反，在一个高缺失率、组间退出机制不同、结果又高度依赖某种无法验证假设的试验中，即使 primary analysis 得到非常小的 p-value，我们也需要对证据可信度保持谨慎。

这里的关键不是方法是否足够先进。

而是结论的可信度能否与数据质量、临床事实及假设强度相匹配。

---

# 十一、临床试验设计阶段才是预防缺失问题的最佳时机

到现在为止，我们主要讨论的是数据库已经存在缺失时应该怎么办。

但对于未来的新试验，我认为最重要的工作应该发生得更早。

在 protocol design、CRF development 和 study operations planning 阶段，就应该考虑未来可能缺失的关键信息。

例如：

### 治疗停止之后，我们还会继续收集哪些数据？

这应该由 estimand 和临床问题决定。

如果我们需要估计包括治疗停止在内的整体治疗策略效果，那么停止用药通常不意味着所有疗效随访都应该自动终止。

试验应当尽可能设计符合伦理和实际执行能力的后续数据收集机制。

当然，患者的知情同意、研究退出意愿以及适用规定必须受到尊重。

### 如果患者无法完成原定 assessment，我们有哪些替代信息来源？

对于肿瘤试验，可能需要考虑外院影像、病历、死亡记录、其他合格检查结果等。

对于 patient-reported outcome，可能需要考虑远程数据采集或更灵活的随访安排。

但是替代数据能否用于主要终点，应提前考虑测量一致性、数据质量和相应的分析规则。

### 如果某个数据字段缺失，会产生什么后果？

我认为可以在 CRF 设计时给关键变量做一个 evidence-readiness assessment：

这个字段是否支持主要 endpoint？

缺失后能否恢复？

是否可以通过其他字段推导？

如果缺失不可恢复，会不会影响 endpoint evaluability？

是否会改变主要统计分析所依赖的假设？

如果会影响重要的临床决策，我们能否在试验开始前采取措施？

这种审查不是为了给 protocol 打分，也不是增加无谓的数据采集负担。

它的目的是确保：

**我们真正需要的证据，能够在临床试验实施过程中被合理地观察、记录和保存。**

这里还存在一种资源分配上的权衡。

并不是每个变量都应该无限制地收集。

更多字段可能增加患者和研究团队负担，甚至降低整体数据质量。

好的 evidence-readiness planning 不是收集一切，而是优先确保对主要临床问题至关重要的信息。

---

# 十二、Missing-data methodology 应该服务于 evidence credibility

我希望引入一个更广泛的概念：

**Evidence credibility。**

在传统的统计评价中，我们可能主要关心：

Bias 是否很小？

Type I error 是否得到控制？

Power 是否足够？

Confidence interval coverage 是否达到标称水平？

这些指标非常重要。

但是，如果我们希望用统计结果支持真实临床决策，我认为还需要关注另一个层面。

给定某个估计结果：

它依赖哪些假设？

这些假设能否被临床事实支持？

最关键的数据有没有被观察到？

缺失的原因是否得到合理解释？

是否存在可以恢复但没有恢复的数据？

结果是否对临床上合理的替代假设保持稳定？

如果结果改变，改变的是统计显著性、临床意义，还是最终决策？

我们能否清楚告诉临床 PI、DSMB、监管审评人员以及其他研究者：哪些结论来自观察数据，哪些依赖模型假设？

我认为，真正可信的 missing-data analysis 应该能够回答这些问题。

这里不是要提出一个新的、未经验证的 credibility score。

相反，我主张采用一种透明、结构化的证据判断过程。

统计方法可以帮助我们量化不确定性，但不能替代对证据来源与适用性的判断。

而且并不是所有的不确定性都能够用一个标准误或一个 confidence interval 完整表示。

有时，我们还需要明确指出识别假设的不确定性、模型风险以及临床解释的限制。

这也是为什么我认为，missing-data research 与 clinical evidence engineering 应该更加紧密地结合。

---

# 十三、把这个思路真正应用到日常统计工作

我不希望这篇文章只停留在理论层面。

如果一名统计学家在实际工作中收到一封邮件：

“We have several subjects with no post-baseline assessment. Can you advise how to handle them in the analysis?”

我建议不要立即回复：

“Use multiple imputation.”

也不要立即回复：

“Treat all missing assessments as non-response.”

更好的做法，是先组织一个简短、结构化的审查过程。

## 我会要求团队准备一份 Missing Outcome Review Table

| 内容 | 需要回答的问题 |
|---|---|
| Subject ID | 哪一名患者 |
| Treatment assignment | 属于哪一组；必要时盲态处理 |
| Endpoint / visit | 缺失的是哪个终点、哪个访视 |
| Last available assessment | 最后一次可靠观察是什么 |
| Treatment / disease status | 停药、进展、毒性、死亡等是否发生 |
| Reason for missing | 为什么没有结果 |
| Existing source information | 是否存在原始病历、影像或其他记录 |
| Recoverability | 能否在规定条件下恢复 |
| Relevant estimand | 这个缺失对哪个 estimand 有影响 |
| Proposed resolution | 采取什么处理措施 |
| Remaining assumptions | 数据无法恢复时还依赖哪些假设 |
| Decision consequence | 可能如何影响关键临床结论 |

这张表不一定需要非常复杂。

对于几名关键患者，一份简洁而准确的审查记录，就可能比立即运行数十个 imputation models 更有帮助。

如果问题在试验开始后持续发生，团队还应当定期监测缺失模式。

例如，不同中心、治疗组、访视阶段以及停药原因是否存在明显差异。

这不仅有助于最终分析，也可能帮助研究团队及时改善随访流程。

## 随后召开一次简短的 Clinical–Statistical Review

会议的目标不是让大家选择一个最喜欢的 statistical method。

而是达成几个明确结论：

第一，哪些数据已经得到确认？

第二，哪些数据还可以恢复？

第三，哪些缺失与 intercurrent events 有关？

第四，现有 SAP 是否已恰当覆盖这些情形？

第五，如果需要处理剩余缺失，什么假设最符合临床情况？

第六，哪些敏感性分析能够真正检验主要结论的稳健性？

尤其要注意，如果试验已经进行或接近揭盲，不应根据已看到的治疗结果随意修改 primary analysis。

任何必要修改都应遵循预先规定、盲态审查、适当审批、完整版本记录和透明报告等原则。

这是避免分析者自由度引入偏倚的重要保障。

最后，统计学家再根据已经明确的 estimand、数据情况和分析计划完成正式分析。

这个顺序，我认为更加符合 clinical trial evidence generation 的实际需要。

---

# 十四、如何判断一个 missing-data analysis 是否已经做到足够好？

我不认为存在一个对所有临床试验都适用的 missing-data solution。

但是，我认为可以有一套相对稳定的审查标准。

一份可信的分析至少应当做到：

- [ ] 明确所服务的 clinical question 和 estimand。
- [ ] 区分真实未观察的结局、intercurrent events 和不适用的测量。
- [ ] 描述缺失的数量、时间、组间分布和原因。
- [ ] 合理尝试恢复符合要求的真实数据。
- [ ] 明确主要 estimator 与 estimand 的对应关系。
- [ ] 陈述关键 missing-data assumptions，并说明其临床依据。
- [ ] 使用合理的 sensitivity analyses 检查主要结论的稳健性。
- [ ] 区分针对同一 estimand 的 sensitivity analysis 与针对不同问题的 supplementary analysis。
- [ ] 报告分析的不确定性和不可识别的部分。
- [ ] 解释缺失信息会不会改变实际临床决策。
- [ ] 保留完整、可审计的数据处理与分析记录。

这并不是说每个试验都需要开展同样复杂的研究。

有些试验缺失非常少，问题也很明确。

有些试验可能需要复杂的 MNAR sensitivity analysis。

另外一些试验则可能因为信息损失过于严重，无法得出足够稳健的临床结论。

真正重要的，是让分析复杂度与临床问题、缺失风险和决策后果相匹配。

---

# 十五、重新思考 missing-data research：我们应该研究什么？

这篇文章并不是说传统 missing-data methods 不值得研究。

事实上，许多重要问题仍然值得深入探讨。

例如，当缺失机制同时受到治疗、疾病严重程度和既往结局影响时，不同 estimator 的性质是什么？

当治疗组与对照组存在不同的 missingness mechanisms 时，治疗效应的估计是否稳定？

当只有少量患者完全没有 post-baseline outcome 时，哪些方法能够保持合理的 frequentist operating characteristics？

对于有限样本，如何有效地评估复杂 MNAR assumptions 的影响？

这些研究都非常有意义。

但我希望未来的方法学研究能够更加明确地连接真实的临床证据问题。

例如，我们能不能研究：

不同的 data-recovery strategies 能够减少多少估计偏差？

在什么情况下，增加临床随访带来的信息价值，比使用更加复杂的估计模型更大？

如何根据关键临床决策确定随访和数据核查的优先级？

不同 missingness patterns 对 go/no-go decisions 的影响有多大？

如何设计模拟研究，使缺失机制真正反映疾病恶化、治疗毒性、救援治疗和临床随访过程，而不仅仅是某个数学上的 missingness probability function？

如何将临床上可信的 MNAR scenarios 转化成可解释的 sensitivity analyses？

这些研究与传统方法学没有根本冲突。

但它们把统计学问题连接到了 evidence generation 和 decision-making。

我认为，这样的研究对实际临床试验会有更直接的价值。

---

# 十六、统计学家真正的职责，不是把每个空白字段都填上

我想最后回到一个特别朴素的问题。

在临床试验中，统计学家究竟应该承担什么职责？

当然，我们需要选择正确的统计模型。

需要保证假设检验和置信区间具有合理的性质。

需要了解 MAR、MNAR、MI、MMRM、pattern-mixture models，以及各种现代统计方法。

这些都是我们的基本专业能力。

但我认为，一名有经验的临床试验统计学家，不应该仅仅是一个会运行模型的人。

我们还应该理解临床问题。

应该知道什么数据是真正重要的。

应该识别哪些缺失可能来自不合理的试验设计或随访流程。

应该知道什么时候必须和临床团队一起核查患者记录。

应该理解哪些 estimand 依赖更强的假设。

应该明确统计学方法能够解决哪些问题，又不能解决哪些问题。

更重要的是，我们应该能够向临床团队解释：

**我们究竟知道什么，不知道什么，以及在这些限制之下，还能够负责任地做出什么决定。**

统计学不能凭空创造从未观察到的临床事实。

但统计学可以帮助我们利用已有信息，清楚表达假设，量化不确定性，并判断某个结论是否足够稳健。

这本来就是 missing-data methodology 的价值。

问题不在于我们使用了 MMRM、MI 还是其他方法。

问题在于，我们是否把这些方法应用到了正确的临床问题上。

因此，我希望将 missing-data analysis 的工作逻辑，重新整理为：

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

在这个流程中，statistical estimator 依然非常重要。

但是，它不是起点。

真正的起点，是我们希望回答的临床问题。

真正的终点，也不是获得一个完整的数据矩阵、一张漂亮的结果表，或者一个显著的 p-value。

而是对真实临床决策提供尽可能可靠、透明、可解释的证据。

**The goal is not to make every randomized patient contribute an imputed value. The goal is to make the strongest defensible inference for the clinical question, while being transparent about what was never observed.**

这就是我希望临床试验统计学在处理 missing data 时始终坚持的原则。

---

## 延伸思考：一个值得经常问自己的问题

下一次，当有人把一份存在 missing outcomes 的数据库交给我们，并问：

“Which imputation method should we use?”

或许，我们应该先提出另一个问题：

**“Before deciding how to impute the missing outcomes, can we first understand what happened to these patients, what information we truly need, and whether that information is still obtainable?”**

如果我们能够先回答这个问题，那么后续的 missing-data analysis，往往才真正有意义。

---

## 参考资料与进一步阅读

1. International Council for Harmonisation. *ICH E9(R1): Addendum on Estimands and Sensitivity Analysis in Clinical Trials.* 2019.  
   https://database.ich.org/sites/default/files/E9-R1_Step4_Guideline_2019_1203.pdf

2. National Research Council. *The Prevention and Treatment of Missing Data in Clinical Trials.* National Academies Press, 2010.  
   https://doi.org/10.17226/12955

3. European Medicines Agency. *Guideline on Missing Data in Confirmatory Clinical Trials.* 2010; effective 2011.  
   https://www.ema.europa.eu/en/scientific-guidelines/missing-data-confirmatory-clinical-trials

4. Kahan BC, Hindley J, Edwards M, et al. *The estimands framework: a primer on the ICH E9(R1) addendum.* BMJ. 2024;384:e076316.  
   https://doi.org/10.1136/bmj-2023-076316

*本文是一篇关于临床试验统计工作流程的个人方法学讨论，旨在阐述如何将缺失数据处理与临床问题、证据收集及决策联系起来，而非提出新的缺失数据估计理论。*
