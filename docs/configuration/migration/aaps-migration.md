# Coming from AAPS

## What to Expect After Install

- **Onboarding Wizard**  
    Trio will walk you through the initial setup of the app. Learn more in the [New User Setup Guide](../new-user-setup.md).
- **User Interface**  
    You can find more about the Trio User Interface in [this walk-through](../../usage/interface.md) of the app.
- **Remote Commands & iOS Shortcuts**  
    Trigger actions like carb entry, bolus, overrides, or temporary targets [remotely](../settings/features/remote-control.md) or through [shortcut automation](../settings/features/shortcuts.md).
    - **Use Loop Follow v4.0 or Later for remote commands**  
        More info at [LoopFollowDocs](https://loopfollowdocs.org/remote/remote-control-trio/)
- **Bolus Calculator**  
    The [Bolus Calculator](../../usage/features/bolus-calculator.md) in Trio offers simple dosing with clear breakdowns and safety logic.
- **In-App Statistics**  
    There are multiple statistics and graphs available in the Trio app. Click the link to learn more about the [Statistics](../../usage/features/statistics.md) available in the app.
- **Important Re: Autotune**  
    Autotune has not performed as it was intended for years with the addition of Dynamic ISF and the change from a single ISF and CR in Therapy settings. For this reason, we have removed it until it can be rewritten to work with Trio or a new Autotune-like feature can be built.

- - -

## What to Expect in Your First 3 Hours

Here are some things to keep in mind after moving from AndroidAPS to Trio 0.5+ in the first 3 hours:

- **Onboarding Wizard**  
    Take this time to go through the Onboarding Wizard. Reference the [New User Setup Guide](../new-user-setup.md) or ask questions on [Facebook](https://facebook.triodocs.org) or [Discord](https://discord.triodocs.org) if you have any questions.
- **Test Settings**  
    This is a great time to test your settings so you can start fresh on solid footing.
- **User Interface**  
    Use this time to learn the [User Interface](../../usage/interface.md).
- **Dynamic ISF**  
    - Dynamic ISF is disabled for the first **7 days**.  
    - If you were using Dynamic ISF in AAPS, you will have to wait a week before enabling dynamic ISF in Trio. 
    - Data import from AAPS/Nightscout is not available.
- **Settings**
    When migrating from AAPS to Trio, many users will achieve similar results by using similar settings. The core algorithm is the same between AndroidAPS and Trio.

    !!! warning "Dynamic ISF & Closed Loop"
        Trio must be in **Closed Loop** for 7 days in order to enable Dynamic ISF.

- **Autosens**  
    Autosens will require **8–24 hours** of data before it starts making adjustments. *You may need to enter carbs and bolus during this time if you aren't already doing so.*

    !!! warning "Initial Limitation with Autosens"
        There's a long standing issue with Autosens where it will likely be stuck at 1 for the first 24 hours when there are carb entries or SMBs.
    
        - When carb entries or SMBs **are not** present, Autosens will kick in after 8 hours.
        - When carb entries or SMBs **are** present, Autosens will kick in after 24 hours.
    
        Whether or not to enable SMBs or enter carbs is a personal choice based on what you prioritize in your first 24 hours.

!!! danger "Do not use a pump or cgm simulator"
    - Doing so will result in false data being stored and you will have to delete the app with all the data and reinstall before you can use it on a live pump.
    - This will also reset your 7-day waiting period for Dynamic ISF.
    - [More information on simulator use](../settings/devices/pump.md?h=simulator#pump-simulator)

- - -

## What to Expect After Your First 24 Hours

A full day on Trio! Congratulations! Here's what to look for:

- **Autosens**  
    Autosens now has enough data to make adjustments.
- **Review & Test Settings**  
    This is a good time to review your last 24 hours of results to see if your core settings performed as expected. If you had unexpected challenges with your settings, look at how to test them over the next 7 days:

    - [Basal Testing](../../usage/concepts/basal-rates.md)
    - [ISF Testing](../../usage/concepts/isf.md)
    - [Carb Ratio Testing](../../usage/concepts/carb-ratio.md)

- **Review Dynamic ISF Documentation**  
    Review the documentation on [Using Dynamic ISF](../../usage/features/dynamic-isf.md) in preparation for [Day 7](#what-to-expect-after-7-days).

- - -

## What to Expect After Your First 7 Days

You've completed a week on Trio! Here's what you should see:

- **Dynamic ISF**  
    - Dynamic ISF now has enough data. You now have the option to enable it.
    - The Logarithmic formula in Trio is the most similar to AAPS dynamic ISF. The Sigmoid formula behaves very differently (informative links below). Which one you use is up to you.
    - This is a great time to refresh [Using Dynamic ISF](../../usage/features/dynamic-isf.md) and check your settings for [Logarithmic Dynamic ISF](../settings/algorithm/dynamic-settings.md#dynamic-isf-logarithmic) or [Sigmoid Dynamic ISF](../settings/algorithm/dynamic-settings.md#dynamic-isf-sigmoid).

!!! warning "Can't Enable Dynamic ISF?"
    If Dynamic ISF does not give you the option to enable, you may have experienced one or more of the following:
    
    - You were not in closed loop for the full 7 days.
        - *Trio needs 7 days of closed loop to safely enable Dynamic ISF*
    - You had significant loss of connection with your CGM and/or pump. 
        - *Check your last week of Looping Statistics in the Stats tab in the Trio app. You need both <b>7 days</b> and an <b>85% success rate</b> to enable Dynamic ISF*. 
    - You enabled a significant number of manual Temp Basals with long run times.
        - *When a manual Temp Basal is set, Trio is unable to complete a loop cycle for the duration of the temp basal. This will cause a reduction in your success rate. If you do not have <b>85% success rate</b> for <b>7 days</b>, you cannot enable Dynamic ISF.*

- - -

## Convert AAPS Settings to Trio Settings

When you move your settings from AAPS to Trio, there are multiple settings that have similar names. We've created this chart to help you identify which settings are equivalent between the two apps and where to find them.

!!! tip "Some Settings May Need Conversion"
    - To convert a value from a decimal to a percentage, multiply it by 100.  
    - To convert from a percentage to a decimal, divide by 100.

### [Therapy Settings](../settings/therapy/index.md)

| Trio Name | Setting Format <br> (example) | Location in Trio | AAPS Name | Setting Format <br> (example) | Location in AAPS |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Glucose Targets**](../settings/therapy/glucose-targets.md#how-to-enter-your-glucose-targets-into-trio) | decimal <br> (100 mg/dL &#124; 5.5 mmol/L) | Settings → Therapy → Glucose Targets | **TARG** | decimal range <br> (100-120 mg/dL) | LP → TARG |
| [**Basal Rates**](../settings/therapy/basal-rates.md#how-to-enter-your-basal-profiles-into-trio) | decimal <br> (1.0 U/hr) | Settings → Therapy → Basal Rates | **BAS** | decimal <br> (1.0 U/hr) | LP → BAS | 
| [**Carb Ratios**](../settings/therapy/carb-ratios.md#how-to-enter-your-carb-ratios-cr-into-trio) | decimal <br> (10 g/U) | Settings → Therapy → Carb Ratios | **IC** | decimal <br> (10 g/U) | LP → IC | 
| [**Insulin Sensitivities**](../settings/therapy/isf.md#how-to-enter-your-isf-into-trio) | decimal <br> (54 mg/dL/U &#124; 3.0 mmol/L/U) | Settings → Therapy → Insulin Sensitivities | **ISF** | decimal <br> (54) | LP → ISF | 

#### [Units and Limits](../settings/therapy/units-limits.md)

| Trio Name | Setting Format <br> (example) | Location in Trio | AAPS Name | Setting Format <br> (example) | Location in AAPS |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Glucose Units**](../settings/therapy/units-limits.md#glucose-units) | selection <br> (mg/dL or mmol/L) | Settings → Therapy → Units and Limits | **Units** | selection <br> (mg/dL or mmol/L) | Setup Wizard → Units |
| [**Maximum Insulin On Board (IOB)**](../settings/therapy/units-limits.md#max-iob) | decimal <br> (2 U) | Settings → Therapy → Units and Limits → Maximum Insulin On Board (IOB) | **Maximum total IOB OpenAPS can't go over** | decimal <br> (2) | Preferences → OpenAPS SMB → Maximum total IOB OpenAPS can't go over |
| [**Maximum Bolus**](../settings/therapy/units-limits.md#max-bolus) | decimal <br> (10 U) | Settings → Therapy → Units and Limits → Maximum Bolus | **Max allowed bolus** | decimal <br> (10.0) | Preferences → Treatments safety → Max allowed bolus |
| [**Maximum Basal Rate**](../settings/therapy/units-limits.md#max-basal) | decimal <br> (2 U/hr) | Settings → Therapy → Units and Limits → Maximum Basal Rate | **Max U/h a Temp Basal can be set to** | decimal <br> (4.0) | Preferences → OpenAPS SMB |
| [**Maximum Carbs on Board (COB)**](../settings/therapy/units-limits.md#max-cob) | decimal <br> (120 g) | Settings → Therapy → Units and Limits → Maximum Carbs on Board (COB) | **Max allowed carbs** | decimal <br> (120) | Preferences → Treatments safety → Max allowed carbs |
| [**Minimum Safety Threshold**](../settings/therapy/units-limits.md#minimum-safety-threshold) | decimal <br> (60 mg/dL) | Settings → Therapy → Units and Limits → Minimum Safety Threshold | **BG level below which low glucose suspend occurs** | decimal <br> (65) | Preferences → OpenAPS SMB → Enable dynamic sensitivity (ON) → BG level below which low glucose suspend occurs |

### [Algorithm Settings](../settings/algorithm/index.md)

#### [Autosens](../settings/algorithm/autosens.md)

| Trio Name | Setting Format <br> (example) | Location in Trio | AAPS Name | Setting Format <br> (example) | Location in AAPS |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Autosens Min**](../settings/algorithm/autosens.md#autosens-min) | percentage <br> (70%) | Settings → Algorithm → Autosens → Autosens Min | **Min autosens ratio** | decimal <br> (0.7) | Preferences → Absorption Settings → Advanced Settings Preferences → Min autosens ratio |
| [**Autosens Max**](../settings/algorithm/autosens.md#autosens-max) | percentage <br> (120%) | Settings → Algorithm → Autosens → Autosens Max | **Max autosens ratio** | decimal <br> (1.2) | Preferences → Absorption Settings → Advanced Settings → Max autosens ratio |
| [Rewind Resets Autosens](../settings/algorithm/autosens.md#rewind-resets-autosens) | toggle <br> (On/Off) | Settings → Algorithm → Autosens → Autosens Max | **Log a Pump Site Change** | *Always On* | *Always On* |

#### [SMB (Super Micro Bolus)](../settings/algorithm/smb-settings.md)

| Trio Name | Setting Format <br> (example) | Location in Trio | AAPS Name | Setting Format <br> (example) | Location in AAPS |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Enable SMB Always**](../settings/algorithm/smb-settings.md#enable-smb-always) | toggle <br> (On/Off) | Settings → Algorithm → Super Micro Bolus (SMB) → Enable SMB Always | **Enable SMB always** | toggle <br> (On/Off) | Preferences → Enable SMB → Enable SMB always |
| [Enable SMB With COB](../settings/algorithm/smb-settings.md#enable-smb-with-cob) | toggle <br> (On/Off) | Settings → Algorithm → Super Micro Bolus (SMB) → Enable SMB Always(OFF) → Enable SMB With COB | **Enable SMB with COB** | toggle <br> (On/Off) | Preferences → Enable SMB → Enable SMB with COB |
| [Enable SMB with Temptarget](../settings/algorithm/smb-settings.md#enable-smb-with-temptarget) | toggle <br> (On/Off) | Settings → Algorithm → Super Micro Bolus (SMB) → Enable SMB Always(OFF) → Enable SMB With TempTarget | **Enable SMB with temp targets** | toggle <br> (On/Off) | Preferences → Enable SMB → Enable SMB with temp targets |
| [Enable SMB After Carbs](../settings/algorithm/smb-settings.md#enable-smb-after-carbs) | toggle <br> (On/Off) | Settings → Algorithm → Super Micro Bolus (SMB) → Enable SMB Always(OFF) → Enable SMB After Carbs | **Enable SMB after carbs** | toggle <br> (On/Off) | Preferences → Enable SMB → Enable SMB after carbs |
| [**Enable SMB With High Glucose**](../settings/algorithm/smb-settings.md#enable-smb-with-high-glucose) | toggle <br> (On/Off) | Settings → Algorithm → Super Micro Bolus (SMB) → Enable SMB Always(OFF) → Enable SMB With High Glucose | ***No Equivalent Setting*** | N/A | N/A |
| [**High Glucose Target**](../settings/algorithm/smb-settings.md#high-glucose-target) | decimal <br> (110 mg/dL / 6.1 mmol/L) | Settings → Algorithm → Super Micro Bolus (SMB) → Enable SMB With High Glucose → High Glucose Target | ***No Equivalent Setting*** | N/A | N/A |
| [**Allow SMB with High Temp Target**](../settings/algorithm/smb-settings.md#allow-smb-with-high-temptarget) | toggle <br> (On/Off) | Settings → Algorithm → Super Micro Bolus (SMB) → Allow SMB With High Temptarget | **Enable SMB with high temp targets** | toggle <br> (On/Off) | Preferences → OpenAPS SMB → Enable SMB → Enable SMB with high temp targets |
| [**Enable UAM**](../settings/algorithm/smb-settings.md#enable-uam) | toggle <br> (On/Off) | Settings → Algorithm → Super Micro Bolus (SMB) → Enable UAM | **Enable UAM** | toggle <br> (On/Off) | Preferences → OpenAPS SMB → Enable UAM |
| [**Max SMB Basal Minutes**](../settings/algorithm/smb-settings.md#max-smb-basal-minutes) | decimal <br> (30 min) | Settings → Algorithm → Super Micro Bolus (SMB) → Max SMB Basal Minutes | **Max minutes of basal to limit SMB to** | decimal <br> (30) | Preferences → OpenAPS SMB → Enable SMB → Max minutes of basal to limit SMB to |
| [**Max UAM Basal Minutes**](../settings/algorithm/smb-settings.md#max-uam-basal-minutes) | decimal <br> (30 min) | Settings → Algorithm → Super Micro Bolus (SMB) → Max UAM Basal Minutes | **Max minutes of basal to limit SMB to for UAM** | decimal <br> (30) | Preferences → OpenAPS SMB → Enable UAM → Max minutes of basal to limit SMB to for UAM |
| [**Max Allowed Glucose Rise for SMB**](../settings/algorithm/smb-settings.md#max-allowed-glucose-rise-for-smb) | percentage <br> (20%) | Settings → Algorithm → Super Micro Bolus (SMB) → Max Allowed Glucose Rise for SMB | ***No Equivalent Setting*** | N/A | N/A |

#### [Dynamic Settings](../settings/algorithm/dynamic-settings.md)

| Trio Name | Setting Format <br> (example) | Location in Trio | AAPS Name | Setting Format <br> (example) | Location in AAPS |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Dynamic ISF**](../settings/algorithm/dynamic-settings.md#dynamic-isf-logarithmic) | selection <br> (Disabled / Logarithmic / Sigmoid) | Settings → Algorithm → Dynamic Settings → Dynamic ISF | **Enable dynamic sensitivity** | toggle <br> (On/Off) | Preferences → OpenAPS SMB → Enable dynamic sensitivity |
| [**Adjustment Factor**](../settings/algorithm/dynamic-settings.md#adjustment-factor-logarithmic) | percentage <br> (80%) | Settings → Algorithm → Dynamic Settings → Dynamic ISF (Logarithmic) → Adjustment Factor | **DynamicISF Adjustment Factor %** | percentage <br> (100) | Preferences → OpenAPS SMB → Enable dynamic sensitivity (ON) → DynamicISF Adjustment Factor % |
| [**Sigmoid Adjustment Factor**](../settings/algorithm/dynamic-settings.md#sigmoid-adjustment-factor) | percentage <br> (50%) | Settings → Algorithm → Dynamic Settings → Dynamic ISF (Sigmoid) → Sigmoid Adjustment Factor | ***No Equivalent Setting*** | N/A | N/A | 
| [**Weighted Average of TDD**](../settings/algorithm/dynamic-settings.md#weighted-average-of-tdd) | percentage <br> (35%) | Settings → Algorithm → Dynamic Settings → Dynamic ISF (Logarithmic/Sigmoid) → Weighted Average of TDD | ***No Equivalent Setting*** | N/A | N/A |
| [**Adjust Basal**](../settings/algorithm/dynamic-settings.md#weighted-average-of-tdd) | toggle <br> (On/Off) | Settings → Algorithm → Dynamic Settings → Dynamic ISF (Logarithmic/Sigmoid) → Adjust Basal | **Enable TDD based sensitivity ratio for basal and glucose target modification** | toggle <br> (On/Off) | Preferences → OpenAPS SMB → Enable dynamic sensitivity (ON) → Enable TDD based sensitivity ratio for basal and glucose target modification |

#### [Target Behavior](../settings/algorithm/target-behavior.md)

| Trio Name | Setting Format <br> (example) | Location in Trio | AAPS Name | Setting Format <br> (example) | Location in AAPS |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**High Temp Target Raises Sensitivity**](../settings/algorithm/target-behavior.md#high-temp-target-raises-sensitivity) | toggle <br> (On/Off) | Settings → Algorithm → Target Behavior → High Temp Target Raises Sensitivity | **High temp-target raises sensitivity** | toggle <br> (On/Off) | Preferences → OpenAPS SMB → High temp-target raises sensitivity |
| [**Low Temp Target Lowers Sensitivity**](../settings/algorithm/target-behavior.md#low-temp-target-lowers-sensitivity) | toggle <br> (On/Off) | Settings → Algorithm → Target Behavior → Low Temp Target Lowers Sensitivity | **Low temp-target lowers sensitivity** | toggle <br> (On/Off) | Preferences → OpenAPS SMB → Low temp-target lowers sensitivity |
| [**Sensitivity Raises Target**](../settings/algorithm/target-behavior.md#sensitivity-raises-target) | toggle <br> (On/Off) | Settings → Algorithm → Target Behavior → Sensitivity Raises Target | **Sensitivity raises target** | toggle <br> (On/Off) | Preferences → OpenAPS SMB → Sensitivity raises target |
| [**Resistance Lowers Target**](../settings/algorithm/target-behavior.md#resistance-lowers-target) | toggle <br> (On/Off) | Settings → Algorithm → Target Behavior → Resistance Lowers Target | **Resistance lowers target** | toggle <br> (On/Off) | Preferences → OpenAPS SMB → Resistance lowers target |
| [**Half Basal Exercise Target**](../settings/algorithm/target-behavior.md#half-basal-exercise-target) | decimal <br> (160 mg/dL &#124; 8.9 mmol/L) | Settings → Algorithm → Target Behavior → Half Basal Exercise Target | **Activity Target Value** | decimal <br> (160 mg/dL &#124; 8.9 mmol/L) | Preferences → Overview Default → Temp-targets → Activity target value |

#### [Additionals](../settings/algorithm/additionals.md)

!!! danger "Warning"
    The settings in this section typically do not require any modifications.  
    Do not alter them without a solid understanding of what you are changing and the full impact it will have on the algorithm.

| Trio Name | Setting Format <br> (example) | Location in Trio | AAPS Name | Setting Format <br> (example) | Location in AAPS |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Max Daily Safety Multiplier**](../settings/algorithm/additionals.md#max-daily-safety-multiplier) | percentage <br> (300%) | Settings → Algorithm → Additionals → Max Daily Safety Multiplier | **Max daily safety multiplier** | decimal <br> (3.0) | Preferences → OpenAPS SMB → Advanced Settings → Max daily safety mulitiplier |
| [**Current Basal Safety Multiplier**](../settings/algorithm/additionals.md#current-basal-safety-multiplier) | percentage <br> (400%) | Settings → Algorithm → Additionals → Current Basal Safety Multiplier | **Current basal safety multiplier** | decimal <br> (4.0) | Preferences → OpenAPS SMB → Advanced Settings → Current basal safety multiplier |
| [**Duration of Insulin Action**](../settings/algorithm/additionals.md#duration-of-insulin-action) | decimal <br> (10 hr) | Settings → Algorithm → Additionals → Duration of Insulin Action | **DIA** | decimal <br> (10) | LP → DIA |
| [**Use Custom Peak Time**](../settings/algorithm/additionals.md#use-custom-peak-time) | toggle <br> (On/Off) | Settings → Algorithm → Additionals → Use Custom Peak Time | **Free-Peak Oref** | selection <br> (Free-Peak Oref) | Config Builder → Profile → Insulin → Free-Peak Oref |
| [**Insulin Peak Time**](../settings/algorithm/additionals.md#insulin-peak-time) | decimal <br> (65 min) | Settings → Algorithm → Additionals → Use Custom Peak Time (ON) → Insulin Peak Time | **Free-Peak Oref** | decimal <br> (45) | Config Builder → Profile → Insulin → Free-Peak Oref → Peak Time |
| [**Skip Neutral Temps**](../settings/algorithm/additionals/.md#skip-neutral-temps) | toggle <br> (On/Off) | Settings → Algorithm → Additionals → Skip Neutral Temps | ***No Equivalent Setting*** | N/A | N/A |
| [**Unsuspend If No Temp**](../settings/algorithm/additionals.md#unsuspend-if-no-temp) | toggle <br> (On/Off) | Settings → Algorithm → Additionals → Unsuspend If No Temp | ***No Equivalent Setting*** | N/A | N/A |
| [**SMB Delivery Ratio**](../settings/algorithm/additionals.md#smb-delivery-ratio) | percentage <br> (50%) | Settings → Algorithm → Additionals → SMB Delivery Ratio | ***No Equivalent Setting*** | Always 50% | Always 50% |
| [**SMB Interval**](../settings/algorithm/additionals.md#smb-interval) | decimal <br> (3 min) | Settings → Algorithm → Additionals → SMB Interval | **How frequently SMBs will be given in min** | decimal <br> (3) | Preferences → Enable SMB → How frequently SMBs will be given in min |
| [**Min 5m Carb Impact**](../settings/algorithm/additionals.md#min-5m-carb-impact) | decimal <br> (8 mg/dL) | Settings → Algorithm → Additionals → Min 5m Carb Impact | **min_5m_carbimpact** | decimal <br> (8) | Preferences → Absorption settings → Advanced → min_5m_carbimpact |
| [**Remaining Carbs Percentage**](../settings/algorithm/additionals.md#remaining-carbs-percentage) | percentage <br> (100%) | Settings → Algorithm → Additionals → Remaining Carbs Percentage | ***No Equivalent Setting*** | N/A | N/A |
| [**Remaining Carbs Cap**](../settings/algorithm/additionals.md#remaining-carbs-cap) | decimal <br> (90g) | Settings → Algorithm → Additionals → Remaining Carbs Cap | ***No Equivalent Setting*** | N/A | N/A |
| [**Noisy CGM Target Increase**](../settings/algorithm/additionals.md#noisy-cgm-target-increase) | percentage <br> (130%) | Settings → Algorithm → Additionals → Noisy CGM Target Increase | ***No Equivalent Setting*** | N/A | N/A |

### [Features](../settings/features/index.md)

#### [Bolus Calculator](../settings/features/bolus-calculator.md)

| Trio Name | Setting Format <br> (example) | Location in Trio | AAPS Name | Setting Format <br> (example) | Location in AAPS |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Display Meal Presets**](../settings/features/bolus-calculator.md#display-meal-presets) | toggle <br> (On/Off) | Settings → Features → Bolus Calculator → Display Meal Presets | **Quick Wizard** | N/A | Preferences → Overview → QuickWizard Settings → Add / edit Quick Wizard |
| [**Recommended Bolus Percentage**](../settings/features/bolus-calculator.md#recommended-bolus-percentage) | percentage <br> (80%) | Settings → Features → Bolus Calculator → Recommended Bolus Percentage | **Deliver this part of bolus wizard result** | percentage <br> (100) | Preferences → Overview → Deliver this part of bolus wizard result |
| [**Enable Reduced Bolus**](../settings/features/bolus-calculator.md#enable-reduced-bolus-option) | toggle <br> (On/Off) | Settings → Features → Bolus Calculator → Enable Reduced Bolus | ***No Equivalent Setting*** | N/A | N/A |
| [**Reduced Bolus Percentage**](../settings/features/bolus-calculator.md#reduced-bolus-percentage) | percentage <br> (30%) | Settings → Features → Bolus Calculator → Enable Reduced Bolus (ON) → Reduced Bolus Percentage | ***No Equivalent Setting*** | N/A | N/A |
| [**Enable Super Bolus**](../settings/features/bolus-calculator.md#enable-super-bolus-option) | toggle <br> (On/Off) | Settings → Features → Bolus Calculator → Enable Super Bolus | **Enable super bolus functionality in wizard**  | toggle <br> (On/Off) | Preferences → Overview → Advanced → Enable super bolus functionality in wizard |
| [**Super Bolus Percentage**](../settings/features/bolus-calculator.md#super-bolus-percentage) | percentage <br> (100%) | Settings → Features → Bolus Calculator → Enable Super Bolus (ON) → Super Bolus Percentage | ***No Equivalent Setting*** | N/A | N/A |
| [**Very Low Glucose Warning**](../settings/features/bolus-calculator.md#very-low-glucose-warning) | toggle <br> (On/Off) | Settings → Features → Bolus Calculator → Very Low Glucose Warning | ***No Equivalent Setting*** | N/A | N/A |

#### [Meal Settings](../settings/features/meal-settings.md)

| Trio Name | Setting Format <br> (example) | Location in Trio | AAPS Name | Setting Format <br> (example) | Location in AAPS |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Max Carbs**](../settings/features/meal-settings.md#max-carbs) | decimal <br> (250 g) | Settings → Meal Settings → Max Carbs | **Max allowed carbs** | decimal <br> (100) | Preferences → Treatments safety → Max allowed carbs |
| [**Max Protein**](../settings/features/meal-settings.md#max-protein) | decimal <br> (250 g) | Settings → Meal Settings → Enable Fat and Protein Entries (ON) → Max Protein | ***No Equivalent Setting*** | N/A | N/A |
| [**Max Fat**](../settings/features/meal-settings.md#max-fat) | decimal <br> (250 g) | Settings → Meal Settings → Enable Fat and Protein Entries (ON) → Max Fat | ***No Equivalent Setting*** | N/A | N/A |
| [**Max Meal Absorption Time**](../settings/features/meal-settings.md#max-meal-absorption-time) | decimal <br> (6 hr) | Settings → Meal Settings → Max Meal Absorption Time | **Meal max absorption time** | decimal <br> (6) | Preferences → Absorption Settings → Advanced → Meal max absorption time |
| [**Enable Fat and Protein Entries**](../settings/features/meal-settings.md#enable-fat-and-protein-entries) | toggle <br> (On/Off) | Settings → Meal Settings → Enable Fat and Protein Entries | ***No Equivalent Setting*** | N/A | N/A |
| [**Fat and Protein Delay**](../settings/features/meal-settings.md#fat-and-protein-delay) | decimal <br> (60 min) | Settings → Meal Settings → Enable Fat and Protein Entries (ON) → Fat and Protein Delay | ***No Equivalent Setting*** | N/A | N/A |
| [**Maximum Duration**](../settings/features/meal-settings.md#maximum-duration) | decimal <br> (8 hr) | Settings → Meal Settings → Enable Fat and Protein Entries (ON) → Maximum Duration | ***No Equivalent Setting*** | N/A | N/A |
| [**Spread Interval**](../settings/features/meal-settings.md#spread-interval) | decimal <br> (30 min) | Settings → Meal Settings → Enable Fat and Protein Entries (ON) → Spread Interval | ***No Equivalent Setting*** | N/A | N/A |
| [**Fat and Protein Percentage**](../settings/features/meal-settings.md#fat-and-protein-percentage) | percentage <br> (50%) | Settings → Meal Settings → Enable Fat and Protein Entries (ON) → Fat and Protein Percentage | ***No Equivalent Setting*** | N/A | N/A |

### Other Notable Settings

| Trio Name | Setting Format <br> (example) | Location in Trio | AAPS Name | Setting Format <br> (example) | Location in AAPS |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **Smooth Glucose Value** | toggle <br> (On/Off) | Settings → Devices → CGM → Smooth Glucose Value | **Smoothing** | selection <br> (No smoothing / Exponential smoothing / Average smoothing) | Config Builder → Smoothing |

!!! note "Custom Automations"
    Trio does not offer certain custom automations that are available in AAPS, such as automating a hypo temp target when glucose drops below a certain value.
    This can, however, be achieved one of two ways:
    
    - Enable "Sensitivity Raises Target" which will automatically increase your target glucose when sensitivity ratio is below 100%.
    - Enable "High Temp Target Raises Sensitivity" and save a custom temp target of <100 mg/dL (5.5 mmol/L) under adjustments that you can manually enable when recovering from a low glucose.

