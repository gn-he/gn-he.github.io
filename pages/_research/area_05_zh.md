---
language: zh
title: "研究：计算推理融合多模态大模型"
heading_link: https://arxiv.org/abs/2509.18169
---
世界连续演化，人类离散理解。复杂系统中的高价值任务——预测、诊断、调度、仿真——既要理解离散的事件、任务与因果关系，也要精确推演其背后以数值、信号、轨迹和方程刻画的连续系统。现有三类主流技术路线都难以独立完成这类连续决策：

![]({{ "/assets/images/research/piern_overview.png" | relative_url }})

- 大语言模型：分词（tokenization）将一切输入离散化，连续数值的精度天然丢失，难以通过下一词预测原生完成高精度计算；
- 专用时序/机理模型：算得准，但不理解任务，难以泛化到未见场景或组合不同的计算；
- 智能体（Agent）工具调用：让大模型"调用"计算而非"具备"计算，链路长、速度慢，误差逐级累积。

我们提出了物理隔离专家路由网络 PiERN（Physically-isolated Experts Routing Network），在 Token 层面统一语言推理与高精度计算。PiERN 由语言模型、文生计算模块（Text-to-Computation）、物理隔离的专家模型与 Token 路由器（Token Router）组成：语言模型负责任务理解与推理；文生计算模块学习"计算嵌入"（Computation Embedding），将开放的事件语义映射到连续数值空间，即一句话应当如何改变计算；专家模型承载预训练的数值、物理或时序计算能力；路由器在生成每个 Token 时决定继续语言推理还是激活某个专家，并把计算结果写回同一上下文。

与联合训练不同，各模块分步解耦训练、完成后冻结，避免语言推理与专业计算之间的梯度冲突和"跷跷板效应"；能力不是在参数中强行融合，而是在推理链中按需组合。由此，模型可以在同一条思维链内交替进行计算与推理，多个专家可以串行接力或并行激活，边算边改直至方案收敛。

在 PDEBench、GCAM 等代表性计算—推理任务以及电池管理任务上的实验表明：相比直接微调大语言模型，PiERN 的计算精度显著更高；相比主流多智能体方案，响应延迟、Token 消耗和 GPU 能耗大幅降低，在 PDEBench 上专家路由成功率达到 100%；同时在 MMLU、GLUE 等通用基准上没有明显退化。

这一方向的应用包括：极端天气下的能源系统调度（光伏出力、电价、储能与算力负荷的协同决策）、电池研发与管理（机理仿真、寿命预测、故障预警与多任务预训练）、科学计算与气候政策分析（GCAM 综合评估模型），以及具备长程记忆的 DeepResearch 智能体与多智能体协同调度。

![]({{ "/assets/images/research/piern_routing.png" | relative_url }})

- [Xiao, H., Fan, J., Tong, X., Zhang, J., Lu, C., & He, G. (2025). PiERN: Token-Level Routing for Integrating High-Precision Computation and Reasoning. arXiv:2509.18169.](https://arxiv.org/abs/2509.18169)
- [Lu, H., Chen, J., Zhang, J., He, G., Han, X., & Ouyang, M. (2025). Multitask Battery Management with Flexible Pretraining. arXiv:2509.01323.](https://arxiv.org/abs/2509.01323)
- [Ai, Q., Fu, Z., Li, Z., Jiang, P., Wu, H., Song, J., & He, G. (2026). Cognitive Scaffold: From Fluid Context to Crystallized Memory for Long-Horizon DeepResearch Agents. Proceedings of the 64th Annual Meeting of the Association for Computational Linguistics (ACL).](https://doi.org/10.18653/v1/2026.acl-long.1170)
- [Fan, J., Xiao, H., Tan, P., Zeng, J., Song, J., Xiang, R., Zheng, K., Song, J., & He, G. (2026). Automated Power Dispatch Architecture Based on Multi-Agent Collaboration. 2026 IEEE PES International Meeting (PES IM), 1-5.](https://doi.org/10.1109/PESIM67009.2026.11438861)
- [Liu, Y., Jia, M., Zhang, Y., Wang, J., He, G., Zhong, S., & Dang, Z. (2025). RePower: An LLM-driven autonomous platform for power system data-guided research. Patterns, 6(4), 101211.](https://doi.org/10.1016/j.patter.2025.101211)

{% include prevnext.html parent="研究方向" parent_link="/research/index_zh.html" next="能源AI计算" next_link="/research/area_04_zh.html" %}
