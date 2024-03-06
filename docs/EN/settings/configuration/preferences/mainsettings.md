# OpenAPS Main Settings
:::{admonition} Highlights
:class: important
- Insulin curve: Choose your insulin type
- Max IOB: Use the formula "average mealbolus + 3x max daily basal" to determine your Max IOB. Increase slowly if more insulin is warranted
- Autosens Max/Min: Increase the autosens max and autosens min to allow the system to choose more or less aggressive autotune and autosens values with regards to your scheduled value.
:::
## Insulin Curve
Enter your insulin type for the appropriate response curve to be used by the algorithm:

- bilinear: IOB curve based on a bilinear activity curve that varies by user’s duration of insulin action setting in their pump.
--insert image of bilinear curve--
- rapid-acting: This is a default setting for Novolog, Novorapid, Humalog, and Apidra insulins. Selecting this setting will result in OpenAPS to use an exponential activity curve with peak activity set at 75 minutes and duration of insulin action set at 300 minutes (5 hours).
- ultra-rapid: This is a default setting for Fiasp. Uses an exponential activity curve with peak activity set at 55 minutes and duration of insulin action set at 300 minutes (5 hours).
-- insert image of exponential curve --

Note that the duration of insulin (DIA) action can be altered in the pump settings section of iAPS. A minimum of 5 hours is required.

[To understand why a higher duration of insulin action is used in iAPS, click to see the following documentation.](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

## Max IOB
The maximum amount of insulin on board (i.e. in the body). This includes insulin from all sources (basal and bolus) that is automatically delivered by iAPS. Manual boluses are not subjected to this limiter. 

Default is set to zero meaning iAPS can only set temporary basal rates lower that your profile basal rate. I.e. it cannot set temporary basal rates that exceed your profile basal rate in cases of high blood sugar, and it cannot use super micro boluses to control blood sugar.  

You can start by increasing this number to your average mealtime bolus and evaluating its effect. The default recommendation is “average mealbolus + 3x max daily basal” when using super micro boluses.

Ex: Bill has an average mealtime bolus of 6 U, and the following basal profile:

- 12am: 1 U/hr
- 6pm: 2 U/hr (this is the "max" basal used) 
- 9pm: 1.5 U/hr 

Using the formula “average mealbolus + 3x max daily basal,” his recommended IOB = 6 + 3 * 2 = 12 U. 

If you are insulin resistance and/or need help dealing with meal spikes, you can continue to increase this number further to allow for greater insulin delivery.

## Max COB
The maximum amount of carbs that iAPS is allowed to bolus or set high temp targets for. This is a safety feature that protects against erroneous carbohydrate entries that could lead to hypoglycemia episodes.

If you tend to eat more than 120 g of carbs in one sitting, choose the maximum amount of carbs you eat.

## Max Daily Safety Multiplier
Limits the maximum temporary basal rate iAPS is able to use at **any time. The default setting of 3, which is unlikely to need adjustment, allows for a maximum basal rate of 3x the max daily basal.

Ex: Bill has the following basal profile:

- 12am: 1 U/hr
- 6pm: 2 U/hr (this is the "max" basal used) 
- 9pm: 1.5 U/hr 

It is 7 am so iAPS has been scheduled to deliver 1 U/hr. But Bill is running high so iAPS wants to deliver more.

The maximum temporary basal rate that can be set is 2 U/hr * 3 = 6 U/hr

## Current Basal Safety Multiplier 
Limits the maximum temporary basal rate iAPS is able to use at the **current time. The default setting of 4, which is unlikely to need adjustment, allows for a maximum basal rate of 4x the current basal rate. 

Ex: It is currently 9am and Bill has the following basal profile:

- 12am: 1 U/hr
- 6pm: 2 U/hr (this is the "max" basal used) 
- 9pm: 1.5 U/hr 

The maximum temporary basal rate that can be set by iAPS at 9 am is 1 U/hr * 4 = 4 U/hr

## Autosens Max
Please read [Autosens and Dynamic ISF/ICR](../concepts/autosens-dynamic.md) and [Autotune](../autotune.md) before adjusting this setting.

This setting determines the maximum ratio autosens can use for its adjustments. Increasing this value allows autosens to make more aggressive adjustments to your basal profile, ISF, and target blood glucose.

If you have Dynamic ISF and/or Dynamic CR, this setting will also limit their ability to make more aggressive adjustments.

If you have autotune enabled, this setting also limits its ability to make more aggressive adjustments to your ICR, basal profile and ISF.

## Autosens Min
Please read [Autosens and Dynamic ISF/ICR](../concepts/autosens-dynamic.md) and [Autotune](../autotune.md) before adjusting this setting.

This setting determine the minimum ratio autosens can use for its adjustments. Decreasing this value allows autosens to make less aggressive adjustments to your basal profile, ISF, and target blood glucose.

If you have Dynamic ISF and/or Dynamic CR, this setting will also limit their ability to make less aggressive adjustments

If you have autotune enabled, this setting also limits its ability to make less aggressive adjustments to your ICR, basal profile and ISF.
