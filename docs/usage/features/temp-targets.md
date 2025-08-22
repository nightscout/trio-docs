# Temporary Targets

## What is a Temporary Target?
Temporary Targets, also called Temp Targets, are glucose targets set by the user for a short period of time. Temp targets can be used to increase or decrease insulin delivery.

There are multiple cases when a temp target may be useful. Below you will find a few examples. This list is not all-inclusive and you may find additional uses for temp targets as you use Trio.

In addition to temp targets, Trio also has a more customizable feature called [Overrides](overrides.md).

- - -

## How Do I Set a Temporary Target?
Temp Targets can be found under the Adjustments tab at the bottom of the Trio app screen.

You can also find your saved Temp Targets listed here.

Temp targets can be set remotely using [Loop Follow](../../configuration/settings/features/remote-control.md) or automated using [Shortcuts](../../configuration/settings/features/shortcuts.md#temporary-target).

- - -

## Examples of Use

### Cardio Exercise

!!! tip "Tips"
    
    - Set a high temp target 1-2 hours before your exercise
    - Enable exercise-related settings to reduce insulin delivered while exercising
    - Pack a snack when you plan to exercise

Cardiovascular exercise can have immediate and extended effects on glycemic control. Generally, individuals will find their blood sugar drops during and continue to drop for 3-4 hours after. They may also experience increased insulin sensitivity for 24 hours after this type of exercise.

In preparation for exercise, you can use the following temp target features to reduce the occurence of lows:

    - Set a temp target >100 mg/dL (>5.5 mmol/L) approximately 1-2 hours before you start exercising.
    - *Enable* [High Temp Target Raises Sensitivity](../../configuration/settings/algorithm/target-behavior.md#high-temp-target-raises-sensitivity).
    - If you want SMBs automatically disabled while exercising with a temp target above 100 mg/dL (>5.5 mmol/L), ensure [Allow SMB With High Temptarget](../../configuration/settings/algorithm/smb-settings.md#allow-smb-with-high-temptarget) is *OFF*.
    - If you want SMBs to continue even when you set a temp target above 100 mg/dL (>5/5 mmol/L), ensure [Allow SMB With High Temptarget](../../configuration/settings/algorithm/smb-settings.md#allow-smb-with-high-temptarget) is *ON*.
    
Having access to fast-acting carbs during this type of exercise is essential. Pack a snack in case you need a source of simple carbohydrates during your routine. Some find they need a slow acting carb before they exercise and others find having carbs on board leads to insulin on board, which leads to lows. Your diabetes may vary, so follow what you need.
 
- - -

### Pre-Meal or Eating Soon

!!! tip "Tips"
    
    - Set a low temp target 1-2 hours before meals to help with spikes
    - Enable "Low Temptarget Lowers Sensitivity" to allow for greater insulin delivery

Some users don't want to pre-bolus, but still would like a small boost of insulin before their meal. You can achieve this by setting a lower temp target than your usual glucose target approximately 1-2 hours before you plan to eat. How much you lower the target glucose will correlate to how much additional insulin will be calculated.

In preparation for meals, you can use the following temp target features to boost insulin delivery and reduce post-meal spikes:

    - For a small boost in insulin delivery, set a temp target approximately 20-40 mg/dL (approx 1-2 mmol/L) below your target, 1-2 hours prior to meals.
    - Enable [Low Temptarget Lowers Sensitivity](../../configuration/settings/algorithm/target-behavior.md#low-temp-target-lowers-sensitivity) to give yourself more insulin for the upcoming meal and to bring your blood sugar down faster to the pre-meal range. Note: If you use this option, your temp target must be below 100 mg/dL (5.5 mmol/L) to trigger this feature.

- - -

### Recovery From a Low Blood Sugar

!!! tip "Tips"
    
    - Set a high temp target for 30-60 minutes following a low
    - Disable "Allow SMBs with High Temp Target"
    - Save this as a pre-set Temp Target so you can enable it easily and have the option to enable it remotely
    
When you are recovering from a low blood sugar, you especially do not want Trio to over-correct for the rapid rise in glucose readings. To prevent this, users often set a temp target above 100 mg/dL (>5.5 mmol/L) for a duration of 30-60 minutes following a low blood sugar. This will reduce the correction given for the rapid rise in glucose if you do the following:

    - Set a temp target >100 mg/dL (>5.5 mmol/L) that is also higher than your usual target glucose for between 30-60 minutes
    - Turn *OFF* [Allow SMB With High Temptarget](../../configuration/settings/algorithm/smb-settings.md#allow-smb-with-high-temptarget)
    - Turn *ON* [High Temp Target Raises Sensitivity](../../configuration/settings/algorithm/target-behavior.md#high-temp-target-raises-sensitivity)
