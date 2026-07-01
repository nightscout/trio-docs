# Basal Rates

!!! tip "Highlights"

    - Basal rates define your background insulin delivery throughout the day
    - Different basal rates can be set for different times of day (up to 48 entries with 30-minute intervals)
    - Trio uses your basal profile as a baseline but adjusts it every loop cycle based on your current glucose
    - Accurate basal rates are crucial for correct insulin on board (IOB) calculations

## What Are Basal Rates?

Basal rates are the foundational insulin delivery settings in Trio. They represent the amount of rapid-acting insulin delivered continuously throughout the day to manage your glucose levels when you're not eating. Think of basal insulin as the background insulin your body needs to maintain steady glucose levels during fasting periods.

Basal rates are measured in **units per hour (U/hr)**. For example, a basal rate of 0.8 U/hr means you receive 0.8 units of insulin spread out over the course of that hour.

## Why Basal Rates Matter

!!! tip "Basal is Key"
    Basal rates are the foundation of the Trio algorithm. Before testing any other core settings, ensure your basal rates are set appropriately.

Your basal rates serve several critical functions in Trio:

1. **Baseline for Algorithm Adjustments**: Trio uses your scheduled basal profile as a starting point, then adjusts it every loop cycle based on your current glucose, trend, and other factors. Your basal rate should cover what your body needs during times of fasting and low activity.

2. **Insulin on Board (IOB) Calculations**: Your scheduled basal rate is treated as the "zero point" for IOB. When Trio delivers a temporary basal rate higher than your scheduled rate, your IOB increases. When it delivers a lower temporary basal rate, your IOB decreases (and can even become negative).

3. **Foundation for Autosens and Dynamic ISF**: Autosens and Dynamic ISF modify your basal rates (along with ISF and targets) based on your sensitivity ratio.

4. **Total Daily Dose (TDD) Calculations**: Your basal insulin contributes to your TDD, which Trio uses for Dynamic ISF and other algorithm features.

5. **Basal Rates as a Safety Net**: If your pump has recieved no communication from Trio because your phone is out of range or otherwise unavailable, it will revert back to your programmed basal rates after the last temp basal expires. Your profile basal rates are stored on your pump. This ensures insulin delivery is present even when your phone is out of contact.

## How Trio Uses Basal Rates

!!! important "Basals are the Foundation"
    Trio uses your basal profile as the baseline of your insulin needs. When SMBs are enabled, you may see a wide variation in the temp basal rates set. _This is normal._ This is how Trio operates. It is including your baseline basal rates in the full insulin required calculation and giving that basal through SMBs and/or temp basal rates.

Every 5 minutes, Trio's algorithm:

1. Reads your current scheduled basal rate
2. Applies Autosens adjustments
3. Calculates the optimal temporary basal rate based on:
    - Current glucose level
    - Glucose trend
    - Insulin on board (IOB)
    - Carbs on board (COB)
    - Target glucose
    - SMB Settings
4. Sets a temporary basal rate (within your safety limits) and/or delivers an SMB

This means your actual insulin delivery will vary throughout the day, even if you're fasting, as Trio responds to your glucose patterns in real time.

## Time-Based Basal Schedules

Because insulin needs vary throughout the day due to circadian rhythms, hormone fluctuations, and activity patterns, Trio supports **time-based basal schedules**:

- You can define different basal rates for different times of day
- Time slots are in 30-minute increments
- Maximum of 48 entries (covering 24 hours)
- The first entry must start at 00:00 (midnight)
- Each rate applies from its start time until the next scheduled rate

**Example Basal Schedule:**

| Time | Basal Rate<br>(U/hr) | Why It Might Vary |
|------|------------|-------------------|
| 00:00 | 0.6 | Lower overnight needs |
| 03:00 | 0.9 | Dawn phenomenon (early morning glucose rise) |
| 09:00 | 0.7 | Daytime baseline |
| 17:00 | 0.8 | Evening increase |

## Basal Rate Ranges

The allowed basal rate range depends on your insulin pump:

| Pump Type | Minimum<br>(U/hr) | Maximum<br>(U/hr) | Increment<br>(U/hr) |
|-----------|---------|---------|-----------|
| Dana | 0.0 | 3.0 | 0.05 |
| Omnipod DASH & Omnipod 5 | 0.0 | 30.0 | 0.05 |
| Omnipod Eros | 0.05 | 30.0 | 0.05 |
| MiniMed x15 & x22 | 0.0 | 35.0 | 0.05 (0-10)<br>0.1 (10-35) |
| MiniMed x23 & x54 | 0.0 | 35.0 | 0.025 (0-1)<br>0.05 (1-10)<br>0.1 (10-35) |

!!! warning "Max Basal Safety Limit"
    In addition to your pump's maximum, Trio has a **Max Basal** safety setting (default: 2.0 U/hr) that prevents the algorithm from setting temporary basal rates above this value. Make sure your Max Basal setting is appropriate for your needs.

## Testing Your Basal Rates

Accurate basal rates are essential for Trio to function optimally. Here are two methods to verify and adjust your basal rates:

### 1. Fasting Tests

The traditional method for testing basal rates:

1. Fast for 4-6 hours (no food at least 2 hours before starting)
2. Avoid exercise during the test
3. Monitor your glucose:
    - **Steady glucose**: Basal rate is accurate
    - **Rising glucose**: Basal rate is too low (increase it)
    - **Falling glucose**: Basal rate is too high (decrease it)

Test different times of day separately, as your basal needs vary throughout the day.

### 2. Monitor Your IOB Patterns

Review your insulin on board (IOB) throughout the day when you're not eating and have no residual COB:

- **Consistently negative IOB** at certain times → Basal rate may be too high for those hours
- **Consistently positive IOB** at certain times → Basal rate may be too low for those hours
- **IOB hovering around zero** → Basal rate is appropriate

!!! important
    This general rule does not apply when food is consumed. Basal testing and IOB evaluation can only be completed during times of fasting.

## Starting Point for New Users

If you're coming from pump therapy, you can start with your pump's basal settings, but be prepared to adjust them:

- Trio may require different basal rates than traditional pump therapy
- Monitor your glucose patterns during fasting periods
- Make gradual adjustments (typically 10-20% changes)
- Wait several days between adjustments to see the full effect

If you don't have existing basal rates, work with your healthcare provider to establish safe starting values based on your total daily insulin requirements.

## Relationship to Other Settings

Your basal rates interact with other Trio settings:

- **Autosens**: Multiplies your basal rates by the sensitivity ratio (default range: 70-120%)
- **Dynamic Settings**: When "Adjust Basal" is enabled, Dynamic ISF adjustments also affect basal needs
- **SMB (Super Micro Bolus)**: SMB calculations reference your current basal rate for SMB limits (e.g., "50% of current basal rate")
- **Total Daily Dose**: Basal insulin is included in your TDD calculation along with bolus insulin

## Summary

Basal rates are your baseline insulin delivery schedule that Trio uses as a foundation for its automated insulin delivery. While Trio adjusts these rates dynamically every loop cycle, having accurate scheduled basal rates ensures:

- Correct IOB calculations
- Effective Autosens adjustments
- Appropriate algorithm behavior
- Safe insulin delivery within your physiological needs
- Accurate safety net is in place when Trio cannot communicate with pump

Take the time to test and refine your basal rates. They're one of the most important settings for successful automated insulin delivery.

