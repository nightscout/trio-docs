# Overview

## What is iAPS?
iAPS is an open source artifical pancrease system based on the OpenAPS algorithm. Using your inputted settings, carbohydrates and historical data, it aims to automate insulin delivery to reduce the time spend managing your diabetes. Before starting with iAPS, you should consider alternative commercial options such as the Tandem IQ and Omnipod 5, or other open source applications like Loop and AndroidAPS. iAPS is not approved by any health care authority. You are building and running this system at your own risk.

## Getting Started
Before starting with iAPS, you should have a basic understanding of what ICR, ISF and basal rates are. If you do not have a clear understanding, or require some help identifying your settings, please read the appropriate documentation.

To use iAPS, you are required to build the application from the source code. This does not require substantial technical know-how but is a time consuming process. You may need to carry this out through several sessions on your first attempt.

Upon installation, you will need to configure your settings appropriately. By default iAPS acts no different than that of your pump, with the exception that it may recommend temporary basals from time to time. The magic happens by turning on "Closed Loop", enabling automatic bolus features, and turning on autotune. In general, these are the first three settings you will want to configure as you gain confidence in the app and your settings:

- Enable Closed Loop for automation
- Increase Max IOB via "average mealbolus + 3x max daily basal"
- Enable SMB and UAM for automatic bolusing (ensure your ISF is optimized before enabling this)
See Configure for more information on iAPS configuration.
