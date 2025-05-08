# Target Behavior

## High Temp Target Raises Sensitivity
**Default:** _OFF_

When this feature is enabled, manually setting a temporary target above 100 mg/dL (5.5 mmol/L) will decrease the Sensitivity Ratio used for ISF and basal adjustments, resulting in less insulin delivered overall. This scales with the temp target set; the higher the temp target, the lower the Sensitivity Ratio used.

If Half Basal Exercise Target is set to 160 mg/dL (default), a temp target of 120 mg/dL uses a Sensitivity Ratio of 0.75. A temp target of 140 mg/dL uses a Sensitivity Ratio of 0.6.

!!! note
    The effect of this can be adjusted using the [Half Basal Exercise Target](#half-basal-exercise-target) setting
    
- - -

## Low Temp Target Lowers Sensitivity
**Default:** _OFF_

When this feature is enabled, setting a temporary target below 100 mg/dL (5.5 mmol/L) will increase the Sensitivity Ratio used for ISF and basal adjustments, resulting in more insulin delivered overall. This scales with the temp target set; the lower the temp target, the higher the Sensitivity Ratio used.

If Half Basal Exercise Target is set to 160 mg/dL (default), a temp target of 95 mg/dL uses a Sensitivity Ratio of 1.09. A temp target of 85 mg/dL uses a Sensitivity Ratio of 1.33.

!!! note
    The effect of this can be adjusted using the [Half Basal Exercise Target](#half-basal-exercise-target) setting
    
- - -

## Sensitivity Raises Target
**Default:** _OFF_

Enabling this feature causes Trio to automatically raise the targeted glucose if it detects an increase in insulin sensitivity. If Sensitivity Ratio is $\gt 1$, target glucose will be increased.

- - -

## Resistance Lowers Target
**Default:** _OFF_

Enabling this feature causes Trio to automatically lower the targeted glucose if it detects resistance to insulin. If Sensitivity Ratio is $\lt 1$, target glucose will be decreased.

- - -

## Half Basal Exercise Target
**Default:** _160 mg/dL_  
**Setting Limits:** _100-300 mg/dL_

The Half Basal Exercise Target allows ou to scale down your basal insulin during exercise or scale up your basal insulin when eating soon by setting a manual temp target. To scale down for exercise, set a temp target above 100 mg/dL. To scale up for eating soon, set a temp target below 100 mg/dL.

For example, at a temp target of 160 mg/dL, your basal is reduced by 50%, but this scaled depending on how far away from 100 your temp target is set.
    
- Temp Target $= 160$ mg/dL: $50$% reduction in profile basal
- Temp Target $= 140$ mg/dL: $60$% reduction in profile basal
- Temp Target $= 120$ mg/dL: $75$% reduction in profile basal

You can see how adjusting this setting will influence your profile basal when you set a temp target in Trio. On the screen, you will be able to set a custom Half Basal Exercise Target for the duration of the temp target you set.

