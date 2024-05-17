# OpenAPS Main Settings
:::{important}
- **Insulin curve:** Choose the insulin used in your pump
- **Max IOB:** Use the formula "average meal bolus + 3x max daily basal" to determine your Max IOB. Increase slowly if more insulin is warranted
- **Autosens Max/Min:** Increase the autosens max and autosens min to allow the system to choose more or less aggressive autotune and autosens values regarding your scheduled value.
:::

## Insulin Curve
Select your insulin type for the appropriate response curve to be used by the algorithm:

<details>
<summary>Bilinear:</summary>
  This IOB curve is based on a bilinear activity curve that varies by the user’s duration of insulin action setting in their pump.
</details> 
<details>
<summary>Rapid-acting:</summary>
  This is the default setting for Novolog, Novorapid, Humalog, and Apidra insulins. Selecting this setting will cause OpenAPS to use an exponential activity curve with a peak activity set at 75 minutes and a duration of insulin action set at 300 minutes (5 hours).
</details>
<details>
<summary>Ultra-Rapid:</summary>
  This is the default setting for Fiasp and Lyumjev. It uses an exponential activity curve with a peak activity set at 55 minutes and a duration of insulin action set at 300 minutes (5 hours).
</details>

:::{caution}
Duration of insulin (DIA) action can be altered in the pump settings section of Trio. A minimum of 5 hours is required. **It is not advised to alter this setting from the default.**
:::

To understand why a higher duration of insulin action is used in Trio, click to see the [following documentation.](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

## Max IOB
The maximum amount of insulin on board (i.e. in the body). This includes insulin from all sources (basal and bolus) that are automatically delivered by Trio. Manual boluses are not subjected to this limiter. 

The default is set to zero, meaning Trio can only set temporary basal rates lower than your profile basal rate. It cannot set temporary basal rates that exceed your profile basal rate in cases of high blood sugar, and it cannot use super micro boluses to control blood sugar.  

You can start by increasing this number to your average mealtime bolus and evaluating its effect. The default recommendation is “average meal bolus + 3x max daily basal” when using super micro boluses.

>**Example:** Bill has an average mealtime bolus of 6U, and the following basal profile:
>
>- 12:00 am: 1 U/hr
>- 6:00 pm: 2 U/hr (this is the "max" basal used)
>- 9:00 pm: 1.5 U/hr
>
>Using the formula “average meal bolus + 3x max daily basal,” his recommended **Max IOB** setting = 6 + 3 * 2 = 12 U. 

If you are insulin resistant and/or need help dealing with meal spikes, you can continue to increase this number further to allow for greater insulin delivery.

## Max COB
The maximum amount of carbs that Trio is allowed to bolus or set high-temp targets for. This safety feature protects against erroneous carbohydrate entries that could lead to hypoglycemia episodes.

:::{tip}
If you tend to eat more than 120 g of carbs in one sitting, choose the maximum amount of carbs you eat.
:::

## Max Daily Safety Multiplier
Limits the maximum temporary basal rate Trio is able to use at _any time_. The default setting of 3, which is unlikely to need adjustment, allows for a maximum basal rate of 3x the maximum daily basal.

>**Example:** Bill has the following basal profile:
>
>- 12:00 am: 1 U/hr
>- 6:00 pm: 2 U/hr (this is the "max" basal used)
>- 9:00 pm: 1.5 U/hr
>
>It is 7:00 am, so Trio has been scheduled to deliver 1 U/hr. But Bill is running high, so Trio wants to deliver more.
>
>The maximum temporary basal rate that can be set is 2 U/hr * 3 = 6 U/hr

## Current Basal Safety Multiplier 
Limits the maximum temporary basal rate Trio is able to use at the **current time. The default setting of 4, which is unlikely to need adjustment, allows for a maximum basal rate of 4x the current basal rate. 

>**Example:** It is currently 9:00 am, and Bill has the following basal profile:
>
>- 12:00 am: 1 U/hr
>- 6:00 pm: 2 U/hr (this is the "max" basal used)
>- 9:00 pm: 1.5 U/hr
>
>The maximum temporary basal rate that can be set by Trio at 9:00 am is 1 U/hr * 4 = 4 U/hr

## Autosens Max
Please read [Autosens and Dynamic ISF/ICR](../concepts/autosens-dynamic.md) and [Autotune](../autotune.md) before adjusting this setting.

This setting determines the maximum ratio autosens can use for its adjustments. Increasing this value allows autosens to increase insulin given through your basal profile, ISF, and target blood glucose.

### Autosens Max with Dynamic ISF and/or Dynamic CR
This limits the ability of Dynamic ISF and Dynamic CR to make more aggressive adjustments.

### Autosens Max with Autotune
This limits Autotune's ability to make more aggressive adjustments to your CR, basal profile, and ISF.

## Autosens Min
Please read [Autosens and Dynamic ISF/ICR](../concepts/autosens-dynamic.md) and [Autotune](../autotune.md) before adjusting this setting.

This setting determines the minimum ratio autosens can use for its adjustments. Decreasing this value allows autosens to reduce insulin given through your basal profile, ISF, and target blood glucose.

### Autosens Min with Dynamic ISF and/or Dynamic CR
This limits the ability of Dynamic ISF and Dynamic CR to reduce insulin needs.

### Autosens Min with Autotune
This setting Autotune's ability to reduce insulin needs in your CR, basal profile, and ISF.
