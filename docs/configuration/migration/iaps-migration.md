# Coming from iAPS

## What to Expect After Install

### What Can Transfer from iAPS to Trio?

### What Can Not Transfer from iAPS to Trio?

## What to Expect in Your First 3 Hours

## What to Expect in Your First 24 Hours

## What to Expect in Your First 72 Hours

## What to Expect in Your First 7 Days

## Convert iAPS Settings to Trio Settings

When you move your settings from iAPS to Trio, some of them might look different even if they have the same or similar names. That’s because we changed some of the numbers from integers to percentages to make them easier to understand.

!!! example
    In iAPS you might set "Autosens Maximum" to 1.2. In Trio, we show "Autosens Max" as 120%, which means the same thing, but is easier to understand.

Some setting names have also changed. We did this to make things less confusing. To help you out, we added definitions right in the app. Just tap the question mark icon next to any setting to see what it means. Healthcare Professionals and users can also find those settings and explanations [in this section of the docs](../settings/index.md).

In iAPS, some settings had limits (called guardrails) that weren’t always visible, and others had no limits at all. In Trio, we’ve made those guardrails easier to see and added a few more where needed, to help prevent settings that could lead to unsafe or unexpected outcomes.

The charts below will help you see which setting names or formats have changed, and where to find them in both iAPS and Trio.

!!! tip
    To convert a value from a integer to a percentage, multiply it by 100.  
    To convert from a percentage to a integer, divide by 100.

### Prepare Trio

| Trio Name | Setting Format <br> (example) | Location in App | iAPS Name | Setting Format <br> (example) | Location in App |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Glucose Units**](../settings/therapy/units-limits.md#glucose-units) | selection <br> (mg/dL or mmol/L) | Settings → Therapy → Units and Limits | **Glucose Units** | selection <br> (mg/dL or mmol/L) | Settings → OpenAPS → Glucose units |

### Therapy Settings

| Trio Name | Setting Format <br> (example) | Location in App | iAPS Name | Setting Format <br> (example) | Location in App |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Glucose Targets**](../settings/therapy/glucose-targets.md#how-to-enter-your-glucose-targets-into-trio) | integer <br> (100 mg/dL &#124; 5.5 mmol/L) | Settings → Therapy → Glucose Targets | **Target Glucose** | integer <br> (100 mg/dL &#124; 5.5 mmol/L) | Settings → Target Glucose |
| [**Basal Rates**](../settings/therapy/basal-rates.md#how-to-enter-your-basal-profiles-into-trio) | integer <br> (1.0 U/hr) | Settings → Therapy → Basal Rates | **Basal Profile** | integer <br> (1.0 U/hr) | Settings → Basal Profile | 
| [**Carb Ratios**](../settings/therapy/carb-ratios.md#how-to-enter-your-carb-ratios-cr-into-trio) | integer <br> (10 g/U) | Settings → Therapy → Carb Ratios | **Carb Ratios** | integer <br> (10 g/U) | Settings → Carb Ratios | 
| [**Insulin Sensitivities**](../settings/therapy/isf.md#how-to-enter-your-isf-into-trio) | integer <br> (54 mg/dL/U &#124; 3.0 mmol/L/U) | Settings → Therapy → Insulin Sensitivities | **Insulin Sensitivities** | integer <br> (54 mg/dL/U &#124; 3.0 mmol/L/U) | Settings → Insulin Sensitivities | 

### Delivery Limits

| Trio Name | Setting Format <br> (example) | Location in App | iAPS Name | Setting Format <br> (example) | Location in App |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Maximum Insulin On Board (IOB)**](../settings/therapy/units-limits.md#max-iob) | integer <br> (2 U) | Settings → Therapy → Units and Limits → Maximum Insulin On Board (IOB) | **Max IOB** | integer <br> (2) | Settings → OpenAPS → Max IOB |
| [**Maximum Bolus**](../settings/therapy/units-limits.md#max-bolus) | integer <br> (10 U) | Settings → Therapy → Units and Limits → Maximum Bolus | **Max Bolus** | integer <br> (10) | Settings → Pump Settings → Max Bolus |
| [**Maximum Basal Rate**](../settings/therapy/units-limits.md#max-basal) | integer <br> (2 U/hr) | Settings → Therapy → Units and Limits → Maximum Basal Rate | **Max Basal** | integer <br> (2) | Settings → Pump Settings → Max Basal |
| [**Maximum Carbs on Board (COB)**](../settings/therapy/units-limits.md#max-cob) | integer <br> (120 g) | Settings → Therapy → Units and Limits → Maximum Carbs on Board (COB) | **Max COB** | integer <br> (120) | Settings → OpenAPS → Max COB |
| [**Minimum Safety Threshold**](../settings/therapy/units-limits.md#minimum-safety-threshold) | integer <br> (60 mg/dL) | Settings → Therapy → Units and Limits → Minimum Safety Threshold | **Threshold Setting** | integer <br> (60) | Settings → Dynamic ISF → Threshold Setting |

### Algorithm Settings

#### [Autosens](../settings/algorithm/autosens.md)

| Trio Name | Setting Format <br> (example) | Location in App | iAPS Name | Setting Format <br> (example) | Location in App |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Autosens Min**](../settings/algorithm/autosens.md#autosens-min) | percentage <br> (70%) | Settings → Algorithm → Autosens → Autosens Min | **Autosens Minimum** | integer <br> (0.7) | Settings → OpenAPS → Autosens Minimum |
| [**Autosens Max**](../settings/algorithm/autosens.md#autosens-max) | percentage <br> (120%) | Settings → Algorithm → Autosens → Autosens Max | **Autosens Maximum** | integer <br> (1.2) | Settings → OpenAPS → Autosens Maximum |

#### [SMB (Super Micro Bolus)](../settings/algorithm/smb-settings.md)

| Trio Name | Setting Format <br> (example) | Location in App | iAPS Name | Setting Format <br> (example) | Location in App |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Enable SMB Always**](../settings/algorithm/smb-settings.md#enable-smb-always) | toggle <br> (On/Off) | Settings → Algorithm → Super Micro Bolus (SMB) → Enable SMB Always | **Enable SMB Always** | toggle <br> (On/Off) | Settings → OpenAPS → Enable SMB Always |
| [**Allow SMB with High Temp Target**](../settings/algorithm/smb-settings.md#allow-smb-with-high-temptarget) | toggle <br> (On/Off) | Settings → Algorithm → Super Micro Bolus (SMB) → Allow SMB With High Temptarget | **Allow SMB With High Temptarget** | toggle <br> (On/Off) | Settings → OpenAPS → Allow SMB With High Temptarget |
| [**Enable UAM**](../settings/algorithm/smb-settings.md#enable-uam) | toggle <br> (On/Off) | Settings → Algorithm → Super Micro Bolus (SMB) → Enable UAM | **Enable UAM** | toggle <br> (On/Off) | Settings → OpenAPS → Enable UAM |
| [**Max SMB Basal Minutes**](../settings/algorithm/smb-settings.md#max-smb-basal-minutes) | integer <br> (30 min) | Settings → Algorithm → Super Micro Bolus (SMB) → Max SMB Basal Minutes | **Max SMB Basal Minutes** | integer <br> (30) | Settings → OpenAPS → Max SMB Basal Minutes |
| [**Max UAM Basal Minutes**](../settings/algorithm/smb-settings.md#max-uam-basal-minutes) | integer <br> (30 min) | Settings → Algorithm → Super Micro Bolus (SMB) → Max UAM Basal Minutes | **Max UAM SMB Basal Minutes** | integer <br> (30) | Settings → OpenAPS → Max UAM SMB Basal Minutes |
| [**Max Allowed Glucose Rise for SMB**](../settings/algorithm/smb-settings.md#max-allowed-glucose-rise-for-smb) | percentage <br> (20%) | Settings → Algorithm → Super Micro Bolus (SMB) → Max Allowed Glucose Rise for SMB | **Max Delta-BG Threshold SMB** | integer <br> (0.2) | Settings → OpenAPS → Max Delta-BG Threshold SMB |

#### [Target Behavior](../settings/algorithm/target-behavior.md)

| Trio Name | Setting Format <br> (example) | Location in App | iAPS Name | Setting Format <br> (example) | Location in App |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**High Temp Target Raises Sensitivity**](../settings/algorithm/target-behavior.md#high-temp-target-raises-sensitivity) | toggle <br> (On/Off) | Settings → Algorithm → Target Behavior → High Temp Target Raises Sensitivity | **High Temptarget Raises Sensitivity** | toggle <br> (On/Off) | Settings → OpenAPS → High Temptarget Raises Sensitivity |
| [**Low Temp Target Lowers Sensitivity**](../settings/algorithm/target-behavior.md#low-temp-target-lowers-sensitivity) | toggle <br> (On/Off) | Settings → Algorithm → Target Behavior → Low Temp Target Lowers Sensitivity | **Low Temptarget Lowers Sensitivity** | toggle <br> (On/Off) | Settings → OpenAPS → Low Temptarget Lowers Sensitivity |
| [**Sensitivity Raises Target**](../settings/algorithm/target-behavior.md#sensitivity-raises-target) | toggle <br> (On/Off) | Settings → Algorithm → Target Behavior → Sensitivity Raises Target | **Sensitivity Raises Target** | toggle <br> (On/Off) | Settings → OpenAPS → Sensitivity Raises Target |
| [**Resistance Lowers Target**](../settings/algorithm/target-behavior.md#resistance-lowers-target) | toggle <br> (On/Off) | Settings → Algorithm → Target Behavior → Resistance Lowers Target | **Resistance Lowers Target** | toggle <br> (On/Off) | Settings → OpenAPS → Resistance Lowers Target |
| [**Half Basal Exercise Target**](../settings/algorithm/target-behavior.md#half-basal-exercise-target) | integer <br> (160 mg/dL &#124; 8.9 mmol/L) | Settings → Algorithm → Target Behavior → Half Basal Exercise Target | **Half Basal Exercise Target** | integer <br> (160 mg/dL &#124; 8.9 mmol/L) | Settings → OpenAPS → Half Basal Exercise Target |

| Trio Name | Setting Format <br> (example) | Location in App | iAPS Name | Setting Format <br> (example) | Location in App |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **Sensitivity Adjustment** | selection <br> (Standard/Custom) | Adjustments → Add Temp Target → Sensitivity Adjustment | **Experimental** | percentage <br> (100) | ??? |
