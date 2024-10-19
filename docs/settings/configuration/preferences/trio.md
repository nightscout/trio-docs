# Trio
  
## Glucose Units
Allows you to toggle between mmol/L and mg/dL blood glucose units.

## Remote Control
Allows for remote control of Trio using Nightscout.

!!! warning "Caution"
    
    **Duplicate Delivery Risk**

***Please read before using Remote Features***

We want to highlight a very important risk before you get started.

For safety, always assume a previous remote carb/bolus was delivered, whether it shows in Nightscout or not.

**For Example:**
  1. You send a 5-unit remote bolus.
  2. The bolus is delivered to the Looper.
  3. Nightscout has a temporary technical issue and doesn't show the bolus was received.
  4. You are watching Nightscout and don’t see a delivery, so you assume it failed.
  5. You send another remote 5-unit bolus.
  6. The second 5-unit bolus is delivered to the Looper (10 Units total).

You can see the danger of sending duplicate bolus/carbs, so be careful. If a remote bolus/carb entry doesn’t show in Nightscout/Caregiver, judge whether enough time has passed to try again.

To use, navigate to your connected Nightscout instance. Click the lock icon at the top right and enter your API secret. Next, click the now visible "+" sign at the top right. A "Log a Treatment" menu will open up. 

To enter carbs, select the "carb correction" event type. Fill in the required blanks and click "Submit Form". Trio will read any carb entries in Nightscout and adjust insulin delivery as configured.

To configure loop status, pump, or to bolus:

1. Select the "announcement" event type.
2. For "entered by" enter `remote` (Before Trio-main v0.1.0 it was `freeaps-x-remote` instead)
3. In additional notes, state one of the following options:

* To bolus, enter `bolus:(amount)` (ex: `bolus:0.5`).
* To control pump, enter either `pump:suspend` or `pump:resume`. 
* To control looping, enter either `looping:true` or `looping:false`
* To control temporary basal rate, enter `tempbasal:(rate),(minutes)` (ex: `tempbasal:0,60` to set temporary basal rate at 0 U/hr for 60 minutes)

!!! note
    
    Remote configurations with announcement-type events can only be performed every **10** minutes.

## Recommended Bolus Percentage
Recommended bolus percentage is a safety feature built into Trio. By default, Trio first calculates an "insulin recommended" value when bolusing for carbs, which is the full dosage.  That dosage is multiplied by your `Recommended Bolus Percentage` to display your suggested insulin dose. Trio then delivers the remaining insulin via SMBs as the blood sugar starts to rise.

`Recommended Bolus Percentage` allows you to alter the amount initially delivered. By default (70), 70% of the required meal bolus is delivered before the meal. You can increase or decrease this to alter the insulin delivered prior to the meal.

!!! note
    
    A manual bolus uses the `Eventual BG` for glucose prediction, whereas the `insulinReg` for SMBs uses the `minPredBG` (typically lower than Eventual BG).

## Skip Bolus screen after carbs
After entering carbs, a mealtime bolus will not be suggested or delivered.
