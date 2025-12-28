# Bolus Calculator

<!-- TODO: Add a screenshot of the bolus calculator screen -->

## Display Meal Presets
**Default:** _ON_  

Enabling this feature allows you to create and save preset meals.

- - -

## Recommended Bolus Percentage
**Default:** _80%_  
**Setting Limits:** _50%-150%_  

Recommended Bolus Percentage is a safety feature built into Trio. Trio first calculates the insulin required for your meal. That dosage is then multiplied by your Recommended Bolus Percentage. The adjusted dosage is shown in the bolus calculator as your `Suggested Insulin Dose`.

<!-- TODO: Add formula for suggested insulin dose. -->

Because Trio utilizes SMBs and UAMs to help you reach your target glucose and other AID systems do not bolus for COB the same way, this is initially set below the full calculated amount at 80%. 

!!! tip
    - When SMBs and UAMs are enabled, you may find your current CR results in lows and needs to be increased before you increase this setting
    - **_New Trio Users_:** It is not advised to set this to 100% until you have verified that your core settings (basal rates, ISF, and CR) do not need adjusting

- - -

## Reduced Bolus and Super Bolus Options

<!-- TODO: Add a screenshot of the Reduced Bolus and Super Bolus Option in the bolus calculator -->

!!! warning
    Do not enable these features until you have verified and optimized your carb ratio (CR) setting

### Enable Reduced Bolus Option
**Default:** _OFF_  

Enabling this setting adds a "Reduced Bolus" option to the bolus calculator. Once this feature is enabled, a [Reduced Bolus Percentage](#reduced-bolus-percentage) setting will appear for you to select. The default for this setting is 70% of the full calculated bolus.

### Reduced Bolus Percentage
**Default:** _70%_  
**Setting Limits:** _5%-100%_  

When entering a meal into the bolus calculator, select the Reduced Bolus option to utilize this lower percentage rather than your [Recommended Bolus Percentage](#recommended-bolus-percentage) set in the setting above. This calculation is used in conjunction with your Recommended Bolus Percentage using the formula below:

$$
{Recommended\ Bolus\ Percentage \times Reduced\ Bolus\ Percentage}
$$

This setting is useful for meals that require less insulin up front and more later, like pizza.

??? question "Bill has a Recommended Bolus Percentage of 80% and sets his Reduced Bolus Percentage to 50%. What percentage will his insulin dose be adjusted by when he uses the Reduced Bolus Option in the bolus calculator?"

    ??? info "Here is the formula:"
    
        $$
        {Recommended\ Bolus\ Percentage \times Reduced\ Bolus\ Percentage}
        $$
    
    ??? note "Enter Bill's numbers to calculate the actual percentage used:"
    
        $$
        {80\% \times 50\%} =
        $$
        
        $$
        \frac{80}{100} \times \frac{50}{100} =
        $$
        
        $$
        40\%
        $$
        
    ??? success "Answer"
        Bill will receive a suggested bolus that is **40%** of the full bolus calculation.

- - -

### Enable Super Bolus Option
**Default:** _OFF_  

Enabling this setting adds a "Super Bolus" Option to the bolus calculator. Once this feature is enabled, a [Super Bolus Percentage](#super-bolus-percentage) setting will appear for you to set.

This option adds this set percentage of your current basal rate to your suggested bolus amount in the bolus calculator. If you want to receive all of your current basal rate in addition to your suggested meal bolus, use 100% for your Super Bolus Percentage.

### Super Bolus Percentage
**Default:** _100%_  
**Setting Limits:** _5%-200%_  

When entering a meal into the bolus calculator, select the Super Bolus option to utilize this higher bolus amount rather than your [Recommended Bolus Percentage](#recommended-bolus-percentage) set in the setting above. This calculation is used in conjunction with your Recommended Bolus Percentage and current basal rate using the formula below:

<!-- TODO: Add formula for Super Bolus Calculation "bolus req x rec bolus % + current basal x (super bolus %/100)" -->

This setting is useful for meals that require more insulin up front, for example, Cinnamon Toast Crunch or candy.

<!-- TODO: Add Bill example using 0.8 current basal rate and 200% super bolus percentage -->

- - -

## Very Low Glucose Warning
**Default:** _Off_

This setting triggers a confirmation dialog if you attempt to bolus when glucose is <54 mg/dL (3 mmol/L). It is also triggered when the lowest forecasted glucose (minPredBG) is <54 mg/dL (3 mmol/L).

!!! note
    The forecast used for this warning does not include carbs or insulin that are entered for the current bolus calculation.
    
- - -
