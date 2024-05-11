# Build and Update

**Jump to...**\
Build with [GitHub](#build-trio-with-github) | [Xcode](#build-trio-with-xcode) | [Script](#build-trio-with-script)\
Update with [GitHub](#update-trio-with-github) | [Xcode](#update-trio-with-xcode) | [Source Control](#update-trio-with-source-control) | [CLI](#update-trio-with-cli)

## Build Trio with GitHub

The Trio repository contains instructions for building the Trio app using a browser and GitHub. More detailed instructions are also available in LoopDocs.

* [GitHub Build Instructions](https://github.com/nightscout/Trio/blob/dev/fastlane/testflight.md)
* [LoopDocs: GitHub Build First-Time](https://loopkit.github.io/loopdocs/gh-actions/gh-first-time/)
* [LoopDocs: GitHub Build Other Apps](https://loopkit.github.io/loopdocs/gh-actions/gh-other-apps/)

:::{tip} If using the LoopDocs instructions you need the important information below to build Trio intead of Loop
:::

* Fork from: [https://github.com/nightscout/Trio](https://github.com/nightscout/Trio)
* `Identifier Names` will be: `FreeAPS`, `FreeAPSWatch`, `FreeAPSWatch WatchKit Extension`, `LiveActivityExtension`
    * These names are the same as that used by iAPS, they are distinguised by the Identifier itself, which include the new BundleID for your Trio app
    * If you build with Xcode before, they will start with XC and use the Identifier string rather than the Name
* `Identifiers` will be:
    * `org.nightscout.TEAMID.trio`
    * `org.nightscout.TEAMID.trio.watchkitapp`
    * `org.nightscout.TEAMID.trio.watchkitapp.watchkitextension`
    * `org.nightscout.TEAMID.trio.LiveActivity`
* Only the first 3 of these identifiers need to have the `App Group` added
* For the list below, make sure the box next to `App Group` is checked, and click `Configure` to select the same app group as Loop: `group.com.TEAMID.loopkit.LoopGroup`
* You must add this `App Group` to each of the following identifiers:
    * `org.nightscout.TEAMID.trio`
    * `org.nightscout.TEAMID.trio.watchkitapp`
    * `org.nightscout.TEAMID.trio.watchkitapp.watchkitextension`
* In `App Store Connect`, the `Bundle ID` for Trio will be: `org.nightscout.TEAMID.trio`

### One-Time Update to Display Branch And Commit in Testflight

The Trio build can be configured to display the branch name and commit ID as test notes in TestFlight. This is an optional step, which can be especially useful if building the dev branch.

First, you must have already built Trio and have it available on [Apple App Store Connect](https://appstoreconnect.apple.com/apps).

* Tap on the TestFlight tab
* Choose any build to open a new detailed screen for that build
* In the Test Details section, type anything you want

After you have done this one-time step, each successive build will include the branch name and commit automatically.

You can add additional tests notes for any build if you desire.

## Update Trio with GitHub

Open your fork at `github.com/YOUR-USERNAME/Trio` with your GitHub username instead of `YOUR-USERNAME`

* Look to see if your fork is up to date
* If your fork shows that your branch is behind, sync the branch to get the latest updates
* Before building, you can [Verify Trio Version](#verify-trio-version)

If you selected a GitHub Personal Access Token (GH_PAT) that never expires, select Actions: 4. Build Trio and wait about an hour for your updated app to appear in TestFlight.

If your token has expired, create a new one (and set it to "never expire") and update the GH_PAT in your Trio secrets. Then, you can build your updated code.

## Distribution Certificates

When you first build using GitHub, a Distribution Certificate is generated. It typically is valid for one year. You should get an email from Apple when you are within 30 days of that certificate expiring. When it expires, you can no longer build a new app. (Existing apps in TestFlight are not affected, they get the full 90 days.)

The directions to renew your Distribution Certificate are found in [LoopDocs: Renew Certificate](https://loopkit.github.io/loopdocs/gh-actions/gh-update/#renew-certificate).

## Build Trio with Xcode

The recommendation is to use the [**TrioBuildSelectScript**](#build-trio-with-script) to build your code.

### Build Trio with Script

The **TrioBuildSelectScript** is similar to the script used to build Loop. If you need it, extensive instructions for that script are provided at these links: [LoopDocs: Build Select Script](https://loopkit.github.io/loopdocs/build/step14/#build-select-script) and [Loop and Learn: Build Select Script](https://www.loopandlearn.org/build-select/).

The **TrioBuildSelectScript** offers the choice to:

1. [Build Trio](#build-trio)
2. [Build Related Apps](#build-related-apps)
3. [Run Maintenance Utilities](#run-maintenance-utilities)
4. Exit Script

To execute the **TrioBuildSelectScript**, open a terminal on your Mac and copy and paste the command below into the terminal. Then, read and follow the directions. 

```
/bin/bash -c "$(curl -fsSL \
  https://raw.githubusercontent.com/loopandlearn/lnl-scripts/main/TrioBuildSelectScript.sh)"
```

#### Build Trio

When you select **Build Trio**, you will be provided with a choice of branches with information to guide your selection and URL for documentation. This script will then download a fresh copy of your selected branch and guide you through building with Xcode on your Mac.

* Once the download completes, the script will also
    * Create the automatic signing file
    * Offer to remove provisioning profiles from your computer to ensure the build will last an entire year
    * Provide instructions for how to build the app once Xcode opens
    * Open Xcode with your new download.
* At this point the main menu is displayed again for you to select another option or to exit the script

The download is placed in your `Downloads` folder in a directory called `BuildTrio`. The downloaded clone is found in a folder with the branch name, date, and time encoded.

#### Build Related Apps

When you select **Build Related Apps**, you will be provided with a choice of apps that users of Trio often use. Once you make your selection, the script will provide similar steps to download and build the selected app.

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


#### Build Errors

If you encounter any build issues, please look at the [LoopDocs Build](https://loopkit.github.io/loopdocs/build/build_errors/) errors page. Only some things on that page are relevant for building Trio, but many potential issues will likely be covered there. You will also get helpful advice about what info to provide if you need to ask for help. When you have identified the error message(s), you can use the search tool in LoopDocs to see if your error is mentioned.

If you need it, you are most likely to get help in one of these groups:

* [Discord: Trio channel](https://discord.gg/fCY5svg4)
* [Facebook group: Trio](https://www.facebook.com/groups/1351938092206709)
* Facebook groups like [Loop and Learn](https://www.facebook.com/groups/LOOPandLEARN) and [Looped](https://www.facebook.com/groups/1782449781971680) primarily focus on Loop but offer a wide variety of support surrounding all types of DIY Looping.

### xDrip4iOS or Glucose Direct as CGM Source

:::{important}
LibreTransmitter is provided as part of Trio. Neither xDrip4iOS or Glucose Direct are required to interact with your compatible Libre sensor using Trio.
:::

If you want to use xDrip4iOS or Glucose Direct as a CGM source via “shared app group,” you must also build that app from a source with the same developer ID used for building Trio. Scripts are available for these apps as well. All scripts follow the same download and build pattern and configure automatic signing files for you.

The download is placed in your `Downloads` folder in a directory called `BuildxDrip4iOS` or `BuildGlucoseDirect`, respectively. The downloaded clone is found in a folder with the branch name, date, and time encoded.

These can be accessed using the [**OiBuildSelectScript**](#build-trio-with-script) menu options mentioned above. Or you can run each script individually.

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

Sometimes, specific branches are offered for testing. Any desired branch can be cloned using the **Build Trio** script. After the final quote of the script command, add a space, hyphen, space, and branch_name. An example is shown below: replace `branch_name` with your desired branch. Note that specific branches like this are not deleted as part of the `Delete Old Downloads` utility discussed in [Maintenance Utilities](#maintenance-utilities).

```
/bin/bash -c "$(curl -fsSL \
  https://raw.githubusercontent.com/loopandlearn/lnl-scripts/main/BuildTrio.sh)" - branch_name
```

## Update Trio with Xcode

The recommendation is to use the Xcode Source Control features to update your code.

If you prefer the command line interface, skip ahead to [Update Trio with CLI](#update-trio-with-cli).

### Update Trio with Source Control

::: Released code is found in the `main` branch. These figures show the older name of `master` rather than `main`.  They also show an older version of Xcode. The menus have changed, so follow the words below, not the graphics.
:::

Open Xcode. If your Trio (FreeAPS) workspace is not already open, you can usually find it in the recent projects, as shown in the graphic below. You can also pull down the Xcode menu for `File`, select `Open Recent`, and find your workspace.

<img src="https://github.com/nightscout/trio-docs/assets/31315442/024fc3f9-6bca-475f-b270-17d43da4a4d8" width="600px"/>

The graphic below needs to be updated:
1. There are 2 methods to open `Source Control`
    * Hold down the command key and hit 2 (cmd-2)
    * Use the menus to select `View`, `Navigate`, `Source Control`
2. This modifies the Xcode display with two tabs:
    * There is a `Changes` tab and a `Repositories` tab
    * It might say `No changes`, but fetch changes to make sure
2. Tap on the `Integrate` menu and select `Fetch changes`

<img src="https://github.com/nightscout/trio-docs/assets/31315442/0356efea-351c-4d31-89e6-d04ffee5bab8" width="600px"/>

The graphic below needs to be updated:
1. Click `Integrate` again
2. Select `Pull…`

<img src="https://github.com/nightscout/trio-docs/assets/31315442/2fa2f70b-86a3-4f62-9a69-80caf0137fca" width="600px"/>

Refer to the graphic below:
1. Select the branch to pull from
2. Click `Pull`

The correct branch should already be selected for you. If you built from `main`, select `main`. If you built from `dev`, select `dev`. (This graphic has the older branch name of `master`.)

<img src="https://github.com/nightscout/trio-docs/assets/31315442/670e2a6d-824c-446c-a215-f5f49cd216e9" width="600px"/>

The last steps are only relevant if you made any changes to the code:

- You may see a pop-up asking to stash your changes. In that case, name the stashed changes to something meaningful to you.
- Select “Apply Stash After Operation”
- Click “Stash and Pull”

The Trio code is now updated. That was easy. If you used the build script that automatically creates your ConfigOverride file, the targets are already signed, and you are ready to build the Trio app on your phone.

The following section is only for those who prefer to use the command line interface for `git`. Skip ahead to [Verify Trio Version](#verify-trio-version).

### Update Trio with CLI

Use finder to locate the directory where the BuildTrio script saved the code. The directory is named after the branch with the date and time for the download:

* Released (main) branch: Downloads/BuildTrio/Trio_main-[date-time]/Trio
    * Example: ~/Downloads/BuildTrio/Trio_main-220122-1352/Trio
* Development (dev) branch: Downloads/BuildTrio/Trio_dev-[date-time]/Trio
    * Example: ~/Downloads/BuildTrio/Trio_dev-220108-1827/Trio

Use finder to open a Terminal window at the Trio directory by right-clicking on it and selecting `New Terminal at Folder`. 

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

The Trio code is now updated. To open the workspace in Xcode, type `xed .` in your terminal window.

The targets should be signed, and you will be ready to build the Trio app on your phone.

## Verify Trio Version

Verify that the Trio code was successfully updated by examining the `APP_VERSION` value in the Config.xcconfig file. (Refer to the graphic below.) Make sure what is shown in your Xcode display matches the expected version on the Trio GitHub Releases page.

If using the GitHub method, you can view this same file in your fork of the Trio repository.

<img src="https://github.com/nightscout/trio-docs/assets/31315442/33f8c870-4241-43b3-af99-294ab95d26ca" width="600px"/>
