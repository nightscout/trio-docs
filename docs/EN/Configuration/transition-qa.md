# Transition from other closed loop solutions

## Introduction
If you've been using other closed loop solutions, it's important to understand the differences between the one you're used to, and iAPS. 
In this section of the documentation we'll try to explain the differences from a user perspective.

--

## Coming from AndroidAPS
AndroidAPS (AAPS) and iAPS are both based on the same algoritm (Oref) and the same base system (Artificial Pancreas System, APS). While there are several differences between AndroidAPS and iAPS, the main algoritm is the same, 
meaning you can expect iAPS to behave the same way AndroidAPS does. iAPS has some additional features such as Dynamic ISF and Dynamic IC, which AndroidAPS does not have in main branch at the moment. These features are very handy 
once you get the settings right.

### What does AndroidAPS have that iAPS doesn't?

* Custom automations
* Detailed reporting
* Working remote bolus (for caregivers, not working at the moment in iAPS)
* A built-in learning program

### What does iAPS have that AndroidAPS doesn't?

* iAPS works on your iPhone and Apple Watch
* iAPS has dynamic ISF and dynamic IC support in main branch

### Why should I switch from AndroidAPS to iAPS?
If you have been successfull with AndroidAPS but miss the Apple ecosystem, you can easily transition to iAPS. If you've been struggling to get stable BG with AndroidAPS, you will probably have the same issues with iAPS.
Take some time to read the docs and fine-tune your settings. Join Discord or Facebook to get some help from other users. Once you've got your settings in order, you can consider making a switch to iAPS.

--

## Coming from iOS Loop
iOS Loop uses different algorithms, meaning it has a very different approach than iAPS. If you're coming from iOS Loop, you will have to change the way you think. Please read that statement again three times, as it is really important.

### What does Loop have that iAPS doesn't?

* A very clean, minimalistic user interface
* A built-in onboarding guide
* Few settings
* A dedicated Follow app for caregivers
* A large community of people ready to help

### What does iAPS have that Loop doesn't?

* Unannounced meals
* Less user interaction / correction
* Dynamic ISF and IC
* Profile presets

### Why should I switch from Loop to iAPS?
If Loop is working well for you, you should not switch to iAPS. If you're having difficulties building the Loop app, you will have issues building iAPS. If you find it hard to understand how Loop works, you will find that iAPS is even more complex.
You should consider switching to iAPS if you've been using Loop for a while and you have issues that Loop can't solve even after tweaking and re-tweaking your settings and profile. Common issues include:

1. Incorrect or missing carb entries
2. Lots of manual corrections and "fake carbs"
3. Persistent highs because of variations in insulin sensitivity (ISF) and insulin:carb ratio (IC)
4. Recurring/rebound lows
5. Difficulties dealing with exercise
6. Frequent, consistent variations in profile (basal, ISF, IC)

If any of those sound familiar, you should consider a switch. Again, note that you will have to read a lot, and change the way you think.

### How does iAPS deal with those common issues?

1. iAPS has a feature called Unannounced Meals (UAM). With this option enabled and properly configured, iAPS will react to rising BG by giving insulin (SMB - Super Micro Bolus) even if there are no carbs registered. UAM helps in two scenarios, one being that you forget to add carbs for a meal, and the other being that you enter carbs but not the correct amount.
2. With UAM and SMB active and properly configured, iAPS will make any necessary corrections on its own. There is no need to add "fake carbs" to make iAPS give insulin, like many Loop users are used to.
3. Many diabetics find that they need more insulin when BG is high. Loop uses constant ISF and IC ratios, based on time-of-day. Because of that constraint, it is hard for Loop to give enough insulin when BG is already high. There are some Loop Patches that attempt to fix this, but these patches don't work for everyone. With dynamic ISF and dynamic IC enabled and properly configured, iAPS will give enough insulin to get those highs down, without user interaction. More aggressive settings might lead to a low. With less aggressive settings, it will take iAPS some time to get BG back in range. The key is in getting these settings right.
4. Properly configured, iAPS will not give you insulin if you don't need it. A typical issue with Loop is that it stops delivering insulin when BG is falling, and then gives insulin from the "negative IOB" once BG starts rising again. For some users, this is too much insulin and leads to recurring low. Properly configured, iAPS will not overcompensate for the rapid BG rise after a low.
5. Exercise is good for everyone, including people with diabetes. People with insulin dependent diabetes often struggle with lows during exercise and highs after. iAPS has a built-in exercise mode that will reduce basal, ISF and IC whenever you set a higher temporary BG target. iAPS also has Profile Presets that can help get the right amount of insulin during exercise.
6. Illness. Menstrual cycle. Lazy days. Active days. Home office days. These are situations where the overall insulin need is different from "normal". iAPS has Profile Presets that can be used to change basal rate, ISF, IC and target BG in a very easy way. Presets can also have a timer to switch back to the normal profile when the preset timer is done.

### What's all that talk about changing the way I think?

Loop is carb centric. Many Loop users have been instructed to enter carbs, including future carbs (fat, protein) to make sure Loop gives the right amount of insulin. Some users also enter "fake carbs" to make Loop give more insulin.

The iAPS algorithm does not consider future carbs. What does this mean? The algoritm does lots of considerations, adds guardrails, and then acts by setting a temporary basal and/or a bolus (SMB). Future carbs are not considered. The algorithm simply does not care about any future carbs you might have entered.

> Wait, what!? You have to consider carbs, right? Why else would I add them?

iAPS does consider carbs, but not until they're actually absorbed and part of Carbs On Board (COB). But even then, iAPS will not give you any extra insulin automatically unless BG is rising. You could enter a million carbs in the future, and iAPS would not give you any SMB's unless it's needed.

> So what's the mealtime strategy then?

### Mealtime strategy

Here's the recommendation:

1. Use the bolus calculator before you eat. Enter carbs (and fat and protein if you want). Look at the recommended bolus and tap the info button if you don't agree with the recommendation. 
2. Change the recommendation if you want to, and then bolus. If the recommendation is way off, you should probably check your settings. Remeber that the recommendation is based on your settings, including the "Recommended bolus percentage".
3. Depending on type of insulin and your sensitivity, you should consider doing this some minutes before eating. You do not need to adjust carb timestamp to the actual time you plan on eating, you can just keep it at the time you announced the meal and pre-bolused.
4. Enjoy your meal. iAPS will in most cases set a temporary low/zero basal.
5. If iAPS detects BG rising faster or more than expected, it will give more insulin (SMB) depending on settings.
6. If iAPS detects BG falling it will keep the low/zero temporary basal.
7. If you think iAPS is not giving enough or giving too much insulin, you should take a look at your settings - including MAX IOB, and all SMB related settings.

> Does everyone do it like that?

No. 

> What are the alternatives?

* Some iAPS users don't bolus for meals. They wait for iAPS to detect rising BG and let iAPS handle it. This usually leads to a temporary high BG, but with the right settings iAPS will get you back to target. If you're OK with a temporary high, then go ahead and try to skip bolus. Start with small meals and tune your settings. You will need aggressive settings to let iAPS give enough insulin.
* Some iAPS users do a manual pre-bolus and skip entering carbs. iAPS will predict a low BG until the meal kicks in and BG starts to rise. iAPS will give more insulin, based on settings, if the pre-bolus was not enough. Yes, even without entering any carbs. This approach will probably also give a temporary high, but smaller than the completely un-attended approach.

> What do most people do?

Most iAPS users do a bit of all these approaches. Have an apple without entering anything into the app. Then pre-bolus for lunch, because it was high carb. Then use the calculator for dinner. This is all OK, and it comes down to the level of variation you accept for your BG. 

## Coming from commercial closed loop systems

Are you using a commercial closed loop system like Omnipod 5, Tandem Tslim, Medtronic, etc? If you're happy, stay. If you're not getting the results you want, read through the chapter on "Coming from iOS Loop" to see the main issues that iAPS solves.

## I want to try iAPS. How do I proceed?

Read the documentation. 
Build the app. 
Go through all the settings, tap the setting name to get an explanation on what each setting does.
Start with CGM and a virtual pump if you want to see how iAPS would react.
If you have any questions, reach out on Discord or Facebook. But please read the docs first :)

### Watch the Loop N Learn Videos on iAPS:
* [Open Mic: iAPS with Magnus Reintz & Theresa Hastings, 8.3.2023](https://youtu.be/Jubfy-s9URI?si=cKOMb2mcHzBJdPIb)
* [iAPS with Magnus Reintz & Theresa Hastings: Starting iAPS, 8.17.2023](https://youtu.be/9I1nuHbcUHo?si=wlRurW3Qh_60ss2d)
* [iAPS Q&A with Magnus Reintz, Tom Barrows, Jonas Hummelstrand & Theresa Hastings, 30 August 2023](https://youtu.be/Li3AKjSrdPw?si=WwLctkAGjVsbDLNs)




