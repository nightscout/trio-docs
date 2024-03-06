# Fat and Protein Conversion
:::{admonition} Highlights
:class: important
- Turn on to bolus for fat and protein
- Adjust your ICR if you have lows
- Decrease your Interval in Minutes to make insulin delivery smoother
- Increase your "Override With A Factor Of" by 0.1 increments if you continue to have fat and protein spikes
:::
## Convert Fat and Protein
Many individuals may experience slow rises in their blood sugar after fatty or high protein meals. [Enabling "Convert Fat and Protein" allows you to provide a bolus for fat and protein units (FPU).](../../operate/interface.md#actions) The bolus is delivered in segments over a selected period of time to avoid the gradual rise in blood sugar. This is similar to setting absorption time or eCarbs if coming from Loop or AndroidAPS, respectively. [For more information, click to see the Omnicalculator.](https://www.omnicalculator.com/health/warsaw-method#what-is-warsaw-method-and-how-does-it-work)

Your current ICR was likely compensating for some of the effects on protein and fat on blood sugar. If you choose to enable this setting, you will need to make your ICR less aggressive to prevent lows.

## Conversion Settings
### Delay In Minutes
Controls how long before the system starts to bolus for the fat and protein spike. Defaults to 60 minutes.

### Maximum Duration in Hours
Limits how long the system can bolus for FPU. A default of 8 is recommended.

### Interval in Minutes
Interval between each microbolus provided for fat and protein. 

### Override With A Factor Of
Controls the fraction of insulin required for the fat and protein entered. A default of 0.5 allows only half the insulin that the system thinks you require, to be delivered. You can experiment with raising this number to one if you continue to see rises in your blood sugar.
