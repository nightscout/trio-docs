# Insulin Sensitivity Factor
:::{admonition} Highlights
:class: tip
 - ISF is the most problematic setting for new loopers.
 - ISF can be transferred from your pump to start.
 - Adjust ISF by performing a correction and seeing if you reached your glucose target, or by observing autotune.
:::

ISF, also called insulin correction factor (ICF), refers to the amount of blood glucose in mmol/L (or mg/dL, depending on your settings) one unit of insulin can neutralize.

Example: Bill has a 1:4 ISF (this is also written in shorthand as an ISF of 4 mmol/L/U (72 mg/dL/U)). This means 1 U of rapid insulin will bring Bill's sugar down by 4 mmol/L (72 mg/dL).

Like basal rates, ISF is not used verbatim by Open-iAPS but is modified over time as data on the patient is collected. Still, setting ISF as close to accurate as possible is important for Open-iAPS to function well.

## Settings
It is safe to transfer your ISF from your pump settings. Note that almost all issues when starting with Open-iAPS are a result of an improperly set ISF. If you find you have lows with corrections, or you have SMB/UAM on and the application provides too much insulin at any time, resulting in a rollercoaster pattern, your ISF is likely to blame. 

There are a few ways you can work to adjust your ISF. The easiest method is simply bringing yourself to a higher glucose with a glucose tab or choosing a time when you are "stuck" higher than your target, then correcting based on your ISF. If you are higher or lower than your target after 4 hours, increase by 10% or decrease your ISF by 20% accordingly.

It can be difficult to make proper adjustments to ISF with SMB/UAM enabled. If you experience a rollercoaster pattern and find the system is giving too much insulin, look to decrease your ISF. Likewise, if you are dealing with uncontrollable highs and a slow return of your blood sugar to the target range, look to increase ISF.

Finally, you can also rely on Autotune to adjust your ISF and determine whether it is too high or low based on the trend in its changes. Look to changing your profile value to the autotune value when Autotune stabilizes to ensure safety limiters aren't preventing any additional needed change.
>[!CAUTION]
>It is not advised to use Autotune and Dynamic Settings at the same time
