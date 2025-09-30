---
language: zh
title: "研究：能源AI计算"
heading_link: https://www.nature.com/articles/s41467-023-41226-5
---
随着可再生能源渗透率的不断提高和新型储能技术的快速发展，能源系统的运行复杂性和不确定性日益凸显。传统基于物理模型的分析方法难以有效处理高维、动态且多尺度的能源管理问题，特别是在应对新型电池系统和复杂网络拓扑时面临显著挑战。为此，我们在能源AI计算开展了系列研究，旨在通过深度融合人工智能与能源领域知识，构建未来能源管理智能建模与决策体系。

在电池系统安全保障与风险预警方面，我们开发了基于动力学变分自编码器的电池异常检测深度学习框架DyAD（Dynamical Autoencoder for Anomaly Detection）。该模型为动态系统量身定制，并根据真实社会和经济因素进行参数配置，以增强检测结果的解释性与实际适应性。在347辆电动汽车、超过69万条真实充电数据中进行测试，模型不仅超越现有深度学习模型的检出性能，还显著减少了因电池故障带来的车辆损失与维修成本，为锂电池安全运维与保险评估机制的构建提供了范式支撑。

针对电池管理中的任务多样性与数据异构性问题，我们提出了灵活掩码自编码器（Flexible Masked Autoencoder, FMAE），具备对任务输入格式和结构变化的适应能力，支持多种电池管理任务（如状态估计、剩余寿命预测、异常检测）的一体化建模与泛化迁移。在11个来源于真实电池系统的数据集上验证后，FMAE在多个电池相关任务上均显著优于任务专用模型，展示出极强的跨任务、跨数据集、跨系统的泛化能力。这为后续通用型电池AI系统的构建提供了技术路径。

为进一步提升数据质量和模型泛化能力，我们针对电池系统复杂时空演化特性构建了基于反离散傅里叶变换（IDFT）引导的合成数据生成方法，结合系统物理属性与频域先验信息，引导生成具有代表性的合成样本，从而显著提升建模精度与泛化能力。在锂电池容量预测任务中，我们的方法在实际恒流-恒压（CC-CV）充电与真实EV运行模式下均取得了R²>0.96的性能和极低的MSE，较传统采样策略提升最高达45%。这一方法不仅适用于电池系统，更为PDE驱动的多物理系统建模（如材料、流体）提供了全新的采样与建模范式。

为应对能源系统类型多样、结构复杂等难题，我们提出了零样本（Zero-shot）能源系统统一建模框架，可在无任务专用信息的前提下对不同类型的系统进行泛化建模与预测。该方法引入自适应注意力机制，在统一结构中支持设备级、网络级、系统级的异构能源系统建模。通过在多种电池类型与能源网络拓扑上训练后，模型可直接迁移至全新能源系统，实现零样本建模。这一统一建模框架可广泛应用于不同尺度、各类技术或网络类型的能源系统建模与管理，无需依赖类型相关的先验信息，尤其适用于新型能源技术、分布式即插即用能源系统及其在电网中的协同调度，有望为下一代智能电网、灵活用能系统和低碳能源技术部署提供重要支撑。

![]({{ "/assets/images/research/energy_ai_en.jpg" | relative_url }})

- [Zhang, J., Wang, Y., Jiang, B., He, H., Huang, S., Wang, C., ... & Ouyang, M. (2023). Realistic fault detection of li-ion battery via dynamical deep learning. Nature Communications, 14(1), 5940.](https://www.nature.com/articles/s41467-023-41226-5)
- [He, G., Ding, Y., Wu, Z., Chen, X., Zhang, D., & Song, J. (2024). Environment-adaptive online learning for portable energy storage based on porous electrode model. IEEE Transactions on Automation Science and Engineering.](https://ieeexplore.ieee.org/document/10737665)

{% include prevnext.html parent="研究方向" parent_link="/research/index_zh.html" prev="电碳氢耦合能源系统的优化建模" prev_link="/research/area_03_zh.html" %}
