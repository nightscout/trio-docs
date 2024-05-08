# Autosens, Dynamic ISF/Dynamic CR, and Adjust Basal
:::{important}
  - The examples in this section employ the default logarithmic formula for calculations. For more information on using Sigmoid, jump to [this section](sigmoid.md).
  - Calculations are done using mg/dL.
      - *To convert mg/dL→mmol/L:* ➗ by 18
      - *To convert mmol/L→mg/dL:* ✖️ by 18
:::

## Autosens
Auto-sensitivity (Autosens) is the default algorithm. It reviews your last 8 hours and 24 hours of data every loop cycle (5 min) and determines whether you have been reacting more or less sensitively to insulin. It then makes temporary adjustments to your basal rates, blood sugar target, and ISF.

### Autosens Ratio

For more specific details on how Autosens is calculated without Trio's dynamic settings enabled, see the [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html)

The Autosens Ratio (autosens.ratio) is used to determine how greatly settings need to be adjusted.
| Autosens Ratio | Insulin Adjustment |
| :---: | :---: |
| < 1.0 | less |
| = 1.0 | same |
| > 1.0 | more |

Autosens does not examine meals or adjust your CR. It only assesses your sensitivity to insulin and adjusts ISF, basal rates, and blood sugar targets accordingly.

:::{important}
If you have Autotune turned ON, Autosens will use your calculated Autotune ISF and basal rates as its baseline rather than your preset values.
:::

### Autosens Adjustments

**ISF:**

![Calc ISF formula](https://github.com/tmhastings/trio-docs/assets/31315442/e3d9f8f8-a1a5-4594-b798-7e0cb333f174)

**Basal:**

![Autosens basal formula_Adjust Basal formula](https://github.com/tmhastings/trio-docs/assets/31315442/77679847-a5ec-4c9a-9fd5-5910c8f997ad)

**Target BG:**

![Adjusted Target BG](https://github.com/tmhastings/trio-docs/assets/31315442/0a1f9769-a0d3-4974-98d9-86a6b66183cc)

## Dynamic ISF/Dynamic CR

Enabling one or both of the dynamic functions replaces the autosens ratio calculation with the following formula for that function:

![autosens ratio formula](https://github.com/tmhastings/trio-docs/assets/31315442/f631a209-881a-484a-80d9-e2ba88f1cb4c)

One major difference between this calculation and the OpenAPS Autosens calculation referenced previously is the introduction of Adjustment Factor (AF) as a variable that can be adjusted in user settings. A higher AF will result in the calculation having a greater influence on the new calculated settings. The default value is `0.5`.

A relevant calculation used is the `Weighted TDD`. This is calculated using the following formula. This can be adjusted with the `Weighted Average of TDD` setting. Increasing this value will increase the impact of the last 24 hours. Decreasing this value will increase the impact of the last 2 weeks.

![Weighted TDD copy](https://github.com/tmhastings/trio-docs/assets/31315442/ebe9852e-b07d-4b24-b064-04f4ba2ddc73)

Below you will find graphs that allow you to manipulate the different variables of the dynamic autosens formula to see how they influence the algorithm:

 - [**mg/dL** Dynamic Adjustments with the Logarithmic Formula](https://www.desmos.com/calculator/zrkugmdnob)
 - [**mmol/L** Dynamic Adjustments with the Logarithmic Formula](https://www.desmos.com/calculator/aoxzzrhpro)

### Dynamic ISF

When Dynamic ISF is enabled, once the autosens.ratio is calculated, it will apply it to the Profile ISF setting to adjust sensitivity with each loop cycle. This new value is used in place of your profile ISF for insulin adjustments with the current loop cycle.

![Calc ISF formula](https://github.com/tmhastings/trio-docs/assets/31315442/e3cc67f0-3268-4c3d-95cd-fb5acdcae74a)

:::{important}
When a **high temporary target** is manually set and either `High Temptarget Raises Sensitivity` _OR_ `Exercise Mode` is enabled, Dynamic ISF will automatically turn **OFF** and the system reverts to Autosens.
:::

### Dynamic CR

This experimental feature alters the carb ratio (CR) based on current blood sugar and total daily dose (TDD). Unlike ISF, CR was not originally altered by autosens with respect to your detected sensitivity. Using Dynamic CR will lead to a dramatic change in how CR is calculated by Trio. Dynamic CR uses a similar formula as Dynamic ISF:

![Calc CR formula](https://github.com/tmhastings/trio-docs/assets/31315442/eaa21873-6bd9-4bf2-b2e2-721e94d153ed)

If you find your CR changes dramatically day to day and Trio is not providing adequate bolus recommendations, you can test this feature. Note that Trio already makes modifications to your recommended boluses without this feature enabled based on your blood glucose target, COB, and IOB.

:::{note}
If the calculated autosens.ratio by Dynamic CR is greater than 1, the following formula is used to make the resulting CR less aggressive: 
![new autosens ratio formula](https://github.com/tmhastings/trio-docs/assets/31315442/55afc6af-a59c-45fd-a757-f6eb9378de33)
:::

## Adjust Basal

Adjust basal replaces Autosens's formula for adjusting basal rates, with one dependent on total daily dose (TDD) of insulin. Turn on this setting to give basal adjustments more agility. Keep this setting off if your basal needs are not highly variable.

![Adjust Basal autosens ratio formula](https://github.com/tmhastings/trio-docs/assets/31315442/ee6724dc-f30d-4f4c-981d-f1e83473d425)

:::{admonition} Reminder
:class: tip
All Autosens ratios calculated in this section are also limited by `Autosens Max` and `Autosens Min` safety settings.
:::
