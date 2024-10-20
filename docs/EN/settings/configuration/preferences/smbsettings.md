# SMB Settings
>[!IMPORTANT]
>- Super micro boluses (SMB) deliver small doses of insulin. Your basal rate will be temporarily reduced after an SMB is delivered.
>- SMBs reduce blood sugar more quickly than temporary basal rates.
>- If you want Trio to make all SMB decisions, select Enable SMB Always and leave the other settings deselected.
>   - Follow the directions below if you want to configure SMBs only to run in certain conditions.
>- For a detailed look at when SMBs are delivered, see the chart in [Are SMBs Allowed?](#are-smbs-allowed) section. 
>- For setup recommendations, see the [Start-Up Guide](http://diy-trio.org/start-up-guide).

## Enable SMB Always
Enabling this setting allows SMBs to be delivered if your blood sugar is predicted to go above target. 

SMBs will remain on if you have a low temporary target set but will be fully disabled if a high temporary target is set (unless "[Allow SMB With High Temptarget](#allow-smb-with-high-temptarget)" is enabled).

The size of SMBs is limited. For more information, see the [OpenAPS documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).

## Max Delta-BG Threshold SMB
This safety limiter looks at the difference between your last two blood glucose readings. If the difference is large, Trio suspects them to be incorrect and will suspend SMB delivery accordingly. You can adjust the amount of change that should be allowed before SMBs are delivered.
A setting of 0.2 means it will only give SMBs if the difference between the current and previous blood glucose readings is no greater than 20%.

>**Example:**
>
>Your last CGM reading was 90mg/dL. The very next reading is 115mg/dL, an increase of 27%. If Max Delta-BG Threshold SMB is set to 0.2 (20%), this change is larger than the threshold, and no SMBs will be given.

>[!TIP]
>For a fully closed loop, 0.3 is advised.

## Enable SMB With COB
SMBs will be enabled if you currently have carbs on board (COB) to help you deal with meal spikes. This feature should be enabled if you want to use UAM.

>[!NOTE]
>If you already have "[Enable SMB Always](#enable-smb-always)" on, this feature is redundant and does not need to be configured.

## Enable SMB with Temptarget
SMBs will be enabled if you have set a lower blood sugar target temporarily. This will allow you to reach your target faster.

>[!NOTE]
>If you already have "[Enable SMB Always](#enable-smb-always)" on, this feature is redundant and does not need to be configured.

## Enable SMB After Carbs
SMBs will be enabled if you had carbs within the last 6 hours to help with meal spikes.

>[!NOTE]
>If you already have "[Enable SMB Always](#enable-smb-always)" on, this feature is redundent and does not need to be configured.

## Allow SMB With High Temptarget
By default, Trio will not allow SMBs if you have a temporary blood glucose target set above 5.5 mmol/L (100 mg/dL), even if "[Enable SMB Always](#enable-smb-always)" is toggled on. Toggling this feature ON will disable that safety check and not prevent SMBs when a high temporary target is set, as long as SMBs are otherwise enabled.

## Enable SMB With High BG 
This allows SMBs to occur above the measure set below in "...When Blood Glucose is Over (mg/dl)". 

>[!NOTE]
>If you already have "[Enable SMB Always](#enable-smb-always)" on, this feature is redundant and does not need to be configured.

## ... When Blood Glucose is Over (mg/dl)
See the above setting for more information. This allows you to configure the target at which SMBs will be enabled.

## Enable UAM
With this option enabled, the SMB algorithm can recognize unannounced meals. This is helpful if you forget to tell Trio about your carbs or estimate your carbs wrong. It can also help if a meal with lots of fat and protein has a longer duration than expected. Without any carb entry, UAM can recognize fast glucose rises caused by carbs, illness, or counter-regulatory hormones, and tries to adjust it with SMBs. This also works the opposite way: if there is a fast glucose drop, it can stop SMBs earlier.

## Max SMB Basal Minutes
 
Max SMB Basal minutes is one of the major limits on how much insulin a single SMB delivers. 

The amount of insulin that can be delivered by an SMB is related to the amount of scheduled basal insulin in your "Basal Profile" settings. 

For example, if you are receiving a basal dose of 1 unit per hour and set "Max SMB Basal minutes" to 30, an SMB will deliver no more insulin than would be delivered by your basal in 30 minutes or half a unit (0.5U). 

If you see that Trio is giving very small — or the same — SMBs every 5 minutes, you may need to adjust the [Max IOB](./mainsettings.md#max-iob) or [Max SMB basal minutes](#max-smb-basal-minutes). First, you should confirm your basal rates are adequate. Then, you can experiment with increasing [Max SMB basal minutes](#max-smb-basal-minutes) so Trio can provide larger SMBs to better respond to BG rises and predicted rises.

## Max UAM SMB Basal Minutes

This setting limits the size of SMBs that Trio can deliver when it detects an unannounced meal (UAM). The maximum size of each SMB is set in relation to the scheduled basal insulin in your profile settings. 

You can configure this setting to make UAM more or less aggressive to correct meal spikes. Note that SMBs delivered in response to unannounced meals are also limited by your [Max IOB](./mainsettings.md#max-iob). See "[Max SMB Basal Minutes](#max-smb-basal-minutes)" above for information on other settings that limit SMBs.

Tip: If you struggle with meals or hormonal highs, consider increasing maximum basal minutes (slowly and watching results over multiple days before changing again) to allow UAM to give more insulin in one bolus.

## SMB DeliveryRatio
This is a safety limiter. Trio determines how much insulin is required to get you back to your target glucose. If SMB is enabled, Trio then delivers an SMB, that defaults to half the required insulin.

This setting allows you to boost or reduce what fraction of the required insulin is delivered in a single SMB. It is recommended you look at your basal profile, [Max SMB basal minutes](#max-smb-basal-minutes), [Max UAM SMB Basal Minutes](#max-uam-smb-basal-minutes), and [Max IOB](./mainsettings.md#max-iob) before you adjust this setting.

## SMB Interval
The minimum interval between SMB boluses. SMBs will be delivered at this rate or less as needed.

## Bolus Increment
The minimum amount of insulin that can be bolused by Trio via an SMB. This is determined by your pump hardware.

## Are SMBs Allowed?

![SMB-flow-chart](https://github.com/nightscout/trio-docs/assets/31315442/8d2d6f2c-c7bf-48ad-88df-dabcccb58fbf)

### By following the flow chart above, you can see which combination of settings will allow SMBs.

- If a setting in the top row is toggled off, look at the next box to the right. If no box in the top row is toggled on, then SMBs will not be allowed. 
- If any of the settings in the top row are toggled on and their condition is true, follow the green line down to the "Allow SMB with High Temptarget" box. 
- If "Allow SMB with High Temptarget" is toggled on (NOT the default), then continue to follow the green line to the bottom conditions.
- If "Allow SMB with High Temptarget" is toggled off (which IS the default), it will then check if you've set a Temp Target (not a custom profile) above 100 mg/dL (5.5 mmol/L). If you have a Temp Target set above 100 mg/dL, then SMBs are DISABLED and not allowed.

If you've made it to the bottom row, it checks all those conditions, and if none of them are true, then SMBs are allowed.

### Here is the order of settings Trio uses when deciding whether to enable or disable SMBs:

- Disable when a High Temptarget is set (unless "Allow SMB with High Temptarget" is enabled)
- Enable if "Enable SMB Always" is set (unless disabled for "High Temptarget)"
- Enable while there are COB
- Enable for a full 6 hours after any carb entry
- Enable if a Low Temptargt is set


