## Remote Control

Secure remote capabilities are offered for Trio using the *LoopFollow* app with these versions:

* Trio 0.5.x (and newer)
* *LoopFollow* version 2.4.0 (and newer)

The *LoopFollow* Trio Remote Control screen provides access to:

* Meal (Carbs or Carbs & Bolus)
* Bolus
* Temp Target
* Overrides

![TRC selection tiles](img/lf-trc.jpg){width="500"}
{align="center"}

To ensure security, these commands are protected by a shared secret located on the Trio user's Remote Control menu screen, which must be entered in the *LoopFollow* app. The Trio app is the primary controller of whether remote commands are enabled or disabled.

!!! question "How does this differ from Trio 0.2.x?"
    Remote Control using Trio 0.5.x and newer (`dev` branch) is different from the version supplied by Trio 0.2.x and older.

    ??? tip "Remote Control Changes if Updating from Trio 0.2.x"
        Trio can use Nightscout Careportal to start and cancel Temp Targets.
        
        * This was available in Trio 0.2.x and continues to be available in Trio 0.5.x (and newer).

        Trio 0.2.x supported other remote options (using announcements via Careportal). 
        
        * Those options were replaced by the more secure Trio Remote Control for Trio 0.5.x (or newer). 
        * Trio Remote Control requires the use of the *LoopFollow* app version 2.4.0 or newer
        * **Using announcements to provide remote control of the Trio phone is no longer supported**

- - -

## *LoopFollow* Overview

Experienced *LoopFollow* users should still read this section - it touches on important configuration requirements for remote control.

The graphic below shows the *LoopFollow* features on the main screen of the app.

![LoopFollow main screen](img/lf-table-overview.png){width="800"}
{align="center"}

### *LoopFollow* Settings

You tap on the settings icon at the bottom right of the toolbar to configure *LoopFollow*. The setting screen is shown in the graphic below.

![LoopFollow settings](img/lf-settings.svg){width="400"}
{align="center"}

### Add Data Source for *LoopFollow*

You provide *LoopFollow* with information about the person you are following. At least one of these must be entered:

* [*Nightscout* URL with access token](#add-nightscout)
* [Dexcom Share credentials](#add-dexcom)

#### Add Nightscout

The *Nightscout* URL with an appropriate token is required:

* To enable display of the Information Table
* To configure remote control using `Nightscout` or `Trio Remote Control`
    * `Nightscout` requires a minimum token of `readable` and `careportal`
    * `Trio Remote Control` requires a minimum token of `readable`

The graphic below shows the Data Settings display when you tap on the Nightscout Settings row of *LoopFollow* Settings.

To simplify setup, you can copy your Nightscout URL (including the token) from the [Admin Tools in Nightscout](https://nightscout.github.io/nightscout/admin_tools/#subjects-and-roles). When pasted into *LoopFollow* URL row, the app will automatically extract and fill in both the URL and token.

![enter nightscout credentials](img/lf-data-source-ns.svg){width="400"}
{align="center"}

#### Nightscout Status

Wait a few seconds after entering the URL to observe the Status. As long as you see `OK`, the Information Table is displayed.

| Status | (Token Type) | Comment |
|:-:|:-:|:--|
| OK | (Admin) | Works for any kind of remote control |
| OK | (Read & Write) | Required for `Nightscout` remote control<br>Works for any kind of remote control |
| OK | (Read) | Required for `Trio Remote Control` |

> To use Trio Remote Control, your Nightscout authentication token only needs read access, but you must have *Apple* Push Notification System (APNS) keys configured.

**Potential Status Error messages:**

* Invalid URL
* Network Error
* Invalid Token
* Token Required
* Site Not Found
* Address Empty
* Unknown Error

#### Add Dexcom

The graphic below shows the Data Settings display when you tap on the Dexcom Settings row of *LoopFollow* Settings.

> The Dexcom Share credentials are optional, but can be useful when the *Nightscout* URL is unavailable.

![enter dexcom credentials](img/lf-data-source-dexcom.svg){width="400"}
{align="center"}

- - -

## Trio App: Enable Remote Control

**Default:** _OFF_

When you configure remote control, you should have access to the *LoopFollow* phone and the *Trio* phone and test that it works as expected.

Remote control must be enabled on the Trio phone as well as configured on the *LoopFollow* phone. The Trio screen is shown below.

> You can search for this screen in Trio settings or go through the sequence: Trio, Settings, Features, Remote Control.

The `SHARED SECRET` should be copied from the Trio phone and added to the [`Shared Secret`](#shared-secret) row of the *LoopFollow* Remote Settings screen.

![Trio remote control settings](img/trio-enable-remote-control.png){width="400"}
{align="center"}

When Remote Control is enabled, you can send boluses, set overrides or temporary targets, add carbs, and other commands to Trio via push notifications.

!!! warning "Important"
    The ability for the Trio app to be remotely controlled will be **disabled** when `Enable Remote Control` is turned OFF, even if you have *LoopFollow* configured with the correct shared secret. This is for the protection of the Trio user, so that they **always** are the primary controller of their insulin dosing app.

- - -

## Select Type of Remote Setting for *LoopFollow*

The Remote Settings row in the *LoopFollow* Settings screen is used to select the type of remote access you wish to use.

![LoopFollow remote settings type](img/lf-trc-selection.jpg){width="400"}
{align="center"}

> WARNING: The `Trio Remote Control` option is only available if you have already entered a [Nightscout URL](#add-nightscout) that is recognized as a Trio site.

* Trio Remote Control
    * Continue with [LoopFollow App: Trio Remote Control](#loopfollow-app-trio-remote-control) to finish the configuration process
* Nightscout
    * Remote control is limited to starting and canceling Temp Targets
    * Your Nightscout must be configured for remote control as explained in [Nightscout for Temp Target Control](#nightscout-for-temp-target-control)

### Remote Options

The *LoopFollow* app provides amazing display and alarm capabilities, whether remote control is enabled or not.

It can be used with the Trio or the *Loop* app with the `Nightscout` option for starting and stopping temp targets (Trio) or overrides (`Loop`).

The graphic below shows the top portion of the Remote Settings screen when None, `Nightscout` or `Trio Remote Control` is selected. The lower portion of the screen is found in the [Guardrails](#guardrails) section.

![LoopFollow remote options - all types](img/lf-remote-options.svg){width="600"}
{align="center"}

## LoopFollow App: Trio Remote Control

When you select Trio Remote Control as the Remote Type in the *LoopFollow* app, you must fill in the (1) [Shared Secret](#shared-secret), (2) [APNS Key ID](#apns-key-id) and (3) [APNS Key](#apns-key).

| Default Remote Settings | Configured Remote Settings |
|:-:|:-:|
| ![default remote trc settings ](img/lf-trc-empty-control-settings.jpg){width="400"} | ![LoopFollow settings](img/lf-trc-filled-control-settings.png){width="400"} |

### User

The person using the *LoopFollow* app should enter the name they want to show up as having entered this entry. 

* At the current time, this is not used by *LoopFollow* for Trio
* It does show up as a notification on a *Loop* phone when *LoopFollow* is used with the *Loop* app
    * This feature might be added to *LoopFollow* for Trio at a later time

### Shared Secret

This is the unique shared secret that can be generated or entered into the Trio app in the Remote Control screen. These shared secret in Trio and *LoopFollow* must match to provide the ability to remotely send commands to this Trio app.

> Please use a secure secret - the automatically generated secret is recommended.

### APNS Key ID

See [Nightscout for Temp Target Control](#nightscout-for-temp-target-control). The value of the `LOOP_APNS_KEY_ID` goes here.

### APNS Key

See [Nightscout for Temp Target Control](#nightscout-for-temp-target-control). The value of the `LOOP_APNS_KEY` goes here.

### Guardrails

The maximum allowed entries for Bolus, Carbs, Protein and Fat are configured in the guardrails section show in the graphic below. This example is one in which the Shared Secret and APNS values have not yet been added.

![default guardrails](img/lf-trc-guardrails.jpg){width="500"}

### Meal Settings

The user can decide to enable or disable two features independently.

* Meal with Bolus
    * When enabled, a bolus command can be sent at the same time as the meal entry
* Meal with Fat/Protein 
    * When enabled, the user is presented with a Protein and Fat row in addition to the carb and Bolus amount rows

Refer to the graphic in the [Guardrails](#guardrails) section.

### Debug / Info

This section indicates if the *LoopFollow* app entries match the Shared Secret in the Trio phone and contain the valid Apple Push Notification Values. If all rows are not filled out, the settings need to be updated. Return to [LoopFollow App: Trio Remote Control](#loopfollow-app-trio-remote-control) and try again.

Refer to the graphic in the [Guardrails](#guardrails) section to view an example when the Shared Secret and APNS values have not been entered.

The graphic below shows a properly configured *LoopFollow* when the Trio app was built using the Browser Build method.

![shows credentials entered into loopfollow are correct](img/lf-trc-debug-blurred.png){width="500"}

- - -

## Using Trio Remote Control

Once the *LoopFollow* phone is configured, and while the Trio phone is handy, test sending Remote Commands. It is good to also have a browser open with the Nightscout URL displayed.

Remember to give the system time to update.

The sequence is *LoopFollow* to *Apple Push Notifications* to *Trio* which uploads to *Nightscout* and then is displayed in the *LoopFollow* main screen.

### Remote Meal

***More info coming soon!***

When entering meals and choosing to schedule the meal, any bolus included in the meal is enacted immediately. Only the carb entry is entered according to the schedule.

![scheduled meal warning](img/lf-trc-scheduled-meal.png){width="500"}

### Remote Bolus

***More info coming soon!***

### Temp Target

***More info coming soon!***

### Overrides


***More info coming soon!***


- - -

## Nightscout for Temp Target Control

The configuration for Nightscout described in this section is required for either of these cases:

* You selected the remote type of `Nightscout` for your *LoopFollow* settings
* You want to use the Remote Options in the Careportal at your Nightscout site

If you are new to this topic, please refer to [LoopDocs: Remote Configuration](https://loopkit.github.io/loopdocs/nightscout/remote-config/) for more details

* The same set of Nightscout config vars is used by Trio and Loop
    * Ignore references to LoopCaregiver in the LoopDocs link, you will use *LoopFollow* or the Nightscout `Careportal`
* The Apple Push Notification (APNS) config vars must be configured for the *Apple* developer ID of the person who builds the Trio app (`LOOP_DEVELOPER_TEAM_ID` in the table below)
* The first two values in this table are the same ones added to the *LoopFollow* app when configuring the [LoopFollow App: Remote Settings](#loopfollow-app-remote-settings)

| Build<br>Method | <div style="width:220px"></div> Config Var | Format of Config Var Value |
|:-:|:--|:--|
| Any | `LOOP_APNS_KEY_ID`|AAAAAAAAAA|
| Any | `LOOP_APNS_KEY`|-----BEGIN PRIVATE KEY-----<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAA<br>-----END PRIVATE KEY-----|
| Any | `LOOP_DEVELOPER_TEAM_ID`|AAAAAAAAAA|
| Browser<br>ONLY | `LOOP_PUSH_SERVER_ENVIRONMENT`| production| 

* If you built the Trio app with Browser Build, you must configure all 4
* If you built the Trio app with Mac-Xcode, you do not include `LOOP_PUSH_SERVER_ENVIRONMENT`

- - -

## Build *LoopFollow*

This page is under construction. But here's the link:

[Install LoopFollow](../../../install/ecosystem/loop-follow.md){: target="_blank" }