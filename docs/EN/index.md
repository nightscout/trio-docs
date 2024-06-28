:::{admonition} Work-In-Progress
:class: caution

**PLEASE NOTE THIS DOCUMENTATION IS STILL BEING WRITTEN BY OUR AWESOME COMMUNITY. UNTIL IT IS FINISHED, PLEASE DO NOT SET UP YOUR TRIO BASED ON THIS DOCUMENTATION ALONE. CONTACT THE COMMUNITY ON DISCORD OR FACEBOOK TO MAKE SURE YOU GET IT RIGHT AND STAY SAFE**
:::

# What is Trio?
Trio is an automated insulin delivery system for iOS based on the [OpenAPS algorithm](https://github.com/OpenAPS/oref0) with [adaptations for Trio](https://github.com/nightscout/trio-oref).

The project started as Ivan Valkou's [FreeAPS X](https://github.com/ivalkou/freeaps) implementation of the OpenAPS algorithm for iPhone and later forked and rebranded as iAPS.
Since then, many developers have contributed substantial work, leading to a range of new features and enhancements.

Following the release of version 3.0.0, the project's direction significantly changed due to differing views on development, open source, and peer review. This led to the separation from the [Artificial-Pancreas/iAPS](https://github.com/Artificial-Pancreas/iAPS) repository and the birth of Trio as a distinct entity. This transition marks the project's new phase, symbolizing its evolution and the collaborative development's dynamic nature.

Trio continues to leverage a variety of frameworks from the DIY looping community and remains at the forefront of DIY diabetes management solutions, constantly evolving with valuable contributions from its community.

Before starting with Trio, you should evaluate all your closed-loop options, including:

* Commercial systems such as Medtronic's 780G, Tandem's Control-IQ, or Insulet's Omnipod 5
* Other open-source applications like [Loop](https://loopkit.github.io/loopdocs/) and [AndroidAPS](https://androidaps.readthedocs.io/)

:::{warning}
Trio is a DIY, open-source community project. It has not been evaluated by any regulatory agency and is for use at your own risk.
:::

# Getting Started
Before starting with Trio, you should understand [carb ratio (CR)](https://github.com/nightscout/Trio-docs/blob/Operate-Folder-Updates/docs/EN/settings/configuration/carbratios.md#insulin-carbohydrate-ratio), [insulin sensitivity factor (ISF)](https://github.com/nightscout/trio-docs/blob/Operate-Folder-Updates/docs/EN/settings/configuration/insulinsensitivities.md#insulin-sensitivity-factor), and [basal rates](https://github.com/nightscout/trio-docs/blob/Operate-Folder-Updates/docs/EN/settings/configuration/basalprofile.md#basal-profile). If you have read the documentation and still require help identifying your settings, please seek advice from your healthcare provider.

To use Trio, you are required to build the application from the source code. This does not require substantial technical know-how but is a time-consuming process. You may need several sessions to complete your first build.

Upon installation, you will need to configure your settings appropriately. By default Trio acts no differently than your pump, with the exception that it may recommend temporary basals from time to time. The magic happens by turning on ["Closed Loop"](https://github.com/nightscout/trio-docs/blob/Operate-Folder-Updates/docs/EN/Configuration/Configure.md#closed-loop), enabling [Super Micro Bolus (SMB)](https://github.com/nightscout/trio-docs/blob/Operate-Folder-Updates/docs/EN/settings/configuration/preferences/smbsettings.md#trio-smb-settings) features, and turning on [dynamic features](https://github.com/nightscout/trio-docs/blob/Operate-Folder-Updates/docs/EN/settings/configuration/preferences/dynamicsettings.md#dynamic-settings).

>In general, these are the first three settings you will want to configure as you gain confidence in the app and your settings:
>
>- Enable Closed Loop for automation
>- Increase Max IOB to "average meal bolus + 3x max daily basal"
>- Enable SMB and UAM for automatic bolusing (ensure your ISF is optimized before enabling this)
>See [Configure](https://github.com/nightscout/trio-docs/blob/Operate-Folder-Updates/docs/EN/Configuration/Configure.md#device-configuration) for more information on Trio configuration.

If you are considering a transition from another closed loop system, please read [this section](./Configuration/transition-qa.md) first.

# Contribution
Trio is built by a volunteer community. If you are interested in helping as a programmer, you can contribute to the Trio or OpenAPS code base. Trio is mostly written in SwiftUI, and the OpenAPS algorithm is written in JS.

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

./settings/configuration/autotune.md
./settings/configuration/concepts/autosens-dynamic.md
./settings/configuration/concepts/sigmoid.md
./settings/configuration/concepts/asmb-uam.md
./settings/configuration/preferences/dynamicsettings.md
./settings/configuration/preferences/trio.md
./settings/configuration/preferences/mainsettings.md
./settings/configuration/preferences/othersettings.md
./settings/configuration/preferences/smbsettings.md
./settings/configuration/preferences/targetsettings.md

```

(index-Operate)=

```{toctree}
:caption: Using Trio

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

