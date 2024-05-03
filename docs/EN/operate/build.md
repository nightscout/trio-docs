# Build and Update

**Jump to...**\
Build with [GitHub](#build-open-iaps-with-github) | [Xcode](#build-open-iaps-with-xcode) | [Script](#build-open-iaps-with-script)\
Update with [GitHub](#update-open-iaps-with-github) | [Xcode](#update-open-iaps-with-xcode) | [Source Control](#update-open-iaps-with-source-control) | [CLI](#update-open-iaps-with-cli)

## Build Open-iAPS with GitHub

The Open-iAPS repository contains instructions for building the Open-iAPS app using a browser and GitHub. More detailed instructions are also available in Loopdocs.

* [GitHub Build Instructions](https://github.com/nightscout/Open-iAPS/blob/main/fastlane/testflight.md)
* [LoopDocs: GitHub Build First-Time](https://loopkit.github.io/loopdocs/gh-actions/gh-first-time/)
* [LoopDocs: GitHub Build Other Apps](https://loopkit.github.io/loopdocs/gh-actions/gh-first-time/)


:::{admonition} If you use the LoopDocs instructions, you will need the following information to build Open-iAPS (instead of Loop)
:class: tip

* Fork from: [https://github.com/nightscout/Open-iAPS](https://github.com/nightscout/Open-iAPS)
* `Identifier Names` will be: `FreeAPS`, `FreeAPSWatch`, `FreeAPSWatch WatchKit Extension`, `LiveActivityExtension`
* `Identifiers` will be:
    * `org.nightscout.TEAMID.openiaps`
    * `org.nightscout.TEAMID.openiaps.watchkitapp`
    * `org.nightscout.TEAMID.openiaps.watchkitapp.watchkitextension`
    * `org.nightscout.TEAMID.openiaps.LiveActivity`
* The `App Group` name is the same as for Loop: `group.com.TEAMID.loopkit.LoopGroup`
* You must add this `App Group` to all 4 identifiers
* The `FreeAPS Identifier`, in addition to the `App Group`, must also have: `HealthKit` and `NFC Tag Reading` enabled (which should be automatic)
* In `App Store Connect`, the `Bundle ID` for Open-iAPS will be: `org.nightscout.TEAMID.openiaps`
:::

### One-Time Update to Display Branch And Commit in Testflight

The Open-iAPS build can be configured to display the branch name and commit ID as test notes in TestFlight.

However, you must take action for that to happen.

First build Open-iAPS (at least) one time using Browser Build and wait for it to appear on [Apple App Store Connect](https://appstoreconnect.apple.com/apps).

* Tap on the TestFlight tab
* Choose any build to open a new detailed screen for that build
* In the Test Details section, type anything you want

After you have done this one-time step, each successive build will include the branch name and commit automatically.

You can add additional tests notes for any build if you desire.

## Update Open-iAPS with GitHub

Open your fork at your GitHub username.

* Look to see if your fork is up to date
* If your fork shows that your branch is behind, sync the branch to get the latest updates
* Before building, you can [Verify Open-iAPS Version](#verify-open-iaps-version)

If you selected a GitHub Personal Access Token (GH_PAT) that never expires, select Actions: 4. Build Open-iAPS and wait about an hour for your updated app to appear in TestFlight.

If your token has expired, create a new one (and set it to "never expire") and update the GH_PAT in your Open-iAPS secrets. Then, you can build your updated code.

## Distribution Certificates

When you first build using GitHub, a Distribution Certificate is generated. It typically is valid for one year. You should get an email from Apple when you are within 30 days of that certificate expiring. When it expires, you can no longer build a new app. (Existing apps in TestFlight are not affected, they get the full 90 days.)

The directions to renew your Distribution Certificate are found in [LoopDocs: Renew Certificate](https://loopkit.github.io/loopdocs/gh-actions/gh-update/#renew-certificate).

## Build Open-iAPS with Xcode

The recommendation is to use the [**OiBuildSelectScript**](#build-open-iaps-with-script) to build your code.

### Build Open-iAPS with Script

The **OiBuildSelectScript** is similar to the script used to build Loop. If you need it, extensive instructions for that script are provided at these links: [LoopDocs: Build Select Script](https://loopkit.github.io/loopdocs/build/step14/#build-select-script) and [Loop and Learn: Build Select Script](https://www.loopandlearn.org/build-select/).

The **OiBuildSelectScript** offers the choice to:

1. [Build Open-iAPS](#build-open-iaps)
2. [Build Related Apps](#build-related-apps)
3. [Run Maintenance Utilities](#run-maintenance-utilities)
4. [Customize Open-iAPS](#customize-open-iaps)
5. Exit Script

To execute the **OiBuildSelectScript**, open a terminal on your Mac and copy and paste the command below into the terminal. Then, read and follow the directions. 

```
/bin/bash -c "$(curl -fsSL \
  https://raw.githubusercontent.com/loopandlearn/lnl-scripts/main/OiBuildSelectScript.sh)"
```

#### Build Open-iAPS

When you select **Build Open-iAPS**, you will be provided with a choice of branches with information to guide your selection and URL for documentation. This script will then download a fresh copy of your selected branch and guide you through building with Xcode on your Mac.

* Once the download completes, the script will also
    * Create the automatic signing file
    * Offer to remove provisioning profiles from your computer to ensure the build will last an entire year
    * Provide instructions for how to build the app once Xcode opens
    * Open Xcode with your new download.
* At this point the main menu is displayed again for you to select another option or to exit the script

The download is placed in your `Downloads` folder in a directory called `BuildOpen-iAPS`. The downloaded clone is found in a folder with the branch name, date, and time encoded.

#### Build Related Apps

When you select **Build Related Apps**, you will be provided with a choice of apps that users of Open-iAPS often use. Once you make your selection, the script will provide similar steps to download and build the selected app.

The choices are:

1. Build Loop Follow
2. Build xDrip4iOS
3. Build Glucose Direct
4. Return to Menu

#### Run Maintenance Utilities

When you select **Run Maintenance Utilities**, you will be provided with a choice of utilties helpful for Mac builders.

The following options are offered:

1. Delete Old Downloads
1. Clean Derived Data
1. Xcode Cleanup (The Big One)
1. Return to Menu

For more information, refer to [Loop and Learn: Maintenance Utitilites](https://www.loopandlearn.org/build-select/#utilities-disk) documentation.

#### Customize Open-iAPS

When you select **Customize Open-iAPS**, you will be provided with a choice of customization options:

1. [Change Default to Upload Dexcom Readings](https://www.loopandlearn.org/custom-code/#dexcom-remote-enable)
2. [Disable Authentication Requirement](https://www.loopandlearn.org/custom-code/#disable-authentication)
3. Return to Menu

The customizations are a subset of those provided for the Loop app. Some of the code in Open-iAPS is shared with Loop so these customizations are common. The two that are used by Open-iAPS have links to the Loop and Learn documentation in the list above.

#### Build Errors

If you encounter any build issues, please look at the [LoopDocs Build](https://loopkit.github.io/loopdocs/build/build_errors/) errors page. Only some things on that page are relevant for building Open-iAPS, but many potential issues will likely be covered there. You will also get helpful advice about what info to provide if you need to ask for help. When you have identified the error message(s), you can use the search tool in LoopDocs to see if your error is mentioned.

If you need it, you are most likely to get help in one of these groups:

* [Discord: Open-iAPS channel](https://discord.gg/ptkk2Y264Z)
* [Facebook group: Open-iAPS](https://www.facebook.com/groups/1351938092206709)
* Facebook groups like [Loop and Learn](https://www.facebook.com/groups/LOOPandLEARN) and [Looped](https://www.facebook.com/groups/1782449781971680) primarily focus on Loop but offer a wide variety of support surrounding all types of DIY Looping.

### xDrip4iOS or Glucose Direct as CGM Source

:::{Important}
LibreTransmitter is provided as part of Open-iAPS, so you are not required to use either xDrip4iOS or Glucose Direct to interact with your compatible Libre sensor using Open-iAPS.
:::

If you want to use xDrip4iOS or Glucose Direct as a CGM source via “shared app group,” you must also build that app from a source with the same developer ID used for building Open-iAPS. Scripts are available for these apps as well. All scripts follow the same download and build pattern and configure automatic signing files for you.

The download is placed in your `Downloads` folder in a directory called `BuildxDrip4iOS` or `BuildGlucoseDirect`, respectively. The downloaded clone is found in a folder with the branch name, date, and time encoded.

These can be accessed using the [**OiBuildSelectScript**](#build-open-iaps-with-script) menu options mentioned above. Or you can run each script individually.

#### xDrip4iOS

```
/bin/bash -c "$(curl -fsSL \
  https://raw.githubusercontent.com/loopandlearn/lnl-scripts/main/BuildxDrip4iOS.sh)"
```

#### Glucose Direct

```
/bin/bash -c "$(curl -fsSL \
  https://raw.githubusercontent.com/loopandlearn/lnl-scripts/main/BuildGlucoseDirect.sh)"
```

### Alternative Branch

Sometimes, specific branches are offered for testing. Any desired branch can be cloned using the **Build Open-iAPS** script. After the final quote of the script command, add a space, hyphen, space, and branch_name. An example is shown below: replace `branch_name` with your desired branch. Note that specific branches like this are not deleted as part of the `Delete Old Downloads` utility discussed in [Maintenance Utilities](#maintenance-utilities).

```
/bin/bash -c "$(curl -fsSL \
  https://raw.githubusercontent.com/loopandlearn/lnl-scripts/main/BuildOpen-iAPS.sh)" - branch_name
```

## Update Open-iAPS with Xcode

The recommendation is to use the Xcode Source Control features to update your code.

If you prefer the command line interface, skip ahead to [Update Open-iAPS with CLI](#update-open-iaps-with-cli).

### Update Open-iAPS with Source Control

**Note** Released code is found in the `main` branch. These figures show the older name of `master` rather than `main`. 

Open Xcode. If your Open-iAPS (FreeAPS) workspace is not already open, you can usually find it in the recent projects, as shown in the graphic below. You can also pull down the Xcode menu for `File`, select `Open Recent`, and find your workspace.

![Update Open-iAPS with Source Control-welcome](https://github.com/nightscout/Open-iAPS-docs/assets/31315442/024fc3f9-6bca-475f-b270-17d43da4a4d8){width="600"}
{align="center"}

Refer to the graphic below:

1. Click Source Control
2. Choose `Fetch changes`

![Update Open-iAPS with Source Control-fetch changes](https://github.com/nightscout/Open-iAPS-docs/assets/31315442/0356efea-351c-4d31-89e6-d04ffee5bab8){w=600px align=center}

Refer to the graphic below:

1. Click Source Control again
2. Select `Pull…`

![Update Open-iAPS with Source Control-pull](https://github.com/nightscout/Open-iAPS-docs/assets/31315442/2fa2f70b-86a3-4f62-9a69-80caf0137fca){width="600"}
{align="center"}

Refer to the graphic below:

1. Select the branch to pull from
2. Click `Pull`

The correct branch should already be selected for you. If you built from `main`, select `main`. If you built from `dev`, select `dev`. (This graphic has the older branch name of `master`.)

![Update Open-iAPS with Source Control-correct branch](https://github.com/nightscout/Open-iAPS-docs/assets/31315442/670e2a6d-824c-446c-a215-f5f49cd216e9){width="500"}
{align="center"}

The last steps are only relevant if you made any changes to the code:

- You may see a pop-up asking to stash your changes. In that case, name the stashed changes to something meaningful to you.
- Select “Apply Stash After Operation”
- Click “Stash and Pull”

The Open-iAPS code is now updated. That was easy. If you used the build script that automatically creates your ConfigOverride file, the targets are already signed, and you are ready to build the Open-iAPS app on your phone.

The following section is only for those who prefer to use the command line interface for `git`. Skip ahead to [Verify Open-iAPS Version](#verify-open-iaps-version).

### Update Open-iAPS with CLI

Use finder to locate the directory where the BuildOpen-iAPS script saved the code. The directory is named after the branch with the date and time for the download:

* Released (main) branch: Downloads/BuildOpen-iAPS/Open-iAPS_main-[date-time]/Open-iAPS
    * Example: ~/Downloads/BuildOpen-iAPS/Open-iAPS_main-220122-1352/Open-iAPS
* Development (dev) branch: Downloads/BuildOpen-iAPS/Open-iAPS_dev-[date-time]/Open-iAPS
    * Example: ~/Downloads/BuildOpen-iAPS/Open-iAPS_dev-220108-1827/Open-iAPS

Use finder to open a Terminal window at the Open-iAPS directory by right-clicking on it and selecting `New Terminal at Folder`. 

Copy each line below and paste it into the terminal window one at a line and hit enter for each line:

```
git stash
```

```
git fetch
git pull --recurse
```

```
git stash pop
```

If the final `git stash pop` had errors, you must repeat any customizations you made in your prior code—they are no longer compatible with the updated code.

The Open-iAPS code is now updated. To open the workspace in Xcode, type `xed .` in your terminal window.

The targets should be signed, and you will be ready to build the Open-iAPS app on your phone.

## Verify Open-iAPS Version

Verify that the Open-iAPS code was successfully updated by examining the `APP_VERSION` value in the Config.xcconfig file. (Refer to the graphic below.) Make sure what is shown in your Xcode display matches the expected version on the Open-iAPS GitHub Releases page.

If using the GitHub method, you can view this same file in your fork of the Open-iAPS repository.

![Update Open-iAPS with Source Control-check version](https://github.com/nightscout/Open-iAPS-docs/assets/31315442/33f8c870-4241-43b3-af99-294ab95d26ca){width="600"}
{align="center"}
