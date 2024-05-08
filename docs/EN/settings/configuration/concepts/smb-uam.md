# SMB and UAM
:::{admonition} Highlights
:class: tip
 - Enable SMB and UAM after ensuring accurate basal rates and ISF.
 - Adjust SMB/UAM minutes to allow the system to give greater amounts of insulin with one bolus.
 - Max IOB must be greater than 0 for it to function. _Suggested: average meal bolus + 3x max daily basal._
:::

## Super Micro Boluses
Super micro bolus (SMB) gives you small amounts of insulin upfront in the form of a bolus. Your temporary basal rates will be reduced accordingly before or after the SMB is delivered, so you will overall receive the same amount of insulin you would have received with temporary basal rates alone. SMB allows for faster control of blood sugars by providing more insulin upfront.

There are limitations on the size of SMBs. <a href = "https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb">See the OpenAPS documentation for more information.</a>

:::{important}
 - Please ensure your profile settings are accurate before enabling SMB and UAM.
 - Do not perform manual correction boluses with SMB and UAM enabled. You will be at a high risk of having a low.
:::

There are numerous settings related to enabling SMBs in Trio. Below is the order of precedence of the settings Trio uses when deciding whether to enable or disable SMB:

1. disable SMB when a high temp target is set (unless "allow SMB with High Temptarget" is enabled)
2. enable SMB/UAM if always-on (unless disabled for high temp target)
3. enable SMB/UAM (if enabled in preferences) while we have COB
4. enable SMB/UAM (if enabled in preferences) for a full 6 hours after any carb entry
5. enable SMB/UAM (if enabled in preferences) if a low temp target is set

A flow chart will be added here for greater clarity on Trio SMB decision-making.

## Unannounced Meals
Unannounced Meal (UAM) provides an alternative method (in addition to or instead of carb entry) for detecting and safely dosing insulin via SMBs in response to significant BG rises, whether due to meals, stress/illness, or counterregulatory hormones (adrenaline, cortisol, glucagon, HGH). When enabled, it replaces Advanced Meal Assist (AMA). AMA is an older feature that depends on your carbohydrate entries and sets high temporary basal rates to counteract any remaining carbs on board.
