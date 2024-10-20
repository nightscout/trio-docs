# Basal Profile
:::{admonition} Highlights
:class: tip
 - Basal profile can be transferred from a Medtronic pump or Nightscout account
 - Adjust your basal profile by doing fasting experiments, reviewing your IOB at times of fasting, and observing autotune.
:::

Basal profile consists of your scheduled basal rates, which determine how much insulin is being delivered at each hour of the day. It is important to understand that these settings are not taken verbatim when looping with Trio. Based on your current blood sugar reading, they are adjusted every loop cycle and replaced with temporary basal rates. Your set values are altered by autosens or autotune (if enabled) based on your historical data.

Your basal profile values should be near your true value. Protection limiters prevent Trio's autotune system from selecting the appropriate dose if the scheduled basal profile is wildly inaccurate. Basal profiles are also important for insulin on board (IOB) calculations. Trio treats your scheduled basal profile as the zero point when autotune is disabled. When autotune is enabled, it uses the autotuned basal rate instead of your scheduled basal rate. The calculated IOB increases if you receive additional insulin on top of your basal rates, either as boluses or high temporary basal rates. Likewise, if you receive low temporary basal rates for a set period, your IOB decreases, and can even become negative. 

## Settings
If you are coming from a pump, transferring basal profiles from your pump settings should be done with consideration and caution. They might not be entirely accurate for Trio. If you are going low or high while fasting, consider adjusting according to the instructions below.

There are three main ways of identifying and improving your basal profile values. The standard method is to test your basal by having a relaxing 4-6 hours without eating at least two hours before you begin the test. Does your blood sugar stay steady? Or do you climb and need a correction? Or do you go low and need to eat? Setting accurate basal rates is crucial for Trio success. They determine how much of the insulin delivered (from basal and bolus) is counted as insulin on board (IOB).

You can also monitor your IOB to determine if your basal profile is accurate. Consistently negative or positive IOB at certain times of day may suggest that these hours need to decrease or increase their basal rate, respectively.

If you have autotune enabled, you can review the day-to-day trend of how autotune is changing your basal profile. If autotune remains steady, you can change your scheduled values to the autotune values. This has two main benefits: 
1. Autotune can start to alter your values again if it is being stopped by a safety limiter (autosens max/min)
2. You can have your values hard-coded in case Autotune's data is reset.
