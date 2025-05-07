# Closing The Loop
Closed loop is turned off by default. This means Trio cannot make adjustments autonomously. Until you enable closed loop, the system relies on your approval of any and all actions it takes.

## What is Closed Loop?
"Closed Loop" means Trio will use the settings and parameters you have inputted into the system to make automated insulin dosing decisions for you every 5 minutes.

!!! tip
    Trio works best as a closed loop system. If you need to test your settings, it's best to close the loop and follow the configuration [here](#want-to-stay-in-open-loop).

## What is Open Loop?
"Open Loop" means Trio cannot make any adjustments automatically. In open loop, the system relies solely on you to make any adjustments.  

You can control your pump and bolus with the Trio app, but nothing can be done without your approval. This is often referred to as running in open loop. You will get no Trio-initiated protection from lows or highs while in open loop. Trio essentially becomes a fancy non-AID PDM with a bolus calculator.

## Want to stay in Open Loop?
Many users feel the need to stay in open loop initially for a variety of reasons, such as testing settings or weariness about a new algorithm. It is not advised to keep the loop open with Trio due to the significant loss in functionality. Rather, configure the following settings as such:

<div class="grid cards" markdown>
    
-   - Set [Max IOB](therapy/units-limits.md#max-iob) to **0**
    - Set [Autosens Max](algorithm/autosens.md#autosens-max) to **1**
    - Set [Autosens Min](algorithm/autosens.md#autosens-min) to **1**
    - All other [Algorithm Settings](algorithm/index.md) should remain at their defaults if you are a new user

-   !!! tip "Existing Users"
    If you are an existing user making these adjustments for testing your settings, Algorithm Settings can remain as you had them previously configured. Keep in mind: you may need to adjust them after your settings test is completed if there are significant changes made to your Core Trio Settings (basal, ISF, CR).

</div>

This will allow Trio to continue communications with your pump and CGM uninterrupted. Setting Max IOB this way will allow Trio to prevent lows by reducing basal, but will not allow Trio to treat highs automatically. Setting Autosens Max and Min this way will stop all algorithm sensitivity adjustments, and Trio will only utilize your profile settings as you entered them. This will significantly hinder the algorithm, turning it into a non-dynamic system with only low-prevention. This is much safer than attempting to run in open loop.

!!! caution "Former Loop Users"
    Loop and Trio function differently in open loop due to the differences in the underlying algorithms. It is rarely advised to stay in open loop with Trio, as most of the functionality of the algorithm depends on a closed loop system.


<!--## Settings
**I've been using Loop. Can I copy my settings?**

**_No._** Users coming from Loop usually adjust their ISF and CR settings to compensate for fluctuations in insulin needs throughout the day. When using those settings for Trio, the algorithm also adjusts to compensate for the fluctuations, which may result in over- or under-dosing. Please review the steps of monitoring Trio predictions and change your settings accordingly. It would help if you also read the section on [Coming from Other AID Systems](transition-qa.md).
-->
!!! tip
    
    Remember that everyone's diabetes is different, and there is no one-size-fits-all, so take the time to optimize your settings for the Oref algorithm.
