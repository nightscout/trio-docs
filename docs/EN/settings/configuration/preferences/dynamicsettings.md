# Dynamic Settings
:::{attention}
Please read [Autosens and Dynamic ISF/CR](../concepts/autosens-dynamic.md) before continuing.
:::

:::{tip}
 - _Dynamic ISF and Dynamic CR:_ Enable for more responsive changes to your current blood glucose and TDD. 
 - _Adjustment Factor:_ A higher adjustment factor will result in a lower ISF/CR (increase in insulin dosage), and a lower adjustment factor will give a higher ISF/CR (decrease in insulin dosage). Adjust by 0.1 steps as needed.
 - _Adjust basal:_ Enable if your basal rates are otherwise not being adjusted adequately.
:::

## Dynamic ISF

Dynamic ISF is a more aggressive alternative to Autosens's ISF adjustment algorithm. Many people find that ISF depends on BG level instead of solely time of day, making it hard to fix persistent highs by adjusting the scheduled ISF settings.

## Dynamic CR

Dynamic CR alters your carb ratio with every loop cycle based on your current blood glucose and TDD of insulin. Turn it on if you experience your CR changing day-to-day or at different blood glucose levels and Trio is not consistently suggesting appropriate boluses. You should first rule out other causes for this, including inadequate carb counting or inappropriate profile ICR.

## Adjustment Factor

Adjustment Factor (AF) allows one to bias the Dynamic ISF and Dynamic CR (if they are enabled) toward more or less aggressive results. Increasing AF will result in the Dynamic ISF/CR outputting more aggressive values while decreasing it will bias the output toward less aggressive values. It is recommended to start with an AF of 0.5-0.8 and increase as needed.

**Example:** _Bill has Dynamic CR on. His Dynamic CR is calculated to be 1:4 by Trio based on his current blood glucose, TDD, and his set ISF. But Bill decides to set his AF to 1.2 because he has found recently that Dynamic CR has not been giving him aggressive enough numbers. Trio acts accordingly, increasing his CR to something above 1:4 instead (ex: 1:3.5)._
This is a simplified example. See the section on Dynamic CR for more information.

:::{caution}
***Adjustment Factor (AF) is not a safety limiter***
 - Increasing AF means you are telling the system that ALL dynamically calculated ISF/CR values have not been aggressive enough, and you want the system to make them more aggressive.
 - Decreasing AF means you are telling the system that ALL dynamically calculated values are too aggressive, and to make them less so.
:::

## Sigmoid Function
Dynamic CR and ISF use a logarithmic function to perform calculations by default.

This option replaces the logarithmic function with a sigmoid function for Dynamic ISF/CR calculations.

Before enabling this setting, please read the dedicated section on [sigmoid](../concepts/sigmoid.md). 

:::{warning}
**Before enabling Sigmoid:**
 - Reset Autosens Max to 1.2
 - Reset Autosens Min to 0.8
 - Set Adjustment Factor between 0.4-0.5
:::

## Weighted Average of TDD. Weight of past 24 hours:

This ratio is used by "Adjust basal" for its calculations. It allows you to effectively control the variability of basal adjustments (if Adjust basal is enabled). You can set this value to a decimal between 0 and 1. 

>Set at **1.0** = uses 100% of the TDD from the past 24 hours
>Set at **0.65** (default) = 65% of the TDD from the past 24 hours + 35% of the TDD from the past 2 weeks
>Set at **0.0** = uses 100% of the TDD from the past 2 weeks

**Example:** _Bill has a TDD of 55 U over the last 24 hours. He has had a TDD of 48 U over the last 14 days. His Weighted Average is set at 0.65:_
```{math}
TDD Average = 55 * 0.65 + 48 * 0.35 = 52.55
```

As you increase the default 0.65 ratio to a higher number, the adjusted basal rates will be more influenced by your last 24-hour insulin usage, resulting in more variable changes.

## Adjust Basal

Adjust Basal replaces the sensitivity-based formula normally used by Autosens for adjusting your basal rates with a dynamic formula dependent on your TDD of insulin. Use this if the current Trio adjustments of basal rates are not adequate.

## Threshold Setting (mg/dl)
The threshold setting is a safety limiter function. If blood sugar at any point is predicted to go below this value, Trio will suspend insulin delivery (SMBs are halted and Temp Basal of 0 U/hr set) and wait till its algorithms predict otherwise. This setting can be useful if you are experiencing a high number of hypoglycemia events. Please review the [OpenAPS documents](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html?highlight=Safety%20Threshold) if you want a better understanding of how it is used.</a> 

The threshold setting is, by default, determined by your blood glucose target setting:
- Lower Target: 90 mg/dl = Threshold 65 mg/dl 
- Lower Target: 100 mg/dl = Threshold 70 mg/dl 
- Lower Target: 110 mg/dl = Threshold 75 mg/dl 
- Lower Target: 130 mg/dl = Threshold 85 mg/dl 


This setting allows you to choose a higher threshold setting than the default. Note that you cannot choose something lower than the default setting for a certain blood glucose target.

**Example:** _Bill has set a BG target of 110 mg/dl. In his Trio preferences, he has set his threshold to 65 mg/dl._ 

Because Trio's default threshold setting is 75 mg/dl for a 110 mg/dl blood glucose target, Bill's preference will be ignored.
