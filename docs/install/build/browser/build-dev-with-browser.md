### Summary of Tasks to Build Trio `dev`

!!! tip "Use for `dev` or feature branch"
    This page is useful for building the `dev` branch or any other feature branch found in Trio. Where you see `dev` just replace with `branch-name` where `branch-name` is the branch you want.

These steps assume:

* You previously built Trio using *GitHub* Actions (Browser Build)
* You confirmed your *Apple* Developer license agreements are up to date

These are the new steps for you to follow:

1. [Configure `Fork` with `dev` branch](#configure-fork-with-dev-branch)
    * Optional: [Configure the `dev` branch as default](#configure-the-dev-branch-as-default)
1. If new Identifiers are required: [Update <code>Identifiers</code>](#update-identifiers)
1. Optional: [Update <code>Certificates</code>](#update-certificates); this is included in Build Trio
1. [Build Trio `dev`](#build-the-app)

### Configure `Fork` with `dev` branch

* If you do not have a `dev` branch you must first configure one following these directions.
* If you already have a `dev` branch, skip ahead to [Update Branch](#update-branch) and be sure to select the `dev` branch when you update your `fork`. 

#### Add `Branch`

First, you need to get to your fork of the Trio repository and tap on the branch icon. (Do not worry about how many branches you have.):

> ![Trio repo - tap on branch icon](img/trio-branch.png){width="700"}
{align="center"}

The next screen displays the branches you currently have. 

* If the branch you want is already there - click on it so you can make sure it is in sync with Trio
* If the branch you want is not there, tap on the `New branch` button on upper right
    * If there is not a `New branch` button in the upper right, you are not logged in

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

> **This recommendation is only for expert testers who are using `dev` or a feature branch for their personal use. Typically only developers configure the `dev` branch as their default branch.**

* By making the `dev` branch your default, you will get automatic build of any `dev` updates weekly
* You will no longer get automated builds of the `main` branch, but can run those manually

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

1. Select the desired default branch, in this example,  `dev` was selected
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

At the current time, the dev branch and main branch have the same Identifiers, so this step is not required. If identifiers are added to the `dev` or feature branch you are using, this will be required.

Refer to the graphic below for the numbered steps:

1. Click on the `Actions` tab of your Trio repository
1. On the left side, click on <code>2. Add Identifiers</code>
1. On the right side, click `Run Workflow` to show a dropdown menu
    * You will see your default branch (typically this is `main`)
    * **To update the <code>Identifiers</code> found in dev but not main, you must select `dev`**
1. Tap the green button that says `Run workflow`.

    > ![add identifiers using github actions](img/action-02-add-identifiers.svg){width="700"}
    {align="center"}

!!! tip "Be Patient"
    * Refresh the browser if you are unsure if the action started
    * Do not start a new action until the first one completes

The `Add Identifiers`&nbsp;<span class=notranslate>Action</span>&nbsp; should succeed or fail in a few minutes. Do not continue to the next step until this one succeeds.

### Build the App

If you completed all the steps on this page successfully (got a green checkmark &#x2705;), you are ready to run Action: Build Trio.

If you choose to build a different branch than your default branch, there is an extra step when you `Build Trio`. In addition to the normal steps 1, 2, and 3 in the graphic below, you must also do the (optional) step. Select the `dev` branch in the branch dropdown menu before continuing to step 4 and tapping on the green Run workflow button:

> ![build app using github actions](img/action-04-build-trio.svg){width="700"}
{align="center"}

#### Refresh, Do Not Repeat

!!! tip "Hit Refresh"
    After you tap the green Run workflow button, *GitHub* can be slow to update.

    * Refresh the browser if you are unsure if the action started
    * Do not start a new action until the first one completes

- - -

## Update Build Errors

Read the **build action annotations** if you see an error. This example is from the past when Push Notifications were added to the `dev` branch.

### Example Error

> ![Trio annotation error for missing identifier update](img/trio-annotation-need-to-run-add-identifiers.png){ width="600", align="center"}

If you decide to look at the action **log**, instead of reading the annotations, you may see an **error** similar to the two graphics below.

> ![Trio log error for missing identifier update](img/trio-log-detail-need-to-run-add-identifiers.png){ width="600", align="center"}

> ![Trio log error for missing identifier update](img/trio-log-real-error-need-to-run-add-identifiers.png){ width="600", align="center"}

### Solution

1. [Update <code>Identifiers</code>](#update-identifiers) - make sure you select `dev` branch
2. [Build the App](#build-the-app) - make sure you select `dev` branch
