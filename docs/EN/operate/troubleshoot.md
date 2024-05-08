# Troubleshooting
[Adapted from looptips](https://loopkit.github.io/looptips/how-to/think-like-loop/)

## Site Change and Site Failures

:::{admonition} Tips
:class: tip
  - Pump site changes can temporarily impact control. 
  - Pump site failures can negatively impact control for hours. Turn off closed loop when failure is discovered, and only turn back on when a new pump is installed.
:::

### Site Change

Pump site changes can negatively impact your immediate glycemic control. Different delivery sites' ability to absorb insulin varies, impacting your perceived insulin sensitivity. Trio should be able to accommodate this change by resetting its Autosens measurements [(assuming "Rewind Resets Autosens" is on)](../settings/configuration/preferences/othersettings.md) and adapting as needed.

**For Omnipod**\
If you think you need more insulin primed in the new pod, consider customizing that line of code with [these instructions](./customize.md#omnipod-add-extra-insulin-on-insertion).

### Site Failure

Pump failures can result from kinks or improper insertion of the cannula. As a result of a pump failure, Trio may come under the impression that more insulin is on board the patient than what was delivered, leading to sustained highs even after the pump is replaced. 

When you find out your pump has failed, immediately open loop to prevent Trio from trying to deliver more insulin. Upon your next pump installation, you can then close loop and be patient. Trio will wait for the calculated insulin on board to drop before delivering insulin.

## Low Treatment

:::{admonition} Tips
:class: tip
  - Enter carbs for treatment into Trio but do not bolus for it
  - Consider reducing your profile ISF or Adjustment Factor if Dynamic ISF is enabled
:::

Low blood sugar events can happen from time to time, but you will typically not require as many carbs to treat your lows as opposed to MDI or using a pump. When you treat a low, you should enter the carbs consumed into the Trio system so its autotune functionality can make better choices on your ICR, ISF, and basal rates.

If you experience a roller coaster pattern of highs and lows after treatment, your [insulin sensitivity factor (ISF)](../settings/configuration/insulinsensitivities.md) is most likely to blame. Consider making your insulin sensitivity less aggressive by 10% or reducing your adjustment factor by 0.1 increments. 

## Rebound Lows

:::{admonition} Tips
:class: tip
 - Treating lows with fast carbs can give a fast BG rise
 - Under certain circumstances, Trio might react to the fast BG rise by giving insulin, leading to another low
:::

To avoid a second low, you can instruct Trio not to give any SMBs for a while after a low, giving your BG time to stabilize. Set up a [Temporary Target](./temptarget.md) preset that is a bit higher than your usual target (e.g., 7,5 mmol/L | 136 mg/dl). Ensure that [Allow SMB With High Temptarget](../settings/configuration/preferences/smbsettings.md) is disabled. Make the temporary target last for a while (e.g., 30-45 min).

:::{warning}
 - **Setting a temporary target is not the same as disconnecting the pump.** Trio will still be able to give you insulin during the temporary target, but only by adjusting basal rates, resulting in a less aggressive treatment.
:::

## Highs after meals

:::{tip}
**It is _normal_ for BG to rise after a meal. This happens to everyone, with or without diabetes. The key is to avoid very high BG levels and bring them back into range as soon as possible.**
:::

### Fast Rise

**Scenario:** _Your BG rises fast when eating and ends up too high._

If your BG rises fast and ends up too high, it is usually because the carbs were absorbed before the insulin peaked. If we rule out site issues, illness, etc, the logical approach is to ensure you get enough insulin ahead of the carbs. You can achieve this by increasing your pre-bolus timing for the meal. This gives the insulin time to absorb before the carbs kick in. You can find more information on mealtime strategy [here](../Configuration/transition-qa.md#what-s-all-that-talk-about-changing-the-way-i-think) page.

### Persistent High After Meals

**Scenario:** _Your BG gets high after a meal and stays high for a long time. Trio gives you some SMBs, but not enough to bring you back down._

Trio calculates the amount of insulin needed to bring you back into range. More insulin is needed when blood glucose remains high after a meal, but Trio needs corrected settings to make those adjustments. 

- The first adjustment should be to reduce your CR. Reducing your carb ratio will result in **more** insulin for the carbs entered.
- If you notice that your CR needs fluctuate based on your blood sugar level at the time, evaluate activating the [Dynamic CR](https://github.com/nightscout/trio-docs/blob/Operate-Folder-Updates/docs/EN/settings/configuration/preferences/dynamicsettings.md#enable-dynamic-cr) setting. 

### Fast Rise, Then Low

**Scenario:** _Your BG rises and ends up too high after a meal, then falls and ends up too low._

In this scenario, you are not getting enough insulin upfront to deal with the carb absorption, but the total amount of insulin you're getting is too much - causing a low. If this is a repeating scenario, you should look into <b>all of</b> the following:

1. If all the delivered insulin is from one bolus, you should consider adjusting your CR setting so that the bolus calculator gives you less insulin. You could also consider pre-bolusing, giving the insulin some time to absorb before you start eating.
2. If the delivered insulin is part bolus and part SMBs, you should consider adjusting your ISF setting so that the SMBs give you less insulin. It would help if you also considered pre-bolusing, giving the insulin more time to absorb before you start eating.
3. In both (1) and (2), if you use dynamic ISF and CR features, you should consider lowering the Adjustment Factor and adjusting the Autosens max/min settings.

Please read through the chapters on [Autosens](../settings/configuration/concepts/autosens-dynamic.md) and [Dynamic settings](../settings/configuration/preferences/dynamicsettings.md).
