## Evaluate CR Tips

:::{note}
   - This is not medical advice. Please carefully understand the changes you are making and always exercise caution
:::

<b>Background</b>
Nightscout (NS) is one tool that will provide more info for analysis. With iAPS, there is a reduced requirement for precise carb entries, although some precision will still improve outcomes. Generally it is better to overestimate a little than underestimate carbs. But only if you let the algo take care of some of the dosing. If you overestimate and bolus for it all up front, there is little left for the algo to do.

<b>How to adjust CR</b>
Some very important info to observe is looking at how fast the carbs decay. For the last 24 hours, you can scroll back and forth in Nightscout, and see when carbs from a meal decays to zero, or check if they don’t decay in a reasonable time. This gets a little complicated if meals are overlapping though, but still possible.  You may want to utilize the Day to day report when that siutation occurs.

In the Day to day report, make sure to check the COB box (and alternatively IOB). You will see COB as orange “triangles”. If they decay too soon (in less than 2 hours or so, depending on the type and size of the meal), the carbs were either underestimated, CR could be too high a number, or ISF could be too low (carb decay is related to the fraction of CR/ISF)

If the carb absorption as observed by the algorithm is too slow, COB will eventually be cut down. You will see this as a vertical drop in COB in the Day to day report. This helps avoid overdosing on carbs that are overestimated or not eaten, or if there was physical activity that delayed digestion or muted the BG rise.
