# FreeAPS X
:::{admonition} Highlights
:class: important
- Recommended Insulin Fraction: Increase to reduce initial spiking with meals; there is a risk of lows if you miscount carbs or your ICR is too aggressive
:::
## Glucose Units
Allows you to toggle between mmol/L and mg/dL blood glucose units.

## Remote Control
Allows for remote control of FAX using Nightscout.

**Duplicate Delivery Risk**
<br>
:::{admonition} Please read before using remote features
:class: danger
We want to highlight a very important risk before you get started.
<br><br>
For safety, always assume a previous remote carb / bolus was delivered whether it shows in Nightscout iAPS. For motivation think of the following example:
<br><br>
You send a 5 unit remote bolus.
The bolus is delivered to the Looper.
Nightscout is having a temporary technical issue and doesn't show the bolus was received.
You are watching Nightscout and you don’t see a delivery so you assume it failed.
You send another remote 5 unit bolus.
The second 5 unit bolus is delivered to the Looper (10 Units total).
<br><br>
You can see the danger of sending duplicate bolus/carbs so be careful. If a remote bolus/carb entry doesn’t show in Nightscout/Caregiver, use your own judgment on whether enough time has passed to try again.
</span>
:::
To use, navigate to your connect nightscout instance. Click the lock icon on the top right and enter your API-Secret. Next, click the now visible "+" sign on the top right. A "Log a Treatment" menu will open up. 

To enter carbs, select the "carb correction" event type. Fill in the required blanks and click "Submit Form". iAPS will read any carb entries in Nightscout and adjust insulin delivery as configured.

To configure loop status, pump or to bolus:

1. Select the "announcement" event type.
2. For "entered by" enter `remote` (Before iAPS-main v2.3.3 it was `freeaps-x-remote` instead)
3. In additional notes state one of the following options:

* To bolus, enter `bolus:(amount)` (ex: `bolus:0.5`).
* To control pump, enter either `pump:suspend` or `pump:resume`. 
* To control looping, enter either `looping:true` or `looping:false`
* To control temporary basal rate, enter `tempbasal:(rate),(minutes)` (ex: `tempbasal:0,60` to set temporary basal rate at 0 U/hr for 60 minutes)

Note that remote configurations with announcement-type events can only be performed every 10 minutes.

## Recommended Bolus Percentage
Recommended bolus percentage is a safety feature built into iAPS. By default, iAPS first calculates an "insulin recommended" value when bolusing for carbs, which is the full dosage.  That dosage is then multiplied by your "Recommended Bolus Percentage" to display your suggested insulin dose. iAPS then delivers the remaining insulin via SMBs as the blood sugar starts to rise.

Recommended Bolus Percentage allows you to alter the amount initially delivered. At its default (80), it results in 80% of the required meal bolus being delivered before the meal. You can increase or decrease this to alter the insulin delivered prior to the meal.

Note: A manual bolus uses the Eventual BG for glucose prediction, whereas the insulinReg for SMBs uses the minPredBG for glucose prediction (typically lower than Eventual BG).

## Skip Bolus screen after carbs
After entering carbs, a mealtime bolus will not be suggested or delivered.

## Display HR on Watch
Displays your current heart rate on your iWatch iAPS app
