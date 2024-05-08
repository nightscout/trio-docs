# OpenAPS Other Settings
>[!CAUTION]
>***None of these settings likely require adjustment from their defaults***

## Rewind Resets Autosens
"Rewind" in Medtronic lingo refers to the attachment of a new insulin reservoir and infusion set. For Omnipod users, this means replacing your pod with a new one.

When you change the insulin injection site, you might find your insulin sensitivity is altered based on how well it's diffusing into your bloodstream. 

This setting resets autosens's calculated autosens.ratio and forces it to restart anew from the time of the site change to improve your calculated basal rates, sensitivity ratio, and target blood glucose.

For more information, please read [Autosens and Dynamic ISF/ICR](../concepts/autosens-dynamic.md).

## Use Custom Peak Time
Toggle this on to use the "Insulin Peak Time" setting.

## Insulin Peak Time
>[!NOTE]
>Requires "Use Custom Peak Time" to be enabled.

Select a peak activity time point, based on your insulin type.

## Skip Neutral Temps
This feature was introduced in the OpenAPS algorithm (Oref0) but does not play a major role in Trio. 

_Light sleepers using OpenAPS would find that the notifications delivered by OpenAPS upon making a temp basal adjustment would wake them up._

This setting attempts to reduce notifications produced by OpenAPS (and Trio). However, it could potentially impact control and make it harder for users to determine if the system is working.

>[!CAUTION]
>**It is recommended to keep this setting disabled**

## Unsuspend if No Temp
>[!IMPORTANT]
>This setting only applies to Medtronic Pumps

After manually suspending your pump, you will be provided with a reminder at a chosen time to resume it. Many people, however, neglect this reminder and forget to unsuspend, leading to highs.

This feature allows you to use zero temp basals to unsuspend your pump automatically. Before suspending your pump, set a 0 U/hr temp basal for the period you want the pod to remain suspended. Then suspend the pod. Once the temp basal expires, the pod will be automatically reactivated.

## Suspend Zeros IOB
This allows Trio to understand better that no insulin is being delivered to the patient when a pump suspension occurs.

Trio will set a zero temp basal (0 U/hr) during pump suspensions, improving its insulin on board calculations and, therefore, its algorithm calculations.

Recommended to keep this setting enabled.

## Min 5m Carbimpact
This is a fallback setting used by Trio. If Trio is unable to tell if carbs are being absorbed from blood sugar readings, it will estimate how many carbs have been absorbed using this setting.

The default value of 8 mg/dL/5min assumes carbohydrates will increase blood sugar by 8 mg/dL every 5 minutes. The actual amount of carbohydrates estimated to be absorbed depends on your calculated carbohydrate sensitivity ratio (CSF = ISF/CR).

## Autotune ISF Adjustment Fraction
Autotune, by default, adjusts your ISF by 20% each nightly run. This value allows you to make your autotune adjustments less aggressive.

Set this at 1 for the full 20% adjustment.

**Maths:**

- adjustedISF = adjustmentFraction * autotuneISF + (1-adjustmentFraction) * profileISF
- newISF = ( 0.8 * profileISF ) + ( 0.2 * adjustedISF )

>**Example:**
>
>Bill has a profile ISF of 3. Autotune thinks his true ISF value is 4. His adjustment fraction is 1.
>
>- adjustedISF = 1 * 4 + (1 - 1) * 3 = 4
>- newISF = (0.8 * 3) + (0.2 * 4) = 3.2
>
>_Assuming autotune is not being limited by the autosens max and min, Bill's ISF will be set to 3.2 by autotune tonight. Autotune will then repeat the following night, starting with a profileISF = 3.2_

## Remaining Carbs Fraction
This is the fraction of carbs that is assumed not to be absorbed yet after 4 hours if carb absorption has not been seen. 

When attempting to measure carbohydrates on board (COB) Trio may not be fully accurate. This setting is a safety feature that can prevent Trio from providing insulin for non-existent carbs.

>**Example:**
>
>It has been 4 hours since Bill ate 20 carbs. Trio has been able to calculate that he's absorbed 15 carbs but cannot account for the 5 other carbs yet. Bill has a remaining carbs fraction of 0.75
>
>- Remaining COB = COB - absorbedCarbs - mealCarbs * (1 - carbsFraction)
>
>- 20 - 15 - 20(1 - 0.75) = 0 
>
>Bill is assumed to have 0g carbs on board

>[!TIP]
>Recommend to keep this value at the default of 1 meaning it will not impact Trio's calculations. This feature is closely tied to "Remaining Carbs Cap."

## Remaining Carbs Cap
This setting is a safety limiter that determines the maximum amount of carbs that are assumed to be absorbed after 4 hours of carb absorption. A minimum of 90 carbs is mandatory for this setting.

>**Example:**
>
>Bill eats 150 carbs. After 4 hours, Trio calculates a COB of 110. It will reduce that number to 90 carbs.

>[!TIP]
>It is recommended to keep this value at default

## Noisy CGM Target Multiplier
If Trio detects that CGM data has been noisy, it will increase your target blood sugar by a set fraction to avoid you getting low. Default is 30% higher (1.3)

>**Example:** 
>
>Bill's Trio has calculated a blood glucose target of 5 mmol/L (90 mg/dL). But Bill has a noisy sensor. He has set his "Noisy CGM Target Multiplier" to 1.3.
>Trio will thereby use a target bg of:
>
>- 5 mmol/L * 1.3 = 6.5 mmol/L
>- 90 mg/dL * 1.3 = 117 mg/dL

>[!TIP]
>It is recommended to keep this value at the default of 1.3.
