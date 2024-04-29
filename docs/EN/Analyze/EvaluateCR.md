## Evaluate CR

:::{warning}
<i>This is not medical advice. It is important to understand your changes and always exercise caution. When in doubt, consult your diabetes care team for settings guidance.</i>
:::

### Before Adjusting CR

With Open-iAPS, there is a reduced requirement for precise carb entries, although some precision will still improve outcomes. Some users prefer overestimating carb entries and giving a  smaller upfront bolus. If you overestimate and bolus for all of it upfront, the algorithm is limited in its ability to adjust insulin needs as they fluctuate following the meal.

If you have been giving 100% of the needed bolus for meals, it might be best to first try a smaller percentage upfront rather than adjusting your CR.

### Nightscout

Nightscout (NS) is a valuable resource that provides detailed information for analyzing your settings. Nightscout reports and Loopalyzer can be great tools for understanding your data.

#### Build Nightscout
[Instructions to build Nightscout](https://nightscout.github.io/nightscout/new_user/)

#### How to Use Nightscout for CR Adjustments
[How to use Loopalyzer](https://nightscout.github.io/nightscout/reports/#loopalyzer)

Some crucial information to observe is how fast the carbs decay. For the last 24 hours, you can scroll back and forth in Nightscout and see when carbs from a meal decay to zero or check if they don’t decay in a reasonable time. This can get complicated if meals overlap, but it is still possible. You may want to utilize the day-to-day report when that situation occurs.

Check the COB box in the day-to-day report and maybe the IOB box as well. You will see COB as orange “triangles.” If they decay too soon (in less than 2 hours or so, depending on the type and size of the meal), the carbs were either underestimated, CR could be too high a number, or ISF could be too low (carb decay is related to the fraction of CR/ISF)

If the carb absorption observed by the algorithm is too slow, COB will eventually be cut down. This presents as a vertical drop in COB in the day-to-day report. This helps avoid overdosing on overestimated or not-eaten carbs or if physical activity delays digestion or mutes the BG rise.
