# Overview

## What is Open-iAPS?
Open-iAPS is an open-source artificial pancreas system based on the OpenAPS (Oref0) algorithm. Using your inputted settings, carbohydrates, and historical data, it aims to automate insulin delivery to reduce the time spent managing your diabetes. Before starting with Open-iAPS, you should consider alternative commercial options such as the Tandem Control-IQ and Omnipod 5 or other open-source applications like Loop and AndroidAPS. 

:::{important}
_Open-iAPS is not approved by any healthcare authority. You build and run this system at your own risk._
:::

## Getting Started
Before starting with Open-iAPS, you should understand CR, ISF, and basal rates.

If you do not understand the terminology, please read the appropriate documentation here:

:::{admonition} CR
:class: see also, dropdown
Find more information on Carb Ratio (CR) [here](/docs/EN/settings/configuration/carbratios.md)
:::

:::{admonition} ISF
:class: see also, dropdown
Find more information on Insulin Sensitivity Factor (ISF) [here](/docs/EN/settings/configuration/insulinsensitivities.md)
:::

:::{admonition} Basal
:class: see also, dropdown
Find more information on Basal [here](/docs/EN/settings/configuration/basalprofile.md)
:::

If you require help defining and determining those settings, please seek assistance from your diabetes educator.

To use Open-iAPS, you are required to build the application from the source code. This does not require substantial technical know-how but is a time-consuming process. You may need to carry this out through several sessions on your first attempt.

Upon installation, you will need to configure your settings appropriately. For step-by-step instructions on using the app, follow the [start-up guide](https://www.iaps-app.org/start-up-guide). 

_Initially, these are the first two settings you need to configure to activate closed loop in the Open-iAPS app:_

1. Enable **Closed Loop**
<img src="https://github.com/nightscout/Open-iAPS-docs/assets/31315442/73810b4c-bca8-44a3-a17a-35f171cbab9a" width="200" />

2. **Max IOB:** Enter your value for the maximum allowed Insulin On Board. The default is set to 0.
<img src="https://github.com/nightscout/Open-iAPS-docs/assets/31315442/f0f442b4-1af8-436a-9357-3bce74a045e9" width="200" />

See Configuration for more information on Open-iAPS configuration.
