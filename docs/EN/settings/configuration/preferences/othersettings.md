# OpenAPS Other Settings
:::{admonition} Highlights
:class: important
- None of these settings likely require adjustment from their defaults
:::
## Rewind Resets Autosens
Rewind in Medtronic lingo refers to the attachment of a new insulin reservoir and infusion set. For Omnipod users, this means replacing your pod with a new one.

When you change the insulin injection site, you might find your insulin sensitivity is altered based on how well its diffusing into your bloodstream. 

This setting resets autosens's calculated autosens.ratio and forces it to restart anew from the time of the site change to improve your calculated basal rates, sensitivity ratio and target blood glucose.

Please read [Autosens and Dynamic ISF/ICR](../concepts/autosens-dynamic.md) for more information.
## Use Custom Peak Time
Allows you to optimize at what time your insulin has maximum activity if the defaults do not work for you.

## Insuln Peak Time
Requires "Use Custom Peak Time" to be enabled. Select a peak activity time point, within the limits set by OpenAPS based on your insulin type.

## Skip Neutral Temps
This is a feature that has been brought from the OpenAPS algorithm but does not play much role in iAPS. Light sleepers using OpenAPS would find that the notifications delivered by OpenAPS upon making a temp basal adjustment, would wake them up. 

This setting attempts to reduce notifications that are produced by OpenAPS (and iAPS) with the downside of potentially impacting control and making it harder for users to determine if the system is working.

Recommend to keep this setting disabled.

## Unsuspend if No Temp
After suspending your pump you will be provided a reminder at a chosen time to manually resume your pump. Many people however neglect this reminder and forget to unsuspend, leading to highs.

This feature allows you to use zero temp basals as a way of unsuspending your pump automatically. Prior to suspending your pump, set a 0 U/hr temp basal for the period of time you want the pod to remain suspended. Then suspend the pod. Once the temp basal expires, the pod will be automatically reactivated.

## Suspend Zeros IOB
This allows iAPS to better understand that when a pump supension occurs, no insulin is being delivered to the patient.

iAPS will set a zero temp basal (0 U/hr) during pump suspensions, improving its insulin on board calculations, and thereby its algorithm calculations.

Recommended to keep this setting enabled.

## Bolus Snooze DIA Divisor
Deprecated; Bolus snooze has been removed in latest versions of OpenAPS so this value does not matter.

## Min 5m Carbimpact
This is a fallback setting used by iAPS. If iAPS is unable to tell if carbs are being absorbed from blood sugar readings, it will estimate how many carbs have been absorbed using this setting.

The default value of 8 mg/dL/5min assumes carbohydrates will increase blood sugar by 8 mg/dL every 5 minutes. The actual amount of carbohydrates estimated to be absorbed is depended on your calculated carbohydrate sensitivity ratio (CSF = ISF/ICR).

## Autotune ISF Adjustment Fraction
Autotune by default adjust your ISF by 20% each nightly run. This values allows you to make your autotune adjustments less aggressive.

Set this at 1 for the full 20% adjustment.

Advanced information:

-  adjustedISF = adjustmentFraction * autotuneISF + (1-adjustmentFraction) * profileISF
- newISF = ( 0.8 * profileISF ) + ( 0.2 * adjustedISF )

Example: Bill has a profile ISF of 3. Autotune thinks he has a true ISF value of 4. His adjustment fraction is 1.

- adjustedISF = 1 * 4 + (1 - 1) * 3 = 4
- newISF = (0.8 * 3) + (0.2 * 4) = 3.2

Assuming autotune is not being limited by the autosens max and min, Bill's ISF will be set to 3.2 by autotune tonight. Autotune will then repeat the following night, starting with a profileISF = 3.2

## Remaining Carbs Fraction
This is the fraction of carbs that is assumed not to be absorbed yet after 4 hours if carb absorption has not been seen. 

When attempting to measure carbohydrates on board (COB) iAPS may not be fully accurate. This setting is a safety feature that can prevent iAPS from providing insulin for non-existent carbs.

Example: It has been 4 hours since Bill ate 20 carbs. iAPS has been able to calculate that hes absorbed 15 carbs, but cannot account for the 5 other carbs yet. Bill has a remaining carbs fraction of 0.75

- Remaining COB = COB - absorbedCarbs - mealCarbs * (1 - carbsFraction)

- 20 - 15 - 20(1 - 0.75) = 0 

Bill is assumed to have zero carbs on board

Recommend to keep this value at the default of 1 meaning it will not impact iAPS's calculations. This feature is closely tied to "Remaining Carbs Cap."

## Remaining Carbs Cap
This setting is a safety limiter that determines the maximum amount of carbs that are assumed to be absorbed after 4 hours of carb absorption. A minimum of 90 carbs is mandatory for this setting.

Example: Bill eats 150 carbs. After 4 hours, iAPS calculates a COB of 110. It will truncate that number to 90 carbs.

Recommended to keep this value at default unless you know what you are doing.

## Noisy CGM Target Multiplier
If iAPS detects that CGM data has been noisy, it will increase your target blood sugar by a set fraction to avoid you getting low. Default is 30% higher (1.3)

Example: Bill's iAPS has calculated a blood glucose target of 5 mmol/L (90 mg/dL). But Bill has a noisy sensor. He has set his "Noisy CGM Target Multiplier" to 1.3. iAPS will thereby use a target bg of:

- 5 mmol/L * 1.3 = 6.5 mmol/L
- 90 mg/dL * 1.3 = 117 mg/dL

Recommended to keep this value at default of 1.3.
