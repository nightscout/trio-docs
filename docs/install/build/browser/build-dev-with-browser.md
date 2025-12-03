## Use Browser Build for Public Beta Version

This page is provided to help people currently running the public beta version of Trio.

!!! important "Public Beta"

    The public beta is built from the `dev` branch of Trio.
    
    This code is undergoing testing and receives rapid updates. Be sure to follow along in Trio Discord and to update frequently (at least weekly).

    * [Trio Discord Invitation](https://discord.triodocs.org)

    To ensure weekly updates, make the `dev` branch the default branch in your fork on GitHub. Remember, this will just automatically trigger a build of the latest `dev` to TestFlight every Wednesday at 08:43 UTC. You are still responsible for manually installing the update via the TestFlight app on your phone. 

    Once this beta is released to `main` as 1.0, then you should return to building from the `main` branch.

## Update to Trio dev branch from Trio 0.2.x main

!!! important "A Note on Compatibility"
    Upgrading to Trio 0.5 (or newer) from 0.2.x is smooth and straightforward. The new Onboarding Wizard will guide you step by step. Your pump, CGM, therapy settings, and the last 24 hours of treatment and glucose history will be brought over automatically.

    **Be Aware**
    
    * **Once you have upgraded to 0.5 (or newer), going back to 0.2.x is not supported**
        * If you choose to downgrade, you will need to set everything up again from scratch
        * If you accidentally build 0.2.x over 0.5 (or newer), and then return to 0.5 (or newer):
            * You will see <code>“Oops? Some data didn’t make it over”</code> every time you restart the app
            * But all your "stuff" is there
            * See [Remove Annoying Message](#remove-annoying-message)
    * Some guardrails have changed compared to 0.2.x
    * **Your saved Temp Targets and Overrides will not be maintained**
        * The storage method in 0.5 and newer is different from 0.2.x, so you will need to recreate them
        * Before you update from 0.2.x, capture a screenshot of each named Temp Target or Override that you want to add to 0.5 (or newer)

The Browser Build documentation is under construction for Trio version 0.5.x and newer.

This temporary set of instructions is intended for the subset of users who **previously built Trio 0.2.x using Browser Build**. Because this is aimed at experienced builders, some of the steps are abbreviated and will be expanded as the documents are updated.

> If you are new to Trio — please wait until the documents have been expanded and preferably until the release of Trio 1.0.

#### Mac-Xcode to Browser Build

!!! important "Experienced Mac-Xcode Builder"
    If you are an experienced Trio 0.2.x user who wants to join the open beta testing, but also wants to switch from Mac-Xcode build to Browser Build — welcome. For the time being, please do this:

    * Use the [0.2.x: Build Trio with *GitHub*](../../../0.2.x/operate/build.md#build-trio-with-github){: target="_blank"} instructions to build Trio 0.2.x and wait for it to show up in your TestFlight. Do not install it — you just want to make sure you can succeed with a Browser Build.
    * Then return to this page and follow the directions; you will need to run `Add Identifiers` and `Create Certificates` again when updating to 0.5 (or newer).

#### Transition from Other Apps to Trio Browser Build

!!! important "Coming from Other Apps"
    If you are an experienced Browser Build person who has not built Trio before, you will need to add the Trio App Group to 3 <code>Identifiers</code> and create a Trio App in App Store Connect.

    The steps are summarized in [New Trio Builders](#new-trio-builders).

    If you are not experienced with Browser Build, we suggest you follow the 0.2.x instructions: [0.2.x: Build Trio with *GitHub*](../../../0.2.x/operate/build.md#build-trio-with-github){: target="_blank"} first. Then return to this page to update to 0.5.x; you will need to run `Add Identifiers` and `Create Certificates` again when updating to 0.5 (or newer).

### Summary of Tasks to Build Trio `dev`

These steps assume:

* You previously built Trio 0.2.x using *GitHub* Actions (Browser Build)
* You confirmed your *Apple* Developer license agreements are up to date

These are the new steps for you to follow:

1. [Configure Browser Build Certificate Automation](#browser-build-certificate-automation)
1. [Configure `Fork` with `dev` branch](#configure-fork-with-dev-branch)
    * [Configure the `dev` branch as default](#configure-the-dev-branch-as-default) (while public beta is ongoing)
1. [Update <code>Identifiers</code>](#update-identifiers)
1. [Update <code>Certificates</code>](#update-certificates)
1. [Build Trio `dev`](#build-the-app)

### Browser Build Certificate Automation

Browser Build Certificate Automation was added to Trio 0.2.3 - if you have not added the `ENABLE_NUKE_CERTS` variable, you should add it now. Otherwise, skip ahead to [Configure `Fork` with `dev` branch](#configure-fork-with-dev-branch).

In order to utilize the new automatic certificate renewal feature, you’ll need to add a new Variable.  Variables are located in *GitHub*, in the same location as your Secrets.  The exact location will depend upon whether you build using a *GitHub organization* or a personal account.

If you use a personal account, click on your Trio repository.  If you have other repositories, just follow these same steps for each of them.

If you build using a *GitHub* organization and have already added this variable to your organization, there’s nothing for you to do. All repositories in your organization are covered. Otherwise, click on your organization name.

The numbered steps correspond to numbers in the graphics below:

1. Choose settings 
1. Scroll down to select Secret and variables
1. Choose Actions
1. Choose Variable
1. Tap on “Create new organization variable” or “New repository variable”
1. For the Name, type `ENABLE_NUKE_CERTS`
1. For the Value, type `true`
1. Tap on Add Variable.

> ![add ENABLE_NUKE_CERTS variable](img/add-variable-01.png){ width="800"}
{align="center"}

> ![add ENABLE_NUKE_CERTS variable](img/add-variable-02.png){ width="600"}
{align="center"}

### Configure `Fork` with `dev` branch

The open beta testing for Trio uses the `dev` branch.

* If you do not have a `dev` branch you must first configure one following these directions.
* If you already have a `dev` branch, skip ahead to [Update Branch](#update-branch) and be sure to select the `dev` branch when you update your `fork`. 

#### Add `Branch`

First, you need to get to your Trio repository and tap on the branch icon. (Do not worry about how many branches you have.):

> ![Trio repo - tap on branch icon](img/trio-branch.png){width="700"}
{align="center"}

The next screen displays the branches you currently have. It shows a `New branch` button in the upper right. If you don't see that, you are not logged in. Tap on the `New branch` button.

>  ![Trio branch display - tap on new branch](img/trio-new-branch.png){width="700"}
{align="center"}

Each step in the list below matches with the number in the graphic. On the left half of the graphic is the default selections for your `fork` when `main` is the default branch. The right side shows the display after making the indicated selections.:

1. Click on the drop-down menu labeled 1 in the graphic and choose nightscout/Trio
2. Click on the drop-down menu labeled 2 in the graphic and choose `dev`
3. Click on the `Branch` name box labeled 3 in the graphic and type `dev`
    * The branch name in your `fork` should always match the branch name you are adding; check that you type it correctly
4. Review the dialog items to make sure everything is correct, and then tap on Create branch

> ![steps to add a branch continued](img/add-branch-02.svg){width="700"}
{align="center"}

### Configure the `dev` branch as default

> **This recommendation is only while the public beta is ongoing. Typically only developers configure the `dev` branch as their default branch.**

1. Once you commit to the 0.5.x (or newer) version of Trio, you want to stay with it
2. By making the `dev` branch your default, you will get automatic build updates weekly

These are the steps to modify the default branch.

For this example, we show how to change from a default branch of `main` to a default branch of `dev`. Note — only the owner of the repository can take this action and they must be logged in. Otherwise the Settings tab does not appear.

For the numbered steps below, refer to the graphic found under each group of steps.

1. Click on the Settings Icon near the top right of your Trio repository
    * You may need to scroll down to see the `Default Branch` as shown in the graphic
    * Do not tap on the Branches tab to the left under Code and Automation, that is not the correct menu

    > ![show default branch](img/gh-settings-branch-01.svg){width="600"}

1. To the right of the default branch name there is a pencil and a left-right arrow icon (⇄)
    * Tap on the left-right arrow icon (⇄) to bring up the `Switch default branch to another branch` dialog
1. Click on the dropdown next to the current default branch, in this example, `main`

   > ![modify default branch](img/gh-settings-branch-02.svg){width="400"}

1. Select the desired default branch, for the public beta, choose `dev`
1. Click on the `Update` button

1. You will be presented with an are-you-sure question.
    * Click on the red `I understand, update the default branch.` button

Your default branch has been changed.

#### Update `Branch`

The `dev` branch of the `nightscout/Trio` repository will be updated frequently. This is how you know if your `fork` needs to be updated as well. As long as the automatic runs are happening weekly for your repository — you will not need these manual instructions, unless you want to manually build an update sooner.

Tap the `Code` button (upper left) and ensure this branch in your `fork` is up to date.

* Select the desired branch in the dropdown menu (this graphic shows `main` branch, to get 0.5 (or newer), you must choose `dev` branch)
* If the message indicates this branch is "behind", tap on the sync `fork` button and then the Update branch button

> ![message displayed when your fork of is behind the origin version](img/github-build-check-fork-status.svg){width="700"}
{align="center"}


### Update <code>Identifiers</code>

For Trio 0.5.x and newer, you must have Apple Push Notification enabled to build the app. This capability is added to the existing Trio Identifier by running the Action: `Add Identifiers` after you update your fork.

Refer to the graphic below for the numbered steps:

1. Click on the `Actions` tab of your Trio repository
1. On the left side, click on <code>2. Add Identifiers</code>
1. On the right side, click `Run Workflow` to show a dropdown menu
    * You will see your default branch (typically this is `main`)
    * **To update the <code>Identifiers</code> so you can build the Trio 0.5 (or newer), you must select `dev`**
1. Tap the green button that says `Run workflow`.

    > ![add identifiers using github actions](img/action-02-add-identifiers.svg){width="700"}
    {align="center"}

!!! tip "Be Patient"
    * Refresh the browser if you are unsure if the action started
    * Do not start a new action until the first one completes

The `Add Identifiers`&nbsp;<span class=notranslate>Action</span>&nbsp; should succeed or fail in a few minutes. Do not continue to the next step until this one succeeds.

### Update <code>Certificates</code>

For Trio 0.5.x and newer, you must have Apple Push Notification enabled to build the app. After you add this capability to the Trio Identifier, you must update the Certificate by running the Action: `Create Certificates`.

Refer to the graphic below for the numbered steps:

1. Click on the <code>Actions</code> tab of your Trio repository
1. On the left side, click on `3. Create Certificates`
1. On the right side, click `Run workflow` to show a dropdown menu
    * You will see your default branch (typically `main`)
    * **Because you plan to build Trio 0.5 (or newer), select `dev`**
1. Tap the green button that says `Run workflow`.

    > ![create certificates using github actions](img/action-03-create-certs.svg){width="700"}
    {align="center"}

1. Wait a minute or two for the action to finish

!!! tip "Be Patient"
    * Refresh the browser if you are unsure if the action started
    * Do not start a new action until the first one completes

Once you see the green check mark by `Create Certificates`, the next step is to Build the app.

### Build the App

If you completed all the steps on this page successfully (got a green checkmark &#x2705;), you are ready to run Action: Build Trio.

> **We recommend that while participating in the public beta, you should [Configure the `dev` branch as default](#configure-the-dev-branch-as-default). This will ensure weekly updates to TestFlight. You must still manually install updates to your phone from TestFlight.**

If you choose to build a different branch than your default branch, there is an extra step when you `Build Trio`. In addition to the normal steps 1, 2, and 3 in the graphic below, you must also do the (optional) step. Select the `dev` branch in the branch dropdown menu before continuing to step 4 and tapping on the green Run workflow button:

> ![build app using github actions](img/action-04-build-trio.svg){width="700"}
{align="center"}

#### Refresh, Do Not Repeat

!!! tip "Hit Refresh"
    After you tap the green Run workflow button, *GitHub* can be slow to update.

    * Refresh the browser if you are unsure if the action started
    * Do not start a new action until the first one completes

- - -

## Disable the DO NOT RUN Actions

You may notice some *GitHub* actions that have `DONT RUN` or `DO NOT RUN` in their names. Those are special actions that are used by the developers. They are skipped in your `Fork`, but you may see logs for them.

If they already have the notation `disabled` beside them, so won't see them run. Otherwise, click on each one, click on the three dots at the upper right, and then select `Disable workflow`. Then you will avoid the annoyance of seeing logs that say the action was automatically run and then skipped.

> ![disable developer actions](img/trio-disable-do-not-run.png){width="500"}

- - -

## Update Build Errors

The most likely build error is that you did not [Update <code>Identifiers</code> and <code>Certificates</code>](#solution).  
In that case, you will see this **error** in the **build action annotations**.

### Error

> ![Trio annotation error for missing identifier update](img/trio-annotation-need-to-run-add-identifiers.png){ width="600", align="center"}

If you decide to look at the action **log**, instead of reading the annotations, you may see an **error** similar to the two graphics below.

> ![Trio log error for missing identifier update](img/trio-log-detail-need-to-run-add-identifiers.png){ width="600", align="center"}

> ![Trio log error for missing identifier update](img/trio-log-real-error-need-to-run-add-identifiers.png){ width="600", align="center"}

### Solution

1. [Update <code>Identifiers</code>](#update-identifiers) - make sure you select `dev` branch
2. [Update <code>Certificates</code>](#update-certificates) - make sure you select `dev` branch

- - -

## New Trio Builders

For experienced browser builders, this minimal set of instructions might be sufficient.  
Warning - there is no hand holding in these directions.

**Every app you build will use the same [6 Secrets](https://loopkit.github.io/loopdocs/browser/intro-summary/#make-a-secrets-reference-file).**

* Fork from: [https://github.com/nightscout/Trio](https://github.com/nightscout/Trio)
* Use the `Trio App Group` for Trio, see [Create the `Trio App Group`](#create-the-trio-app-group)
* <code>Identifiers</code> for Trio: see [Table of <code>Identifiers</code>](#table-of-identifiers)
* Add the `Trio App Group` to these <code>Identifiers</code>:
    * `Trio`
    * `Trio Watch`
    * `Trio WatchKit Extension`
* In `App Store Connect`, the `Bundle ID` for Trio will be: `org.nightscout.TEAMID.trio`

### Create the `Trio App Group`

If you already have a `Trio App Group`

* You can skip this step - your existing App Groups are found at this link: [App Group List](https://developer.apple.com/account/resources/identifiers/list/applicationGroup)
* If your `Trio App Group` was created from a Mac with Xcode, you may choose to edit the Description to make the **NAME** match

If you do not have a `Trio App Group`:

* Go to [Register an App Group](https://developer.apple.com/account/resources/identifiers/applicationGroup/add/) on the Apple developer site and use the table below to help you create one.
* Replace `TEAMID` with your *Apple* Developer ID.

| NAME | Xcode version (NAME) | IDENTIFIER |
|:--|:--|:--|
| Trio App Group | group org nightscout TEAMID trio trio-app-group| <code>group.org.nightscout.TEAMID.trio.trio-app-group</code> |

### Table of <code>Identifiers</code>

These are the <code>Identifiers</code> created by running the *GitHub* action "<code>Add Identifiers</code>". Only 3 of them need to have the Trio App Group added. Be sure that you selected the `dev` branch when you start the "<code>Add Identifiers</code>" action. For more details, see [Update <code>Identifiers</code>](#update-identifiers), but then return here when that action succeeds.

| NAME | Xcode version (NAME) | IDENTIFIER |
|:--|:--|:--|
| Trio | XC org nightscout TEAMID trio | <code>org.nightscout.TEAMID.trio</code> |
| Trio LiveActivity | - | <code>org.nightscout.TEAMID.trio.LiveActivity</code> |
| Trio Watch App | XC IDENTIFIER | <code>org.nightscout.TEAMID.trio.watchkitapp</code> |
| Trio Watch Complication | XC IDENTIFIER | <code>org.nightscout.TEAMID.trio.watchkitapp.TrioWatchComplication</code> |

### Add Trio App Group to <code>Identifiers</code>

- Open the [App IDs Identifier page for your Apple Developer Account](https://developer.apple.com/account/resources/identifiers/list).
    - Click on the `Trio` Identifier and assign the `Trio App Group` to the Identifier - see graphic below.
      > ![add Trio App Group to identifiers](img/choose-trio-app-group.png)
    - Repeat this for the other 2 <code>Identifiers</code> that need to have an App Group assigned: `Trio Watch` and `Trio WatchKit Extension`

### Configure Trio App

Follow the directions in [LoopDocs](https://loopkit.github.io/loopdocs/browser/prepare-app/#create-loop-app-in-app-store-connect), but use the Trio `Bundle ID`

* In `App Store Connect`, the `Bundle ID` for Trio will be: `org.nightscout.TEAMID.trio`

Return to the main set of instructions on this page, [Update <code>Certificates</code>](#update-certificates), and keep going until you have a successful build.

## Extra Tips

### Remove Annoying Message

If you accidentally build 0.2.x over 0.5 (or newer), and then return to 0.5 (or newer):

* You will see <code>“Oops? Some data didn’t make it over”</code> every time you restart the app
* But all your "stuff" is there

You see that because some special files are labeled with `.migrated` by 0.5 (or newer) when you complete the onboarding action when you upgrade from 0.2.x to 0.5 (or newer).

* When you accidentally build 0.2.x over 0.5 (or newer), the old names for the files are recreated
* When you restore to 0.5 (or newer), it sees the duplicate files, one set has `.migrated` in the file name and one set does not
* You are warned that migration can't happen - but for this case, you don't need it

You can get rid of the annoying message by taking these steps:

First quit (stop running, swipe up) the Trio app

* Search for Files on your phone
* Open the `Trio` folder on your phone
* Open the `enact` folder
    * you may see 4 files, instead of 2
    * delete the ones that do **not** have `.migrated` in the name
* Open the `monitor` folder
    * you will probably see many files, but 3 of them have `.migrated` in the name
    * find the files with the same name except for `.migrated` and delete them

Open the Trio app and it should just say "Getting everything ready for you" and just keep going. Annoying message is gone.

