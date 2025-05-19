## Remote Control Overview

Trio can accept remote commands from *Nightscout* or from *LoopFollow*. There are a variety of options, but the final control of whether remote commands will be enacted rests with the Trio user. They can enable or disable remote control.

!!! warning "*Nightscout* version must be 15.0.2 or newer"
    To properly display the OpenAPS pill with Trio 0.5.x (or newer), your *Nightscout* version must be 15.0.2 (or newer). If you do not see the expected treatments or pills in the *Nightscout* dashboard, follow the steps to [Configure for OpenAPS](#configure-for-openaps).

The most powerful arrangement, for Trio 0.5.x (or newer), is to configure the *LoopFollow* app to use the Trio Remote Control (TRC) setting.

The limited use of remote control with *Nightscout*, i.e., entry of Carb Correction and Temporary Targets when Careportal is authenticated, continues to be supported with Trio.

| *Nightscout* URL or App | Options|
|:--|:--|
| ***Careportal*** | Carb Correction<br>Temporary Target<br>Temporary Target Cancel |

Additional remote capabilities are offered for Trio using the *LoopFollow* app with these versions:

* Trio 0.5.x (or newer)
* *LoopFollow* version 2.4.0 (or newer)


| *LoopFollow* Remote Type | Options|
|:--|:--|
| ***Nightscout*** | Set and Cancel Temp Target |
| **Trio Remote Control** | Meal (Carbs or Carbs & Bolus)<br>Bolus<br>Temp Target<br>Overrides |

??? question "How does this differ from Trio 0.2.x?"
    Trio can use *Nightscout* Careportal to enter `Carb Correction`, and start and cancel `Temporary Target`.
    
    * This was available in Trio 0.2.x and continues to be available in Trio 0.5.x (or newer).

    Trio 0.2.x supported other remote options (using announcements via Careportal). 
    
    * Those options were replaced by the more secure Trio Remote Control for Trio 0.5.x (or newer)
    * **Using announcements to provide remote control of the Trio phone is no longer supported**

- - -

## Trio Remote Control

**Default:** _OFF_

Remote control must be enabled on the Trio phone or no remote information is accepted by the Trio phone.

> You can search for this screen in Trio settings or go through the sequence: Trio, Settings, Features, Remote Control.

Once Remote Control is enabled, a Shared Secret is available. This is only used if you want to [Configure *LoopFollow* Trio Remote Control](#configure-loopfollow-trio-remote-control).

![Trio remote control settings](img/trio-enable-remote-control.png){width="300"}
{align="center"}

When Remote Control is enabled on the Trio app and the *LoopFollow* phone is properly configured, you can add carbs, send boluses, set or cancel overrides or temporary targets from the *LoopFollow* phone to the Trio phone via *Apple* push notifications.

The `SHARED SECRET` should be copied from the Trio phone and added to the [`Shared Secret`](#shared-secret) row of the *LoopFollow* Remote Settings screen as part of the configuration for using *LoopFollow*.

!!! warning "Important"
    The ability for the Trio app to be remotely controlled will be **disabled** when `Enable Remote Control` is turned OFF, even if you have *LoopFollow* configured with the correct shared secret or your *Nightscout* URL has Careportal access. This is for the protection of the Trio user, so that they **always** are the primary controller of their insulin dosing app.

- - -

## *LoopFollow* Overview

Experienced *LoopFollow* users should still read this section - it touches on important configuration requirements for remote control.

The graphic below shows the *LoopFollow* features on the main screen of the app.

![LoopFollow main screen](img/lf-table-overview.png){width="600"}
{align="center"}

### *LoopFollow* Settings

You tap on the settings icon at the bottom right of the toolbar to configure *LoopFollow*. The setting screen is shown in the graphic below.

![LoopFollow settings](img/lf-settings.svg){width="300"}
{align="center"}

### *LoopFollow* Data Source

You provide *LoopFollow* with information about the person you are following. At least one of these must be entered:

* [*Nightscout* URL](#add-nightscout)
* [*Dexcom* Share credentials](#add-dexcom)

#### Add *Nightscout*

!!! tip "*Nightscout* Access"
    It is possible to have your *Nightscout* site readable by the world, in which case you do not need to add a token. If you choose to do that, just ignore references to entering the token below. The status will show up as `OK (Read)`.

    The only exception is if you choose to [Use *LoopFollow* *Nightscout* Remote Control](#use-loopfollow-nightscout-remote-control). In that case, you must have a token with careportal access.

    For more information:
    
    * [Admin Tools in *Nightscout*](https://nightscout.github.io/nightscout/admin_tools/#subjects-and-roles)

The *Nightscout* URL is required to enable display of the Information Table. It is recommended that you secure you *Nightscout* site so a token is required to view it. The type of token depends on the type of remote control desired. The table below indicates the minimum token access for each type of remote control available with Trio. When you enter your credentials, *LoopFollow* tries to reach the site and then provides the status.

| *LoopFollow* Remote Type | Minimum Token Access| *LoopFollow* Status |
|:--|:--|:--|
| **None** | Read | OK (Read) |
| ***Nightscout*** | Read & Careportal | OK (Read & Write) |
| **Trio Remote Control** | Read | OK (Read) |

!!! question "Do I need a token for Trio Remote Contol"
    The security for using *LoopFollow* Trio Remote Contol comes from the Shared Secret and the APNS credentials. Your *Nightscout* site can be readable by the world if you so choose. In that case, no token is required and status will appear as `OK (Read)`.

The graphic below shows the display when you tap on the *Nightscout* Settings row.

To simplify setup, you can copy your *Nightscout* URL (including the token) from the [Admin Tools in *Nightscout*](https://nightscout.github.io/nightscout/admin_tools/#subjects-and-roles). When pasted into *LoopFollow* URL row, the app will automatically extract and fill in both the URL and token.

![enter nightscout credentials](img/lf-data-source-ns.svg){width="300"}
{align="center"}

#### Add *Dexcom*

The graphic below shows the display when you tap on the *Dexcom* Settings row.

> The *Dexcom* Share credentials are optional, but can be useful when the *Nightscout* URL is unavailable.

![enter dexcom credentials](img/lf-data-source-dexcom.svg){width="300"}
{align="center"}

### *LoopFollow* Remote Setting Type 

The Remote Settings row in the *LoopFollow* Settings screen is used to select the type of remote access you wish to use.

![LoopFollow remote settings type](img/lf-trc-selection.jpg){width="300"}
{align="center"}

!!! warning "The Trio Remote Contol option is not available"
    The `Trio Remote Control` option is only available in *LoopFollow* if you have already entered a [*Nightscout* URL](#add-nightscout) with a default profile recognized as a Trio profile. Review [Troubleshooting](#troubleshooting) for possible reasons for not seeing the option.

* *Nightscout* option
    * Remote control with *LoopFollow* is limited to starting and canceling Temp Targets
    * Available with Trio 0.2.x
* Trio Remote Control option
    * Remote control with *LoopFollow* includes adding remote carbs, enacting remote bolus, and starting and canceling Temp Targets and Overrides
    * Requires Trio 0.5.x (or newer) and *LoopFollow* 2.4.x (or newer)
    * Continue with [Configure *LoopFollow* Trio Remote Control](#configure-loopfollow-trio-remote-control) to finish the configuration process

### *LoopFollow* Remote Options

The *LoopFollow* app provides amazing display and alarm capabilities, whether remote control is enabled or not.

It can be used with the Trio or the *Loop* app with the `Nightscout` option for starting and stopping temp targets (Trio) or overrides (`Loop`).

The graphic below shows the top portion of the Remote Settings screen when None, `Nightscout` or `Trio Remote Control` is selected. The lower portion of the screen is found in the [Guardrails](#guardrails) section.

![LoopFollow remote options - all types](img/lf-remote-options.svg){width="400"}
{align="center"}

- - -

## Use *LoopFollow* *Nightscout* Remote Control

If you select *Nightscout* as the Remote Control Type for *LoopFollow*, this enables Temporary Targets to be set and disabled from *LoopFollow*.

> This is the only remote option that works for Trio 0.2.x when using *LoopFollow*.

![LoopFollow remote options - all types](img/lf-nightscout.png){width="300"}
{align="center"}

- - -

## Configure *LoopFollow* Trio Remote Control

> This is supported for Trio 0.5.x (or newer) when using *LoopFollow* 2.4.0 (or newer).

When you select Trio Remote Control as the Remote Type in the *LoopFollow* app, you must fill in the (1) [Shared Secret](#shared-secret), (2) [APNS Key ID](#apns-key-id) and (3) [APNS Key](#apns-key).

| Default Remote Settings | Configured Remote Settings |
|:-:|:-:|
| ![default remote trc settings ](img/lf-trc-empty-control-settings.jpg){width="300"} | ![LoopFollow settings](img/lf-trc-filled-control-settings.png){width="300"} |

### User

The person using the *LoopFollow* app should enter the name they want to show up as having entered this entry. 

* At the current time, this is not used by *LoopFollow* for Trio
* It does show up as a notification on a *Loop* phone when *LoopFollow* is used with the *Loop* app
    * This feature might be added to *LoopFollow* for Trio at a later time

### Shared Secret

This is the unique shared secret that can be generated or entered into the Trio app in the Remote Control screen. The shared secret in Trio and *LoopFollow* must match to provide the ability to remotely send commands to this Trio app.

> Please use a secure secret - the [automatically generated secret](#trio-remote-control) is recommended.

### APNS Key ID

If you previously configured remote control with the *Loop* app, you already have an *Apple* Push Notification System (APNS) Key ID and Key. These were added to the config vars in your *Nightscout* site. See [Existing APNS](#existing-apns). The value of the `LOOP_APNS_KEY_ID` goes here. Be sure to read the [Configure for OpenAPS](#configure-for-openaps) section about steps to make *Nightscout* and *LoopFollow* work with Trio.

If you have never created an APNS (or have lost the credentials), follow the directions in [New APNS](#new-apns) and copy the APNS Key ID into *LoopFollow* and save the value in your Secrets Reference file.

> When creating the APNS, you must be logged in as a developer. The developer ID for the APNS must be the same as the one used for creating your Trio app or remote control will not work.

### APNS Key

If you previously configured remote control with the *Loop* app, you already have an *Apple* Push Notification System (APNS) Key ID and Key. These were added to the config vars in your *Nightscout* site. See [Existing APNS](#existing-apns). The value of the `LOOP_APNS_KEY` goes here.

If you have never created an APNS (or have lost the credentials), follow the directions in [New APNS](#new-apns) and copy the APNS Key into *LoopFollow* and save the value in your Secrets Reference file.

### Guardrails

The maximum allowed entries for Bolus, Carbs, Protein, and Fat are configured in the guardrails section shown in the graphic below. This example is one in which the Shared Secret and APNS values have not yet been added.

![default guardrails](img/lf-trc-guardrails.jpg){width="300"}
{align=center}

### Meal Settings

The user can decide to enable or disable two features independently.

* Meal with Bolus
    * When enabled, a bolus command can be sent at the same time as the meal entry
* Meal with Fat/Protein 
    * When enabled, the user is presented with a Protein and Fat row in addition to the Carbs and Bolus Amount rows

Refer to the graphic in the [Guardrails](#guardrails) section.

### Debug / Info

This section indicates if *Trio* has uploaded required information to *Nightscout*.

The graphic below shows a properly configured *LoopFollow* when the Trio app was built using the Browser Build method.

![shows credentials entered into loopfollow are correct](img/lf-trc-debug-blurred.png){width="300"}
{align=center}

If you have empty rows in the Debug / Info screen, the most likely problem is the default profile is not coming from Trio. See [Update Profile](#update-profile). 
If you took those steps and still have missing rows, return to [Configure *LoopFollow* Trio Remote Control](#configure-loopfollow-trio-remote-control) and try again.

- - -

## Use *LoopFollow* Trio Remote Control

Once the *LoopFollow* phone is configured, and while the Trio phone is handy, test sending Remote Commands. It is good to also have a browser open with the *Nightscout* URL displayed.

Remember to give the system time to update.

The sequence is *LoopFollow* to *Apple Push Notifications* to *Trio*, which uploads to *Nightscout* and then is displayed in the *LoopFollow* main screen.

![loopfollow trio remote control choices](img/lf-trc.jpg){width="300"}
{align=center}

### Remote Meal

***More info coming soon!***

When entering meals and choosing to schedule the meal, any bolus included in the meal is enacted immediately. Only the carb entry is entered according to the schedule.

![scheduled meal warning](img/lf-trc-scheduled-meal.png){width="300"}
{align=center}

### Remote Bolus

***More info coming soon!***

### Temp Target

***More info coming soon!***

### Overrides

***More info coming soon!***

- - -

## *Apple* Push Notifications System (APNS)

### Existing APNS

If you previously configured remote control with the *Loop* app, you already have an *Apple* Push Notification System (APNS) Key ID and Key. These were added to the config vars in your *Nightscout* site.

If you do not have existing APNS Keys, skip ahead to [New APNS](#new-apns).

When you configured APNS for the *Loop* app and saved information in your *Nightscout* config vars, they used the names in the table below. The same APNS Key ID and Key are what you need to add to the *LoopFollow* app in [Configure *LoopFollow* Trio Remote Control](#configure-loopfollow-trio-remote-control).

| <div style="width:200px"></div>Config Var | Format of Config Var Value |
|:--|:--|
| `LOOP_APNS_KEY_ID`|AAAAAAAAAA|
| `LOOP_APNS_KEY`|-----BEGIN PRIVATE KEY-----<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAA<br>-----END PRIVATE KEY-----|

### New APNS

When using Trio, you do not need to add the config vars to *Nightscout* that are required for *Loop* remote control. If you already have them, it doesn't hurt anything, but you do not need to add them to use remote control with Trio.

When using Trio Remote Control with *LoopFollow*, the *Apple* Push Notification System is used directly. The Shared Secret provides additional security.

If you do not have APNS credentials, you need to create a key and grant it access to the &nbsp;<span translate="no">Apple Push Notification Service (APNS)</span>. 

> Note - these directions are copied from *LoopDocs* so it suggests you name the key *Nightscout*. It is probably best to stick with that naming for APNS keys.

!!! info "Reminder"
    This only works with the **paid** Apple Developer ID.

!!! warning "*Apple* changed the APN system"
    *Apple* changed the way APN are created. Your old ones should still work, but it they don't, create new ones and update all the places where they are used.

    When creating new APN keys, you have the option for "Sandbox", "Production" or "Sandbox & Production". Be sure to choose "Sandbox & Production".

1. To get started, go to the `Keys` section under Apple Developer's [`Certificates, Identifiers & Profiles`](https://developer.apple.com/account/resources/authkeys/list) and login with the *Apple ID* associated with your developer team that you used to build the *Trio* app.
2. If not already open in your browser (compare with the below screenshot), 
    - Click on **`Keys`** (located in the left-hand column). 
    - Either click on the blue **`Create a new key`** button **OR** the plus button (<font color="#2997FF">:material-plus-circle:</font>)  to add a new key.
    > ![img/apns-add-key.png](img/apns-add-key.png)
3. In the form that appears, do the following:
    - Click the checkbox for enabling **`Apple Push Notifications service (APNs)`**
    - Enter a name for the key such as `Nightscout` (you can name it however you want, just make sure you know what the key is for by the name you choose).
    - Then click the **`Configure`** button to the right of the name
    - Choose **`Sandbox & Production`** and then **`Save`**
    - Tap on the **`Continue`** button, upper right
  > ![updated instructions for creating and configuring an APNS key](img/key-apns.svg)
4. In the screen that follows, click the blue **`Register`** button.  
   > ![img/apns-register.png](img/apns-register.png)
5. In the screen that follows, click the blue **`Download`** button.  
    This step will download a file with a name that starts with `AuthKey` and ends with `.p8`.
> ![img/apns-download.png](img/apns-download.png)
6. Find your `AuthKey` downloaded file in your downloads folder. It's a good idea to store this file where you can find it again if you need it. 
    The next task is to rename the file so you can open it. 
    Highlight the filename and choose rename, then add ".txt" after ".p8". In other words, modify `AuthKey_AAAAAAAAAA.p8` to `AuthKey_AAAAAAAAAA.p8.txt` and click on `Use .txt` when questioned.
> ![rename the p8 file](img/apns-rename.png){width=200}
{align=center}
7. Double-click to open the `AuthKey_AAAAAAAAAA.p8.txt` file. It will look similar to the screenshot below. You need to highlight **ALL OF THE CONTENTS** of that file and copy it and then paste it both into your Secrets Reference file and into the row for *LoopFollow* [APNS Key](#apns-key). Yes, *allllll* of the contents.  
    So, the easiest way is to:
      * **Click inside that file**
      * Highlight **all** the text, and then
      * Copy **all** the text to the clipboard (Cf. screenshot below).
        * On a *Mac*, press ++command+"A"++ to select all, then press ++command+"C"++ to copy the selection. 
        * On a **PC**, press ++control+"A"++ to select all, then press ++control+"C"++ to copy the selection.

    > ![img/apns-copy-key.png](img/apns-copy-key.png)

8. The APNS Key ID is the 10-character name embedded in the filename: `AuthKey_AAAAAAAAAA.p8.txt`. You can also see it if you return to Apple Developer's [`Certificates, Identifiers & Profiles`](https://developer.apple.com/account/resources/authkeys/list) as highlighted in this graphic. You copy that APNS Key ID and then paste it both into your Secrets Reference file and into the row for *LoopFollow* [APNS Key ID](#apns-key-id)

    > ![APNS KEY ID is highlighted by red rectangle](img/apns-key-id.png)

- - -

## Troubleshooting

This section covers known troubleshooting issues:

* *Nightscout* not displaying Trio data: [Configure for OpenAPS](#configure-for-openaps)
* Was able to select Trio Remote Control in *LoopFollow* but it is no longer working: [Stop *Nightscout* access from the *Loop* app](#stop-nightscout-access-from-the-loop-app)
* Cannot select Trio Remote Control in *LoopFollow*: [Update Profile](#update-profile)

### Configure for OpenAPS

The *Nightscout* version must be 15.0.2 (or newer) to properly display the OpenAPS pill with Trio 0.5.x (or newer). Check your revision: *Nightscout* URL, Menu, scroll to bottom and examine the About section.

If you transitioned from the *Loop* app, you must make some modifications to *Nightscout* before you will be successful viewing your Trio data in your *Nightscout* site.

In *Nightscout*, you need to modify these config vars:

| Config Var | `Loop` |    `Trio` |
|:--|:--|:--|
| `ENABLE` | `loop` | `openaps` |
| `SHOW_PLUGINS` | `loop` | `openaps` |
| `SHOW_FORECAST` | `loop` | `openaps` |

Remember to restart the *Nightscout* server (restart dynos) after updating these variables.

### Stop *Nightscout* access from the *Loop* app

If you were previously running the *Loop* app:

* Remove *Nightscout* from *Loop* Services
* Add *Nightscout* credentials to Trio
    * You need the URL and the API_SECRET.

In addition to this step, you may need to force the profile (from Trio) to upload to *Nightscout* and overwrite the one stored as the default profile in *Nightscout*.

### Update Profile

!!! warning "Must on Trio 0.5.x (or newer)"
    If you are on Trio 0.2.x, you might see the option for Trio Remote Control in *LoopFollow* Remote Settings, but you can't use it. See [Use *LoopFollow* *Nightscout* Remote Control](#use-loopfollow-nightscout-remote-control).

If you were previously running the *Loop* app, take the actions in the [previous section](#stop-nightscout-access-from-the-loop-app) and then force the profile to update.

To force a profile to update to *Nightscout*, go to the Trio app and toggle Allow Uploading to Nightscout off (disable) and then enable it again.

Once the user has toggled "Allow Uploading to Nightscout", *LoopFollow* needs to be refreshed (pull down glucose value to refresh) or re-started in order to fetch the correct information. *LoopFollow* will refresh eventually, but most users are impatient.

If the Debug Info in *LoopFollow* is missing a Device Token or a Bundle ID, as shown on the left side of the graphic, you need to make sure the *Loop* app is no longer uploading to *Nightscout* and force the profile to update.

![LoopFollow debug info indicates a problem](img/lf-force-ns-profile.svg){width=600}
{align=center}

### Trio Remote Control Stops Working

Other signatures that you need to [force the update](#update-profile) are shown in the graphics below - for both these instances, Trio Remote Control (TRC) was working with *LoopFollow* and then stopped working:

| TRC Option Not Allowed | TRC Error |
|:-:|:-:|
| ![cannot select trio remote control ](img/lf-trc-not-shown.png){width="300"} | ![LoopFollow settings](img/lf-trc-error-wrong-profile.png){width="300"} |





- - -

## Build *LoopFollow*

This page is under construction. But here's the link:

[Install LoopFollow](../../../install/ecosystem/loop-follow.md){: target="_blank" }

