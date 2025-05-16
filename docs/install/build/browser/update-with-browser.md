## Update to Trio dev branch from Trio 0.2.x main

!!! important "A Note on Compatibility"
    Upgrading to Trio `v0.5.0` from `0.2.x` is smooth and straightforward. The new Onboarding Wizard will guide you step by step. Your pump, CGM, therapy settings and the last 24 hours of treatment and glucose history will be brought over automatically.

    **Be Aware**
    
    * **Once you have upgraded to `v0.5.0`, going back to `0.2.x` is not supported**.
    * If you choose to downgrade, you will need to set everything up again from scratch.
    
    We have designed this release to be a stable and long-term foundation—so when you are ready, you can upgrade with confidence.

The Browser Build documentation is under construction for versions Trio 0.5.x and newer.

This temporary set of instructions is intended for the subset of users who **previously built Trio 0.2.x using Browser Build**. Because this is aimed at experienced builders, some of the steps are abbreviated and will be expanded as the documents are updated.

> If you are new to Trio - please wait until the documents have been expanded and preferrably until the release of Trio 1.0.

> If you are an experienced Trio 0.2.x user who wants to join the open beta testing, but also wants to switch from Mac-Xcode build to Browser Build - welcome. For the time being, please do this:

> * Use the [0.2.x: Build Trio with *GitHub*](../../../0.2.x/operate/build.md#build-trio-with-github){: target="_blank"} instructions to build Trio 0.2.5 and wait for it to show up in your TestFlight. Do not install it - you just want to make sure you can succeed with a Browser Build.
> * Then return to this page and follow the directions

### Summary of Tasks to Build Trio 0.5.x

These steps assume:

* You previously built Trio 0.2.x using *GitHub* Actions (Browser Build)
* You confirmed your *Apple* Developer license agreements are up to date

These are the new steps for you to follow:

1. [Configure Browser Build Certificate Automation](#browser-build-certificate-automation)
1. [Configure `Fork` with `dev` branch](#configure-fork-with-dev-branch)
1. [Update Identifiers](#update-identifiers)
1. [Update Certificates](#update-certificates)
1. [Build Trio 0.5.x](#build-the-app)

### Browser Build Certificate Automation

Browser Build Certificate Automation was added to Trio 0.2.3 - if you have not added the `ENABLE_NUKE_CERTS` variable, you should add it now. Otherwise, skip ahead to [Configure `Fork` with `dev` branch](#configure-fork-with-dev-branch).

In order to utilize the new automatic certificate renewal feature, you’ll need to add a new Variable.  Variables are located in *GitHub*, in the same location as your Secrets.  The exact location will depend upon whether you build using a *GitHub organization* or a personal account.

If you use a personal account, click on your Trio repository.  If you have other repositories, just follow these same steps for each of them.

If you build using a *GitHub* organization and have already added this variable to your organization - there’s nothing for you to do. All repositories in your organization are covered. Otherwise, click on your organization name.

The numbered steps correspond to numbers in graphics below:

1. Choose settings 
1. Scroll down to select Secret and variables
1. Choose Actions
1. Choose Variable
1. Tap on “Create new organization variable” or “Create new repository variable”
1. Add the variable ENABLE_NUKE CERTS 
1. Add the value true
1. Add Variable.

![add ENABLE_NUKE_CERTS variable](img/add-variable-01.png){ width="800"}
{align="center"}

![add ENABLE_NUKE_CERTS variable](img/add-variable-02.png){ width="600"}
{align="center"}

### Configure `Fork` with `dev` branch

The open beta testing for Trio uses the `dev` branch.

* If you do not have a dev branch you must first configure one following these directions.
* If you already have a `dev` branch, then just update it. 

-<!-- TODO -->
insert instructions here

### Update Identifiers

For Trio 0.5.x and newer, you must have *Apple* Push Notification enabled to build the app. This capability is added to the existing Trio Identifier by running the Action: Add Identifiers after you update your fork.

-<!-- TODO -->
insert instructions here

### Update Certificates

For Trio 0.5.x and newer, you must have *Apple* Push Notification enabled to build the app. After to add this capability is to the Trio Identifier, you must update the Certificate by running the Action: Create Certificates.

-<!-- TODO -->
insert instructions here

### Build the App

If you completed all the steps on this page successfully (got a green checkmark &#x2705;), you are ready to run Action: Build Trio.

-<!-- TODO -->
insert instructions here

## Update Build Errors

The most likely build error is that you did not [Update Identifiers and Certificates](#update-identifiers-and-certificates). In that case, you will see this error in the build action annotations.

#### Error

![Trio annotation error for missing identifier update](img/trio-annotation-need-to-run-add-identifiers.png){ width="600", align="center"}

If you decide to look at the log, instead of reading the annotations, you may see an error similar to the two graphics below.

![Trio log error for missing identifier update](img/trio-log-detail-need-to-run-add-identifiers.png){ width="600", align="center"}

![Trio log error for missing identifier update](img/trio-log-real-error-need-to-run-add-identifiers.png){ width="600", align="center"}

#### Solution

[Update Identifiers and Certificates](#update-identifiers-and-certificates).



