# Device Configuration
This section covers the first two sections of Open-iAPS settings: <b>Closed loop</b> and <b>Devices</b>.

## Closed loop
Closed loop is disabled by default. This means Open-iAPS is unable to make adjustments autonomously. The system relies on you approval of its actions until you enable Closed loop.

<b>When should I close the loop?</b>

Closed loop allows the system to make insulin adjustments automatically. Your end goal for looping is to enable this setting to reduce the time spent managing your diabetes. However, entering closed loop too early can make it difficult for new loopers wanting to optimize their application settings. If this is your first time looping, it is recommended you keep this setting disabled initially, and ensure your profile settings (CR, ISF, basal rates) are properly set. You should monitor Open-iAPS's predictions and suggestions and see if they are appropriate for you. See the corresponding sections on CR, ISF and basal rates for more information on their adjustment.

## Settings
<b>I've been using Loop. Can I just copy my settings?</b>

<b>No.</b> Users coming from Loop usually have adjusted their ISF and CR settings to compensate for fluctuations in insulin needs throughout the day. When using those settings for Open-iAPS, the algorithm is also adjusting to compensate for the fluctuations and these may result in over or under dosing. Please go through the steps of monitoring Open-iAPS predictions and adjust your settings accordingly. You should also read the section on [transitioning from other closed loop solutions](transition-qa.md).

> [!IMPORTANT]
> <i><b>Remember that everyone's diabetes is different and there is no one size fits all, so take the time to optimize your settings for the Oref algorithm.
