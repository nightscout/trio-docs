# Autosens Settings

!!! summary "Highlights"

    - Autosens Ratio has been renamed to Sensitivity Ratio
    - Bias the calculated ISF/CR/Basal rates towards more or less aggressive values by increasing or decreasing the adjustment factor accordingly
    - Autosens Max/Min limits sensitivity adjustments

## Sensitivity Ratio
The Sensitivity Ratio (previously `Autosens Ratio`) is used to calculate the amount of adjustment needed to your basal rates and ISF. If Dynamic CR is enabled, it will also apply to your carb ratio.    

There are 3 options for you to select from for how your Sensitivity Ratio is calculated:
    
- [Autosens](#autosens): Adjusts your Sensitivity Ratio based on a series of comparisons of the last 8 hours versus the last 24 hours of insulin usage. **This is the default calculation.**
- [Logarithmic Dynamic ISF](./dynamic_settings.md#activate-dynamic-isf): Adjusts your Sensitivity Ratio based on your Total Daily Dose (TDD) from the last 24 hours vs the last 10 days to adjust your Sensitivity Ratio.
- [Sigmoid Dynamic ISF](): Adjusts your Sensitivity Ratio based on how far above or below target your current glucose reading is.

!!! note
    All 3 options are limited by your [Autosens Max](#autosens-max) and [Autosens Min](#autosens-min) settings. These settings prevent over-adjusting.

### Autosens
Auto-sensitivity (Autosens) adjusts insulin delivery based on how sensitive or resistant you are to insulin at the time of the current loop cycle by analyzing past data to keep glucose levels stable.  

!!! tip
    This is the default calculation used in Trio. If you want to disable Autosens and use no other dynamic adjustments, **set both your Autosens Max and Autosens Min to 1**


**How it Works**  
It looks at the last 8-24 hours of data, excluding meal-related changes, and adjusts insulin settings like basal rates and targets when needed to match your sensitivity or resistance to insulin.  

**What it Adjusts**  
Autosens modifies your current Insulin Sensitivity Factor (ISF), current basal rate, and current target glucose.  Autosens does not examine meals or adjust your CR. It only assesses your sensitivity to insulin and adjusts ISF/basal rates/glucose targets accordingly.    

??? question "Autosens finds Bill has been running more sensitive to insulin lately. In the last 24 hours, he has been 2X more sensitive to insulin, whereas, in the last 8 hours, he has been 3X more sensitive to insulin. Which adjustment will Autosens use?"
    
    Autosens takes the more conservative calculated sensitivity. In this example, the more conservative value is obtained from the 8-hour window because by assuming Bill is 3X more as opposed to 2X more sensitive to insulin, the system will give less insulin.  


### Calculated Sensitivity

!!! warning "Important Information"

    This adjusted ISF is temporary, will change with the next loop cycle, and should not be directly used as our profile ISF value.

Enabling and/or disabling Logarithmic Dynamic ISF and Sigmoid Dynamic ISF determines how your Sensitivity Ratio is calculated. Once calculated, Trio uses the following formula to determine your temporary, adjusted ISF:  

$$
\frac{ProfileISF}{Sensitivity\ Ratio} = Calculated\ Sensitivity
$$

??? question "Bill has a Profile ISF of 54 mg/dL/U (3 mmol/L/U). Trio detects Bill has been more resistant to insulin lately and needs to increase his insulin. It calculates Bill has a [Sensitivity Ratio](#sensitivity-ratio) of 1.1 using Autosens. What Calculated Sensitivity, aka temporary ISF, will Trio use for this loop cycle?"
    
    ??? info "Here is the formula used for Calculated Sensitivity:"
    
        $$
        \frac{ProfileISF}{Sensitivity\ Ratio}
        $$
    
    ??? note "Calculate the temporary ISF, Calculated Sensitivity, used in this loop cycle:"
        
        $$
        \frac{54\ mg/dL/U}{1.1} =
        $$
        
        $$
        49\ mg/dL/U
        $$
        
    ??? success "Answer"
        Bill now temporarily has an ISF of **_49 mg/dL/U (2.73 mmol/L/U)_**. (Note that a larger Sensitivity Ratio results in a lower, more aggressive ISF.)

- - -

## Autosens Max
**Default:** *120%*  
**Setting Limits:** _50%-200%_

Autosens Max sets the maximum Sensitivity Ratio used by Autosens, Logarithmic Dynamic ISF, and Sigmoid Dynamic ISF.  

!!! tip

    Increasing this value allows automatic adjustments of basal rates to be higher, ISF to be lower, and CR (if enabled) to be lower.

- - -

## Autosens Min
**Default:** *80%*  
**Setting Limits:** _50%-100%_

Autosens Min sets the minimum Sensitivity Ratio used by Autosens, Logarithmic Dynamic ISF, and Sigmoid Dynamic ISF.  

!!! tip

    Decreasing this value allows automatic adjustments of basal rates to be lower, ISF to be higher, and CR (if enabled) to be higher.

- - -

## Rewind Resets Autosens
**Default:** *OFF*  
**_This setting applies to Medtronic Users only_**

This feature resets the Sensitivity Ratio to neutral when you rewind your pump on the assumption that this corresponds to a site change.

Autosens will begin learning sensitivity anew from the time of the rewind, which may take up to 6 hours.

!!! tip

    If you usually rewind your pump independently of site changes, you may want to keep this setting **OFF**.

