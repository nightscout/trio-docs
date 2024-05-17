# Autosens, Dynamic ISF/CR, and Adjust Basal
:::{admonition} Highlights
:class: tip
- Enable Dynamic ISF, Dynamic CR, and/or Adjust Basal for more rapid adjustments in response to physiological changes in insulin sensitivity
- Bias the calculated ISF/CR/Basal rates towards more or less aggressive values by increasing or decreasing the adjustment factor accordingly.
- Adjustments are limited by autosens max/min.
:::
:::{important}
  The examples in this section employ the default logarithmic formula for calculations. For more information on using Sigmoid, jump to [this section](concepts/sigmoid.md).
:::

## Autosens
Auto-sensitivity (Autosens) reviews your last 8 hours and 24 hours of data every loop cycle (5 min) and determines whether you have been reacting more or less sensitively to insulin. It then makes conservative temporary adjustments to your basal rates, blood sugar target, and ISF.

>**Example:**
>
>_Autosens finds Bill has been running more sensitive to insulin lately. In the last 24 hours, he has >been 2X more sensitive to insulin, whereas, in the last 8 hours, he has been 3X more sensitive to insulin._

Autosens then takes the more conservative calculated sensitivity. In this example, the more conservative value is obtained from the 8-hour window because by assuming Bill is 3X more as opposed to 2X more sensitive to insulin, the system will be posed to give less insulin.

If you are using Autotune, Autosens will use your calculated Autotune CR, ISF, and basal rates as its baseline rather than your set values.

Note that Autosens does not examine meals or adjust your CR. It only assesses your sensitivity to insulin and adjusts ISF/basal rates/blood sugar targets accordingly.

## Dynamic ISF
Some thought Autosens was too conservative and slow to make changes. `Dynamic ISF` is a drop-in replacement for Autosens's ISF calculation formula, with the goal of making it more aggressive. If you find that you have high ISF variability throughout the day and Autosens is not providing you with sufficient control, you can turn this feature on.

Dynamic ISF takes into consideration a new variable called the `Adjustment Factor`, which affects its aggressiveness. If Dynamic ISF is too aggressive, you can decrease this number by 0.05-0.1 points to make it more meek. Likewise, increase this number if you still feel dynamic ISF is not aggressive enough.

:::{note}
- Dynamic ISF is temporarily disabled, and the system reverts to Autosens if either `High Temptarget Raises Sensitivity` or `Exercise Mode` is enabled and a high temporary target has been set by the user.
While Dynamic ISF is inherently more aggressive, it also provides the user with greater control via the `Adjustment Factor` compared to Autosens. You can decrease the `Adjustment Factor` to make Dynamic ISF less aggressive than the calculated Autosens values. 
:::

### Advanced information
Autosens determines a ratio (`autosens.ratio`) and alters your ISF in the following manner:

```{math}
Profile\ ISF\ ÷\ autosens.ratio\ =\ New\ ISF
```

>**Example:**
>
>_Bill has an ISF of 3 mmol/L/U (54 mg/dL/U) in his settings. The system finds Bill has been more >resistant to insulin lately and needs to increase his insulin. It calculates Bill has an >`autosens.ratio` of 1.1 (note that a larger `autosens.ratio` results in a lower, more aggressive ISF)_

When Autosens adjusts the ISF, it uses the following calculation:
```{math}
3\ mmol/L/U\ ÷\ 1.1\ &=\ 2.73\ mmol/L/U

54\ mg/dL/U\ ÷\ 1.1\ &=\ 49\ mg/dL/U
```

_Bill now temporarily has an ISF of 2.73 mmol/L/U (49 mg/dL/U)._

Dynamic ISF (using the default logarithmic algorithm in Trio) uses an alternative formula to calculate the autosens.ratio for ISF adjustments. **Note this formula uses mg/dL and not mmol/L:**

```{math}
autosens.ratio\ =\ profile.sens\ *\ AF\ *\ TDD\ *\ log((BG/peak)+1)\ /\ 1800

New ISF\ =\ (profile\ ISF)\ /\ (autosens.ratio)
```

_This formula considers your profile ISF (profile.sens in mg/dL), current blood glucose (BG in mg/dL), total daily dose (TDD over the last 24 hours), insulin peak effect (peak activity normally is 120 min) and a new variable called adjustment factor (AF) that allows for user tuning of Dynamic ISF/CR._

[Click here to view a graph depicting the logarithmic formula in mg/dL](https://www.desmos.com/calculator/zrkugmdnob)

[Click here to view a graph depicting the logarithmic formula in mmol/L](https://www.desmos.com/calculator/aoxzzrhpro)

## Dynamic CR
This experimental feature alters the carb ratio (CR) based on current blood sugar and total daily dose (TDD). Unlike ISF, CR was not originally altered by autosens with respect to your detected sensitivity. Using Dynamic CR will lead to a dramatic change in how ICR is calculated by Trio. Dynamic CR uses a similar formula as Dynamic ISF as described above:

```{math}
autosens.ratio\ =\ profile.sens\ *\ AF\ *\ TDD\ *\ log((BG/peak)+1)\ /\ 1800

New\ CR\ =\ (profile\ CR)\ /\ (autosens.ratio)
```

If your CR changes dramatically daily and Trio is not providing adequate bolus recommendations, you can test this feature. Note that Trio already makes modifications to your recommended boluses without this feature enabled based on your blood glucose target, COB, and IOB.

:::{note}
If the calculated autosens.ratio by Dynamic CR is greater than 1, the following formula is used to make the resulting CR less aggressive: 
    
```{math}
new.autosens.ratio\ =\ (autosens.ratio\ -\ 1)\ /\ 2 + 1
```
:::
    

## Adjust Basal
Adjust basal replaces Autosens's formula for adjusting basal rates, with one dependent on total daily dose (TDD) of insulin. Turn on this setting to give basal adjustments more agility. Keep this setting off if your basal needs are not highly variable.

### Advanced Information
Normally, a new basal rate is set by autosens:

- New basal profile = current basal profile * autosens.ratio

Adjust basal replaces the autosens.ratio with its own autosens.ratio calculated as such:

- autosens.ratio = (weighted average of TDD)/(2 week average of TDD)
- New basal profile = current basal profile * autosens.ratio

See `Weighted Average of TDD` setting to understand how this variable is calculated.

**Example:**

_Bill's TDD has been 55 U over the last 24 hours, and his 14-day average is 48 U. He has set his `Weighted average of TDD` in preferences to 0.7. His current profile basal rate is 1 U/h._

```{math}
Weighted\ average\ of\ TDD\ =\ 0.7 * 55 U + 0.3 * 48 U = 52.9 U

basal.autosens.ratio\ =\ 52.9 U\ / 48 U\ =\ 1.1U

New\ basal\ profile\ =\ 1 U/h * 1.1\ =\ 1.1 U/h
```

:::{admonition} Final Thoughts
:class: tip
Remember that all Autosens ratios calculated in this section are being limited by Autosens Max and Autosens Min safety limiters. Additionally, Dynamic CR has a built-in safety limiter against highly aggressive ratios.
:::
