# Carbohydrate Ratios (CR)

!!! tip "Highlights"

    - Carb ratio (CR) tells you how many grams of carbs one unit of insulin covers
    - Unlike basal rates and ISF, CR is used more directly by Trio's algorithm
    - A lower CR number means you need more insulin per gram of carbs (more insulin-resistant)
    - A higher CR number means you need less insulin per gram of carbs (more insulin-sensitive)
    - CR can vary throughout the day and is set as a time-based schedule

## What Is Carb Ratio?

Carbohydrate Ratio (CR), also written as Insulin-to-Carb Ratio (I:C or ICR), is the amount of carbohydrates (in grams) that one unit of rapid-acting insulin can "cover" or neutralize. It's expressed as:

**grams per unit (g/U)**

For example, a CR of 10 g/U means that 1 unit of insulin will cover 10 grams of carbohydrates.

### Example Calculation

??? question "Bill has a CR of 10 g/U. If Bill eats a meal containing 50 grams of carbs, how much insulin does Bill need?"

    ??? info "Here is the formula:"

        $$
        \frac{grams\ of\ carb\ eaten}{Carb\ Ratio}
        $$

    ??? note "Calculate Bill's Insulin Dose:"

        $$
        \frac{50}{10} = 5\ units
        $$

    ??? success "Answer"
        Bill needs 5 units of insulin for his 50g meal.

- - -

## Why Carb Ratio Matters

CR is essential for Trio because it determines:

1. **Meal Bolus Calculations**: How much insulin is needed to cover the carbohydrates you eat
2. **Carbs on Board (COB) Corrections**: How much insulin is needed for unabsorbed carbs still affecting your glucose
3. [**Bolus Calculator Recommendations**](#in-the-bolus-calculator): The carb coverage component of total insulin needed
4. **Automatic Bolusing**: When SMB (Super Micro Bolus) is enabled, CR affects insulin delivery for meals
5. [**Carbs on Board (COB) Calculations**](#cob-carbs-on-board): Combined with your current ISF, your CR is used to calculate how many carbs have been absorbed and no longer need to be accounted for in corrections

!!! important "Direct Usage"
    Unlike basal rates and ISF, which are modified by Autosens or Dynamic ISF, **carb ratio is used directly** by Trio's algorithm.

- - -

## How Trio Uses Carb Ratio

### In the Bolus Calculator

Trio's bolus calculator uses your CR as part of the total insulin dose calculation:

$$
Total\ Insulin = \frac{Current\ BG - Target}{ISF} + \frac{Carbs}{CR} + Trend - IOB
$$

The carb coverage portion specifically uses:

$$
Carb\ Insulin = \frac{Carbs\ Entered + Current\ COB}{Carb\ Ratio}
$$

Where:

- **Carbs Entered**: New carbs you're adding in the treatment screen
- **Current COB**: Carbs on board from previous meals still being absorbed
- **Max COB Limit**: Default 120g; prevents excessive insulin from carb stacking

- - -

## Time-Based CR Schedules

Your carbohydrate sensitivity can vary throughout the day due to hormones, activity levels, and circadian rhythms. Trio supports time-based CR schedules:

- Time slots in 30-minute increments
- Maximum of 48 entries (covering 24 hours)
- First entry must start at 00:00 (midnight)
- Each CR applies from its start time until the next entry

**Example CR Schedule:**

| Time | CR (g/U) | Why It Might Vary |
|------|----------|-------------------|
| 00:00 | 12 | Overnight - more sensitive |
| 06:00 | 8 | Morning - dawn phenomenon, more resistant |
| 12:00 | 10 | Midday baseline |
| 18:00 | 9 | Evening - slightly more resistant |

- - -

## CR Value Ranges

- **Minimum**: 1.0 g/U
- **Maximum**: 50.0 g/U
- **Default**: 30.0 g/U
- **Step**: 0.1 g/U

The available values range from 1.0 to 50.0 in 0.1 increments, giving you fine-grained control over your carb ratios.

- - -

## Testing and Adjusting Your CR

### Starting Point

If you're coming from pump therapy, you can transfer your pump's CR as a starting point. However, verify its accuracy through testing, especially if you experience:

- High glucose peaks after meals
- Lows 3-4 hours after meals
- Sharp drops after carbs when SMB is enabled (may also indicate ISF issues)

### Testing Method: Meal Experiment

The standard way to test your CR is a controlled meal experiment:

1. **Choose testing conditions**:
    - Start with glucose in range (near target)
    - Zero or minimal IOB
    - Zero or minimal COB from previous meals
    - No recent exercise
    - Use a meal with known, accurately counted carbs

2. **Perform the meal bolus**:
    - Calculate insulin: $\frac{Carbs}{Current\ CR}$
    - Deliver the full bolus manually

3. **Monitor for 3-4 hours**:
    - Avoid additional food or corrections during this time
    - Track your glucose pattern

4. **Evaluate the result**:
    - **Return to starting glucose**: CR is accurate
    - **End up high**: CR is too high (too conservative) → DECREASE the CR value
    - **End up low**: CR is too low (too aggressive) → INCREASE the CR value

!!! tip "Understanding CR Adjustments"
    - **Lower CR number** = More insulin per gram of carbs = More aggressive
    - **Higher CR number** = Less insulin per gram of carbs = Less conservative

    Example: Changing from CR 10 to CR 8 means you'll get MORE insulin for the same carbs.

- - -

## Common CR Mistakes

### 1. CR Too Low (Too Aggressive)

**Symptoms**:
- Post-meal glucose drops too quickly
- Hypoglycemia 2-3 hours after meals
- Need to eat snacks to prevent lows after normal-sized meals

**Solution**: Increase your CR value (make it less aggressive)

### 2. CR Too High (Too Conservative)

**Symptoms**:
- Persistent high glucose after meals
- Large glucose spikes that take hours to come down
- Need frequent corrections after eating

**Solution**: Decrease your CR value (make it more aggressive)

### 3. Confusing CR with ISF Issues

**Important**: High post-meal glucose can be caused by incorrect CR, incorrect ISF, or a combination of both:

- **CR problem**: Affects the initial meal bolus and SMBs when COB > 0
- **ISF problem**: Affects corrections and SMB once COB = 0

If you're unsure which setting needs adjustment:
- Test CR with controlled meal experiments (as described above)
- Test ISF with correction boluses when fasting (no COB)

### 4. Not Accounting for Meal Composition

Your actual carb coverage needs can vary based on:

- **Fat content**: High-fat meals may need extended bolusing or reduced upfront insulin
- **Protein content**: Large amounts of protein may require additional coverage
- **Glycemic index**: Fast-absorbing carbs vs. slow-absorbing carbs

These factors affect meal timing and absorption, not necessarily your CR itself.

- - -

## Relationship to Other Settings

### COB (Carbs on Board)

- CR is used to calculate how much insulin is needed for unabsorbed carbs
    - **Formula**: $\frac{(Current\ COB + New\ Carbs)}{Carb\ Ratio}$
    - Max COB setting (default: 120g) prevents excessive insulin from carb stacking

- CR is used to determine your Carb Sensitivity Factor (CSF)
    - **Formula**: $CSF=\frac{Carb\ Ratio}{\mathit{IS}\mathit{F}}$
    - CSF shows how much 1g of carbohydrate will raise your glucose

- Carb Sensitivity Factor, derived from CR, is used to determine how many carbs have been absorbed during that loop cycle
    - **Formula**: $Increase\ in\ glucose \times CSF$
    - Your COB will be reduced by this amount*

*If no change is indicated in your glucose readings, your `Min 5m Carb Impact` setting will be used for COB determination
   
- - -

## Best Practices

1. **Start conservatively**: Begin with a higher (less aggressive) CR and adjust downward if needed
2. **Make small changes**: Adjust by 1-2 g/U at a time
3. **Test one meal at a time**: Don't change multiple CR entries simultaneously
4. **Wait between changes**: Give each adjustment several days and multiple meals to evaluate
5. **Track Carbs during testing**: Track meals, carb counts, boluses, and results
6. **Account for accuracy**: Carb counting accuracy matters when testing CR

- - -

## CR vs. ISF: Key Differences

Understanding the difference between these two settings helps you adjust the right one:

| Aspect | Carb Ratio (CR) | Insulin Sensitivity Factor (ISF) |
|--------|----------------|----------------------------------|
| **What it measures** | Carbs covered per unit | Glucose drop per unit |
| **Used for** | Meal coverage | Corrections |
| **Units** | grams/unit | mg/dL/unit or mmol/L/unit |
| **When to test** | During controlled meals | During fasting/corrections |
| **Symptoms if too aggressive** | Post-meal lows | Correction lows, rollercoasters |
| **Symptoms if too conservative** | Post-meal highs | Persistent highs despite corrections |

- - -

## Summary

Carbohydrate ratio determines how much insulin you need to cover the carbs you eat. Getting your CR right is essential for:

- Accurate meal bolus calculations
- Appropriate COB corrections
- Accurate COB determinations
- Effective SMB delivery for meals
- Overall glucose control after eating

!!! note "Work with Your Healthcare Provider"
    Always consult with your diabetes healthcare team when making significant changes to your CR or when you're unsure about adjustments. They can provide personalized guidance based on your complete medical history.

