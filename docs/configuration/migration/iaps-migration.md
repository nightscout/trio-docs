# Coming from iAPS

When you move your settings from iAPS to Trio, some of them might look different even if they have the same or similar names. That’s because we changed some of the numbers from decimals to percentages to make them easier to understand.

!!! example
    In iAPS you might set "Autosens Maximum" to 1.2. In Trio, we show "Autosens Max" as 120%, which means the same thing, but is easier to understand.

Some setting names have also changed. We did this to make things less confusing. To help you out, we added definitions right in the app. Just tap the question mark icon next to any setting to see what it means. Healthcare Professionals and users can also find those settings and explanations [in this section of the docs](../settings/index.md).

In iAPS, some settings had limits (called guardrails) that weren’t always visible, and others had no limits at all. In Trio, we’ve made those guardrails easier to see and added a few more where needed, to help prevent settings that could lead to unsafe outcomes.

The charts below will help you see which setting names or formats have changed, and where to find them in both iAPS and Trio.

!!! tip
    To convert a value from a decimal to a percentage, multiply it by 100.  
    To conver from a percentage to a decimal, divide by 100.

## Prepare Trio

| Trio Name | Setting Format <br> (example) | Location in App | iAPS Name | Setting Format <br> (example) | Location in App |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **[Glucose Units](settings/therapy/units-limits.md#glucose-units)** | selection <br> (mg/dL or mmol/L) | Settings → Therapy → Units and Limits | **Target Glucose** | selection <br> (mg/dL or mmol/L) | Settings → OpenAPS → Glucose units |

## Therapy Settings

| Trio Name | Setting Format <br> (example) | Location in App | iAPS Name | Setting Format <br> (example) | Location in App |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **[Glucose Targets](../settings/therapy/glucose-targets.md#how-to-enter-your-glucose-targets-into-trio)** | decimal <br> (100 mg/dL &#124; 5.5 mmol/L) | Settings → Therapy → Glucose Targets | **Target Glucose** | decimal <br> (100 mg/dL &#124; 5.5 mmol/L) | Settings → Target Glucose |
| **[Basal Rates](../settings/therapy/basal-rates.md#how-to-enter-your-basal-profiles-into-trio)** | decimal <br> (1.0 U/hr) | Settings → Therapy → Basal Rates | **Basal Profile** | decimal <br> (1.0 U/hr) | Settings → Basal Profile | 
| **[Carb Ratios](../settings/therapy/carb-ratios.md#how-to-enter-your-carb-ratios-cr-into-trio)** | decimal <br> (10 g/U) | Settings → Therapy → Carb Ratios | **Carb Ratios** | decimal <br> (10 g/U) | Settings → Carb Ratios | 
| **[Insulin Sensitivities](../settings/therapy/isf.md#how-to-enter-your-isf-into-trio)** | decimal <br> (54 mg/dL/U &#124; 3.0 mmol/L/U) | Settings → Therapy → Insulin Sensitivities | **Insulin Sensitivities** | decimal <br> (54 mg/dL/U &#124; 3.0 mmol/L/U) | Settings → Insulin Sensitivities | 

## Delivery Limits

| Trio Name | Setting Format <br> (example) | Location in App | iAPS Name | Setting Format <br> (example) | Location in App |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **[Max IOB](../settings/therapy/units-limits.md#max-iob)** | decimal <br> (0 U) | Settings → Therapy → Units and Limits → Max IOB | **Max IOB** | decimal <br> (0) | Settings → OpenAPS → Max IOB |
| **[Max Bolus](../settings/therapy/units-limits.md#max-bolus)** | decimal <br> (10 U) | Settings → Therapy → Units and Limits → Max Bolus | **Max Bolus** | decimal <br> (10) | Settings → Pump Settings → Max Bolus |
| **[Max Basal Rate](../settings/therapy/units-limits.md#max-basal)** | decimal <br> (2 U/hr) | Settings → Therapy → Units and Limits → Max Basal Rate | **Max Basal** | decimal <br> (2) | Settings → Pump Settings → Max Bolus |
| **[Max COB](../settings/therapy/units-limits.md#max-cob)** | decimal <br> (120 g) | Settings → Therapy → Units and Limits → Max COB | **Max COB** | decimal <br> (120) | Settings → OpenAPS → Max COB |
| **[Minimum Safety Threshold](../settings/therapy/units-limits.md#minimum-safety-threshold)** | decimal <br> (60 mg/dL) | Settings → Therapy → Units and Limits → Max IOB | **Threshold Setting** | decimal <br> (60) | Settings → Dynamic ISF → Threshold Setting |

## Algorithm Settings

### [Autosens](../settings/algorithm/autosens.md)

| Trio Name | Setting Format <br> (example) | Location in App | iAPS Name | Setting Format <br> (example) | Location in App |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Autosens Min**](../settings/algorithm/autosens.md#autosens-min) | percentage <br> (70%) | Settings → Algorithm → Autosens → Autosens Min | **Autosens Minimum** | decimal <br> (0.7) | Settings → OpenAPS → Autosens Minimum |
| [**Autosens Max**](../settings/algorithm/autosens.md#autosens-max) | percentage <br> (120%) | Settings → Algorithm → Autosens → Autosens Max | **Autosens Maximum** | decimal <br> (1.2) | Settings → OpenAPS → Autosens Maximum |

### [SMB (Super Micro Bolus)](../settings/algorithm/smb-settings.md)

| Trio Name | Setting Format <br> (example) | Location in App | iAPS Name | Setting Format <br> (example) | Location in App |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Enable SMB Always**](../settings/algorithm/smb-settings.md#enable-smb-always) | toggle <br> (On/Off) | Settings → Algorithm → Super Micro Bolus (SMB) → Enable SMB Always | **Enable SMB Always** | toggle <br> (On/Off) | Settings → OpenAPS → Enable SMB Always |
| [**Allow SMB with High Temp Target**](../settings/algorithm/smb-settings.md#allow-smb-with-high-temptarget) | toggle <br> (On/Off) | Settings → Algorithm → Super Micro Bolus (SMB) → Allow SMB With High Temptarget | **Allow SMB With High Temptarget** | toggle <br> (On/Off) | Settings → OpenAPS → Allow SMB With High Temptarget |
| [**Enable UAM**](../settings/algorithm/smb-settings.md#enable-uam) | toggle <br> (On/Off) | Settings → Algorithm → Super Micro Bolus (SMB) → Enable UAM | **Enable UAM** | toggle <br> (On/Off) | Settings → OpenAPS → Enable UAM |
| [**Max SMB Basal Minutes**](settings/algorithm/smb-settings.md#max-smb-basal-minutes) | decimal <br> (30 min) | Settings → Algorithm → Super Micro Bolus (SMB) → Max SMB Basal Minutes | **Enable UAM** | decimal <br> (30) | Settings → OpenAPS → Max SMB Basal Minutes |
| [**Max UAM Basal Minutes**](settings/algorithm/smb-settings.md#max-uam-basal-minutes) | decimal <br> (30 min) | Settings → Algorithm → Super Micro Bolus (SMB) → Max UAM Basal Minutes | **Max UAM SMB Basal Minutes** | decimal <br> (30) | Settings → OpenAPS → Max UAM SMB Basal Minutes |
| [**Max Delta-BG Threshold SMB**](settings/algorithm/smb-settings.md#max-delta-bg-threshold-smb) | percentage <br> (20%) | Settings → Algorithm → Super Micro Bolus (SMB) → Max Delta-BG Threshold SMB | **Max Delta-BG Threshold SMB** | decimal <br> (0.2) | Settings → OpenAPS → Max Delta-BG Threshold SMB |

### [Target Behavior](../settings/algorithm/target-behavior.md)

| Trio Name | Setting Format <br> (example) | Location in App | iAPS Name | Setting Format <br> (example) | Location in App |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**High Temp Target Raises Sensitivity**](settings/algorithm/target-behavior.md#high-temp-target-raises-sensitivity) | toggle <br> (On/Off) | Settings → Algorithm → Target Behavior → High Temp Target Raises Sensitivity | **High Temptarget Raises Sensitivity** | toggle <br> (On/Off) | Settings → OpenAPS → High Temptarget Raises Sensitivity |
| [**Low Temp Target Lowers Sensitivity**](settings/algorithm/target-behavior.md#low-temp-target-lowers-sensitivity) | toggle <br> (On/Off) | Settings → Algorithm → Target Behavior → Low Temp Target Lowers Sensitivity | **Low Temptarget Lowers Sensitivity** | toggle <br> (On/Off) | Settings → OpenAPS → Low Temptarget Lowers Sensitivity |
| [**Sensitivity Raises Target**](settings/algorithm/target-behavior.md#sensitivity-raises-target) | toggle <br> (On/Off) | Settings → Algorithm → Target Behavior → Sensitivity Raises Target | **Sensitivity Raises Target** | toggle <br> (On/Off) | Settings → OpenAPS → Sensitivity Raises Target |
| [**Resistance Lowers Target**](settings/algorithm/target-behavior.md#resistance-lowers-target) | toggle <br> (On/Off) | Settings → Algorithm → Target Behavior → Resistance Lowers Target | **Resistance Lowers Target** | toggle <br> (On/Off) | Settings → OpenAPS → Resistance Lowers Target |
| [**Half Basal Exercise Target**](settings/algorithm/target-behavior.md#half-basal-exercise-target) | decimal <br> (160 mg/dL &#124; 8.9 mmol/L) | Settings → Algorithm → Target Behavior → Half Basal Exercise Target | **Half Basal Exercise Target** | decimal <br> (160 mg/dL &#124; 8.9 mmol/L) | Settings → OpenAPS → Half Basal Exercise Target |
