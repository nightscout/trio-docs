# Autotune
:::{admonition} Highlights
:class: important
- Enable autotune unless you have full confidence in your current profile settings. 
- Autotune adjustments are limited by autosens max/min.
:::
## What is Autotune?
Autotune makes iterative adjustments to your basal rates, ISF, and carb ratio based on your last 24 hours of data. The adjustments made by autotune are small, with a maximum of 10% change to the current ICR and ISF, or 20% change to the current basal rates per run, but add up over days. Autotune is run nightly by default unless its run manually by the user.

Autotune is designed to work over weeks to slowly improve the accuracy of your initially set ISF/ICR/basal rates. The output of autotune formulas produces a ratio, similar to that of autosens. This ratio is also limited by the autosens max and min preferences.

## How does it work?
Autotune is not Machine Learning. It is not AI. It is a statistical regression attempting to compare what happened over the last 24 hours with what profile settings are, and adjust the profile settings accordingly. For basals, it divides the day into hour long increments. It calculates the total deviations for that hour increment and calculates what change in basal would be required to adjust those deviations to 0. It then applies 20% of that change needed to the three hours prior (because of insulin impact time). If increasing basal, it increases each of the 3 hour increments by the same amount. If decreasing basal, it does so proportionally, so the biggest basal is reduced the most.

For ISF, it calculates the 50th percentile (median) deviation for the entire day and determines how much ISF would need to change to get that deviation to 0. It applies 10% of that as an adjustment to ISF.

For CR, it calculates the total deviations over all of the day’s mealtimes and compares to the deviations that are expected based on existing CRand the known amount of carbs entered, and applies 10% of that adjustment to CR.

## Important note on Dynamic Settings
Because Autotune uses Deviations to calculate basal variation, it has to calculate Deviations. It does this using a profile based ISF value. 

This means that if you enable Autotune, but use Dynamic functions within iAPS, it will not be using the ISF that was in operation at the time of the loop running in the past, and basal adjustments are likely to be incorrect, as well as ISF adjustments. 

It can also only run with a single daily ISF and CR. As a result, it doesn't work for most people. 

Simply put, Autotune results can be unreliable if dynamic settings are enabled.

## How does it differ from Autosens?

Autosens is designed to make rapid changes to your profile settings every loop cycle based on your last 8 or 24 hours of data. It accounts for biological changes to insulin sensitivity that occur over the day and night, as well as changes from pump placement. 

Autotune by contrast works on a longer time scale, making slow but sustained changes to your profile to get your set baseline settings more accurate. It is run every 24 hours.

## Should I enable Autotune?
If you believe your profile settings are accurate as is, you can choose to keep autotune disabled; it may worsen control in certain scenarios such as after extended periods of sickness.

If you decide to enable it, you should note that autotune is limited by autosens max and min ratios. You can alter these values to give autotune more flexibility but this also affects autosens, dynamic ISF, dynamic CR, and adjust basal.

Instead, it is best if you review your settings in a few weeks, note the new autotune values, and change your profile settings to match them, giving autotune a new starting place to move from.
