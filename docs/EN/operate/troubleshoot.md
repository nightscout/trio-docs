# Troubleshooting
[Adapted from looptips](https://loopkit.github.io/looptips/how-to/think-like-loop/)

## Morning IOB

> [!TIP]
>  - **Check your morning IOB:**
>    - if it is positive, increase your basal rates
>    - if it is negative, decrease your basal rates.

One of the easiest ways of optimizing your basal rates is by checking your IOB when you wake up. Open-iAPS uses your basal profile as its net zero. If Open-iAPS needs to give you more insulin overnight than your set basal rates, your IOB will be positive. Likewise, it will be negative if you need less insulin overnight than your current basal rates. You can adjust your basal profile by 10% and reassess the impact the following morning. Below are some Nightscout images showing the impact of changing basal rates on IOB. You can also view your IOB on Open-iAPS itself.

**Before:**

![Nightscout Before](https://github.com/nightscout/Open-iAPS-docs/assets/31315442/1e0e2488-3f10-43d0-8eeb-66632bb26bfa)

**After:**

![Nightscout After](https://github.com/nightscout/Open-iAPS-docs/assets/31315442/532244a0-2ec8-443a-8c4e-a7e0a0fc0887)

Inaccurate basal rates can impact your control in several ways. Their values determine how much insulin Open-iAPS delivers with temporary basal rates and autobolus functions. If you consistently have negative IOB in the morning, you are in danger of having lows when your blood sugar rises above your correction range.

Note that Open-iAPS does adjust your basal profile with autotune, but this system is slow and has strict limits to prevent too much divergence from your set settings. If your basal rates are widely inaccurate, it's best to make manual changes. 

## Site Change or Failure

> [!NOTE]
>  - Pump changes can temporarily impact control. 
>  - Pump failures can negatively impact control for hours. Turn off closed loop when failure is discovered, and only turn back on when a new pump is installed.

Pump site changes can negatively impact your immediate glycemic control. Different delivery sites' ability to absorb insulin varies, impacting your perceived insulin sensitivity. Open-iAPS should be able to accommodate this change by resetting its Autosens measurements [(assuming "Rewind Resets Autosens" is on)](../settings/configuration/preferences/othersettings.md) and adapting as needed.

Pump failures can result from kinks or improper insertion of the cannula. As a result of a pump failure, Open-iAPS may come under the impression that more insulin is on board the patient than what was delivered, leading to sustained highs even after the pump is replaced. 

When you find out your pump has failed, immediately open loop to prevent Open-iAPS from trying to deliver more insulin. Upon your next pump installation, you can then close loop and be patient. Open-iAPS will wait for the calculated insulin on board to drop before delivering insulin.

## Low Treatment

> [!TIP]
>  - Enter carbs for treatment into Open-iAPS but do not bolus for it
>  - Consider reducing your profile ISF or Adjustment Factor if Dynamic ISF is enabled

Low blood sugar events can happen from time to time, but you will typically not require as many carbs to treat your lows as opposed to MDI or using a pump. When you treat a low, you should enter the carbs consumed into the Open-iAPS system so its autotune functionality can make better choices on your ICR, ISF, and basal rates.

If you experience a roller coaster pattern of highs and lows after treatment, your [insulin sensitivity factor (ISF)](../settings/configuration/insulinsensitivities.md) is most likely to blame. Consider making your insulin sensitivity less aggressive by 10% or reducing your adjustment factor by 0.1 increments. 

## Rebound Lows

> [!NOTE]
> - Treating lows with fast carbs can give a fast BG rise
> - Under certain circumstances, Open-iAPS might react to the fast BG rise by giving insulin, leading to another low

To avoid a second low, you can instruct Open-iAPS not to give any SMBs for a while after a low, giving your BG time to stabilize. Set up a [Temporary Target](./temptarget.md) preset that is a bit higher than your usual target (e.g., 7,5 mmol/L | 136 mg/dl). Ensure that [Allow SMB With High Temptarget](../settings/configuration/preferences/smbsettings.md) is disabled. Make the temporary target last for a while (e.g., 30-45 min).

> [!WARNING]
> - **Setting a temporary target is not the same as disconnecting the pump.** Open-iAPS will still be able to give you insulin during the temporary target, but only by adjusting basal rates, resulting in a less aggressive treatment.

## Highs after meals

> [!IMPORTANT]
**It is _normal_ for BG to rise after a meal. This happens to everyone, with or without diabetes. The key is to avoid very high BG levels and bring them back into range as soon as possible.**

### Fast Rise

**Scenario:** _Your BG rises fast when eating and ends up too high._

If your BG rises fast and ends up too high, it is usually because the carbs were absorbed before the insulin peaked. If we rule out site issues, illness, etc, the logical approach is to ensure you get enough insulin ahead of the carbs. You can achieve this by increasing your pre-bolus timing for the meal. This gives the insulin time to absorb before the carbs kick in. You can find more information on mealtime strategy [here](../Configuration/transition-qa.md#what-s-all-that-talk-about-changing-the-way-i-think) page.

### Persistent High

**Scenario:** _Your BG gets high after a meal and stays high for a long time. Open-iAPS gives you some SMBs, but not enough to bring you back down._

Open-iAPS gives you the amount of insulin it calculates to bring you back in range. With persistent highs, more is needed. First, rule out the _Fast Rise_ scenario. Then, help Open-iAPS understand that you need more insulin to lower your BG. This can be achieved by reducing your ISF. Some people find that ISF during high BG is different, making it hard to fix persistent highs by adjusting the scheduled ISF settings. Before enabling this feature, please read the chapter on [Dynamic Settings](../settings/configuration/preferences/dynamicsettings.md). Open-iAPS has a feature called _Dynamic ISF_ that will lower the ISF when BG is high/rising, giving you more insulin.

### Fast Rise, Then Low

**Scenario:** _Your BG rises and ends up too high after a meal, then falls and ends up too low._

In this scenario, you are not getting enough insulin upfront to deal with the carb absorption, but the total amount of insulin you're getting is too much - causing a low. If this is a repeating scenario, you should look into <b>all of</b> the following:

1. If all the delivered insulin is from one bolus, you should consider adjusting your CR setting so that the bolus calculator gives you less insulin. Consider pre-bolusing, giving the insulin some time to absorb before you start eating.
2. If the delivered insulin is part bolus and part SMBs, you should consider adjusting your ISF setting so that the SMBs give you less insulin. It would help if you also considered pre-bolusing, giving the insulin more time to absorb before you start eating.
3. In both (1) and (2), if you use dynamic ISF and CR features, you should consider lowering the Adjustment Factor and adjusting the Autosens max/min settings.

Please read through the chapters on [Autosens](../settings/configuration/concepts/autosens-dynamic.md) and [Dynamic settings](../settings/configuration/preferences/dynamicsettings.md).
