# Optimizing and Troubleshooting Your Settings
[Adapted from looptips](https://loopkit.github.io/looptips/how-to/think-like-loop/)

## Morning IOB

:::{note}
  - Check your morning IOB: if it is positive, increase your basal rates, if it is negative, decrease your basal rates.
:::
One of the easiest ways of optimizing your basal rates is by checking your IOB when you wake up in the morning. iAPS uses your basal profile as its net zero. If iAPS needs to give you more insulin overnight than your set basal rates, your IOB will be positive. Likewise, if you need less insulin overnight than your current basal rates, it will be negative. You can adjust your basal profile by 10%, and reassess the impact the following morning. Below are some nightscout images showing the impact of changing basal rates on IOB. You can also view your IOB on iAPS itself.

```{figure} img/negativeIOBbefore.jpg
:alt: Before basal adjustment
:width: 600px
Before basal adjustment
```
```{figure} img/negativeIOBafter.jpg
:alt: After basal adjustment
:width: 600px
After basal adjustment
```

Inaccurate basal rates can impact your control in a number of ways. Their values determine how much insulin iAPS delivers with temporary basal rates and autobolus functions. If you consistently have negative IOB in the morning, you are at danger of having lows when your blood sugar rises above your correction range.

Note that iAPS does adjust your basal profile with autotune, but this system is slow and has strict limits to prevent too much divergence from your set settings. If your basal rates are widely inaccurate, its best to make manual changes. 

## Site Change or Failure

:::{note}
   - Pump changes can temporarily impact control. 
   - Pump failures can negatively impact control for hours. Turn off closed loop when failure is discovered, and only turn back on when a new pump is installed.
:::
Pump site changes can negatively impact your immediate glycemic control. Different delivery sites vary in their ability to absorb insulin, impacting your perceived insulin sensitivity. iAPS should be able to accommodate to this change by resetting its Autosens meaurements [(assuming "Rewind Resets Autosens" is on)](../settings/configuration/preferences/othersettings.md) and adapting as needed.

Pump failures can result from kinks or improper insertion of the cannula. As a result of a pump failure, iAPS may come under the impression that more insulin is on board the patient than what was delivered, leading to sustained highs even after the pump is replaced. 

When you find out your pump has failed, immediately turn off closed loop to prevent iAPS from trying to deliver more insulin. Upon your next pump installation, you can then start closed loop and be patient. iAPS will wait for the calculated insulin on board to drop before continuing to deliver insulin.

## Low Treatment

:::{note}
   - Enter carbs for treatment into iAPS but do not bolus for it
   - Consider reducing your profile ISF or Adjustment Factor if Dynamic ISF is enabled
:::
Low blood sugar events can happen from time to time, but you will typically not require as many carbs to treat your lows as opposed to MDI or using a pump. When you treat a low, you should enter the carbs consumed into the iAPS system so its autotune functionality can make better choices on your ICR, ISF and basal rates.

If you experience a roller coaster pattern of highs and lows after treating, your [insulin sensitivity factor (ISF)](../settings/configuration/insulinsensitivities.md) is most likely to blame. Consider making your insulin sensitivity less aggressive by 10% or reducing your adjustment factor by 0.1 increments. 


<b>Additional troubleshooting tips:</b>

## Rebound Lows

:::{note}
* Treating lows with fast carbs can give a fast BG rise
* Under certain circumstances, iAPS might react to the fast BG rise by giving insulin, leading to another low
:::

To avoid a second low, you can instruct iAPS not to give any SMB's for a while after a low, giving your BG time to stabilize. Set up a [Temporary Target](./temptarget.md) preset that is a bit higher than your usual target (e.g. 7,5 mmol/L | 136 mg/dl). Make sure that [Allow SMB With High Temptarget](../settings/configuration/preferences/smbsettings.md) is disabled. Make the temporary target last for a while (e.g. 30-45 min).
:::{note}
* Setting a temporary target is not the same as disconnecting the pump
* iAPS will still be able to give you insulin during the temporary target, but only by adjusting basal rates, resulting in a less aggressive treatment
:::

## Highs after meals

:::{note}
* It is normal for BG to rise after a meal. This happens to everyone, with or without diabetes
* The key is to avoid very high BG levels, and to bring them back in range as soon as possible
:::

### Fast rise
:::{note}
Scenario: your BG rises fast when eating, and ends up too high.
:::
If your BG rises fast and ends up too high, it is (without a doubt) because you did not get enough insulin in time for the carb absorption. If we rule out site issues, illness, etc, the logical approach is to make sure you get more insulin ahead of the carbs. You can achieve this by pre-bolusing for the meal, giving the insulin time to absorb before the carbs kick in. You may want to read the chapter on mealtime strategy on the [transition from other systems](../Configuration/transition-qa.md#what-s-all-that-talk-about-changing-the-way-i-think) page.

### Persistent high
:::{note}
Scenario: your BG gets high after a meal, and stays high for a long period of time. iAPS gives you some SMB's, but not enough to bring you back down.
:::
In this scenario, iAPS is giving you the amount of insulin it thinks is right to bring you back in range. Clearly, this is not enough. Make sure to rule out the <i> fast rise</i> scenario. Then, help iAPS understand that you need more insulin to lower your BG. This can be achieved by lowering the ISF. Some people find that ISF during high BG is different, making it hard to fix persistent highs by adjusting the scheduled ISF settings. iAPS has a feature called [Dynamic ISF](../settings/configuration/preferences/dynamicsettings.md) that will lower the ISF when BG is high/rising, giving you more insulin. Please read the chapter on Dynamic Settings before enabling this feature.

### Fast rise, then low
:::{note}
Scenario: your BG rises and ends up too high after a meal, then falls and ends up too low.
:::
In this scenario, you are not getting enough insulin upfront to deal with the carb absorption, but the total amount of insulin you're getting is too much - causing a low. If this is a repeating scenario, you should look into <b>all of</b> the following:

1. If all the delivered insulin is from one bolus, you should consider adjusting your CR setting so that the bolus calculator gives you less insulin. You should also consider pre-bolusing, giving the insulin some time to absorb before you start eating.
2. If the delivered insulin is part bolus and part SMB's, you should consider adjusting your ISF setting so that the SMB's give you less insulin. You should also consider pre-bolusing, giving the insulin more time to absorb before you start eating.
3. In both (1) and (2), if you are using dynamic features for ISF and CR, you should consider lowering the Adjustment Factor and adjusting the Autosens max/min settings.

Please read through the chapters on [Autosens](../settings/configuration/concepts/autosens-dynamic.md) and [Dynamic settings](../settings/configuration/preferences/dynamicsettings.md).
