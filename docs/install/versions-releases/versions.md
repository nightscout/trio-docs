---
title: Trio Version Updates
description: Overview of Trio automated insulin delivery (AID) versions and OS compatibility.
last_updated: 2025-11-27
---

# Trio Version Updates

This page summarises current recommendations and release history for **Trio**, an open-source automated insulin delivery (AID) system for iOS.

> **Important:** Trio is a community-built DIY system. It is not reviewed or approved by any regulator. Using it is at your own risk and does **not** replace medical advice from your diabetes team.

## Contents

- [About Trio](#about-trio)
- [OS and build environment](#os-and-build-environment)
- [Latest “tested” versions](#latest-tested-versions)
- [Branches and tracks](#branches-and-tracks)
- [Release history](#release-history)
  - [2025 dev / next-gen line (0.5.x–0.6.x)](#2025-dev--next-gen-line-05x06x)
  - [2025 main / 0.2.x maintenance line](#2025-main--02x-maintenance-line)
- [Before you update](#before-you-update)
- [More information & support](#more-information--support)

## About Trio

Trio is an open-source automated insulin delivery (OS-AID) app for iPhone that uses an OpenAPS-derived algorithm to adjust insulin delivery based on your settings, carbohydrate entries and recent insulin activity.

The app is built and maintained by volunteers and must be compiled from source (Mac or browser-based build). Documentation and support are provided by the Trio and Nightscout communities rather than a commercial manufacturer.

> **DIY disclaimer**
>
> - Trio is not a medical product and is not approved by any health authority.  
> - You remain responsible for all treatment decisions.  
> - Discuss any changes in your insulin therapy with your healthcare team.

## OS and build environment

Recommendations here follow community testing (Loop and Learn / Nightscout / TrioDocs) as of **27 November 2025**.

### Recommended iOS, macOS and Xcode

- **iOS**
  - Recommended: **iOS 26.x** (release builds only, *no* Apple betas) for both Loop and Trio.
  - If you are running iOS 26.x, use **Trio 0.6.0.9 or newer** to avoid compatibility and build issues.
- **macOS**
  - Latest tested environment for building current Loop/Trio: **macOS Sequoia 15.2 or newer**.
- **Xcode**
  - Latest tested Xcode: **Xcode 16.4**.

> **Treat your phone like a medical device**
>
> - Turn **off** automatic iOS, macOS and Xcode updates.  
> - Do **not** install beta versions of Apple software on your Trio phone or build Mac.  
> - Update your **Mac and Xcode first**, confirm you can build, and only then move your phone to a new iOS version.

## Latest “tested” versions

The versions of macOS and Xcode you need are based on your phone’s iOS.  
These versions have been tested to operate and build the main and dev branches of Loop, LoopFollow, LoopCaregiver, and Trio.  
Loopers should **not** update to any beta versions.

| Latest tested version of iOS<br>[Release date] | Latest tested version of Xcode<br>[Release date] | Minimum macOS<br>[Release date] |
| --- | --- | --- |
| **iOS 26.1**<br>[3 November 2025]<br>This update turns on Automatic iOS updates. Once your update is complete, please disable Automatic Updates in **Settings → General → Software Update**. | **Xcode 16.4 (16F6)**<br>[28 May 2025] | **macOS Sequoia 15.2 or later**<br>[11 December 2024] |
| **iOS 16.7.7**<br>[21 March 2024]<br>The next Loop / Trio version will require iOS 17 or higher. | **Xcode 14.3**<br>[1 June 2023]<br>15.2 is latest tested version. | **macOS Ventura 13** |


## Branches and tracks

Trio currently uses two main tracks:

- **Main / 0.2.x line**
  - Focus: stable daily-use builds; more conservative feature changes.
  - Tags like `v0.2.8`, `v0.2.6`, etc.
- **Next-gen dev line (0.5.x, 0.6.x)**
  - Focus: redesigned UI, new onboarding, remote commands, next-gen statistics and caregiver tools.
  - Tags like `v0.5.0`, `v0.5.1`, `v0.6.0`.
  - Distributed as **public betas**, aimed at experienced DIY users rather than beginners.

When choosing a version, check which branch you are on (`main` vs `dev`) in GitHub or your build script.

## Release history

> **Note:** This is a high-level overview. Always read the full GitHub release notes before updating.

### 2025 dev / next-gen line (0.5.x–0.6.x)

#### Trio 0.6.0 – Public Beta (October 6–7, 2025)

Focus: **APNS feedback for remote commands, iOS 26 readiness, and many stability fixes.**

- **Remote-command overhaul**
  - Adds an APNS feedback channel for remote commands between LoopFollow and Trio so caregivers can see whether actions were received and applied.
  - **Breaking change:** Trio 0.6.x requires **LoopFollow 4.0+** for remote commands to work.

- **New features**
  - Shows the latest dev build number in Settings when you are running a non-main build.
  - Adds explicit steps in onboarding for enabling Nightscout uploads.
  - Adds a toggle in Shortcuts to indicate when insulin was given outside of the pump (e.g. via pen/syringe).

- **Improvements (selected)**
  - Watch managers skip unnecessary processing when no watch is connected, improving battery and performance.
  - Clearer error messages when glucose values are invalid.
  - AGP chart y-axis tightened for better readability.
  - Disables certain iOS 26 visual effects that interfered with usability.
  - GitHub automation schedule adjusted to avoid busy times and reduce build failures.

- **Bug fixes (selected)**
  - Live Activity: prevents the card from vanishing, fixes the override banner, and respects the “off” toggle.
  - CGM: resolves a race condition between Share and BLE for Dexcom G6; refines glucose backfill behaviour for plugin CGM managers.
  - Watch/background: fixes a Swift 6 background task error and version mismatches between phone and watch apps.
  - Pumps: updates DanaKit and OmniPod modules to handle certain fault and deactivation scenarios more reliably.
  - UI & misc: fixes statistics summaries, localisation issues, decimal separators, accidental taps on suffixes, and updates translations and dependencies.

- **Who should consider 0.6.0?**
  - Users already comfortable running Trio dev builds who:
    - Need iOS 26.x support, **and/or**
    - Rely on LoopFollow remote commands and want feedback about whether commands succeeded.

---

#### Trio 0.5.1 – Public Beta (June 25, 2025)

Focus: **bug fixes, polish, and restoring browser build support.**

- **Browser build restored**
  - Fixes the “Add Identifiers” step so browser builds work again, even if identifiers were partially deleted or already present.

- **Stability & crash fixes**
  - Resolves crashes related to:
    - High temp targets on iOS 17.6.1  
    - Certain glucose-processing paths  
    - Fat-protein unit (FPU) handling  
    - Watch Live Activities.

- **User-experience improvements**
  - Better feedback on authentication failures and error states.
  - Confirmation dialogs and refined behaviour for overrides/temporary adjustments.
  - Larger tap targets for critical buttons and refreshed symbols for expiration timers.
  - Multiple localisation and translation updates.

- **Data & insights**
  - Adds daily glucose percentile charts.
  - Refines logic for backdated carb entries and Dynamic ISF calculations so statistics better reflect real behaviour.

- **Developer / CI**
  - Expands unit-test coverage and runs tests automatically on pull requests.
  - Hardened CI and fastlane scripts for more reliable release workflows.

---

#### Trio 0.5.0 – Public Beta (May 17, 2025)

Focus: **complete redesign and next-generation architecture.**

- **New interface**
  - Fully refreshed UI on both iOS and watchOS, designed to be clearer and easier to navigate.

- **Guided onboarding**
  - A new step-by-step onboarding wizard for new and existing users, including safety checks and better defaults.

- **Rewritten backend**
  - Core logic and data storage reworked for speed, stability and future flexibility.

- **Remote commands & Shortcuts**
  - Support for remote commands and iOS Shortcuts to trigger actions such as carb entry, boluses, overrides and temporary targets via automation or caregiver apps.

- **Settings experience**
  - New Settings layout with guidance sheets, search and clearer explanations of advanced options.

- **Bolus calculator & statistics**
  - Updated bolus calculator with more transparent breakdowns and safety logic.
  - Reworked in-app statistics and graphs to match the new architecture.

- **Upgrade notes**
  - After upgrading from 0.2.x:
    - You must rerun the onboarding wizard.  
    - Pump and CGM pairings are carried over, but algorithm-related settings and some integrations (e.g. Nightscout) are reset.  
    - Downgrading back to 0.2.x requires a clean setup.
  - Intended primarily for **experienced Trio / DIY AID users**, not brand-new pump users.

---

### 2025 main / 0.2.x maintenance line

These releases keep the long-standing 0.2.x branch current, especially for browser builders and users who are not yet ready for the 0.5.x/0.6.x beta line.

#### Trio 0.2.8 (July 7, 2025)

- Fixes an insulin-accounting error when an OmniPod faults during a bolus, ensuring total insulin is calculated correctly in that scenario.
- Includes related OmniBLE and OmniKit updates aligned with the fix.

#### Trio 0.2.6 (June 5, 2025)

- Improves CI robustness by checking `alive-main` and `alive-dev` branches independently in `build_trio.yml`.
- Updates CODEOWNERS to simplify ownership and maintenance metadata (no user-visible algorithm changes).

#### Trio 0.2.5 (April 22, 2025)

- Hotfix to keep **browser builds working** after GitHub removed a keep-alive workflow many projects used.
- Adjusts the GitHub Actions workflow so builds continue to succeed while a longer-term solution is developed.

#### Trio 0.2.4 (April 18, 2025)

- **Pump managers**
  - Improves OmniPod communications so suspended pods are detected more accurately.
  - Fixes Medtronic temporary basal rounding to valid increments, avoiding duplicate or invalid commands.

- **Dexcom G7**
  - Enhances detection of true session end vs communication issues, reducing the chance that an active sensor is misread as “ended” and stuck in scan mode.

- **Browser build tooling**
  - Updates macOS/Xcode versions used in CI to align with upcoming Apple platform requirements.
  - Adds support for simple patch files in browser builds, making customisation easier.

#### Trio 0.2.3 (January 28, 2025)

- Automates renewal and creation of distribution certificates and provisioning profiles during browser builds, greatly reducing the risk of certificate expiry breaking builds.
- Pulls in a large set of OmniBLE/OmniKit fixes that improve pump communication stability and fault prevention.
- Cleans up GitHub issue workflows and documentation, including a minor README link fix.

## Before you update

A few practical checks before jumping to a new Trio version:

1. **Confirm tested combos**  
   Check current guidance from Loop and Learn’s *Version Updates* page and TrioDocs for the iOS / Xcode / macOS versions that have been tested with your target Trio release.

2. **Read the full release notes**  
   Pay attention to breaking changes (for example, remote-command requirements in 0.6.0) and any upgrade instructions.

3. **Back up your settings**  
   Screenshot basal rates, carb ratios, correction factors and other key parameters before you change versions.

4. **Plan for onboarding time**  
   Major jumps (0.2.x → 0.5.x/0.6.x) require re-running the onboarding wizard and re-checking safety-critical settings.

5. **Coordinate with caregivers**  
   If you use LoopFollow or other remote-monitoring tools, ensure matching versions so commands and notifications continue to work.

## More information & support

- **Official Trio docs:** <https://triodocs.org>  
- **Trio GitHub releases:** <https://github.com/nightscout/Trio/releases>  
- **Loop and Learn version guidance:** <https://www.loopnlearn.org/version-updates/>  
- **Community help:** Trio Discord, Facebook groups and Loop & Learn resources for build and troubleshooting support.
