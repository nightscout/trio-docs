# Units and Limits

!!! tip  "Highlights"
    
	- Max IOB = Increase above 0 _before closing the loop_
	- Max Bolus = Max bolus you give for a meal
    - Max Basal = 4x highest hourly basal
	- Max COB = Maximum carbs active at any given time

## Glucose Units
Select either mg/dL or mmol/L. All settings descriptions and screen information will be adjusted to match your selection here.

- - -

## Max IOB
**Default:** _0 units_  

!!! warning "Important Information"
    This must be set to a value greater than 0 for any insulin to be administered above your current set basal rate.  
    If this remains at 0, Trio can suspend your insulin to prevent lows, but can only administer enough insulin to return you to your current basal rate amount.
    
This is the maximum amount of Insulin on Board (IOB) above your profile basal rates from all sources - positive temporary basal rates, manual or meal boluses, and SMBs - that Trio is allowed to accumulate to address an above target glucose.

If a calculated amount exceeds this limit, the suggested and/or delivered amount will be reduced so that active Insulin on Board (IOB) will not exceed this safety limit.

!!! tip
    You can still manually bolus above this limit, but the suggested bolus amount will never exceed this in the bolus calculator



- - -

## Max Bolus
**Default:** _10 units_  
**Setting Limits:** _1-30 units_  

This is the maximum bolus allowed to be delivered at one time. This only limits manual boluses given on the Treatments screen.

If you attempt to request a bolus larger than this, the bolus will not be accepted or proceed. So if your max bolus is set to 5U but you enter a 6U bolus, the "Enact Bolus" button will turn red and display a warning message. You will be unable to proceed until you lower your bolus to within this limit.

![Exceed Max Bolus](img/exceed_max_bolus.png){ width="600px"  }
{align=center}

!!! tip
    Most set this to their largest meal bolus, then adjust if needed.

- - -

## Max Basal
**Default:** _2 units_  
**Setting Limits:** _0.5-30 units_  

This is the maximum basal rate allowed to be set or scheduled. This applies to bothe automatic temp basal rates, profile basal rates, and manual temp basal rates.

!!! tip
    Generally, users enter a value that is 4 times their highest hourly basal rate

!!! info "For Medtronic Users:"
    You must also manually set the max basal rate on the pump to match this value

- - -

## Max COB
**Default:** _120 grams of carb_  
**Setting Limits:** _0-300 g_  

This setting defines the maximum amount of Carbs On Board (COB) allowed at any given time for Trio to use in dosing calculations. If more carbs are entered than allowed by this limit, Trio will cap the current COB in calculations to this Max COB setting and remain at this max until all remaining carbs have shown to be absorbed or 6 hours has passed, whichever comes first.

For example, if Max COB is 120g and you enter a meal containing 150g of carb, your COB will remain at 120g until the remaining 30g have replaced absorbed carbs.

- - -
