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
* Identifiers for Trio: see [Table of Identifiers](#table-of-identifiers)
* You use the `Loop App Group` for Trio, see [Create the `Loop App Group`](#create-the-loop-app-group)
* Add the `Loop App Group` to these identifiers:
    * Trio
    * Trio Watch
    * Trio WatchKit Extension
* In `App Store Connect`, the `Bundle ID` for Trio will be: `org.nightscout.TEAMID.trio

### Create the `Loop App Group`

If you already have a `Loop App Group`

* You can skip this step - your existing App Groups are found at this link: [App Group List](https://developer.apple.com/account/resources/identifiers/list/applicationGroup)
* If your `Loop App Group` was created from a Mac with Xcode, you may choose to edit the Description to make the **NAME** match

If you do not have a `Loop App Group`:

* Go to [Register an App Group](https://developer.apple.com/account/resources/identifiers/applicationGroup/add/) on the apple developer site and use the table below to help you create one.

| NAME | XCode version | IDENTIFIER |
|:--|:--|:--|
| Loop App Group | group com TEAMID loopkit LoopGroup| group.com.7PT47XGDN4.loopkit.LoopGroup |

#### Table of Identifiers

* If you built previously using a Mac with Xcode, you may see the XCode version in your **NAME** column - it starts with XC and then the **IDENTIFIER** is appended where the `.` is replaced with a space, the example for Trio is shown in detail
* If you built during early beta testing, you might not have `Trio` at the beginning of each **IDENTIFIER** and the full **NAME** may be slightly different
* Optional: You can click on a given row, edit the Description to match the **NAME** from the table below and it might making building easier in future

| NAME | XCode version | IDENTIFIER |
|:--|:--|:--|
| Trio | XC org nightscout TEAMID trio | org.nightscout.TEAMID.trio |
| Trio LiveActivity | - | org.nightscout.TEAMID.trio.LiveActivity |
| Trio Watch | XC IDENTIFIER | org.nightscout.TEAMID.trio.watchkitapp |
| Trio WatchKit Extension | XC IDENTIFIER | org.nightscout.TEAMID.trio.watchkitapp.watchkitextension |


### One-Time Update to Display Branch And Commit in Testflight

The Trio build can be configured to display the branch name and commit ID as test notes in TestFlight. This is an optional step, which can be especially useful if building the dev branch.

First, you must have already built Trio and have it available on [Apple App Store Connect](https://appstoreconnect.apple.com/apps).

* Tap on the TestFlight tab
* Choose any build to open a new detailed screen for that build
* In the Test Details section, type anything you want

After you have done this one-time step, each successive build will include the branch name and commit automatically.

You can add additional tests notes for any build if you desire.

## Update Trio with GitHub

First makes sure any Apple License agreements have been accepted:

* [Apple Developer Page](https://developer.apple.com/account){: target="_blank" }

Second, make sure you have a valid Distributor certificate; if not, see [Distribution Certificate](#distribution-certificate):

* [Apple Certificate Page](https://developer.apple.com/account/resources/certificates/list){: target="_blank" }

Open your fork at `github.com/YOUR-USERNAME/Trio` with your GitHub username instead of `YOUR-USERNAME`

* Look to see if your fork is up to date
* If your fork shows that your branch is behind, sync the branch to get the latest updates

Select Actions: 4. Build Trio and wait about an hour for your updated app to appear in TestFlight.

## Distribution Certificate

When you first build using GitHub, a Distribution Certificate is generated. It typically is valid for one year. You should get an email from Apple when you are within 30 days of that certificate expiring. When it expires, you can no longer build a new app. (Existing apps in TestFlight are not affected, they get the full 90 days.)

The directions to renew your Distribution Certificate are found in [LoopDocs: Renew Certificate](https://loopkit.github.io/loopdocs/gh-actions/gh-update/#renew-certificate){: target="_blank" }.

## Build Trio with Xcode

If you build Trio on your Mac using Xcode, the recommendation is to use the [**TrioBuildSelectScript**](#build-trio-with-script) to build your code.

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
2. Clean Derived Data
3. Xcode Cleanup (The Big One)
4. Clean Profiles
5. Return to Menu

For more information, refer to [Loop and Learn: Maintenance Utitilites](https://www.loopandlearn.org/build-select/#utilities-disk) documentation.


#### Build Errors

If you encounter any build issues, please look at the [LoopDocs Build](https://loopkit.github.io/loopdocs/build/build_errors/) errors page. Only some things on that page are relevant for building Trio, but many potential issues will likely be covered there. You will also get helpful advice about what info to provide if you need to ask for help. When you have identified the error message(s), you can use the search tool in LoopDocs to see if your error is mentioned.

If you need it, you are most likely to get help in one of these groups:

* [Discord: Trio channel](https://discord.gg/FnwFEFUwXE)
* [Facebook group: Trio](https://www.facebook.com/groups/1351938092206709)
* Facebook groups like [Loop and Learn](https://www.facebook.com/groups/LOOPandLEARN) and [Looped](https://www.facebook.com/groups/1782449781971680) primarily focus on Loop but offer a wide variety of support surrounding all types of DIY Looping.

### xDrip4iOS or Glucose Direct as CGM Source

:::{important}
LibreTransmitter is provided as part of Trio. Neither xDrip4iOS or Glucose Direct are required to interact with your compatible Libre sensor using Trio.
:::

If you want to use xDrip4iOS or Glucose Direct as a CGM source via “shared app group,” you must also build that app from a source with the same developer ID used for building Trio. Scripts are available for these apps as well. All scripts follow the same download and build pattern and configure automatic signing files for you.

The download is placed in your `Downloads` folder in a directory called `BuildxDrip4iOS` or `BuildGlucoseDirect`, respectively. The downloaded clone is found in a folder with the branch name, date, and time encoded.

These can be accessed using the [**TrioBuildSelectScript**](#build-trio-with-script) menu options mentioned above. Or you can run each script individually.

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

You can use the Xcode Source Control features to update your code.

If you prefer the command line interface, skip ahead to [Update Trio with CLI](#update-trio-with-cli).

### Update Trio with Source Control

::: Released code is found in the `main` branch. Some of these figures used the `dev` branch, most will be using the `main` branch.
:::

Open Xcode. If your Trio workspace is not already open, you can usually find it in the recent projects, as shown in the graphic below. You can also pull down the Xcode menu for `File`, select `Open Recent`, and find your workspace.

![xcode welcome screen](img/update-xcode-source-control-welcome.png){width="600px"}

* There are 2 methods to open `Source Control`
    1. Hold down the command key and hit 2 (cmd-2)
    2. Use the menus to select `View`, `Navigators`, `Source Control`
* This modifies the Xcode display with two tabs:
    * There is a `Changes` tab and a `Repositories` tab
    * It might say `No changes` on the `Changes` tab, but you should always fetch changes to see if new updates are available from GitHub
* Tap on the `Integrate` menu and select `Fetch changes`
* After you tap on `Fetch changes`, you'll see an indication Xcode is fetching changes

![update using xcode source control - start with fetch](img/update-xcode-source-control-fetch.png){width="600px"}

Once the fetch process completes, use the `Integrate` menu item again
* Select `Pull…` as show in the two graphics below
* This only updates Trio workspace, it does not pull in the changes from the submodules

![update using xcode source control - continue with pull](img/update-xcode-source-control-pull.png){width="600px"}

Refer to the graphic below:
1. Select the Trio branch to pull from
    * The correct branch should already be selected for you
    * If you built from `main`, select `main`
    * (This graphic was acquired using `dev`.)
2. Ignore the submodules, they do not need to be selected
3. Click `Pull`

![update using xcode source control - choose trio branch and submodules](img/update-xcode-pull-selection.png){width="350px"}

After you click on pull, if you made any local changes to the code, the `Stash Changes` pop-up will appear:

- The pop-up asks you to stash your changes - you can choose to discard them or reapply them after the pull
- To reapply them after the pull:
    - You can name the stashed changes as something meaningful to you
    - Select “Apply Stash After Operation”
- Click “Stash and Pull”

The Trio workspace code is now updated, but not the submodules.

#### Update Trio Submodules

The submodules can be updated using the procedures in [Update Trio with CLI](#update-trio-with-cli). Alternatively, you can make an [Xcode Behaviors](#xcode-behaviors) that will do it for you.

If you have configured Xcode Behaviors, then tap on the Xcode menu item, then Behaviors and choose `Update Submodules`.

If there are errors, you can continue in this terminal window using the instructions found in [Update Trio with CLI](#update-trio-with-cli).

#### Xcode Behaviors

You can add Xcode behaviors to your version of Xcode. These custom behaviors will be available every time once you add them.

You will create two shell scripts, one will open a Terminal at the same location as an open workspace, the other will both open a Terminal and Update the submodules for your Trio workspace. 

Open a new terminal:

Step 1: Create a folder to store your shell scripts by copying and pasting the next line (only do this one time or you will get an error message):

```
mkdir ~/scripts
```

Step 2: Open a text-only editor with a blank file, copy and paste the following lines and save it as `~/scripts/open_terminal.sh`

```
#!/bin/bash
open -a Terminal "`pwd`"
```

Step 3: Open a text-only editor with a blank file, copy and paste the following lines and save it as `~/scripts/open_terminal_update_submodules.sh`

```
#!/bin/bash
open -a Terminal "`pwd`"
git pull --recurse
```

Step 4: Make the shell scripts executable: 
Copy and paste the following line into any terminal window

```
chmod +x ~/scripts/*.sh
```

Step 5: Open Xcode
* Under Xcode, select Behaviors, Edit Behaviors
* At the bottom of the window, click the `+` sign
    * Under the Custom section, you should see the New Behavior row, enter `Open Terminal`
    * On the right side at the bottom, click on Run, then `Choose Script` and select `~/scripts/open_terminal.sh`
* Repeat those two steps with `Update Submodules` and `~/scripts/open_terminal_update_submodules.sh`

### Update Trio with CLI

This section is only for those who prefer to use the command line interface for `git`.

If you added the [Xcode Behaviors](#xcode-behaviors), you can use the Xcode, Behaviors, Open Terminal to start a terminal at the correct location. If not, use finder to locate the directory where the BuildTrio script saved the code. The directory is named after the branch with the date and time for the download:

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

If you made customizations in any of the submodules, the `recurse` command might fail. You need to read which submodule failed, Change directory to that module, stash your changes and try again. For example, if the OmniBLE module could not be updated, you would take actions similar to the example below:

```
cd OmniBLE
git stash
cd ..
git pull --recurse
cd OmniBLE
git stash pop
cd ..
```

The Trio code is now updated. To open the workspace in Xcode, type `xed .` in your terminal window.

The targets should be signed, and you will be ready to build the Trio app on your phone.

## Verify Trio Version

Verify that the Trio code was successfully updated by examining the `APP_VERSION` value in the Config.xcconfig file. (Refer to the graphic below.) Make sure what is shown in your Xcode display matches the expected version on the Trio GitHub Releases page.

If using the GitHub method, you can view this same file in your fork of the Trio repository.

TODO: - add a figure here later