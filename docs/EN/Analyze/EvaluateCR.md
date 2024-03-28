## Evaluate CR Tips

> [!CAUTION]
> <i>This is not medical advice. Please understand the changes you are making carefully, and always be sure to exercise caution.</i>

<b>Background</b>
Nightscout (NS) is one tool that will provide more info for analysis. With Open-iAPS, there is a reduced requirement for precise carb entries, although some precision will still improve outcomes. Generally, it is better to overestimate a little than underestimate carbs. But only if you let the algorithm handle some of the dosing. If you overestimate and bolus for it all upfront, there is little left for the algo to do.

<b>How to adjust CR</b>
Some very important information to observe is how fast the carbs decay. For the last 24 hours, you can scroll back and forth in Nightscout and see when carbs from a meal decay to zero or check if they don’t decay in a reasonable time. This gets a little complicated if meals overlap, though, but it is still possible. You may want to utilize the day-to-day report when that situation occurs.

In the day-to-day report, make sure to check the COB box (and, alternatively, the IOB). You will see COB as orange “triangles.” If they decay too soon (in less than 2 hours or so, depending on the type and size of the meal), the carbs were either underestimated, CR could be too high a number, or ISF could be too low (carb decay is related to the fraction of CR/ISF)

If the carb absorption observed by the algorithm is too slow, COB will eventually be cut down. You will see this as a vertical drop in COB in the Day to day report. This helps avoid overdosing on overestimated or not-eaten carbs or if physical activity delays digestion or mutes the BG rise.
