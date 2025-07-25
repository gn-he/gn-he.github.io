---
language: zh
title: "研究：电碳氢耦合能源系统的优化建模"
heading_link: https://ieeexplore.ieee.org/abstract/document/9371425/
---
DOLPHYN是一个开源、高度可扩展的能源系统优化模型（[GitHub](https://github.com/macroenergy/DOLPHYN)），可用于探索未来融合了氢能和碳捕集与利用技术的低碳能源系统形态与模式。

DOLPHYN模型在电力、氢流以及碳流的全生命周期中评估投资以及运营成本，涵盖“源网荷储”四个主要环节（包括氢流和碳流的压缩液化）。在满足电力与氢能的需求的同时，模型可求解满足技术与政策约束的能源系统最优投资运行方案。

该模型可以对多种能源资源进行建模，包括可再生能源、火电等多种发电资源，电力和氢能生产过程中的碳捕集技术，氢流和碳流的不同运输方式，如卡车和管道。电力系统和氢能系统通过电解制氢与氢能发电相耦合，同时氢气压缩需要消耗电能。关键的运行约束包括：

- 各地区的电力和氢能供需平衡；
- 储能装置的投资和运行规划；
- 各地区间电力和氢能的转运平衡以及相应的卡车运输规划；
- 火力发电和天然气制氢机组的机组组合约束。

DOLPHYN模型以Julia语言和JuMP包为基础进行开发，以结构化和模块化的代码开发为特点。模型高度灵活可配置，适用于学术研究中各种能源技术和能源政策的评估分析与资源配置。

![]({{ "/assets/images/research/carbon_supply_chain_zh.png" | relative_url }})

- [He, G., Mallapragada, D. S., Bose, A., Heuberger-Austin, C. F., & Gençer, E. (2021). Sector coupling via hydrogen to lower the cost of energy system decarbonization. Energy & Environmental Science, 14(9), 4635-4646.](https://pubs.rsc.org/en/content/articlehtml/2021/ee/d1ee00627d)
- [Wang, J., Chen, L., Tan, Z., Du, E., Liu, N., Ma, J., ... & He, G. (2023). Inherent spatiotemporal uncertainty of renewable power in China. Nature Communications, 14(1), 5379.](https://www.nature.com/articles/s41467-023-40670-7)
- [He, G., Mallapragada, D. S., Bose, A., Heuberger, C. F., & Gençer, E. (2021). Hydrogen supply chain planning with flexible transmission and storage scheduling. IEEE Transactions on Sustainable Energy, 12(3), 1730-1740.](https://ieeexplore.ieee.org/abstract/document/9371425)

{% include prevnext.html parent="研究方向" parent_link="/research/index_zh.html" prev="电池网络优化" prev_link="/research/area_02_zh.html" next="能源AI计算" next_link="/research/area_04_zh.html" %}