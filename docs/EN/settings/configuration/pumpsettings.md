# Pump Settings
:::{admonition} Highlights
:class: important
- Max Basal = 4x max daily basal
- Max Bolus = Max bolus you give for a meal
- Max Carbs = Maximum carbs allowed by a single entry
- DIA = Duration of Insulin Action (typically 7 hours)
:::
## Delivery Limits
These are safety limiters for iAPS. Note that iAPS will prevent you from entering anything higher than these limits, but it won't alert or notify you about it. 

### Max Basal
This is the highest temp basal allowed to be set. 4 times your highest scheduled basal rate is generally adequate. 

If iAPS predicts you need a temp basal set higher than this value, it will instead set the basal to this maximum value. If you try to manually set a temp basal higher than this value, nothing will happen and your current basal rate will not change. 

### Max Bolus
Choose the maximum amount of insulin you generally bolus for meals. This can also help if you regularly have leaking or tunnelling issues for large boluses. 

If you enter a bolus higher than this value, it will only deliver this maximum value. So if your max bolus is set to 5U but you enter a 6U bolus, only 5U will be delivered. 

### Max Carbs
This is the maximum amount of carbs allowed in a single entry by iAPS. If you enter more than this amount, your entry will be reduced to the maximum value. So if your max carbs is set to 125g and you enter 150g, only 125g will be recorded. You could then enter a second entry for 25g to make up the difference.

Note that for now, this setting does not limit the maximum carbs allowed to be added via Nightscout or the watch app.

## Duration of Insulin Action
Duration of insulin action (DIA) affects iAPS calculations through its impact on insulin on board (IOB). The default DIA of 5 hours is likely too low and can cause insulin stacking. Increasing to 7 hours should suit most users. For more information on DIA in loop systems, please follow the following link: [link](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)
