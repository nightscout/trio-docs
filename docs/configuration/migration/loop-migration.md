# Coming from Loop

## What to Expect After Install

- **Onboarding Wizard**  
    Trio will walk you through the initial setup of the app. Learn more in the [New User Setup Guide](../new-user-setup.md).
- **User Interface**  
    You can find more about the Trio User Interface in [this walk-through](../../usage/interface.md) of the app.
- **Remote Commands & iOS Shortcuts**  
    Trigger actions like carb entry, bolus, overrides, or temporary targets [remotely](../settings/features/remote-control.md) or through [shortcut automation](../settings/features/shortcuts.md).
    - **Use Loop Follow v4.0 or Later for remote commands**  
        Loop Follow is the companion app for Trio. More info at [LoopFollowDocs](https://loopfollowdocs.org/remote/remote-control-trio/)
- **Bolus Calculator**  
    The  [Bolus Calculator](../../usage/features/bolus-calculator.md) in Trio offers simple dosing with clear breakdowns and safety logic.
- **In-App Statistics**  
    There are multiple statistics and graphs available in the Trio app. Click the link to learn more about the [Statistics](../../usage/features/statistics.md) available in the app.
- **Important Re: Autotune**  
    Autotune has not performed as it was intended for years with the addition of Dynamic ISF and the change from a single ISF and CR in Therapy settings. For this reason, we have removed it until it can be rewritten to work with Trio or a new Autotune-like feature can be built.
- **No Dynamic Carb Ratio**
    There is no evidence to support that your carb ratio varies as ISF does with increasing or decreasing glucose levels. For this reason, Dynamic CR has not been implemented in Trio 0.5+.

- - -

## What to Expect in Your First 3 Hours

Here are some things to keep in mind after moving from Loop to Trio v0.5+ in the first 3 hours:

#### Dynamic ISF
Dynamic ISF is disabled for the first **7 days**. 

!!!warning "Dynamic ISF & Closed Loop"
    Trio must be in **Closed Loop** for 7 days in order to enable Dynamic ISF.

#### Autosens
Autosens will require **8-24 hours** of data before it starts making adjustments. *You may need to enter carbs and bolus during this time if you aren't already doing so.*

!!!warning "Initial Limitation with Autosens"
    There's a long standing issue with Autosens where it will likely be stuck at 100% for the first 24 hours when there are carb entries or SMBs.
    
    - When carb entries or SMBs **are not** present, Autosens will kick in after 8 hours.
    - When carb entries or SMBs **are** present, Autosens will kick in after 24 hours.
    
    Whether or not to enable SMBs or enter carbs is a personal choice based on what you prioritize in your first 24 hours.
    
#### Onboarding Wizard
Take this time to go through the Onboarding Wizard. Reference the [New User Setup Guide](../new-user-setup.md) or ask questions on [Facebook](https://facebook.triodocs.org) or [Discord](https://discord.triodocs.org) if you have any questions.

#### Test Settings
Your Loop settings may be a great starting point for Trio, but often times they need some adjustment. This is a great time to test your settings so you can start fresh on solid footing.

#### New User Interface
Use this time to learn the [New User Interface](../../usage/interface.md).

!!! warning "Do not use a pump or cgm simulator"
    - Doing so will result in false data being stored and you will have to delete the app with all the data and reinstall before you can use it on a live pump.
    - This will also reset your 7-day waiting period for Dynamic ISF.
    - [More information on simulator use](../settings/devices/pump/?h=simulator#pump-simulator)

- - -

## What to Expect in Your First 24 Hours

A full day on Trio! Congratulations! Here's what to look for:

#### Autosens
Autosens now has enough data to make adjustments.

#### Review & Test Settings
This is a good time to review your last 24 hours of results to see if your core settings performed as expected. If you had unexpected challenges with your settings, look at how to test them over the next 7 days:

- [Basal Testing](../../usage/concepts/basal-rates.md)
- [ISF Testing](../../usage/concepts/isf.md)
- [Carb Ratio Testing](../../usage/concepts/carb-ratio.md)

#### Review Dynamic ISF Documentation

Review the documentation on [Using Dynamic ISF](../../usage/features/dynamic-isf.md) in preparation for [Day 7](#what-to-expect-after-7-days).

- - -

## What to Expect in Your First 7 Days

You've completed a week on Trio! Here's what you should see:

#### Dynamic ISF
Dynamic ISF now has enough data. You now have the option to enable it.

This is a great time to refresh [Using Dynamic ISF](../../usage/features/dynamic-isf.md)and check your settings for [Logarithmic Dynamic ISF](../settings/algorithm/dynamic-settings.md#dynamic-isf-logarithmic) or [Sigmoid Dynamic ISF](../settings/algorithm/dynamic-settings.md#dynamic-isf-sigmoid).

!!! warning "Can't Enable Dynamic ISF?"
    If Dynamic ISF does not give you the option to enable, you may have experienced one or more of the following:
    
    - You were not in closed loop for the full 7 days.
        - *Trio needs 7 days of closed loop to safely enable Dynamic ISF*
    - You had significant loss of connection with your CGM and/or pump. 
        - *Check your last week of Looping Statistics in the Stats tab in the Trio app. You need both <b>7 days</b> and an <b>85% success rate</b> to enable Dynamic ISF*. 
    - You enabled a significant number of manual Temp Basals with long run times.
        - *When a manual Temp Basal is set, Trio is unable to complete a loop cycle for the duration of the temp basal. This will cause a reduction in your success rate. If you do not have <b>85% success rate</b> for <b>7 days</b>, you cannot enable Dynamic ISF.*

#### Dynamic CR
Dynamic CR has been removed due to no known scientific validity to CR changing with an increase or decrease in glucose.

- - -

## Convert Loop Settings to Trio Settings

When you move your settings from Loop to Trio, you will notice there are significantly more settings in Trio than in Loop. 

### [Therapy Settings](../settings/therapy/index.md)
| Trio Name | Setting Format <br> (example) | Location in Trio | Loop Name | Setting Format <br> (example) | Location in Loop |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Glucose Targets**](../settings/therapy/glucose-targets.md#how-to-enter-your-glucose-targets-into-trio) | schedule <br> (100 mg/dL - 12:00 AM)  | Settings → Therapy → Glucose Targets | **Correction Range** | decimal range <br> (100 - 115 mg/dL) | Settings → Therapy Settings → Correction Range |
| [**Basal Rates**](../settings/therapy/basal-rates.md#how-to-enter-your-basal-profiles-into-trio) | schedule <br> (1.0 U/hr - 12:00 AM) | Settings → Therapy → Basal Rates | **Basal Rates** | schedule <br> (12:00 AM - 1.0 U/hr) | Settings → Therapy Settings → Basal Rates | 
| [**Carb Ratios**](../settings/therapy/carb-ratios.md#how-to-enter-your-carb-ratios-cr-into-trio) | schedule <br> (15 g/U - 12:00 AM) | Settings → Therapy → Carb Ratios | **Carb Ratios** | schedule <br> (12:00AM - 15 g/U) | Setting → Therapy Settings → Carb Ratios | 
| [**Insulin Sensitivities**](../settings/therapy/isf.md#how-to-enter-your-isf-into-trio) | schedule <br> (50 mg/dL/U - 12:00 AM) | Settings → Therapy → Insulin Sensitivities | **Insulin Sensitivities** | schedule <br> (12:00 AM - 50 mg/dL/U) | Settings → Therapy Settings → Insulin Sensitivities | 

#### [Units and Limits](../settings/therapy/units-limits.md)

| Trio Name | Setting Format <br> (example) | Location in Trio | Loop Name | Setting Format <br> (example) | Location in Loop |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Glucose Units**](../settings/therapy/units-limits.md#glucose-units) | selection <br> (mg/dL or mmol/L) | Settings → Therapy → Units and Limits | **** |  |  |
| [**Maximum Insulin On Board (IOB)**](../settings/therapy/units-limits.md#max-iob) | decimal <br> (2 U) | Settings → Therapy → Units and Limits → Maximum Insulin On Board (IOB) | **** |  |  |
| [**Maximum Bolus**](../settings/therapy/units-limits.md#max-bolus) | decimal <br> (10 U) | Settings → Therapy → Units and Limits → Maximum Bolus | **Maximum Bolus** | decimal <br> (8U) | Settings → Therapy Settings → Maximum Bolus |
| [**Maximum Basal Rate**](../settings/therapy/units-limits.md#max-basal) | decimal <br> (2 U/hr) | Settings → Therapy → Units and Limits → Maximum Basal Rate | **Maximum Basal Rate** | decimal <br> (2 U/hr) | Settings → Therapy Settings → Maximum Basal Rate |
| [**Maximum Carbs on Board (COB)**](../settings/therapy/units-limits.md#max-cob) | decimal <br> (120 g) | Settings → Therapy → Units and Limits → Maximum Carbs on Board (COB) | **** |  |  |
| [**Minimum Safety Threshold**](../settings/therapy/units-limits.md#minimum-safety-threshold) | decimal <br> (60 mg/dL) | Settings → Therapy → Units and Limits → Minimum Safety Threshold | **Glucose Safety Limit** | decimal <br> (80 mg/dL) | Settings → Therapy Settings → Glucose Safety Limit |

### [Algorithm Settings](../settings/algorithm/index.md)

#### [Autosens](../settings/algorithm/autosens.md)

| Trio Name | Setting Format <br> (example) | Location in Trio | Loop Name | Setting Format <br> (example) | Location in Loop |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Autosens Min**](../settings/algorithm/autosens.md#autosens-min) | percentage <br> (70%) | Settings → Algorithm → Autosens → Autosens Min | **** |  |  |
| [**Autosens Max**](../settings/algorithm/autosens.md#autosens-max) | percentage <br> (120%) | Settings → Algorithm → Autosens → Autosens Max | **** |  |  |
| [Rewind Resets Autosens](../settings/algorithm/autosens.md#rewind-resets-autosens) | toggle <br> (On/Off) | Settings → Algorithm → Autosens → Autosens Max | **** |  |  |

#### [SMB (Super Micro Bolus)](../settings/algorithm/smb-settings.md)

| Trio Name | Setting Format <br> (example) | Location in Trio | Loop Name | Setting Format <br> (example) | Location in Loop |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Enable SMB Always**](../settings/algorithm/smb-settings.md#enable-smb-always) | toggle <br> (On/Off) | Settings → Algorithm → Super Micro Bolus (SMB) → Enable SMB Always | **Automatic Bolus** | selection <br> (Temp Basal Only/Automatic Bolus) | Settings → Dosing Strategy → Automatic Bolus |
| [Enable SMB With COB](../settings/algorithm/smb-settings.md#enable-smb-with-cob) | toggle <br> (On/Off) | Settings → Algorithm → Super Micro Bolus (SMB) → Enable SMB Always(OFF) → Enable SMB With COB | **** |  |  |
| [Enable SMB with Temptarget](../settings/algorithm/smb-settings.md#enable-smb-with-temptarget) | toggle <br> (On/Off) | Settings → Algorithm → Super Micro Bolus (SMB) → Enable SMB Always(OFF) → Enable SMB With TempTarget | **** |  |  |
| [Enable SMB After Carbs](../settings/algorithm/smb-settings.md#enable-smb-after-carbs) | toggle <br> (On/Off) | Settings → Algorithm → Super Micro Bolus (SMB) → Enable SMB Always(OFF) → Enable SMB After Carbs | **** |  |  |
| [**Enable SMB With High Glucose**](../settings/algorithm/smb-settings.md#enable-smb-with-high-glucose) | toggle <br> (On/Off) | Settings → Algorithm → Super Micro Bolus (SMB) → Enable SMB Always(OFF) → Enable SMB With High Glucose | **** |  |  |
| [**High Glucose Target**](../settings/algorithm/smb-settings.md#high-glucose-target) | decimal <br> (110 mg/dL / 6.1 mmol/L) | Settings → Algorithm → Super Micro Bolus (SMB) → Enable SMB With High Glucose → High Glucose Target | **** |  |  |
| [**Allow SMB with High Temp Target**](../settings/algorithm/smb-settings.md#allow-smb-with-high-temptarget) | toggle <br> (On/Off) | Settings → Algorithm → Super Micro Bolus (SMB) → Allow SMB With High Temptarget | **** |  |  |
| [**Enable UAM**](../settings/algorithm/smb-settings.md#enable-uam) | toggle <br> (On/Off) | Settings → Algorithm → Super Micro Bolus (SMB) → Enable UAM | **** |  |  |
| [**Max SMB Basal Minutes**](../settings/algorithm/smb-settings.md#max-smb-basal-minutes) | decimal <br> (30 min) | Settings → Algorithm → Super Micro Bolus (SMB) → Max SMB Basal Minutes | **** |  |  |
| [**Max UAM Basal Minutes**](../settings/algorithm/smb-settings.md#max-uam-basal-minutes) | decimal <br> (30 min) | Settings → Algorithm → Super Micro Bolus (SMB) → Max UAM Basal Minutes | **** |  |  |
| [**Max Allowed Glucose Rise for SMB**](../settings/algorithm/smb-settings.md#max-allowed-glucose-rise-for-smb) | percentage <br> (20%) | Settings → Algorithm → Super Micro Bolus (SMB) → Max Allowed Glucose Rise for SMB | **** |  |  |

#### [Dynamic Settings](../settings/algorithm/dynamic-settings.md)

| Trio Name | Setting Format <br> (example) | Location in Trio | Loop Name | Setting Format <br> (example) | Location in Loop |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Dynamic ISF**](../settings/algorithm/dynamic-settings.md#dynamic-isf-logarithmic) | selection <br> (Disabled / Logarithmic / Sigmoid) | Settings → Algorithm → Dynamic Settings → Dynamic ISF | **** |  |  |
| [**Adjustment Factor**](../settings/algorithm/dynamic-settings.md#adjustment-factor-logarithmic) | percentage <br> (80%) | Settings → Algorithm → Dynamic Settings → Dynamic ISF (Logarithmic) → Adjustment Factor | **** |  |  |
| [**Sigmoid Adjustment Factor**](../settings/algorithm/dynamic-settings.md#sigmoid-adjustment-factor) | percentage <br> (50%) | Settings → Algorithm → Dynamic Settings → Dynamic ISF (Sigmoid) → Sigmoid Adjustment Factor | **** |  |  | 
| [**Weighted Average of TDD**](../settings/algorithm/dynamic-settings.md#weighted-average-of-tdd) | percentage <br> (35%) | Settings → Algorithm → Dynamic Settings → Dynamic ISF (Logarithmic/Sigmoid) → Weighted Average of TDD | **** |  |  |
| [**Adjust Basal**](../settings/algorithm/dynamic-settings.md#weighted-average-of-tdd) | toggle <br> (On/Off) | Settings → Algorithm → Dynamic Settings → Dynamic ISF (Logarithmic/Sigmoid) → Adjust Basal | **** |  |  |

#### [Target Behavior](../settings/algorithm/target-behavior.md)

| Trio Name | Setting Format <br> (example) | Location in Trio | Loop Name | Setting Format <br> (example) | Location in Loop |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**High Temp Target Raises Sensitivity**](../settings/algorithm/target-behavior.md#high-temp-target-raises-sensitivity) | toggle <br> (On/Off) | Settings → Algorithm → Target Behavior → High Temp Target Raises Sensitivity | **** |  |  |
| [**Low Temp Target Lowers Sensitivity**](../settings/algorithm/target-behavior.md#low-temp-target-lowers-sensitivity) | toggle <br> (On/Off) | Settings → Algorithm → Target Behavior → Low Temp Target Lowers Sensitivity | **** |  |  |
| [**Sensitivity Raises Target**](../settings/algorithm/target-behavior.md#sensitivity-raises-target) | toggle <br> (On/Off) | Settings → Algorithm → Target Behavior → Sensitivity Raises Target | **** |  |  |
| [**Resistance Lowers Target**](../settings/algorithm/target-behavior.md#resistance-lowers-target) | toggle <br> (On/Off) | Settings → Algorithm → Target Behavior → Resistance Lowers Target | **** |  |  |
| [**Half Basal Exercise Target**](../settings/algorithm/target-behavior.md#half-basal-exercise-target) | decimal <br> (160 mg/dL &#124; 8.9 mmol/L) | Settings → Algorithm → Target Behavior → Half Basal Exercise Target | **** |  |  |

#### [Additionals](../settings/algorithm/additionals.md)

!!! danger "Warning"
    The settings in this section typically do not require any modifications.  
    Do not alter them without a solid understanding of what you are changing and the full impact it will have on the algorithm.

| Trio Name | Setting Format <br> (example) | Location in Trio | Loop Name | Setting Format <br> (example) | Location in Loop |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Max Daily Safety Multiplier**](../settings/algorithm/additionals.md#max-daily-safety-multiplier) | percentage <br> (300%) | Settings → Algorithm → Additionals → Max Daily Safety Multiplier | **** |  |  |
| [**Current Basal Safety Multiplier**](../settings/algorithm/additionals.md#current-basal-safety-multiplier) | percentage <br> (400%) | Settings → Algorithm → Additionals → Current Basal Safety Multiplier | **** |  |  |
| [**Duration of Insulin Action**](../settings/algorithm/additionals.md#duration-of-insulin-action) | decimal <br> (10 hr) | Settings → Algorithm → Additionals → Duration of Insulin Action | **** |  |  |
| [**Use Custom Peak Time**](../settings/algorithm/additionals.md#use-custom-peak-time) | toggle <br> (On/Off) | Settings → Algorithm → Additionals → Use Custom Peak Time | **** |  |  |
| [**Insulin Peak Time**](../settings/algorithm/additionals.md#insulin-peak-time) | decimal <br> (65 min) | Settings → Algorithm → Additionals → Use Custom Peak Time (ON) → Insulin Peak Time | **** |  |  |
| [**Skip Neutral Temps**](../settings/algorithm/additionals/.md#skip-neutral-temps) | toggle <br> (On/Off) | Settings → Algorithm → Additionals → Skip Neutral Temps | **** |  |  |
| [**Unsuspend If No Temp**](../settings/algorithm/additionals.md#unsuspend-if-no-temp) | toggle <br> (On/Off) | Settings → Algorithm → Additionals → Unsuspend If No Temp | **** |  |  |
| [**SMB Delivery Ratio**](../settings/algorithm/additionals.md#smb-delivery-ratio) | percentage <br> (50%) | Settings → Algorithm → Additionals → SMB Delivery Ratio | **** |  |  |
| [**SMB Interval**](../settings/algorithm/additionals.md#smb-interval) | decimal <br> (3 min) | Settings → Algorithm → Additionals → SMB Interval | **** |  |  |
| [**Min 5m Carb Impact**](../settings/algorithm/additionals.md#min-5m-carb-impact) | decimal <br> (8 mg/dL) | Settings → Algorithm → Additionals → Min 5m Carb Impact | **** |  |  |
| [**Remaining Carbs Percentage**](../settings/algorithm/additionals.md#remaining-carbs-percentage) | percentage <br> (100%) | Settings → Algorithm → Additionals → Remaining Carbs Percentage | **** |  |  |
| [**Remaining Carbs Cap**](../settings/algorithm/additionals.md#remaining-carbs-cap) | decimal <br> (90g) | Settings → Algorithm → Additionals → Remaining Carbs Cap | **** |  |  |
| [**Noisy CGM Target Increase**](../settings/algorithm/additionals.md#noisy-cgm-target-increase) | percentage <br> (130%) | Settings → Algorithm → Additionals → Noisy CGM Target Increase | **** |  |  |

### [Features](../settings/features/index.md)

#### [Bolus Calculator](../settings/features/bolus-calculator.md)

| Trio Name | Setting Format <br> (example) | Location in Trio | Loop Name | Setting Format <br> (example) | Location in Loop |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Display Meal Presets**](../settings/features/bolus-calculator.md#display-meal-presets) | toggle <br> (On/Off) | Settings → Features → Bolus Calculator → Display Meal Presets | **** |  |  |
| [**Recommended Bolus Percentage**](../settings/features/bolus-calculator.md#recommended-bolus-percentage) | percentage <br> (80%) | Settings → Features → Bolus Calculator → Recommended Bolus Percentage | **** |  |  |
| [**Enable Reduced Bolus**](../settings/features/bolus-calculator.md#enable-reduced-bolus-option) | toggle <br> (On/Off) | Settings → Features → Bolus Calculator → Enable Reduced Bolus | **** |  |  |
| [**Reduced Bolus Percentage**](../settings/features/bolus-calculator.md#reduced-bolus-percentage) | percentage <br> (30%) | Settings → Features → Bolus Calculator → Enable Reduced Bolus (ON) → Reduced Bolus Percentage | **** |  |  |
| [**Enable Super Bolus**](../settings/features/bolus-calculator.md#enable-super-bolus-option) | toggle <br> (On/Off) | Settings → Features → Bolus Calculator → Enable Super Bolus | **** |  |  |
| [**Super Bolus Percentage**](../settings/features/bolus-calculator.md#super-bolus-percentage) | percentage <br> (100%) | Settings → Features → Bolus Calculator → Enable Super Bolus (ON) → Super Bolus Percentage | ***No Equivalent Setting*** | N/A | N/A |
| [**Very Low Glucose Warning**](../settings/features/bolus-calculator.md#very-low-glucose-warning) | toggle <br> (On/Off) | Settings → Features → Bolus Calculator → Very Low Glucose Warning | **** |  |  |

#### [Meal Settings](../settings/features/meal-settings.md)

| Trio Name | Setting Format <br> (example) | Location in Trio | Loop Name | Setting Format <br> (example) | Location in Loop |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Max Carbs**](../settings/features/meal-settings.md#max-carbs) | decimal <br> (250 g) | Settings → Meal Settings → Max Carbs | **** |  |  |
| [**Max Protein**](../settings/features/meal-settings.md#max-protein) | decimal <br> (250 g) | Settings → Meal Settings → Enable Fat and Protein Entries (ON) → Max Protein | **** |  |  |
| [**Max Fat**](../settings/features/meal-settings.md#max-fat) | decimal <br> (250 g) | Settings → Meal Settings → Enable Fat and Protein Entries (ON) → Max Fat | **** |  |  |
| [**Max Meal Absorption Time**](../settings/features/meal-settings.md#max-meal-absorption-time) | decimal <br> (6 hr) | Settings → Meal Settings → Max Meal Absorption Time | **** |  |  |
| [**Enable Fat and Protein Entries**](../settings/features/meal-settings.md#enable-fat-and-protein-entries) | toggle <br> (On/Off) | Settings → Meal Settings → Enable Fat and Protein Entries | **** |  |  |
| [**Fat and Protein Delay**](../settings/features/meal-settings.md#fat-and-protein-delay) | decimal <br> (60 min) | Settings → Meal Settings → Enable Fat and Protein Entries (ON) → Fat and Protein Delay | **** |  |  |
| [**Maximum Duration**](../settings/features/meal-settings.md#maximum-duration) | decimal <br> (8 hr) | Settings → Meal Settings → Enable Fat and Protein Entries (ON) → Maximum Duration | **** |  |  |
| [**Spread Interval**](../settings/features/meal-settings.md#spread-interval) | decimal <br> (30 min) | Settings → Meal Settings → Enable Fat and Protein Entries (ON) → Spread Interval | **** |  |  |
| [**Fat and Protein Percentage**](../settings/features/meal-settings.md#fat-and-protein-percentage) | percentage <br> (50%) | Settings → Meal Settings → Enable Fat and Protein Entries (ON) → Fat and Protein Percentage | **** |  |  |

### Other Notable Settings

| Trio Name | Setting Format <br> (example) | Location in Trio | Loop Name | Setting Format <br> (example) | Location in Loop |
|:---:|:---:|:---:|:---:|:---:|:---:|


