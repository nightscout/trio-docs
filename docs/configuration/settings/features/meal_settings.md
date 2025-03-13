# Meal Settings

## Limits

Limits will set limits for each type of macro per meal entry.

- **Max Carbs** will limit howmuch carbs can be entered into Trio. Everything you add above the maximum will be reduced to the this setting.
_For example, if Max COB is 120 g and you enter a meal containing 150 g of carbs, your COB will remain at 120 g until the remaining 30 g have been absorbed._

- **Max Protein** will limit howm uch protein can be added to the meal, adding protein to the bolus calculator will add absorption time of the meal.

- **Max Fat** will limit how much fat can be added to the meal, adding fat to the bolus calculator will add absorption time of the meal.

### Max Carbs
**Default:** _250 g_  
**Setting Limits:** _0-300 g_  

<!-- TODO: Add description -->

### Max Protein
**Default:** _250 g_  
**Setting Limits:** _0-300 g_  

<!-- TODO: Add description -->

### Max Fat
**Default:** _250 g_  
**Setting Limits:** _0-300 g_  

**Enable Fat and Protein Entries**

Enabling this setting allows you to log fat and protein, which are then converted into future carb equivalents using the Warsaw Method.

**Warschau Method:**

The Warsaw Method helps account for the delayed glucose spikes caused by fat and protein in meals. It uses Fat-Protein Units (FPU) to calculate the carb effect from fat and protein. The system spreads insulin delivery over several hours to mimic natural insulin release, helping to manage post-meal glucose spikes.

**Fat conversion**


\(
    F = fat(g) x 90%
\)

**Protein conversion**


\(
    P = protein(g) x 40%
\)

**FPU Conversion**

\(
    F + P = g CHO
\)

You can personalize the conversion calculation by adjusting the following settings that will appear when this option is enabled:

- Maximum duration
- Spread Interval
- Fat and protein percentage

- - -

## Max Meal Absorption Time
**Default:** _6 hours_  
**Setting Limits:** _4-10 hours_  

**Maximum meal absoprtion time**

Carb entries will be fully decayed by the number of hours specified as Max Meal Absorption Time. Meals that are high in fat and/or protein can have long lasting effects on BG levels. To allow such late meal effects to be considered by the carb decay model, a longer Max Meal Absorption Time than the default 6 hours can be set.

If carb entries decay too slowly, it is possible to set a lower than default setting. But this should typically be adressed by tuning ISF and CR settings instead, which in combination determines the rate of carb decay.

Min 4 hours, max 10 hours.

- - -

## Enable Fat and Protein Entries
**Default:** _OFF_  

Enabling this setting adds a "Fatty Meal" option to the bolus calculator. Once this feature is enabled, a percentage setting will appear for you to select.


- - -

## Fat and Protein Delay
**Default:** _60 min_  
**Setting Limits:** _60-120 min_  

Enabling this setting adds a "Fatty Meal" option to the bolus calculator. Once this feature is enabled, a percentage setting will appear for you to select.

This delay accounts for the slower absorption of fat and protein, as calculated by the Warsaw Method, ensuring insulin delivery is properly timed to manage glucose spikes caused by high-fat, high-protein meals.


- - -

## Maximum Duration
**Default:** _8 hours_  
**Setting Limits:** _5-12 hours_  

This sets the maximum length of time that Fat and Protein Carb Equivalents (FPUs) will be extended over from a single Fat and/or Protein bolus calcultor entry.

It is one factor used in combination with the Fat and Protein Delay, Spread Interval, and Fat and Protein Factor to create the FPU entries.

Increasing this setting may result in more FPU entries with smaller carb values.

Decreasing this setting may result in fewer FPU entries with larger carb values.

- - -

## Spread Interval
**Default:** _30 min_  
**Setting Limits:** _10-60 min_  

This determines how many minutes will be between individual Fat-Protein Unit Carb Equivalent (FPU) entries from a single Fat and/or Protein bolus calculator entry.

The shorter the interval, the smoother the correlating dosing result.

Increasing this setting may result in fewer FPU entries with larger carb values.

- - -

## Fat and Protein Percentage
**Default:** _50%_  
**Setting Limits:** _10-120%_  

<!-- TODO: Add description -->

- - -

## How Fat and Protein Entry Settings Work Together <!-- Update Header? -->

<!-- TODO: Add explanation with formulas and Bill Questions -->

- - -

<!-- TODO: delete below after it has been repurposed to other sections
## Fat and Protein Conversion
!!! tip "Highlights"
    - Turn on to bolus for fat and protein
    - Adjust your CR if you have lows
    - Decrease your Interval in Minutes to make insulin delivery smoother
    - Increase your "Override With A Factor Of" by 0.1 increments if you continue to have fat and protein spikes

## Convert Fat and Protein
Many individuals may experience slow blood sugar rise after fatty or high-protein meals. Enabling "Convert Fat and Protein" allows you to provide a bolus for fat and protein units (FPU). The bolus is delivered in segments over a selected period to avoid the gradual rise in blood sugar. This is similar to setting absorption time or eCarbs if coming from Loop or AndroidAPS, respectively. [For more information, click to see the Omnicalculator.](https://www.omnicalculator.com/health/warsaw-method#what-is-warsaw-method-and-how-does-it-work)

Your current CR was likely compensating for some of the effects of protein and fat on blood sugar. If you choose to enable this setting, you will need to make your ICR less aggressive to prevent lows.

## Conversion Settings

### Delay In Minutes
This controls how long before the system starts to bolus for the fat and protein spike. The default setting is 60 minutes.

### Maximum Duration in Hours
Limits how long the system can bolus for FPU. A default of 8 is recommended.

### Interval in Minutes
The interval between each microbolus provided for fat and protein. 

### Override With A Factor Of
Controls the fraction of insulin required for the fat and protein entered. A default of 0.5 allows only half the insulin the system thinks you require, to be delivered. You can experiment with raising this number to one if you continue to see rises in your blood sugar. 
-->
