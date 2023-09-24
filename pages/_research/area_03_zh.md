---
language: zh
title: "研究：电化学储能全寿命周期决策框架"
heading_link: https://www.nature.com/articles/s41560-018-0129-9
---
短期而言（日前），储能运营商依据预测的日前电价和中期决策的边际使用收益（MBU，Marginal Benefit of Usage）来决定储能的日内出力从而获得最大收益。

中期而言（时间尺度月到年），储能运营商通过计算全生命周期边际使用收益和折算因子获得折算的边际使用收益。

长期而言，储能运营商决定最优的全生命周期边际使用收益来最大化全生命周期收益，满足储能生命周期内的老化约束。计算得到的全生命周期边际使用收益会在中期计算时用到。

在规划阶段，在获得全生命周期的收益和老化成本后，我们计算平均使用收益（ABU，Average Benefit of Usage）和平均老化成本（ACD，Average Cost of Degradation）。之后就可以通过平均使用收益和平均老化成本计算投资决策变量。

该框架首先定义了电化学储能的跨期决策数学模型，以最大化全寿命周期收益为目标，涵盖短期调度与控制决策和长期运行规划和维护决策，形成多时间尺度耦合决策模型，同时对电化学储能的循环老化和日历老化进行了合理抽象建模，从而精细考虑了不同电化学类型的储能电池老化特性；其次，基于跨期决策模型的最优性条件，推导定义了电化学储能的老化成本，包括长期平均老化成本和短期时变老化成本，分别用于长期规划评估和短期调控决策；最后，该框架进一步提出了电化学储能的经济寿命，并研究了由于储能容量和效率衰减使得盈利能力大幅减小无法补偿固定运维成本，从而使得经济寿命短于物理寿命的情景与条件。

![]({{ "/assets/images/research/decision_framework_zh.png" | relative_url }})

- [He, G., Chen, Q., Moutis, P., Kar, S., & Whitacre, J. F. (2018). An intertemporal decision framework for electrochemical energy storage management. Nature Energy, 3(5), 404-412.](https://www.nature.com/articles/s41560-018-0129-9)
- 

{% include prevnext.html parent="研究方向" parent_link="/research/index_zh.html" next="电池网络优化" next_link="/research/area_02_zh.html" %}
