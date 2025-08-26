# Using Dynamic ISF

## Logarithmic Dynamic ISF

If you've spent any time in the [Desmos Graphs](../../configuration/settings/algorithm/dynamic-settings.md#logarithmic-desmos-graphs), you may have noticed certain adjustments do not have the impact you'd expect. Below are a few that you should know about:

### Profile ISF

- Your profile ISF is not directly used to determine your ISF when logarithmic dynamic ISF is enabled. It influences the limits of what ISF is allowed.
- Adjusting your profile ISF when using logarithmic dynamic ISF will not have a direct impact on your sensitivity calculations. It will only have an impact on the Maximum and Minimum values allowed.

### Adjustment Factor

- Changing your [Adjustment Factor](../../configuration/settings/algorithm/dynamic-settings.md#adjustment-factor-logarithmic) will have a huge impact on what sensitivity ratio and thus what ISF is used.
- It is strongly advised to enter any planned changes to Adjustment Factor into the [Desmos Graph](../../configuration/settings/algorithm/dynamic-settings.md#logarithmic-desmos-graphs) before changing it in your settings.

### Using Overrides With Logarithmic Dynamic ISF

Overrides change your profile settings before they are sent to the Oref algorithm for adaptation. As noted above, because Logarithmic Dynamic ISF does not utilize your profile ISF for the sensitivity calculation, adjusting your profile ISF using an override will not have a significant impact on your dosage calculations. For this reason, it is advised to use [Temp Targets](temp-targets.md) instead of or in conjunction with Overrides when using Logarithmic Dynamic ISF.

??? question "What effect will using a >100% Override have on Logarithmic Dynamic ISF?"
    
    If you start with a Profile ISF of 50 mg/dL and set an override of 150%, this will change your Profile ISF to 33 mg/dL/U.
    
    Notice how the calculated ISF line does not change with this adjustment to the Profile ISF, only the limits of what section of the curve are allowed. It shifts the limits to only allow the lower ISF portions of the graph, meaning the ISF allowable range will be 27-47 mg/dL/U and the adjustments are capped if glucose is reading higher than 87 mg/dL.
    
    ![ISF of 50](../img/isf_50.png){width="300"}
    ![ISF of 33](../img/isf_33.png){width="300"}
    {align="center"}
    
    !!! important
        This is a hypothetical graph and where these lines and values fall rely heavily on your personal settings. The focus of this illustration is to show what shifts rather than what values will be used for your specific settings.
    
??? question "What effect will using a <100% Override have on Logarithmic Dynamic ISF?"
    
    If you start with a Profile ISF of 50 mg/dL and set an override of 70%, this will change your Profile ISF to 71 mg/dL/U.
    
    Notice how the calculated ISF line does not change with this adjustment to the Profile ISF, only the limits of what section of the curve are allowed. It shifts the limits to only allow the higher ISF portions of the graph, meaning the ISF allowable range will be 59-100 mg/dL/U and the adjustments are capped if glucose is reading lower than 126 mg/dL.
    
    ![ISF of 50](../img/isf_50.png){width="300"}
    ![ISF of 71](../img/isf_71.png){width="300"}
    {align="center"}
    
    !!! important
        This is a hypothetical graph and where these lines and values fall rely heavily on your personal settings. The focus of this illustration is to show what shifts rather than what values will be used for your specific settings.

### Using Temp Targets With Logarithmic Dynamic ISF

When you utilize a Temp Target AND have [Target Behavior](../../configuration/settings/algorithm/target-behavior.md) settings enabled, this will disable Logarithmic Dynamic ISF and utilize a [new formula](../../configuration/settings/algorithm/target-behavior.md#half-basal-exercise-target) for your sensitivity ratio.

!!! tip
    Worth noting that your Autosens Maximum and Autosens Minimum are still respected when this is utilized. If setting a Temp Target adjusts your Sensitivity Ratio to 60%, but your Autosens Minimum is 70%, the Autosens Minimum will be used.
    
### Using Both Overrides and Temp Targets with Logarithmic Dynamic ISF

Yes, you can enable both an Override and a Temp Target at the same time. When you do, Trio will first adjust your profile settings based on the Override set, then those profile settings will be sent to the Oref algorithm for the Sensitivity Ratio and insulin required calculations. The [Target Behavior](../../configuration/settings/algorithm/target-behavior.md) settings will influence the Sensitivity Ratio used as explained above. Your other override-adjusted profile settings will then be utilized to determine the next insulin dosing decision.

### Influence of Total Daily Dose on Logarithmic Dynamic ISF
- - -

## Sigmoid Dynamic ISF

### Profile ISF

### Autosens Maximum
<Changes both the limits allowed and the steepness of the curve>
![Autosens Max Baseline](../img/sig_asmax_120.png){width="300"}
![Autosens Max Increase](../img/sig_asmax_180.png){width="300"}
{align="center"}

### Autosens Minimum
![Autosens Min Baseline](../img/sig_asmin_70.png){width="300"}
![Autosens Min Decrease](../img/sig_asmin_50.png){width="300"}
{align="center"}

### Adjustment Factor
<Changes the steepness of the curve>
![Adjustment Factor Decrease](../img/sig_af_30.png){width="250"}
![Adjustment Factor Baseline](../img/sig_af_50.png){width="250"}
![Adjustment Factor Increase](../img/sig_af_80.png){width="250"}
{align="center"}

### Target Glucose
<Shifts whole sigmoid graph within boundaries of AS Max & AS Min>
![Target Glucose Baseline](../img/sig_target_100.png){width="300"}
![Target Glucose Increase](../img/sig_target_150.png){width="300"}
{align="center"}

### Influence of Total Daily Dose on Sigmoid Dynamic ISF
<changes steepness of curve>
![TDD Decrease](../img/sig_tdd_25.png){width="250"}
![TDD Baseline](../img/sig_tdd_50.png){width="250"}
![TDD Increase](../img/sig_tdd_100.png){width="250"}
{align="center"}
