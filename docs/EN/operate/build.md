# Build and Update

**Jump to...**\
Build with [GitHub](#build-open-iaps-with-github) | [Xcode](#build-open-iaps-with-script)\
Update with [GitHub](#update-open-iaps-with-github) | [Xcode](#update-open-iaps-with-xcode)

## Build Open-iAPS with GitHub

The instructions for using a browser and GitHub to build the Open-iAPS app are found in the Open-iAPS repository.

* [GitHub Build Instructions](https://github.com/nightscout/Open-iAPS/blob/main/fastlane/testflight.md)
* The instructions at the link above are complete and include the details found beneath the LoopDocs links below.

If those instructions are too sparse for you, look at the LoopDocs instructions, which are very verbose. Between the two, you should be able to figure things out:

* [LoopDocs: GitHub Build First-Time](https://loopkit.github.io/loopdocs/gh-actions/gh-first-time/)
* [LoopDocs: GitHub Build Other Apps](https://loopkit.github.io/loopdocs/gh-actions/gh-first-time/)

If you use the LoopDocs instructions, you will need this information to build Open-iAPS (rather than Loop):

* Fork from: [https://github.com/nightscout/Open-iAPS](https://github.com/nightscout/Open-iAPS)
* `Identifier Names` will be: `FreeAPS`, `FreeAPSWatch`, `FreeAPSWatch WatchKit Extension`
* `Identifiers` will be:
    * `org.nightscout.TEAMID.openiaps`
    * `org.nightscout.TEAMID.openiaps.watchkitapp`
    * `org.nightscout.TEAMID.openiaps.watchkitapp.watchkitextension`
* The `App Group` name is the same as for Loop: `group.com.TEAMID.loopkit.LoopGroup`
* You must add this `App Group` to all 3 identifiers
* The `FreeAPS Identifier`, in addition to the `App Group`, must also have: `HealthKit` and `NFC Tag Reading` enabled (which should be automatic)
* In `App Store Connect`, the `Bundle ID` for Open-iAPS will be: `org.nightscout.TEAMID.openiaps`

## Update Open-iAPS with GitHub

Open your fork at your GitHub username.

* Look to see if your fork is up to date
* If your fork shows that your branch is behind, sync the branch to get the latest updates
* Before building, you can [Verify Open-iAPS Version](#verify-open-iaps-version)

If you selected a GitHub Personal Access Token (GH_PAT) that never expires, select Actions: 4. Build Open-iAPS and wait about an hour for your updated app to appear in TestFlight.

If your token has expired, create a new one (and set it to never expire) and update the GH_PAT in your Open-iAPS secrets. Then, you can build your updated code.


## Build Open-iAPS with Script

The **BuildOpen-iAPS** script offers the choice to [Download and Build](#download-and-build) one of several branches for Open-iAPS or to Run [Maintenance Utilities](#maintenance-utilities).

### Download and Build

* Most users should choose the `main` branch
* Once download completes, the script will also
    * Create the automatic signing file
    * Offer to remove provisioning profiles from your computer to ensure the build will last an entire year
    * Provide instructions for how to build the app once Xcode opens
    * Open Xcode with your new download.

To execute the build script, open a terminal on your Mac and copy and paste the command below into the terminal. Then, read and follow the directions. 

```
/bin/bash -c "$(curl -fsSL \
  https://raw.githubusercontent.com/loopandlearn/lnl-scripts/main/BuildOpen-iAPS.sh)"
```

The download is placed in your `Downloads` folder in a directory called `BuildOpen-iAPS`. The downloaded clone is found in a folder with the branch name, date, and time encoded.

This script is similar to the script used to build Loop. Extensive instructions for that script are provided at these links: [LoopDocs: Build Select Script](https://loopkit.github.io/loopdocs/build/step14/#build-select-script) and [Loop and Learn: Build Select Script](https://www.loopandlearn.org/build-select/).

If you need additional information, review those links and then return. The **BuildOpen-iAPS** script is initiated using the commands listed above.

### Build Errors

If you encounter any build issues, please look at the [LoopDocs Build](https://loopkit.github.io/loopdocs/build/build_errors/) errors page. Only some things on that page are relevant for building Open-iAPS, but many potential issues will likely be covered there. You will also get helpful advice about what info to provide if you need to ask for help. When you have identified the error message(s), you can use the search tool in LoopDocs to see if your error is mentioned.

If you need it, you are most likely to get help in one of these groups:

* [Discord: Open-iAPS channel](https://discord.gg/ptkk2Y264Z)
* [Facebook group: Open-iAPS](https://www.facebook.com/groups/1351938092206709)
* Facebook groups like “Loop and Learn” and “Looped” primarily focus on Loop but will offer support when able.

### xDrip4iOS or Glucose Direct as CGM Source

Please note that LibreTransmitter is provided as part of Open-iAPS, so you are not required to use either xDrip4iOS or Glucose Direct to interact with your compatible Libre sensor using Open-iAPS.

If you want to use xDrip4iOS or Glucose Direct as a CGM source via “shared app group”, you must also build that app from source with the same developer ID used for building Open-iAPS. Scripts are available for these apps as well. All scripts follow the same download and build pattern, and configure automatic signing files for you.

```
/bin/bash -c "$(curl -fsSL \
  https://raw.githubusercontent.com/loopandlearn/lnl-scripts/main/BuildxDrip4iOS.sh)"
```

```
/bin/bash -c "$(curl -fsSL \
  https://raw.githubusercontent.com/loopandlearn/lnl-scripts/main/BuildGlucoseDirect.sh)"
```

The download is placed in your `Downloads` folder in a directory called `BuildxDrip4iOS` or `BuildGlucoseDirect` respectively. The downloaded clone is found in a folder with the branch name, date, and time encoded.

### Alternative Branch

Sometimes, specific branches are offered for testing. Any desired branch can be cloned using the **BuildOpen-iAPS** script. After the final quote of the script command, add a space, hyphen, space, and branch_name. An example is shown below: replace `branch_name` with your desired branch. Note that specific branches like this are not deleted as part of the `Delete Old Downloads` utility discussed in [Maintenance Utilities](#maintenance-utilities).

```
/bin/bash -c "$(curl -fsSL \
  https://raw.githubusercontent.com/loopandlearn/lnl-scripts/main/BuildOpen-iAPS.sh)" - branch_name
```

### Maintenance Utilities

Several maintenance utilities are available as part of the **BuildOpen-iAPS** script. For more information, refer to [Loop and Learn: Run Maintenance Utilities](https://www.loopandlearn.org/build-select/#utilities-disk) documentation.

The following options are offered:

1. Delete Old Downloads
1. Clean Derived Data
1. Xcode Cleanup (The Big One)
1. Return to Menu

## Update Open-iAPS with Xcode

The recommendation is to use the Xcode Source Control features to update your code.

If you prefer the command line interface, skip ahead to [Update Open-iAPS with CLI](#update-open-iaps-with-cli).

### Update Open-iAPS with Source Control

**Note** Released code is found in the  `main` branch. These figures show the older name of `master` rather than `main`. 

Open Xcode. If your Open-iAPS (FreeAPS) workspace is not already open, you can usually find it in the recent projects, as shown in the graphic below. You can also pull down the Xcode menu for `File`, select `Open Recent`, and find your workspace.

![open your project](img/xcode-welcome.png){width="600"}
{align="center"}

Refer to the graphic below:

1. Click Source Control
2. Choose `Fetch changes`

![fetch changes](img/xcode-fetch-changes.png){width="600"}
{align="center"}

Refer to the graphic below:

1. Click Source Control again
2. Select `Pull…`

![open the pull dialog](img/xcode-source-control-pull.png){width="600"}
{align="center"}

Refer to the graphic below:

1. Select the branch to pull from
2. Click `Pull`

The correct branch should already be selected for you. If you built from `main`, select `main`. If you built from `dev`, select `dev`. (This graphic has the older branch name of `master`.)

![select and pull in dialog](img/xcode-pull-master.png){width="500"}
{align="center"}

The last steps are only relevant if you made any changes to the code:

- You may see a pop-up asking to stash your changes. In that case, name the stashed changes to something meaningful to you.
- Select “Apply Stash After Operation”
- Click “Stash and Pull”

The Open-iAPS code is now updated. That was easy, wasn't it? If you used the build script that automatically creates your ConfigOverride file, the targets are already signed, and you are ready to build the Open-iAPS app on your phone.

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

![verify version](img/xcode-build-version.png){width="600"}
{align="center"}
