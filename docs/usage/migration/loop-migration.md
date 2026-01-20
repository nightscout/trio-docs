# Coming from Loop

## What to Expect After Install

- **Onboarding Wizard**  
    Trio will walk you through the initial setup of the app. Learn more in the [New User Setup Guide](../../configuration/new-user-setup.md).
- **User Interface**  
    You can find more about the Trio User Interface in [this walk-through](../../usage/interface.md) of the app.
- **Remote Commands & iOS Shortcuts**  
    Trigger actions like carb entry, bolus, overrides, or temporary targets [remotely](../../configuration/settings/features/remote-control.md) or through [shortcut automation](../../configuration/settings/features/shortcuts.md).
    - **Use Loop Follow v4.0 or Later for remote commands**  
        Loop Follow is the companion app for Trio. More info at [LoopFollowDocs](https://loopfollowdocs.org/remote/remote-control-trio/). 
        
    !!! note 
        Loop Caregiver will not work with Trio
        
- **Bolus Calculator**  
    The [Bolus Calculator](../../usage/features/bolus-calculator.md) in Trio offers simple dosing with clear breakdowns and safety logic.
- **In-App Statistics**  
    There are multiple statistics and graphs available in the Trio app. Click the link to learn more about the [Statistics](../../usage/features/statistics.md) available in the app.

- - -

## What to Expect in Your First 3 Hours

Here are some things to keep in mind after moving from Loop to Trio v0.5+ in the first 3 hours:

- **Onboarding Wizard**  
    Take this time to go through the Onboarding Wizard. Reference the [New User Setup Guide](../../configuration/new-user-setup.md) or ask questions on [Facebook](https://facebook.triodocs.org) or [Discord](https://discord.triodocs.org) if you have any questions.
- **Test Settings**  
    Your Loop settings may be a great starting point for Trio, but often times they need some adjustment. This is a great time to test your settings so you can start fresh on solid footing.
- **User Interface**  
    Use this time to learn the [User Interface](../../usage/interface.md).
- **Dynamic ISF**  
    Dynamic ISF is disabled for the first **7 days**. 

    !!! warning "Dynamic ISF & Closed Loop"
        Trio must be in **Closed Loop** for 7 days in order to enable Dynamic ISF.

- **Autosens**  
    Autosens will require **8–24 hours** of data before it starts making adjustments. *You may need to enter carbs and bolus during this time if you aren't already doing so.*

    !!! warning "Initial Limitation with Autosens"
        There's a long standing issue with Autosens where it will likely be stuck at 100% for the first 24 hours when there are carb entries or SMBs.
    
        - When carb entries or SMBs **are not** present, Autosens will kick in after 8 hours.
        - When carb entries or SMBs **are** present, Autosens will kick in after 24 hours.
    
        Whether or not to enable SMBs or enter carbs is a personal choice based on what you prioritize in your first 24 hours.

- **Nightscout Changes**  
    - You will need to update your Nightscout page to use Trio plugins rather than Loop plugins.
    - Replace `loop` with `openaps` in the variables `ENABLE`, `SHOW_PLUGINS`, and `SHOW_FORECAST`.
    - If you pay for Nightscout through a provider, please reach out to them to update your variables.
!!! danger "Do not use a pump or cgm simulator"
    - Doing so will result in false data being stored and you will have to delete the app with all the data and reinstall before you can use it on a live pump.
    - This will also reset your 7-day waiting period for Dynamic ISF.
    - [More information on simulator use](../../configuration/settings/devices/pump.md?h=simulator#pump-simulator)

- - -

## What to Expect After 24 Hours

A full day on Trio! Congratulations! Here's what to look for:

- **Autosens**  
    Autosens now has enough data to make adjustments.
- **Review & Test Settings**  
    This is a good time to review your last 24 hours of results to see if your core settings performed as expected. If you had unexpected challenges with your settings, look at how to test them over the next 7 days:

    - [Basal Testing](../../usage/concepts/basal-rates.md)
    - [ISF Testing](../../usage/concepts/isf.md)
    - [Carb Ratio Testing](../../usage/concepts/carb-ratios.md)

- **Review Dynamic ISF Documentation**  
    Review the documentation on [Using Dynamic ISF](../../usage/explained/dynamic-isf.md) in preparation for [Day 7](#what-to-expect-after-7-days).
- **Meal Time Struggles**  
    Sometimes, users coming from Loop will notice stability during fasting periods, but meal times are more challenging than they were with Loop. This is due to a shift in algorithms. Loop is more carb-centric, causing users to place a heavy reliance upon their Carb Ratio over their ISF value. Trio is more reliant upon your ISF value and as such you may find you need to adjust your ISF and possibly your CR when you switch from Loop to Trio. 
- - -

## What to Expect After 7 Days

You've completed a week on Trio! Here's what you should see:

- **Dynamic ISF**  
    Dynamic ISF now has enough data. You now have the option to enable it.

    This is a great time to refresh [Using Dynamic ISF](../../usage/explained/dynamic-isf.md)and check your settings for [Logarithmic Dynamic ISF](../../configuration/settings/algorithm/dynamic-settings.md#dynamic-isf-logarithmic) or [Sigmoid Dynamic ISF](../../configuration/settings/algorithm/dynamic-settings.md#dynamic-isf-sigmoid).

    !!! warning "Can't Enable Dynamic ISF?"
        If Dynamic ISF does not give you the option to enable, you may have experienced one or more of the following:
    
        - You were not in closed loop for the full 7 days.
            - *Trio needs 7 days of closed loop to safely enable Dynamic ISF*
        - You had significant loss of connection with your CGM and/or pump. 
            - *Check your last week of Looping Statistics in the Stats tab in the Trio app. You need both <b>7 days</b> and an <b>85% success rate</b> to enable Dynamic ISF*. 
        - You enabled a significant number of manual Temp Basals with long run times.
            - *When a manual Temp Basal is set, Trio is unable to complete a loop cycle for the duration of the temp basal. This will cause a reduction in your success rate. If you do not have <b>85% success rate</b> for <b>7 days</b>, you cannot enable Dynamic ISF.*

- - -

## Convert Loop Settings to Trio Settings

When you start on Trio, you will notice there are significantly more settings than in Loop. A few can be manually added. Below are the settings that are in both Loop and Trio as well as where to locate them in each app.

### [Therapy Settings](../../configuration/settings/therapy/index.md)
| Trio Name | Setting Format <br> (example) | Location in Trio | Loop Name | Setting Format <br> (example) | Location in Loop |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Glucose Targets**](../../configuration/settings/therapy/glucose-targets.md#how-to-enter-your-glucose-targets-into-trio) | schedule <br> (100 mg/dL — 12:00 AM)  | Settings → Therapy → Glucose Targets | **Correction Range** | decimal range <br> (100 – 115 mg/dL) | Settings → Therapy Settings → Correction Range |
| [**Basal Rates**](../../configuration/settings/therapy/basal-rates.md#how-to-enter-your-basal-profiles-into-trio) | schedule <br> (1.0 U/hr — 12:00 AM) | Settings → Therapy → Basal Rates | **Basal Rates** | schedule <br> (12:00 AM — 1.0 U/hr) | Settings → Therapy Settings → Basal Rates | 
| [**Carb Ratios**](../../configuration/settings/therapy/carb-ratios.md#how-to-enter-your-carb-ratios-cr-into-trio) | schedule <br> (15 g/U — 12:00 AM) | Settings → Therapy → Carb Ratios | **Carb Ratios** | schedule <br> (12:00AM — 15 g/U) | Setting → Therapy Settings → Carb Ratios | 
| [**Insulin Sensitivities**](../../configuration/settings/therapy/isf.md#how-to-enter-your-isf-into-trio) | schedule <br> (50 mg/dL/U — 12:00 AM) | Settings → Therapy → Insulin Sensitivities | **Insulin Sensitivities** | schedule <br> (12:00 AM — 50 mg/dL/U) | Settings → Therapy Settings → Insulin Sensitivities | 

#### [Units and Limits](../../configuration/settings/therapy/units-limits.md)

| Trio Name | Setting Format <br> (example) | Location in Trio | Loop Name | Setting Format <br> (example) | Location in Loop |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Glucose Units**](../../configuration/settings/therapy/units-limits.md#glucose-units) | selection <br> (mg/dL or mmol/L) | Settings → Therapy → Units and Limits | **Apple Health: Blood Glucose Unit** | selection <br> (mg/dL or mmol/L) | Health App → Browse → Vitals → Blood Glucose → Unit |
| [**Maximum Bolus**](../../configuration/settings/therapy/units-limits.md#max-bolus) | decimal <br> (10 U) | Settings → Therapy → Units and Limits → Maximum Bolus | **Maximum Bolus** | decimal <br> (8 U) | Settings → Therapy Settings → Maximum Bolus |
| [**Maximum Basal Rate**](../../configuration/settings/therapy/units-limits.md#max-basal) | decimal <br> (2 U/hr) | Settings → Therapy → Units and Limits → Maximum Basal Rate | **Maximum Basal Rate** | decimal <br> (2 U/hr) | Settings → Therapy Settings → Maximum Basal Rate |
| [**Minimum Safety Threshold**](../../configuration/settings/therapy/units-limits.md#minimum-safety-threshold) | decimal <br> (60 mg/dL) | Settings → Therapy → Units and Limits → Minimum Safety Threshold | **Glucose Safety Limit** | decimal <br> (80 mg/dL) | Settings → Therapy Settings → Glucose Safety Limit |

### [Algorithm Settings](../../configuration/settings/algorithm/index.md)

#### [SMB (Super Micro Bolus)](../../configuration/settings/algorithm/smb-settings.md)

| Trio Name | Setting Format <br> (example) | Location in Trio | Loop Name | Setting Format <br> (example) | Location in Loop |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [**Enable SMB Always**](../../configuration/settings/algorithm/smb-settings.md#enable-smb-always) | toggle <br> (On/Off) | Settings → Algorithm → Super Micro Bolus (SMB) → Enable SMB Always | **Automatic Bolus** | selection <br> (Temp Basal Only/Automatic Bolus) | Settings → Dosing Strategy → Automatic Bolus |

