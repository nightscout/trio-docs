# Autotune
:::{admonition} Highlights
:class: tip
 - Do not enable autotune unless you have full confidence in your current profile settings 
 - Autotune adjustments are limited by autosens max/min
:::

## What is Autotune?
Autotune makes iterative adjustments to your profile settings (basal rates, ISF, and carb ratio) based on your last 24 hours of data. The adjustments made by Autotune are small, with a maximum of 10% change to the current CR and ISF or 20% change to the current basal rates per run, but they add up over days. Autotune is run nightly by default unless it is manually run by the user.

Autotune is designed to work over weeks to slowly improve the accuracy of your initially set ISF/CR/basal rates. The output of autotune formulas produces a ratio similar to that of autosens. The autosens max and min preferences also limit this ratio.

## How does it work?
Autotune <i>is not</i> Machine Learning. It <i>is not</i> AI. It is a statistical regression attempting to compare what happened over the last 24 hours with what profile settings are and adjusting the profile settings accordingly. 

For basals, it divides the day into hour-long increments. It calculates the total deviations for that hour increment and what change in basal would be required to adjust those deviations to 0. Then, 20% of the change needed is applied to the three hours prior (because of insulin impact time). If increasing basal, it increases each of the 3-hour increments by the same amount. If the basal decreases proportionally, the biggest basal is reduced the most.

For ISF, it calculates the 50th percentile (median) deviation for the entire day and determines how much ISF would need to change to get that deviation to 0. It applies 10% of that as an adjustment to ISF.

For CR, it calculates the total deviations over all of the day's mealtimes, compares them to the deviations expected based on existing CR and the known amount of carbs entered, and applies 10% of that adjustment to CR.

## Important note on Dynamic Settings
:::{tip}
Autotune results can be unreliable if dynamic settings are enabled.
:::

Because Autotune uses Deviations to calculate basal variation, it has to calculate Deviations. It does this using a profile-based ISF value. 

This means that if you enable Autotune but use dynamic functions within Trio, the algorithm will not use the ISF that was in operation when it ran in the past, and basal adjustments and ISF adjustments are likely to be incorrect. 

It can also only run with a single daily ISF and CR, so it doesn't work for most people. 

## How does it differ from Autosens?
Autosens is designed to rapidly change your profile settings every loop cycle based on the last 8 or 24 hours of data. It accounts for biological changes to insulin sensitivity that occur throughout the day and night and changes from pump placement. 

Autotune, by contrast, works on a longer time scale. It makes slow but sustained changes to your profile to improve the accuracy of your set baseline settings. It is run every 24 hours.

## Should I enable Autotune?
If you believe your profile settings are accurate, you should keep autotune disabled; it may worsen control in specific scenarios, such as after extended periods of sickness.

If you decide to enable it, you should note that autotune is limited by autosens max and min ratios. You can alter these values to give autotune more flexibility, but you will also affect autosens, dynamic ISF, dynamic CR, and adjust basal.

Instead, it is best to review your settings in a few weeks, note the new autotune values, and change your profile settings to match them, giving autotune a new starting point.
