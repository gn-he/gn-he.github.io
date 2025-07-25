---
language: en
title: "Research: Coupled Electricity-Hydrogen-carbon Energy System Optimization"
heading_link: https://ieeexplore.ieee.org/abstract/document/9371425/
---
DOLPHYN is a highly-configurable, open source Julia package aimed to design and explore future energy system in corporation with new energy sytechnologies like electrolysis and carbon capture ([GitHub](https://github.com/macroenergy/DOLPHYN)).

DOLPHYN model evaluates investments and operations across the bulk supply chain for electricity, H<sub>2</sub> and CO<sub>2</sub>, including production, storage, transmission, conditioning (compression/liquefaction in the case of H<sub>2</sub> as well as CO<sub>2</sub>) and demand. The model determines the least-cost mix of electricity and H<sub>2</sub> production, storage, and transmission infrastructures to meet power and H<sub>2</sub> demands subject to a variety of operational and policy constraints, considering carbon emissions at the same time.

The developed model can incorporate a wide range of power and H<sub>2</sub> technology options, including VRE generation, carbon capture and storage (CCS) applied to power and H<sub>2</sub> generation, and truck (gaseous, liquid) and pipelines for H<sub>2</sub> transportation. The power systems and H<sub>2</sub> supply chain are coupled primarily through electrolysis and power generation technologies fueled by H<sub>2</sub>, as well as electricity consumption in H<sub>2</sub> compression/liquefaction. The key operational constraints of the model include:

- supply-demand balance for H<sub>2</sub> and electricity at each zone;
- inventory balance constraints for stationary storage technologies;
- balance constraints related to trucks at a given location (any of the zones and routes, arriving, departing or in transit) and for different states (empty and full), and
- linearized unit commitment for conventional thermal power generation technologies and natural gas based H<sub>2</sub> production technologies.

DOLPHYN features a modular and transparent code structure developed in Julia + JuMP. The model is designed to be highly flexible and configurable for use in a variety of applications from academic research and technology evaluation to public policy and regulatory analysis and resource planning.

![]({{ "/assets/images/research/carbon_supply_chain_en.png" | relative_url }})

- [He, G., Mallapragada, D. S., Bose, A., Heuberger-Austin, C. F., & Gençer, E. (2021). Sector coupling via hydrogen to lower the cost of energy system decarbonization. Energy & Environmental Science, 14(9), 4635-4646.](https://pubs.rsc.org/en/content/articlehtml/2021/ee/d1ee00627d)
- [He, G., Mallapragada, D. S., Bose, A., Heuberger, C. F., & Gençer, E. (2021). Hydrogen supply chain planning with flexible transmission and storage scheduling. IEEE Transactions on Sustainable Energy, 12(3), 1730-1740.](https://ieeexplore.ieee.org/abstract/document/9371425)

{% include prevnext.html parent="Research" parent_link="/research/" prev="Battery Network Optimization" prev_link="/research/area_02.html" %}