## Remote Control

Remote Control using Trio 0.5.x and newer (`dev` branch) is different from the version supplied by Trio 0.2.x and older.

??? tip "Remote Control Changes if Updating from Trio 0.2.x"
    Trio can use Nightscout Careportal to start and cancel Temp Targets.
    
    * This was available in Trio 0.2.x and continues to be available in Trio 0.5.x (and newer).

    Trio 0.2.x supported other remote options (using announcements via Careportal). 
    
    * Those options were replaced by the more secure Trio Remote Control for Trio 0.5.x (or newer). 
    * Trio Remote Control requires the use of the *LoopFollow* app
    * **Using announcements to provide remote control of the Trio phone is no longer supported**

With Trio 0.5.x (and newer), secure remote capabilities are provided using the *LoopFollow* app.

* For specific Trio Remote Control features, please stay on this page
* For more general *LoopFollow* information, this link opens a new page [Loop and Learn: *LoopFollow*](https://www.loopandlearn.org/loop-follow/){: target="_blank" }

The *LoopFollow* Trio Remote Control Screen provides access to:

* Meal (Carbs or Carbs & Bolus)
* Bolus
* Temp Target
* Overrides

![TRC selection tiles](img/lf-trc.jpg){width="500"}
{align="center"}

## *LoopFollow* Overview

Experienced *LoopFollow* users can skip ahead to the [Trio App: Enable Remote Control](#trio-app-enable-remote-control) section.

For those who have never used *LoopFollow*, the graphic below shows the features on the main screen of the app. It can be built using the same procedure as the Trio app, either with Mac-Xcode using the script to download the program or using your *GitHub* account to build from any browser.

![LoopFollow main screen](img/lf-table-overview.png){width="800"}
{align="center"}

You tap on the settings icon at the bottom right of the tool bar to configure *LoopFollow*. The top half of the setttings is shown in the graphic below.

![LoopFollow settings](img/lf-settings-screen.png){width="400"}
{align="center"}

The Remote Settings rows is used to select the type of remote access you wish to use.

![LoopFollow remote settings type](img/lf-trc-selection.jpg){width="400"}
{align="center"}

Most people will select `Trio Remote Control`.

Should you choose Nightscout

* Remote control is limited to starting and canceling Temp Targets
* You must provide the Nightscout URL and [token](https://nightscout.github.io/nightscout/admin_tools/#subjects-and-roles){: target="_blank" } with privileges for at least `careportal` access
* Your Nightscout must be configured for remote control as explained in [Nightscout for Temp Target Control](#nightscout-for-temp-target-control)

- - -

## Trio App: Enable Remote Control
**Default:** _OFF_  

Remote control must be enabled on the Trio phone as well as configured on the *LoopFollow* phone. The Trio screen is shown below. The `SHARED SECRET` should be copied from the Trio phone and added to the [`Shared Secret`](#shared-secret) row of the *LoopFollow* Remote Settings screen.

![Trio remote control settings](img/trio-enable-remote-control.png){width="400"}
{align="center"}

When Remote Control is enabled, you can send boluses, set overrides or temporary targets, add carbs, and other commands to Trio via push notifications.

To ensure security, these commands are protected by a shared secret located on the Trio user's Remote Control menu screen, which must be entered in the *LoopFollow* app.

!!! warning "Important"
    The ability for the Trio app to be remotely controlled will be **disabled** when `Enable Remote Control` is turned OFF even if you have *LoopFollow* configured with the correct shared secret. This is for the protection of the Trio user, that they **always** are the primary controller of their insulin dosing app.

## LoopFollow App: Remote Settings

After selecting Trio Remote Control as the Remote Type, in the *LoopFollow* app, the default screen is visible. You must fill it out with the (1) [Shared Secret](#shared-secret), (2) [APNS Key ID](#apns-key-id) and (3) [APNS Key](#apns-key).

| Default Remote Settings | Configured Remote Settings |
|:-:|:-:|
| ![default remote trc settings ](img/lf-trc-empty-control-settings.jpg){width="400"} | ![LoopFollow settings](img/lf-trc-entry.png){width="400"} |

### User

The person using the *LoopFollow* app should enter the name they want to show up as having entered this entry. 

* At the current time, this is not used by *LoopFollow* for Trio
* It does show up as a notification on a Loop phone when *LoopFollow* is used with Loop
* This feature might be added to *LoopFollow* for Trio at a later time

### Shared Secret

This is the unique shared secret that can be generated or entered into the Trio app in the Remote Control screen. These two secrets in Trio and *LoopFollow* must match to provide the ability to remotely send commands to this Trio app.

> Please use a secure secret - the automatically generated secret is recommended.

### APNS Key ID

See [Nightscout for Temp Target Control](#nightscout-for-temp-target-control). The value of the `LOOP_APNS_KEY_ID` goes here.

### APNS Key

See [Nightscout for Temp Target Control](#nightscout-for-temp-target-control). The value of the `LOOP_APNS_KEY` goes here.

### Guardrails

The maximum allowed entries for Bolus, Carbs, Protein and Fat are configured in the guardrails section.

TODO - add graphic

### Meal Settings

The user can decide to enable two features independently.

* Meal with Bolus
    * When enabled, a bolus command can be sent at the same time as the meal entry
* Meal with Fat/Protein 
    * When enabled, the user is presented with a protein and fat row in addition to the carb and Bolus amount rows

TODO - add graphic

### Debug / Info

This section indicates if the paired remote settings in the Trio and *LoopFollow* apps match the requirements for Apple Push Notifications to work as expected. If all rows are not filled out, the settings need to be updated.

TODO - add graphic

## Nightscout for Temp Target Control

The configuration for Nightscout described in this section is required for either of these cases:

* You selected the remote type of `Nightscout` for your *LoopFollow* settings
* You want to use the Remote Options in the Careportal at your Nightscout site

If you are new to this topic, please refer to [LoopDocs: Remote Configuration](https://loopkit.github.io/loopdocs/nightscout/remote-config/){: target="_blank" } for more details

* The same set of Nightscout config vars are used by Trio and Loop
    * Ignore references to LoopCaregiver in the LoopDocs link, you will use *LoopFollow* or the Nightscout `Careportal`
* The Apple Push Notification (APNS) config vars must be configured for the *Apple* developer ID (`LOOP_DEVELOPER_TEAM_ID` in the table below) of the person who builds the Trio app
* The first two values in this table are the same ones added to the *LoopFollow* app when configuring the [LoopFollow App: Remote Settings](#loopfollow app-remote-settings)

| Build Method | Config Var | Format of Config Var Value |
|:-:|:-:|:--|
| All | `LOOP_APNS_KEY_ID`|AAAAAAAAAA|
| All | `LOOP_APNS_KEY`|-----BEGIN PRIVATE KEY-----<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAA<br>-----END PRIVATE KEY-----|
| All | `LOOP_DEVELOPER_TEAM_ID`|AAAAAAAAAA|
| Browser Build ONLY | `LOOP_PUSH_SERVER_ENVIRONMENT`| production| 

* If you built the Trio app with Browser Build, you must configure all 4
* If you built the Trio app with Mac-Xcode, you do not include `LOOP_PUSH_SERVER_ENVIRONMENT`

## Available Figures

These figures are uploaded to the img folder but not yet incorporated in the page.

Alt Text: enter ns and dexcom credentials

This one - the only privilege needed is read for TRC, but read/write for Nightscout.

Dexcom is useful for fall back. Nightscout is used by default.

![enter ns and dexcom credentials](img/lf-config-data-source.png){width="500"}

Alt Text: default guardrails with no missing secret and apns values

![default guardrails with no missing secret and apns values](img/lf-trc-guardrails.jpg){width="500"}

Alt Text: shows credentials entered into loopfollow are correct

![shows credentials entered into loopfollow are correct](img/lf-trc-debug-blurred.png){width="500"}

Alt Text: scheduled meal warning

![scheduled meal warning](img/lf-trc-scheduled-meal.png){width="500"}
