# Overview

## What is Trio?
Trio is an open-source artificial pancreas system based on the OpenAPS (Oref0) algorithm. Using your inputted settings, carbohydrates, and historical data, it aims to automate insulin delivery to reduce the time spent managing your diabetes. Before starting with Trio, you should consider alternative commercial options such as the Tandem Control-IQ and Omnipod 5 or other open-source applications like Loop and AndroidAPS. 

:::{important}
_Trio is not approved by any healthcare authority. You build and run this system at your own risk._
:::

## Getting Started
Before starting with Trio, you should understand CR, ISF, and basal rates.

If you do not understand the terminology, please read the appropriate documentation here:

<details>
<summary>CR</summary>
Find more information on Carb Ratio (CR) [here](../settings/configuration/carbratios.md)
</details>

<details>
<summary>ISF</summary>
Find more information on Insulin Sensitivity Factor (ISF) [here](../settings/configuration/insulinsensitivities.md)
</details>

<details>
<summary>Basal</summary>
Find more information on Basal [here](../settings/configuration/basalprofile.md)
</details>

If you require help defining and determining those settings, please seek assistance from your diabetes healthcare team.

To use Trio, you are required to build the application from the source code. This does not require substantial technical know-how but is a time-consuming process. You may need to carry this out through several sessions on your first attempt.

Upon installation, you will need to configure your settings appropriately. For step-by-step instructions on using the app, follow the [start-up guide](http://diy-trio.org/start-up-guide). 

_Initially, these are the first two settings you need to configure to activate closed loop in the Trio app:_

1. Enable **Closed Loop**

2. **Max IOB:** Enter your value for the maximum allowed Insulin On Board. The default is set to 0.

See [Configuration](../settings/configuration) for more information on Trio configuration.
