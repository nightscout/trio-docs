# Basal Profile

<!-- TODO: Update section with instructions and screenshots on how to enter basal profiles into the user's basal schedule -->

!!! tip "Highlights"
    
	 - Basal profile can be imported from a Medtronic pump or Nightscout account
	 - Adjust your basal profile by doing fasting experiments and reviewing your IOB at times of fasting.
     
Basal profile consists of your scheduled basal rates, which determine how much insulin is being delivered at each hour of the day. It is important to understand that these settings are not taken verbatim when looping with Trio. Based on your current blood sugar reading, they are adjusted every loop cycle and replaced with temporary basal rates. Your set values are altered by autosens or dynamic ISF based on your historical data.

Your basal profile values should be near your true value. Basal profiles are also important for insulin on board (IOB) calculations. Trio treats your scheduled basal profile as the zero point. The calculated IOB increases if you receive additional insulin on top of your basal rates, either as boluses or high temporary basal rates. Likewise, if you receive low temporary basal rates for a set period, your IOB decreases, and can even become negative. 

If you are coming from a pump, transferring basal profiles from your pump settings should be done with consideration and caution. They might not be entirely accurate for Trio. If you are going low or high while fasting, consider adjusting according to the instructions below

- - -

## How To Enter Your Basal Rates Into Trio

<!-- TODO: Add description with images -->

- - -

## Testing/Adjusting Your Basal Rate

### Baseline Calculation

If your current basal rates are close, but need some testing and adjustment, skip to the [next section](#basal-testing).

If your current basal rates are inaccurate or you are unsure where to even start, the adjustments in Trio are based on formulas developed by Walsh, et.al. and may help you find a starting point to then test or adjust your basal rates.

!!! warning
    This calculation is to be used as a starting point for testing and is not considered definitive or exact.
    
<!-- TODO: Add description and formulas from Walsh-->
<!-- TODO: Add Bill Example Question to calculate -->

### Basal Testing

<!-- TODO: Update description -->
The standard method is to test your basal by having a relaxing 4-6 hours without eating at least two hours before you begin the test. Does your blood sugar stay steady? Or do you climb and need a correction? Or do you go low and need to eat? Setting accurate basal rates is crucial for Trio success. They determine how much of the insulin delivered (from basal and bolus) is counted as insulin on board (IOB).

### Basal Adjustment

<!-- TODO: Update description -->
You can also monitor your IOB to determine if your basal profile is accurate. Consistently negative or positive IOB at certain times of day may suggest that these hours need to decrease or increase their basal rate, respectively.
