# Device Configuration
This section covers the first two sections of Open-iAPS settings: [Closed Loop](#closed-loop) and [Devices](./Devices.md)

## Closed Loop
Closed loop is turned off by default. This means Open-iAPS cannot make adjustments autonomously. Until you enable closed loop, the system relies on your approval of its actions.

### When Should I Close the Loop?

Closed loop allows the system to make insulin adjustments automatically. Your goal for looping is to enable this setting to reduce the time spent managing your diabetes. However, entering closed loop too early can make it difficult for new loopers wanting to optimize their application settings. If this is your first time looping, this setting should remain disabled until your profile settings (CR, ISF, basal rates) are correctly set. You should monitor Open-iAPS's predictions and suggestions to see if they are appropriate for you. Please look at the corresponding CR, ISF, and basal rates sections for more information on their adjustment.

## Settings
**I've been using Loop. Can I copy my settings?**

***No.*** Users coming from Loop usually adjust their ISF and CR settings to compensate for fluctuations in insulin needs throughout the day. When using those settings for Open-iAPS, the algorithm also adjusts to compensate for the fluctuations, which may result in over- or under-dosing. Please review the steps of monitoring Open-iAPS predictions and change your settings accordingly. It would help if you also read the section on [transitioning from other closed-loop solutions](transition-qa.md).

:::{important}
***Remember that everyone's diabetes is different, and there is no one-size-fits-all, so take the time to optimize your settings for the Oref algorithm.***
:::
