# Transition from other closed-loop solutions

## Introduction
If you've been using other closed-loop solutions, it's important to understand the differences between the one you're used to and Open-iAPS. 
In this section of the documentation, we'll try to explain the differences from a user perspective.


## Coming from AndroidAPS
AndroidAPS and Open-iAPS are both based on the same algorithm (Oref) and the same base system (Artificial Pancreas System, APS). While there are several differences between AndroidAPS and Open-iAPS, the main algorithm is the same, 
meaning you can expect Open-iAPS to behave the same way AndroidAPS does. Open-iAPS has some additional features, such as Dynamic ISF and Dynamic CR, which AndroidAPS does not have in the main branch at the moment. These features are very handy 
once you get the settings right.

### What does AndroidAPS have that Open-iAPS doesn't?

* Custom automation
* Detailed reporting
* Working remote bolus (for caregivers, not working at the moment in Open-iAPS)
* A built-in learning program

### What does Open-iAPS have that AndroidAPS doesn't?

* Open-iAPS works on your iPhone and Apple Watch
* Open-iAPS has dynamic ISF and dynamic CR support in the main branch

### Should I switch from AndroidAPS to Open-iAPS?
If you have been successful with AndroidAPS but miss the Apple ecosystem, you can easily transition to Open-iAPS. If you've been struggling to get stable BG with AndroidAPS, you will probably have the same issues with Open-iAPS.
Take some time to read the docs and fine-tune your settings. Join [Discord](https://discord.gg/dbe5Twav8D) or [Facebook](https://www.facebook.com/groups/1351938092206709/) to get help from other users. Once you've got your settings in order, you can consider switching to Open-iAPS.


## Coming from iOS Loop
iOS Loop uses different algorithms, meaning it has a very different approach than Open-iAPS. If you're coming from iOS Loop, you will have to change the way you think. Please read that statement again three times, as it is really important.

### Benefits of Loop

* A very clean, minimalistic user interface
* A built-in onboarding guide
* Simple settings
* A dedicated Loop Follow app for caregivers

### Benefits of Open-iAPS

* Unannounced meals
* Less user interaction/correction
* Dynamic ISF and CR
* Highly customizable temporary profiles
* Adaptive algorithm

### Should I switch from Loop to Open-iAPS?
If Loop is working well for you, you should not switch to Open-iAPS. If you're having difficulties building the Loop app, you will have issues building Open-iAPS. If you find it hard to understand how Loop works, you will find that Open-iAPS is even more complex.
You should consider switching to Open-iAPS if you've been using Loop for a while and you have issues that Loop can't solve even after tweaking and re-tweaking your settings and profile. 

Common reasons users switch:

1. Incorrect or missing carb entries
2. Lots of manual corrections and "fake carbs"
3. Persistent highs because of variations in insulin sensitivity (ISF) and insulin-to-carb ratio (CR)
4. Recurring/rebound lows
5. Difficulties dealing with exercise
6. Frequent, consistent variations in profile (basal, ISF, CR)

If any of those sound familiar, you should consider a switch. As a reminder, you will have to read a lot and change the way you think.

### How does Open-iAPS address those common issues?

1. Open-iAPS has a feature called Unannounced Meals (UAM). With this option enabled and properly configured, Open-iAPS will react to rising BG by giving insulin through a Super Micro Bolus (SMB) even if no carbs are registered. UAM helps in two scenarios: forgetting to add carbs for a meal and entering carbs but not the correct amount.
2. With UAM and SMB active and properly configured, Open-iAPS will make any necessary corrections on its own. There is no need to add "fake carbs" to make Open-iAPS give insulin as many Loop users are used to.
3. Many people with diabetes find that they need more insulin as their BG rises. Because Loop uses constant, pre-set ISF and CR values, it cannot address the unexpected change in sensitivity. With dynamic ISF and dynamic CR enabled and properly configured, Open-iAPS will give enough insulin to get those highs down, without user interaction. More aggressive settings might lead to a low. With less aggressive settings, it will take Open-iAPS some time to get BG back in range. The key is to find the effective balance between conservative and aggressive to meet your individual needs.
4. Properly configured, Open-iAPS will not give you insulin if you don't need it. A typical issue with Loop is that it stops delivering insulin when BG is falling, and then gives insulin from the "negative IOB" once BG starts rising again. For some users, this is too much insulin and leads to recurring lows. Properly configured, Open-iAPS will not overcompensate for the rapid BG rise after a low.
5. Exercise is good for everyone, including people with diabetes. People with insulin-dependent diabetes often struggle with lows during exercise and highs afterward. Open-iAPS has a built-in exercise mode that will reduce basal, ISF, and CR whenever you set a higher temporary BG target. Open-iAPS also has Profile Presets that can help you get the right amount of insulin during exercise.
6. Illness, menstrual cycle, lazy days, active days, home office days, stressful events...These are situations where the overall insulin need is different from your usual need. Like Loop's Overrides, Open-iAPS has Profiles that can be used to change basal rate, ISF, CR, and target BG with a pre-set timeframe. What Open-iAPS Profiles do that Loop Overrides do not do is provide the option to temporarily disable SMBs and apply adjustments to only basal, basal, and ISF, basal and CR, or all three.

### What's all that talk about changing the way I think?

Loop is carb-centric. Many Loop users have been instructed to enter carbs, including future carbs (fat, protein), to ensure Loop gives the right amount of insulin. Some users also enter "fake carbs" to make Loop give more insulin.

The Open-iAPS algorithm does not consider future carbs. What does this mean? The algorithm considers many factors, adds guardrails, and then acts by setting a temporary basal and/or a bolus (SMB). Future carbs are not considered. The algorithm simply does not care about any future carbs you might have entered.

> Wait, what!? You have to consider carbs, right? Why else would I add them?

Open-iAPS does consider carbs, but not until they're actually absorbed and part of Carbs On Board (COB). But even then, Open-iAPS will not automatically give you any extra insulin unless your BG is rising. You could enter a million carbs in the future, and Open-iAPS would not give you any SMBs until they're needed.

> So what's the mealtime strategy then?

### Mealtime strategy

Here's the recommendation:

1. Use the bolus calculator before you eat. Enter carbs (and fat and protein if you want). Look at the recommended bolus and tap the info button if you disagree with it. 
2. Change the recommendation if you want to, and then bolus. If the recommendation is way off, you should probably check your settings. Remeber that the recommendation is based on your settings, including the "Recommended bolus percentage".
3. Depending on your type of insulin and your sensitivity, you should consider doing this some minutes before eating. You do not need to adjust the carb timestamp to the actual time you plan on eating; you can just keep it at the time you announce the meal and pre-bolus.
4. Enjoy your meal. Open-iAPS will, in most cases, set a temporary low/zero basal.
5. If Open-iAPS detects BG is rising faster or more than expected, it will give more insulin (SMB) depending on the settings.
6. If Open-iAPS detects BG falling it will keep the low/zero temporary basal.
7. If you think Open-iAPS is not giving enough or too much insulin, you should take a look at your settings, including MAX IOB and all SMB-related settings.

> Does everyone do it like that?

No. 

> What are the alternatives?

* Some Open-iAPS users don't bolus for meals. They wait for Open-iAPS to detect rising BG and let Open-iAPS handle it. This usually leads to a temporary high BG, but with the right settings, Open-iAPS will get you back to target. If you're OK with a temporary high, then go ahead and try to skip bolus. Start with small meals and tune your settings. You will need aggressive settings to let Open-iAPS give enough insulin.
* Some Open-iAPS users do a manual pre-bolus and skip entering carbs. Open-iAPS will predict a low BG until the meal kicks in and BG starts to rise. Open-iAPS will give more insulin, based on settings, if the pre-bolus was not enough. Yes, even without entering any carbs. This approach will probably also give a temporary high, but smaller than the completely unattended approach.

> What do most people do?

Most Open-iAPS users do a bit of all these approaches. Have an apple without entering anything into the app. Then pre-bolus for lunch, because it was high carb. Then use the calculator for dinner. This is all OK, and it comes down to the level of variation you accept for your BG. 

## Coming from commercial closed-loop systems

Are you using a commercial closed-loop system like Insulet's Omnipod 5, Tandem's Control IQ, Medtronic's 780G, etc.? If you're happy, stay. If you're not getting the results you want, read through the chapter on "Coming from iOS Loop" to see the main issues that Open-iAPS solves.

## I want to try Open-iAPS. How do I proceed?

Read the documentation. 
Build the app. 
Go through all the settings and tap the setting name to get an explanation of what each setting does.
Start with CGM and a virtual pump if you want to see how Open-iAPS would react.
If you have any questions, reach out on Discord or Facebook. But please read the docs first :)

### Watch the Loop N Learn Videos on Open-iAPS:
* [Open Mic: Open-iAPS with Magnus Reintz & Theresa Hastings, 8.3.2023](https://youtu.be/Jubfy-s9URI?si=cKOMb2mcHzBJdPIb)
* [Open-iAPS with Magnus Reintz & Theresa Hastings: Starting Open-iAPS, 8.17.2023](https://youtu.be/9I1nuHbcUHo?si=wlRurW3Qh_60ss2d)
* [Open-iAPS Q&A with Magnus Reintz, Tom Barrows, Jonas Hummelstrand & Theresa Hastings, 30 August 2023](https://youtu.be/Li3AKjSrdPw?si=WwLctkAGjVsbDLNs)




