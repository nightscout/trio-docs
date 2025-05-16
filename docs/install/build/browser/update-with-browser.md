## Update to Trio dev branch from Trio 0.2.x main

The Browser Build documentation is under construction for versions Trio 0.5.x and newer.

This temporary set of instructions is intended for the subset of users who **previously built Trio 0.2.x using Browser Build**. Because this is aimed at experienced builders, some of the steps are abbreviated and will be expanded as the documents are updated.

> If you are new to Trio - please wait until the documents have been expanded and preferrably until the release of Trio 1.0.

### Summary of Tasks to Build Trio 0.5.x

These steps assume:

* You previously built Trio 0.2.x using *GitHub* Actions (Browser Build)
* You confirmed your *Apple* Developer license agreements are up to date

These are the new steps for you to follow:

1. [Configure Browser Build Certificate Automation](#browser-build-certificate-automation)
1. [Configure `Fork` with `dev` branch](#configure-fork-with-dev-branch)
1. [Update Identifiers and Certificates](#update-identifiers-and-certificates)
1. [Build Trio 0.5.x](#build-the-app)

### Browser Build Certificate Automation

Browser Build Certificate Automation was added to Trio 0.2.3 - if you have not added the `ENABLE_NUKE_CERTS` variable, you should add it now. Otherwise, skip ahead to [Configure `Fork` with the `dev` branch](#configure-fork-with-the-dev-branch).

-<!-- TODO -->
insert instructions here

### Configure `Fork` with `dev` branch

The open beta testing for Trio uses the `dev` branch.

* If you do not have a dev branch you must first configure one following these directions.
* If you already have a `dev` branch, then just update it. 

-<!-- TODO -->
insert instructions here

### Update Identifiers and Certificates

For Trio 0.5.x and newer, you must have *Apple* Push Notification enabled to build the app. This is accomplished by running the Action: Add Identifiers after you update your fork, followed by the Action: Create Certificates.

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



