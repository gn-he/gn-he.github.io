---
language: en
title: "Research: Multimodal Large Models Integrating Computation and Reasoning"
heading_link: https://arxiv.org/abs/2509.18169
---
The world evolves continuously, while humans understand it discretely. High-value tasks on complex systems — forecasting, diagnosis, dispatch, simulation — require both understanding discrete events, tasks and causal relations, and precisely computing the continuously evolving system behind them, described by numbers, signals, trajectories and equations. None of the three mainstream approaches can complete such continuous decision-making on its own:

- Large language models (LLMs): tokenization discretizes every input, so the precision of continuous numerical values is lost by construction, and next-token prediction cannot natively perform high-precision computation;
- Specialized time-series / mechanistic models: accurate, but they do not understand the task and cannot generalize to unseen scenarios or compose different computations;
- Agent-style tool calling: the model *calls* computation rather than *possessing* it — the chain is long and slow, and errors compound across steps.

We propose the Physically-isolated Experts Routing Network (PiERN), an architecture that unifies language reasoning and high-precision computation at the token level. PiERN consists of an LLM, a text-to-computation module, physically isolated expert models, and a token router. The LLM handles task understanding and reasoning; the text-to-computation module learns a *computation embedding* that maps open-ended event semantics into the continuous numerical space, i.e., how a sentence should change the computation; the experts carry pretrained numerical, physical or time-series computation; and the router decides, at every generated token, whether to continue language reasoning or to activate an expert, writing the result back into the same context.

Unlike joint training, the modules are trained separately and then frozen, which avoids gradient conflicts and the "seesaw effect" between language reasoning and specialized computation. Capabilities are not forcibly fused in the parameters but composed on demand in the reasoning chain. As a result, the model alternates between computation and reasoning within a single chain of thought, and multiple experts can be activated in series or in parallel, iterating until the solution converges.

![]({{ "/assets/images/research/discrete_continuous.jpg" | relative_url }})

Experiments on representative computation–reasoning tasks including PDEBench and GCAM, as well as battery management tasks, show that PiERN achieves substantially higher accuracy than directly fine-tuned LLMs, while significantly reducing response latency, token usage and GPU energy consumption compared with mainstream multi-agent systems, reaching 100% expert-routing success on PDEBench, with no significant degradation on general benchmarks such as MMLU and GLUE.

Applications of this direction include energy system dispatch under extreme weather (coordinated decisions across PV output, electricity prices, storage and computing loads), battery R&D and management (mechanistic simulation, lifetime prediction, fault warning and multitask pretraining), scientific computing and climate policy analysis (the GCAM integrated assessment model), as well as DeepResearch agents with long-horizon memory and multi-agent collaborative dispatch.

![]({{ "/assets/images/research/token_routing.jpg" | relative_url }})

- [Xiao, H., Fan, J., Tong, X., Zhang, J., Lu, C., & He, G. (2025). PiERN: Token-Level Routing for Integrating High-Precision Computation and Reasoning. arXiv:2509.18169.](https://arxiv.org/abs/2509.18169)
- [Lu, H., Chen, J., Zhang, J., He, G., Han, X., & Ouyang, M. (2025). Multitask Battery Management with Flexible Pretraining. arXiv:2509.01323.](https://arxiv.org/abs/2509.01323)
- [Ai, Q., Fu, Z., Li, Z., Jiang, P., Wu, H., Song, J., & He, G. (2026). Cognitive Scaffold: From Fluid Context to Crystallized Memory for Long-Horizon DeepResearch Agents. Proceedings of the 64th Annual Meeting of the Association for Computational Linguistics (ACL).](https://doi.org/10.18653/v1/2026.acl-long.1170)
- [Fan, J., Xiao, H., Tan, P., Zeng, J., Song, J., Xiang, R., Zheng, K., Song, J., & He, G. (2026). Automated Power Dispatch Architecture Based on Multi-Agent Collaboration. 2026 IEEE PES International Meeting (PES IM), 1-5.](https://doi.org/10.1109/PESIM67009.2026.11438861)
- [Liu, Y., Jia, M., Zhang, Y., Wang, J., He, G., Zhong, S., & Dang, Z. (2025). RePower: An LLM-driven autonomous platform for power system data-guided research. Patterns, 6(4), 101211.](https://doi.org/10.1016/j.patter.2025.101211)

{% include prevnext.html parent="Research" parent_link="/research/" next="Energy & AI" next_link="/research/area_04.html" %}
