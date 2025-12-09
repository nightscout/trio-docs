# Insulin Sensitivity Factor (ISF)

!!! tip "Highlights"

    - ISF determines how much one unit of insulin lowers your glucose
    - It's the most common setting that needs adjustment for new Trio users
    - A lower ISF number means you're more resistant to insulin (need more insulin)
    - A higher ISF number means you're more sensitive to insulin (need less insulin)
    - ISF can vary throughout the day and is set as a time-based schedule

## What Is ISF?

Insulin Sensitivity Factor (ISF), also called Insulin Correction Factor (ICF), is the amount your blood glucose drops when you receive one unit of insulin. It's expressed as:

- **mg/dL per unit (mg/dL/U)** 
- **mmol/L per unit (mmol/L/U)**

For example, an ISF of 50 mg/dL/U means that 1 unit of insulin will lower your glucose by 50 mg/dL (2.8 mmol/L).

### Example Calculation

??? question "Bill has an ISF of 50 mg/dL/U. His current glucose is 250 mg/dL and his target is 100 mg/dL. How many units of insulin does Bill need to reach his target?"

    ??? info "Here is the formula:"

        $$
        \frac{Current\ Glucose - Target\ Glucose}{ISF}
        $$

    ??? note "Calculate Bill's Insulin Dose:"

        $$
        \frac{250 - 100}{50} = \frac{150}{50} = 3\ units
        $$

    ??? success "Answer"
        Bill needs 3 units of insulin to reach his target glucose of 100 mg/dL.

- - -

## Why ISF Matters

ISF is one of the most critical settings in Trio because it determines:

1. **SMB and Temp Basal Delivery**: How much insulin is needed to bring high glucose back to target or keep glucose at target
2. **Algorithm Calculations**: Trio uses ISF every loop cycle to calculate optimal insulin delivery
3. **Glucose Predictions**: ISF affects how Trio predicts future glucose levels

!!! warning "Common Issue for New Users"
    Incorrect ISF is the #1 cause of problems when starting Trio. If you experience:

    - Frequent lows after corrections
    - Rollercoaster glucose patterns
    - Too much or too little insulin from SMB/UAM

    Your ISF likely needs adjustment.

- - -

## How Trio Uses ISF

Like basal rates, Trio does **not** use your ISF verbatim. Instead, your scheduled ISF is modified dynamically based on:

### 1. Autosens Adjustments

When Autosens is enabled (which it is by default), Trio analyzes 8-24 hours of glucose data to calculate a Sensitivity Ratio. This ratio adjusts your ISF:

- **Sensitivity Ratio > 1.0**: You're more insulin-resistant → ISF is decreased (more insulin)
- **Sensitivity Ratio < 1.0**: You're more insulin-sensitive → ISF is increased (less insulin)
- **Limits**: Default range is 70-120% (controlled by Autosens Min/Max settings)

**Example**:

??? question "Bill has an ISF of 50 mg/dL/U. Autosens detects resistance and has set his sensitivity ratio to 1.15 (115%). What will Bill's new ISF be?"

    ??? info "Here is the formula:"

        $$
        \frac{Current\ ISF}{Autosens\ Ratio}
        $$

    ??? note "Calculate Bill's new ISF:"

        $$
        \frac{50}{1.15} = 43.5 mg/dL/U
        $$

    ??? success "Answer"
        Bill's ISF is adjusted from 50 mg/dL/U to 43.5 mg/dL/U.
        Bill requires 15% more insulin.

### 2. Dynamic ISF (Optional)

Dynamic ISF is a more aggressive way to adjust your ISF based on current glucose and/or historical insulin dosing:

- **Requires**: 7 days of TDD data with 85% coverage (minimum 1,715 data points)
- **Types**: Logarithmic (default) or Sigmoid
- **Output**: Dynamic Ratio that replaces the Autosens Ratio each loop cycle
- **Temporary**: The adjustment changes every loop cycle; it's not a permanent ISF change

!!! info
    There are 2 algorithms available for Dynamic ISF. Logarithmic Dynamic ISF adjusts your ISF based on current glucose levels and Total Daily Dose (TDD). Sigmoid Dynamic ISF adjusts your profile ISF based on how far from your target glucose you currently are.

**Key Parameters**:

- **Adjustment Factor**: 
    - **Sigmoid**: Adjustment Factor controls how aggressively ISF changes. Learn more about how changes to Sigmoid Adjustment Factor influences ISF adjustments [here](../features/dynamic-isf.md#adjustment-factor_1). The default for Sigmoid Adjustment Factor is 50%.
    - **Logarithmic**: Controls what ISF is used at which glucose. It should be manually set to approximately $0.02 \times TDD$. Learn more about how changing Adjustment Factor influences Logarithmic dynamic ISF [here](../features/dynamic-isf.md#adjustment-factor).
- **Autosens Maximum**: Controls the upper limit of the autosens ratio (default: 120%)
- **Autosens Minimum**: Controls the lower limit of the autosens ratio (default: 70%)
- **Weighted Average of TDD**: Blends recent (24h) and historical (10-day) insulin use (default: 35%)

Dynamic ISF is designed to make your ISF more aggressive (lower) when glucose is high and less aggressive (higher) when glucose is near target.

- - -

## Time-Based ISF Schedules

Your insulin sensitivity varies throughout the day due to hormones, activity, and circadian rhythms. Trio supports time-based ISF schedules:

- Time slots in 30-minute increments
- Maximum of 48 entries (covering 24 hours)
- First entry must start at 00:00 (midnight)
- Each ISF applies from its start time until the next entry

**Example ISF Schedule:**

| Time | ISF (mg/dL/U) | Why It Might Vary |
|------|---------------|-------------------|
| 00:00 | 60 | Overnight baseline |
| 03:00 | 45 | Dawn phenomenon (more resistant) |
| 09:00 | 55 | Morning sensitivity increase |
| 17:00 | 50 | Evening decrease |

- - -

## ISF Value Ranges

- **Minimum**: 9 mg/dL/U (0.5 mmol/L/U)
- **Maximum**: 540 mg/dL/U (30 mmol/L/U)
- **Default**: 200 mg/dL/U (11.1 mmol/L/U)
- **Step**: 1 mg/dL/U (0.1 mmol/L/U)

!!! info "Units"
    Trio stores ISF internally in mg/dL but displays it based on your glucose unit preference. Conversions are automatic.

- - -

## Testing and Adjusting Your ISF

### Starting Point

If you're coming from pump therapy, you can transfer your pump's ISF as a starting point. However, be prepared to adjust it based on Trio's behavior.

### Testing Method

To test if your ISF is accurate:

1. **Choose a testing time**: When you're "stuck" above target (around 150 mg/dL or 8.3 mmol/L) or by bringing yourself to a higher glucose with glucose tabs
2. **Prepare Trio for testing**: Set Max IOB to 0 (*Optional*: Set Autosens Max and Min to 100% to avoid Autosens adjustments)
3. **Give a correction bolus** based on your current ISF
    - To determine your testing dose, follow the formula $\frac{Current\ Glucose - Target\ Glucose}{ISF}$
4. **Wait 4 hours** without eating or exercising
5. **Evaluate the result**:
    - **Still above target after 4 hours**: ISF is too high (too conservative) → DECREASE the ISF value
    - **Below target after 4 hours**: ISF is too low (too aggressive) → INCREASE the ISF value
    - **At target after 4 hours**: ISF is accurate
6. **Return Max IOB to your previous setting** after you've completed the test

!!! tip "Understanding ISF Adjustments"
    - **Lower ISF number** = More insulin per unit of glucose correction = More aggressive
    - **Higher ISF number** = Less insulin per unit of glucose correction = Less conservative

    This can be counterintuitive at first!

- - -

## Relationship to Other Settings

ISF interacts with many Trio settings:

### Autosens Integration

- **Autosens Min/Max**: Limits how much Autosens can adjust your ISF (default: 70-120%)
- **Sensitivity Ratio**: Applied to ISF and basal rates simultaneously

### Dynamic ISF Integration

- **Replaces Autosens**: When Dynamic ISF is enabled, it calculates a Dynamic Ratio instead of using the Autosens Ratio
- **Bounded by Autosens Limits**: Dynamic Ratio is still constrained by Autosens Min/Max settings
- **Affects Basal** (optional): When "Adjust Basal" is enabled, Dynamic Ratio also modifies the baseline basal rate
- **Learn how your Profile ISF is used in Dynamic ISF by reviewing the page on [Using Dynamic ISF](../features/dynamic-isf.md)

### [Temp Target Behavior](../features/temp-targets.md) (when enabled)

- **High Temp Targets** (>100 mg/dL): Increases effective ISF (less aggressive insulin delivery)
- **Low Temp Targets** (<100 mg/dL): Decreases effective ISF (more aggressive insulin delivery)
- **Half Basal Exercise Target**: Default 160 mg/dL; affects ISF scaling during exercise targets
- Temp Target Behavior settings will replace the Autosens or Dynamic Ratio calculations when enabled.

### Sensitivity Target Behavior

- Adjusts target glucose based on the Sensitivity Ratio calculated by the algorithm
- `Sensitivity Raises Target` Increases your target glucose when Sensitivity Ratio is calculated less than 100%.
- `Resistance Lowers Target` decreases your target glucose when Sensitivity Ratio is calculated greater than 100%.

### Bolus Calculator

ISF is used in the bolus calculator formula:

$$
Total\ Insulin = \frac{Current\ BG - Target\ BG}{ISF} + \frac{Carbs}{CR} + Trend\ Correction - IOB
$$

### Carbs on Board (COB) Calculations

ISF is used to determine how quickly carbs are absorbed in your body and how fast Trio reduces the COB amount.

- ISF is used to determine your Carb Sensitivity Factor (CSF)
    - **Formula**: $CSF=\frac{Carb\ Ratio}{\mathit{IS}\mathit{F}}$
    - CSF shows how much 1g of carbohydrate will raise your glucose
- Carb Sensitivity Factor is used to determine how many carbs have been absorbed during that loop cycle
    - **Formula**: $Increase\ in\ glucose \times CSF$
    - Your COB will be reduced by this amount*

*If no change is indicated in your glucose readings, your `Min 5m Carb Impact` setting will be used for COB determination

## Common ISF Mistakes

### 1. ISF Too Low (Too Aggressive)

**Symptoms**:

- Frequent hypoglycemia after corrections
- Rollercoaster patterns (high → over-correction → low → high)
- Excessive SMB delivery resulting in lows

**Solution**: 

- [**Test your ISF**](#testing-and-adjusting-your-isf)
- **Autosens or Sigmoid Dynamic ISF**: Increase your profile ISF value (make it less aggressive)
- **Logarithmic Dynamic ISF**: Re-evaluate your Adjustment Factor and other Dynamic settings using the [desmos graphs](../../configuration/settings/algorithm/dynamic-settings.md/#logarithmic-desmos-graphs)

### 2. ISF Too High (Too Conservative)

**Symptoms**:

- Persistent high glucose despite corrections
- Slow return to target
- Insufficient SMB delivery

**Solution**: 

- [**Test your ISF**](#testing-and-adjusting-your-isf)
- **Autosens or Sigmoid Dynamic ISF**: Decrease your profile ISF value (make it more aggressive)
- **Logarithmic Dynamic ISF**: Re-evaluate your Adjustment Factor and other Dynamic Settings using the [desmos graphs](../../configuration/settings/algorithm/dynamic-settings.md/#logarithmic-desmos-graphs)

### 3. Ignoring Time-of-Day Variations

**Symptoms**:
- Good control at some times of day, poor at others
- Dawn phenomenon not adequately addressed

**Solution**: Set different ISF values for different times of day based on need

## Best Practices

1. **Start conservatively**: Begin with a higher (less aggressive) ISF and adjust downward if needed
2. **Make small changes**: Adjust by 5-10% at a time
3. **Wait between changes**: Give each adjustment 2-3 days to see the full effect
4. **Test systematically**: Test one time period at a time
5. **Consider patterns**: Look for consistent trends over multiple days, not single events
6. **Monitor Autosens Ratio**: Watching how your Autosens Ratio changes or doesn't change can indicate an issue with your Dynamic ISF settings
7. **Work with your healthcare provider**: Especially when making significant changes

## Summary

ISF is a foundational setting that determines how much insulin is needed to correct high glucose. Getting your ISF right is crucial for Trio to function effectively. While Trio adjusts your ISF dynamically through Autosens or Dynamic ISF, having accurate baseline ISF values ensures:

- Safe and effective corrections
- Appropriate SMB delivery
- Smooth glucose control without rollercoasters
- Effective algorithm predictions and decisions

Take the time to test and refine your ISF carefully. It's one of the most important settings for successful automated insulin delivery.

