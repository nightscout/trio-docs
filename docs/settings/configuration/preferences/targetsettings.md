# OpenAPS Targets Settings

!!! tip "High Temptarget Raises Sensitivity"
    
    Enable `High Temptarget Raises Sensitivity` if you exercise frequently with high temp targets and are going low.

## High Temptarget Raises Sensitivity
For more information, please read [Autosens and Dynamic ISF/CR](../concepts/autosens-dynamic.md).

Normally, Trio assumes your sensitivity will be lower with higher blood sugar levels (resulting in greater amounts of insulin being delivered). During periods of exercise, some people may instead experience increased sensitivity to insulin. With this feature enabled, setting a high temporary target will decrease the autosens ratio utilized for ISF and basal adjustments, resulting in less insulin delivered overall. This scales with the temporary target set; higher and higher temp targets lead to lower and lower insulin delivery in the form of basal rates and corrections. 

Note that this setting also disables Dynamic ISF when high temp targets are set.

## Low Temptarget Lowers Sensitivity
For more information, please read [Autosens and Dynamic ISF/CR](../concepts/autosens-dynamic.md).

When planning to have a heavy meal, you may want to set a low temporary target to avoid high blood sugar spikes. You may also want Trio to deliver more insulin during this time to prevent meals from spiking too high. Enabling this feature will increase your autosens.ratio, which is utilized for ISF and basal adjustments, resulting in greater insulin delivery. This will allow Trio to better deal with post-prandial spiking.

## Sensitivity Raises Target
When performing autosens and insulin dosing calculations, Trio uses a target blood glucose that is by default the lower value in your target range.

Example: Bill has a target range of 5.5 to 6.0. His target blood glucose is thus 5.5. (Note that Bill's target is not exactly this value; Trio alters the target via autosens to improve its dosing)

When "Sensitivity Raises Target" is enabled, Trio will set a higher blood glucose target to base its insulin dosage calculations on if it detects sensitivity. This can be useful if you find Trio is too aggressive.

Advanced information:
For more information, please read [Autosens and Dynamic ISF/CR](../concepts/autosens-dynamic.md).

If the autosens.ratio is determined to be <1.0, this setting comes into effect and increases the blood glucose target by a small amount. See the OpenAPS code base for the exact formulas used.

## Resistance Lowers Target
See "Sensitivity Raises Target" for more information. When Trio detects high insulin resistance, it will set a lower blood glucose target for insulin dosage calculations, providing more insulin overall. This is useful for patients who experience uncontrollable highs.

Advanced information:
For more information, please read [Autosens and Dynamic ISF/CR](../concepts/autosens-dynamic.md).

If the autosens.ratio is determined to be >1.0, this setting comes into effect and decreases the blood glucose target by a small amount. See the OpenAPS code base for the exact formulas used.

## Advanced Target Adjustments
Deprecated; Autosens has alternative functions for determining if insulin can be safely added when high.

## Exercise Mode
Redundant; same as "High Temptarget Raises Sensitivity". Enabling either feature will provide the desired change to sensitivity with high temp targets.

## Half Basal Exercise Target
This setting allows you to control the reduction in basal when using either "Exercise Mode" or "High Temptarget Raises Sensitivity." The default is 160 mg/dL, meaning basal will be at 50% of your scheduled with a temporary target at 160, 60% at 140, and 75% at 120.

Advanced information:
See openAPS code for more information. 

The **formula** used is:

$$
(halfBasalTarget - 100)/((halfBasalTarget - 100)+(targetBG-100))
$$

!!! example
    
    Bill has a halfBasalTarget of 160 and has set a temporary target of 120 for his upcoming exercise.  
    Therefore, only 75% of his scheduled basal rate will be provided:
    
    $$
    (160 - 100)/((160 - 100) + (120 - 100)) = 0.75
    $$