# Meal Settings

## Limits

### Max Carbs
**Default:** _250 g_  
**Setting Limits:** _0-300 g_  

The maximum value of carbs in grams allowed per meal entry in the bolus calculator.  

### Max Protein
**Default:** _250 g_  
**Setting Limits:** _0-300 g_  

The maximum value of protein in grams allowed per meal entry in the bolus calculator.  

!!! tip
    This will only be visible if [Enable Fat and Protein Entries](#enable-fat-and-protein-entries) is turned on.

### Max Fat
**Default:** _250 g_  
**Setting Limits:** _0-300 g_  

The maximum value of fat in grams allowed per meal entry in the bolus calculator.  

!!! tip
    This will only be visible if [Enable Fat and Protein Entries](#enable-fat-and-protein-entries) is turned on.

- - -

## Max Meal Absorption Time
**Default:** _6 hours_  
**Setting Limits:** _4-10 hours_  

Carb entries will be fully decayed by the number of hours specified as Max Meal Absorption Time. Meals that are high in fat and/or protein can have long lasting effects on BG levels. To allow such late meal effects to be considered by the carb decay model, a longer Max Meal Absorption Time than the default 6 hours can be set.  

If carb entries decay too slowly, it is possible to set a lower than default setting. But this should typically be adressed by tuning ISF and CR settings instead, which in combination determines the rate of carb decay.  

!!! tip "Gastroparesis"
    If you have gastroparesis, increasing this setting may help keep carbs around for delayed digestion. Please also adjust [Recommended Bolus Percentage](bolus_calculator.md/#recommended-bolus-percentage) to a lower percent to avoid lows due to delayed digestion.

- - -

## Enable Fat and Protein Entries
**Default:** _OFF_  

Enabling this setting allows you to log fat and protein, which are then converted into future carb equivalents (FPUs) using the Warsaw Method.

### Warsaw Method

The Warsaw Method helps account for the delayed glucose spikes caused by fat and protein in meals. It uses Fat-Protein Units (FPU) to calculate the carb effect from fat and protein. The system spreads insulin delivery over several hours to mimic natural insulin release, helping to manage post-meal glucose spikes.

For more information, click to see the [Omnicalculator](https://www.omnicalculator.com/health/warsaw-method#what-is-warsaw-method-and-how-does-it-work).


<center><big>**Fat Conversion**</big></center>

$$
F = fat(g) \times 90\%
$$

<center><big>**Protein conversion**</big></center>

$$
P = protein(g) \times 40\%
$$

<center><big>**FPU Conversion**</big></center>

$$
F + P = FPU(g)
$$

<center>or</center>

$$
(fat(g) \times 90\%) + (protein(g) \times 40\%) = FPU(g)
$$

You can personalize the conversion calculation by adjusting the following settings that will appear when this option is enabled:

- [Fat and Protein Delay](#fat-and-protein-delay)
- [Maximum duration](#maximum-duration)
- [Spread Interval](#spread-interval)
- [Fat and protein percentage](#fat-and-protein-percentage)

- - -

## Fat and Protein Delay
**Default:** _60 min_  
**Setting Limits:** _60-120 min_  

This setting defines the time between when you log fat & protein and when the system start delivering insulin for the Fat-Protein Unit Carb Equivalents (FPUs).

This delay accounts for the slower absorption of fat and protein, as calculated by the Warsaw Method, ensuring insulin delivery is properly times to manage glucose spikes caused by high-fat, high-protein meals.  

***Increasing*** this setting may result in ***fewer*** FPU entries with ***larger*** carb values that begin later.

***Decreasing*** this setting may result in ***more*** FPU entries with ***smaller*** carb values that begin earlier. (Note: You cannot decrease below 60 minutes.)  

- - -

## Maximum Duration
**Default:** _8 hours_  
**Setting Limits:** _5-12 hours_  

This sets the maximum length of time that Fat and Protein Carb Equivalents (FPUs) will be extended over from a single Fat and/or Protein bolus calcultor entry.

It is one factor used in combination with the Fat and Protein Delay, Spread Interval, and Fat and Protein Factor to create the FPU entries.

***Increasing*** this setting may result in ***more*** FPU entries with ***smaller*** carb values.

***Decreasing*** this setting may result in ***fewer*** FPU entries with ***larger*** carb values.

- - -

## Spread Interval
**Default:** _30 min_  
**Setting Limits:** _10-60 min_  

This determines how many minutes will be between individual Fat-Protein Unit Carb Equivalent (FPU) entries from a single Fat and/or Protein bolus calculator entry.

The shorter the interval, the smoother the correlating dosing result.

***Increasing*** this setting may result in ***fewer*** FPU entries with ***larger*** carb values.

***Decreasing*** this setting may result in ***more*** FPU entries with ***smaller*** carb values.

- - -

## Fat and Protein Percentage
**Default:** _50%_  
**Setting Limits:** _10-120%_  

This setting changes how much effect the fat and protein entry has on the FPU calulations.  

At the default setting of 50%, this reduces the converted amount by half.  

Use the grid below to see how adjusting this percentage changes the fat and protein conversion rates:

<div class="grid" markdown>

=== "10%"
    <center><big>**Minimum Adjustment**</big>  
    This is the smallest allowed FPU conversion in Trio</center>
    
    $$
    (F \times 10\%) + (P \times 10\%) =
    $$
    
    $$
    (fat(g) \times 90\% \times 10\%) + (protein(g) \times 40\% \times 10\%) =
    $$
    
    <center>***10% Adjusted FPU Calculation:***</center>
    
    $$
    (fat(g) \times 9\%) + (protein(g) \times 4\%) = FPU(g)
    $$

=== "30%"
    <center><big>**Reduced Adjustment**</big></center>
    
    $$
    (F \times 30\%) + (P \times 30\%) =
    $$
    
    $$
    (fat(g) \times 90\% \times 30\%) + (protein(g) \times 40\% \times 30\%) =
    $$
    
    <center>***30% Adjusted FPU Calculation:***</center>
    
    $$
    (fat(g) \times 27\%) + (protein(g) \times 12\%) = FPU(g)
    $$

=== "50%"
    <center><big>**Default**</big></center>
    
    $$
    (F \times 50\%) + (P \times 50\%) =
    $$
    
    $$
    (fat(g) \times 90\% \times 50\%) + (protein(g) \times 40\% \times 50\%) =
    $$
    
    <center>***50% Adjusted FPU Calculation:***</center>
    
    $$
    (fat(g) \times 45\%) + (protein(g) \times 20\%) = FPU(g)
    $$

=== "80%"
    <center><big>**Increased Adjustment**</big></center>
    
    $$
    (F \times 80\%) + (P \times 80\%) =
    $$
    
    $$
    (fat(g) \times 90\% \times 80\%) + (protein(g) \times 40\% \times 80\%) =
    $$
    
    <center>***80% Adjusted FPU Calculation:***</center>
    
    $$
    (fat(g) \times 72\%) + (protein(g) \times 32\%) = FPU(g)
    $$

=== "100%"
    <center><big>**Full Warsaw Dosage**</big>  
    Use _100%_ Fat and Protein Percentage to use the full Warsaw formula conversion</center>
    
    $$
    (F \times 100\%) + (P \times 100\%) =
    $$
    
    $$
    (fat(g) \times 90\% \times 100\%) + (protein(g) \times 40\% \times 100\%) =
    $$
    
    <center>***100% Adjusted FPU Calculation:***</center>
    
    $$
    (fat(g) \times 90\%) + (protein(g) \times 40\%) = FPU(g)
    $$
    
=== "120%"
    <center><big>**Maximum Adjustment**  
    This is the highest allowed FPU conversion in Trio</big></center>
    
    $$
    (F \times 120\%) + (P \times 120\%) =
    $$
    
    $$
    (fat(g) \times 90\% \times 120\%) + (protein(g) \times 40\% \times 120\%) =
    $$
    
    <center>***120% Adjusted FPU Calculation:***</center>
    
    $$
    (fat(g) \times 108\%) + (protein(g) \times 48\%) = FPU(g)
    $$
    
</div>

!!! tip
    You may find your normal carb ratio needs to increase to a larger number (weaker) when you begin adding fat and protein entries. For this reason, it is best to start with a factor of 50% and adjust as you find the right balance between carb ratio and FPU conversion.

- - -

## How Fat and Protein Entry Settings Work Together <!-- Update Header? -->
***Coming Soon!***
<!-- TODO: Add explanation with formulas and Bill Questions -->

- - -
