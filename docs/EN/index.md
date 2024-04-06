:::{admonition} Work-In-Progress
:class: caution

**PLEASE NOTE THIS DOCUMENTATION IS STILL BEING WRITTEN BY OUR AWESOME COMMUNITY. UNTIL IT IS FINISHED, PLEASE DO NOT SET UP YOUR OPEN-iAPS BASED ON THIS DOCUMENTATION ALONE. CONTACT THE COMMUNITY ON DISCORD OR FACEBOOK TO MAKE SURE YOU GET IT RIGHT AND STAY SAFE**
:::

# What is Open-iAPS?
Open-iAPS is an open-source artificial pancreas system based on the [OpenAPS](https://openaps.readthedocs.io/en/latest/) algorithm. 

* Using your personal settings, glucose values, meal inputs, and historical data, the app automates insulin delivery
* This reduces the time you spend managing your diabetes and, in many cases, provides better sleep and better glucose control

Before starting with Open-iAPS, you should evaluate your closed-loop options, including:

* Commercial systems such as Medtronic's 780G, Tandem's Control-IQ, or Insulet's Omnipod 5
* Other open-source applications like Loop and AndroidAPS

Open-iAPS is not approved by any healthcare authority. You build and run this system at your own risk.

# Getting Started
Before starting with Open-iAPS, you should understand [carb ratio (CR)](https://github.com/nightscout/Open-iAPS-docs/blob/Operate-Folder-Updates/docs/EN/settings/configuration/carbratios.md#insulin-carbohydrate-ratio), [insulin sensitivity factor (ISF)](https://github.com/nightscout/Open-iAPS-docs/blob/Operate-Folder-Updates/docs/EN/settings/configuration/insulinsensitivities.md#insulin-sensitivity-factor), and [basal rates](https://github.com/nightscout/Open-iAPS-docs/blob/Operate-Folder-Updates/docs/EN/settings/configuration/basalprofile.md#basal-profile). If you have read the documentation and still require help identifying your settings, please seek advice from your healthcare provider.

To use Open-iAPS, you are required to build the application from the source code. This does not require substantial technical know-how but is a time-consuming process. You may need several sessions to complete your first build.

Upon installation, you will need to configure your settings appropriately. By default Open-iAPS acts no differently than your pump, with the exception that it may recommend temporary basals from time to time. The magic happens by turning on ["Closed Loop"](https://github.com/nightscout/Open-iAPS-docs/blob/Operate-Folder-Updates/docs/EN/Configuration/Configure.md#closed-loop), enabling [Super Micro Bolus (SMB)](https://github.com/nightscout/Open-iAPS-docs/blob/Operate-Folder-Updates/docs/EN/settings/configuration/preferences/smbsettings.md#open-iaps-smb-settings) features, and turning on [dynamic features](https://github.com/nightscout/Open-iAPS-docs/blob/Operate-Folder-Updates/docs/EN/settings/configuration/preferences/dynamicsettings.md#dynamic-settings).

>In general, these are the first three settings you will want to configure as you gain confidence in the app and your settings:
>
>- Enable Closed Loop for automation
>- Increase Max IOB to "average meal bolus + 3x max daily basal"
>- Enable SMB and UAM for automatic bolusing (ensure your ISF is optimized before enabling this)
>See [Configure](https://github.com/nightscout/Open-iAPS-docs/blob/Operate-Folder-Updates/docs/EN/Configuration/Configure.md#device-configuration) for more information on Open-iAPS configuration.

If you are considering a transition from another closed loop system, please read [this section](./Configuration/transition-qa.md) first.

# Contribution
Open-iAPS is built by a volunteer community. If you are interested in helping as a programmer, you can contribute to the Open-iAPS or OpenAPS code base. Open-iAPS is mostly written in SwiftUI, and the OpenAPS algorithm is written in JS.

You can also provide support in online support groups by helping users adjust their settings and troubleshoot common errors.


(index-Overview)=

```{toctree}
:caption: Overview
:maxdepth: 2

./Getting-Started/Overview.md
./Getting-Started/iphone.md
./Getting-Started/pump.md
./settings/devices/cgm.md

```
<!---

(index-Analyze)=

```{toctree}
:caption: Analyze

./Analyze/EvaluateBasal.md
./Analyze/EvaluateCR.md

```
--->
(index-Configuration)=

```{toctree}
:caption: Device Configuration

./Configuration/Configure.md
./Configuration/Devices.md
./Configuration/transition-qa.md

```
(index-Settings-Basics)=

```{toctree}
:caption: Basic Settings

./settings/configuration/autotune.md
./settings/configuration/basalprofile.md
./settings/configuration/carbratios.md
./settings/configuration/insulinsensitivites.md
./settings/configuration/pumpsettings.md
./settings/configuration/targetglucose.md
./settings/devices/cgm.md
./settings/devices/pump.md
./settings/services/applehealth.md
./settings/services/fatprotein.md
./settings/services/nightscout.md
./settings/services/notifications.md

```

(index-Settings-Advanced)=

```{toctree}
:caption: Advanced Settings

./settings/configuration/concepts/autosens-dynamic.md
./settings/configuration/concepts/sigmoid.md
./settings/configuration/concepts/asmb-uam.md
./settings/configuration/preferences/dynamicsettings.md
./settings/configuration/preferences/Open-iAPS.md
./settings/configuration/preferences/mainsettings.md
./settings/configuration/preferences/othersettings.md
./settings/configuration/preferences/smbsettings.md
./settings/configuration/preferences/targetsettings.md

```

(index-Operate)=

```{toctree}
:caption: Using Open-iAPS

Build <./operate/build.md>

Customizations <./operate/customize.md>

Interface <./operate/interface.md>

Temp Target <./operate/temptarget.md>

Troubleshoot <./operate/troubleshoot.md>

```


(index-resources)=

```{toctree}
:caption: Resources

Other AIDs <./resources/alternative.md>

Citations <./resources/citations.md>

```

