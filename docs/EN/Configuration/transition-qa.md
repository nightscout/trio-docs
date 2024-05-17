# Transition from other closed-loop solutions

## Introduction
If you've been using other closed-loop solutions, it's essential to understand the differences between the one you're used to and Trio.

In this section of the documentation, we'll explain the differences from a user perspective.


## Coming From AndroidAPS
AndroidAPS and Trio are based on the same algorithm (Oref) and base system (Artificial Pancreas System, APS). While there are several differences between AndroidAPS and Trio, the main algorithm is the same, 
meaning you can expect Trio to behave the same way AndroidAPS does generally.

<details>
  <summary><b>Benefits of AndroidAPS</b></summary>

* Custom automation
* Detailed reporting
* Working remote bolus (for caregivers, not working at the moment in Trio)
* A built-in learning program
</details>
<br>
<details>
<summary><b>Benefits of Trio</b></summary>

* Trio works on your iPhone and Apple Watch
* Trio has dynamic CR support
</details>
<br>
<details>
  <summary><b>Should I switch from AndroidAPS to Trio?</b></summary>
- If you have been successful with AndroidAPS but prefer the Apple ecosystem, you can easily transition to Trio. - If you've struggled to get stable BG with AndroidAPS, you may have the same issues with Trio.
  
Take some time to read the docs and fine-tune your settings. To get help from other Trio users, join [Discord](https://discord.gg/dbe5Twav8D) or [Facebook](https://www.facebook.com/groups/1351938092206709/). Once your settings are in order, consider switching to Trio.
</details>
<br>

## Coming From iOS Loop
iOS Loop uses different algorithms, meaning it has a different approach than Trio. If you're coming from iOS Loop, you must change how you think. Please read that statement again three times, as it is crucial.

<details>
  <summary><b>Benefits of Loop</b></summary>

* A very clean, minimalistic user interface
* A built-in onboarding guide
* Simple settings
* A dedicated Loop Follow app for caregivers
</details>
<br>
<details>
  <summary><b>Benefits of Trio</b></summary>

* Unannounced meals
* Less user interaction/correction
* Dynamic ISF and CR
* Highly customizable temporary profiles
* Adaptive algorithm
</details>
<br>
<details>
  <summary><b>Should I switch from Loop to Trio?</b></summary>
If Loop works well for you, you should not switch to Trio.

Switching to Trio will not resolve Loop build issues. The build process is the same for both Loop and Trio.

If you find it difficult to understand how Loop works, Trio is even more complex.

You should consider switching to Trio if you've been using Loop for a while and have issues that Loop can't solve even after tweaking and re-tweaking your settings and profile. 
</details>
<br>

### Common Reasons Users Switch from Loop and How Trio Addresses Them

<details>
  <summary><b>Incorrect or missing carb entries</b></summary>
Trio has a feature called Unannounced Meals (UAM). With this option enabled and properly configured, Trio will react to rising BG by giving insulin through a Super Micro Bolus (SMB) even if no carbs are registered. UAM helps in two scenarios: forgetting to add carbs for a meal and entering carbs but not the correct amount.
</details>
<br>
<details>
  <summary><b>Lots of manual corrections and "fake carbs"</b></summary>
With UAM and SMB active and properly configured, Trio will make any necessary corrections. There is no need to add "fake carbs" to make Trio give insulin, as many Loop users are used to.
</details>
<br>
<details>
  <summary><b>Persistent highs because of variations in insulin sensitivity (ISF) and insulin-to-carb ratio (CR)</b></summary>
Many people with diabetes need more insulin as their BG rises. Because Loop uses constant, pre-set ISF and CR values; it cannot address the unexpected change in sensitivity. With dynamic ISF and dynamic CR enabled and properly configured, Trio will give enough insulin to lower those highs without user interaction. More aggressive settings might lead to a low. With less aggressive settings, it will take Trio some time to get BG back in range. The key is to find the effective balance between conservative and aggressive to meet your needs.
</details>
<br>
<details>
  <summary><b>Recurring/rebound lows</b></summary>
Properly configured, Trio will not give you insulin if you don't need it. A typical issue with Loop is that it stops delivering insulin when BG falls and then gives insulin from the "negative IOB" once BG starts rising again. For some users, this is too much insulin and leads to recurring lows. Properly configured, Trio will not overcompensate for the rapid BG rise after a low.
</details>
<br>
<details>
  <summary><b>Difficulties dealing with exercise</b></summary>
Exercise is good for everyone, including people with diabetes. People with insulin-dependent diabetes often struggle with lows during exercise and highs afterward. Trio has a built-in exercise mode that will reduce basal and ISF whenever you set a higher temporary BG target. Trio also has Profile Presets that can help you get the right amount of insulin during exercise. Profiles can also adjust CR, unlike temporary targets.
</details>
<br>
<details>
  <summary><b>Frequent, consistent variations in profile (basal, ISF, CR)</b></summary>
Illness, menstrual cycle, inactive days, active days, home office days, stressful events... In these situations, the overall insulin need differs from your usual need. Like Loop's Overrides, Trio has Profiles that can change basal rate, ISF, CR, and target BG within a pre-set timeframe. What Trio Profiles do that Loop Overrides do not do is provide the option to temporarily disable SMBs and apply adjustments to only basal, basal, and ISF, basal and CR, or all three.
</details>
<br>

<b><i>If any of those sound familiar, consider a switch to Trio</b></i>

:::{important}
You must read extensively and adapt to a new approach to diabetes management.
:::

### What's All That Talk About Changing the Way I Think?

Loop is carb-centric. Loop users have been instructed to enter carbs, including future carbs (fat, protein), to ensure Loop gives the right amount of insulin. Some users also enter "fake carbs" to force Loop to give more insulin.

The Trio algorithm does not consider future carbs. What does this mean? The algorithm considers many factors, adds guardrails, and then acts by setting a temporary basal, administering a bolus (SMB), or both. Future carbs are not considered. The algorithm does not care about any future carbs you might have entered.

**Wait, what!? You have to consider carbs, right? Why else would I add them?**
*Trio considers carbs only once absorbed and part of Carbs On Board (COB).*

**So what's the mealtime strategy then?**

### Mealtime Strategy

Here's the recommendation:

1. Use the bolus calculator before you eat. Enter carbs (and fat and protein if you want). Look at the recommended bolus and tap the info button if you disagree with it. 
2. Change the recommendation if you want to, and then bolus. If the recommendation is way off, you should check your settings. Remember that the recommendation is based on your settings, including the "Recommended bolus percentage" setting.
3. Depending on your insulin type and sensitivity, you should consider doing this some minutes before eating. You do not need to adjust the carb timestamp to the actual time you plan to eat; you can keep it when you announce the meal and pre-bolus.
4. Enjoy your meal. In most cases, Trio will set a temporary low/zero basal.
5. If Trio detects BG is rising faster or more than expected, it will give more insulin (SMB) depending on the settings.
6. If Trio detects BG falling, a low/zero temporary basal will continue.
7. If you think Trio is not giving enough or too much insulin, you should look at your settings, including MAX IOB and all SMB-related settings.

**Does everyone do it like that?**
*No.* 

**What are the alternatives?**

- *Some Trio users don't bolus for meals. They wait for Trio to detect rising BG and let Trio handle it. This usually leads to a temporary high BG, but Trio will get you back to target with the correct settings. If you're OK with a temporary high, then go ahead and try to skip bolus. You can start with small meals and tune your settings. You will need aggressive settings to let Trio give enough insulin.*
- *Some Trio users do a manual pre-bolus and skip entering carbs. Trio will predict a low BG until the meal kicks in and BG begins rising. If the pre-bolus is insufficient, Trio will give more insulin based on your settings. Yes, even without entering any carbs. This approach will also result in a temporary high that is shorter than the completely unattended approach.*

**What do most people do?**
*Most Trio users take a bit of all these approaches. They have an apple without entering anything into the app. Then, they pre-bolus for lunch because it was high carb. Then, they use the calculator for dinner. This is all OK, and it comes down to the variation you accept for your BG.*

## Coming From Commercial Closed-Loop Systems

Are you using a commercial closed-loop system like Insulet's Omnipod 5, Tandem's Control IQ, Medtronic's 780G, etc.? If you're happy, stay if you're not getting the desired results; read through the chapter [Coming from iOS Loop](#coming-from-ios-loop) chapter to see the main issues Trio solves.

## I Want to Try Trio. How Do I Proceed?

- Read the documentation. 
- Build the app. 
- Go through all the settings and tap the setting name to get an explanation of what each setting does.

If you have any questions, feel free to reach out on [Discord](https://discord.gg/fCY5svg4) or [Facebook](https://www.facebook.com/groups/diytrio). The best practice is to read the docs first, then ask the community any questions you have.

### Watch the Loop and Learn Videos on Trio (Previously Referred to as "iAPS"):
- [Open Mic: Trio with Magnus Reintz & Theresa Hastings, 8.3.2023](https://youtu.be/Jubfy-s9URI?si=cKOMb2mcHzBJdPIb)
- [Trio with Magnus Reintz & Theresa Hastings: Starting Trio, 8.17.2023](https://youtu.be/9I1nuHbcUHo?si=wlRurW3Qh_60ss2d)
- [Trio Q&A with Magnus Reintz, Tom Barrows, Jonas Hummelstrand & Theresa Hastings, 30 August 2023](https://youtu.be/Li3AKjSrdPw?si=WwLctkAGjVsbDLNs)




