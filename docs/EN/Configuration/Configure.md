# Device Configuration
This section covers the first two sections of Open-iAPS settings: [Closed loop](#closed-loop) and [Devices](/Devices.md)

## Closed loop
Closed loop is disabled by default. This means Open-iAPS cannot make adjustments autonomously. Until you enable closed loop, the system relies on your approval of its actions.

### When should I close the loop?

Closed loop allows the system to make insulin adjustments automatically. Your end goal for looping is to enable this setting to reduce the time spent managing your diabetes. However, entering closed loop too early can make it difficult for new loopers wanting to optimize their application settings. If this is your first time looping, it is recommended you keep this setting disabled initially, and ensure your profile settings (CR, ISF, basal rates) are properly set. You should monitor Open-iAPS's predictions and suggestions and see if they are appropriate for you. See the corresponding sections on CR, ISF, and basal rates for more information on their adjustment.

## Settings
**I've been using Loop. Can I just copy my settings?**

***No.*** Users coming from Loop usually have adjusted their ISF and CR settings to compensate for fluctuations in insulin needs throughout the day. When using those settings for Open-iAPS, the algorithm is also adjusting to compensate for the fluctuations, and these may result in over or under-dosing. Please go through the steps of monitoring Open-iAPS predictions and adjust your settings accordingly. You should also read the section on [transitioning from other closed-loop solutions](transition-qa.md).

:::{important}
***Remember that everyone's diabetes is different, and there is no one-size-fits-all, so take the time to optimize your settings for the Oref algorithm.***
:::
