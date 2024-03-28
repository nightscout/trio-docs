# Overview

## What is Open-iAPS?
Open-iAPS is an open-source artificial pancreas system based on the OpenAPS (Oref0) algorithm. Using your inputted settings, carbohydrates, and historical data, it aims to automate insulin delivery to reduce the time spent managing your diabetes. Before starting with Open-iAPS, you should consider alternative commercial options such as the Tandem Control-IQ and Omnipod 5 or other open-source applications like Loop and AndroidAPS. 
>[!IMPORTANT]
><i>Open-iAPS is not approved by any healthcare authority. You build and run this system at your own risk.</i>

## Getting Started
Before starting with Open-iAPS, you should have a basic understanding of what CR, ISF and basal rates are. If you do not have a clear understanding or require some help identifying your settings, please read the appropriate documentation.

To use Open-iAPS, you are required to build the application from the source code. This does not require substantial technical know-how but is a time-consuming process. You may need to carry this out through several sessions on your first attempt.

Upon installation, you will need to configure your settings appropriately. For step-by-step instructions on using the app, follow the [start-up guide](https://www.iaps-app.org/start-up-guide). 

<i>Initially, these are the first two settings you need to configure to activate closed loop in the Open-iAPS app:</i>

1. Enable <b>Closed Loop</b>
<img src="https://github.com/nightscout/Open-iAPS-docs/assets/31315442/73810b4c-bca8-44a3-a17a-35f171cbab9a" width="200" />

2. <b>Max IOB:</b> Enter your value for the maximum allowed Insulin On Board. The default is set to 0.
<img src="https://github.com/nightscout/Open-iAPS-docs/assets/31315442/f0f442b4-1af8-436a-9357-3bce74a045e9" width="200" />

See Configuration for more information on Open-iAPS configuration.
