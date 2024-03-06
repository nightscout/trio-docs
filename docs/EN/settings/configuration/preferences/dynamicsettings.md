# Dynamic Settings
:::{admonition} Highlights
:class: important
- Dynamic ISF and Dynamic CR: Enable for more responsive changes to your current blood glucose and TDD. 
- Adjustment Factor: Greater 1 makes Dynamic ISF/CR more aggressive (more insulin), while lower than 1 makes Dynamic ISF/CR less aggressive. Adjust by 0.1 steps as needed.
- Adjust basal: Enable if your basal rates are otherwise not being adjusted adequately.
:::
## Enable Dynamic ISF
Please read [Autosens and Dynamic ISF/ICR](../concepts/autosens-dynamic.md) for more information.

Dynamic ISF is a more aggressive alternative to autosens's ISF adjustment algorithm. Turn this on if you believe yourself to be highly resistant to insulin at some points in the day and autosens does not adequately alter your ISF to compensate for it.

## Enable Dynamic CR
Please read [Autosens and Dynamic ISF/ICR](../concepts/autosens-dynamic.md) for more information.

Dynamic CR alters your ICR every loop cycle based on your current blood glucose and TDD of insulin. Turn it on if you experience your ICR changes day-to-day or at different blood glucose levels and iAPS is not consistently suggesting appropriate boluses. You should rule out other causes for this first including inadequate carb counting or inappropriate profile ICR.

## Adjustment Factor
Please read [Autosens and Dynamic ISF/ICR](../concepts/autosens-dynamic.md) for more information.

Adjustment Factor (AF) allows one to bias the Dynamic ISF and Dynamic CR (if they are enabled) towards more or less aggressive results. Increasing AF above 1 will result in Dynamic ISF/CR outputting more aggressive values, while decreasing it below 1 will bias the output towards less aggressive values. Its recommended to start with an AF of 0.5-0.8 and to increase as needed.

Example: Bill has Dynamic CR on. His Dynamic CR is calculated to be 1:4 by iAPS based on his current blood glucose, TDD and his set ISF. 

But Bill decides to set his AF to 1.2 because he has found recently that Dynamic CR has not been giving him aggressive enough numbers. iAPS acts accordingly, and increases his CR to something above 1:4 instead (ex: 1:3.5). Note that this is a simplified example. See the section on Dynamic CR for more information.

It is important to understand that AF is not a safety limiter. By increasing AF, you are telling the system that ALL of your Dynamically calculated ISF/CR values have not been aggressive enough, and you want the system to make them more aggressive.

The same is true when you lower AF. You are telling the system that ALL dynamically calculated values are too aggressive, and to make them lower.

## Use Sigmoid Function
Dynamic CR and ISF by default use a logarithmic function to perform calculations. Please read [Autosens and Dynamic ISF/ICR](../concepts/autosens-dynamic.md) for more information.

This option replaces the logarithmic function with a sigmoid function for Dynamic ISF/CR calculations.

Please read the dedicated section on [sigmoid](../concepts/sigmoid.md) before enabling this setting. Your adjustment factor should be between 0.4-0.5 on onboarding.

## Weighted Average of TDD. Weight of past 24 hours:
Please read [Autosens and Dynamic ISF/ICR](../concepts/autosens-dynamic.md) for more information.

This ratio is used by "Adjust basal" for its calculations. It allows you to effectively control the variability of basal adjustments (if Adjust basal is enabled). You can increase the number to a max of 1 make them more dynamic, and decrease them to a minimum of 0 make them less dynamic. The default of 0.65 means that the system will use 65% of the TDD over the last 24 hours for its calculations, and 35% of TDD over the last 2 weeks.

Example: Bill has a TDD of 55 U over the last 24 hours. He has had a TDD of 48 U over the last 14 days. His Weighted Average is set at 0.65:
- TDD Average = 55 * 0.65 + 48 * 0.35 = 52.55

As you increase the default 0.65 ratio to a higher number, the basal rates will be more so determined by your last 24 hour insulin usage, resulting in more variable changes.

## Adjust basal
Please read [Autosens and Dynamic ISF/ICR](../concepts/autosens-dynamic.md) for more information.

Adjust basal replaces the sensitivity-based formula normally used by autosens for adjusting your basal rates, with one dependent on your TDD of insulin. Use this if iAPS is not by default suggesting adequate basal rates for you.

## Threshold Setting (mg/dl)
The threshold setting is a safety limiter function. If blood sugar at any point is predicted to go below this value, iAPS will suspend insulin delivery (SMBs are halted and Temp Basal of 0 U/hr set) and wait till its algorithms predict otherwise. This setting can be useful if you are experiencing a high number of hypoglycemia events. <a href="https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html?highlight=Safety%20Threshold">Please review the OpenAPS documents if you want a better understanding of how it is used.</a> The threshold setting is by default determined by your blood glucose target setting:

- Lower Target: 90 mg/dl = Threshold 65 mg/dl 
- Lower Target: 100 mg/dl = Threshold 70 mg/dl 
- Lower Target: 110 mg/dl = Threshold 75 mg/dl 
- Lower Target: 130 mg/dl = Threshold 85 mg/dl 


This setting allows you to choose a higher threshold setting than default. Note that you cannot choose something that is lower than the default setting for a certain blood glucose target.

Ex: Bill has set a BG target of 110 mg/dl. He has set his threshold to 65 mg/dl in his iAPS preferences. Because iAPS's default threshold setting is 75 mg/dl for 110 mg/dl blood glucose target, Bill's preference will be ignored.
