# Frequently Asked Questions
Various resources, including [Facebook](https://www.facebook.com/groups/diytrio), and [Discord](https://discord.com/invite/FnwFEFUwXE), are available to assist you with setting up, maintaining, and succeeding in your Trio journey. Below is a series of questions we see asked daily. We hope it helps. 

## Trio FAQs
### What is Trio?
Trio is an open-source artificial pancreas system based on the OpenAPS (Oref0) algorithm. It uses your entered settings, carbohydrates, and historical data to automate insulin delivery and reduce the time spent managing your diabetes. 
 
The project started with Ivan Valkou's FreeAPS X implementation of the OpenAPS algorithm for iPhone and was later forked and rebranded as iAPS. Since then, many developers have contributed substantial work, leading to new features and enhancements.

Following the release of version 3.0.0, the project’s direction significantly changed due to differing views on development, open source, and peer review. This led to the separation from the iAPS repository and the birth of Trio as a distinct entity. This transition marks the project’s new phase, symbolizing its evolution and the collaborative development’s dynamic nature.

!!! important "Important"
    Trio is a DIY, open-source community project. As such, the user must build and maintain their app with the support of the Trio community. Trio has not undergone evaluation by any regulatory agency and is for use at your own risk.


### Can I download Trio from the App Store?
Trio is not available to download from the App Store. Trio is an open-source, do-it-yourself automated insulin delivery application. Community members who wish to utilize Trio must build it themselves. 

While building your application may initially seem daunting, information and support are abundant and available to help you progress down this pathway. Each step required to build Trio can be found within this documentation. Additional support can be found on the Trio [Facebook](https://www.facebook.com/groups/diytrio) group and [Discord](https://discord.com/invite/FnwFEFUwXE) group. 

### Do I have to be "tech-smart" to build Trio?
No. You do not need any experience in code or computers to build Trio. If you own a computer or tablet and an iPhone, you already have the required experience. Beyond that, read the directions slowly and diligently. All the information you will need is in these documents.

Often, the non-tech people do better than the tech people in building Trio. Why? Because the non-tech people take the time to read slowly and look at the screenshots in the directions. The tech people often skim and miss steps, which then leads to build errors that have to be retraced and fixed.

### How long does it take to build Trio?
The answer to this question is very user-dependent. If you are new to building and need to immerse yourself in the documentation, then a few hours. However, some users like to break this down into smaller, more manageable chunks and complete the task over 24 hours. If you are a repeat builder familiar with the documentation, build, and update process, then 10 - 15 minutes. 
There are two options for building at present:
* The 'Browser Build' method using GitHub.
* The 'Mac Build' method using XCode.

### Do I need to own an Apple computer?
No, you do not need to own an Apple computer. The 'Browser Build' method can be completed on any computer with access to the Internet and GitHub. However, if you chose the 'Mac Build' method, while you do not necessarily need to own an Apple computer, you must at least borrow one. 

### How often will I need to access the computer to maintain Trio?  
When you use the 'Browser Build' method, you must access a browser at least once every 90 days to update with the Browser. This is simple enough to do the steps on your phone in just a few minutes. 

When you use Build with Mac: 1. When you first build. 2. Once per year, at the minimum, after that. However, if you decide to use a free Apple Developer account, you must rebuild every 7 days. 

!!! important "Important" 
    Periodically, developers will release updates to Trio. These updates may include new features or important safety updates. It is recommended that as updates are released, users update their Trio app.

### Do I have to rebuild Trio if I change insulin pumps or CGMs?
No. Trio lets you move between different pumps and CGM configurations within the app. 

### I am moving from another closed-loop system. Will my settings transfer over?
If you've been using other closed-loop solutions, it's essential to understand the differences between the one you're used to and Trio. Before making the transition, we recommend that you take the time to read through the documentation to build a basic understanding of Trio. Detailed information on transitioning from other closed-loop systems can be found [here](.../Configuration/transition-qa.md)

Depending on which system you are transitioning from, whether DIY or commercial, some settings may directly transfer across, and others may not. Before commencing on Trio, it is crucial that users test and refine their basals, carb ratios, and insulin sensitivity factors... Thats right... Take a minute and read that again... Before commencing on Trio, it is crucial that users test and refine their basals, carb ratios, and insulin sensitivity factors. 

Why? Trio is only as good as the information you give it. Basal, carb ratios, and insulin sensitivity factors form the basis for all computing by Trio's algorithms. If you have given Trio poor-quality information, you will see poor-quality output. This will likely present as unexpected behavior to the everyday user and result in a poor user experience.

!!! important "Important"
    Before commencing on Trio, users must test and refine their basals, carb ratios, and insulin sensitivity factors.

### What about other pumps? When can I use them with Trio?
Cracking of pumps for use with the Trio app is a significant undertaking. At the same time, developers are constantly monitoring pumps that could be integrated into Trio. Ultimately, cracking and creating drivers for these pumps requires multiple developers to devote significant amounts of their time. Realistically, it can take upwards of 12 months for new pump integration. Information on supported pumps can be found under [Compatible Pumps](../Getting-Started/pump.md).

### I regularly go places without phone service or an internet connection. Will Trio work without these?
Yes. Trio does not require internet or cell coverage to work. So long as the Trio user has Bluetooth enabled on the iPhone, the CGM and insulin pump will continue working in conjunction with Trio. 

!!! warning
    If you have chosen a CGM source that requires the internet (i.e., Nightscout or Dexcom Share), users must maintain an internet connection. If you enter an area without internet, you will lose your CGM readings and Trio will stop looping.

### Can I have someone follow my Trio app?
There are multiple options available for someone to follow your loop data.

**Nightscout**
<br>Nightscout is an open-source cloud application used by people with diabetes and parents of kids with diabetes to visualize, store, and share the data from their Continuous Glucose Monitors in real-time. Once set up, Nightscout acts as a central repository of blood glucose and insulin dosing/treatment data for a single person, allowing you to view the CGM graph and treatment data anywhere using just a web browser connected to the internet. Detail of Trio's integration with Nightscout can be found [here](../settings/services/nightscout.md). Information on creating your Nightscout site can be found [here](https://nightscout.github.io/).

**LoopFollow**
<br>LoopFollow is an open-source, do-it-yourself iPhone app that combines your T1D's display information and alerts into a single, easy-to-use interface. LoopFollow pulls data from your Nightscout or Dexcom Share server. You can set up more than one app on a phone if you follow more than one person with diabetes. Information on creating your LoopFollow app can be found [here](https://www.loopandlearn.org/loop-follow/).

!!! warning
    All options for following your Trio app rely on an active internet connection. If you or the person you are following loses connection to the internet, your LoopFollow app will stop receiving data.

## Algorithm FAQs

### What algorithm does Trio use?
Trio is an open-source artificial pancreas system based on the OpenAPS (Oref0) algorithm. 

### Where can I learn more about the Oref algorithm?
The first place to start if you want to learn more about the underlying algorithm is the extensive [OpenAPS documentation](https://openaps.readthedocs.io/). OpenAPS is the underlying algorithm Trio implements, with minor modifications mostly pertaining to the Dynamic settings.

### Why does the 'Recommended Bolus Percentage' default to 70%?
`Recommended Bolus Percentage` is a safety feature built into Trio. By default, Trio first calculates an "insulin recommended" value when bolusing for carbs, which is the total dosage. That dosage is multiplied by your `Recommended Bolus Percentage` to display your suggested insulin dose. Trio then delivers the remaining insulin via Temp Basals and/or SMBs as the blood sugar rises.

`Recommended Bolus Percentage` is a setting that allows the user to alter the amount initially delivered. By default (70), 70% of the required meal bolus is delivered before the meal. You can increase or decrease this to alter the insulin delivered before the meal.

### What is 'Max IOB' impact Trio's limit Trio's insulin dosing?
The maximum amount of insulin on board (i.e., in the body). Including insulin from all sources (basal and bolus) automatically delivered by Trio. 

The default is zero, meaning Trio can only set temporary basal rates lower than your profile basal rate. It cannot set temporary basal rates that exceed your profile basal rate in cases of high blood sugar, and it cannot use super micro boluses to control blood sugar.

You will need to increase this value to allow Trio to start automating your insulin delivery. If you are nervous, you can start by setting this value to your average meal bolus. Then, over time, you can begin to increase the value. 

!!! tip 
    The default recommendation is “average meal bolus + 3 x max hourly basal” when using super micro boluses.

### How does 'Max COB' impact Trio's limit Trio's algorithm?
The maximum amount of carbs that Trio is allowed to bolus or set high-temp targets for. This safety feature protects against erroneous carbohydrate entries that could lead to hypoglycemia episodes.

### What is 'Autosens'? How do 'Autosens Max' and 'Autosens Min' impact Trio's decision-making?
Autosens allows the system to analyze historical data on the go and make adjustments if it recognizes that you are reacting more sensitively or resistant to insulin than usual. Autosens will then make temporary adjustments to the basal, ISF, and targets used for calculating temp basals in order to keep BG closer to your configured target. 

`Autosens Max` and `Autosens Min` are the safety limiters the algorithm places on Autosens.`Autosens Max` determines the maximum ratio autosens can use for its adjustments. Increasing this value allows autosens to increase insulin through your basal profile, ISF, and target blood glucose. Conversely, `Autosens Min` determines the minimum ratio autosens can use for adjustments. Decreasing this value allows autosens to reduce insulin given through your basal profile, ISF, and target blood glucose.

Various blog posts have been written over the years regarding Autosens, and links to some can be found below: 
* Dana Lewis, [Autosensitivity](https://diyps.org/2016/12/02/autosensitivity-automatically-adjusting-insulin-sensitivity-factor-for-insulin-dosing-with-openaps/).
* Tim Street, [Understanding Autosens](https://www.diabettech.com/artificial-pancreas/understanding-autosens/).

### What are SMBs?
Super micro bolus, or SMB, is designed to give you reasonable amounts of bolus insulin upfront and use reduced temporary basal rates to balance out the peak insulin timing safely. Why? The reason for using SMB over a higher temporary basal rate is that it allows insulin to be delivered sooner. Thus, avoiding glucose spikes by front-loading insulin delivery. 

Various blog posts have been written over the years regarding SMBs, and links to some can be found below:
* Dana Lewis, [Introducing oref1 and super-microboluses](https://diyps.org/2017/04/30/introducing-oref1-and-super-microboluses-smb-and-what-it-means-compared-to-oref0-the-original-openaps-algorithm/)
* Tim Street, [Understanding SMB and oref1](https://diyps.org/2017/04/30/introducing-oref1-and-super-microboluses-smb-and-what-it-means-compared-to-oref0-the-original-openaps-algorithm/).

### How does 'Max SMB Basal Minutes' limit SMBs?
`Max SMB Basal Minutes` is one of the major limits on how much insulin a single SMB can deliver. The amount of insulin an SMB can deliver is related to the amount of scheduled basal insulin in your "Basal Profile" settings.

Example: Bill is using Trio and has SMBs turned on in the settings. Bill's current basal rate is 1 unit per hour. Bill has `Max SMB Basal minutes` set to the default of 30. Therefore, a single SMB can deliver no more insulin than would be delivered by your basal in 30 minutes, i.e., 0.5 units. 

### What is UAM?
UAM  is a way for the algorithm to recognize that either there is carb absorption or an unaccounted-for increase in glucose levels as a result of more carbs being onboard than entered or as a result of hormonal variation and then dose with it effectively.

To understand the logic behind UAM, have a read of Time Streets blog post [Understanding SMB and oref1](https://diyps.org/2017/04/30/introducing-oref1-and-super-microboluses-smb-and-what-it-means-compared-to-oref0-the-original-openaps-algorithm/).

### How does 'Max UAM SMB Basal Minutes' limit SMBs?
`Max UAM SMB Basal Minutes` limits the size of SMBs that Trio can deliver when it detects an unannounced meal (UAM). The amount of insulin a UAM SMB can deliver is related to the amount of scheduled basal insulin in your "Basal Profile" settings. You can configure this setting to make UAM more or less aggressive in correcting meal spikes.

Example: Bill has SMBs and UAM turned on in the settings. The algorithm has detected unexpected carb absorption and would like to deliver an SMB in response. Bill's current basal rate is 1 unit per hour. Bill has `Max UAM SMB Basal minutes` set to the default of 30. Therefore, a single SMB can deliver no more insulin than would be delivered by your basal in 30 minutes, i.e., 0.5 units. 

### I've turned on SMBs, but every time I receive an SMB, Trio cuts back or zero-temps my basal. Is that normal?
Yes. SMBs effectively borrow insulin from the future to front load insulin delivery to assist in avoiding glucose spikes. Long, low, or zero temporary basal rates are expected to be observed with SMBs activated. This allows the algorithm to balance out the peak insulin timing and avoid hypoglycemia secondary to the increased insulin on board. 

### How do I make SMBs more responsive?
SMBs are limited by your Max `Max SMB Basal Minutes` and `Max UAM SMB Basal Minutes`. The default for both of these settings is 30 minutes. This default is conservative for most users, and it is suggested that this value be increased while monitoring the effect gradually. Raising this value will allow for bigger SMBs, thus making the dosing stronger. You need to decide how much you want to limit (or not limit) your SMBs.

### Why isn't Trio looping when CGM glucose is 40 mg/dl (2.2 mmol/l) or lower?
Trio can’t determine the glucose value when under 40mg/dL (2.2 mmol/L). This is why the CGM apps from Dexcom and Libre are displaying “Low.” A “Low” reading is also sometimes due to a sensor error or a faulty sensor needing replacement. Trio can't safely make a glucose prediction without knowing the glucose value or if it’s rising or falling.

### Why isn't Trio looping or delivering insulin when CGM glucose is 400 mg/dl (22 mmol/l) or higher?
Trio can’t determine the glucose value when over 400mg/dL (22 mmol/L). This is why the CGM apps from Dexcom and Libre display “High.” A “High” reading is also sometimes due to a sensor error or a faulty sensor needing replacement. Trio can't safely make a glucose prediction without knowing the glucose value or if it’s rising or falling.  

## Omnipod FAQs

### What pods work with Trio?
You can use DASH and Eros Omnipod pods with the Loop app. You cannot use Omnipod 5 pods. 

### Do I still need a PDM with Trio?
You do not need the Omnipod Personal Diabetes Manager (PDM); you need the pod supplies. They will pair with only one device at a time. So, a pod is either paired with a PDM or your Trio app on your iPhone. 

In other words, your PDM can stay in the diabetes closet while you are Looping. You cannot use the PDM for a pod activated with the Trio app. That doesn't mean you should get rid of your PDM if you have one. Instead, keep it for backup situations if you lose your phone. 

### Does Trio cause an increase in pod failures?
There is more communication between your phone and the pod than the PDM. This increases the load on the pod battery. Most people have no increase in pod failures. However, it does occasionally happen. Below are some tips to take to limit battery drain:
* The pod state is updated every 3 minutes for DASH and every 5 minutes for Eros. If uncertain communications are detected such that Trio cannot determine if a dosing command sent to the pod was received, the app will try once a minute to get a response.
* If using Eros pods with a RileyLink device. Be mindful of situations that may lead to poor signal. Poor communication between devices may lead to battery drain and contribute to faults.
<br>

## CGM FAQs

### What CGMs are supported by Trio?
The following CGM can be used with Trio:
* Dexcom G5
* Dexcom G6/ONE
* Dexcom G7/ONE+
* Medtronic Enlite (must use compatible pump)
* Libre (limited Models)
>* US Libre 1 10-day sensors via Transmitters
>* US Libre 1 14-day sensors via Transmitters
>* International Libre 1 sensors via Transmitters
>* European Libre 2 sensors via Transmitters
>* European Libre 2 sensors directly via Bluetooth

###What CGM apps can be used with Trio?
**xDrip**
<br>To use xDrip4iOS as a CGM source, you must build it yourself with the same Apple Developer account you used to build your Trio app. Please see the following for instructions on how to build xDrip4iOS yourself [here](../operate/build.md#xdrip4ios-as-cgm-source).  

!!! tip 
    If you use xDrip with the Dexcom G6/ONE, in Trio select 'Dexcom G6' as the CGM source. Trio will intercept glucose readings directly from the transmitter.
    
**Nightscout**
<br>Yes. Nightscout can be used as a remote CGM source in Trio. However, this option should be avoided because it does not keep Trio running in the background like other CGM options. You will have to open Trio manually to make it run loop cycles.  

**Credit: Much of the information in this FAQ has been adapted from Trio Docs, Loop Docs, and OpenAPS Docs, and I would like to acknowledge their contribution to this page's success.** 
