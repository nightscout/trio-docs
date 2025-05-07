# Dynamic Settings

## Activate Dynamic ISF
**Default:** _OFF_

!!! danger "Important"
    It is important to enter your information into the Desmos graphs found [here](#logarithmic-desmos-graphs) **before** turning on Logarithmic Dynamic ISF. The default settings work for a majority of users, but not all.  
    
    Use the sliders in Desmos to determine what your Adjustment Factor (AF) should be so that your ProfileISF is used when your glucose is at **_150 mg/dL_**.  


!!! tip
    You must first turn on `Activate Dynamic ISF` before any other dynamic features will appear

Activating this feature allows Trio to calculate your [Sensitivity Ratio](./autosens.md#sensitivity-ratio) using the logarithmic dynamic formula, rather than the [Autosens formula](./autosens.md#autosens) with each loop cycle by considering factors such as: your current glucose (BG), the weighted total daily dose of insulin (TDD), your adjustment factor setting (AF), and a few other data points. Using Logarithmic Dynamic ISF allows you to customize your Sensitivity Ratio calculation beyond what is allowed with Autosens.  

Below is the formula used for calculating the Sensitivity Ratio using Logarithmic Dynamic ISF:

$$
Sensitivity\ Ratio = ProfileISF \times AF \times TDD \times \log{}\left(\frac{\left(\frac{BG}{peak}\right)+1}{1800}\right)
$$

!!! info
    This formula considers your Profile ISF (ProfileISF in mg/dL), current blood glucose (BG in mg/dL), total daily dose (TDD over the last 24 hours), insulin peak effect (Peak), and Adjustment Factor (AF) that allows for user tuning of Dynamic ISF/CR.

After the Sensitivity Ratio is calculated, your Calculated Sensitivity is then determined by using the same formula as [Autosens](./autosens.md#calculated-sensitivity):

$$
Calculated\ Sensitivity = \frac{ProfileISF}{Sensitivity\ Ratio}
$$


- - -

## Activate Dynamic CR
**Default:** _OFF_

This experimental feature alters the carb ratio (CR) based on current blood sugar and total daily dose (TDD). Unlike ISF, CR was not originally altered by autosens with respect to your detected sensitivity. Using Dynamic CR will lead to a dramatic change in how CR is calculated by Trio. Dynamic CR uses the same [formula](#activate-dynamic-isf) as logarithmic Dynamic ISF to calculate Sensitivity Ratio. It then uses that to adjust your Carb Ratio (CR) using this formula:

$$
NewCR = \frac{ProfileCR}{Sensitivity\ Ratio}
$$

When your Sensitivity Ratio increases, indicating you need more insulin, the carb ratio value is decreased to make your insulin dosing more effective. Conversely, when your Sensitivity Ratio decreases, the carb ratio is increased to avoid over-delivery.

!!! note
    
    If the calculated Sensitivity Ratio used by Dynamic CR is greater than 1, the following formula is used to make the resulting CR less aggressive: 
    
    $$
    Sensitivity\ Ratio = \left(\frac{Sensitivity\ Ratio - 1}{2}\right) + 1
    $$

- - -

## Use Sigmoid Formula
**Default:** _OFF_

Turning on the Sigmoid Formula setting replaces the default logarithmic formula used to determine your Sensitivity Ratio. Your Calculated Sensitivity and Dynamic CR (if enabled) are calculated using a sigmoid curve rather than the default logarithmic function.

The curve's steepness, reflecting how big adjustments are from one reading to another, is influenced by the [Adjustment Factor](#sigmoid-adjustment-factor), while [Autosens Max](./autosens.md#autosens-max) and [Min](./autosens.md#autosens-min) settings determine the limits of the ratio adjustment. Autosens Max and Min can also influence the curve's steepness with the Sigmoid Formula.

When using the Sigmoid Formula, Total Daily Dose (TDD) has much less of an impact on adjustments to sensitivity. Sigmoid is more reliant upon how far from the target your glucose readings are.

!!! warning
    
    It is not recommended to set [Autosens Max](./autosens.md#autosens-max) higher than 150% when using Sigmoid
     
!!! info
    
    As of the publication of this documentation, there has been no empirical data analysis to support the use of Sigmoid for dynamic sensitivity determination.
    
- - -

## Adjustment Factor (Logarithmic)
**Default:** _80%_  
**Setting Limits:** _30%-150%_

Adjustment Factor (AF) allows you to control how quickly and effectively Dynamic ISF responds to changes in glucose levels.

Adjusting this value shifts and steepens the curve of logarithmic Dynamic ISF. Increasing this setting will cause Trio to respond faster to changes in sensitivity, but can also shift the response to new values.

!!! warning
    Please enter your adjustments in the [Desmos graphs](#logarithmic-desmos-graphs) before you change them in the app to verify your adjustments are changing as intended.

!!! warning "Caution"
    
    ***Adjustment Factor (AF) is not a safety limiter***
    
     - Increasing AF means you are telling the system that ALL dynamically calculated ISF/CR values have not been aggressive enough, and you want the system to make them more aggressive.
     - Decreasing AF means you are telling the system that ALL dynamically calculated values are too aggressive, and to make them less so.

- - -

## Sigmoid Adjustment Factor
**Default:** _50%_  
**Setting Limits:** _10%-200%_

The Sigmoid Adjustment Factor (AF) allows you to control the rate in which Trio responds to changes in insulin sensitivity and adjusts at which glucose value you will reach your Autosens Max and Min limits.

Sigmoid Adjustment Factor influences both how much your ISF values change between 2 glucose readings and how quickly you will reach the limits you've set. Increasing this setting increases the rate of change and reduces the range of glucose values between your Autosens Max and Autosens Min limits.

Due to how the curve is calculated, increasing this setting has a different impact than it's Logarithmic counterpart. Please use caution when adjusting this setting.

!!! warning
    Please enter your adjustments in the [Desmos graphs](#sigmoid-desmos-graphs) before you change them in the app to verify your adjustments are changing as intended.

- - -

## Weighted Average of TDD
**Default:** _35%_  
**Setting Limits:** _5%-100%_

This setting adjusts how much weight is given to your recent daily total insulin dose (TDD) when calculating your Sensitivity Ratio using either the Logarithmic or Sigmoid Formulas.

At the default setting, Trio weights your TDD used with 35% of your last 24 hours and 65% of the last 10 days of data.

- Set at **100%** = TDD is composed of 100% the last 24 hours of TDD data + 0% the last 10 days of TDD data
- Set at **35%** (default) = TDD is composed of 35% the last 24 hours of TDD data + 65% the last 10 days of TDD data
- Set at **0%** = TDD is composed of 0% the last 24 hours of TDD data + 100% the last 10 days of TDD data

??? question "Bill has a TDD of 55 U over the last 24 hours. He has had a TDD of 48 U over the last 10 days. His `Weighted Average of TDD` is set at 35%. What TDD is used to calculate his Sensitivity Ratio?"
    
    ??? info "Here's the formula to calculate Weighted Average of TDD:"
    
        $$
        \left(24\ hours\ TDD \times Weighted\ Avg\ of\ TDD\ \% \right) + \left(10\ days\ TDD \times \left( 100 - Weighted\ Avg\ of\ TDD\right)\%\right)
        $$
    
    ??? note "Calculate Bill's Weighted Average of TDD:"
    
        $$
        \left(55 \times 35\%\right) + \left(48 \times \left(100 - 35\right)\%\right) =
        $$
        
        $$
        \left(55 \times 35\%\right) + \left(48 \times 65\%\right) =
        $$
        
        $$
        19.25 + 31.2 = 
        $$
        
        $$
        50.45\ U
        $$
    
    ??? success "Answer"
        Trio will use a TDD of **_50.45 U_** in Bill's Sensitivity Ratio calculation.


As you increase the default to a higher number, the adjusted basal rates will be more influenced by your last 24-hour insulin usage, resulting in more variable changes.

- - -

## Adjust Basal
**Default:** _OFF_

Adjust Basal replaces the sensitivity-based formula normally used by Trio for adjusting your basal rates with a new formula based on your total daily insulin use (TDD). Use this if the current Trio adjustments of basal rates are not adequate.

Turn this setting on to give basal adjustments more agility. Keep this setting off if your basal needs are not highly variable.

**Calculation used if this setting is OFF:**

$$
New\ Basal\ Rate = Current\ Basal\ Rate \times Sensitivity\ Ratio
$$

**Calculation used if this setting is ON:**

$$
Adjust\ Basal\ Ratio = \frac{Weighted\ Average\ of\ TDD}{10\ day\ Average\ of\ TDD}
$$

$$
New\ Basal\ Rate = Current\ Basal\ Rate \times Adjust\ Basal\ Ratio
$$

See [Weighted Average of TDD](#weighted-average-of-tdd) setting to understand how this variable is calculated.

??? question "Bill's TDD has been 55 U over the last 24 hours, and his 10-day average is 48 U. He has set his `Weighted average of TDD` in preferences to 35%. His current profile basal rate is 1.0 U/h. What will his new basal rate be with `Adjust Basal` turned ON?"
    
    ??? info "Here are the formulas you'll need:"
        Weighted Average of TDD:
        
        $$
        \left(24\ hours\ TDD \times Weighted\ Avg\ of\ TDD\ \% \right) + \left(10\ days\ TDD \times \left( 100 - Weighted\ Avg\ of\ TDD\ \right)\%\right)
        $$
        
        Adjust Basal Ratio:
        
        $$
        \frac{Weighted\ Average\ of\ TDD}{10\ day\ Average\ of\ TDD}
        $$
        
        New Basal Rate:
        
        $$
        Current\ Basal\ Rate \times Adjust\ Basal\ Ratio
        $$
        
    ??? note "First, calculate the Weighted Average of TDD:"
    
        $$  
        \left(55 \times 35\%\right) + \left(48 \times \left(100 - 35\right)\%\right) =
        $$
        
        $$
        \left(55 \times 35\%\right) + \left(48 \times 65\%\right) =
        $$
        
        $$
        19.25 + 31.2 =
        $$
        
        $$
        50.45\ U
        $$
    
    ??? note "Next, calculate the Adjust Basal Ratio:"
    
        $$
        \frac{50.45}{48} =
        $$
        
        $$
        1.05
        $$
    
    ??? note "Finally, calculate the New Basal Rate"
    
        $$
        1.0 \times 1.05 =
        $$
        
        $$
        1.05\ U/hr
        $$
    
    ??? success "Answer"
        Adjust Basal will replace Bill's profile basal rate with a new basal rate of **_1.05 U/hr_** for this loop cycle.

- - -

## Logarithmic Desmos Graphs

[Click here to view a graph depicting the logarithmic formula in mg/dL](https://www.desmos.com/calculator/zrkugmdnob)

[Click here to view a graph depicting the logarithmic formula in mmol/L](https://www.desmos.com/calculator/aoxzzrhpro)

- - -

## Sigmoid Desmos Graphs

[Click here to view a graph depicting the sigmoid formula in mg/dL](https://www.desmos.com/calculator/s9jxdmqhh8)

[Click here to view a graph depicting the sigmoid formula in mmol/L](https://www.desmos.com/calculator/nb5l47yx0h)

- - -
